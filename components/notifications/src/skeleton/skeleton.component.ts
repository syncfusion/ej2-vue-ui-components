import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';
import { getValue } from '@syncfusion/ej2-base';

import { Skeleton } from '@syncfusion/ej2-notifications';


export const properties: string[] = ['isLazyUpdate', 'plugins', 'cssClass', 'enablePersistence', 'enableRtl', 'height', 'label', 'locale', 'shape', 'shimmerEffect', 'visible', 'width'];
export const modelProps: string[] = [];


/**
 * Represents the Vue Skeleton component
 * ```html
 * <ejs-skeleton></ejs-skeleton>
 * ```
 */
@EJComponentDecorator({
    props: properties
})

export class SkeletonComponent extends ComponentBase {
    
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
        this.ej2Instances = new Skeleton({});
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
         return createElement('div', (this as any).$slots.default);
    }
    public custom(): void {
        this.updated();
    }
    
}

export const SkeletonPlugin = {
    name: 'ejs-skeleton',
    install(Vue: any) {
        Vue.component(SkeletonPlugin.name, SkeletonComponent);

    }
}
