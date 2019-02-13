import Vue from 'vue';
import { isUndefined } from '@syncfusion/ej2-base';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';
import { Grid } from '@syncfusion/ej2-grids';
import { ColumnsDirective, ColumnDirective, ColumnsPlugin, ColumnPlugin } from './columns.directive'
import { AggregateColumnsDirective, AggregateColumnDirective, AggregateColumnsPlugin, AggregateColumnPlugin } from './aggregate-columns.directive'
import { AggregatesDirective, AggregateDirective, AggregatesPlugin, AggregatePlugin } from './aggregates.directive'


export const properties: string[] = ['aggregates', 'allowExcelExport', 'allowFiltering', 'allowGrouping', 'allowMultiSorting', 'allowPaging', 'allowPdfExport', 'allowReordering', 'allowResizing', 'allowRowDragAndDrop', 'allowSelection', 'allowSorting', 'allowTextWrap', 'childGrid', 'columnMenuItems', 'columnQueryMode', 'columns', 'contextMenuItems', 'currencyCode', 'dataSource', 'detailTemplate', 'editSettings', 'enableAltRow', 'enableAutoFill', 'enableColumnVirtualization', 'enableHover', 'enablePersistence', 'enableRtl', 'enableVirtualization', 'filterSettings', 'frozenColumns', 'frozenRows', 'gridLines', 'groupSettings', 'height', 'hierarchyPrintMode', 'locale', 'pageSettings', 'printMode', 'query', 'queryString', 'rowDropSettings', 'rowHeight', 'rowTemplate', 'searchSettings', 'selectedRowIndex', 'selectionSettings', 'showColumnChooser', 'showColumnMenu', 'sortSettings', 'textWrapSettings', 'toolbar', 'width', 'actionBegin', 'actionComplete', 'actionFailure', 'batchAdd', 'batchCancel', 'batchDelete', 'beforeBatchAdd', 'beforeBatchDelete', 'beforeBatchSave', 'beforeCopy', 'beforeDataBound', 'beforeExcelExport', 'beforeOpenColumnChooser', 'beforePdfExport', 'beforePrint', 'beginEdit', 'cellDeselected', 'cellDeselecting', 'cellEdit', 'cellSave', 'cellSaved', 'cellSelected', 'cellSelecting', 'checkBoxChange', 'columnDrag', 'columnDragStart', 'columnDrop', 'columnMenuClick', 'columnMenuOpen', 'contextMenuClick', 'contextMenuOpen', 'created', 'dataBound', 'dataSourceChanged', 'dataStateChange', 'destroyed', 'detailDataBound', 'excelExportComplete', 'excelHeaderQueryCellInfo', 'excelQueryCellInfo', 'exportDetailDataBound', 'headerCellInfo', 'load', 'pdfExportComplete', 'pdfHeaderQueryCellInfo', 'pdfQueryCellInfo', 'printComplete', 'queryCellInfo', 'recordDoubleClick', 'resizeStart', 'resizeStop', 'resizing', 'rowDataBound', 'rowDeselected', 'rowDeselecting', 'rowDrag', 'rowDragStart', 'rowDragStartHelper', 'rowDrop', 'rowSelected', 'rowSelecting', 'toolbarClick'];
export const modelProps: string[] = ['dataSource'];

/**
 * `ejs-grid` represents the VueJS Grid Component.
 * ```vue
 * <ejs-grid :dataSource='data' allowPaging='true' allowSorting='true'></ejs-grid>
 * ```
 */
@EJComponentDecorator({
    props: properties,
    model: {
        event: 'modelchanged'
    }
})
export class GridComponent extends ComponentBase {
    
    public ej2Instances: any;
    public propKeys: string[] = properties;
    public models: string[] = modelProps;
    public hasChildDirective: boolean = true;
    protected hasInjectedModules: boolean = true;
    public tagMapper: { [key: string]: Object } = {"e-columns":"e-column","e-aggregates":{"e-aggregate":{"e-columns":"e-column"}}};
    public tagNameMapper: Object = {};
    
