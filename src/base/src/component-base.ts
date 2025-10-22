/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Vue Component Base
 */
import * as Vue from 'vue';
import { isNullOrUndefined, extend, getValue, setProxyToRaw } from '@syncfusion/ej2-base';

/**
 * Clone the Vue compiler instance.
 *
 * @param {any} obj - representes the Vue compiler.
 * @returns {any} cloned object of Vue compiler.
 */
function _interopRequireWildcard(obj: any): any { if (obj && obj.__esModule) { return obj; } else { const newObj: any = {}; if (obj != null) { for (const key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[`${key}`] = obj[`${key}`]; } } } newObj.default = obj; return newObj; } }

const curVue: any = _interopRequireWildcard(Vue);
export const isExecute: boolean = (parseInt(curVue['version'], 10) > 2) ? false : true;
export const aVue: any = !isExecute ? curVue : (curVue['default']['default'] ? curVue['default']['default'] : curVue['default']);
export const gh: any = curVue['h'];

export const vueDefineComponent: Function = (options: Object): any => { return !isExecute ? aVue['defineComponent'](options) : aVue['extend'](options); };

type ComponentBaseType = {
    getInjectedServices(): Object[];
    updated(): void;
    bindProperties(): void;
    assignValueToWrapper(option: Object, silent?: boolean): void;
    fetchChildPropValues(childOption: Object): void;
    getDirectiveValues(tagDirectives: any, tagMapper: {
        [key: string]: Object;
    }, tagNameMapper: Object): Object;
    getMultiLevelDirValue(tagDirectories: any, tagKey: string | Object, tagNameMapper: Object): Object;
    getVNodeValue(tagDirective: any, tagKey: string | Object, tagNameMapper: Object): Object;
    /**
     * convert kebab case directive props to camel case
     */
    getCamelCaseProps(props: Object): Object;
    dataBind(): void;
}

