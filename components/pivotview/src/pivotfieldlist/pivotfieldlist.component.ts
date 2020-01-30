import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';
import { PivotFieldList } from '@syncfusion/ej2-pivotview';


export const properties: string[] = ['allowCalculatedField', 'allowDeferLayoutUpdate', 'cssClass', 'dataSourceSettings', 'enablePersistence', 'enableRtl', 'loadOnDemandInMemberEditor', 'locale', 'maxNodeLimitInMemberEditor', 'renderMode', 'showValuesButton', 'spinnerTemplate', 'target', 'aggregateCellInfo', 'created', 'dataBound', 'destroyed', 'enginePopulated', 'enginePopulating', 'fieldDrop', 'load', 'memberFiltering', 'onFieldDropped'];
export const modelProps: string[] = [];

/**
 * `ejs-pivotfieldlist` represents the VueJS PivotFieldList Component.
 * ```vue
 * <ejs-pivotfieldlist></ejs-pivotfieldlist>
 * ```
 */
@EJComponentDecorator({
    props: properties
})
export class PivotFieldListComponent extends ComponentBase {
    
    public ej2Instances: any;
    public propKeys: string[] = properties;
    public models: string[] = modelProps;
    public hasChildDirective: boolean = false;
    protected hasInjectedModules: boolean = false;
    public tagMapper: { [key: string]: Object } = {};
    public tagNameMapper: Object = {};
    
    constructor() {
        super();
        this.ej2Instances = new PivotFieldList({});
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
    
    public update(control: Object): void {
        return this.ej2Instances.update(control);
    }

    public updateView(control: Object): void {
        return this.ej2Instances.updateView(control);
    }
}

export const PivotFieldListPlugin = {
    name: 'ejs-pivotfieldlist',
    install(Vue: any) {
        Vue.component(PivotFieldListPlugin.name, PivotFieldListComponent);

    }
}
