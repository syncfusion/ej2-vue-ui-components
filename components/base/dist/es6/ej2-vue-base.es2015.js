import Vue from 'vue';
import { createElement, detach, extend, getTemplateEngine, getUniqueID, getValue, isNullOrUndefined, setTemplateEngine } from '@syncfusion/ej2-base';

/**
 * Vue Component Base
 */
class ComponentBase extends Vue {
    constructor() {
        super(...arguments);
        this.hasInjectedModules = false;
        this.hasChildDirective = false;
        this.childDirObjects = '';
    }
    created() {
        for (let prop of this.propKeys) {
            this.ej2Instances.addEventListener(prop, (args) => {
                this.$emit(prop, args);
            });
        }
    }
    mounted() {
        this.ej2Instances.isVue = true;
        this.$el.style.visibility = '';
        this.ej2Instances.appendTo(this.$el);
    }
    getInjectedServices() {
        let ret = [];
        let provide = getValue('$vnode.context.$options.provide', this);
        if (provide) {
            // tslint:disable:no-any
            let injectables = provide;
            if (typeof provide === 'function') {
                // tslint:disable:no-any
                injectables = this.$vnode.context.$options.provide();
            }
            ret = injectables[this.ej2Instances.getModuleName()] || [];
        }
        return ret;
    }
    updated() {
        if (this.hasChildDirective) {
            let childKey = {};
            this.fetchChildPropValues(childKey);
            let curChildDir = JSON.stringify(childKey);
            if (this.childDirObjects !== curChildDir) {
                this.childDirObjects = curChildDir;
                this.assignValueToWrapper(childKey, false);
            }
        }
    }
    beforeDestroy() {
        this.ej2Instances.destroy();
        this.$el.style.visibility = 'hidden';
    }
    bindProperties() {
        let options = {};
        for (let prop of this.propKeys) {
            if (!isNullOrUndefined(this[prop])) {
                options[prop] = this[prop];
            }
        }
        if (this.hasChildDirective) {
            this.fetchChildPropValues(options);
        }
        if (this.hasInjectedModules) {
            let prevModule = this.getInjectedServices() || [];
            let curModule = this.ej2Instances.getInjectedModules() || [];
            for (let mod of curModule) {
                if (prevModule.indexOf(mod) === -1) {
                    prevModule.push(mod);
                }
            }
            this.ej2Instances.injectedModules = prevModule;
        }
        this.assignValueToWrapper(options);
    }
    assignValueToWrapper(option, silent) {
        this.ej2Instances.setProperties(extend({}, {}, option, true), isNullOrUndefined(silent) ? true : silent);
    }
    fetchChildPropValues(childOption) {
        let dirProps = this.getDirectiveValues(this.$slots.default, this.tagMapper || {}, this.tagNameMapper || {});
        if (!this.childDirObjects) {
            this.childDirObjects = JSON.stringify(dirProps);
        }
        for (let dirProp of Object.keys(dirProps)) {
            childOption[dirProp] = dirProps[dirProp];
        }
    }
    getDirectiveValues(tagDirectives, tagMapper, tagNameMapper) {
        let keyTags = Object.keys(tagMapper);
        let dir = {};
        if (tagDirectives) {
            for (let tagDirective of tagDirectives) {
                if (tagDirective.componentOptions && tagDirective.componentOptions.children && tagDirective.componentOptions.tag) {
                    let dirTag = tagDirective.componentOptions.tag;
                    if (keyTags.indexOf(dirTag) !== -1) {
                        let tagName = tagNameMapper[dirTag] ? tagNameMapper[dirTag] : dirTag;
                        dir[tagName.replace('e-', '')] = [];
                        for (let tagDirChild of tagDirective.componentOptions.children) {
                            let retObj = this.getVNodeValue(tagDirChild, tagMapper[dirTag], tagNameMapper);
                            if (Object.keys(retObj).length !== 0) {
                                dir[tagName.replace('e-', '')].push(retObj);
                            }
                        }
                    }
                }
            }
        }
        return dir;
    }
    getMultiLevelDirValue(tagDirectories, tagKey, tagNameMapper) {
        let mulObj = {};
        for (let tagDir of tagDirectories) {
            if (tagDir.componentOptions) {
                let key = tagDir.componentOptions.tag;
                let tagName = tagNameMapper[key] ? tagNameMapper[key] : key;
                mulObj[tagName.replace('e-', '')] = [];
                if (tagDir.componentOptions && tagDir.componentOptions.children) {
                    for (let tagDirChild of tagDir.componentOptions.children) {
                        let mulLevObj = this.getVNodeValue(tagDirChild, tagKey[key], tagNameMapper);
                        if (Object.keys(mulLevObj).length !== 0) {
                            mulObj[tagName.replace('e-', '')].push(mulLevObj);
                        }
                    }
                }
            }
        }
        return mulObj;
    }
    getVNodeValue(tagDirective, tagKey, tagNameMapper) {
        let ret = {};
        if (tagDirective.componentOptions) {
            let dirTag = tagDirective.componentOptions.tag;
            if (typeof tagKey === 'string' && dirTag === tagKey && tagDirective.data && tagDirective.data.attrs) {
                ret = this.getCamelCaseProps(tagDirective.data.attrs);
            }
            else if (typeof tagKey === 'object') {
                if (tagDirective.componentOptions.children && (Object.keys(tagKey).indexOf(dirTag) !== -1)) {
                    ret = this.getMultiLevelDirValue(tagDirective.componentOptions.children, tagKey[dirTag], tagNameMapper);
                }
                if (tagDirective.data && tagDirective.data.attrs) {
                    ret = extend(ret, this.getCamelCaseProps(tagDirective.data.attrs));
                }
            }
        }
        return ret;
    }
    /**
     * convert kebab case directive props to camel case
     */
    getCamelCaseProps(props) {
        let retProps = {};
        for (let prop of Object.keys(props)) {
            retProps[prop.replace(/-[a-z]/g, (e) => { return e[1].toUpperCase(); })] = props[prop];
        }
        return retProps;
    }
    dataBind() {
        this.ej2Instances.dataBind();
    }
    setProperties(arg, muteOnChange) {
        return this.ej2Instances.setProperties(arg, muteOnChange);
    }
}

