import { Options } from 'vue-class-component';
import { isUndefined } from '@syncfusion/ej2-base';
import { ComponentBase, EJComponentDecorator, getProps, allVue, gh } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined, getValue } from '@syncfusion/ej2-base';

import { Gantt } from '@syncfusion/ej2-gantt';
import { ColumnsDirective, ColumnDirective, ColumnsPlugin, ColumnPlugin } from './columns.directive'
import { AddDialogFieldsDirective, AddDialogFieldDirective, AddDialogFieldsPlugin, AddDialogFieldPlugin } from './adddialogfields.directive'
import { EditDialogFieldsDirective, EditDialogFieldDirective, EditDialogFieldsPlugin, EditDialogFieldPlugin } from './editdialogfields.directive'
import { DayWorkingTimeCollectionDirective, DayWorkingTimeDirective, DayWorkingTimeCollectionPlugin, DayWorkingTimePlugin } from './dayworkingtime.directive'
import { HolidaysDirective, HolidayDirective, HolidaysPlugin, HolidayPlugin } from './holidays.directive'
import { EventMarkersDirective, EventMarkerDirective, EventMarkersPlugin, EventMarkerPlugin } from './eventmarkers.directive'


// {{VueImport}}
export const properties: string[] = ['addDialogFields', 'allowExcelExport', 'allowFiltering', 'allowKeyboard', 'allowPdfExport', 'allowReordering', 'allowResizing', 'allowRowDragAndDrop', 'allowSelection', 'allowSorting', 'allowUnscheduledTasks', 'autoFocusTasks', 'baselineColor', 'collapseAllParentTasks', 'columnMenuItems', 'columns', 'connectorLineBackground', 'connectorLineWidth', 'contextMenuItems', 'dataSource', 'dateFormat', 'dayWorkingTime', 'disableHtmlEncode', 'durationUnit', 'editDialogFields', 'editSettings', 'enableContextMenu', 'enableImmutableMode', 'enableMultiTaskbar', 'enablePersistence', 'enablePredecessorValidation', 'enableRtl', 'enableVirtualization', 'eventMarkers', 'filterSettings', 'gridLines', 'height', 'highlightWeekends', 'holidays', 'includeWeekend', 'labelSettings', 'locale', 'milestoneTemplate', 'parentTaskbarTemplate', 'projectEndDate', 'projectStartDate', 'query', 'readOnly', 'renderBaseline', 'resourceFields', 'resourceIDMapping', 'resourceNameMapping', 'resources', 'rowHeight', 'searchSettings', 'segmentData', 'selectedRowIndex', 'selectionSettings', 'showColumnMenu', 'showInlineNotes', 'showOverAllocation', 'sortSettings', 'splitterSettings', 'taskFields', 'taskMode', 'taskType', 'taskbarHeight', 'taskbarTemplate', 'timelineSettings', 'timezone', 'toolbar', 'tooltipSettings', 'treeColumnIndex', 'validateManualTasksOnLinking', 'viewType', 'width', 'workUnit', 'workWeek', 'actionBegin', 'actionComplete', 'actionFailure', 'beforeExcelExport', 'beforePdfExport', 'beforeTooltipRender', 'cellDeselected', 'cellDeselecting', 'cellEdit', 'cellSelected', 'cellSelecting', 'collapsed', 'collapsing', 'columnDrag', 'columnDragStart', 'columnDrop', 'columnMenuClick', 'columnMenuOpen', 'contextMenuClick', 'contextMenuOpen', 'created', 'dataBound', 'dataStateChange', 'destroyed', 'endEdit', 'excelExportComplete', 'excelHeaderQueryCellInfo', 'excelQueryCellInfo', 'expanded', 'expanding', 'headerCellInfo', 'load', 'onMouseMove', 'onTaskbarClick', 'pdfColumnHeaderQueryCellInfo', 'pdfExportComplete', 'pdfQueryCellInfo', 'pdfQueryTaskbarInfo', 'pdfQueryTimelineCellInfo', 'queryCellInfo', 'queryTaskbarInfo', 'recordDoubleClick', 'resizeStart', 'resizeStop', 'resizing', 'rowDataBound', 'rowDeselected', 'rowDeselecting', 'rowDrag', 'rowDragStart', 'rowDragStartHelper', 'rowDrop', 'rowSelected', 'rowSelecting', 'splitterResizeStart', 'splitterResized', 'splitterResizing', 'taskbarEdited', 'taskbarEditing', 'toolbarClick'];
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
},isExecute)

/* Start Options({
    props: props,
    watch: watch,
    emits: emitProbs
}) End */

export class GanttComponent extends ComponentBase {
    
