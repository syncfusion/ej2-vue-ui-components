import { Gantt } from '@syncfusion/ej2-gantt';
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
 * `e-column` directive represent a column of the VueJS Gantt.
 * It must be contained in a Gantt component(`ejs-gantt`).
 * ```vue
 * <ejs-gantt :dataSource='data' allowSelection='true' allowSorting='true'>
 *   <e-columns>
 *    <e-column field='ID' width='150'/>
 *    <e-column field='taskName' headerText='Task Name' width='200'/>
 *   </e-columns>
 * </ejs-gantt>
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
let AddDialogFieldsDirective = class AddDialogFieldsDirective extends Vue {
    render() {
        return;
    }
};
AddDialogFieldsDirective = __decorate$1([
    EJComponentDecorator({})
], AddDialogFieldsDirective);
const AddDialogFieldsPlugin = {
    name: 'e-add-dialog-fields',
    install(Vue$$1) {
        Vue$$1.component(AddDialogFieldsPlugin.name, AddDialogFieldsDirective);
    }
};
/**
 * `e-add-dialog-fields` directive represent a add dialog fields in VueJS Gantt.
 * It must be contained in a Gantt component(`ejs-gantt`).
 * ```vue
 * <ejs-gantt :dataSource]='data' allowSelection='true' allowSorting='true'>
 *   <e-add-dialog-fields>
 *     <e-add-dialog-field type='General' headerText='General'/>
 *     <e-add-dialog-field type='Dependency' headerText='Dependency'/>
 *   </e-add-dialog-fields>
 * </ejs-gantt>
 * ```
 */
let AddDialogFieldDirective = class AddDialogFieldDirective extends Vue {
    render() {
        return;
    }
};
AddDialogFieldDirective = __decorate$1([
    EJComponentDecorator({})
], AddDialogFieldDirective);
const AddDialogFieldPlugin = {
    name: 'e-add-dialog-field',
    install(Vue$$1) {
        Vue$$1.component(AddDialogFieldPlugin.name, AddDialogFieldDirective);
    }
};

var __decorate$2 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let EditDialogFieldsDirective = class EditDialogFieldsDirective extends Vue {
    render() {
        return;
    }
};
EditDialogFieldsDirective = __decorate$2([
    EJComponentDecorator({})
], EditDialogFieldsDirective);
const EditDialogFieldsPlugin = {
    name: 'e-edit-dialog-fields',
    install(Vue$$1) {
        Vue$$1.component(EditDialogFieldsPlugin.name, EditDialogFieldsDirective);
    }
};
/**
 * `e-edit-dialog-fields` directive represent a add dialog fields in VueJS Gantt.
 * It must be contained in a Gantt component(`ejs-gantt`).
 * ```vue
 * <ejs-gantt :dataSource]='data' allowSelection='true' allowSorting='true'>
 *   <e-edit-dialog-fields>
 *     <e-edit-dialog-field type='General' headerText='General'/>
 *     <e-edit-dialog-field type='Dependency' headerText='Dependency'/>
 *   </e-edit-dialog-fields>
 * </ejs-gantt>
 * ```
 */
let EditDialogFieldDirective = class EditDialogFieldDirective extends Vue {
    render() {
        return;
    }
};
EditDialogFieldDirective = __decorate$2([
    EJComponentDecorator({})
], EditDialogFieldDirective);
const EditDialogFieldPlugin = {
    name: 'e-edit-dialog-field',
    install(Vue$$1) {
        Vue$$1.component(EditDialogFieldPlugin.name, EditDialogFieldDirective);
    }
};

var __decorate$3 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let DayWorkingTimeCollectionDirective = class DayWorkingTimeCollectionDirective extends Vue {
    render() {
        return;
    }
};
DayWorkingTimeCollectionDirective = __decorate$3([
    EJComponentDecorator({})
], DayWorkingTimeCollectionDirective);
const DayWorkingTimeCollectionPlugin = {
    name: 'e-day-working-time-collection',
    install(Vue$$1) {
        Vue$$1.component(DayWorkingTimeCollectionPlugin.name, DayWorkingTimeCollectionDirective);
    }
};
/**
 * `e-day-working-time-collection` directive represent a working time ranges in a day.
 * It must be contained in a Gantt component(`ejs-gantt`).
 * ```vue
 * <ejs-gantt :dataSource]='data' allowSelection='true' allowSorting='true'>
 *   <e-day-working-time-collection>
 *     <e-day-working-time from='8' to='12'/>
 *     <e-day-working-time from='13' to='17'/>
 *   </e-day-working-time-collection>
 * </ejs-gantt>
 * ```
 */
let DayWorkingTimeDirective = class DayWorkingTimeDirective extends Vue {
    render() {
        return;
    }
};
DayWorkingTimeDirective = __decorate$3([
    EJComponentDecorator({})
], DayWorkingTimeDirective);
const DayWorkingTimePlugin = {
    name: 'e-day-working-time',
    install(Vue$$1) {
        Vue$$1.component(DayWorkingTimePlugin.name, DayWorkingTimeDirective);
    }
};

var __decorate$4 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let HolidaysDirective = class HolidaysDirective extends Vue {
    render() {
        return;
    }
};
HolidaysDirective = __decorate$4([
    EJComponentDecorator({})
], HolidaysDirective);
const HolidaysPlugin = {
    name: 'e-holidays',
    install(Vue$$1) {
        Vue$$1.component(HolidaysPlugin.name, HolidaysDirective);
    }
};
/**
 * `e-holidays` directive represent a holidays collection in Gantt.
 * It must be contained in a Gantt component(`ejs-gantt`).
 * ```vue
 * <ejs-gantt :dataSource]='data' allowSelection='true' allowSorting='true'>
 *   <e-holidays>
 *     <e-holiday from='02/20/2018' label='Holiday 1'/>
 *     <e-holiday from='05/15/2018' label='Holiday 2'/>
 *   </e-holidays>
 * </ejs-gantt>
 * ```
 */
let HolidayDirective = class HolidayDirective extends Vue {
    render() {
        return;
    }
};
HolidayDirective = __decorate$4([
    EJComponentDecorator({})
], HolidayDirective);
const HolidayPlugin = {
    name: 'e-holidays',
    install(Vue$$1) {
        Vue$$1.component(HolidayPlugin.name, HolidayDirective);
    }
};

var __decorate$5 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let EventMarkersDirective = class EventMarkersDirective extends Vue {
    render() {
        return;
    }
};
EventMarkersDirective = __decorate$5([
    EJComponentDecorator({})
], EventMarkersDirective);
const EventMarkersPlugin = {
    name: 'e-event-markers',
    install(Vue$$1) {
        Vue$$1.component(EventMarkersPlugin.name, EventMarkersDirective);
    }
};
/**
 * `e-event-markers` directive represent a event marker collection in Gantt
 * It must be contained in a Gantt component(`ejs-gantt`).
 * ```vue
 * <ejs-gantt :dataSource]='data' allowSelection='true' allowSorting='true'>
 *   <e-event-markers>
 *     <e-event-marker day='02/10/2018' label='Project Starts'/>
 *   </e-event-markers>
 * </ejs-gantt>
 * ```
 */
let EventMarkerDirective = class EventMarkerDirective extends Vue {
    render() {
        return;
    }
};
EventMarkerDirective = __decorate$5([
    EJComponentDecorator({})
], EventMarkerDirective);
const EventMarkerPlugin = {
    name: 'e-event-marker',
    install(Vue$$1) {
        Vue$$1.component(EventMarkerPlugin.name, EventMarkerDirective);
    }
};

var __decorate$6 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const properties = ['addDialogFields', 'allowFiltering', 'allowReordering', 'allowResizing', 'allowSelection', 'allowSorting', 'allowUnscheduledTasks', 'autoFocusTasks', 'baselineColor', 'collapseAllParentTasks', 'columns', 'connectorLineBackground', 'connectorLineWidth', 'dataSource', 'dateFormat', 'dayWorkingTime', 'durationUnit', 'editDialogFields', 'editSettings', 'enablePersistence', 'enablePredecessorValidation', 'enableRtl', 'eventMarkers', 'filterSettings', 'gridLines', 'height', 'highlightWeekends', 'holidays', 'includeWeekend', 'labelSettings', 'locale', 'milestoneTemplate', 'parentTaskbarTemplate', 'projectEndDate', 'projectStartDate', 'query', 'renderBaseline', 'resourceIDMapping', 'resourceNameMapping', 'resources', 'rowHeight', 'searchSettings', 'selectedRowIndex', 'selectionSettings', 'showColumnMenu', 'showInlineNotes', 'sortSettings', 'splitterSettings', 'taskFields', 'taskbarHeight', 'taskbarTemplate', 'timelineSettings', 'toolbar', 'tooltipSettings', 'treeColumnIndex', 'width', 'workWeek', 'actionBegin', 'actionComplete', 'actionFailure', 'beforeTooltipRender', 'cellDeselected', 'cellDeselecting', 'cellEdit', 'cellSelected', 'cellSelecting', 'collapsed', 'collapsing', 'columnDrag', 'columnDragStart', 'columnDrop', 'columnMenuClick', 'columnMenuOpen', 'dataBound', 'endEdit', 'expanded', 'expanding', 'headerCellInfo', 'load', 'queryCellInfo', 'queryTaskbarInfo', 'resizeStart', 'resizeStop', 'resizing', 'rowDataBound', 'rowDeselected', 'rowDeselecting', 'rowSelected', 'rowSelecting', 'splitterResizeStart', 'splitterResized', 'splitterResizing', 'taskbarEdited', 'taskbarEditing', 'toolbarClick'];
const modelProps = ['dataSource'];
/**
 * `ejs-gantt` represents the VueJS Gantt Component.
 * ```vue
 * <ejs-gantt :dataSource='data' allowSelection='true' allowSorting='true'></ejs-gantt>
 * ```
 */
let GanttComponent = class GanttComponent extends ComponentBase {
    constructor() {
        super();
        this.propKeys = properties;
        this.models = modelProps;
        this.hasChildDirective = true;
        this.hasInjectedModules = true;
        this.tagMapper = { "e-columns": "e-column", "e-add-dialog-fields": "e-add-dialog-field", "e-edit-dialog-fields": "e-edit-dialog-field", "e-day-working-time-collection": "e-day-working-time", "e-holidays": "e-holidays", "e-event-markers": "e-event-marker" };
        this.tagNameMapper = { "e-add-dialog-fields": "e-addDialogFields", "e-edit-dialog-fields": "e-editDialogFields", "e-day-working-time-collection": "e-dayWorkingTime", "e-event-markers": "e-eventMarkers" };
        this.ej2Instances = new Gantt({});
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
    trigger(eventName, eventProp) {
        if ((eventName === 'change' || eventName === 'input') && this.models && (this.models.length !== 0)) {
            let key = this.models.toString().match(/checked|value/) || [];
            let propKey = key[0];
            if (eventProp && key && !isUndefined(eventProp[propKey])) {
                this.$emit('update:' + propKey, eventProp[propKey]);
                this.$emit('modelchanged', eventProp[propKey]);
            }
        }
        if (this.ej2Instances && this.ej2Instances._trigger) {
            this.ej2Instances._trigger(eventName, eventProp);
        }
    }
    render(createElement) {
        return createElement('div', this.$slots.default);
    }
    ShowColumn(keys, showBy) {
        return this.ej2Instances.ShowColumn(keys, showBy);
    }
    addPredecessor(id, predecessorString) {
        return this.ej2Instances.addPredecessor(id, predecessorString);
    }
    addRecord(data, rowPosition, rowIndex) {
        return this.ej2Instances.addRecord(data, rowPosition, rowIndex);
    }
    cancelEdit(scrollTop) {
        return this.ej2Instances.cancelEdit(scrollTop);
    }
    clearFiltering() {
        return this.ej2Instances.clearFiltering();
    }
    clearSorting() {
        return this.ej2Instances.clearSorting();
    }
    collapseAll() {
        return this.ej2Instances.collapseAll();
    }
    collapseByID(id) {
        return this.ej2Instances.collapseByID(id);
    }
    collapseByIndex(index) {
        return this.ej2Instances.collapseByIndex(index);
    }
    expandAll() {
        return this.ej2Instances.expandAll();
    }
    expandByID(id) {
        return this.ej2Instances.expandByID(id);
    }
    expandByIndex(index) {
        return this.ej2Instances.expandByIndex(index);
    }
    filterByColumn(fieldName, filterOperator, filterValue, predicate, matchCase, ignoreAccent) {
        return this.ej2Instances.filterByColumn(fieldName, filterOperator, filterValue, predicate, matchCase, ignoreAccent);
    }
    getDefaultLocale() {
        return this.ej2Instances.getDefaultLocale();
    }
    getDurationString(duration, durationUnit) {
        return this.ej2Instances.getDurationString(duration, durationUnit);
    }
    getExpandedRecords(records) {
        return this.ej2Instances.getExpandedRecords(records);
    }
    getFormatedDate(date, format) {
        return this.ej2Instances.getFormatedDate(date, format);
    }
    getGanttColumns() {
        return this.ej2Instances.getGanttColumns();
    }
    getGridColumns() {
        return this.ej2Instances.getGridColumns();
    }
    getParentTask(cloneParent) {
        return this.ej2Instances.getParentTask(cloneParent);
    }
    getRecordByID(id) {
        return this.ej2Instances.getRecordByID(id);
    }
    getRowByID(id) {
        return this.ej2Instances.getRowByID(id);
    }
    getRowByIndex(index) {
        return this.ej2Instances.getRowByIndex(index);
    }
    getTaskByUniqueID(id) {
        return this.ej2Instances.getTaskByUniqueID(id);
    }
    getTaskbarHeight() {
        return this.ej2Instances.getTaskbarHeight();
    }
    hideColumn(keys, hideBy) {
        return this.ej2Instances.hideColumn(keys, hideBy);
    }
    hideSpinner() {
        return this.ej2Instances.hideSpinner();
    }
    nextTimeSpan(mode) {
        return this.ej2Instances.nextTimeSpan(mode);
    }
    openAddDialog() {
        return this.ej2Instances.openAddDialog();
    }
    openEditDialog(taskId) {
        return this.ej2Instances.openEditDialog(taskId);
    }
    previousTimeSpan(mode) {
        return this.ej2Instances.previousTimeSpan(mode);
    }
    removePredecessor(id) {
        return this.ej2Instances.removePredecessor(id);
    }
    removeSortColumn(columnName) {
        return this.ej2Instances.removeSortColumn(columnName);
    }
    reorderColumns(fromFName, toFName) {
        return this.ej2Instances.reorderColumns(fromFName, toFName);
    }
    scrollToDate(date) {
        return this.ej2Instances.scrollToDate(date);
    }
    scrollToTask(taskId) {
        return this.ej2Instances.scrollToTask(taskId);
    }
    search(keyVal) {
        return this.ej2Instances.search(keyVal);
    }
    selectCells(cellIndex, isToggle) {
        return this.ej2Instances.selectCells(cellIndex, isToggle);
    }
    setScrollTop(scrollTop) {
        return this.ej2Instances.setScrollTop(scrollTop);
    }
    setSplitterPosition(value, type) {
        return this.ej2Instances.setSplitterPosition(value, type);
    }
    showSpinner() {
        return this.ej2Instances.showSpinner();
    }
    sortColumn(columnName, direction, isMultiSort) {
        return this.ej2Instances.sortColumn(columnName, direction, isMultiSort);
    }
    updateChartScrollOffset(left, top) {
        return this.ej2Instances.updateChartScrollOffset(left, top);
    }
    updateDataSource(dataSource, args) {
        return this.ej2Instances.updateDataSource(dataSource, args);
    }
    updatePredecessor(id, predecessorString) {
        return this.ej2Instances.updatePredecessor(id, predecessorString);
    }
    updateProjectDates(startDate, endDate, isTimelineRoundOff) {
        return this.ej2Instances.updateProjectDates(startDate, endDate, isTimelineRoundOff);
    }
    updateRecordByID(data) {
        return this.ej2Instances.updateRecordByID(data);
    }
    updateRecordByIndex(index, data) {
        return this.ej2Instances.updateRecordByIndex(index, data);
    }
};
GanttComponent = __decorate$6([
    EJComponentDecorator({
        props: properties,
        model: {
            event: 'modelchanged'
        }
    })
], GanttComponent);
const GanttPlugin = {
    name: 'ejs-gantt',
    install(Vue$$1) {
        Vue$$1.component(GanttPlugin.name, GanttComponent);
        Vue$$1.component(ColumnPlugin.name, ColumnDirective);
        Vue$$1.component(ColumnsPlugin.name, ColumnsDirective);
        Vue$$1.component(AddDialogFieldPlugin.name, AddDialogFieldDirective);
        Vue$$1.component(AddDialogFieldsPlugin.name, AddDialogFieldsDirective);
        Vue$$1.component(EditDialogFieldPlugin.name, EditDialogFieldDirective);
        Vue$$1.component(EditDialogFieldsPlugin.name, EditDialogFieldsDirective);
        Vue$$1.component(DayWorkingTimePlugin.name, DayWorkingTimeDirective);
        Vue$$1.component(DayWorkingTimeCollectionPlugin.name, DayWorkingTimeCollectionDirective);
        Vue$$1.component(HolidayPlugin.name, HolidayDirective);
        Vue$$1.component(HolidaysPlugin.name, HolidaysDirective);
        Vue$$1.component(EventMarkerPlugin.name, EventMarkerDirective);
        Vue$$1.component(EventMarkersPlugin.name, EventMarkersDirective);
    }
};

export { ColumnsDirective, ColumnDirective, ColumnsPlugin, ColumnPlugin, AddDialogFieldsDirective, AddDialogFieldDirective, AddDialogFieldsPlugin, AddDialogFieldPlugin, EditDialogFieldsDirective, EditDialogFieldDirective, EditDialogFieldsPlugin, EditDialogFieldPlugin, DayWorkingTimeCollectionDirective, DayWorkingTimeDirective, DayWorkingTimeCollectionPlugin, DayWorkingTimePlugin, HolidaysDirective, HolidayDirective, HolidaysPlugin, HolidayPlugin, EventMarkersDirective, EventMarkerDirective, EventMarkersPlugin, EventMarkerPlugin, GanttComponent, GanttPlugin };
export * from '@syncfusion/ej2-gantt';
//# sourceMappingURL=ej2-vue-gantt.es2015.js.map