/**
 * Vue Component Base
 */
let $internalHooks = [
    'data',
    'beforeCreate',
    'created',
    'beforeMount',
    'mounted',
    'beforeDestroy',
    'destroyed',
    'beforeUpdate',
    'updated',
    'activated',
    'deactivated',
    'render',
    'errorCaptured' // 2.5
];
function EJComponentDecorator(options) {
    return function (Component) {
        return EJcomponentFactory(Component, options);
    };
}
function EJcomponentFactory(Component, options = {}) {
    options.name = options.name || Component._componentTag || Component.name;
    // prototype props.
    const proto = Component.prototype;
    if (options.props) {
        for (let prop of options.props) {
            (options.props || (options.props = {}))[prop] = {};
            (options.watch || (options.watch = {}))[prop] = function (newVal) {
                this.ej2Instances[prop] = newVal;
            };
        }
    }
    Object.getOwnPropertyNames(proto).forEach(function (key) {
        // hooks
        if (key === 'constructor') {
            return;
        }
        if ($internalHooks.indexOf(key) > -1) {
            options[key] = proto[key];
            return;
        }
        const descriptor = Object.getOwnPropertyDescriptor(proto, key);
        if (typeof descriptor.value === 'function') {
            // methods
            (options.methods || (options.methods = {}))[key] = descriptor.value;
        }
        else if (descriptor.get || descriptor.set) {
            // computed properties
            (options.computed || (options.computed = {}))[key] = {
                get: descriptor.get,
                set: descriptor.set
            };
        }
    });
    Object.getOwnPropertyNames(ComponentBase.prototype).forEach(function (key) {
        if ($internalHooks.indexOf(key) > -1) {
            options[key] = proto[key];
            return;
        }
    });
    (options.mixins || (options.mixins = [])).push({
        data() {
            return collectDataFromConstructor(this, Component);
        }
    });
    //  decorate options
    const decorators = Component.__decorators__;
    if (decorators) {
        decorators.forEach(Function(options));
        delete Component.__decorators__;
    }
    // find super
    const superProto = Object.getPrototypeOf(Component.prototype);
    const Super = superProto instanceof Vue
        ? superProto.constructor
        : Vue;
    const Extended = Super.extend(options);
    return Extended;
}
function collectDataFromConstructor(vm, Component) {
    Component.prototype._init = function () {
        var _this = this;
        var keys = Object.getOwnPropertyNames(vm);
        if (vm.$options.props) {
            for (var key in vm.$options.props) {
                if (!vm.hasOwnProperty(key)) {
                    keys.push(key);
                }
            }
        }
        keys.forEach(function (key) {
            if (key.charAt(0) !== '_') {
                Object.defineProperty(_this, key, {
                    get: function () { return vm[key]; },
                    set: function (value) { return vm[key] = value; }
                });
            }
        });
    };
    var data = new Component();
    var plainData = {};
    Object.keys(data).forEach(function (key) {
        if (data[key] !== undefined) {
            plainData[key] = data[key];
        }
    });
    return plainData;
}

// tslint:disable:no-any
let stringCompiler = getTemplateEngine();
function compile(templateElement, helper) {
    let that = this;
    if (typeof templateElement === 'string') {
        return stringCompiler(templateElement, helper);
    }
    else {
        return (data) => {
            let pid = getUniqueID('templateParentDiv');
            let id = getUniqueID('templateDiv');
            let ele = createElement('div', { id: pid, innerHTML: '<div id="' + id + '"></div>' });
            document.body.appendChild(ele);
            let tempObj = templateElement.call(that, {});
            let templateVue = new Vue(tempObj.template);
            templateVue.$data.data = extend(tempObj.data, data);
            templateVue.$mount('#' + id);
            let returnEle = ele.childNodes;
            detach(ele);
            return returnEle;
        };
    }
}
setTemplateEngine({ compile: compile });

/**
 * index for component base
 */

export { ComponentBase, $internalHooks, EJComponentDecorator, EJcomponentFactory, compile };
//# sourceMappingURL=ej2-vue-base.es2015.js.map