    public ej2Instances: any;
    public propKeys: string[] = properties;
    public models: string[] = modelProps;
    public hasChildDirective: boolean = true;
    protected hasInjectedModules: boolean = true;
    public tagMapper: { [key: string]: Object } = {"e-columns":"e-column","e-add-dialog-fields":"e-add-dialog-field","e-edit-dialog-fields":"e-edit-dialog-field","e-day-working-time-collection":"e-day-working-time","e-holidays":"e-holidays","e-event-markers":"e-event-marker"};
    public tagNameMapper: Object = {"e-add-dialog-fields":"e-addDialogFields","e-edit-dialog-fields":"e-editDialogFields","e-day-working-time-collection":"e-dayWorkingTime","e-event-markers":"e-eventMarkers"};
    public isVue3: boolean;
    public templateCollection: any;
    constructor() {
        super(arguments);
        this.isVue3 = !isExecute;
        this.ej2Instances = new Gantt({});        this.ej2Instances._trigger = this.ej2Instances.trigger;
        this.ej2Instances.trigger = this.trigger;

        this.bindProperties();
        this.ej2Instances._setProperties = this.ej2Instances.setProperties;
        this.ej2Instances.setProperties = this.setProperties;
        this.ej2Instances.clearTemplate = this.clearTemplate;
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
                } else {
                    (this as any).$emit('update:'+ propKey, eventProp[propKey]);
                    (this as any).$emit('modelchanged', eventProp[propKey]);
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
    
    public addPredecessor(id: number, predecessorString: string): void {
        return this.ej2Instances.addPredecessor(id, predecessorString);
    }

    public addRecord(data?: Object[] | Object | Object, rowPosition?: Object, rowIndex?: number): void {
        return this.ej2Instances.addRecord(data, rowPosition, rowIndex);
    }

    public cancelEdit(): void {
        return this.ej2Instances.cancelEdit();
    }

    public changeTaskMode(data: Object): void {
        return this.ej2Instances.changeTaskMode(data);
    }

    public clearFiltering(fields?: string[]): void {
        return this.ej2Instances.clearFiltering(fields);
    }

    public clearSelection(): void {
        return this.ej2Instances.clearSelection();
    }

    public clearSorting(): void {
        return this.ej2Instances.clearSorting();
    }

    public collapseAll(): void {
        return this.ej2Instances.collapseAll();
    }

    public collapseByID(id: number): void {
        return this.ej2Instances.collapseByID(id);
    }

    public collapseByIndex(index: number): void {
        return this.ej2Instances.collapseByIndex(index);
    }

    public convertToMilestone(id: string): void {
        return this.ej2Instances.convertToMilestone(id);
    }

    public csvExport(excelExportProperties?: Object, isMultipleExport?: boolean, workbook?: any, isBlob?: boolean): Object {
        return this.ej2Instances.csvExport(excelExportProperties, isMultipleExport, workbook, isBlob);
    }

    public deleteRecord(taskDetail: number | string | number[] | string[] | Object | Object[]): void {
        return this.ej2Instances.deleteRecord(taskDetail);
    }

    public enableItems(items: string[], isEnable: boolean): void {
        return this.ej2Instances.enableItems(items, isEnable);
    }

    public excelExport(excelExportProperties?: Object, isMultipleExport?: boolean, workbook?: any, isBlob?: boolean): Object {
        return this.ej2Instances.excelExport(excelExportProperties, isMultipleExport, workbook, isBlob);
    }

    public expandAll(): void {
        return this.ej2Instances.expandAll();
    }

    public expandByID(id: number): void {
        return this.ej2Instances.expandByID(id);
    }

    public expandByIndex(index: number[] | number): void {
        return this.ej2Instances.expandByIndex(index);
    }

    public filterByColumn(fieldName: string, filterOperator: string, filterValue: string | number | Object | boolean | number[] | string[] | Object[] | boolean[], predicate?: string, matchCase?: boolean, ignoreAccent?: boolean): void {
        return this.ej2Instances.filterByColumn(fieldName, filterOperator, filterValue, predicate, matchCase, ignoreAccent);
    }

    public fitToProject(): void {
        return this.ej2Instances.fitToProject();
    }

    public getDurationString(duration: number, durationUnit: string): string {
        return this.ej2Instances.getDurationString(duration, durationUnit);
    }

    public getExpandedRecords(records: Object[]): Object[] {
        return this.ej2Instances.getExpandedRecords(records);
    }

    public getFormatedDate(date: Object, format?: string): string {
        return this.ej2Instances.getFormatedDate(date, format);
    }

    public getGanttColumns(): Object[] {
        return this.ej2Instances.getGanttColumns();
    }

    public getGridColumns(): Object[] {
        return this.ej2Instances.getGridColumns();
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

    public getWorkString(work: number, workUnit: string): string {
        return this.ej2Instances.getWorkString(work, workUnit);
    }

    public hideColumn(keys: string | string[], hideBy?: string): void {
        return this.ej2Instances.hideColumn(keys, hideBy);
    }

    public hideSpinner(): void {
        return this.ej2Instances.hideSpinner();
    }

    public indent(): void {
        return this.ej2Instances.indent();
    }

    public keyActionHandler(e: Object): void {
        return this.ej2Instances.keyActionHandler(e);
    }

    public mergeTask(taskId: number | string, segmentIndexes: undefined[]): void {
        return this.ej2Instances.mergeTask(taskId, segmentIndexes);
    }

    public nextTimeSpan(mode?: string): void {
        return this.ej2Instances.nextTimeSpan(mode);
    }

    public openAddDialog(): void {
        return this.ej2Instances.openAddDialog();
    }

    public openEditDialog(taskId?: number): void {
        return this.ej2Instances.openEditDialog(taskId);
    }

    public outdent(): void {
        return this.ej2Instances.outdent();
    }

    public pdfExport(pdfExportProperties?: Object, isMultipleExport?: boolean, pdfDoc?: Object): Object {
        return this.ej2Instances.pdfExport(pdfExportProperties, isMultipleExport, pdfDoc);
    }

    public previousTimeSpan(mode?: string): void {
        return this.ej2Instances.previousTimeSpan(mode);
    }

    public removePredecessor(id: number): void {
        return this.ej2Instances.removePredecessor(id);
    }

    public removeSortColumn(columnName: string): void {
        return this.ej2Instances.removeSortColumn(columnName);
    }

    public renderTemplates(): void {
        return this.ej2Instances.renderTemplates();
    }

    public reorderColumns(fromFName: string | string[], toFName: string): void {
        return this.ej2Instances.reorderColumns(fromFName, toFName);
    }

    public reorderRows(fromIndexes: number[], toIndex: number, position: string): void {
        return this.ej2Instances.reorderRows(fromIndexes, toIndex, position);
    }

    public resetTemplates(): void {
        return this.ej2Instances.resetTemplates();
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

    public selectCell(cellIndex: Object, isToggle?: boolean): void {
        return this.ej2Instances.selectCell(cellIndex, isToggle);
    }

    public selectCells(rowCellIndexes: Object[]): void {
        return this.ej2Instances.selectCells(rowCellIndexes);
    }

    public selectRow(index: number, isToggle?: boolean): void {
        return this.ej2Instances.selectRow(index, isToggle);
    }

    public selectRows(records: number[]): void {
        return this.ej2Instances.selectRows(records);
    }

    public setScrollTop(scrollTop: number): void {
        return this.ej2Instances.setScrollTop(scrollTop);
    }

    public setSplitterPosition(value: string | number, type: string): void {
        return this.ej2Instances.setSplitterPosition(value, type);
    }

    public showColumn(keys: string | string[], showBy?: string): void {
        return this.ej2Instances.showColumn(keys, showBy);
    }

    public showSpinner(): void {
        return this.ej2Instances.showSpinner();
    }

    public sortColumn(columnName: string, direction: Object, isMultiSort?: boolean): void {
        return this.ej2Instances.sortColumn(columnName, direction, isMultiSort);
    }

    public splitTask(taskId: number | string, splitDate: Object | Object[]): void {
        return this.ej2Instances.splitTask(taskId, splitDate);
    }

    public updateChartScrollOffset(left: number, top: number): void {
        return this.ej2Instances.updateChartScrollOffset(left, top);
    }

    public updateDataSource(dataSource: Object[], args: object): void {
        return this.ej2Instances.updateDataSource(dataSource, args);
    }

    public updatePredecessor(id: number, predecessorString: string): void {
        return this.ej2Instances.updatePredecessor(id, predecessorString);
    }

    public updateProjectDates(startDate: Object, endDate: Object, isTimelineRoundOff: boolean, isFrom?: string): void {
        return this.ej2Instances.updateProjectDates(startDate, endDate, isTimelineRoundOff, isFrom);
    }

    public updateRecordByID(data: Object): void {
        return this.ej2Instances.updateRecordByID(data);
    }

    public updateRecordByIndex(index: number, data: Object): void {
        return this.ej2Instances.updateRecordByIndex(index, data);
    }

    public updateTaskId(currentId: number | string, newId: number | string): void {
        return this.ej2Instances.updateTaskId(currentId, newId);
    }

    public zoomIn(): void {
        return this.ej2Instances.zoomIn();
    }

    public zoomOut(): void {
        return this.ej2Instances.zoomOut();
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
