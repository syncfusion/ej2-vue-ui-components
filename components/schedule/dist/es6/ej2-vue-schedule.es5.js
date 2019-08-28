import { RecurrenceEditor, Schedule } from '@syncfusion/ej2-schedule';
import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';
import { isUndefined } from '@syncfusion/ej2-base';

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ViewsDirective = /** @__PURE__ @class */ (function (_super) {
    __extends(ViewsDirective, _super);
    function ViewsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ViewsDirective.prototype.render = function () {
        return;
    };
    ViewsDirective = __decorate([
        EJComponentDecorator({})
    ], ViewsDirective);
    return ViewsDirective;
}(Vue));
var ViewsPlugin = {
    name: 'e-views',
    install: function (Vue$$1) {
        Vue$$1.component(ViewsPlugin.name, ViewsDirective);
    }
};
/**
 * `e-views` directive represent a view of the VueJS Schedule.
 * It must be contained in a Schedule component(`ejs-schedule`).
 * ```vue
 * <ejs-schedule>
 *   <e-views>
 *    <e-view option='day' dateFormat='dd MMM'></e-view>
 *    <e-view option='week'></e-view>
 *   </e-views>
 * </ejs-schedule>
 * ```
 */
var ViewDirective = /** @__PURE__ @class */ (function (_super) {
    __extends(ViewDirective, _super);
    function ViewDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ViewDirective.prototype.render = function () {
        return;
    };
    ViewDirective = __decorate([
        EJComponentDecorator({})
    ], ViewDirective);
    return ViewDirective;
}(Vue));
var ViewPlugin = {
    name: 'e-view',
    install: function (Vue$$1) {
        Vue$$1.component(ViewPlugin.name, ViewDirective);
    }
};

var __extends$1 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ResourcesDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$1(ResourcesDirective, _super);
    function ResourcesDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ResourcesDirective.prototype.render = function () {
        return;
    };
    ResourcesDirective = __decorate$1([
        EJComponentDecorator({})
    ], ResourcesDirective);
    return ResourcesDirective;
}(Vue));
var ResourcesPlugin = {
    name: 'e-resources',
    install: function (Vue$$1) {
        Vue$$1.component(ResourcesPlugin.name, ResourcesDirective);
    }
};
/**
 * `e-resources` directive represent a resources of the VueJS Schedule.
 * It must be contained in a Schedule component(`ejs-schedule`).
 * ```vue
 * <ejs-schedule>
 *   <e-resources>
 *    <e-resource field='RoomId' name='Rooms'></e-resource>
 *    <e-resource field='OwnerId' name='Owners'></e-resource>
 *   </e-resources>
 * </ejs-schedule>
 * ```
 */
var ResourceDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$1(ResourceDirective, _super);
    function ResourceDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ResourceDirective.prototype.render = function () {
        return;
    };
    ResourceDirective = __decorate$1([
        EJComponentDecorator({})
    ], ResourceDirective);
    return ResourceDirective;
}(Vue));
var ResourcePlugin = {
    name: 'e-resource',
    install: function (Vue$$1) {
        Vue$$1.component(ResourcePlugin.name, ResourceDirective);
    }
};

var __extends$2 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$2 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var HeaderRowsDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$2(HeaderRowsDirective, _super);
    function HeaderRowsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HeaderRowsDirective.prototype.render = function () {
        return;
    };
    HeaderRowsDirective = __decorate$2([
        EJComponentDecorator({})
    ], HeaderRowsDirective);
    return HeaderRowsDirective;
}(Vue));
var HeaderRowsPlugin = {
    name: 'e-header-rows',
    install: function (Vue$$1) {
        Vue$$1.component(HeaderRowsPlugin.name, HeaderRowsDirective);
    }
};
/**
 * `e-header-rows` directive represent a header rows of the VueJS Schedule.
 * It must be contained in a Schedule component(`ejs-schedule`).
 * ```vue
 * <ejs-schedule>
 *   <e-header-rows>
 *    <e-header-row option='Week'></e-header-row>
 *    <e-header-row option='Date'></e-header-row>
 *   </e-header-rows>
 * </ejs-schedule>
 * ```
 */
var HeaderRowDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$2(HeaderRowDirective, _super);
    function HeaderRowDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HeaderRowDirective.prototype.render = function () {
        return;
    };
    HeaderRowDirective = __decorate$2([
        EJComponentDecorator({})
    ], HeaderRowDirective);
    return HeaderRowDirective;
}(Vue));
var HeaderRowPlugin = {
    name: 'e-header-row',
    install: function (Vue$$1) {
        Vue$$1.component(HeaderRowPlugin.name, HeaderRowDirective);
    }
};

