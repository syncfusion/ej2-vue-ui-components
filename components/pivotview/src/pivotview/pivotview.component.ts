import Vue from 'vue';
import { isUndefined } from '@syncfusion/ej2-base';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';
import { PivotView } from '@syncfusion/ej2-pivotview';


export const properties: string[] = ['allowCalculatedField', 'allowConditionalFormatting', 'allowDeferLayoutUpdate', 'allowDrillThrough', 'allowExcelExport', 'allowPdfExport', 'currencyCode', 'dataSource', 'editSettings', 'enablePersistence', 'enableRtl', 'enableValueSorting', 'enableVirtualization', 'gridSettings', 'groupingBarSettings', 'height', 'hyperlinkSettings', 'locale', 'maxNodeLimitInMemberEditor', 'pivotValues', 'showFieldList', 'showGroupingBar', 'showTooltip', 'showValuesButton', 'width', 'beforeExport', 'cellClick', 'cellSelected', 'created', 'dataBound', 'destroyed', 'drillThrough', 'enginePopulated', 'enginePopulating', 'hyperlinkCellClick', 'load', 'onFieldDropped'];
export const modelProps: string[] = ['datasource'];

/**
 * `ejs-pivotview` represents the VueJS PivotView Component.
 * ```vue
 * <ejs-pivotview></ejs-pivotview>
 * ```
 */
@EJComponentDecorator({
    props: properties,
    model: {
        event: 'modelchanged'
    }
})
export class PivotViewComponent extends ComponentBase {
    
    public ej2Instances: any;
    public propKeys: string[] = properties;
    public models: string[] = modelProps;
    public hasChildDirective: boolean = false;
    protected hasInjectedModules: boolean = true;
    public tagMapper: { [key: string]: Object } = {};
    public tagNameMapper: Object = {};
    
    constructor() {
        super();
        this.ej2Instances = new PivotView({});        this.ej2Instances._trigger = this.ej2Instances.trigger;
        this.ej2Instances.trigger = this.trigger;
        //this.ej2Instances._setProperties = this.ej2Instances.setProperties;
        //this.ej2Instances.setProperties = this.setProperties;

        this.bindProperties();
    }
    public trigger(eventName: string, eventProp: {[key:string]:Object}): void {
        if (eventName === 'change' && this.models && (this.models.length !== 0)) {
            let key: string[] = this.models.toString().match(/checked|value/) || [];
            let propKey: string = key[0];
            if (eventProp && key && !isUndefined(eventProp[propKey])) {
                (this as any).$emit('modelchanged', eventProp[propKey]);
            }
        }
        if (this.ej2Instances && this.ej2Instances._trigger) {
            this.ej2Instances._trigger(eventName, eventProp);
        }            
    }

    public setProperties(prop: any, muteOnChange: boolean): void {
        if (this.ej2Instances && this.ej2Instances._setProperties) {
            this.ej2Instances._setProperties(prop, muteOnChange);
        }
        if (prop && this.models && (this.models.length !== 0)) {
            let keys: string[] = Object.keys(prop);
            let emitKeys: string[] = [];
            let emitFlag: boolean = false;
            keys.map((key: string): void => {
                this.models.map((model: string): void => {
                    if ((key === model) && !(/datasource/i.test(key))) {
                        emitKeys.push(key);
                        emitFlag = true;
                    }
                });
            });
            if (emitFlag) {
                emitKeys.map((propKey: string): void => {
                    this.$emit('update:' + propKey, prop[propKey]);
                })
            }
        }
    }

    public render(createElement: any) {
        return createElement('div', (this as any).$slots.default);
    }
    
    public csvExport(excelExportProperties?: Object, isMultipleExport?: boolean, workbook?: any, isBlob?: boolean): void {
        return this.ej2Instances.csvExport(excelExportProperties, isMultipleExport, workbook, isBlob);
    }

    public excelExport(excelExportProperties?: Object, isMultipleExport?: boolean, workbook?: any, isBlob?: boolean): void {
        return this.ej2Instances.excelExport(excelExportProperties, isMultipleExport, workbook, isBlob);
    }

    public pdfExport(pdfExportProperties?: Object, isMultipleExport?: boolean, pdfDoc?: Object, isBlob?: boolean): void {
        return this.ej2Instances.pdfExport(pdfExportProperties, isMultipleExport, pdfDoc, isBlob);
    }
}

export const PivotViewPlugin = {
    name: 'ejs-pivotview',
    install(Vue: any) {
        Vue.component(PivotViewPlugin.name, PivotViewComponent);

    }
}
