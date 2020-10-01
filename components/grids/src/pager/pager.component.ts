import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';
import { Pager } from '@syncfusion/ej2-grids';


export const properties: string[] = ['currentPage', 'customText', 'enableExternalMessage', 'enablePagerMessage', 'enablePersistence', 'enableQueryString', 'enableRtl', 'externalMessage', 'locale', 'pageCount', 'pageSize', 'pageSizes', 'template', 'totalRecordsCount', 'click', 'created', 'dropDownChanged'];
export const modelProps: string[] = [];

/**
 * `ejs-pager` represents the VueJS Pager Component.
 * ```vue
 * <ejs-pager></ejs-pager>
 * ```
 */
@EJComponentDecorator({
    props: properties
})
export class PagerComponent extends ComponentBase {
    
    public ej2Instances: any;
    public propKeys: string[] = properties;
    public models: string[] = modelProps;
    public hasChildDirective: boolean = false;
    protected hasInjectedModules: boolean = false;
    public tagMapper: { [key: string]: Object } = {};
    public tagNameMapper: Object = {};
    
    constructor() {
        super();
        this.ej2Instances = new Pager({});
        this.bindProperties();
        this.ej2Instances._setProperties = this.ej2Instances.setProperties;
        this.ej2Instances.setProperties = this.setProperties;
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
    
    public destroyTemplate(propertyNames?: string[], index?: any): void {
        return this.ej2Instances.destroyTemplate(propertyNames, index);
    }

    public getLocalizedLabel(key: string): string {
        return this.ej2Instances.getLocalizedLabel(key);
    }

    public goToPage(pageNo: number): void {
        return this.ej2Instances.goToPage(pageNo);
    }

    public refresh(): void {
        return this.ej2Instances.refresh();
    }
}

export const PagerPlugin = {
    name: 'ejs-pager',
    install(Vue: any) {
        Vue.component(PagerPlugin.name, PagerComponent);

    }
}