var __extends$3 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$3 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var properties = ['agendaDaysCount', 'allowDragAndDrop', 'allowKeyboardInteraction', 'allowResizing', 'calendarMode', 'cellTemplate', 'cssClass', 'currentView', 'dateFormat', 'dateHeaderTemplate', 'editorTemplate', 'enablePersistence', 'enableRecurrenceValidation', 'enableRtl', 'endHour', 'eventDragArea', 'eventSettings', 'firstDayOfWeek', 'group', 'headerRows', 'height', 'hideEmptyAgendaDays', 'locale', 'quickInfoTemplates', 'readonly', 'resourceHeaderTemplate', 'resources', 'rowAutoHeight', 'selectedDate', 'showHeaderBar', 'showQuickInfo', 'showTimeIndicator', 'showWeekNumber', 'showWeekend', 'startHour', 'timeScale', 'timezone', 'views', 'width', 'workDays', 'workHours', 'actionBegin', 'actionComplete', 'actionFailure', 'cellClick', 'cellDoubleClick', 'created', 'dataBinding', 'dataBound', 'destroyed', 'drag', 'dragStart', 'dragStop', 'eventClick', 'eventRendered', 'navigating', 'popupOpen', 'renderCell', 'resizeStart', 'resizeStop', 'resizing', 'select'];
var modelProps = ['currentView', 'selectedDate'];
/**
 * `ej-schedule` represents the VueJS Schedule Component.
 * ```vue
 * <ejs-schedule></ejs-schedule>
 * ```
 */
