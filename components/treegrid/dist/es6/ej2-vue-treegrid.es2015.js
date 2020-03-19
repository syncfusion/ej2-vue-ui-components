import { TreeGrid } from '@syncfusion/ej2-treegrid';
import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';
import { isUndefined } from '@syncfusion/ej2-base';

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let ColumnsDirective = class ColumnsDirective extends Vue {
    render() {
        return;
    }
};
ColumnsDirective = __decorate([
    EJComponentDecorator({})
], ColumnsDirective);
const ColumnsPlugin = {
    name: 'e-columns',
    install(Vue$$1) {
        Vue$$1.component(ColumnsPlugin.name, ColumnsDirective);
    }
};
/**
 * `e-column` directive represent a column of the VueJS TreeGrid.
 * It must be contained in a TreeGrid component(`ejs-treegrid`).
 * ```vue
 * <ejs-treegrid :dataSource='data' allowPaging='true' allowSorting='true'>
 *   <e-columns>
 *    <e-column field='ID' width='100'/>
 *    <e-column field='name' headerText='Name' width='100'/>
 *   </e-columns>
 * </ejs-treegrid>
 * ```
 */
let ColumnDirective = class ColumnDirective extends Vue {
    render() {
        return;
    }
};
ColumnDirective = __decorate([
    EJComponentDecorator({})
], ColumnDirective);
const ColumnPlugin = {
    name: 'e-column',
    install(Vue$$1) {
        Vue$$1.component(ColumnPlugin.name, ColumnDirective);
    }
};

var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let AggregateColumnsDirective = class AggregateColumnsDirective extends Vue {
    render() {
        return;
    }
};
AggregateColumnsDirective = __decorate$1([
    EJComponentDecorator({})
], AggregateColumnsDirective);
const AggregateColumnsPlugin = {
    name: 'e-columns',
    install(Vue$$1) {
        Vue$$1.component(AggregateColumnsPlugin.name, AggregateColumnsDirective);
    }
};
/**
 * `e-aggregate->e-column` directive represent a aggregate column of the VueJS TreeGrid.
 * ```vue
 * <ejs-treegrid :dataSource='data' allowPaging='true' allowSorting='true'>
 *   <e-columns>
 *     <e-column field='ID' width='100'/>
 *     <e-column field='name' headerText='Name' width='100'/>
 *   </e-columns>
 *   <e-aggregates>
 *     <e-aggregate>
 *       <e-columns>
 *         <e-column field='ID' type='Min'/>
 *       </e-columns>
 *      </e-aggregate>
 *    </e-aggregates>
 * </ejs-treegrid>
 * ```
 */
let AggregateColumnDirective = class AggregateColumnDirective extends Vue {
    render() {
        return;
    }
};
AggregateColumnDirective = __decorate$1([
    EJComponentDecorator({})
], AggregateColumnDirective);
const AggregateColumnPlugin = {
    name: 'e-column',
    install(Vue$$1) {
        Vue$$1.component(AggregateColumnPlugin.name, AggregateColumnDirective);
    }
};

var __decorate$2 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let AggregatesDirective = class AggregatesDirective extends Vue {
    render() {
        return;
    }
};
AggregatesDirective = __decorate$2([
    EJComponentDecorator({})
], AggregatesDirective);
const AggregatesPlugin = {
    name: 'e-aggregates',
    install(Vue$$1) {
        Vue$$1.component(AggregatesPlugin.name, AggregatesDirective);
    }
};
/**
 * `e-aggregate` directive represent a aggregate row of the VueJS TreeGrid.
 * It must be contained in a TreeGrid component(`ejs-treegrid`).
 * ```vue
 * <ejs-treegrid :dataSource]='data' allowPaging='true' allowSorting='true'>
 *   <e-columns>
 *     <e-column field='ID' width='100'/>
 *     <e-column field='name' headerText='Name' width='100'/>
 *   </e-columns>
 *   <e-aggregates>
 *     <e-aggregate>
 *       <e-columns>
 *         <e-column field='ID' type='Min'/>
 *       </e-columns>
 *      </e-aggregate>
 *    </e-aggregates>
 * </ejs-treegrid>
 * ```
 */
