import { Options } from 'vue-class-component';
import { isUndefined } from '@syncfusion/ej2-base';
import { ComponentBase, EJComponentDecorator, getProps, allVue, gh } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined, getValue } from '@syncfusion/ej2-base';

import { TreeGrid } from '@syncfusion/ej2-treegrid';
import { ColumnsDirective, ColumnDirective, ColumnsPlugin, ColumnPlugin } from './columns.directive'
import { AggregateColumnsDirective, AggregateColumnDirective, AggregateColumnsPlugin, AggregateColumnPlugin } from './aggregate-columns.directive'
import { AggregatesDirective, AggregateDirective, AggregatesPlugin, AggregatePlugin } from './aggregates.directive'


// {{VueImport}}
export const properties: string[] = ['isLazyUpdate', 'aggregates', 'allowExcelExport', 'allowFiltering', 'allowMultiSorting', 'allowPaging', 'allowPdfExport', 'allowReordering', 'allowResizing', 'allowRowDragAndDrop', 'allowSelection', 'allowSorting', 'allowTextWrap', 'autoCheckHierarchy', 'childMapping', 'clipMode', 'columnMenuItems', 'columnQueryMode', 'columns', 'contextMenuItems', 'copyHierarchyMode', 'dataSource', 'detailTemplate', 'editSettings', 'enableAdaptiveUI', 'enableAltRow', 'enableAutoFill', 'enableCollapseAll', 'enableColumnVirtualization', 'enableHover', 'enableImmutableMode', 'enableInfiniteScrolling', 'enablePersistence', 'enableRtl', 'enableVirtualization', 'expandStateMapping', 'filterSettings', 'frozenColumns', 'frozenRows', 'gridLines', 'hasChildMapping', 'height', 'idMapping', 'infiniteScrollSettings', 'loadChildOnDemand', 'locale', 'pageSettings', 'parentIdMapping', 'printMode', 'query', 'rowDropSettings', 'rowHeight', 'rowTemplate', 'searchSettings', 'selectedRowIndex', 'selectionSettings', 'showColumnChooser', 'showColumnMenu', 'sortSettings', 'textWrapSettings', 'toolbar', 'treeColumnIndex', 'width', 'actionBegin', 'actionComplete', 'actionFailure', 'batchAdd', 'batchCancel', 'batchDelete', 'beforeBatchAdd', 'beforeBatchDelete', 'beforeBatchSave', 'beforeCopy', 'beforeDataBound', 'beforeExcelExport', 'beforePaste', 'beforePdfExport', 'beforePrint', 'beginEdit', 'cellDeselected', 'cellDeselecting', 'cellEdit', 'cellSave', 'cellSaved', 'cellSelected', 'cellSelecting', 'checkboxChange', 'collapsed', 'collapsing', 'columnDrag', 'columnDragStart', 'columnDrop', 'columnMenuClick', 'columnMenuOpen', 'contextMenuClick', 'contextMenuOpen', 'created', 'dataBound', 'dataSourceChanged', 'dataStateChange', 'detailDataBound', 'excelExportComplete', 'excelHeaderQueryCellInfo', 'excelQueryCellInfo', 'expanded', 'expanding', 'headerCellInfo', 'load', 'pdfExportComplete', 'pdfHeaderQueryCellInfo', 'pdfQueryCellInfo', 'printComplete', 'queryCellInfo', 'recordDoubleClick', 'resizeStart', 'resizeStop', 'resizing', 'rowDataBound', 'rowDeselected', 'rowDeselecting', 'rowDrag', 'rowDragStart', 'rowDragStartHelper', 'rowDrop', 'rowSelected', 'rowSelecting', 'toolbarClick'];
export const modelProps: string[] = ['dataSource'];

export const testProp: any = getProps({props: properties});
export const props = testProp[0];
export const watch = testProp[1];

export const emitProbs: any = Object.keys(watch);
emitProbs.push('modelchanged');
for (let props of modelProps) {
    emitProbs.push(
        'update:'+props
    );
}

export const isExecute: any = gh ? false : true;

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
},isExecute)

/* Start Options({
    props: props,
    watch: watch,
    emits: emitProbs,
    provide: function provide() {
        return {
            custom: this.custom
        };
    }
}) End */

