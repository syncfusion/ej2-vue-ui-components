import Vue from 'vue';
import { isUndefined } from '@syncfusion/ej2-base';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';
import { Schedule } from '@syncfusion/ej2-schedule';
import { ViewsDirective, ViewDirective, ViewsPlugin, ViewPlugin } from './views.directive'
import { ResourcesDirective, ResourceDirective, ResourcesPlugin, ResourcePlugin } from './resources.directive'
import { HeaderRowsDirective, HeaderRowDirective, HeaderRowsPlugin, HeaderRowPlugin } from './headerrows.directive'


export const properties: string[] = ['agendaDaysCount', 'allowDragAndDrop', 'allowKeyboardInteraction', 'allowMultiRowSelection', 'allowResizing', 'calendarMode', 'cellHeaderTemplate', 'cellTemplate', 'cssClass', 'currentView', 'dateFormat', 'dateHeaderTemplate', 'editorTemplate', 'enablePersistence', 'enableRecurrenceValidation', 'enableRtl', 'endHour', 'eventDragArea', 'eventSettings', 'firstDayOfWeek', 'group', 'headerRows', 'height', 'hideEmptyAgendaDays', 'locale', 'maxDate', 'minDate', 'quickInfoOnSelectionEnd', 'quickInfoTemplates', 'readonly', 'resourceHeaderTemplate', 'resources', 'rowAutoHeight', 'selectedDate', 'showHeaderBar', 'showQuickInfo', 'showTimeIndicator', 'showWeekNumber', 'showWeekend', 'startHour', 'timeScale', 'timezone', 'views', 'width', 'workDays', 'workHours', 'actionBegin', 'actionComplete', 'actionFailure', 'cellClick', 'cellDoubleClick', 'created', 'dataBinding', 'dataBound', 'destroyed', 'drag', 'dragStart', 'dragStop', 'eventClick', 'eventRendered', 'hover', 'moreEventsClick', 'navigating', 'popupClose', 'popupOpen', 'renderCell', 'resizeStart', 'resizeStop', 'resizing', 'select'];
export const modelProps: string[] = ['currentView', 'selectedDate'];

/**
 * `ej-schedule` represents the VueJS Schedule Component.
 * ```vue
 * <ejs-schedule></ejs-schedule>
 * ```
 */
@EJComponentDecorator({
    props: properties,
    model: {
        event: 'modelchanged'
    }
})
export class ScheduleComponent extends ComponentBase {
    
    public ej2Instances: any;
    public propKeys: string[] = properties;
    public models: string[] = modelProps;
    public hasChildDirective: boolean = true;
    protected hasInjectedModules: boolean = true;
    public tagMapper: { [key: string]: Object } = {"e-views":"e-view","e-resources":"e-resource","e-header-rows":"e-header-row"};
    public tagNameMapper: Object = {"e-header-rows":"e-headerRows"};
    
