import { Gantt } from '@syncfusion/ej2-gantt';
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
var ColumnsDirective = /** @__PURE__ @class */ (function (_super) {
    __extends(ColumnsDirective, _super);
    function ColumnsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ColumnsDirective.prototype.render = function () {
        return;
    };
    ColumnsDirective = __decorate([
        EJComponentDecorator({})
    ], ColumnsDirective);
    return ColumnsDirective;
}(Vue));
var ColumnsPlugin = {
    name: 'e-columns',
    install: function (Vue$$1) {
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
var ColumnDirective = /** @__PURE__ @class */ (function (_super) {
    __extends(ColumnDirective, _super);
    function ColumnDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ColumnDirective.prototype.render = function () {
        return;
    };
    ColumnDirective = __decorate([
        EJComponentDecorator({})
    ], ColumnDirective);
    return ColumnDirective;
}(Vue));
var ColumnPlugin = {
    name: 'e-column',
    install: function (Vue$$1) {
        Vue$$1.component(ColumnPlugin.name, ColumnDirective);
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
var AddDialogFieldsDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$1(AddDialogFieldsDirective, _super);
    function AddDialogFieldsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AddDialogFieldsDirective.prototype.render = function () {
        return;
    };
    AddDialogFieldsDirective = __decorate$1([
        EJComponentDecorator({})
    ], AddDialogFieldsDirective);
    return AddDialogFieldsDirective;
}(Vue));
var AddDialogFieldsPlugin = {
    name: 'e-add-dialog-fields',
    install: function (Vue$$1) {
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
var AddDialogFieldDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$1(AddDialogFieldDirective, _super);
    function AddDialogFieldDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AddDialogFieldDirective.prototype.render = function () {
        return;
    };
    AddDialogFieldDirective = __decorate$1([
        EJComponentDecorator({})
    ], AddDialogFieldDirective);
    return AddDialogFieldDirective;
}(Vue));
var AddDialogFieldPlugin = {
    name: 'e-add-dialog-field',
    install: function (Vue$$1) {
        Vue$$1.component(AddDialogFieldPlugin.name, AddDialogFieldDirective);
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
var EditDialogFieldsDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$2(EditDialogFieldsDirective, _super);
    function EditDialogFieldsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EditDialogFieldsDirective.prototype.render = function () {
        return;
    };
    EditDialogFieldsDirective = __decorate$2([
        EJComponentDecorator({})
    ], EditDialogFieldsDirective);
    return EditDialogFieldsDirective;
}(Vue));
var EditDialogFieldsPlugin = {
    name: 'e-edit-dialog-fields',
    install: function (Vue$$1) {
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
var EditDialogFieldDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$2(EditDialogFieldDirective, _super);
    function EditDialogFieldDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EditDialogFieldDirective.prototype.render = function () {
        return;
    };
    EditDialogFieldDirective = __decorate$2([
        EJComponentDecorator({})
    ], EditDialogFieldDirective);
    return EditDialogFieldDirective;
}(Vue));
var EditDialogFieldPlugin = {
    name: 'e-edit-dialog-field',
    install: function (Vue$$1) {
        Vue$$1.component(EditDialogFieldPlugin.name, EditDialogFieldDirective);
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
var DayWorkingTimeCollectionDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$3(DayWorkingTimeCollectionDirective, _super);
    function DayWorkingTimeCollectionDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DayWorkingTimeCollectionDirective.prototype.render = function () {
        return;
    };
    DayWorkingTimeCollectionDirective = __decorate$3([
        EJComponentDecorator({})
    ], DayWorkingTimeCollectionDirective);
    return DayWorkingTimeCollectionDirective;
}(Vue));
var DayWorkingTimeCollectionPlugin = {
    name: 'e-day-working-time-collection',
    install: function (Vue$$1) {
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
var DayWorkingTimeDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$3(DayWorkingTimeDirective, _super);
    function DayWorkingTimeDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DayWorkingTimeDirective.prototype.render = function () {
        return;
    };
    DayWorkingTimeDirective = __decorate$3([
        EJComponentDecorator({})
    ], DayWorkingTimeDirective);
    return DayWorkingTimeDirective;
}(Vue));
var DayWorkingTimePlugin = {
    name: 'e-day-working-time',
    install: function (Vue$$1) {
        Vue$$1.component(DayWorkingTimePlugin.name, DayWorkingTimeDirective);
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
var HolidaysDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$4(HolidaysDirective, _super);
    function HolidaysDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HolidaysDirective.prototype.render = function () {
        return;
    };
    HolidaysDirective = __decorate$4([
        EJComponentDecorator({})
    ], HolidaysDirective);
    return HolidaysDirective;
}(Vue));
var HolidaysPlugin = {
    name: 'e-holidays',
    install: function (Vue$$1) {
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
var HolidayDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$4(HolidayDirective, _super);
    function HolidayDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HolidayDirective.prototype.render = function () {
        return;
    };
    HolidayDirective = __decorate$4([
        EJComponentDecorator({})
    ], HolidayDirective);
    return HolidayDirective;
}(Vue));
var HolidayPlugin = {
    name: 'e-holidays',
    install: function (Vue$$1) {
        Vue$$1.component(HolidayPlugin.name, HolidayDirective);
    }
};

var __extends$5 = (undefined && undefined.__extends) || (function () {
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
var __decorate$5 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var EventMarkersDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$5(EventMarkersDirective, _super);
    function EventMarkersDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EventMarkersDirective.prototype.render = function () {
        return;
    };
    EventMarkersDirective = __decorate$5([
        EJComponentDecorator({})
    ], EventMarkersDirective);
    return EventMarkersDirective;
}(Vue));
var EventMarkersPlugin = {
    name: 'e-event-markers',
    install: function (Vue$$1) {
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
var EventMarkerDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$5(EventMarkerDirective, _super);
    function EventMarkerDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EventMarkerDirective.prototype.render = function () {
        return;
    };
    EventMarkerDirective = __decorate$5([
        EJComponentDecorator({})
    ], EventMarkerDirective);
    return EventMarkerDirective;
}(Vue));
var EventMarkerPlugin = {
    name: 'e-event-marker',
    install: function (Vue$$1) {
        Vue$$1.component(EventMarkerPlugin.name, EventMarkerDirective);
    }
};

var __extends$6 = (undefined && undefined.__extends) || (function () {
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
var __decorate$6 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var properties = ['addDialogFields', 'allowExcelExport', 'allowFiltering', 'allowKeyboard', 'allowPdfExport', 'allowReordering', 'allowResizing', 'allowRowDragAndDrop', 'allowSelection', 'allowSorting', 'allowUnscheduledTasks', 'autoFocusTasks', 'baselineColor', 'collapseAllParentTasks', 'columnMenuItems', 'columns', 'connectorLineBackground', 'connectorLineWidth', 'contextMenuItems', 'dataSource', 'dateFormat', 'dayWorkingTime', 'disableHtmlEncode', 'durationUnit', 'editDialogFields', 'editSettings', 'enableContextMenu', 'enableImmutableMode', 'enableMultiTaskbar', 'enablePersistence', 'enablePredecessorValidation', 'enableRtl', 'enableVirtualization', 'eventMarkers', 'filterSettings', 'gridLines', 'height', 'highlightWeekends', 'holidays', 'includeWeekend', 'labelSettings', 'locale', 'milestoneTemplate', 'parentTaskbarTemplate', 'projectEndDate', 'projectStartDate', 'query', 'readOnly', 'renderBaseline', 'resourceFields', 'resourceIDMapping', 'resourceNameMapping', 'resources', 'rowHeight', 'searchSettings', 'segmentData', 'selectedRowIndex', 'selectionSettings', 'showColumnMenu', 'showInlineNotes', 'showOverAllocation', 'sortSettings', 'splitterSettings', 'taskFields', 'taskMode', 'taskType', 'taskbarHeight', 'taskbarTemplate', 'timelineSettings', 'timezone', 'toolbar', 'tooltipSettings', 'treeColumnIndex', 'validateManualTasksOnLinking', 'viewType', 'width', 'workUnit', 'workWeek', 'actionBegin', 'actionComplete', 'actionFailure', 'beforeExcelExport', 'beforePdfExport', 'beforeTooltipRender', 'cellDeselected', 'cellDeselecting', 'cellEdit', 'cellSelected', 'cellSelecting', 'collapsed', 'collapsing', 'columnDrag', 'columnDragStart', 'columnDrop', 'columnMenuClick', 'columnMenuOpen', 'contextMenuClick', 'contextMenuOpen', 'created', 'dataBound', 'destroyed', 'endEdit', 'excelExportComplete', 'excelHeaderQueryCellInfo', 'excelQueryCellInfo', 'expanded', 'expanding', 'headerCellInfo', 'load', 'onMouseMove', 'onTaskbarClick', 'pdfColumnHeaderQueryCellInfo', 'pdfExportComplete', 'pdfQueryCellInfo', 'pdfQueryTaskbarInfo', 'pdfQueryTimelineCellInfo', 'queryCellInfo', 'queryTaskbarInfo', 'recordDoubleClick', 'resizeStart', 'resizeStop', 'resizing', 'rowDataBound', 'rowDeselected', 'rowDeselecting', 'rowDrag', 'rowDragStart', 'rowDragStartHelper', 'rowDrop', 'rowSelected', 'rowSelecting', 'splitterResizeStart', 'splitterResized', 'splitterResizing', 'taskbarEdited', 'taskbarEditing', 'toolbarClick'];
var modelProps = ['dataSource'];
/**
 * `ejs-gantt` represents the VueJS Gantt Component.
 * ```vue
 * <ejs-gantt :dataSource='data' allowSelection='true' allowSorting='true'></ejs-gantt>
 * ```
 */
var GanttComponent = /** @__PURE__ @class */ (function (_super) {
    __extends$6(GanttComponent, _super);
    function GanttComponent() {
        var _this = _super.call(this) || this;
        _this.propKeys = properties;
        _this.models = modelProps;
        _this.hasChildDirective = true;
        _this.hasInjectedModules = true;
        _this.tagMapper = { "e-columns": "e-column", "e-add-dialog-fields": "e-add-dialog-field", "e-edit-dialog-fields": "e-edit-dialog-field", "e-day-working-time-collection": "e-day-working-time", "e-holidays": "e-holidays", "e-event-markers": "e-event-marker" };
        _this.tagNameMapper = { "e-add-dialog-fields": "e-addDialogFields", "e-edit-dialog-fields": "e-editDialogFields", "e-day-working-time-collection": "e-dayWorkingTime", "e-event-markers": "e-eventMarkers" };
        _this.ej2Instances = new Gantt({});
        _this.ej2Instances._trigger = _this.ej2Instances.trigger;
        _this.ej2Instances.trigger = _this.trigger;
        _this.bindProperties();
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        return _this;
    }
    GanttComponent.prototype.setProperties = function (prop, muteOnChange) {
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
    GanttComponent.prototype.trigger = function (eventName, eventProp, successHandler) {
        if ((eventName === 'change' || eventName === 'input') && this.models && (this.models.length !== 0)) {
            var key = this.models.toString().match(/checked|value/) || [];
            var propKey = key[0];
            if (eventProp && key && !isUndefined(eventProp[propKey])) {
                this.$emit('update:' + propKey, eventProp[propKey]);
                this.$emit('modelchanged', eventProp[propKey]);
            }
        }
        else if ((eventName === 'actionBegin' && eventProp.requestType === 'dateNavigate') && this.models && (this.models.length !== 0)) {
            var key = this.models.toString().match(/currentView|selectedDate/) || [];
            var propKey = key[0];
            if (eventProp && key && !isUndefined(eventProp[propKey])) {
                this.$emit('update:' + propKey, eventProp[propKey]);
                this.$emit('modelchanged', eventProp[propKey]);
            }
        }
        if (this.ej2Instances && this.ej2Instances._trigger) {
            this.ej2Instances._trigger(eventName, eventProp, successHandler);
        }
    };
    GanttComponent.prototype.render = function (createElement) {
        return createElement('div', this.$slots.default);
    };
    GanttComponent.prototype.addPredecessor = function (id, predecessorString) {
        return this.ej2Instances.addPredecessor(id, predecessorString);
    };
    GanttComponent.prototype.addRecord = function (data, rowPosition, rowIndex) {
        return this.ej2Instances.addRecord(data, rowPosition, rowIndex);
    };
    GanttComponent.prototype.cancelEdit = function () {
        return this.ej2Instances.cancelEdit();
    };
    GanttComponent.prototype.changeTaskMode = function (data) {
        return this.ej2Instances.changeTaskMode(data);
    };
    GanttComponent.prototype.clearFiltering = function (fields) {
        return this.ej2Instances.clearFiltering(fields);
    };
    GanttComponent.prototype.clearSelection = function () {
        return this.ej2Instances.clearSelection();
    };
    GanttComponent.prototype.clearSorting = function () {
        return this.ej2Instances.clearSorting();
    };
    GanttComponent.prototype.collapseAll = function () {
        return this.ej2Instances.collapseAll();
    };
    GanttComponent.prototype.collapseByID = function (id) {
        return this.ej2Instances.collapseByID(id);
    };
    GanttComponent.prototype.collapseByIndex = function (index) {
        return this.ej2Instances.collapseByIndex(index);
    };
    GanttComponent.prototype.convertToMilestone = function (id) {
        return this.ej2Instances.convertToMilestone(id);
    };
    GanttComponent.prototype.csvExport = function (excelExportProperties, isMultipleExport, workbook, isBlob) {
        return this.ej2Instances.csvExport(excelExportProperties, isMultipleExport, workbook, isBlob);
    };
    GanttComponent.prototype.deleteRecord = function (taskDetail) {
        return this.ej2Instances.deleteRecord(taskDetail);
    };
    GanttComponent.prototype.enableItems = function (items, isEnable) {
        return this.ej2Instances.enableItems(items, isEnable);
    };
    GanttComponent.prototype.excelExport = function (excelExportProperties, isMultipleExport, workbook, isBlob) {
        return this.ej2Instances.excelExport(excelExportProperties, isMultipleExport, workbook, isBlob);
    };
    GanttComponent.prototype.expandAll = function () {
        return this.ej2Instances.expandAll();
    };
    GanttComponent.prototype.expandByID = function (id) {
        return this.ej2Instances.expandByID(id);
    };
    GanttComponent.prototype.expandByIndex = function (index) {
        return this.ej2Instances.expandByIndex(index);
    };
    GanttComponent.prototype.filterByColumn = function (fieldName, filterOperator, filterValue, predicate, matchCase, ignoreAccent) {
        return this.ej2Instances.filterByColumn(fieldName, filterOperator, filterValue, predicate, matchCase, ignoreAccent);
    };
    GanttComponent.prototype.fitToProject = function () {
        return this.ej2Instances.fitToProject();
    };
    GanttComponent.prototype.getDateFormat = function () {
        return this.ej2Instances.getDateFormat();
    };
    GanttComponent.prototype.getDurationString = function (duration, durationUnit) {
        return this.ej2Instances.getDurationString(duration, durationUnit);
    };
    GanttComponent.prototype.getExpandedRecords = function (records) {
        return this.ej2Instances.getExpandedRecords(records);
    };
    GanttComponent.prototype.getFormatedDate = function (date, format) {
        return this.ej2Instances.getFormatedDate(date, format);
    };
    GanttComponent.prototype.getGanttColumns = function () {
        return this.ej2Instances.getGanttColumns();
    };
    GanttComponent.prototype.getGridColumns = function () {
        return this.ej2Instances.getGridColumns();
    };
    GanttComponent.prototype.getRecordByID = function (id) {
        return this.ej2Instances.getRecordByID(id);
    };
    GanttComponent.prototype.getRowByID = function (id) {
        return this.ej2Instances.getRowByID(id);
    };
    GanttComponent.prototype.getRowByIndex = function (index) {
        return this.ej2Instances.getRowByIndex(index);
    };
    GanttComponent.prototype.getTaskByUniqueID = function (id) {
        return this.ej2Instances.getTaskByUniqueID(id);
    };
    GanttComponent.prototype.getTaskbarHeight = function () {
        return this.ej2Instances.getTaskbarHeight();
    };
    GanttComponent.prototype.getWorkString = function (work, workUnit) {
        return this.ej2Instances.getWorkString(work, workUnit);
    };
    GanttComponent.prototype.hideColumn = function (keys, hideBy) {
        return this.ej2Instances.hideColumn(keys, hideBy);
    };
    GanttComponent.prototype.hideSpinner = function () {
        return this.ej2Instances.hideSpinner();
    };
    GanttComponent.prototype.indent = function () {
        return this.ej2Instances.indent();
    };
    GanttComponent.prototype.keyActionHandler = function (e) {
        return this.ej2Instances.keyActionHandler(e);
    };
    GanttComponent.prototype.mergeTask = function (taskId, segmentIndexes) {
        return this.ej2Instances.mergeTask(taskId, segmentIndexes);
    };
    GanttComponent.prototype.nextTimeSpan = function (mode) {
        return this.ej2Instances.nextTimeSpan(mode);
    };
    GanttComponent.prototype.openAddDialog = function () {
        return this.ej2Instances.openAddDialog();
    };
    GanttComponent.prototype.openEditDialog = function (taskId) {
        return this.ej2Instances.openEditDialog(taskId);
    };
    GanttComponent.prototype.outdent = function () {
        return this.ej2Instances.outdent();
    };
    GanttComponent.prototype.pdfExport = function (pdfExportProperties, isMultipleExport, pdfDoc) {
        return this.ej2Instances.pdfExport(pdfExportProperties, isMultipleExport, pdfDoc);
    };
    GanttComponent.prototype.previousTimeSpan = function (mode) {
        return this.ej2Instances.previousTimeSpan(mode);
    };
    GanttComponent.prototype.removePredecessor = function (id) {
        return this.ej2Instances.removePredecessor(id);
    };
    GanttComponent.prototype.removeSortColumn = function (columnName) {
        return this.ej2Instances.removeSortColumn(columnName);
    };
    GanttComponent.prototype.renderTemplates = function () {
        return this.ej2Instances.renderTemplates();
    };
    GanttComponent.prototype.reorderColumns = function (fromFName, toFName) {
        return this.ej2Instances.reorderColumns(fromFName, toFName);
    };
    GanttComponent.prototype.reorderRows = function (fromIndexes, toIndex, position) {
        return this.ej2Instances.reorderRows(fromIndexes, toIndex, position);
    };
    GanttComponent.prototype.resetTemplates = function () {
        return this.ej2Instances.resetTemplates();
    };
    GanttComponent.prototype.scrollToDate = function (date) {
        return this.ej2Instances.scrollToDate(date);
    };
    GanttComponent.prototype.scrollToTask = function (taskId) {
        return this.ej2Instances.scrollToTask(taskId);
    };
    GanttComponent.prototype.search = function (keyVal) {
        return this.ej2Instances.search(keyVal);
    };
    GanttComponent.prototype.selectCell = function (cellIndex, isToggle) {
        return this.ej2Instances.selectCell(cellIndex, isToggle);
    };
    GanttComponent.prototype.selectCells = function (rowCellIndexes) {
        return this.ej2Instances.selectCells(rowCellIndexes);
    };
    GanttComponent.prototype.selectRow = function (index, isToggle) {
        return this.ej2Instances.selectRow(index, isToggle);
    };
    GanttComponent.prototype.selectRows = function (records) {
        return this.ej2Instances.selectRows(records);
    };
    GanttComponent.prototype.setScrollTop = function (scrollTop) {
        return this.ej2Instances.setScrollTop(scrollTop);
    };
    GanttComponent.prototype.setSplitterPosition = function (value, type) {
        return this.ej2Instances.setSplitterPosition(value, type);
    };
    GanttComponent.prototype.showColumn = function (keys, showBy) {
        return this.ej2Instances.showColumn(keys, showBy);
    };
    GanttComponent.prototype.showSpinner = function () {
        return this.ej2Instances.showSpinner();
    };
    GanttComponent.prototype.sortColumn = function (columnName, direction, isMultiSort) {
        return this.ej2Instances.sortColumn(columnName, direction, isMultiSort);
    };
    GanttComponent.prototype.splitTask = function (taskId, splitDate) {
        return this.ej2Instances.splitTask(taskId, splitDate);
    };
    GanttComponent.prototype.updateChartScrollOffset = function (left, top) {
        return this.ej2Instances.updateChartScrollOffset(left, top);
    };
    GanttComponent.prototype.updateDataSource = function (dataSource, args) {
        return this.ej2Instances.updateDataSource(dataSource, args);
    };
    GanttComponent.prototype.updatePredecessor = function (id, predecessorString) {
        return this.ej2Instances.updatePredecessor(id, predecessorString);
    };
    GanttComponent.prototype.updateProjectDates = function (startDate, endDate, isTimelineRoundOff, isFrom) {
        return this.ej2Instances.updateProjectDates(startDate, endDate, isTimelineRoundOff, isFrom);
    };
    GanttComponent.prototype.updateRecordByID = function (data) {
        return this.ej2Instances.updateRecordByID(data);
    };
    GanttComponent.prototype.updateRecordByIndex = function (index, data) {
        return this.ej2Instances.updateRecordByIndex(index, data);
    };
    GanttComponent.prototype.updateTaskId = function (currentId, newId) {
        return this.ej2Instances.updateTaskId(currentId, newId);
    };
    GanttComponent.prototype.zoomIn = function () {
        return this.ej2Instances.zoomIn();
    };
    GanttComponent.prototype.zoomOut = function () {
        return this.ej2Instances.zoomOut();
    };
    GanttComponent = __decorate$6([
        EJComponentDecorator({
            props: properties,
            model: {
                event: 'modelchanged'
            }
        })
    ], GanttComponent);
    return GanttComponent;
}(ComponentBase));
var GanttPlugin = {
    name: 'ejs-gantt',
    install: function (Vue$$1) {
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
//# sourceMappingURL=ej2-vue-gantt.es5.js.map