let AggregateDirective = class AggregateDirective extends Vue {
    render() {
        return;
    }
};
AggregateDirective = __decorate$2([
    EJComponentDecorator({})
], AggregateDirective);
const AggregatePlugin = {
    name: 'e-aggregate',
    install(Vue$$1) {
        Vue$$1.component(AggregatePlugin.name, AggregateDirective);
    }
};

var __decorate$3 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const properties = ['aggregates', 'allowExcelExport', 'allowFiltering', 'allowMultiSorting', 'allowPaging', 'allowPdfExport', 'allowReordering', 'allowResizing', 'allowRowDragAndDrop', 'allowSelection', 'allowSorting', 'allowTextWrap', 'autoCheckHierarchy', 'childMapping', 'clipMode', 'columnMenuItems', 'columnQueryMode', 'columns', 'contextMenuItems', 'copyHierarchyMode', 'dataSource', 'detailTemplate', 'editSettings', 'enableAltRow', 'enableAutoFill', 'enableCollapseAll', 'enableHover', 'enablePersistence', 'enableRtl', 'enableVirtualization', 'expandStateMapping', 'filterSettings', 'frozenColumns', 'frozenRows', 'gridLines', 'hasChildMapping', 'height', 'idMapping', 'loadChildOnDemand', 'locale', 'pageSettings', 'parentIdMapping', 'printMode', 'query', 'rowDropSettings', 'rowHeight', 'rowTemplate', 'searchSettings', 'selectedRowIndex', 'selectionSettings', 'showColumnMenu', 'sortSettings', 'textWrapSettings', 'toolbar', 'treeColumnIndex', 'width', 'actionBegin', 'actionComplete', 'actionFailure', 'batchAdd', 'batchCancel', 'batchDelete', 'beforeBatchAdd', 'beforeBatchDelete', 'beforeBatchSave', 'beforeCopy', 'beforeDataBound', 'beforeExcelExport', 'beforePaste', 'beforePdfExport', 'beforePrint', 'beginEdit', 'cellDeselected', 'cellDeselecting', 'cellEdit', 'cellSave', 'cellSaved', 'cellSelected', 'cellSelecting', 'checkboxChange', 'collapsed', 'collapsing', 'columnDrag', 'columnDragStart', 'columnDrop', 'columnMenuClick', 'columnMenuOpen', 'contextMenuClick', 'contextMenuOpen', 'created', 'dataBound', 'dataSourceChanged', 'dataStateChange', 'detailDataBound', 'excelExportComplete', 'excelHeaderQueryCellInfo', 'excelQueryCellInfo', 'expanded', 'expanding', 'headerCellInfo', 'load', 'pdfExportComplete', 'pdfHeaderQueryCellInfo', 'pdfQueryCellInfo', 'printComplete', 'queryCellInfo', 'recordDoubleClick', 'resizeStart', 'resizeStop', 'resizing', 'rowDataBound', 'rowDeselected', 'rowDeselecting', 'rowDrag', 'rowDragStart', 'rowDragStartHelper', 'rowDrop', 'rowSelected', 'rowSelecting', 'toolbarClick'];
const modelProps = ['dataSource'];
/**
 * `ejs-treegrid` represents the VueJS TreeGrid Component.
 * ```vue
 * <ejs-treegrid :dataSource='data' allowPaging='true' allowSorting='true'></ejs-treegrid>
 * ```
 */
