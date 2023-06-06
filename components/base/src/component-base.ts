/**
 * Vue Component Base
 */
import * as Vue from 'vue';
import { isNullOrUndefined, extend, getValue } from '@syncfusion/ej2-base';

function _interopRequireWildcard(obj: any) { if (obj && obj.__esModule) { return obj; } else { let newObj: any = {}; if (obj != null) { for (let key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[`${key}`] = obj[`${key}`]; } } newObj.default = obj; return newObj; } }

const curVue: any = _interopRequireWildcard(Vue);
export const isExecute: boolean = (parseInt(curVue['version']) > 2) ? false : true,
    aVue: any = !isExecute ? curVue : (curVue['default']['default'] ? curVue['default']['default'] : curVue['default']),
    gh: any = curVue['h'];

export let vueDefineComponent = (options: any) => { return !isExecute? aVue['defineComponent'](options) : aVue['extend'](options) };

export let ComponentBase = vueDefineComponent({
    name: 'ComponentBase',
    data() {
        return {
            tagMapper: {} as any,
            tagNameMapper: {} as any,
            hasInjectedModules: false as boolean,
            hasChildDirective: false as boolean,
            childDirObjects: '' as string,
            propKeys: {} as any,
            isDecorator: false as boolean
        }
    },
    created(): void {
        if (this.ej2Instance) {
            this.ej2Instances = this.isVue3 ? aVue.toRaw(this.ej2Instance) : this.ej2Instance;
        }
        if (!this.propKeys) {
            return
        }
        for (let prop of this.propKeys) {
            this.ej2Instances.addEventListener(prop, (args: object) => {
                this.$emit(prop, args);
            });
        }
        let injectables: any = getValue('$root.$options.provide', this);
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
            let curModule: Object[] = this.ej2Instances.getInjectedModules() || [];
            for (let mod of curModule) {
                if (prevModule.indexOf(mod) === -1) {
                    prevModule.push(mod);
                }
            }
            this.ej2Instances.injectedModules = prevModule;
        }
    },
    mounted(): void {
        let cusEle: any = this.$el ? this.$el.querySelectorAll("div.e-directive") : null;
        if (!isExecute && cusEle) {
            for (let i: number = 0; i < cusEle.length; i++) {
                cusEle[parseInt(i.toString(), 10)].parentElement && cusEle[parseInt(i.toString(), 10)].parentElement.removeChild(cusEle[parseInt(i.toString(), 10)]);
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
        if (this.isVue3) {
            this.setModelValue();
        }
        if (this.hasChildDirective) {
            let childKey: Object = {};
            this.fetchChildPropValues(childKey);
            let curChildDir: string = JSON.stringify(childKey);
            if (this.childDirObjects !== curChildDir) {
                this.childDirObjects = curChildDir;
                this.assignValueToWrapper(childKey, false);
            }
        }
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
                let childKey: Object = {};
                this.fetchChildPropValues(childKey);
                let curChildDir: string = JSON.stringify(childKey);
                if (this.childDirObjects !== curChildDir) {
                    this.childDirObjects = curChildDir;
                    this.assignValueToWrapper(childKey, false);
                }
            }
        },
        getInjectedServices(): Object[] {
            let ret = []; let provide: any;
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
                // tslint:disable:no-any
                let injectables: any = provide;
                if (typeof provide === 'function') {
                    if (provide.managed) {
                        let provideKey: Object = provide.managed;
                        let provideValue: string[] = Object.keys(provideKey);
                        let key: string[];
                        if (this.$root && this.isDecorator) {
                            key = Object.keys(this.$root);
                        } else if (this.$vnode) {
                            key = Object.keys(this.$vnode.context);
                        } else if (this.$parent) {
                            key = Object.keys(this.$parent);
                        }
                        for (let i: number = 0; i < provideValue.length; i++) {
                            for (let j: number = 0; j < key.length; j++) {
                                if ((key[parseInt(j.toString(), 10)].indexOf(provideValue[parseInt(i.toString(), 10)])) !== -1) {
                                    if (this.$root && this.isDecorator) {
                                        provideKey[provideValue[parseInt(j.toString(), 10)]] = this.$root[key[parseInt(i.toString(), 10)]];
                                    } else if (this.$vnode) {
                                        provideKey[provideValue[parseInt(i.toString(), 10)]] = this.$vnode.context[key[parseInt(j.toString(), 10)]];
                                    } else if (this.$parent) {
                                        provideKey[provideValue[parseInt(i.toString(), 10)]] = this.$parent[key[parseInt(j.toString(), 10)]];
                                    }
                                    injectables = provideKey;
                                }
                            }
                        }  
                    }
                    // tslint:disable:no-any
                    else if (this.$vnode) {
                        injectables = this.$vnode.context.$options.provide();
                    } else if(this.$parent) {
                        injectables = this.$parent.$options.provide();
                    }
                }
                ret = injectables[this.ej2Instances.getModuleName()] || [];
            }
            this.isDecorator = false;
            return ret; 
        },
        destroyComponent(): void {
            let tempBeforeDestroyThis: any = this;
            tempBeforeDestroyThis.ej2Instances.destroy();
            (tempBeforeDestroyThis.$el as any).style.visibility = 'hidden';
            tempBeforeDestroyThis = null;
        },
        bindProperties(): void {
            let options: Object = {};
            for (let prop of this.propKeys) {
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

                let prevModule: Object[] = this.getInjectedServices() || [];
                let curModule: Object[] = this.ej2Instances.getInjectedModules() || [];
                for (let mod of curModule) {
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
            if(!this.isVue3) {
                dirProps = this.getDirectiveValues( this.$slots.default, this.tagMapper || {}, this.tagNameMapper || {});
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
                            let key: string = propRef[parseInt(i.toString(), 10)].type === 'e-seriescollection' ? 'series-collection' : 
                            propRef[parseInt(i.toString(), 10)].type.methods.getTag().replace("e-", "");
                            let ref: any = this.resolveArrayDirectives(propRef[parseInt(i.toString(), 10)].children,key);
                            let splitKeys: any = key.split('-');
                            let controlName: string = this.ej2Instances.getModuleName().toLowerCase();
                            let keyRef: string = (splitKeys.length > 1 && controlName.indexOf(splitKeys[0])>-1) ? splitKeys[1]: splitKeys[0];
                            keyRef = keyRef.replace(controlName,'');
                            if (controlName == "splitter" && keyRef == "panes") {
                                keyRef = "paneSettings"
                            } else if (controlName == "bulletchart" && keyRef == "range") {
                                keyRef = "ranges";
                            } else if (controlName == "schedule" && keyRef == "header") {
                                keyRef = "headerRows";
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
            for (let dirProp of Object.keys(dirProps)) {
                childOption[`${dirProp}`] = dirProps[`${dirProp}`];
            }
        },
        resolveArrayDirectives(slots: any, tagName: any) {
            let slot: any = [];
            let innerDirValues: any;
            slot = slots.default ? slots.default() : slots;
            slot = slot.flatMap((item: any) => Array.isArray(item.children) ? item.children : item);
            let items: any = {};
            items[`${tagName}`] = [];
            for (const childSlot of slot) {
                let tempObj: any = {};
                let tagRef: any = childSlot.type.methods ? childSlot.type.methods.getTag() : tagName;
                if (childSlot.children) {
                    let key: string;
                    innerDirValues = this.resolveComplexDirs(childSlot.children, this.tagMapper["e-" + tagName], tagRef);
                    if (innerDirValues.length) {
                        tempObj = innerDirValues;
                    } else {
                        for(var i=0;i< Object.keys(innerDirValues).length;i++){
                            key = Object.keys(innerDirValues)[parseInt(i.toString(), 10)];
                            tempObj[`${key}`] = innerDirValues[`${key}`];
                        }
                    }
                }
                if (childSlot.props) {
                Object.keys(childSlot.props).forEach((key) => {
                    let propName: string = key.replace(/-[a-z]/g, (e) => {return e[1].toUpperCase()});
                    if (propName) {
                        tempObj[`${propName}`] = childSlot.props[`${key}`];
                    }
                });
                }
                if (((/[s]\b/).test(tagRef) && innerDirValues) && (!(/[s]\b/).test(tagName) || innerDirValues.length)) {
                    Array.isArray(tempObj) ? tempObj.forEach((item: any) => { items[`${tagName}`].push(item) }) : items[`${tagName}`].push(tempObj);
                } 
                else if (tempObj && Object.keys(tempObj).length !== 0) {
                    items[`${tagName}`].push(tempObj);
                }
            }
            return items;
        }, 
        resolveComplexDirs(slots: any, tagObject: any, tagName: string) {
            let slot: any = [];
            let innerDirValues: any;
            slot = slots.default ? slots.default() : slots;
            let items: any = {};
            for (const childSlot of slot) {
                let tagRef: any;
                let tag: any;
                if (tagObject[`${tagName}`]) {
                    tagRef= Object.keys(tagObject[`${tagName}`]);
                    tag= tagRef.find(
                    (key: any) =>
                        tagObject[`${tagName}`][`${key}`] ===
                        childSlot.type.methods.getTag().replace(/[s]\b/, "")
                    );
                    const moduleName: string = this.ej2Instances.getModuleName().toLowerCase();
                    tag = tag
                    ? tag.replace("e-", "")
                    : childSlot.type.methods.getTag().replace(moduleName === "ribbon" ? "e-ribbon-" : "e-", "");
                    if (this.ej2Instances.getModuleName().toLowerCase() == "diagram" && tag.indexOf('annotations') !=-1) {
                        tag =  'annotations';
                    }
                }
                if (childSlot.children) {
                    innerDirValues = this.resolveComplexInnerDirs(childSlot.children, tagObject[`${tagName}`], childSlot.type.methods.getTag());
                    if (!items[`${tag}`]) {
                        items[`${tag}`] = [];
                    }
                    if (innerDirValues.length >1) {
                        items[`${tag}`] = innerDirValues;
                    } else {
                        items[`${tag}`].push(innerDirValues);
                    }
                }
                if (childSlot.props) {
                    childSlot.props = this.getCamelCaseProps(childSlot.props);
                }
                if (slot.length > 1) {
                    items = Object.keys(items).length == 0 &&  !items.length ? [] : items;
                    if (childSlot.props) { items.push(childSlot.props); }
                }
                else {
                    items = childSlot.props ? (<any>Object).assign(items, childSlot.props) : items;
                }
            }
            return items;
        },
        resolveComplexInnerDirs(slots: any, tagObject: any, tagName: string) {
            let slot: any = [];
            let innerDirValues: any;
            slot = slots.default ? slots.default() : slots;
            let items: any = slot.length > 1 ? [] : {};
            for (const childSlot of slot) {
                let isRibbon: boolean = (this.ej2Instances.getModuleName().toLowerCase() == "ribbon");
                let tag: string = childSlot.type.methods.getTag().replace(isRibbon ? "e-ribbon-" : "e-", "");
                if (childSlot.children) {
                    innerDirValues = this.resolveMultilevelComplexInnerDirs(childSlot.children, tagObject[`${tagName}`], childSlot.type.methods.getTag());
                    if ((/[s]\b/).test(tag) || slot.length > 1) {
                        if ((/[s]\b/).test(tag)) {
                            items[`${tag}`] = !items[`${tag}`] ? [] : items[`${tag}`];
                            if (innerDirValues.length) {
                                items[`${tag}`] = innerDirValues;
                            } else {items[`${tag}`].push(innerDirValues);}
                        } else if (innerDirValues && !(isRibbon && innerDirValues.hasOwnProperty('collections'))) {
                            items.push(innerDirValues)
                        }
                    } else {
                        items = innerDirValues ? innerDirValues : items;
                    }
                }
                if (childSlot.props) {
                    childSlot.props = this.getCamelCaseProps(childSlot.props);
                }
                if (slot.length > 1 && childSlot.props) {
                    if (isRibbon && innerDirValues && innerDirValues.hasOwnProperty('collections')) {
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
        resolveMultilevelComplexInnerDirs(slots: any, tagObject: any, tagName: string) {
            let slot: any = [];
            let innerDirValues: any;
            slot = slots.default ? slots.default() : slots;
            let items: any = slot.length > 1 ? [] : {};
            for (const childSlot of slot) {
                const moduleName: string = this.ej2Instances.getModuleName().toLowerCase();
                let tag: string = childSlot.type.methods.getTag().replace(moduleName === "ribbon" ? "e-ribbon-" : "e-", "");
                if (childSlot.children) {
                    innerDirValues = this.resolveComplexInnerDirs(childSlot.children, tagObject[`${tagName}`], childSlot.type.methods.getTag());
                }
                if (childSlot.props) {
                    childSlot.props = this.getCamelCaseProps(childSlot.props);
                }
                if((/[s]\b/).test(tag)) {
                    items[`${tag}`] = !items[`${tag}`] ? [] : items[`${tag}`];
                    if(innerDirValues.length) {
                        items[`${tag}`] = innerDirValues;
                    } else { items[`${tag}`].push(innerDirValues); }
                    if (childSlot.props) { items[`${tag}`].push(childSlot.props) }
                } else {
                    items = innerDirValues;
                    items = childSlot.props ?  (<any>Object).assign(items, childSlot.props) : items;
                }
            }
            return items;
        },
        getDirectiveValues(tagDirectives: any, tagMapper: { [key: string]: Object }, tagNameMapper: Object): Object {
            let keyTags: string[] = Object.keys(tagMapper);
            let dir: Object = {};
            if (tagDirectives) {
                for (let tagDirective of tagDirectives) {
                    if (tagDirective.componentOptions && tagDirective.componentOptions.children && tagDirective.componentOptions.tag || 
                    (tagDirective.tag === 'e-seriescollection' && tagDirective.children)) {
                        let dirTag: string = tagDirective.componentOptions ? tagDirective.componentOptions.tag : tagDirective.tag;
                        dirTag = (dirTag === 'e-seriescollection') ? 'e-seriesCollection' : dirTag;
                        if (keyTags.indexOf(dirTag) !== -1) {
                            let tagName: string = tagNameMapper[`${dirTag}`] ? tagNameMapper[`${dirTag}`] : dirTag;
                            dir[tagName.replace('e-', '')] = [];
                            let children = tagDirective.componentOptions ? tagDirective.componentOptions.children : tagDirective.children;
                            for (let tagDirChild of children) {
                                let retObj: Object = this.getVNodeValue(tagDirChild, tagMapper[`${dirTag}`], tagNameMapper);
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
            let mulObj: Object = {};
            for (let tagDir of tagDirectories) {
                let key: string;
                let children: any;
                if (tagDir.componentOptions) {
                    key = tagDir.componentOptions.tag;
                    if (tagDir.componentOptions.children) {
                        children = tagDir.componentOptions.children;
                    }
                } else if ((tagDir.tag === 'e-markersettings' || tagDir.tag === 'e-markersetting') && tagDir.children) {
                    key = (tagDir.tag === 'e-markersettings') ? 'e-markerSettings' : 'e-markerSetting';
                    children = tagDir.children;
                }
                if (key) {
                    let tagName: string = tagNameMapper[`${key}`] ? tagNameMapper[`${key}`] : key;
                    mulObj[tagName.replace('e-', '')] = [];
                    if (children) {
                        for (let tagDirChild of children) {
                            let mulLevObj: Object = this.getVNodeValue(tagDirChild, tagKey[`${key}`], tagNameMapper);
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
                    dirTag = tagDirective.componentOptions.tag;
                } else {
                    dirTag = (tagDirective.tag === 'e-markersettings') ? 'e-markerSettings' : 'e-markerSetting';
                }
                if (typeof tagKey === 'string' && dirTag === tagKey && tagDirective.data) {
                    ret = tagDirective.data.attrs ? this.getCamelCaseProps(tagDirective.data.attrs) : this.getCamelCaseProps(tagDirective.data);
                } else if (typeof tagKey === 'object') {
                    if (tagDirective.componentOptions.children && (Object.keys(tagKey).indexOf(dirTag) !== -1)) {
                        ret = this.getMultiLevelDirValue(tagDirective.componentOptions.children, tagKey[`${dirTag}`], tagNameMapper);
                    } else if (tagDirective.children && (Object.keys(tagKey).indexOf(dirTag) !== -1) && (dirTag === 'e-markersettings' || dirTag === 'e-markersetting')) {
                        ret = this.getMultiLevelDirValue(tagDirective.children, tagKey[`${dirTag}`], tagNameMapper);
                    }
                    if (tagDirective.data && tagDirective.data.attrs) {
                        ret = extend(ret, this.getCamelCaseProps(tagDirective.data.attrs));
                    }
                }
            }
            return ret;
        },
        /**
         * convert kebab case directive props to camel case
         */
        getCamelCaseProps(props: Object): Object {
            let retProps: Object = {};
            for (let prop of Object.keys(props)) {
                retProps[prop.replace(/-[a-z]/g, (e) => {return e[1].toUpperCase()})] = props[`${prop}`];
            }
            return retProps;
        },
        dataBind() {
            this.ej2Instances.dataBind();
        },
        setProperties(arg: Object, muteOnChange?: boolean): void {
            return this.ej2Instances.setProperties(arg, muteOnChange);
        },
    }
 });

export function getProps(options: any = {}): any {
    if (options.props) {
      for (let prop of options.props) {
        (options.newprops || (options.newprops = {}))[`${prop}`] = {};
        (options.watch || (options.watch = {}))[`${prop}`] = function (newVal: Object) { // watch it
          this.ej2Instances[`${prop}`] = newVal;
          if (this.dataBind && (options.name !== 'DateRangePickerComponent')) {
              this.dataBind();    
          }
        };
      }
    }
    return [options.newprops, options.watch];
}