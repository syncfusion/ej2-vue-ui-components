import Vue from 'vue';
import { createElement, detach, extend, getTemplateEngine, getUniqueID, getValue, isNullOrUndefined, setTemplateEngine } from '@syncfusion/ej2-base';

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Vue Component Base
 */
var ComponentBase = /** @__PURE__ @class */ (function (_super) {
    __extends(ComponentBase, _super);
    function ComponentBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hasInjectedModules = false;
        _this.hasChildDirective = false;
        _this.childDirObjects = '';
        return _this;
    }
    ComponentBase.prototype.created = function () {
        var _this = this;
        var _loop_1 = function (prop) {
            this_1.ej2Instances.addEventListener(prop, function (args) {
                _this.$emit(prop, args);
            });
        };
        var this_1 = this;
        for (var _i = 0, _a = this.propKeys; _i < _a.length; _i++) {
            var prop = _a[_i];
            _loop_1(prop);
        }
    };
    ComponentBase.prototype.mounted = function () {
        this.ej2Instances.isVue = true;
        this.ej2Instances.appendTo(this.$el);
    };
    ComponentBase.prototype.getInjectedServices = function () {
        var ret = [];
        var provide = getValue('$vnode.context.$options.provide', this);
        if (provide) {
            // tslint:disable:no-any
            var injectables = provide;
            if (typeof provide === 'function') {
                // tslint:disable:no-any
                injectables = this.$vnode.context.$options.provide();
            }
            ret = injectables[this.ej2Instances.getModuleName()] || [];
        }
        return ret;
    };
    ComponentBase.prototype.updated = function () {
        if (this.hasChildDirective) {
            var childKey = {};
            this.fetchChildPropValues(childKey);
            var curChildDir = JSON.stringify(childKey);
            if (this.childDirObjects !== curChildDir) {
                this.childDirObjects = curChildDir;
                this.assignValueToWrapper(childKey, false);
            }
        }
    };
    ComponentBase.prototype.beforeDestroy = function () {
        this.ej2Instances.destroy();
    };
    ComponentBase.prototype.bindProperties = function () {
        var options = {};
        for (var _i = 0, _a = this.propKeys; _i < _a.length; _i++) {
            var prop = _a[_i];
            if (!isNullOrUndefined(this[prop])) {
                options[prop] = this[prop];
            }
        }
        if (this.hasChildDirective) {
            this.fetchChildPropValues(options);
        }
        if (this.hasInjectedModules) {
            var prevModule = this.getInjectedServices() || [];
            var curModule = this.ej2Instances.getInjectedModules() || [];
            for (var _b = 0, curModule_1 = curModule; _b < curModule_1.length; _b++) {
                var mod = curModule_1[_b];
                if (prevModule.indexOf(mod) === -1) {
                    prevModule.push(mod);
                }
            }
            this.ej2Instances.injectedModules = prevModule;
        }
        this.assignValueToWrapper(options);
    };
    ComponentBase.prototype.assignValueToWrapper = function (option, silent) {
        this.ej2Instances.setProperties(option, isNullOrUndefined(silent) ? true : silent);
    };
    ComponentBase.prototype.fetchChildPropValues = function (childOption) {
        var dirProps = this.getDirectiveValues(this.$slots.default, this.tagMapper || {}, this.tagNameMapper || {});
        if (!this.childDirObjects) {
            this.childDirObjects = JSON.stringify(dirProps);
        }
        for (var _i = 0, _a = Object.keys(dirProps); _i < _a.length; _i++) {
            var dirProp = _a[_i];
            childOption[dirProp] = dirProps[dirProp];
        }
    };
    ComponentBase.prototype.getDirectiveValues = function (tagDirectives, tagMapper, tagNameMapper) {
        var keyTags = Object.keys(tagMapper);
        var dir = {};
        if (tagDirectives) {
            for (var _i = 0, tagDirectives_1 = tagDirectives; _i < tagDirectives_1.length; _i++) {
                var tagDirective = tagDirectives_1[_i];
                if (tagDirective.componentOptions && tagDirective.componentOptions.children && tagDirective.componentOptions.tag) {
                    var dirTag = tagDirective.componentOptions.tag;
                    if (keyTags.indexOf(dirTag) !== -1) {
                        var tagName = tagNameMapper[dirTag] ? tagNameMapper[dirTag] : dirTag;
                        dir[tagName.replace('e-', '')] = [];
                        for (var _a = 0, _b = tagDirective.componentOptions.children; _a < _b.length; _a++) {
                            var tagDirChild = _b[_a];
                            var retObj = this.getVNodeValue(tagDirChild, tagMapper[dirTag], tagNameMapper);
                            if (Object.keys(retObj).length !== 0) {
                                dir[tagName.replace('e-', '')].push(retObj);
                            }
                        }
                    }
                }
            }
        }
        return dir;
    };
    ComponentBase.prototype.getMultiLevelDirValue = function (tagDirectories, tagKey, tagNameMapper) {
        var mulObj = {};
        for (var _i = 0, tagDirectories_1 = tagDirectories; _i < tagDirectories_1.length; _i++) {
            var tagDir = tagDirectories_1[_i];
            if (tagDir.componentOptions) {
                var key = tagDir.componentOptions.tag;
                var tagName = tagNameMapper[key] ? tagNameMapper[key] : key;
                mulObj[tagName.replace('e-', '')] = [];
                if (tagDir.componentOptions && tagDir.componentOptions.children) {
                    for (var _a = 0, _b = tagDir.componentOptions.children; _a < _b.length; _a++) {
                        var tagDirChild = _b[_a];
                        var mulLevObj = this.getVNodeValue(tagDirChild, tagKey[key], tagNameMapper);
                        if (Object.keys(mulLevObj).length !== 0) {
                            mulObj[tagName.replace('e-', '')].push(mulLevObj);
                        }
                    }
                }
            }
        }
        return mulObj;
    };
    ComponentBase.prototype.getVNodeValue = function (tagDirective, tagKey, tagNameMapper) {
        var ret = {};
        if (tagDirective.componentOptions) {
            var dirTag = tagDirective.componentOptions.tag;
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
    };
    /**
     * convert kebab case directive props to camel case
     */
    ComponentBase.prototype.getCamelCaseProps = function (props) {
        var retProps = {};
        for (var _i = 0, _a = Object.keys(props); _i < _a.length; _i++) {
            var prop = _a[_i];
            retProps[prop.replace(/-[a-z]/g, function (e) { return e[1].toUpperCase(); })] = props[prop];
        }
        return retProps;
    };
    ComponentBase.prototype.dataBind = function () {
        this.ej2Instances.dataBind();
    };
    ComponentBase.prototype.setProperties = function (arg, muteOnChange) {
        return this.ej2Instances.setProperties(arg, muteOnChange);
    };
    return ComponentBase;
}(Vue));

