import Vue from 'vue';
import { isUndefined } from '@syncfusion/ej2-base';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';
import { Gantt } from '@syncfusion/ej2-gantt';
import { ColumnsDirective, ColumnDirective, ColumnsPlugin, ColumnPlugin } from './columns.directive'
import { AddDialogFieldsDirective, AddDialogFieldDirective, AddDialogFieldsPlugin, AddDialogFieldPlugin } from './adddialogfields.directive'
import { EditDialogFieldsDirective, EditDialogFieldDirective, EditDialogFieldsPlugin, EditDialogFieldPlugin } from './editdialogfields.directive'
import { DayWorkingTimeCollectionDirective, DayWorkingTimeDirective, DayWorkingTimeCollectionPlugin, DayWorkingTimePlugin } from './dayworkingtime.directive'
import { HolidaysDirective, HolidayDirective, HolidaysPlugin, HolidayPlugin } from './holidays.directive'
import { EventMarkersDirective, EventMarkerDirective, EventMarkersPlugin, EventMarkerPlugin } from './eventmarkers.directive'


export const properties: string[] = ['addDialogFields', 'allowFiltering', 'allowReordering', 'allowResizing', 'allowSelection', 'allowSorting', 'allowUnscheduledTasks', 'autoFocusTasks', 'baselineColor', 'collapseAllParentTasks', 'columns', 'connectorLineBackground', 'connectorLineWidth', 'dataSource', 'dateFormat', 'dayWorkingTime', 'durationUnit', 'editDialogFields', 'editSettings', 'enablePersistence', 'enableRtl', 'eventMarkers', 'filterSettings', 'gridLines', 'height', 'highlightWeekends', 'holidays', 'includeWeekend', 'labelSettings', 'locale', 'milestoneTemplate', 'parentTaskbarTemplate', 'projectEndDate', 'projectStartDate', 'query', 'renderBaseline', 'resourceIDMapping', 'resourceNameMapping', 'resources', 'rowHeight', 'searchSettings', 'selectedRowIndex', 'selectionSettings', 'showColumnMenu', 'showInlineNotes', 'sortSettings', 'splitterSettings', 'taskFields', 'taskbarHeight', 'taskbarTemplate', 'timelineSettings', 'toolbar', 'tooltipSettings', 'treeColumnIndex', 'width', 'workWeek', 'actionBegin', 'actionComplete', 'actionFailure', 'beforeTooltipRender', 'cellDeselected', 'cellDeselecting', 'cellSelected', 'cellSelecting', 'collapsed', 'collapsing', 'columnDrag', 'columnDragStart', 'columnDrop', 'columnMenuClick', 'columnMenuOpen', 'dataBound', 'expanded', 'expanding', 'headerCellInfo', 'load', 'queryCellInfo', 'queryTaskbarInfo', 'resizeStart', 'resizeStop', 'resizing', 'rowDataBound', 'rowDeselected', 'rowDeselecting', 'rowSelected', 'rowSelecting', 'splitterResizeStart', 'splitterResized', 'splitterResizing', 'taskbarEdited', 'taskbarEditing'];
export const modelProps: string[] = ['dataSource'];

/**
 * `ejs-gantt` represents the VueJS Gantt Component.
 * ```vue
 * <ejs-gantt :dataSource='data' allowSelection='true' allowSorting='true'></ejs-gantt>
 * ```
 */
@EJComponentDecorator({
    props: properties,
    model: {
        event: 'modelchanged'
    }
})
export class GanttComponent extends ComponentBase {
    
    public ej2Instances: any;
    public propKeys: string[] = properties;
    public models: string[] = modelProps;
    public hasChildDirective: boolean = true;
    protected hasInjectedModules: boolean = true;
    public tagMapper: { [key: string]: Object } = {"e-columns":"e-column","e-add-dialog-fields":"e-add-dialog-field","e-edit-dialog-fields":"e-edit-dialog-field","e-day-working-time-collection":"e-day-working-time","e-holidays":"e-holidays","e-event-markers":"e-event-marker"};
    public tagNameMapper: Object = {"e-add-dialog-fields":"e-addDialogFields","e-edit-dialog-fields":"e-editDialogFields","e-day-working-time-collection":"e-dayWorkingTime","e-event-markers":"e-eventMarkers"};
    