    constructor() {
        super();
        this.ej2Instances = new Grid({});        this.ej2Instances._trigger = this.ej2Instances.trigger;
        this.ej2Instances.trigger = this.trigger;
        //this.ej2Instances._setProperties = this.ej2Instances.setProperties;
        //this.ej2Instances.setProperties = this.setProperties;

        this.bindProperties();
    }
    public trigger(eventName: string, eventProp: {[key:string]:Object}): void {
        if ((eventName === 'change' || eventName === 'input') && this.models && (this.models.length !== 0)) {
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

    public copy(withHeader?: boolean): void {
        return this.ej2Instances.copy(withHeader);
    }

    public csvExport(excelExportProperties?: Object, isMultipleExport?: boolean, workbook?: any, isBlob?: boolean): Object {
        return this.ej2Instances.csvExport(excelExportProperties, isMultipleExport, workbook, isBlob);
    }

    public deleteRecord(fieldname?: string, data?: Object): void {
        return this.ej2Instances.deleteRecord(fieldname, data);
    }

    public deleteRow(tr: Object): void {
        return this.ej2Instances.deleteRow(tr);
    }

    public destroyTemplate(propertyNames?: string[], index?: any): void {
        return this.ej2Instances.destroyTemplate(propertyNames, index);
    }

    public endEdit(): void {
        return this.ej2Instances.endEdit();
    }

    public excelExport(excelExportProperties?: Object, isMultipleExport?: boolean, workbook?: any, isBlob?: boolean): Object {
        return this.ej2Instances.excelExport(excelExportProperties, isMultipleExport, workbook, isBlob);
    }

    public extendRequiredModules(modules: Object[]): void {
        return this.ej2Instances.extendRequiredModules(modules);
    }

    public filterByColumn(fieldName: string, filterOperator: string, filterValue: string | number | Object | boolean, predicate?: string, matchCase?: boolean, ignoreAccent?: boolean, actualFilterValue?: string, actualOperator?: string): void {
        return this.ej2Instances.filterByColumn(fieldName, filterOperator, filterValue, predicate, matchCase, ignoreAccent, actualFilterValue, actualOperator);
    }

    public getCellFromIndex(rowIndex: number, columnIndex: number): Object {
        return this.ej2Instances.getCellFromIndex(rowIndex, columnIndex);
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

    public getDataModule(): Object {
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

    public getForeignKeyColumns(): undefined {
        return this.ej2Instances.getForeignKeyColumns();
    }

    public getHeaderContent(): Object {
        return this.ej2Instances.getHeaderContent();
    }

    public getHeaderTable(): Object {
        return this.ej2Instances.getHeaderTable();
    }

    public getMovableCellFromIndex(rowIndex: number, columnIndex: number): Object {
        return this.ej2Instances.getMovableCellFromIndex(rowIndex, columnIndex);
    }

    public getMovableDataRows(): undefined {
        return this.ej2Instances.getMovableDataRows();
    }

    public getMovableRowByIndex(index: number): Object {
        return this.ej2Instances.getMovableRowByIndex(index);
    }

    public getMovableRows(): undefined {
        return this.ej2Instances.getMovableRows();
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

    public groupColumn(columnName: string): void {
        return this.ej2Instances.groupColumn(columnName);
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

    public reorderColumnByIndex(fromIndex: number, toIndex: number): void {
        return this.ej2Instances.reorderColumnByIndex(fromIndex, toIndex);
    }

    public reorderColumnByTargetIndex(fieldName: string | string[], toIndex: number): void {
        return this.ej2Instances.reorderColumnByTargetIndex(fieldName, toIndex);
    }

    public reorderColumns(fromFName: string | string[], toFName: string): void {
        return this.ej2Instances.reorderColumns(fromFName, toFName);
    }

    public reorderRows(fromIndexes: number[], toIndex: number): void {
        return this.ej2Instances.reorderRows(fromIndexes, toIndex);
    }

    public search(searchString: string): void {
        return this.ej2Instances.search(searchString);
    }

    public selectCell(cellIndex: Object, isToggle?: boolean): void {
        return this.ej2Instances.selectCell(cellIndex, isToggle);
    }

    public selectCellsByRange(startIndex: Object, endIndex?: Object): void {
        return this.ej2Instances.selectCellsByRange(startIndex, endIndex);
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

    public setGridContent(element: Object): void {
        return this.ej2Instances.setGridContent(element);
    }

    public setGridContentTable(element: Object): void {
        return this.ej2Instances.setGridContentTable(element);
    }

    public setGridHeaderContent(element: Object): void {
        return this.ej2Instances.setGridHeaderContent(element);
    }

    public setGridHeaderTable(element: Object): void {
        return this.ej2Instances.setGridHeaderTable(element);
    }

    public setGridPager(element: Object): void {
        return this.ej2Instances.setGridPager(element);
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

    public sortColumn(columnName: string, direction: Object, isMultiSort?: boolean): void {
        return this.ej2Instances.sortColumn(columnName, direction, isMultiSort);
    }

    public startEdit(): void {
        return this.ej2Instances.startEdit();
    }

    public ungroupColumn(columnName: string): void {
        return this.ej2Instances.ungroupColumn(columnName);
    }

    public updateExternalMessage(message: string): void {
        return this.ej2Instances.updateExternalMessage(message);
    }
}

export const GridPlugin = {
    name: 'ejs-grid',
    install(Vue: any) {
        Vue.component(GridPlugin.name, GridComponent);
        Vue.component(ColumnPlugin.name, ColumnDirective);
        Vue.component(ColumnsPlugin.name, ColumnsDirective);
        Vue.component(AggregatePlugin.name, AggregateDirective);
        Vue.component(AggregatesPlugin.name, AggregatesDirective);
        Vue.component(AggregateColumnPlugin.name, AggregateColumnDirective);
        Vue.component(AggregateColumnsPlugin.name, AggregateColumnsDirective);

    }
}
