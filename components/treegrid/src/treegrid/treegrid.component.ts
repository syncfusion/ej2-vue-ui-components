import Vue from 'vue';
import { isUndefined } from '@syncfusion/ej2-base';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';
import { TreeGrid } from '@syncfusion/ej2-treegrid';
import { ColumnsDirective, ColumnDirective, ColumnsPlugin, ColumnPlugin } from './columns.directive'
import { AggregateColumnsDirective, AggregateColumnDirective, AggregateColumnsPlugin, AggregateColumnPlugin } from './aggregate-columns.directive'
import { AggregatesDirective, AggregateDirective, AggregatesPlugin, AggregatePlugin } from './aggregates.directive'


export const properties: string[] = ['aggregates', 'allowExcelExport', 'allowFiltering', 'allowMultiSorting', 'allowPaging', 'allowPdfExport', 'allowReordering', 'allowResizing', 'allowSelection', 'allowSorting', 'allowTextWrap', 'autoCheckHierarchy', 'childMapping', 'columnMenuItems', 'columnQueryMode', 'columns', 'contextMenuItems', 'dataSource', 'editSettings', 'enableAltRow', 'enableCollapseAll', 'enableHover', 'enablePersistence', 'enableRtl', 'expandStateMapping', 'filterSettings', 'gridLines', 'hasChildMapping', 'height', 'idMapping', 'locale', 'pageSettings', 'parentIdMapping', 'printMode', 'query', 'rowHeight', 'searchSettings', 'selectedRowIndex', 'selectionSettings', 'showColumnMenu', 'sortSettings', 'textWrapSettings', 'toolbar', 'treeColumnIndex', 'width', 'actionBegin', 'actionComplete', 'actionFailure', 'beforeDataBound', 'beforeExcelExport', 'beforePdfExport', 'beforePrint', 'beginEdit', 'cellDeselected', 'cellDeselecting', 'cellEdit', 'cellSelected', 'cellSelecting', 'checkboxChange', 'collapsed', 'collapsing', 'columnDrag', 'columnDragStart', 'columnDrop', 'columnMenuClick', 'columnMenuOpen', 'contextMenuClick', 'contextMenuOpen', 'created', 'dataBound', 'dataSourceChanged', 'dataStateChange', 'excelExportComplete', 'excelHeaderQueryCellInfo', 'excelQueryCellInfo', 'expanded', 'expanding', 'headerCellInfo', 'load', 'pdfExportComplete', 'pdfHeaderQueryCellInfo', 'pdfQueryCellInfo', 'printComplete', 'queryCellInfo', 'recordDoubleClick', 'resizeStart', 'resizeStop', 'resizing', 'rowDataBound', 'rowDeselected', 'rowDeselecting', 'rowSelected', 'rowSelecting', 'toolbarClick'];
export const modelProps: string[] = ['dataSource'];

/**
 * `ejs-treegrid` represents the VueJS TreeGrid Component.
 * ```vue
 * <ejs-treegrid :dataSource='data' allowPaging='true' allowSorting='true'></ejs-treegrid>
 * ```
 */
@EJComponentDecorator({
    props: properties,
    model: {
        event: 'modelchanged'
    }
})
export class TreeGridComponent extends ComponentBase {
    
    public ej2Instances: any;
    public propKeys: string[] = properties;
    public models: string[] = modelProps;
    public hasChildDirective: boolean = true;
    protected hasInjectedModules: boolean = true;
    public tagMapper: { [key: string]: Object } = {"e-columns":"e-column","e-aggregates":{"e-aggregate":{"e-columns":"e-column"}}};
    public tagNameMapper: Object = {};
    