var ScheduleComponent = /** @__PURE__ @class */ (function (_super) {
    __extends$3(ScheduleComponent, _super);
    function ScheduleComponent() {
        var _this = _super.call(this) || this;
        _this.propKeys = properties;
        _this.models = modelProps;
        _this.hasChildDirective = true;
        _this.hasInjectedModules = true;
        _this.tagMapper = { "e-views": "e-view", "e-resources": "e-resource", "e-header-rows": "e-header-row" };
        _this.tagNameMapper = { "e-header-rows": "e-headerRows" };
        _this.ej2Instances = new Schedule({});
        _this.ej2Instances._trigger = _this.ej2Instances.trigger;
        _this.ej2Instances.trigger = _this.trigger;
        _this.bindProperties();
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        return _this;
    }
    ScheduleComponent.prototype.setProperties = function (prop, muteOnChange) {
        var _this = this;
        if (this.ej2Instances && this.ej2Instances._setProperties) {
            this.ej2Instances._setProperties(prop, muteOnChange);
        }
        if (prop && this.models && this.models.length) {
            Object.keys(prop).map(function (key) {
                _this.models.map(function (model) {
                    if ((key === model) && !(/datasource/i.test(key))) {
                        _this.$emit('update:' + key, prop[key]);
                    }
                });
            });
        }
    };
    ScheduleComponent.prototype.trigger = function (eventName, eventProp) {
        if ((eventName === 'change' || eventName === 'input') && this.models && (this.models.length !== 0)) {
            var key = this.models.toString().match(/checked|value/) || [];
            var propKey = key[0];
            if (eventProp && key && !isUndefined(eventProp[propKey])) {
                this.$emit('update:' + propKey, eventProp[propKey]);
                this.$emit('modelchanged', eventProp[propKey]);
            }
        }
        if (this.ej2Instances && this.ej2Instances._trigger) {
            this.ej2Instances._trigger(eventName, eventProp);
        }
    };
    ScheduleComponent.prototype.render = function (createElement) {
        return createElement('div', this.$slots.default);
    };
    ScheduleComponent.prototype.addEvent = function (data) {
        return this.ej2Instances.addEvent(data);
    };
    ScheduleComponent.prototype.addResource = function (resources, name, index) {
        return this.ej2Instances.addResource(resources, name, index);
    };
    ScheduleComponent.prototype.addSelectedClass = function (cells, focusCell) {
        return this.ej2Instances.addSelectedClass(cells, focusCell);
    };
    ScheduleComponent.prototype.boundaryValidation = function (pageY, pageX) {
        return this.ej2Instances.boundaryValidation(pageY, pageX);
    };
    ScheduleComponent.prototype.changeDate = function (selectedDate, event) {
        return this.ej2Instances.changeDate(selectedDate, event);
    };
    ScheduleComponent.prototype.changeView = function (view, event, muteOnChange, index) {
        return this.ej2Instances.changeView(view, event, muteOnChange, index);
    };
    ScheduleComponent.prototype.closeEditor = function () {
        return this.ej2Instances.closeEditor();
    };
    ScheduleComponent.prototype.closeQuickInfoPopup = function () {
        return this.ej2Instances.closeQuickInfoPopup();
    };
    ScheduleComponent.prototype.deleteEvent = function (id, currentAction) {
        return this.ej2Instances.deleteEvent(id, currentAction);
    };
    ScheduleComponent.prototype.exportToExcel = function (excelExportOptions) {
        return this.ej2Instances.exportToExcel(excelExportOptions);
    };
    ScheduleComponent.prototype.exportToICalendar = function (fileName) {
        return this.ej2Instances.exportToICalendar(fileName);
    };
    ScheduleComponent.prototype.getAllDayRow = function () {
        return this.ej2Instances.getAllDayRow();
    };
    ScheduleComponent.prototype.getAppointmentTemplate = function () {
        return this.ej2Instances.getAppointmentTemplate();
    };
    ScheduleComponent.prototype.getCalendarMode = function () {
        return this.ej2Instances.getCalendarMode();
    };
    ScheduleComponent.prototype.getCellDetails = function (tdCol) {
        return this.ej2Instances.getCellDetails(tdCol);
    };
    ScheduleComponent.prototype.getCellTemplate = function () {
        return this.ej2Instances.getCellTemplate();
    };
    ScheduleComponent.prototype.getContentTable = function () {
        return this.ej2Instances.getContentTable();
    };
    ScheduleComponent.prototype.getCssProperties = function () {
        return this.ej2Instances.getCssProperties();
    };
    ScheduleComponent.prototype.getCurrentTime = function () {
        return this.ej2Instances.getCurrentTime();
    };
    ScheduleComponent.prototype.getCurrentViewDates = function () {
        return this.ej2Instances.getCurrentViewDates();
    };
    ScheduleComponent.prototype.getCurrentViewEvents = function () {
        return this.ej2Instances.getCurrentViewEvents();
    };
    ScheduleComponent.prototype.getDateFromElement = function (td) {
        return this.ej2Instances.getDateFromElement(td);
    };
    ScheduleComponent.prototype.getDateHeaderTemplate = function () {
        return this.ej2Instances.getDateHeaderTemplate();
    };
    ScheduleComponent.prototype.getDateTime = function (date) {
        return this.ej2Instances.getDateTime(date);
    };
    ScheduleComponent.prototype.getDayNames = function (type) {
        return this.ej2Instances.getDayNames(type);
    };
    ScheduleComponent.prototype.getEditorTemplate = function () {
        return this.ej2Instances.getEditorTemplate();
    };
    ScheduleComponent.prototype.getEventDetails = function (element) {
        return this.ej2Instances.getEventDetails(element);
    };
    ScheduleComponent.prototype.getEventTooltipTemplate = function () {
        return this.ej2Instances.getEventTooltipTemplate();
    };
    ScheduleComponent.prototype.getEvents = function (startDate, endDate, includeOccurrences) {
        return this.ej2Instances.getEvents(startDate, endDate, includeOccurrences);
    };
    ScheduleComponent.prototype.getHeaderTooltipTemplate = function () {
        return this.ej2Instances.getHeaderTooltipTemplate();
    };
    ScheduleComponent.prototype.getIndexOfDate = function (collection, date) {
        return this.ej2Instances.getIndexOfDate(collection, date);
    };
    ScheduleComponent.prototype.getMajorSlotTemplate = function () {
        return this.ej2Instances.getMajorSlotTemplate();
    };
    ScheduleComponent.prototype.getMinorSlotTemplate = function () {
        return this.ej2Instances.getMinorSlotTemplate();
    };
    ScheduleComponent.prototype.getNavigateView = function () {
        return this.ej2Instances.getNavigateView();
    };
    ScheduleComponent.prototype.getOccurrencesByID = function (eventID) {
        return this.ej2Instances.getOccurrencesByID(eventID);
    };
    ScheduleComponent.prototype.getOccurrencesByRange = function (startTime, endTime) {
        return this.ej2Instances.getOccurrencesByRange(startTime, endTime);
    };
    ScheduleComponent.prototype.getQuickInfoTemplatesContent = function () {
        return this.ej2Instances.getQuickInfoTemplatesContent();
    };
    ScheduleComponent.prototype.getQuickInfoTemplatesFooter = function () {
        return this.ej2Instances.getQuickInfoTemplatesFooter();
    };
    ScheduleComponent.prototype.getQuickInfoTemplatesHeader = function () {
        return this.ej2Instances.getQuickInfoTemplatesHeader();
    };
    ScheduleComponent.prototype.getResourceHeaderTemplate = function () {
        return this.ej2Instances.getResourceHeaderTemplate();
    };
    ScheduleComponent.prototype.getResourcesByIndex = function (index) {
        return this.ej2Instances.getResourcesByIndex(index);
    };
    ScheduleComponent.prototype.getSelectedElements = function () {
        return this.ej2Instances.getSelectedElements();
    };
    ScheduleComponent.prototype.getStartEndTime = function (startEndTime) {
        return this.ej2Instances.getStartEndTime(startEndTime);
    };
    ScheduleComponent.prototype.getTableRows = function () {
        return this.ej2Instances.getTableRows();
    };
    ScheduleComponent.prototype.getTimeString = function (date) {
        return this.ej2Instances.getTimeString(date);
    };
    ScheduleComponent.prototype.getWorkCellElements = function () {
        return this.ej2Instances.getWorkCellElements();
    };
    ScheduleComponent.prototype.hideSpinner = function () {
        return this.ej2Instances.hideSpinner();
    };
    ScheduleComponent.prototype.importICalendar = function (fileContent) {
        return this.ej2Instances.importICalendar(fileContent);
    };
    ScheduleComponent.prototype.isAllDayCell = function (td) {
        return this.ej2Instances.isAllDayCell(td);
    };
    ScheduleComponent.prototype.isSelectedDate = function (date) {
        return this.ej2Instances.isSelectedDate(date);
    };
    ScheduleComponent.prototype.isSlotAvailable = function (startTime, endTime, groupIndex) {
        return this.ej2Instances.isSlotAvailable(startTime, endTime, groupIndex);
    };
    ScheduleComponent.prototype.openEditor = function (data, action, isEventData, repeatType) {
        return this.ej2Instances.openEditor(data, action, isEventData, repeatType);
    };
    ScheduleComponent.prototype.print = function () {
        return this.ej2Instances.print();
    };
    ScheduleComponent.prototype.refreshEvents = function () {
        return this.ej2Instances.refreshEvents();
    };
    ScheduleComponent.prototype.removeNewEventElement = function () {
        return this.ej2Instances.removeNewEventElement();
    };
    ScheduleComponent.prototype.removeResource = function (resourceId, name) {
        return this.ej2Instances.removeResource(resourceId, name);
    };
    ScheduleComponent.prototype.removeSelectedClass = function () {
        return this.ej2Instances.removeSelectedClass();
    };
    ScheduleComponent.prototype.renderCompleted = function () {
        return this.ej2Instances.renderCompleted();
    };
    ScheduleComponent.prototype.renderElements = function (isLayoutOnly) {
        return this.ej2Instances.renderElements(isLayoutOnly);
    };
    ScheduleComponent.prototype.resetEventTemplates = function () {
        return this.ej2Instances.resetEventTemplates();
    };
    ScheduleComponent.prototype.resetLayoutTemplates = function () {
        return this.ej2Instances.resetLayoutTemplates();
    };
    ScheduleComponent.prototype.resetWorkHours = function (dates, start, end, groupIndex) {
        return this.ej2Instances.resetWorkHours(dates, start, end, groupIndex);
    };
    ScheduleComponent.prototype.saveEvent = function (data, currentAction) {
        return this.ej2Instances.saveEvent(data, currentAction);
    };
    ScheduleComponent.prototype.scrollTo = function (hour) {
        return this.ej2Instances.scrollTo(hour);
    };
    ScheduleComponent.prototype.selectCell = function (element) {
        return this.ej2Instances.selectCell(element);
    };
    ScheduleComponent.prototype.setWorkHours = function (dates, start, end, groupIndex) {
        return this.ej2Instances.setWorkHours(dates, start, end, groupIndex);
    };
    ScheduleComponent.prototype.showSpinner = function () {
        return this.ej2Instances.showSpinner();
    };
    ScheduleComponent.prototype.templateParser = function (template) {
        return this.ej2Instances.templateParser(template);
    };
    ScheduleComponent.prototype.updateLayoutTemplates = function () {
        return this.ej2Instances.updateLayoutTemplates();
    };
    ScheduleComponent = __decorate$3([
        EJComponentDecorator({
            props: properties,
            model: {
                event: 'modelchanged'
            }
        })
    ], ScheduleComponent);
    return ScheduleComponent;
}(ComponentBase));
var SchedulePlugin = {
    name: 'ejs-schedule',
    install: function (Vue$$1) {
        Vue$$1.component(SchedulePlugin.name, ScheduleComponent);
        Vue$$1.component(ViewPlugin.name, ViewDirective);
        Vue$$1.component(ViewsPlugin.name, ViewsDirective);
        Vue$$1.component(ResourcePlugin.name, ResourceDirective);
        Vue$$1.component(ResourcesPlugin.name, ResourcesDirective);
        Vue$$1.component(HeaderRowPlugin.name, HeaderRowDirective);
        Vue$$1.component(HeaderRowsPlugin.name, HeaderRowsDirective);
    }
};

