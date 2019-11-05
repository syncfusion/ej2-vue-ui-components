import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';
import { PivotView } from '@syncfusion/ej2-pivotview';


export const properties: string[] = ['allowCalculatedField', 'allowConditionalFormatting', 'allowDataCompression', 'allowDeferLayoutUpdate', 'allowDrillThrough', 'allowExcelExport', 'allowNumberFormatting', 'allowPdfExport', 'cellTemplate', 'chartSettings', 'currencyCode', 'dataSourceSettings', 'displayOption', 'editSettings', 'enablePersistence', 'enableRtl', 'enableValueSorting', 'enableVirtualization', 'gridSettings', 'groupingBarSettings', 'height', 'hyperlinkSettings', 'loadOnDemandInMemberEditor', 'locale', 'maxNodeLimitInMemberEditor', 'maxRowsInDrillThrough', 'pivotValues', 'showFieldList', 'showGroupingBar', 'showToolbar', 'showTooltip', 'showValuesButton', 'spinnerTemplate', 'toolbar', 'width', 'aggregateCellInfo', 'beforeExport', 'beginDrillThrough', 'cellClick', 'cellSelected', 'cellSelecting', 'chartSeriesCreated', 'conditionalFormatting', 'created', 'dataBound', 'destroyed', 'drill', 'drillThrough', 'enginePopulated', 'enginePopulating', 'fetchReport', 'fieldListRefreshed', 'hyperlinkCellClick', 'load', 'loadReport', 'newReport', 'onFieldDropped', 'onPdfCellRender', 'removeReport', 'renameReport', 'saveReport', 'toolbarClick', 'toolbarRender'];
export const modelProps: string[] = [];

/**
 * `ejs-pivotview` represents the VueJS PivotView Component.
 * ```vue
 * <ejs-pivotview></ejs-pivotview>
 * ```
 */
@EJComponentDecorator({
    props: properties
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
        this.ej2Instances = new PivotView({});
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
    
    public chartExport(type: Object, fileName: string, orientation?: Object, width?: number, height?: number): void {
        return this.ej2Instances.chartExport(type, fileName, orientation, width, height);
    }

    public createCalculatedFieldDialog(): void {
        return this.ej2Instances.createCalculatedFieldDialog();
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

    public loadPersistData(persistData: string): void {
        return this.ej2Instances.loadPersistData(persistData);
    }

    public pdfExport(pdfExportProperties?: Object, isMultipleExport?: boolean, pdfDoc?: Object, isBlob?: boolean): void {
        return this.ej2Instances.pdfExport(pdfExportProperties, isMultipleExport, pdfDoc, isBlob);
    }

    public printChart(): void {
        return this.ej2Instances.printChart();
    }

    public refresh(): void {
        return this.ej2Instances.refresh();
    }

    public showConditionalFormattingDialog(): void {
        return this.ej2Instances.showConditionalFormattingDialog();
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
