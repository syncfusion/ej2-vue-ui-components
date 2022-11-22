import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';
import { getValue } from '@syncfusion/ej2-base';

import { Signature } from '@syncfusion/ej2-inputs';


export const properties: string[] = ['isLazyUpdate', 'plugins', 'backgroundColor', 'backgroundImage', 'disabled', 'enablePersistence', 'enableRtl', 'isReadOnly', 'locale', 'maxStrokeWidth', 'minStrokeWidth', 'saveWithBackground', 'strokeColor', 'velocity', 'beforeSave', 'change', 'created'];
export const modelProps: string[] = [];


/**
 * Represents the Essential JS 2 VueJS Signature Component
 * ```html
 * <ejs-signature></ejs-signature>
 * ```
 */
@EJComponentDecorator({
    props: properties
})

export class SignatureComponent extends ComponentBase {
    
    public ej2Instances: any;
    public propKeys: string[] = properties;
    public models: string[] = modelProps;
    public hasChildDirective: boolean = false;
    protected hasInjectedModules: boolean = false;
    public tagMapper: { [key: string]: Object } = {};
    public tagNameMapper: Object = {};
    public templateCollection: any;
    constructor() {
        super(arguments);
        this.ej2Instances = new Signature({});
        this.bindProperties();
        this.ej2Instances._setProperties = this.ej2Instances.setProperties;
        this.ej2Instances.setProperties = this.setProperties;
        this.ej2Instances.clearTemplate = this.clearTemplate;
        this.updated = this.updated;
    }

 public clearTemplate(templateNames?: string[]): any {
    if (!templateNames){
       templateNames = Object.keys(this.templateCollection || {});
    }
    if (templateNames.length &&  this.templateCollection) {
    for (let tempName of templateNames){
       let elementCollection: any = this.templateCollection[tempName];
       if(elementCollection && elementCollection.length) {
       for(let ele of elementCollection) {
           let destroy: any = getValue('__vue__.$destroy', ele);
           if (destroy) {
               ele.__vue__.$destroy();
           }
           if (ele.innerHTML){
               ele.innerHTML = '';
           }
       }
       delete this.templateCollection[tempName];
       }
    }
}
 }



    public setProperties(prop: any, muteOnChange: boolean): void {
        if (this.ej2Instances && this.ej2Instances._setProperties) {
            this.ej2Instances._setProperties(prop, muteOnChange);
        }
        if (prop && this.models && this.models.length) {
            Object.keys(prop).map((key: string): void => {
                this.models.map((model: string): void => {
                    if ((key === model) && !(/datasource/i.test(key))) {
                        this.$emit('update:' + key, prop[key]);
                    }
                });
            });
        }
    }

    public render(createElement: any) {
         return createElement('canvas', (this as any).$slots.default);
    }
    public custom(): void {
        this.updated();
    }
    
    public canRedo(): boolean {
        return this.ej2Instances.canRedo();
    }

    public canUndo(): boolean {
        return this.ej2Instances.canUndo();
    }

    public clear(): void {
        return this.ej2Instances.clear();
    }

    public draw(text: string, fontFamily?: string, fontSize?: number): void {
        return this.ej2Instances.draw(text, fontFamily, fontSize);
    }

    public getBlob(url: string): Object {
        return this.ej2Instances.getBlob(url);
    }

    public initialize(): void {
        return this.ej2Instances.initialize();
    }

    public isEmpty(): boolean {
        return this.ej2Instances.isEmpty();
    }

    public load(signature: string, width?: number, height?: number): void {
        return this.ej2Instances.load(signature, width, height);
    }

    public redo(): void {
        return this.ej2Instances.redo();
    }

    public save(type?: Object, fileName?: string): void {
        return this.ej2Instances.save(type, fileName);
    }

    public saveAsBlob(): Object {
        return this.ej2Instances.saveAsBlob();
    }

    public undo(): void {
        return this.ej2Instances.undo();
    }
}

export const SignaturePlugin = {
    name: 'ejs-signature',
    install(Vue: any) {
        Vue.component(SignaturePlugin.name, SignatureComponent);

    }
}
