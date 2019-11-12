import { Calendar, DatePicker, DateRangePicker, DateTimePicker, TimePicker } from '@syncfusion/ej2-calendars';
import { isUndefined } from '@syncfusion/ej2-base';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';
import Vue from 'vue';

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
var properties = ['calendarMode', 'dayHeaderFormat', 'depth', 'enablePersistence', 'enableRtl', 'firstDayOfWeek', 'isMultiSelection', 'keyConfigs', 'locale', 'max', 'min', 'serverTimezoneOffset', 'showTodayButton', 'start', 'value', 'values', 'weekNumber', 'change', 'created', 'destroyed', 'navigated', 'renderDayCell'];
var modelProps = ['value', 'values'];
/**
 * Represents the Essential JS 2  VueJS Calendar Component.
 * ```html
 * <ejs-calendar v-bind:value='date'></ejs-calendar>
 * ```
 */
var CalendarComponent = /** @__PURE__ @class */ (function (_super) {
    __extends(CalendarComponent, _super);
    function CalendarComponent() {
        var _this = _super.call(this) || this;
        _this.propKeys = properties;
        _this.models = modelProps;
        _this.hasChildDirective = false;
        _this.hasInjectedModules = true;
        _this.tagMapper = {};
        _this.tagNameMapper = {};
        _this.ej2Instances = new Calendar({});
        _this.ej2Instances._trigger = _this.ej2Instances.trigger;
        _this.ej2Instances.trigger = _this.trigger;
        _this.bindProperties();
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        return _this;
    }
    CalendarComponent.prototype.setProperties = function (prop, muteOnChange) {
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
    CalendarComponent.prototype.trigger = function (eventName, eventProp, successHandler) {
        if ((eventName === 'change' || eventName === 'input') && this.models && (this.models.length !== 0)) {
            var key = this.models.toString().match(/checked|value/) || [];
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
    CalendarComponent.prototype.render = function (createElement) {
        return createElement('div', this.$slots.default);
    };
    CalendarComponent.prototype.addDate = function (dates) {
        return this.ej2Instances.addDate(dates);
    };
    CalendarComponent.prototype.createContent = function () {
        return this.ej2Instances.createContent();
    };
    CalendarComponent.prototype.currentView = function () {
        return this.ej2Instances.currentView();
    };
    CalendarComponent.prototype.navigateTo = function (view, date) {
        return this.ej2Instances.navigateTo(view, date);
    };
    CalendarComponent.prototype.removeDate = function (dates) {
        return this.ej2Instances.removeDate(dates);
    };
    CalendarComponent.prototype.requiredModules = function () {
        return this.ej2Instances.requiredModules();
    };
    CalendarComponent = __decorate([
        EJComponentDecorator({
            props: properties,
            model: {
                event: 'modelchanged'
            }
        })
    ], CalendarComponent);
    return CalendarComponent;
}(ComponentBase));
var CalendarPlugin = {
    name: 'ejs-calendar',
    install: function (Vue$$1) {
        Vue$$1.component(CalendarPlugin.name, CalendarComponent);
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
var properties$1 = ['allowEdit', 'calendarMode', 'cssClass', 'dayHeaderFormat', 'depth', 'enablePersistence', 'enableRtl', 'enabled', 'firstDayOfWeek', 'floatLabelType', 'format', 'htmlAttributes', 'isMultiSelection', 'keyConfigs', 'locale', 'max', 'min', 'placeholder', 'readonly', 'serverTimezoneOffset', 'showClearButton', 'showTodayButton', 'start', 'strictMode', 'value', 'values', 'weekNumber', 'width', 'zIndex', 'blur', 'change', 'cleared', 'close', 'created', 'destroyed', 'focus', 'navigated', 'open', 'renderDayCell'];
var modelProps$1 = ['value'];
/**
 * Represents the Essential JS 2 VueJS DatePicker Component.
 * ```html
 * <ejs-datepicker v-bind:value='date'></ejs-datepicker>
 * ```
 */
var DatePickerComponent = /** @__PURE__ @class */ (function (_super) {
    __extends$1(DatePickerComponent, _super);
    function DatePickerComponent() {
        var _this = _super.call(this) || this;
        _this.propKeys = properties$1;
        _this.models = modelProps$1;
        _this.hasChildDirective = false;
        _this.hasInjectedModules = true;
        _this.tagMapper = {};
        _this.tagNameMapper = {};
        _this.ej2Instances = new DatePicker({});
        _this.ej2Instances._trigger = _this.ej2Instances.trigger;
        _this.ej2Instances.trigger = _this.trigger;
        _this.bindProperties();
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        return _this;
    }
    DatePickerComponent.prototype.setProperties = function (prop, muteOnChange) {
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
    DatePickerComponent.prototype.trigger = function (eventName, eventProp, successHandler) {
        if ((eventName === 'change' || eventName === 'input') && this.models && (this.models.length !== 0)) {
            var key = this.models.toString().match(/checked|value/) || [];
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
    DatePickerComponent.prototype.render = function (createElement) {
        return createElement('input', this.$slots.default);
    };
    DatePickerComponent.prototype.addDate = function (dates) {
        return this.ej2Instances.addDate(dates);
    };
    DatePickerComponent.prototype.createContent = function () {
        return this.ej2Instances.createContent();
    };
    DatePickerComponent.prototype.currentView = function () {
        return this.ej2Instances.currentView();
    };
    DatePickerComponent.prototype.focusIn = function (triggerEvent) {
        return this.ej2Instances.focusIn(triggerEvent);
    };
    DatePickerComponent.prototype.focusOut = function () {
        return this.ej2Instances.focusOut();
    };
    DatePickerComponent.prototype.hide = function (event) {
        return this.ej2Instances.hide(event);
    };
    DatePickerComponent.prototype.navigateTo = function (view, date) {
        return this.ej2Instances.navigateTo(view, date);
    };
    DatePickerComponent.prototype.removeDate = function (dates) {
        return this.ej2Instances.removeDate(dates);
    };
    DatePickerComponent.prototype.requiredModules = function () {
        return this.ej2Instances.requiredModules();
    };
    DatePickerComponent.prototype.show = function (type, e) {
        return this.ej2Instances.show(type, e);
    };
    DatePickerComponent = __decorate$1([
        EJComponentDecorator({
            props: properties$1,
            model: {
                event: 'modelchanged'
            }
        })
    ], DatePickerComponent);
    return DatePickerComponent;
}(ComponentBase));
var DatePickerPlugin = {
    name: 'ejs-datepicker',
    install: function (Vue$$1) {
        Vue$$1.component(DatePickerPlugin.name, DatePickerComponent);
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
var properties$2 = ['allowEdit', 'cssClass', 'enablePersistence', 'enableRtl', 'enabled', 'floatLabelType', 'format', 'htmlAttributes', 'keyConfigs', 'locale', 'max', 'min', 'placeholder', 'readonly', 'scrollTo', 'showClearButton', 'step', 'strictMode', 'value', 'width', 'zIndex', 'blur', 'change', 'cleared', 'close', 'created', 'destroyed', 'focus', 'itemRender', 'open'];
var modelProps$2 = ['value'];
/**
 * Represents the Essential JS 2 VueJS TimePicker Component.
 * ```html
 * <ejs-timepicker v-bind:value='value'></ejs-timepicker>
 * ```
 */
var TimePickerComponent = /** @__PURE__ @class */ (function (_super) {
    __extends$2(TimePickerComponent, _super);
    function TimePickerComponent() {
        var _this = _super.call(this) || this;
        _this.propKeys = properties$2;
        _this.models = modelProps$2;
        _this.hasChildDirective = false;
        _this.hasInjectedModules = false;
        _this.tagMapper = {};
        _this.tagNameMapper = {};
        _this.ej2Instances = new TimePicker({});
        _this.ej2Instances._trigger = _this.ej2Instances.trigger;
        _this.ej2Instances.trigger = _this.trigger;
        _this.bindProperties();
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        return _this;
    }
    TimePickerComponent.prototype.setProperties = function (prop, muteOnChange) {
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
    TimePickerComponent.prototype.trigger = function (eventName, eventProp, successHandler) {
        if ((eventName === 'change' || eventName === 'input') && this.models && (this.models.length !== 0)) {
            var key = this.models.toString().match(/checked|value/) || [];
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
    TimePickerComponent.prototype.render = function (createElement) {
        return createElement('input', this.$slots.default);
    };
    TimePickerComponent.prototype.focusIn = function () {
        return this.ej2Instances.focusIn();
    };
    TimePickerComponent.prototype.focusOut = function () {
        return this.ej2Instances.focusOut();
    };
    TimePickerComponent.prototype.hide = function () {
        return this.ej2Instances.hide();
    };
    TimePickerComponent.prototype.show = function (event) {
        return this.ej2Instances.show(event);
    };
    TimePickerComponent = __decorate$2([
        EJComponentDecorator({
            props: properties$2,
            model: {
                event: 'modelchanged'
            }
        })
    ], TimePickerComponent);
    return TimePickerComponent;
}(ComponentBase));
var TimePickerPlugin = {
    name: 'ejs-timepicker',
    install: function (Vue$$1) {
        Vue$$1.component(TimePickerPlugin.name, TimePickerComponent);
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
var PresetsDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$3(PresetsDirective, _super);
    function PresetsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PresetsDirective.prototype.render = function () {
        return;
    };
    PresetsDirective = __decorate$3([
        EJComponentDecorator({})
    ], PresetsDirective);
    return PresetsDirective;
}(Vue));
var PresetsPlugin = {
    name: 'e-presets',
    install: function (Vue$$1) {
        Vue$$1.component(PresetsPlugin.name, PresetsDirective);
    }
};
/**
 * 'e-presets' directive represent a presets of VueJS daterangepicker
 * It must be contained in a daterangepicker component(`ej-daterangepicker`).
 * ```html
 * <ejs-daterangepicker id='range'>
 *   <e-presets>
 *   <e-preset label='Last Week' v-bind:start='startValue' v-bind:end='endValue'></e-preset>
 *   <e-preset label='Last Month' v-bind:start='startValue' v-bind:end='endValue'></e-preset>
 *   </e-presets>
 * </ejs-daterangepicker>
 * ```
 */
var PresetDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$3(PresetDirective, _super);
    function PresetDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PresetDirective.prototype.render = function () {
        return;
    };
    PresetDirective = __decorate$3([
        EJComponentDecorator({})
    ], PresetDirective);
    return PresetDirective;
}(Vue));
var PresetPlugin = {
    name: 'e-preset',
    install: function (Vue$$1) {
        Vue$$1.component(PresetPlugin.name, PresetDirective);
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
var properties$3 = ['allowEdit', 'calendarMode', 'cssClass', 'dayHeaderFormat', 'depth', 'enablePersistence', 'enableRtl', 'enabled', 'endDate', 'firstDayOfWeek', 'floatLabelType', 'format', 'htmlAttributes', 'keyConfigs', 'locale', 'max', 'maxDays', 'min', 'minDays', 'placeholder', 'presets', 'readonly', 'separator', 'serverTimezoneOffset', 'showClearButton', 'start', 'startDate', 'strictMode', 'value', 'weekNumber', 'width', 'zIndex', 'blur', 'change', 'cleared', 'close', 'created', 'destroyed', 'focus', 'navigated', 'open', 'renderDayCell', 'select'];
var modelProps$3 = ['startDate', 'endDate', 'value'];
/**
 * Represents the Essential JS 2 VueJS DateRangePicker Component.
 * ```html
 * <ejs-daterangepicker v-bind:startDate='date' v-bind:endDate='date'></ejs-daterangepicker>
 * ```
 */
var DateRangePickerComponent = /** @__PURE__ @class */ (function (_super) {
    __extends$4(DateRangePickerComponent, _super);
    function DateRangePickerComponent() {
        var _this = _super.call(this) || this;
        _this.propKeys = properties$3;
        _this.models = modelProps$3;
        _this.hasChildDirective = true;
        _this.hasInjectedModules = false;
        _this.tagMapper = { "e-presets": "e-preset" };
        _this.tagNameMapper = {};
        _this.ej2Instances = new DateRangePicker({});
        _this.ej2Instances._trigger = _this.ej2Instances.trigger;
        _this.ej2Instances.trigger = _this.trigger;
        _this.bindProperties();
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        return _this;
    }
    DateRangePickerComponent.prototype.setProperties = function (prop, muteOnChange) {
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
    DateRangePickerComponent.prototype.trigger = function (eventName, eventProp, successHandler) {
        if ((eventName === 'change' || eventName === 'input') && this.models && (this.models.length !== 0)) {
            var key = this.models.toString().match(/checked|value/) || [];
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
    DateRangePickerComponent.prototype.render = function (createElement) {
        return createElement('input', this.$slots.default);
    };
    DateRangePickerComponent.prototype.focusIn = function () {
        return this.ej2Instances.focusIn();
    };
    DateRangePickerComponent.prototype.focusOut = function () {
        return this.ej2Instances.focusOut();
    };
    DateRangePickerComponent.prototype.getSelectedRange = function () {
        return this.ej2Instances.getSelectedRange();
    };
    DateRangePickerComponent.prototype.hide = function (event) {
        return this.ej2Instances.hide(event);
    };
    DateRangePickerComponent.prototype.requiredModules = function () {
        return this.ej2Instances.requiredModules();
    };
    DateRangePickerComponent.prototype.show = function (element, event) {
        return this.ej2Instances.show(element, event);
    };
    DateRangePickerComponent = __decorate$4([
        EJComponentDecorator({
            props: properties$3,
            model: {
                event: 'modelchanged'
            }
        })
    ], DateRangePickerComponent);
    return DateRangePickerComponent;
}(ComponentBase));
var DateRangePickerPlugin = {
    name: 'ejs-daterangepicker',
    install: function (Vue$$1) {
        Vue$$1.component(DateRangePickerPlugin.name, DateRangePickerComponent);
        Vue$$1.component(PresetPlugin.name, PresetDirective);
        Vue$$1.component(PresetsPlugin.name, PresetsDirective);
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
var properties$4 = ['allowEdit', 'calendarMode', 'cssClass', 'dayHeaderFormat', 'depth', 'enablePersistence', 'enableRtl', 'enabled', 'firstDayOfWeek', 'floatLabelType', 'format', 'htmlAttributes', 'isMultiSelection', 'keyConfigs', 'locale', 'max', 'min', 'placeholder', 'readonly', 'scrollTo', 'serverTimezoneOffset', 'showClearButton', 'showTodayButton', 'start', 'step', 'strictMode', 'timeFormat', 'value', 'values', 'weekNumber', 'width', 'zIndex', 'blur', 'change', 'cleared', 'close', 'created', 'destroyed', 'focus', 'navigated', 'open', 'renderDayCell'];
var modelProps$4 = ['value'];
/**
 * Represents the Essential JS 2 VueJS DateTimePicker Component.
 * ```html
 * <ejs-datetimepicker v-bind:value='dateTime'></ejs-datetimepicker>
 * ```
 */
var DateTimePickerComponent = /** @__PURE__ @class */ (function (_super) {
    __extends$5(DateTimePickerComponent, _super);
    function DateTimePickerComponent() {
        var _this = _super.call(this) || this;
        _this.propKeys = properties$4;
        _this.models = modelProps$4;
        _this.hasChildDirective = false;
        _this.hasInjectedModules = true;
        _this.tagMapper = {};
        _this.tagNameMapper = {};
        _this.ej2Instances = new DateTimePicker({});
        _this.ej2Instances._trigger = _this.ej2Instances.trigger;
        _this.ej2Instances.trigger = _this.trigger;
        _this.bindProperties();
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        return _this;
    }
    DateTimePickerComponent.prototype.setProperties = function (prop, muteOnChange) {
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
    DateTimePickerComponent.prototype.trigger = function (eventName, eventProp, successHandler) {
        if ((eventName === 'change' || eventName === 'input') && this.models && (this.models.length !== 0)) {
            var key = this.models.toString().match(/checked|value/) || [];
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
    DateTimePickerComponent.prototype.render = function (createElement) {
        return createElement('input', this.$slots.default);
    };
    DateTimePickerComponent.prototype.addDate = function (dates) {
        return this.ej2Instances.addDate(dates);
    };
    DateTimePickerComponent.prototype.createContent = function () {
        return this.ej2Instances.createContent();
    };
    DateTimePickerComponent.prototype.currentView = function () {
        return this.ej2Instances.currentView();
    };
    DateTimePickerComponent.prototype.focusIn = function () {
        return this.ej2Instances.focusIn();
    };
    DateTimePickerComponent.prototype.focusOut = function () {
        return this.ej2Instances.focusOut();
    };
    DateTimePickerComponent.prototype.hide = function (e) {
        return this.ej2Instances.hide(e);
    };
    DateTimePickerComponent.prototype.navigateTo = function (view, date) {
        return this.ej2Instances.navigateTo(view, date);
    };
    DateTimePickerComponent.prototype.removeDate = function (dates) {
        return this.ej2Instances.removeDate(dates);
    };
    DateTimePickerComponent.prototype.requiredModules = function () {
        return this.ej2Instances.requiredModules();
    };
    DateTimePickerComponent.prototype.show = function (type, e) {
        return this.ej2Instances.show(type, e);
    };
    DateTimePickerComponent.prototype.toggle = function (e) {
        return this.ej2Instances.toggle(e);
    };
    DateTimePickerComponent = __decorate$5([
        EJComponentDecorator({
            props: properties$4,
            model: {
                event: 'modelchanged'
            }
        })
    ], DateTimePickerComponent);
    return DateTimePickerComponent;
}(ComponentBase));
var DateTimePickerPlugin = {
    name: 'ejs-datetimepicker',
    install: function (Vue$$1) {
        Vue$$1.component(DateTimePickerPlugin.name, DateTimePickerComponent);
    }
};

export { CalendarComponent, CalendarPlugin, DatePickerComponent, DatePickerPlugin, TimePickerComponent, TimePickerPlugin, PresetsDirective, PresetDirective, PresetsPlugin, PresetPlugin, DateRangePickerComponent, DateRangePickerPlugin, DateTimePickerComponent, DateTimePickerPlugin };
export * from '@syncfusion/ej2-calendars';
//# sourceMappingURL=ej2-vue-calendars.es5.js.map
