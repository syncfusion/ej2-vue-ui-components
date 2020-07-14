/**
 * Vue Component Base
 */
import Vue from 'vue';
import { isNullOrUndefined, extend, getValue } from '@syncfusion/ej2-base';

export class ComponentBase extends Vue {

    // tslint:disable:no-any
    protected ej2Instances: any;
    protected tagMapper: any;
    protected tagNameMapper: any;
    protected hasInjectedModules: boolean = false;
    protected hasChildDirective: boolean = false;
    protected childDirObjects: string = '';
    protected propKeys: any;

    public created(): void {
        for (let prop of this.propKeys) {
            this.ej2Instances.addEventListener(prop, (args: object) => {
                this.$emit(prop, args);
            });
        }
    }

    public mounted(): void {
        this.ej2Instances.isVue = true;
        this.ej2Instances.appendTo(this.$el);
    }
    public getInjectedServices(): Object[] {
        let ret = [];
        let provide: any = getValue('$vnode.context.$options.provide', this);
        if (provide) {
            // tslint:disable:no-any
            let injectables: any = provide;
            if (typeof provide === 'function') {
                // tslint:disable:no-any
                injectables = (this.$vnode.context.$options.provide as any)();
            }
            ret = injectables[this.ej2Instances.getModuleName()] || [];
        }
        return ret;
    }
    public updated(): void {
        if (this.hasChildDirective) {
            let childKey: Object = {};
            this.fetchChildPropValues(childKey);
            let curChildDir: string = JSON.stringify(childKey);
            if (this.childDirObjects !== curChildDir) {
                this.childDirObjects = curChildDir;
                this.assignValueToWrapper(childKey, false);
            }
        }
    }

    public beforeDestroy(): void {
        let tempBeforeDestroyThis: any = this;
        tempBeforeDestroyThis.ej2Instances.destroy();
        (tempBeforeDestroyThis.$el as any).style.visibility = 'hidden';
        tempBeforeDestroyThis = null;
    }

    public bindProperties(): void {
        let options: Object = {};
        for (let prop of this.propKeys) {
            if (!isNullOrUndefined(this[prop])) {
                options[prop] = this[prop];
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
    }

    public assignValueToWrapper(option: Object, silent?: boolean): void {
        this.ej2Instances.setProperties(extend({}, {}, option, true), isNullOrUndefined(silent as any) ? true : silent);
    }

    public fetchChildPropValues(childOption: Object): void {
        let dirProps: Object = this.getDirectiveValues(this.$slots.default, this.tagMapper || {}, this.tagNameMapper || {});
        if (!this.childDirObjects) {
            this.childDirObjects = JSON.stringify(dirProps);
        }
        for (let dirProp of Object.keys(dirProps)) {
            childOption[dirProp] = dirProps[dirProp];
        }
    }

    public getDirectiveValues(tagDirectives: any, tagMapper: { [key: string]: Object }, tagNameMapper: Object): Object {
        let keyTags: string[] = Object.keys(tagMapper);
        let dir: Object = {};
        if (tagDirectives) {
            for (let tagDirective of tagDirectives) {
                if (tagDirective.componentOptions && tagDirective.componentOptions.children && tagDirective.componentOptions.tag) {
                    let dirTag: string = tagDirective.componentOptions.tag;
                    if (keyTags.indexOf(dirTag) !== -1) {
                        let tagName: string = tagNameMapper[dirTag] ? tagNameMapper[dirTag] : dirTag;
                        dir[tagName.replace('e-', '')] = [];
                        for (let tagDirChild of tagDirective.componentOptions.children) {
                            let retObj: Object = this.getVNodeValue(tagDirChild, tagMapper[dirTag], tagNameMapper);
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

    public getMultiLevelDirValue(tagDirectories: any, tagKey: string | Object, tagNameMapper: Object): Object {
        let mulObj: Object = {};
        for (let tagDir of tagDirectories) {
            if (tagDir.componentOptions) {
                let key: string = tagDir.componentOptions.tag;
                let tagName: string = tagNameMapper[key] ? tagNameMapper[key] : key;
                mulObj[tagName.replace('e-', '')] = [];
                if (tagDir.componentOptions && tagDir.componentOptions.children) {
                    for (let tagDirChild of tagDir.componentOptions.children) {
                        let mulLevObj: Object = this.getVNodeValue(tagDirChild, tagKey[key], tagNameMapper);
                        if (Object.keys(mulLevObj).length !== 0) {
                            mulObj[tagName.replace('e-', '')].push(mulLevObj);
                        }
                    }
                }
            }
        }
        return mulObj;
    }

    public getVNodeValue(tagDirective: any, tagKey: string | Object, tagNameMapper: Object): Object {
        let ret: Object = {};
        if (tagDirective.componentOptions) {
            let dirTag: string = tagDirective.componentOptions.tag;
            if (typeof tagKey === 'string' && dirTag === tagKey && tagDirective.data && tagDirective.data.attrs) {
                ret = this.getCamelCaseProps(tagDirective.data.attrs);
            } else if (typeof tagKey === 'object') {
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
    public getCamelCaseProps(props: Object): Object {
        let retProps: Object = {};
        for (let prop of Object.keys(props)) {
            retProps[prop.replace(/-[a-z]/g, (e) => {return e[1].toUpperCase()})] = props[prop];
        }
        return retProps;
    }

    public dataBind() {
        this.ej2Instances.dataBind();
    }

    public setProperties(arg: Object, muteOnChange?: boolean): void {
        return this.ej2Instances.setProperties(arg, muteOnChange);
    }
}