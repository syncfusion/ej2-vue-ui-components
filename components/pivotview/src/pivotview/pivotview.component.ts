import Vue from 'vue';
import { isUndefined } from '@syncfusion/ej2-base';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';
import { PivotView } from '@syncfusion/ej2-pivotview';


export const properties: string[] = ['allowCalculatedField', 'allowConditionalFormatting', 'allowDeferLayoutUpdate', 'allowDrillThrough', 'allowExcelExport', 'allowPdfExport', 'cellTemplate', 'chartSettings', 'currencyCode', 'dataSource', 'displayOption', 'editSettings', 'enablePersistence', 'enableRtl', 'enableValueSorting', 'enableVirtualization', 'gridSettings', 'groupingBarSettings', 'height', 'hyperlinkSettings', 'locale', 'maxNodeLimitInMemberEditor', 'pivotValues', 'showFieldList', 'showGroupingBar', 'showToolbar', 'showTooltip', 'showValuesButton', 'toolbar', 'width', 'aggregateCellInfo', 'beforeExport', 'beginDrillThrough', 'cellClick', 'cellSelected', 'cellSelecting', 'chartSeriesCreated', 'created', 'dataBound', 'destroyed', 'drill', 'drillThrough', 'enginePopulated', 'enginePopulating', 'fetchReport', 'hyperlinkCellClick', 'load', 'loadReport', 'newReport', 'onFieldDropped', 'onPdfCellRender', 'removeReport', 'renameReport', 'saveReport', 'toolbarClick', 'toolbarRender'];
export const modelProps: string[] = ['dataSource'];

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
    public trigger(eventName: string, eventProp: {[key:string]:Object}): void {
        if ((eventName === 'change' || eventName === 'input') && this.models && (this.models.length !== 0)) {
            let key: string[] = this.models.toString().match(/checked|value/) || [];
            let propKey: string = key[0];
            if (eventProp && key && !isUndefined(eventProp[propKey])) {
                (this as any).$emit('update:'+ propKey, eventProp[propKey]);
                (this as any).$emit('modelchanged', eventProp[propKey]);
            }
        }
        if (this.ej2Instances && this.ej2Instances._trigger) {
            this.ej2Instances._trigger(eventName, eventProp);
        }            
    }

    public render(createElement: any) {
        return createElement('div', (this as any).$slots.default);
    }
    
    public chartExport(type: Object, fileName: string, orientation?: Object, width?: number, height?: number): void {
        return this.ej2Instances.chartExport(type, fileName, orientation, width, height);
    }

    public csvExport(excelExportProperties?: Object, isMultipleExport?: boolean, workbook?: any, isBlob?: boolean): void {
        return this.ej2Instances.csvExport(excelExportProperties, isMultipleExport, workbook, isBlob);
    }

    public excelExport(excelExportProperties?: Object, isMultipleExport?: boolean, workbook?: any, isBlob?: boolean): void {
        return this.ej2Instances.excelExport(excelExportProperties, isMultipleExport, workbook, isBlob);
    }

    public getCellTemplate(): Object {
        return this.ej2Instances.getCellTemplate();
    }

    public pdfExport(pdfExportProperties?: Object, isMultipleExport?: boolean, pdfDoc?: Object, isBlob?: boolean): void {
        return this.ej2Instances.pdfExport(pdfExportProperties, isMultipleExport, pdfDoc, isBlob);
    }

    public printChart(): void {
        return this.ej2Instances.printChart();
    }

    public templateParser(template: string): Object {
        return this.ej2Instances.templateParser(template);
    }
}

export const PivotViewPlugin = {
    name: 'ejs-pivotview',
    install(Vue: any) {
        Vue.component(PivotViewPlugin.name, PivotViewComponent);

    }
}