let TreeGridComponent = class TreeGridComponent extends ComponentBase {
    constructor() {
        super();
        this.propKeys = properties;
        this.models = modelProps;
        this.hasChildDirective = true;
        this.hasInjectedModules = true;
        this.tagMapper = { "e-columns": "e-column", "e-aggregates": { "e-aggregate": { "e-columns": "e-column" } } };
        this.tagNameMapper = {};
        this.ej2Instances = new TreeGrid({});
        this.ej2Instances._trigger = this.ej2Instances.trigger;
        this.ej2Instances.trigger = this.trigger;
        this.bindProperties();
        this.ej2Instances._setProperties = this.ej2Instances.setProperties;
        this.ej2Instances.setProperties = this.setProperties;
    }
    setProperties(prop, muteOnChange) {
        if (this.ej2Instances && this.ej2Instances._setProperties) {
            this.ej2Instances._setProperties(prop, muteOnChange);
        }
        if (prop && this.models && this.models.length) {
            Object.keys(prop).map((key) => {
                this.models.map((model) => {
                    if ((key === model) && !(/datasource/i.test(key))) {
                        this.$emit('update:' + key, prop[key]);
                    }
                });
            });
        }
    }
    trigger(eventName, eventProp, successHandler) {
        if ((eventName === 'change' || eventName === 'input') && this.models && (this.models.length !== 0)) {
            let key = this.models.toString().match(/checked|value/) || [];
            let propKey = key[0];
            if (eventProp && key && !isUndefined(eventProp[propKey])) {
                this.$emit('update:' + propKey, eventProp[propKey]);
                this.$emit('modelchanged', eventProp[propKey]);
            }
        }
        if (this.ej2Instances && this.ej2Instances._trigger) {
            this.ej2Instances._trigger(eventName, eventProp, successHandler);
        }
    }
    render(createElement) {
        return createElement('div', this.$slots.default);
    }
    addRecord(data, index, position) {
        return this.ej2Instances.addRecord(data, index, position);
    }
    autoFitColumns(fieldNames) {
        return this.ej2Instances.autoFitColumns(fieldNames);
    }
    clearFiltering() {
        return this.ej2Instances.clearFiltering();
    }
    clearSelection() {
        return this.ej2Instances.clearSelection();
    }
    clearSorting() {
        return this.ej2Instances.clearSorting();
    }
    closeEdit() {
        return this.ej2Instances.closeEdit();
    }
    collapseAll() {
        return this.ej2Instances.collapseAll();
    }
    collapseAtLevel(level) {
        return this.ej2Instances.collapseAtLevel(level);
    }
    collapseRow(row, record) {
        return this.ej2Instances.collapseRow(row, record);
    }
    copy(withHeader) {
        return this.ej2Instances.copy(withHeader);
    }
    csvExport(excelExportProperties, isMultipleExport, workbook, isBlob) {
        return this.ej2Instances.csvExport(excelExportProperties, isMultipleExport, workbook, isBlob);
    }
    deleteRecord(fieldName, data) {
        return this.ej2Instances.deleteRecord(fieldName, data);
    }
    deleteRow(tr) {
        return this.ej2Instances.deleteRow(tr);
    }
    editCell(rowIndex, field) {
        return this.ej2Instances.editCell(rowIndex, field);
    }
    enableToolbarItems(items, isEnable) {
        return this.ej2Instances.enableToolbarItems(items, isEnable);
    }
    endEdit() {
        return this.ej2Instances.endEdit();
    }
    excelExport(excelExportProperties, isMultipleExport, workbook, isBlob) {
        return this.ej2Instances.excelExport(excelExportProperties, isMultipleExport, workbook, isBlob);
    }
    expandAll() {
        return this.ej2Instances.expandAll();
    }
    expandAtLevel(level) {
        return this.ej2Instances.expandAtLevel(level);
    }
    expandRow(row, record) {
        return this.ej2Instances.expandRow(row, record);
    }
    filterByColumn(fieldName, filterOperator, filterValue, predicate, matchCase, ignoreAccent, actualFilterValue, actualOperator) {
        return this.ej2Instances.filterByColumn(fieldName, filterOperator, filterValue, predicate, matchCase, ignoreAccent, actualFilterValue, actualOperator);
    }
    getBatchChanges() {
        return this.ej2Instances.getBatchChanges();
    }
    getCellFromIndex(rowIndex, columnIndex) {
        return this.ej2Instances.getCellFromIndex(rowIndex, columnIndex);
    }
    getCheckedRecords() {
        return this.ej2Instances.getCheckedRecords();
    }
    getCheckedRowIndexes() {
        return this.ej2Instances.getCheckedRowIndexes();
    }
    getColumnByField(field) {
        return this.ej2Instances.getColumnByField(field);
    }
    getColumnByUid(uid) {
        return this.ej2Instances.getColumnByUid(uid);
    }
    getColumnFieldNames() {
        return this.ej2Instances.getColumnFieldNames();
    }
    getColumnHeaderByField(field) {
        return this.ej2Instances.getColumnHeaderByField(field);
    }
    getColumnHeaderByIndex(index) {
        return this.ej2Instances.getColumnHeaderByIndex(index);
    }
    getColumnHeaderByUid(uid) {
        return this.ej2Instances.getColumnHeaderByUid(uid);
    }
    getColumnIndexByField(field) {
        return this.ej2Instances.getColumnIndexByField(field);
    }
    getColumnIndexByUid(uid) {
        return this.ej2Instances.getColumnIndexByUid(uid);
    }
    getColumns(isRefresh) {
        return this.ej2Instances.getColumns(isRefresh);
    }
    getContent() {
        return this.ej2Instances.getContent();
    }
    getContentTable() {
        return this.ej2Instances.getContentTable();
    }
    getCurrentViewRecords() {
        return this.ej2Instances.getCurrentViewRecords();
    }
    getDataModule() {
        return this.ej2Instances.getDataModule();
    }
    getDataRows() {
        return this.ej2Instances.getDataRows();
    }
    getFooterContent() {
        return this.ej2Instances.getFooterContent();
    }
    getFooterContentTable() {
        return this.ej2Instances.getFooterContentTable();
    }
    getHeaderContent() {
        return this.ej2Instances.getHeaderContent();
    }
    getHeaderTable() {
        return this.ej2Instances.getHeaderTable();
    }
    getMovableCellFromIndex(rowIndex, columnIndex) {
        return this.ej2Instances.getMovableCellFromIndex(rowIndex, columnIndex);
    }
    getMovableDataRows() {
        return this.ej2Instances.getMovableDataRows();
    }
    getMovableRowByIndex(index) {
        return this.ej2Instances.getMovableRowByIndex(index);
    }
    getMovableRows() {
        return this.ej2Instances.getMovableRows();
    }
    getPager() {
        return this.ej2Instances.getPager();
    }
    getPrimaryKeyFieldNames() {
        return this.ej2Instances.getPrimaryKeyFieldNames();
    }
    getRowByIndex(index) {
        return this.ej2Instances.getRowByIndex(index);
    }
    getRowInfo(target) {
        return this.ej2Instances.getRowInfo(target);
    }
    getRows() {
        return this.ej2Instances.getRows();
    }
    getSelectedRecords() {
        return this.ej2Instances.getSelectedRecords();
    }
    getSelectedRowCellIndexes() {
        return this.ej2Instances.getSelectedRowCellIndexes();
    }
    getSelectedRowIndexes() {
        return this.ej2Instances.getSelectedRowIndexes();
    }
    getSelectedRows() {
        return this.ej2Instances.getSelectedRows();
    }
    getUidByColumnField(field) {
        return this.ej2Instances.getUidByColumnField(field);
    }
    getVisibleColumns() {
        return this.ej2Instances.getVisibleColumns();
    }
    goToPage(pageNo) {
        return this.ej2Instances.goToPage(pageNo);
    }
    hideColumns(keys, hideBy) {
        return this.ej2Instances.hideColumns(keys, hideBy);
    }
    hideSpinner() {
        return this.ej2Instances.hideSpinner();
    }
    paste(data, rowIndex, colIndex) {
        return this.ej2Instances.paste(data, rowIndex, colIndex);
    }
    pdfExport(pdfExportProperties, isMultipleExport, pdfDoc, isBlob) {
        return this.ej2Instances.pdfExport(pdfExportProperties, isMultipleExport, pdfDoc, isBlob);
    }
    print() {
        return this.ej2Instances.print();
    }
    refresh() {
        return this.ej2Instances.refresh();
    }
    refreshColumns(refreshUI) {
        return this.ej2Instances.refreshColumns(refreshUI);
    }
    refreshHeader() {
        return this.ej2Instances.refreshHeader();
    }
    reorderColumns(fromFName, toFName) {
        return this.ej2Instances.reorderColumns(fromFName, toFName);
    }
    reorderRows(fromIndexes, toIndex, position) {
        return this.ej2Instances.reorderRows(fromIndexes, toIndex, position);
    }
    saveCell() {
        return this.ej2Instances.saveCell();
    }
    search(searchString) {
        return this.ej2Instances.search(searchString);
    }
    selectCell(cellIndex, isToggle) {
        return this.ej2Instances.selectCell(cellIndex, isToggle);
    }
    selectCheckboxes(indexes) {
        return this.ej2Instances.selectCheckboxes(indexes);
    }
    selectRow(index, isToggle) {
        return this.ej2Instances.selectRow(index, isToggle);
    }
    selectRows(rowIndexes) {
        return this.ej2Instances.selectRows(rowIndexes);
    }
    setCellValue(key, field, value) {
        return this.ej2Instances.setCellValue(key, field, value);
    }
    setRowData(key, rowData) {
        return this.ej2Instances.setRowData(key, rowData);
    }
    showColumns(keys, showBy) {
        return this.ej2Instances.showColumns(keys, showBy);
    }
    showSpinner() {
        return this.ej2Instances.showSpinner();
    }
    sortByColumn(columnName, direction, isMultiSort) {
        return this.ej2Instances.sortByColumn(columnName, direction, isMultiSort);
    }
    startEdit(row) {
        return this.ej2Instances.startEdit(row);
    }
    updateCell(rowIndex, field, value) {
        return this.ej2Instances.updateCell(rowIndex, field, value);
    }
    updateExternalMessage(message) {
        return this.ej2Instances.updateExternalMessage(message);
    }
    updateRow(index, data) {
        return this.ej2Instances.updateRow(index, data);
    }
};
TreeGridComponent = __decorate$3([
    EJComponentDecorator({
        props: properties,
        model: {
            event: 'modelchanged'
        }
    })
], TreeGridComponent);
const TreeGridPlugin = {
    name: 'ejs-treegrid',
    install(Vue$$1) {
        Vue$$1.component(TreeGridPlugin.name, TreeGridComponent);
        Vue$$1.component(ColumnPlugin.name, ColumnDirective);
        Vue$$1.component(ColumnsPlugin.name, ColumnsDirective);
        Vue$$1.component(AggregatePlugin.name, AggregateDirective);
        Vue$$1.component(AggregatesPlugin.name, AggregatesDirective);
        Vue$$1.component(AggregateColumnPlugin.name, AggregateColumnDirective);
        Vue$$1.component(AggregateColumnsPlugin.name, AggregateColumnsDirective);
    }
};

export { ColumnsDirective, ColumnDirective, ColumnsPlugin, ColumnPlugin, AggregateColumnsDirective, AggregateColumnDirective, AggregateColumnsPlugin, AggregateColumnPlugin, AggregatesDirective, AggregateDirective, AggregatesPlugin, AggregatePlugin, TreeGridComponent, TreeGridPlugin };
export * from '@syncfusion/ej2-treegrid';
//# sourceMappingURL=ej2-vue-treegrid.es2015.js.map
