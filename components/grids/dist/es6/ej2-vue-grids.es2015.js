import { Grid, Pager } from '@syncfusion/ej2-grids';
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
 * `e-column` directive represent a column of the VueJS Grid.
 * It must be contained in a Grid component(`ejs-grid`).
 * ```vue
 * <ejs-grid :dataSource='data' allowPaging='true' allowSorting='true'>
 *   <e-columns>
 *    <e-column field='ID' width='100'/>
 *    <e-column field='name' headerText='Name' width='100'/>
 *   </e-columns>
 * </ejs-grid>
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
 * `e-aggregate->e-column` directive represent a aggregate column of the VueJS Grid.
 * ```vue
 * <ejs-grid :dataSource='data' allowPaging='true' allowSorting='true'>
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
 * </ejs-grid>
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
 * `e-aggregate` directive represent a aggregate row of the VueJS Grid.
 * It must be contained in a Grid component(`ejs-grid`).
 * ```vue
 * <ejs-grid :dataSource]='data' allowPaging='true' allowSorting='true'>
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
 * </ejs-grid>
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
const properties = ['aggregates', 'allowExcelExport', 'allowFiltering', 'allowGrouping', 'allowMultiSorting', 'allowPaging', 'allowPdfExport', 'allowReordering', 'allowResizing', 'allowRowDragAndDrop', 'allowSelection', 'allowSorting', 'allowTextWrap', 'childGrid', 'clipMode', 'columnMenuItems', 'columnQueryMode', 'columns', 'contextMenuItems', 'currencyCode', 'currentAction', 'dataSource', 'detailTemplate', 'editSettings', 'enableAltRow', 'enableAutoFill', 'enableColumnVirtualization', 'enableHeaderFocus', 'enableHover', 'enablePersistence', 'enableRtl', 'enableVirtualization', 'filterSettings', 'frozenColumns', 'frozenRows', 'gridLines', 'groupSettings', 'height', 'hierarchyPrintMode', 'infiniteScrollSettings', 'locale', 'pageSettings', 'pagerTemplate', 'printMode', 'query', 'queryString', 'rowDropSettings', 'rowHeight', 'rowTemplate', 'searchSettings', 'selectedRowIndex', 'selectionSettings', 'showColumnChooser', 'showColumnMenu', 'sortSettings', 'textWrapSettings', 'toolbar', 'toolbarTemplate', 'width', 'actionBegin', 'actionComplete', 'actionFailure', 'batchAdd', 'batchCancel', 'batchDelete', 'beforeAutoFill', 'beforeBatchAdd', 'beforeBatchDelete', 'beforeBatchSave', 'beforeCopy', 'beforeDataBound', 'beforeExcelExport', 'beforeOpenColumnChooser', 'beforePaste', 'beforePdfExport', 'beforePrint', 'beginEdit', 'cellDeselected', 'cellDeselecting', 'cellEdit', 'cellSave', 'cellSaved', 'cellSelected', 'cellSelecting', 'checkBoxChange', 'columnDrag', 'columnDragStart', 'columnDrop', 'columnMenuClick', 'columnMenuOpen', 'commandClick', 'contextMenuClick', 'contextMenuOpen', 'created', 'dataBound', 'dataSourceChanged', 'dataStateChange', 'destroyed', 'detailDataBound', 'excelExportComplete', 'excelHeaderQueryCellInfo', 'excelQueryCellInfo', 'exportDetailDataBound', 'exportGroupCaption', 'headerCellInfo', 'keyPressed', 'load', 'pdfExportComplete', 'pdfHeaderQueryCellInfo', 'pdfQueryCellInfo', 'printComplete', 'queryCellInfo', 'recordDoubleClick', 'resizeStart', 'resizeStop', 'resizing', 'rowDataBound', 'rowDeselected', 'rowDeselecting', 'rowDrag', 'rowDragStart', 'rowDragStartHelper', 'rowDrop', 'rowSelected', 'rowSelecting', 'toolbarClick'];
const modelProps = ['dataSource'];
/**
 * `ejs-grid` represents the VueJS Grid Component.
 * ```vue
 * <ejs-grid :dataSource='data' allowPaging='true' allowSorting='true'></ejs-grid>
 * ```
 */
let GridComponent = class GridComponent extends ComponentBase {
    constructor() {
        super();
        this.propKeys = properties;
        this.models = modelProps;
        this.hasChildDirective = true;
        this.hasInjectedModules = true;
        this.tagMapper = { "e-columns": "e-column", "e-aggregates": { "e-aggregate": { "e-columns": "e-column" } } };
        this.tagNameMapper = {};
        this.ej2Instances = new Grid({});
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
    addRecord(data, index) {
        return this.ej2Instances.addRecord(data, index);
    }
    autoFitColumns(fieldNames) {
        return this.ej2Instances.autoFitColumns(fieldNames);
    }
    calculatePageSizeByParentHeight(containerHeight) {
        return this.ej2Instances.calculatePageSizeByParentHeight(containerHeight);
    }
    clearCellSelection() {
        return this.ej2Instances.clearCellSelection();
    }
    clearFiltering(fields) {
        return this.ej2Instances.clearFiltering(fields);
    }
    clearGrouping() {
        return this.ej2Instances.clearGrouping();
    }
    clearRowSelection() {
        return this.ej2Instances.clearRowSelection();
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
    copy(withHeader) {
        return this.ej2Instances.copy(withHeader);
    }
    csvExport(excelExportProperties, isMultipleExport, workbook, isBlob) {
        return this.ej2Instances.csvExport(excelExportProperties, isMultipleExport, workbook, isBlob);
    }
    dataReady() {
        return this.ej2Instances.dataReady();
    }
    deleteRecord(fieldname, data) {
        return this.ej2Instances.deleteRecord(fieldname, data);
    }
    deleteRow(tr) {
        return this.ej2Instances.deleteRow(tr);
    }
    destroyTemplate(propertyNames, index) {
        return this.ej2Instances.destroyTemplate(propertyNames, index);
    }
    detailCollapseAll() {
        return this.ej2Instances.detailCollapseAll();
    }
    detailExpandAll() {
        return this.ej2Instances.detailExpandAll();
    }
    editCell(index, field) {
        return this.ej2Instances.editCell(index, field);
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
    extendRequiredModules(modules) {
        return this.ej2Instances.extendRequiredModules(modules);
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
    getFilteredRecords() {
        return this.ej2Instances.getFilteredRecords();
    }
    getFooterContent() {
        return this.ej2Instances.getFooterContent();
    }
    getFooterContentTable() {
        return this.ej2Instances.getFooterContentTable();
    }
    getForeignKeyColumns() {
        return this.ej2Instances.getForeignKeyColumns();
    }
    getFrozenDataRows() {
        return this.ej2Instances.getFrozenDataRows();
    }
    getFrozenRowByIndex(index) {
        return this.ej2Instances.getFrozenRowByIndex(index);
    }
    getHeaderContent() {
        return this.ej2Instances.getHeaderContent();
    }
    getHeaderTable() {
        return this.ej2Instances.getHeaderTable();
    }
    getHiddenColumns() {
        return this.ej2Instances.getHiddenColumns();
    }
    getMediaColumns() {
        return this.ej2Instances.getMediaColumns();
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
    getRowIndexByPrimaryKey(value) {
        return this.ej2Instances.getRowIndexByPrimaryKey(value);
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
    groupCollapseAll() {
        return this.ej2Instances.groupCollapseAll();
    }
    groupColumn(columnName) {
        return this.ej2Instances.groupColumn(columnName);
    }
    groupExpandAll() {
        return this.ej2Instances.groupExpandAll();
    }
    hideColumns(keys, hideBy) {
        return this.ej2Instances.hideColumns(keys, hideBy);
    }
    hideScroll() {
        return this.ej2Instances.hideScroll();
    }
    hideSpinner() {
        return this.ej2Instances.hideSpinner();
    }
    openColumnChooser(x, y) {
        return this.ej2Instances.openColumnChooser(x, y);
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
    reorderColumnByIndex(fromIndex, toIndex) {
        return this.ej2Instances.reorderColumnByIndex(fromIndex, toIndex);
    }
    reorderColumnByTargetIndex(fieldName, toIndex) {
        return this.ej2Instances.reorderColumnByTargetIndex(fieldName, toIndex);
    }
    reorderColumns(fromFName, toFName) {
        return this.ej2Instances.reorderColumns(fromFName, toFName);
    }
    reorderRows(fromIndexes, toIndex) {
        return this.ej2Instances.reorderRows(fromIndexes, toIndex);
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
    selectCells(rowCellIndexes) {
        return this.ej2Instances.selectCells(rowCellIndexes);
    }
    selectCellsByRange(startIndex, endIndex) {
        return this.ej2Instances.selectCellsByRange(startIndex, endIndex);
    }
    selectRow(index, isToggle) {
        return this.ej2Instances.selectRow(index, isToggle);
    }
    selectRows(rowIndexes) {
        return this.ej2Instances.selectRows(rowIndexes);
    }
    selectRowsByRange(startIndex, endIndex) {
        return this.ej2Instances.selectRowsByRange(startIndex, endIndex);
    }
    setCellValue(key, field, value) {
        return this.ej2Instances.setCellValue(key, field, value);
    }
    setGridContent(element) {
        return this.ej2Instances.setGridContent(element);
    }
    setGridContentTable(element) {
        return this.ej2Instances.setGridContentTable(element);
    }
    setGridHeaderContent(element) {
        return this.ej2Instances.setGridHeaderContent(element);
    }
    setGridHeaderTable(element) {
        return this.ej2Instances.setGridHeaderTable(element);
    }
    setGridPager(element) {
        return this.ej2Instances.setGridPager(element);
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
    sortColumn(columnName, direction, isMultiSort) {
        return this.ej2Instances.sortColumn(columnName, direction, isMultiSort);
    }
    startEdit() {
        return this.ej2Instances.startEdit();
    }
    ungroupColumn(columnName) {
        return this.ej2Instances.ungroupColumn(columnName);
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
GridComponent = __decorate$3([
    EJComponentDecorator({
        props: properties,
        model: {
            event: 'modelchanged'
        }
    })
], GridComponent);
const GridPlugin = {
    name: 'ejs-grid',
    install(Vue$$1) {
        Vue$$1.component(GridPlugin.name, GridComponent);
        Vue$$1.component(ColumnPlugin.name, ColumnDirective);
        Vue$$1.component(ColumnsPlugin.name, ColumnsDirective);
        Vue$$1.component(AggregatePlugin.name, AggregateDirective);
        Vue$$1.component(AggregatesPlugin.name, AggregatesDirective);
        Vue$$1.component(AggregateColumnPlugin.name, AggregateColumnDirective);
        Vue$$1.component(AggregateColumnsPlugin.name, AggregateColumnsDirective);
    }
};

var __decorate$4 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const properties$1 = ['currentPage', 'customText', 'enableExternalMessage', 'enablePagerMessage', 'enablePersistence', 'enableQueryString', 'enableRtl', 'externalMessage', 'locale', 'pageCount', 'pageSize', 'pageSizes', 'template', 'totalRecordsCount', 'click', 'created', 'dropDownChanged'];
const modelProps$1 = [];
/**
 * `ejs-pager` represents the VueJS Pager Component.
 * ```vue
 * <ejs-pager></ejs-pager>
 * ```
 */
let PagerComponent = class PagerComponent extends ComponentBase {
    constructor() {
        super();
        this.propKeys = properties$1;
        this.models = modelProps$1;
        this.hasChildDirective = false;
        this.hasInjectedModules = false;
        this.tagMapper = {};
        this.tagNameMapper = {};
        this.ej2Instances = new Pager({});
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
    render(createElement) {
        return createElement('div', this.$slots.default);
    }
    getLocalizedLabel(key) {
        return this.ej2Instances.getLocalizedLabel(key);
    }
    goToPage(pageNo) {
        return this.ej2Instances.goToPage(pageNo);
    }
    refresh() {
        return this.ej2Instances.refresh();
    }
};
PagerComponent = __decorate$4([
    EJComponentDecorator({
        props: properties$1
    })
], PagerComponent);
const PagerPlugin = {
    name: 'ejs-pager',
    install(Vue$$1) {
        Vue$$1.component(PagerPlugin.name, PagerComponent);
    }
};

export { ColumnsDirective, ColumnDirective, ColumnsPlugin, ColumnPlugin, AggregateColumnsDirective, AggregateColumnDirective, AggregateColumnsPlugin, AggregateColumnPlugin, AggregatesDirective, AggregateDirective, AggregatesPlugin, AggregatePlugin, GridComponent, GridPlugin, PagerComponent, PagerPlugin };
export * from '@syncfusion/ej2-grids';
//# sourceMappingURL=ej2-vue-grids.es2015.js.map
