import { Options } from 'vue-class-component';
import { isUndefined } from '@syncfusion/ej2-base';
import { ComponentBase, EJComponentDecorator, getProps, allVue, gh } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined, getValue } from '@syncfusion/ej2-base';

import { Schedule } from '@syncfusion/ej2-schedule';
import { ViewsDirective, ViewDirective, ViewsPlugin, ViewPlugin } from './views.directive'
import { ResourcesDirective, ResourceDirective, ResourcesPlugin, ResourcePlugin } from './resources.directive'
import { HeaderRowsDirective, HeaderRowDirective, HeaderRowsPlugin, HeaderRowPlugin } from './headerrows.directive'


// {{VueImport}}
export const properties: string[] = ['isLazyUpdate', 'plugins', 'agendaDaysCount', 'allowDragAndDrop', 'allowInline', 'allowKeyboardInteraction', 'allowMultiCellSelection', 'allowMultiDrag', 'allowMultiRowSelection', 'allowResizing', 'calendarMode', 'cellHeaderTemplate', 'cellTemplate', 'cssClass', 'currentView', 'dateFormat', 'dateHeaderTemplate', 'dayHeaderTemplate', 'editorTemplate', 'enableAdaptiveUI', 'enableAllDayScroll', 'enablePersistence', 'enableRecurrenceValidation', 'enableRtl', 'endHour', 'eventDragArea', 'eventSettings', 'firstDayOfWeek', 'firstMonthOfYear', 'group', 'headerIndentTemplate', 'headerRows', 'height', 'hideEmptyAgendaDays', 'locale', 'maxDate', 'minDate', 'monthHeaderTemplate', 'monthsCount', 'quickInfoOnSelectionEnd', 'quickInfoTemplates', 'readonly', 'resourceHeaderTemplate', 'resources', 'rowAutoHeight', 'selectedDate', 'showHeaderBar', 'showQuickInfo', 'showTimeIndicator', 'showWeekNumber', 'showWeekend', 'startHour', 'timeFormat', 'timeScale', 'timezone', 'timezoneDataSource', 'views', 'weekRule', 'width', 'workDays', 'workHours', 'actionBegin', 'actionComplete', 'actionFailure', 'cellClick', 'cellDoubleClick', 'created', 'dataBinding', 'dataBound', 'destroyed', 'drag', 'dragStart', 'dragStop', 'eventClick', 'eventRendered', 'hover', 'moreEventsClick', 'navigating', 'popupClose', 'popupOpen', 'renderCell', 'resizeStart', 'resizeStop', 'resizing', 'select'];
export const modelProps: string[] = ['currentView', 'selectedDate'];

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

export class ScheduleComponent extends ComponentBase {
    
    public ej2Instances: any;
    public propKeys: string[] = properties;
    public models: string[] = modelProps;
    public hasChildDirective: boolean = true;
    protected hasInjectedModules: boolean = true;
    public tagMapper: { [key: string]: Object } = {"e-views":"e-view","e-resources":"e-resource","e-header-rows":"e-header-row"};
    public tagNameMapper: Object = {"e-header-rows":"e-headerRows"};
    public isVue3: boolean;
    public templateCollection: any;
    constructor() {
        super(arguments);
        this.isVue3 = !isExecute;
        this.ej2Instances = new Schedule({});        this.ej2Instances._trigger = this.ej2Instances.trigger;
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

    public collapseResource(resourceId: string | number, name: string): void {
        return this.ej2Instances.collapseResource(resourceId, name);
    }

    public deleteEvent(id: string | number | Object | Object[], currentAction?: Object): void {
        return this.ej2Instances.deleteEvent(id, currentAction);
    }

    public expandResource(resourceId: string | number, name: string): void {
        return this.ej2Instances.expandResource(resourceId, name);
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

    public getCurrentViewIndex(): number {
        return this.ej2Instances.getCurrentViewIndex();
    }

    public getDeletedOccurrences(recurrenceData: string | number | Object): Object[] {
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

    public getIndexFromResourceId(id: string | number, name?: string): number {
        return this.ej2Instances.getIndexFromResourceId(id, name);
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

    public openQuickInfoPopup(data: Object): void {
        return this.ej2Instances.openQuickInfoPopup(data);
    }

    public print(printOptions?: Object): void {
        return this.ej2Instances.print(printOptions);
    }

    public refreshEvents(isRemoteRefresh: boolean): void {
        return this.ej2Instances.refreshEvents(isRemoteRefresh);
    }

    public refreshLayout(): void {
        return this.ej2Instances.refreshLayout();
    }

    public refreshTemplates(templateName?: string): void {
        return this.ej2Instances.refreshTemplates(templateName);
    }

    public removeResource(resourceId: string | string[] | number | number[], name: string): void {
        return this.ej2Instances.removeResource(resourceId, name);
    }

    public resetWorkHours(dates: Object[], start?: string, end?: string, groupIndex?: number): void {
        return this.ej2Instances.resetWorkHours(dates, start, end, groupIndex);
    }

    public saveEvent(data: Object | Object[], currentAction?: Object): void {
        return this.ej2Instances.saveEvent(data, currentAction);
    }

    public scrollTo(hour: string, scrollDate?: Object): void {
        return this.ej2Instances.scrollTo(hour, scrollDate);
    }

    public scrollToResource(resourceId: string | number, groupName?: string): void {
        return this.ej2Instances.scrollToResource(resourceId, groupName);
    }

    public selectResourceByIndex(groupIndex: number): void {
        return this.ej2Instances.selectResourceByIndex(groupIndex);
    }

    public setRecurrenceEditor(recurrenceEditor: Object): void {
        return this.ej2Instances.setRecurrenceEditor(recurrenceEditor);
    }

    public setResourceCollections(resourceCol: Object[]): void {
        return this.ej2Instances.setResourceCollections(resourceCol);
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