export class TreeGridComponent extends ComponentBase {
    
    public ej2Instances: any;
    public propKeys: string[] = properties;
    public models: string[] = modelProps;
    public hasChildDirective: boolean = true;
    protected hasInjectedModules: boolean = true;
    public tagMapper: { [key: string]: Object } = {"e-columns":"e-column","e-aggregates":{"e-aggregate":{"e-columns":"e-column"}}};
    public tagNameMapper: Object = {};
    public isVue3: boolean;
    public templateCollection: any;
    constructor() {
        super(arguments);
        this.isVue3 = !isExecute;
        this.ej2Instances = new TreeGrid({});        this.ej2Instances._trigger = this.ej2Instances.trigger;
        this.ej2Instances.trigger = this.trigger;

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
        if(this.isVue3) {
            this.models = !this.models ? this.ej2Instances.referModels : this.models;
        }
        if (this.ej2Instances && this.ej2Instances._setProperties) {
            this.ej2Instances._setProperties(prop, muteOnChange);
        }
        if (prop && this.models && this.models.length) {
            Object.keys(prop).map((key: string): void => {
                this.models.map((model: string): void => {
                    if ((key === model) && !(/datasource/i.test(key))) {
                        if (this.isVue3) {
                            this.ej2Instances.vueInstance.$emit('update:' + key, prop[key]);
                        } else {
                            (this as any).$emit('update:' + key, prop[key]);
                            (this as any).$emit('modelchanged', prop[key]);
                        }
                    }
                });
            });
        }
    }
    public trigger(eventName: string, eventProp: {[key:string]:Object}, successHandler?: Function): void {
        if(!isExecute) {
            this.models = !this.models ? this.ej2Instances.referModels : this.models;
        }
        if ((eventName === 'change' || eventName === 'input') && this.models && (this.models.length !== 0)) {
            let key: string[] = this.models.toString().match(/checked|value/) || [];
            let propKey: string = key[0];
            if (eventProp && key && !isUndefined(eventProp[propKey])) {
                if (!isExecute) {
                    this.ej2Instances.vueInstance.$emit('update:' + propKey, eventProp[propKey]);
                    this.ej2Instances.vueInstance.$emit('modelchanged', eventProp[propKey]);
                    this.ej2Instances.vueInstance.$emit('update:modelValue', eventProp[propKey]);
                } else {
                    if (eventName === 'change' || ((this as any).$props && !(this as any).$props.isLazyUpdate)) {
                        (this as any).$emit('update:'+ propKey, eventProp[propKey]);
                        (this as any).$emit('modelchanged', eventProp[propKey]);
                    }
                }
            }
        } else if ((eventName === 'actionBegin' && eventProp.requestType === 'dateNavigate') && this.models && (this.models.length !== 0)) {
            let key: string[] = this.models.toString().match(/currentView|selectedDate/) || [];
            let propKey: string = key[0];
            if (eventProp && key && !isUndefined(eventProp[propKey])) {
                if (!isExecute) {
                    this.ej2Instances.vueInstance.$emit('update:' + propKey, eventProp[propKey]);
                    this.ej2Instances.vueInstance.$emit('modelchanged', eventProp[propKey]);
                } else {
                    (this as any).$emit('update:'+ propKey, eventProp[propKey]);
                    (this as any).$emit('modelchanged', eventProp[propKey]);
                }
            }
        }
        if ((this.ej2Instances && this.ej2Instances._trigger)) {
            this.ej2Instances._trigger(eventName, eventProp, successHandler); 
        }
    }

    public render(createElement: any) {
        let h: any = gh || createElement;
        let slots: any = null;
        if(!isNullOrUndefined((this as any).$slots.default)) {
            slots = gh ? (this as any).$slots.default() : (this as any).$slots.default;
        }
        return h('div', slots);
    }
    public custom(): void {
        this.updated();
    }
    
