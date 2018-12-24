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
const properties = ['aggregates', 'allowExcelExport', 'allowFiltering', 'allowMultiSorting', 'allowPaging', 'allowPdfExport', 'allowReordering', 'allowResizing', 'allowSelection', 'allowSorting', 'allowTextWrap', 'childMapping', 'columnQueryMode', 'columns', 'contextMenuItems', 'dataSource', 'editSettings', 'enableAltRow', 'enableCollapseAll', 'enableHover', 'enablePersistence', 'enableRtl', 'expandStateMapping', 'filterSettings', 'gridLines', 'hasChildMapping', 'height', 'idMapping', 'locale', 'pageSettings', 'parentIdMapping', 'printMode', 'query', 'rowHeight', 'searchSettings', 'selectedRowIndex', 'selectionSettings', 'showColumnMenu', 'sortSettings', 'textWrapSettings', 'toolbar', 'treeColumnIndex', 'width', 'actionBegin', 'actionComplete', 'actionFailure', 'beforeDataBound', 'beforeExcelExport', 'beforePdfExport', 'beforePrint', 'beginEdit', 'cellDeselected', 'cellDeselecting', 'cellEdit', 'cellSelected', 'cellSelecting', 'collapsed', 'collapsing', 'columnDrag', 'columnDragStart', 'columnDrop', 'contextMenuClick', 'contextMenuOpen', 'created', 'dataBound', 'dataSourceChanged', 'dataStateChange', 'excelExportComplete', 'excelHeaderQueryCellInfo', 'excelQueryCellInfo', 'expanded', 'expanding', 'headerCellInfo', 'load', 'pdfExportComplete', 'pdfHeaderQueryCellInfo', 'pdfQueryCellInfo', 'printComplete', 'queryCellInfo', 'recordDoubleClick', 'resizeStart', 'resizeStop', 'resizing', 'rowDataBound', 'rowDeselected', 'rowDeselecting', 'rowSelected', 'rowSelecting', 'toolbarClick'];
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
        //this.ej2Instances._setProperties = this.ej2Instances.setProperties;
        //this.ej2Instances.setProperties = this.setProperties;
        this.bindProperties();
    }
    trigger(eventName, eventProp) {
        if ((eventName === 'change' || eventName === 'input') && this.models && (this.models.length !== 0)) {
            let key = this.models.toString().match(/checked|value/) || [];
            let propKey = key[0];
            if (eventProp && key && !isUndefined(eventProp[propKey])) {
                this.$emit('modelchanged', eventProp[propKey]);
            }
        }
        if (this.ej2Instances && this.ej2Instances._trigger) {
            this.ej2Instances._trigger(eventName, eventProp);
        }
    }
    setProperties(prop, muteOnChange) {
        if (this.ej2Instances && this.ej2Instances._setProperties) {
            this.ej2Instances._setProperties(prop, muteOnChange);
        }
        if (prop && this.models && (this.models.length !== 0)) {
            let keys = Object.keys(prop);
            let emitKeys = [];
            let emitFlag = false;
            keys.map((key) => {
                this.models.map((model) => {
                    if ((key === model) && !(/datasource/i.test(key))) {
                        emitKeys.push(key);
                        emitFlag = true;
                    }
                });
            });
            if (emitFlag) {
                emitKeys.map((propKey) => {
                    this.$emit('update:' + propKey, prop[propKey]);
                });
            }
        }
    }
    render(createElement) {
        return createElement('div', this.$slots.default);
    }
    addRecord(data, index) {
        return this.ej2Instances.addRecord(data, index);
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
    csvExport(excelExportProperties, isMultipleExport, workbook, isBlob) {
        return this.ej2Instances.csvExport(excelExportProperties, isMultipleExport, workbook, isBlob);
    }
    dataBind() {
        return this.ej2Instances.dataBind();
    }
    deleteRecord(fieldName, data) {
        return this.ej2Instances.deleteRecord(fieldName, data);
    }
    deleteRow(tr) {
        return this.ej2Instances.deleteRow(tr);
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
    getCellFromIndex(rowIndex, columnIndex) {
        return this.ej2Instances.getCellFromIndex(rowIndex, columnIndex);
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
    pdfExport(pdfExportProperties, isMultipleExport, pdfDoc, isBlob) {
        return this.ej2Instances.pdfExport(pdfExportProperties, isMultipleExport, pdfDoc, isBlob);
    }
    print() {
        return this.ej2Instances.print();
    }
    refresh() {
        return this.ej2Instances.refresh();
    }
    refreshColumns() {
        return this.ej2Instances.refreshColumns();
    }
    refreshHeader() {
        return this.ej2Instances.refreshHeader();
    }
    reorderColumns(fromFName, toFName) {
        return this.ej2Instances.reorderColumns(fromFName, toFName);
    }
    search(searchString) {
        return this.ej2Instances.search(searchString);
    }
    selectCell(cellIndex, isToggle) {
        return this.ej2Instances.selectCell(cellIndex, isToggle);
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
    startEdit() {
        return this.ej2Instances.startEdit();
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