    constructor() {
        super();
        this.ej2Instances = new Gantt({});        this.ej2Instances._trigger = this.ej2Instances.trigger;
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
        if (eventName === 'change' && this.models && (this.models.length !== 0)) {
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
    
    public addPredecessor(ganttRecord: Object, predecessorString: string): void {
        return this.ej2Instances.addPredecessor(ganttRecord, predecessorString);
    }

    public addRecord(data?: Object | Object, rowPosition?: Object, rowIndex?: number): void {
        return this.ej2Instances.addRecord(data, rowPosition, rowIndex);
    }

    public clearFiltering(): void {
        return this.ej2Instances.clearFiltering();
    }

    public clearSorting(): void {
        return this.ej2Instances.clearSorting();
    }

    public collapseByID(id: string | number): void {
        return this.ej2Instances.collapseByID(id);
    }

    public collapseByIndex(index: number): void {
        return this.ej2Instances.collapseByIndex(index);
    }

    public expandByID(id: string | number): void {
        return this.ej2Instances.expandByID(id);
    }

    public expandByIndex(index: number): void {
        return this.ej2Instances.expandByIndex(index);
    }

    public filterByColumn(fieldName: string, filterOperator: string, filterValue: string | number | Object | boolean, predicate?: string, matchCase?: boolean, ignoreAccent?: boolean): void {
        return this.ej2Instances.filterByColumn(fieldName, filterOperator, filterValue, predicate, matchCase, ignoreAccent);
    }

    public getDefaultLocale(): Object {
        return this.ej2Instances.getDefaultLocale();
    }

    public getDurationString(duration: number, durationUnit: string): string {
        return this.ej2Instances.getDurationString(duration, durationUnit);
    }

    public getExpandedRecords(records: Object[]): undefined {
        return this.ej2Instances.getExpandedRecords(records);
    }

    public getFormatedDate(date: Object, format?: string): string {
        return this.ej2Instances.getFormatedDate(date, format);
    }

    public getParentTask(cloneParent: Object): Object {
        return this.ej2Instances.getParentTask(cloneParent);
    }

    public getRecordByID(id: string): Object {
        return this.ej2Instances.getRecordByID(id);
    }

    public getRowByID(id: string | number): Object {
        return this.ej2Instances.getRowByID(id);
    }

    public getRowByIndex(index: number): Object {
        return this.ej2Instances.getRowByIndex(index);
    }

    public getTaskByUniqueID(id: string): Object {
        return this.ej2Instances.getTaskByUniqueID(id);
    }

    public getTaskbarHeight(): number {
        return this.ej2Instances.getTaskbarHeight();
    }

    public hideSpinner(): void {
        return this.ej2Instances.hideSpinner();
    }

    public nextTimeSpan(mode?: string): void {
        return this.ej2Instances.nextTimeSpan(mode);
    }

    public previousTimeSpan(mode?: string): void {
        return this.ej2Instances.previousTimeSpan(mode);
    }

    public removePredecessor(ganttRecord: Object): void {
        return this.ej2Instances.removePredecessor(ganttRecord);
    }

    public removeSortColumn(columnName: string): void {
        return this.ej2Instances.removeSortColumn(columnName);
    }

    public reorderColumns(fromFName: string, toFName: string): void {
        return this.ej2Instances.reorderColumns(fromFName, toFName);
    }

    public scrollToDate(date: string): void {
        return this.ej2Instances.scrollToDate(date);
    }

    public scrollToTask(taskId: string): void {
        return this.ej2Instances.scrollToTask(taskId);
    }

    public search(keyVal: string): void {
        return this.ej2Instances.search(keyVal);
    }

    public setSplitterPosition(value: string | number, valueType: string): void {
        return this.ej2Instances.setSplitterPosition(value, valueType);
    }

    public showSpinner(): void {
        return this.ej2Instances.showSpinner();
    }

    public sortColumn(columnName: string, direction: Object, isMultiSort?: boolean): void {
        return this.ej2Instances.sortColumn(columnName, direction, isMultiSort);
    }

    public updateChartScrollOffset(left: number, top: number): void {
        return this.ej2Instances.updateChartScrollOffset(left, top);
    }

    public updatePredecessor(ganttRecord: Object, predecessorString: string): void {
        return this.ej2Instances.updatePredecessor(ganttRecord, predecessorString);
    }

    public updateProjectDates(startDate: Object, endDate: Object, isTimelineRoundOff: boolean): void {
        return this.ej2Instances.updateProjectDates(startDate, endDate, isTimelineRoundOff);
    }

    public updateRecordByID(data: Object): void {
        return this.ej2Instances.updateRecordByID(data);
    }
}

export const GanttPlugin = {
    name: 'ejs-gantt',
    install(Vue: any) {
        Vue.component(GanttPlugin.name, GanttComponent);
        Vue.component(ColumnPlugin.name, ColumnDirective);
        Vue.component(ColumnsPlugin.name, ColumnsDirective);
        Vue.component(AddDialogFieldPlugin.name, AddDialogFieldDirective);
        Vue.component(AddDialogFieldsPlugin.name, AddDialogFieldsDirective);
        Vue.component(EditDialogFieldPlugin.name, EditDialogFieldDirective);
        Vue.component(EditDialogFieldsPlugin.name, EditDialogFieldsDirective);
        Vue.component(DayWorkingTimePlugin.name, DayWorkingTimeDirective);
        Vue.component(DayWorkingTimeCollectionPlugin.name, DayWorkingTimeCollectionDirective);
        Vue.component(HolidayPlugin.name, HolidayDirective);
        Vue.component(HolidaysPlugin.name, HolidaysDirective);
        Vue.component(EventMarkerPlugin.name, EventMarkerDirective);
        Vue.component(EventMarkersPlugin.name, EventMarkersDirective);

    }
}