export const ComponentBase: ComponentBaseType = vueDefineComponent({
    name: 'ComponentBase',
    data(): Object {
        return {
            tagMapper: {} as any,
            tagNameMapper: {} as any,
            hasInjectedModules: false as boolean,
            hasChildDirective: false as boolean,
            childDirObjects: '' as string,
            propKeys: {} as any,
            isDecorator: false as boolean
        };
    },
    created(): void {
        if (this.ej2Instance) {
            this.ej2Instances = this.isVue3 ? aVue.toRaw(this.ej2Instance) : this.ej2Instance;
        }
        if (!this.propKeys) {
            return;
        }
        for (const prop of this.propKeys) {
            this.ej2Instances.addEventListener(prop, (args: object) => {
                this.$emit(prop, args);
            });
        }
        const injectables: any = getValue('$root.$options.provide', this);
        let vueInjectables: any = getValue('$parent.$options.provide', this);
        vueInjectables = !isNullOrUndefined(vueInjectables) ? vueInjectables : getValue('$.parent.provides', this);
        if (this.hasInjectedModules && !isExecute) {
            let prevModule: Object[] = [];
            if (injectables && injectables.managed) {
                this.isDecorator = true;
                prevModule = this.getInjectedServices() || [];
            } else if (injectables) {
                prevModule = injectables[this.ej2Instances.getModuleName()] || [];
            } else if (vueInjectables) {
                prevModule = this.getInjectedServices() || [];
            }
            const curModule: Object[] = this.ej2Instances.getInjectedModules() || [];
            for (const mod of curModule) {
                if (prevModule.indexOf(mod) === -1) {
                    prevModule.push(mod);
                }
            }
            this.ej2Instances.injectedModules = prevModule;
        }
    },
    mounted(): void {
        const cusEle: any = this.$el ? this.$el.querySelectorAll('div.e-directive') : null;
        if (!isExecute && cusEle) {
            for (let i: number = 0; i < cusEle.length; i++) {
                const cusElement: HTMLElement = cusEle[parseInt(i.toString(), 10)];
                if (cusElement.parentElement) { cusElement.parentElement.removeChild(cusElement); }
            }
        }
        this.ej2Instances.isVue = true;
        this.ej2Instances.isVue3 = this.isVue3;
        this.ej2Instances.vueInstance = this;
        if (this.isVue3) {
            this.ej2Instances.ej2Instances = this.ej2Instances;
            this.ej2Instances.referModels = this.models;
            this.setModelValue();
        }
        this.ej2Instances.appendTo(this.$el);
    },
    updated(): void {
        this.updated();
    },
    beforeDestroy(): void {
        this.destroyComponent();
    },
    beforeUnmount(): void {
        this.destroyComponent();
    },
    methods: {
        setModelValue(): void {
            if (!isNullOrUndefined(this.modelValue) || !isNullOrUndefined(this.$attrs.modelValue)) {
                const key: string[] = this.models.toString().match(/checked|value/) || [];
                const propKey: string = key[0];
                if (!isNullOrUndefined(propKey)) {
                    this.ej2Instances[`${propKey}`] = !isNullOrUndefined(this.modelValue) ? this.modelValue : this.$attrs.modelValue;
                }
            }
        },
        updated(): void {
            if (this.isVue3) {
                this.setModelValue();
            }
            if (this.hasChildDirective) {
                const childKey: Object = {};
                this.fetchChildPropValues(childKey);
                const curChildDir: string = JSON.stringify(childKey);
                if (this.childDirObjects !== curChildDir) {
                    this.childDirObjects = curChildDir;
                    this.assignValueToWrapper(childKey, false);
                }
            }
        },
        getInjectedServices(): Object[] {
            let ret: Object[] = []; let provide: any;
            if (this.$root && this.isDecorator) {
                provide = getValue('$root.$options.provide', this);
            } else if (this.$vnode) {
                provide = getValue('$vnode.context.$options.provide', this);
            } else if (this.$parent) {
                provide = getValue('$parent.$options.provide', this);
            }
            if (isNullOrUndefined(provide) && !isNullOrUndefined(this.$)) {
                provide = getValue('$.parent.provides', this);
            }
            if (provide) {
                let injectables: any = provide;
                if (typeof provide === 'function') {
                    if (provide.managed) {
                        const pKey: Object = provide.managed;
                        const pValue: string[] = Object.keys(pKey);
                        let key: string[];
                        if (this.$root && this.isDecorator) {
                            key = Object.keys(this.$root);
                        } else if (this.$vnode) {
                            key = Object.keys(this.$vnode.context);
                        } else if (this.$parent) {
                            key = Object.keys(this.$parent);
                        }
                        for (let i: number = 0; i < pValue.length; i++) {
                            for (let j: number = 0; j < key.length; j++) {
                                if ((key[parseInt(j.toString(), 10)].indexOf(pValue[parseInt(i.toString(), 10)])) !== -1) {
                                    if (this.$root && this.isDecorator) {
                                        pKey[pValue[parseInt(j.toString(), 10)]] = this.$root[key[parseInt(i.toString(), 10)]];
                                    } else if (this.$vnode) {
                                        pKey[pValue[parseInt(i.toString(), 10)]] = this.$vnode.context[key[parseInt(j.toString(), 10)]];
                                    } else if (this.$parent) {
                                        pKey[pValue[parseInt(i.toString(), 10)]] = this.$parent[key[parseInt(j.toString(), 10)]];
                                    }
                                    injectables = pKey;
                                }
                            }
                        }
                    }
                    else if (this.$vnode) {
                        injectables = this.$vnode.context.$options.provide();
                    } else if (this.$parent) {
                        injectables = this.$parent.$options.provide();
                    }
                }
                ret = injectables[this.ej2Instances.getModuleName()] || [];
            }
            this.isDecorator = false;
            return ret;
        },
        destroyComponent(): void {
            this.ej2Instances.destroy();
            (this.$el as any).style.visibility = 'hidden';
            this.clearTemplate();
        },
        destroyPortals(element?: any): void {
            if (element) {
                const destroy: any = getValue('__vue__.$destroy', element);
                if (destroy) {
                    element.__vue__.$destroy();
                } else if (!isExecute && element._vnode) {
                    try { aVue.render(null, element); }
                    catch (e) { /* Handle error */ }
                }
                if (element.innerHTML) {
                    element.innerHTML = '';
                }
            }
        },
        bindProperties(): void {
            const options: Object = {};
            for (const prop of this.propKeys) {
                if (!isNullOrUndefined(this[`${prop}`])) {
                    options[`${prop}`] = this[`${prop}`];
                }
                else if (this[0] && !isNullOrUndefined(this[0][0]) && !isNullOrUndefined(this[0][0][`${prop}`])) {
                    options[`${prop}`] = this[0][0][`${prop}`];
                }
            }
            if (this.hasChildDirective) {
                this.fetchChildPropValues(options);
            }
            if (this.hasInjectedModules) {

                const prevModule: Object[] = this.getInjectedServices() || [];
                const curModule: Object[] = this.ej2Instances.getInjectedModules() || [];
                for (const mod of curModule) {
                    if (prevModule.indexOf(mod) === -1) {
                        prevModule.push(mod);
                    }
                }
                this.ej2Instances.injectedModules = prevModule;
            }
            this.assignValueToWrapper(options);
        },
        assignValueToWrapper(option: Object, silent?: boolean): void {
            this.ej2Instances.setProperties(extend({}, {}, option, true), isNullOrUndefined(silent as any) ? true : silent);
        },
        fetchChildPropValues(childOption: Object): void {
            let dirProps: Object = {};
            if (!this.isVue3) {
                dirProps = this.getDirectiveValues(this.$slots.default, this.tagMapper || {}, this.tagNameMapper || {});
            } else {
                let propRef: any;
                if (this[0] && this[0][1].slots.default) {
                    propRef = this[0][1].slots.default();
                }
                else if (this && this.$ && this.$.slots && this.$.slots.default) {
                    propRef = this.$.slots.default();
                }
                if (propRef) {
                    for (let i: number = 0; i < propRef.length; i++) {
                        if (propRef[parseInt(i.toString(), 10)].type.methods || propRef[parseInt(i.toString(), 10)].type === 'e-seriescollection') {
                            const key: string = propRef[parseInt(i.toString(), 10)].type === 'e-seriescollection' ? 'series-collection' :
                                propRef[parseInt(i.toString(), 10)].type.methods.getTag().replace('e-', '');
                            const ref: any = this.resolveArrayDirectives(propRef[parseInt(i.toString(), 10)].children, key);
                            const spKeys: any = key.split('-');
                            const controlName: string = this.ej2Instances.getModuleName().toLowerCase();
                            let keyRef: string = (spKeys.length > 1 && controlName.indexOf(spKeys[0]) > -1) ? spKeys[1] : spKeys[0];
                            keyRef = keyRef.replace(controlName, '');
                            keyRef = this.tagNameMapper['e-' + key] ? this.tagNameMapper['e-' + key].replace('e-', '') : keyRef;
                            if (controlName === 'splitter' && keyRef === 'panes') {
                                keyRef = 'paneSettings';
                            } else if (controlName === 'bulletchart' && keyRef === 'range') {
                                keyRef = 'ranges';
                            } else if (controlName === 'schedule' && keyRef === 'header') {
                                keyRef = 'headerRows';
                            }
                            dirProps[`${keyRef}`] = ref[`${key}`];
                        }
                    }
                } else {
                    return;
                }
            }
            if (!this.childDirObjects) {
                this.childDirObjects = JSON.stringify(dirProps);
            }
            for (const dirProp of Object.keys(dirProps)) {
                childOption[`${dirProp}`] = dirProps[`${dirProp}`];
            }
        },
        resolveArrayDirectives(slots: any, tagName: any): any {
            let slot: any = [];
            let innerDirValues: any;
            slot = slots.default ? slots.default() : slots;
            slot = slot.flatMap((item: any) => Array.isArray(item.children) ? item.children : item);
            const items: any = {};
            items[`${tagName}`] = [];
            for (const childSlot of slot) {
                let tempObj: any = {};
                const tagRef: any = childSlot.type.methods ? childSlot.type.methods.getTag() : tagName;
                if (childSlot.children) {
                    let key: string;
                    innerDirValues = this.resolveComplexDirs(childSlot.children, this.tagMapper['e-' + tagName], tagRef);
                    if (innerDirValues.length) {
                        tempObj = innerDirValues;
                    } else {
                        for (let i: number = 0; i < Object.keys(innerDirValues).length; i++) {
                            key = Object.keys(innerDirValues)[parseInt(i.toString(), 10)];
                            tempObj[`${key}`] = innerDirValues[`${key}`];
                        }
                    }
                }
                if (childSlot.props) {
                    Object.keys(childSlot.props).forEach((key: string) => {
                        const propName: string = key.replace(/-[a-z]/g, (e: any) => { return e[1].toUpperCase(); });
                        if (propName) {
                            tempObj[`${propName}`] = childSlot.props[`${key}`];
                        }
                    });
                }
                if (((/[s]\b/).test(tagRef) && innerDirValues) && (!(/[s]\b/).test(tagName) || innerDirValues.length)) {
                    if (Array.isArray(tempObj)) { tempObj.forEach((item: any) => { items[`${tagName}`].push(item); }); } else { items[`${tagName}`].push(tempObj); }
                }
                else if (tempObj && Object.keys(tempObj).length !== 0) {
                    items[`${tagName}`].push(tempObj);
                }
            }
            return items;
        },
        resolveComplexDirs(slots: any, tagObject: any, tagName: string): any {
            let slot: any = [];
            let innerDirValues: any;
            slot = slots.default ? slots.default() : slots;
            let items: any = {};
            for (const childSlot of slot) {
                let tagRef: any;
                let tag: any;
                if (tagObject[`${tagName}`]) {
                    tagRef = Object.keys(tagObject[`${tagName}`]);
                    tag = tagRef.find(
                        (key: any) =>
                            tagObject[`${tagName}`][`${key}`] ===
                        childSlot.type.methods.getTag().replace(/[s]\b/, '')
                    );
                    tag = tag ? tag : childSlot.type.methods.getTag();
                    tag = (this.tagNameMapper[`${tag}`] ? this.tagNameMapper[`${tag}`] : tag).replace('e-', '');
                    if (this.ej2Instances.getModuleName().toLowerCase() === 'diagram' && tag.indexOf('annotations') !== -1) {
                        tag = 'annotations';
                    }
                }
                if (childSlot.children) {
                    innerDirValues = this.resolveComplexInnerDirs(childSlot.children, tagObject[`${tagName}`], childSlot.type.methods.getTag());
                    if (!items[`${tag}`]) {
                        items[`${tag}`] = [];
                    }
                    if (innerDirValues.length > 1) {
                        items[`${tag}`] = innerDirValues;
                    } else {
                        items[`${tag}`].push(innerDirValues);
                    }
                }
                if (childSlot.props) {
                    childSlot.props = this.getCamelCaseProps(childSlot.props);
                }
                if (slot.length > 1) {
                    items = Object.keys(items).length === 0 && !items.length ? [] : items;
                    if (childSlot.props) { items.push(childSlot.props); }
                }
                else {
                    items = childSlot.props ? (<any>Object).assign(items, childSlot.props) : items;
                }
            }
            return items;
        },
        resolveComplexInnerDirs(slots: any, tagObject: any, tagName: string): any {
            let slot: any = [];
            slot = slots.default ? slots.default() : slots;
            let items: any = slot.length > 1 ? [] : {};
            for (const childSlot of slot) {
                let innerDirValues: any = null;
                let tag: string = childSlot.type.methods.getTag();
                tag = (this.tagNameMapper[`${tag}`] ? this.tagNameMapper[`${tag}`] : tag).replace('e-', '');
                if (childSlot.children) {
                    innerDirValues = this.resolveMultilevelComplexInnerDirs(childSlot.children, tagObject[`${tagName}`], childSlot.type.methods.getTag());
                    if ((/[s]\b/).test(tag) || slot.length > 1) {
                        if ((/[s]\b/).test(tag)) {
                            items[`${tag}`] = !items[`${tag}`] ? [] : items[`${tag}`];
                            if (innerDirValues.length) {
                                items[`${tag}`] = innerDirValues;
                            } else { items[`${tag}`].push(innerDirValues); }
                        } else if (innerDirValues && !childSlot.props) {
                            items.push(innerDirValues);
                        }
                    } else {
                        items = innerDirValues ? innerDirValues : items;
                    }
                }
                if (childSlot.props) {
                    childSlot.props = this.getCamelCaseProps(childSlot.props);
                }
                if (slot.length > 1 && childSlot.props) {
                    if (innerDirValues) {
                        innerDirValues = childSlot.props ? (<any>Object).assign(innerDirValues, childSlot.props) : innerDirValues;
                        items.push(innerDirValues);
                    }
                    else if (items.length >= 0) {
                        items.push(childSlot.props);
                    } else {
                        items = childSlot.props ? (<any>Object).assign(items, childSlot.props) : items;
                    }
                } else {
                    items = childSlot.props ? (<any>Object).assign(items, childSlot.props) : items;
                }
            }
            return items;
        },
        resolveMultilevelComplexInnerDirs(slots: any, tagObject: any, tagName: string): any {
            let slot: any = [];
            slot = slots.default ? slots.default() : slots;
            let items: any = slot.length > 1 ? [] : {};
            for (const childSlot of slot) {
                let innerDirValues: any = null;
                let tag: string = childSlot.type.methods.getTag();
                tag = (this.tagNameMapper[`${tag}`] ? this.tagNameMapper[`${tag}`] : tag).replace('e-', '');
                if (childSlot.children) {
                    innerDirValues = this.resolveComplexInnerDirs(childSlot.children, tagObject[`${tagName}`], childSlot.type.methods.getTag());
                }
                if (childSlot.props) {
                    childSlot.props = this.getCamelCaseProps(childSlot.props);
                }
                if ((/[s]\b/).test(tag)) {
                    items[`${tag}`] = !items[`${tag}`] ? [] : items[`${tag}`];
                    if (innerDirValues.length) {
                        items[`${tag}`] = innerDirValues;
                    } else { items[`${tag}`].push(innerDirValues); }
                    if (childSlot.props) { items[`${tag}`].push(childSlot.props); }
                } else {
                    items = innerDirValues;
                    items = childSlot.props ? (<any>Object).assign(items, childSlot.props) : items;
                }
            }
            return items;
        },
        getDirectiveValues(tagDirectives: any, tagMapper: { [key: string]: Object }, tagNameMapper: Object): Object {
            const keyTags: string[] = Object.keys(tagMapper);
            const dir: Object = {};
            if (tagDirectives) {
                for (const tagDirective of tagDirectives) {
                    const tagCompOption: any = tagDirective.componentOptions;
                    if (tagCompOption && tagCompOption.children && this.getTagName(tagCompOption) ||
                    (tagDirective.tag === 'e-seriescollection' && tagDirective.children)) {
                        let dirTag: string = tagCompOption ? this.getTagName(tagCompOption) : tagDirective.tag;
                        dirTag = (dirTag === 'e-seriescollection') ? 'e-seriesCollection' : dirTag;
                        if (keyTags.indexOf(dirTag) !== -1) {
                            const tagName: string = tagNameMapper[`${dirTag}`] ? tagNameMapper[`${dirTag}`] : dirTag;
                            dir[tagName.replace('e-', '')] = [];
                            const children: any = tagCompOption ? tagCompOption.children : tagDirective.children;
                            for (const tagDirChild of children) {
                                const retObj: Object = this.getVNodeValue(tagDirChild, tagMapper[`${dirTag}`], tagNameMapper);
                                if (Object.keys(retObj).length !== 0) {
                                    dir[tagName.replace('e-', '')].push(retObj);
                                }
                            }
                        }
                    }
                }
            }
            return dir;
        },
        getMultiLevelDirValue(tagDirectories: any, tagKey: string | Object, tagNameMapper: Object): Object {
            const mulObj: Object = {};
            for (const tagDir of tagDirectories) {
                let key: string;
                let children: any;
                if (tagDir.componentOptions) {
                    key = this.getTagName(tagDir.componentOptions);
                    if (tagDir.componentOptions.children) {
                        children = tagDir.componentOptions.children;
                    }
                } else if ((tagDir.tag === 'e-markersettings' || tagDir.tag === 'e-markersetting') && tagDir.children) {
                    key = (tagDir.tag === 'e-markersettings') ? 'e-markerSettings' : 'e-markerSetting';
                    children = tagDir.children;
                }
                if (key) {
                    const tagName: string = tagNameMapper[`${key}`] ? tagNameMapper[`${key}`] : key;
                    mulObj[tagName.replace('e-', '')] = [];
                    if (children) {
                        for (const tagDirChild of children) {
                            const mulLevObj: Object = this.getVNodeValue(tagDirChild, tagKey[`${key}`], tagNameMapper);
                            if (Object.keys(mulLevObj).length !== 0) {
                                mulObj[tagName.replace('e-', '')].push(mulLevObj);
                            }
                        }
                    }
                }
            }
            return mulObj;
        },
        getVNodeValue(tagDirective: any, tagKey: string | Object, tagNameMapper: Object): Object {
            let ret: Object = {};
            if (tagDirective.componentOptions || ((tagDirective.tag === 'e-markersettings' || tagDirective.tag === 'e-markersetting') && tagDirective.context)) {
                let dirTag: string;
                if (tagDirective.componentOptions) {
                    dirTag = this.getTagName(tagDirective.componentOptions);
                } else {
                    dirTag = (tagDirective.tag === 'e-markersettings') ? 'e-markerSettings' : 'e-markerSetting';
                }
                const tagData: any = tagDirective.data;
                if (typeof tagKey === 'string' && dirTag === tagKey && tagData) {
                    ret = tagData.attrs ? this.getCamelCaseProps(tagData.attrs) : this.getCamelCaseProps(tagData);
                } else if (typeof tagKey === 'object') {
                    if (tagDirective.componentOptions.children && (Object.keys(tagKey).indexOf(dirTag) !== -1)) {
                        ret = this.getMultiLevelDirValue(tagDirective.componentOptions.children, tagKey[`${dirTag}`], tagNameMapper);
                    } else if (tagDirective.children && (Object.keys(tagKey).indexOf(dirTag) !== -1) && (dirTag === 'e-markersettings' || dirTag === 'e-markersetting')) {
                        ret = this.getMultiLevelDirValue(tagDirective.children, tagKey[`${dirTag}`], tagNameMapper);
                    }
                    if (tagData && tagData.attrs) {
                        ret = extend(ret, this.getCamelCaseProps(tagData.attrs));
                    }
                }
            }
            return ret;
        },
        /**
         * convert kebab case directive props to camel case.
         *
         * @param {Object} props - Objects in kebab case directive props.
         * @returns {Object} Object converted into camel case directive props.
         */
        getCamelCaseProps(props: Object): Object {
            const retProps: Object = {};
            for (const prop of Object.keys(props)) {
                retProps[prop.replace(/-[a-z]/g, (e: any) => { return e[1].toUpperCase(); })] = props[`${prop}`];
            }
            return retProps;
        },
        dataBind(): void {
            this.ej2Instances.dataBind();
        },
        setProperties(arg: Object, muteOnChange?: boolean): void {
            return this.ej2Instances.setProperties(arg, muteOnChange);
        },
        getTagName(options: any): string | undefined {
            let tag: any = options.tag;
            const optCtor: any = options.Ctor;
            if (!tag && optCtor && optCtor.extendOptions && optCtor.extendOptions.methods && optCtor.extendOptions.methods.getTag) {
                tag = options.Ctor.extendOptions.methods.getTag();
            }
            return tag;
        }
    }
});

/**
 * Collect public property values for the Vue component.
 *
 * @param {any} options - represents props object.
 * @returns {any} array of props object and `watchobject` respectively.
 */
export function getProps(options: any = {}): any {
    if (options.props) {
        for (const prop of options.props) {
            (options.newprops || (options.newprops = {}))[`${prop}`] = {};
            (options.watch || (options.watch = {}))[`${prop}`] = function (newVal: Object): void { // watch it
                this.ej2Instances[`${prop}`] = newVal;
                if (this.dataBind && (options.name !== 'DateRangePickerComponent')) {
                    this.dataBind();
                }
            };
        }
    }
    return [options.newprops, options.watch];
}

if (!isExecute) { setProxyToRaw(aVue.toRaw); }

