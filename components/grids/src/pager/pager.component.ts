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
    }

    public render(createElement: any) {
        return createElement('div', (this as any).$slots.default);
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
