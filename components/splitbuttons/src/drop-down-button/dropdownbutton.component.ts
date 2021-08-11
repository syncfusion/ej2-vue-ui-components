import { Options } from 'vue-class-component';
import { ComponentBase, EJComponentDecorator, getProps, allVue, gh } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined } from '@syncfusion/ej2-base';

import { DropDownButton } from '@syncfusion/ej2-splitbuttons';
import { DropDownButtonItemsDirective, DropDownButtonItemDirective, DropDownButtonItemsPlugin, DropDownButtonItemPlugin } from './items.directive'


// {{VueImport}}
export const properties: string[] = ['content', 'createPopupOnClick', 'cssClass', 'disabled', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'iconCss', 'iconPosition', 'items', 'locale', 'target', 'beforeClose', 'beforeItemRender', 'beforeOpen', 'close', 'created', 'open', 'select'];
export const modelProps: string[] = [];

export const testProp: any = getProps({props: properties});
export const props = testProp[0];
export const watch = testProp[1];

export const emitProbs: any = Object.keys(watch);
emitProbs.push('modelchanged');
for (let props of modelProps) {
    emitProbs.push(
        'update:'+props
    );
}

export const isExecute: any = gh ? false : true;

/**
 * Represents the Essential JS 2 VueJS DropDownButton Component
 * ```html
 * <ejs-dropdownbutton>DropDownButton</ejs-dropdownbutton>
 * ```
 */
@EJComponentDecorator({
    props: properties
},isExecute)

/* Start Options({
    props: props,
    watch: watch,
    emits: emitProbs
}) End */

export class DropDownButtonComponent extends ComponentBase {
    
    public ej2Instances: any;
    public propKeys: string[] = properties;
    public models: string[] = modelProps;
    public hasChildDirective: boolean = true;
    protected hasInjectedModules: boolean = false;
    public tagMapper: { [key: string]: Object } = {"e-dropdownbuttonitems":"e-dropdownbuttonitem"};
    public tagNameMapper: Object = {"e-dropdownbuttonitems":"e-items"};
    public isVue3: boolean;
    
    constructor() {
        super(arguments);
        this.isVue3 = !isExecute;
        this.ej2Instances = new DropDownButton({});
        this.bindProperties();
        this.ej2Instances._setProperties = this.ej2Instances.setProperties;
        this.ej2Instances.setProperties = this.setProperties;
    }
    public setProperties(prop: any, muteOnChange: boolean): void {
        if(this.isVue3) {
            this.models = !this.models ? this.ej2Instances.referModels : this.models;
        }
        if (this.ej2Instances && this.ej2Instances._setProperties) {
            this.ej2Instances._setProperties(prop, muteOnChange);
        }
        if (prop && this.models && this.models.length) {
            Object.keys(prop).map((key: string): void => {
                this.models.map((model: string): void => {
                    if ((key === model) && !(/datasource/i.test(key))) {
                        if (this.isVue3) {
                            this.ej2Instances.vueInstance.$emit('update:' + key, prop[key]);
                        } else {
                            (this as any).$emit('update:' + key, prop[key]);
                        }
                    }
                });
            });
        }
    }

    public render(createElement: any) {
        let h: any = gh || createElement;
        let slots: any = null;
        if(!isNullOrUndefined((this as any).$slots.default)) {
            slots = gh ? (this as any).$slots.default() : (this as any).$slots.default;
        }
        return h('button', slots);
    }
    
    public addItems(items: Object[], text?: string): void {
        return this.ej2Instances.addItems(items, text);
    }

    public focusIn(): void {
        return this.ej2Instances.focusIn();
    }

    public removeItems(items: string[], isUniqueId?: boolean): void {
        return this.ej2Instances.removeItems(items, isUniqueId);
    }

    public toggle(): void {
        return this.ej2Instances.toggle();
    }
}

export const DropDownButtonPlugin = {
    name: 'ejs-dropdownbutton',
    install(Vue: any) {
        Vue.component(DropDownButtonPlugin.name, DropDownButtonComponent);
        Vue.component(DropDownButtonItemPlugin.name, DropDownButtonItemDirective);
        Vue.component(DropDownButtonItemsPlugin.name, DropDownButtonItemsDirective);

    }
}