/**
 * Vue Component Base
 */
var $internalHooks = [
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
function EJcomponentFactory(Component, options) {
    if (options === void 0) { options = {}; }
    options.name = options.name || Component._componentTag || Component.name;
    // prototype props.
    var proto = Component.prototype;
    if (options.props) {
        var _loop_1 = function (prop) {
            (options.props || (options.props = {}))[prop] = {};
            (options.watch || (options.watch = {}))[prop] = function (newVal) {
                this.ej2Instances[prop] = newVal;
            };
        };
        for (var _i = 0, _a = options.props; _i < _a.length; _i++) {
            var prop = _a[_i];
            _loop_1(prop);
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
        var descriptor = Object.getOwnPropertyDescriptor(proto, key);
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
        data: function () {
            return collectDataFromConstructor(this, Component);
        }
    });
    //  decorate options
    var decorators = Component.__decorators__;
    if (decorators) {
        decorators.forEach(Function(options));
        delete Component.__decorators__;
    }
    // find super
    var superProto = Object.getPrototypeOf(Component.prototype);
    var Super = superProto instanceof Vue
        ? superProto.constructor
        : Vue;
    var Extended = Super.extend(options);
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
var stringCompiler = getTemplateEngine();
function compile(templateElement, helper) {
    var that = this;
    if (typeof templateElement === 'string') {
        return stringCompiler(templateElement, helper);
    }
    else {
        return function (data) {
            var pid = getUniqueID('templateParentDiv');
            var id = getUniqueID('templateDiv');
            var ele = createElement('div', { id: pid, innerHTML: '<div id="' + id + '"></div>' });
            document.body.appendChild(ele);
            var tempObj = templateElement.call(that, {});
            var templateVue = new Vue(tempObj.template);
            templateVue.$data.data = extend(tempObj.data, data);
            templateVue.$mount('#' + id);
            var returnEle = ele.childNodes;
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
//# sourceMappingURL=ej2-vue-base.es5.js.map