    constructor() {
        super();
        this.ej2Instances = new Schedule({});        this.ej2Instances._trigger = this.ej2Instances.trigger;
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
    public trigger(eventName: string, eventProp: {[key:string]:Object}, successHandler?: Function): void {
        if ((eventName === 'change' || eventName === 'input') && this.models && (this.models.length !== 0)) {
            let key: string[] = this.models.toString().match(/checked|value/) || [];
            let propKey: string = key[0];
            if (eventProp && key && !isUndefined(eventProp[propKey])) {
                (this as any).$emit('update:'+ propKey, eventProp[propKey]);
                (this as any).$emit('modelchanged', eventProp[propKey]);
            }
        }
        if (this.ej2Instances && this.ej2Instances._trigger) {
            this.ej2Instances._trigger(eventName, eventProp, successHandler);
        }            
    }

    public render(createElement: any) {
        return createElement('div', (this as any).$slots.default);
    }
    
    public addEvent(data: Object | Object[]): void {
        return this.ej2Instances.addEvent(data);
    }

    public addResource(resources: Object | Object[], name: string, index: number): void {
        return this.ej2Instances.addResource(resources, name, index);
    }

    public changeCurrentView(viewName: Object, viewIndex?: number): void {
        return this.ej2Instances.changeCurrentView(viewName, viewIndex);
    }

    public closeEditor(): void {
        return this.ej2Instances.closeEditor();
    }

    public closeQuickInfoPopup(): void {
        return this.ej2Instances.closeQuickInfoPopup();
    }

    public deleteEvent(id: string | number | undefined | undefined[], currentAction?: Object): void {
        return this.ej2Instances.deleteEvent(id, currentAction);
    }

    public exportToExcel(excelExportOptions?: Object): void {
        return this.ej2Instances.exportToExcel(excelExportOptions);
    }

    public exportToICalendar(fileName?: string, customData?: Object[]): void {
        return this.ej2Instances.exportToICalendar(fileName, customData);
    }

    public getBlockEvents(startDate?: Object, endDate?: Object, includeOccurrences?: boolean): Object[] {
        return this.ej2Instances.getBlockEvents(startDate, endDate, includeOccurrences);
    }

    public getCellDetails(tdCol: Object | Object[]): Object {
        return this.ej2Instances.getCellDetails(tdCol);
    }

    public getCurrentViewDates(): Object[] {
        return this.ej2Instances.getCurrentViewDates();
    }

    public getCurrentViewEvents(): Object[] {
        return this.ej2Instances.getCurrentViewEvents();
    }

    public getDeletedOccurrences(recurrenceData: string | number | undefined): Object[] {
        return this.ej2Instances.getDeletedOccurrences(recurrenceData);
    }

    public getEventDetails(element: Object): Object {
        return this.ej2Instances.getEventDetails(element);
    }

    public getEventMaxID(): number | string {
        return this.ej2Instances.getEventMaxID();
    }

    public getEvents(startDate?: Object, endDate?: Object, includeOccurrences?: boolean): Object[] {
        return this.ej2Instances.getEvents(startDate, endDate, includeOccurrences);
    }

    public getOccurrencesByID(eventID: number | string): Object[] {
        return this.ej2Instances.getOccurrencesByID(eventID);
    }

    public getOccurrencesByRange(startTime: Object, endTime: Object): Object[] {
        return this.ej2Instances.getOccurrencesByRange(startTime, endTime);
    }

    public getResourceCollections(): Object[] {
        return this.ej2Instances.getResourceCollections();
    }

    public getResourcesByIndex(index: number): Object {
        return this.ej2Instances.getResourcesByIndex(index);
    }

    public getSelectedElements(): Object[] {
        return this.ej2Instances.getSelectedElements();
    }

    public hideSpinner(): void {
        return this.ej2Instances.hideSpinner();
    }

    public importICalendar(fileContent: Object | string): void {
        return this.ej2Instances.importICalendar(fileContent);
    }

    public isSlotAvailable(startTime: Object | Object, endTime?: Object, groupIndex?: number): boolean {
        return this.ej2Instances.isSlotAvailable(startTime, endTime, groupIndex);
    }

    public openEditor(data: Object, action: Object, isEventData?: boolean, repeatType?: number): void {
        return this.ej2Instances.openEditor(data, action, isEventData, repeatType);
    }

    public print(): void {
        return this.ej2Instances.print();
    }

    public refresh(): void {
        return this.ej2Instances.refresh();
    }

    public refreshEvents(): void {
        return this.ej2Instances.refreshEvents();
    }

    public removeResource(resourceId: string | string[] | number | number[], name: string): void {
        return this.ej2Instances.removeResource(resourceId, name);
    }

    public resetWorkHours(dates: Object[], start?: string, end?: string, groupIndex?: number): void {
        return this.ej2Instances.resetWorkHours(dates, start, end, groupIndex);
    }

    public saveEvent(data: undefined | undefined[], currentAction?: Object): void {
        return this.ej2Instances.saveEvent(data, currentAction);
    }

    public scrollTo(hour: string, scrollDate?: Object): void {
        return this.ej2Instances.scrollTo(hour, scrollDate);
    }

    public scrollToResource(resourceId: string | number, groupName?: string): void {
        return this.ej2Instances.scrollToResource(resourceId, groupName);
    }

    public setRecurrenceEditor(recurrenceEditor: Object): void {
        return this.ej2Instances.setRecurrenceEditor(recurrenceEditor);
    }

    public setWorkHours(dates: Object[], start: string, end: string, groupIndex?: number): void {
        return this.ej2Instances.setWorkHours(dates, start, end, groupIndex);
    }

    public showSpinner(): void {
        return this.ej2Instances.showSpinner();
    }
}

export const SchedulePlugin = {
    name: 'ejs-schedule',
    install(Vue: any) {
        Vue.component(SchedulePlugin.name, ScheduleComponent);
        Vue.component(ViewPlugin.name, ViewDirective);
        Vue.component(ViewsPlugin.name, ViewsDirective);
        Vue.component(ResourcePlugin.name, ResourceDirective);
        Vue.component(ResourcesPlugin.name, ResourcesDirective);
        Vue.component(HeaderRowPlugin.name, HeaderRowDirective);
        Vue.component(HeaderRowsPlugin.name, HeaderRowsDirective);

    }
}