    public addRecord(data?: Object, index?: number, position?: Object): void {
        return this.ej2Instances.addRecord(data, index, position);
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

    public collapseByKey(key: Object): void {
        return this.ej2Instances.collapseByKey(key);
    }

    public collapseRow(row: Object, record?: Object, key?: Object): void {
        return this.ej2Instances.collapseRow(row, record, key);
    }

    public copy(withHeader?: boolean): void {
        return this.ej2Instances.copy(withHeader);
    }

    public csvExport(excelExportProperties?: Object, isMultipleExport?: boolean, workbook?: any, isBlob?: boolean): Object {
        return this.ej2Instances.csvExport(excelExportProperties, isMultipleExport, workbook, isBlob);
    }

    public deleteRecord(fieldName?: string, data?: Object): void {
        return this.ej2Instances.deleteRecord(fieldName, data);
    }

    public deleteRow(tr: Object): void {
        return this.ej2Instances.deleteRow(tr);
    }

    public editCell(rowIndex?: number, field?: string): void {
        return this.ej2Instances.editCell(rowIndex, field);
    }

    public enableToolbarItems(items: string[], isEnable: boolean): void {
        return this.ej2Instances.enableToolbarItems(items, isEnable);
    }

    public endEdit(): void {
        return this.ej2Instances.endEdit();
    }

    public excelExport(excelExportProperties?: Object | Object, isMultipleExport?: boolean, workbook?: any, isBlob?: boolean): Object {
        return this.ej2Instances.excelExport(excelExportProperties, isMultipleExport, workbook, isBlob);
    }

    public expandAll(): void {
        return this.ej2Instances.expandAll();
    }

    public expandAtLevel(level: number): void {
        return this.ej2Instances.expandAtLevel(level);
    }

    public expandByKey(key: Object): void {
        return this.ej2Instances.expandByKey(key);
    }

    public expandRow(row: Object, record?: Object, key?: Object, level?: number): void {
        return this.ej2Instances.expandRow(row, record, key, level);
    }

    public extendRequiredModules(modules: Object[]): void {
        return this.ej2Instances.extendRequiredModules(modules);
    }

    public filterByColumn(fieldName: string, filterOperator: string, filterValue: string | number | Object | boolean | number[] | string[] | Object[] | boolean[], predicate?: string, matchCase?: boolean, ignoreAccent?: boolean, actualFilterValue?: string, actualOperator?: string): void {
        return this.ej2Instances.filterByColumn(fieldName, filterOperator, filterValue, predicate, matchCase, ignoreAccent, actualFilterValue, actualOperator);
    }

    public getBatchChanges(): Object {
        return this.ej2Instances.getBatchChanges();
    }

    public getCellFromIndex(rowIndex: number, columnIndex: number): Object {
        return this.ej2Instances.getCellFromIndex(rowIndex, columnIndex);
    }

    public getCheckedRecords(): Object[] {
        return this.ej2Instances.getCheckedRecords();
    }

    public getCheckedRowIndexes(): number[] {
        return this.ej2Instances.getCheckedRowIndexes();
    }

    public getColumnByField(field: string): Object {
        return this.ej2Instances.getColumnByField(field);
    }

    public getColumnByUid(uid: string): Object {
        return this.ej2Instances.getColumnByUid(uid);
    }

    public getColumnFieldNames(): string[] {
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

    public getColumns(isRefresh?: boolean): Object[] {
        return this.ej2Instances.getColumns(isRefresh);
    }

    public getContent(): Object {
        return this.ej2Instances.getContent();
    }

    public getContentTable(): Object {
        return this.ej2Instances.getContentTable();
    }

    public getCurrentViewRecords(): Object[] {
        return this.ej2Instances.getCurrentViewRecords();
    }

    public getDataModule(): Object {
        return this.ej2Instances.getDataModule();
    }

    public getDataRows(): Object[] {
        return this.ej2Instances.getDataRows();
    }

    public getFooterContent(): Object {
        return this.ej2Instances.getFooterContent();
    }

    public getFooterContentTable(): Object {
        return this.ej2Instances.getFooterContentTable();
    }

    public getFrozenLeftColumnHeaderByIndex(index: number): Object {
        return this.ej2Instances.getFrozenLeftColumnHeaderByIndex(index);
    }

    public getFrozenRightCellFromIndex(rowIndex: number, columnIndex: number): Object {
        return this.ej2Instances.getFrozenRightCellFromIndex(rowIndex, columnIndex);
    }

    public getFrozenRightColumnHeaderByIndex(index: number): Object {
        return this.ej2Instances.getFrozenRightColumnHeaderByIndex(index);
    }

    public getFrozenRightDataRows(): Object[] {
        return this.ej2Instances.getFrozenRightDataRows();
    }

    public getFrozenRightRowByIndex(index: number): Object {
        return this.ej2Instances.getFrozenRightRowByIndex(index);
    }

    public getFrozenRightRows(): Object[] {
        return this.ej2Instances.getFrozenRightRows();
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

    public getMovableColumnHeaderByIndex(index: number): Object {
        return this.ej2Instances.getMovableColumnHeaderByIndex(index);
    }

    public getMovableDataRows(): Object[] {
        return this.ej2Instances.getMovableDataRows();
    }

    public getMovableRowByIndex(index: number): Object {
        return this.ej2Instances.getMovableRowByIndex(index);
    }

    public getMovableRows(): Object[] {
        return this.ej2Instances.getMovableRows();
    }

    public getPager(): Object {
        return this.ej2Instances.getPager();
    }

    public getPrimaryKeyFieldNames(): string[] {
        return this.ej2Instances.getPrimaryKeyFieldNames();
    }

    public getRowByIndex(index: number): Object {
        return this.ej2Instances.getRowByIndex(index);
    }

    public getRowInfo(target: Object | Object): Object {
        return this.ej2Instances.getRowInfo(target);
    }

    public getRows(): Object[] {
        return this.ej2Instances.getRows();
    }

    public getSelectedRecords(): Object[] {
        return this.ej2Instances.getSelectedRecords();
    }

    public getSelectedRowCellIndexes(): Object[] {
        return this.ej2Instances.getSelectedRowCellIndexes();
    }

    public getSelectedRowIndexes(): number[] {
        return this.ej2Instances.getSelectedRowIndexes();
    }

    public getSelectedRows(): Object[] {
        return this.ej2Instances.getSelectedRows();
    }

    public getUidByColumnField(field: string): string {
        return this.ej2Instances.getUidByColumnField(field);
    }

    public getVisibleColumns(): Object[] {
        return this.ej2Instances.getVisibleColumns();
    }

    public getVisibleRecords(): Object[] {
        return this.ej2Instances.getVisibleRecords();
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

    public indent(record?: Object): void {
        return this.ej2Instances.indent(record);
    }

    public openColumnChooser(x?: number, y?: number): void {
        return this.ej2Instances.openColumnChooser(x, y);
    }

    public outdent(record?: Object): void {
        return this.ej2Instances.outdent(record);
    }

    public paste(data: string, rowIndex: number, colIndex: number): void {
        return this.ej2Instances.paste(data, rowIndex, colIndex);
    }

    public pdfExport(pdfExportProperties?: Object | Object, isMultipleExport?: boolean, pdfDoc?: Object, isBlob?: boolean): Object {
        return this.ej2Instances.pdfExport(pdfExportProperties, isMultipleExport, pdfDoc, isBlob);
    }

    public print(): void {
        return this.ej2Instances.print();
    }

    public refresh(): void {
        return this.ej2Instances.refresh();
    }

    public refreshColumns(refreshUI?: boolean): void {
        return this.ej2Instances.refreshColumns(refreshUI);
    }

    public refreshHeader(): void {
        return this.ej2Instances.refreshHeader();
    }

    public reorderColumns(fromFName: string | string[], toFName: string): void {
        return this.ej2Instances.reorderColumns(fromFName, toFName);
    }

    public reorderRows(fromIndexes: number[], toIndex: number, position: string): void {
        return this.ej2Instances.reorderRows(fromIndexes, toIndex, position);
    }

    public saveCell(): void {
        return this.ej2Instances.saveCell();
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

    public startEdit(row?: Object): void {
        return this.ej2Instances.startEdit(row);
    }

    public updateCell(rowIndex: number, field: string, value: string | number | boolean | Object): void {
        return this.ej2Instances.updateCell(rowIndex, field, value);
    }

    public updateExternalMessage(message: string): void {
        return this.ej2Instances.updateExternalMessage(message);
    }

    public updateRow(index: number, data: Object): void {
        return this.ej2Instances.updateRow(index, data);
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