var __extends$4 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$4 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var properties$1 = ['calendarMode', 'cssClass', 'dateFormat', 'enablePersistence', 'enableRtl', 'firstDayOfWeek', 'frequencies', 'locale', 'maxDate', 'minDate', 'selectedType', 'startDate', 'value', 'change'];
var modelProps$1 = [];
/**
 * `ejs-recurrenceeditor` represents the VueJS RecurrenceEditor Component.
 * ```vue
 * <ejs-recurrenceeditor></ejs-recurrenceeditor>
 * ```
 */
var RecurrenceEditorComponent = /** @__PURE__ @class */ (function (_super) {
    __extends$4(RecurrenceEditorComponent, _super);
    function RecurrenceEditorComponent() {
        var _this = _super.call(this) || this;
        _this.propKeys = properties$1;
        _this.models = modelProps$1;
        _this.hasChildDirective = false;
        _this.hasInjectedModules = false;
        _this.tagMapper = {};
        _this.tagNameMapper = {};
        _this.ej2Instances = new RecurrenceEditor({});
        _this.bindProperties();
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        return _this;
    }
    RecurrenceEditorComponent.prototype.setProperties = function (prop, muteOnChange) {
        var _this = this;
        if (this.ej2Instances && this.ej2Instances._setProperties) {
            this.ej2Instances._setProperties(prop, muteOnChange);
        }
        if (prop && this.models && this.models.length) {
            Object.keys(prop).map(function (key) {
                _this.models.map(function (model) {
                    if ((key === model) && !(/datasource/i.test(key))) {
                        _this.$emit('update:' + key, prop[key]);
                    }
                });
            });
        }
    };
    RecurrenceEditorComponent.prototype.render = function (createElement) {
        return createElement('div', this.$slots.default);
    };
    RecurrenceEditorComponent.prototype.getCalendarMode = function () {
        return this.ej2Instances.getCalendarMode();
    };
    RecurrenceEditorComponent.prototype.getRecurrenceDates = function (startDate, rule, excludeDate, maximumCount, viewDate) {
        return this.ej2Instances.getRecurrenceDates(startDate, rule, excludeDate, maximumCount, viewDate);
    };
    RecurrenceEditorComponent.prototype.getRecurrenceRule = function () {
        return this.ej2Instances.getRecurrenceRule();
    };
    RecurrenceEditorComponent.prototype.getRuleSummary = function (rule) {
        return this.ej2Instances.getRuleSummary(rule);
    };
    RecurrenceEditorComponent.prototype.resetFields = function () {
        return this.ej2Instances.resetFields();
    };
    RecurrenceEditorComponent.prototype.setRecurrenceRule = function (rule, startDate) {
        return this.ej2Instances.setRecurrenceRule(rule, startDate);
    };
    RecurrenceEditorComponent = __decorate$4([
        EJComponentDecorator({
            props: properties$1
        })
    ], RecurrenceEditorComponent);
    return RecurrenceEditorComponent;
}(ComponentBase));
var RecurrenceEditorPlugin = {
    name: 'ejs-recurrenceeditor',
    install: function (Vue$$1) {
        Vue$$1.component(RecurrenceEditorPlugin.name, RecurrenceEditorComponent);
    }
};

export { ViewsDirective, ViewDirective, ViewsPlugin, ViewPlugin, ResourcesDirective, ResourceDirective, ResourcesPlugin, ResourcePlugin, HeaderRowsDirective, HeaderRowDirective, HeaderRowsPlugin, HeaderRowPlugin, ScheduleComponent, SchedulePlugin, RecurrenceEditorComponent, RecurrenceEditorPlugin };
export * from '@syncfusion/ej2-schedule';
//# sourceMappingURL=ej2-vue-schedule.es5.js.map