    constructor() {
        super();
        this.ej2Instances = new TreeGrid({});        this.ej2Instances._trigger = this.ej2Instances.trigger;
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
    
    public addRecord(data?: Object, index?: number): void {
        return this.ej2Instances.addRecord(data, index);
    }

    public autoFitColumns(fieldNames?: string | string[]): void {
        return this.ej2Instances.autoFitColumns(fieldNames);
    }

    public clearFiltering(): void {
        return this.ej2Instances.clearFiltering();
    }

    public clearSelection(): void {
        return this.ej2Instances.clearSelection();
    }

    public clearSorting(): void {
        return this.ej2Instances.clearSorting();
    }

    public closeEdit(): void {
        return this.ej2Instances.closeEdit();
    }

    public collapseAll(): void {
        return this.ej2Instances.collapseAll();
    }

    public collapseAtLevel(level: number): void {
        return this.ej2Instances.collapseAtLevel(level);
    }

    public collapseRow(row: Object, record?: Object): void {
        return this.ej2Instances.collapseRow(row, record);
    }

    public csvExport(excelExportProperties?: Object, isMultipleExport?: boolean, workbook?: any, isBlob?: boolean): Object {
        return this.ej2Instances.csvExport(excelExportProperties, isMultipleExport, workbook, isBlob);
    }

    public dataBind(): void {
        return this.ej2Instances.dataBind();
    }

    public deleteRecord(fieldName?: string, data?: Object): void {
        return this.ej2Instances.deleteRecord(fieldName, data);
    }

    public deleteRow(tr: Object): void {
        return this.ej2Instances.deleteRow(tr);
    }

    public endEdit(): void {
        return this.ej2Instances.endEdit();
    }

    public excelExport(excelExportProperties?: Object, isMultipleExport?: boolean, workbook?: any, isBlob?: boolean): Object {
        return this.ej2Instances.excelExport(excelExportProperties, isMultipleExport, workbook, isBlob);
    }

    public expandAll(): void {
        return this.ej2Instances.expandAll();
    }

    public expandAtLevel(level: number): void {
        return this.ej2Instances.expandAtLevel(level);
    }

    public expandRow(row: Object, record?: Object): void {
        return this.ej2Instances.expandRow(row, record);
    }

    public filterByColumn(fieldName: string, filterOperator: string, filterValue: string | number | Object | boolean, predicate?: string, matchCase?: boolean, ignoreAccent?: boolean, actualFilterValue?: string, actualOperator?: string): void {
        return this.ej2Instances.filterByColumn(fieldName, filterOperator, filterValue, predicate, matchCase, ignoreAccent, actualFilterValue, actualOperator);
    }

    public getCellFromIndex(rowIndex: number, columnIndex: number): Object {
        return this.ej2Instances.getCellFromIndex(rowIndex, columnIndex);
    }

    public getCheckedRowIndexes(): undefined {
        return this.ej2Instances.getCheckedRowIndexes();
    }

    public getColumnByField(field: string): Object {
        return this.ej2Instances.getColumnByField(field);
    }

    public getColumnByUid(uid: string): Object {
        return this.ej2Instances.getColumnByUid(uid);
    }

    public getColumnFieldNames(): undefined {
        return this.ej2Instances.getColumnFieldNames();
    }

    public getColumnHeaderByField(field: string): Object {
        return this.ej2Instances.getColumnHeaderByField(field);
    }

    public getColumnHeaderByIndex(index: number): Object {
        return this.ej2Instances.getColumnHeaderByIndex(index);
    }

    public getColumnHeaderByUid(uid: string): Object {
        return this.ej2Instances.getColumnHeaderByUid(uid);
    }

    public getColumnIndexByField(field: string): number {
        return this.ej2Instances.getColumnIndexByField(field);
    }

    public getColumnIndexByUid(uid: string): number {
        return this.ej2Instances.getColumnIndexByUid(uid);
    }

    public getColumns(isRefresh?: boolean): undefined {
        return this.ej2Instances.getColumns(isRefresh);
    }

    public getContent(): Object {
        return this.ej2Instances.getContent();
    }

    public getContentTable(): Object {
        return this.ej2Instances.getContentTable();
    }

    public getDataModule(): undefined {
        return this.ej2Instances.getDataModule();
    }

    public getDataRows(): undefined {
        return this.ej2Instances.getDataRows();
    }

    public getFooterContent(): Object {
        return this.ej2Instances.getFooterContent();
    }

    public getFooterContentTable(): Object {
        return this.ej2Instances.getFooterContentTable();
    }

    public getHeaderContent(): Object {
        return this.ej2Instances.getHeaderContent();
    }

    public getHeaderTable(): Object {
        return this.ej2Instances.getHeaderTable();
    }

    public getPager(): Object {
        return this.ej2Instances.getPager();
    }

    public getPrimaryKeyFieldNames(): undefined {
        return this.ej2Instances.getPrimaryKeyFieldNames();
    }

    public getRowByIndex(index: number): Object {
        return this.ej2Instances.getRowByIndex(index);
    }

    public getRowInfo(target: Object | Object): Object {
        return this.ej2Instances.getRowInfo(target);
    }

    public getRows(): undefined {
        return this.ej2Instances.getRows();
    }

    public getSelectedRecords(): undefined {
        return this.ej2Instances.getSelectedRecords();
    }

    public getSelectedRowCellIndexes(): undefined {
        return this.ej2Instances.getSelectedRowCellIndexes();
    }

    public getSelectedRowIndexes(): undefined {
        return this.ej2Instances.getSelectedRowIndexes();
    }

    public getSelectedRows(): undefined {
        return this.ej2Instances.getSelectedRows();
    }

    public getUidByColumnField(field: string): string {
        return this.ej2Instances.getUidByColumnField(field);
    }

    public getVisibleColumns(): undefined {
        return this.ej2Instances.getVisibleColumns();
    }

    public goToPage(pageNo: number): void {
        return this.ej2Instances.goToPage(pageNo);
    }

    public hideColumns(keys: string | string[], hideBy?: string): void {
        return this.ej2Instances.hideColumns(keys, hideBy);
    }

    public hideSpinner(): void {
        return this.ej2Instances.hideSpinner();
    }

    public pdfExport(pdfExportProperties?: Object, isMultipleExport?: boolean, pdfDoc?: Object, isBlob?: boolean): Object {
        return this.ej2Instances.pdfExport(pdfExportProperties, isMultipleExport, pdfDoc, isBlob);
    }

    public print(): void {
        return this.ej2Instances.print();
    }

    public refresh(): void {
        return this.ej2Instances.refresh();
    }

    public refreshColumns(): void {
        return this.ej2Instances.refreshColumns();
    }

    public refreshHeader(): void {
        return this.ej2Instances.refreshHeader();
    }

    public reorderColumns(fromFName: string, toFName: string): void {
        return this.ej2Instances.reorderColumns(fromFName, toFName);
    }

    public search(searchString: string): void {
        return this.ej2Instances.search(searchString);
    }

    public selectCell(cellIndex: Object, isToggle?: boolean): void {
        return this.ej2Instances.selectCell(cellIndex, isToggle);
    }

    public selectCheckboxes(indexes: number[]): void {
        return this.ej2Instances.selectCheckboxes(indexes);
    }

    public selectRow(index: number, isToggle?: boolean): void {
        return this.ej2Instances.selectRow(index, isToggle);
    }

    public selectRows(rowIndexes: number[]): void {
        return this.ej2Instances.selectRows(rowIndexes);
    }

    public setCellValue(key: string | number, field: string, value: string | number | boolean | Object): void {
        return this.ej2Instances.setCellValue(key, field, value);
    }

    public setRowData(key: string | number, rowData?: Object): void {
        return this.ej2Instances.setRowData(key, rowData);
    }

    public showColumns(keys: string | string[], showBy?: string): void {
        return this.ej2Instances.showColumns(keys, showBy);
    }

    public showSpinner(): void {
        return this.ej2Instances.showSpinner();
    }

    public sortByColumn(columnName: string, direction: Object, isMultiSort?: boolean): void {
        return this.ej2Instances.sortByColumn(columnName, direction, isMultiSort);
    }

    public startEdit(): void {
        return this.ej2Instances.startEdit();
    }
}

export const TreeGridPlugin = {
    name: 'ejs-treegrid',
    install(Vue: any) {
        Vue.component(TreeGridPlugin.name, TreeGridComponent);
        Vue.component(ColumnPlugin.name, ColumnDirective);
        Vue.component(ColumnsPlugin.name, ColumnsDirective);
        Vue.component(AggregatePlugin.name, AggregateDirective);
        Vue.component(AggregatesPlugin.name, AggregatesDirective);
        Vue.component(AggregateColumnPlugin.name, AggregateColumnDirective);
        Vue.component(AggregateColumnsPlugin.name, AggregateColumnsDirective);

    }
}
