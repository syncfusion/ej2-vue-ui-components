import { Calendar, DatePicker, DateRangePicker, DateTimePicker, TimePicker } from '@syncfusion/ej2-calendars';
import { isUndefined } from '@syncfusion/ej2-base';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';
import Vue from 'vue';

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const properties = ['calendarMode', 'dayHeaderFormat', 'depth', 'enablePersistence', 'enableRtl', 'firstDayOfWeek', 'isMultiSelection', 'keyConfigs', 'locale', 'max', 'min', 'serverTimezoneOffset', 'showTodayButton', 'start', 'value', 'values', 'weekNumber', 'change', 'created', 'destroyed', 'navigated', 'renderDayCell'];
const modelProps = ['value', 'values'];
/**
 * Represents the Essential JS 2  VueJS Calendar Component.
 * ```html
 * <ejs-calendar v-bind:value='date'></ejs-calendar>
 * ```
 */
let CalendarComponent = class CalendarComponent extends ComponentBase {
    constructor() {
        super();
        this.propKeys = properties;
        this.models = modelProps;
        this.hasChildDirective = false;
        this.hasInjectedModules = true;
        this.tagMapper = {};
        this.tagNameMapper = {};
        this.ej2Instances = new Calendar({});
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
    addDate(dates) {
        return this.ej2Instances.addDate(dates);
    }
    createContent() {
        return this.ej2Instances.createContent();
    }
    currentView() {
        return this.ej2Instances.currentView();
    }
    navigateTo(view, date) {
        return this.ej2Instances.navigateTo(view, date);
    }
    removeDate(dates) {
        return this.ej2Instances.removeDate(dates);
    }
    requiredModules() {
        return this.ej2Instances.requiredModules();
    }
};
CalendarComponent = __decorate([
    EJComponentDecorator({
        props: properties,
        model: {
            event: 'modelchanged'
        }
    })
], CalendarComponent);
const CalendarPlugin = {
    name: 'ejs-calendar',
    install(Vue$$1) {
        Vue$$1.component(CalendarPlugin.name, CalendarComponent);
    }
};

var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const properties$1 = ['allowEdit', 'calendarMode', 'cssClass', 'dayHeaderFormat', 'depth', 'enablePersistence', 'enableRtl', 'enabled', 'firstDayOfWeek', 'floatLabelType', 'format', 'htmlAttributes', 'isMultiSelection', 'keyConfigs', 'locale', 'max', 'min', 'placeholder', 'readonly', 'serverTimezoneOffset', 'showClearButton', 'showTodayButton', 'start', 'strictMode', 'value', 'values', 'weekNumber', 'width', 'zIndex', 'blur', 'change', 'cleared', 'close', 'created', 'destroyed', 'focus', 'navigated', 'open', 'renderDayCell'];
const modelProps$1 = ['value'];
/**
 * Represents the Essential JS 2 VueJS DatePicker Component.
 * ```html
 * <ejs-datepicker v-bind:value='date'></ejs-datepicker>
 * ```
 */
let DatePickerComponent = class DatePickerComponent extends ComponentBase {
    constructor() {
        super();
        this.propKeys = properties$1;
        this.models = modelProps$1;
        this.hasChildDirective = false;
        this.hasInjectedModules = true;
        this.tagMapper = {};
        this.tagNameMapper = {};
        this.ej2Instances = new DatePicker({});
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
        return createElement('input', this.$slots.default);
    }
    addDate(dates) {
        return this.ej2Instances.addDate(dates);
    }
    createContent() {
        return this.ej2Instances.createContent();
    }
    currentView() {
        return this.ej2Instances.currentView();
    }
    focusIn(triggerEvent) {
        return this.ej2Instances.focusIn(triggerEvent);
    }
    focusOut() {
        return this.ej2Instances.focusOut();
    }
    hide(event) {
        return this.ej2Instances.hide(event);
    }
    navigateTo(view, date) {
        return this.ej2Instances.navigateTo(view, date);
    }
    removeDate(dates) {
        return this.ej2Instances.removeDate(dates);
    }
    requiredModules() {
        return this.ej2Instances.requiredModules();
    }
    show(type, e) {
        return this.ej2Instances.show(type, e);
    }
};
DatePickerComponent = __decorate$1([
    EJComponentDecorator({
        props: properties$1,
        model: {
            event: 'modelchanged'
        }
    })
], DatePickerComponent);
const DatePickerPlugin = {
    name: 'ejs-datepicker',
    install(Vue$$1) {
        Vue$$1.component(DatePickerPlugin.name, DatePickerComponent);
    }
};

var __decorate$2 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const properties$2 = ['allowEdit', 'cssClass', 'enablePersistence', 'enableRtl', 'enabled', 'floatLabelType', 'format', 'htmlAttributes', 'keyConfigs', 'locale', 'max', 'min', 'placeholder', 'readonly', 'scrollTo', 'showClearButton', 'step', 'strictMode', 'value', 'width', 'zIndex', 'blur', 'change', 'cleared', 'close', 'created', 'destroyed', 'focus', 'itemRender', 'open'];
const modelProps$2 = ['value'];
/**
 * Represents the Essential JS 2 VueJS TimePicker Component.
 * ```html
 * <ejs-timepicker v-bind:value='value'></ejs-timepicker>
 * ```
 */
let TimePickerComponent = class TimePickerComponent extends ComponentBase {
    constructor() {
        super();
        this.propKeys = properties$2;
        this.models = modelProps$2;
        this.hasChildDirective = false;
        this.hasInjectedModules = false;
        this.tagMapper = {};
        this.tagNameMapper = {};
        this.ej2Instances = new TimePicker({});
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
        return createElement('input', this.$slots.default);
    }
    focusIn() {
        return this.ej2Instances.focusIn();
    }
    focusOut() {
        return this.ej2Instances.focusOut();
    }
    hide() {
        return this.ej2Instances.hide();
    }
    show(event) {
        return this.ej2Instances.show(event);
    }
};
TimePickerComponent = __decorate$2([
    EJComponentDecorator({
        props: properties$2,
        model: {
            event: 'modelchanged'
        }
    })
], TimePickerComponent);
const TimePickerPlugin = {
    name: 'ejs-timepicker',
    install(Vue$$1) {
        Vue$$1.component(TimePickerPlugin.name, TimePickerComponent);
    }
};

var __decorate$3 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let PresetsDirective = class PresetsDirective extends Vue {
    render() {
        return;
    }
};
PresetsDirective = __decorate$3([
    EJComponentDecorator({})
], PresetsDirective);
const PresetsPlugin = {
    name: 'e-presets',
    install(Vue$$1) {
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
let PresetDirective = class PresetDirective extends Vue {
    render() {
        return;
    }
};
PresetDirective = __decorate$3([
    EJComponentDecorator({})
], PresetDirective);
const PresetPlugin = {
    name: 'e-preset',
    install(Vue$$1) {
        Vue$$1.component(PresetPlugin.name, PresetDirective);
    }
};

var __decorate$4 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const properties$3 = ['allowEdit', 'calendarMode', 'cssClass', 'dayHeaderFormat', 'depth', 'enablePersistence', 'enableRtl', 'enabled', 'endDate', 'firstDayOfWeek', 'floatLabelType', 'format', 'htmlAttributes', 'keyConfigs', 'locale', 'max', 'maxDays', 'min', 'minDays', 'placeholder', 'presets', 'readonly', 'separator', 'serverTimezoneOffset', 'showClearButton', 'start', 'startDate', 'strictMode', 'value', 'weekNumber', 'width', 'zIndex', 'blur', 'change', 'cleared', 'close', 'created', 'destroyed', 'focus', 'navigated', 'open', 'renderDayCell', 'select'];
const modelProps$3 = ['startDate', 'endDate', 'value'];
/**
 * Represents the Essential JS 2 VueJS DateRangePicker Component.
 * ```html
 * <ejs-daterangepicker v-bind:startDate='date' v-bind:endDate='date'></ejs-daterangepicker>
 * ```
 */
let DateRangePickerComponent = class DateRangePickerComponent extends ComponentBase {
    constructor() {
        super();
        this.propKeys = properties$3;
        this.models = modelProps$3;
        this.hasChildDirective = true;
        this.hasInjectedModules = false;
        this.tagMapper = { "e-presets": "e-preset" };
        this.tagNameMapper = {};
        this.ej2Instances = new DateRangePicker({});
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
        return createElement('input', this.$slots.default);
    }
    focusIn() {
        return this.ej2Instances.focusIn();
    }
    focusOut() {
        return this.ej2Instances.focusOut();
    }
    getSelectedRange() {
        return this.ej2Instances.getSelectedRange();
    }
    hide(event) {
        return this.ej2Instances.hide(event);
    }
    requiredModules() {
        return this.ej2Instances.requiredModules();
    }
    show(element, event) {
        return this.ej2Instances.show(element, event);
    }
};
DateRangePickerComponent = __decorate$4([
    EJComponentDecorator({
        props: properties$3,
        model: {
            event: 'modelchanged'
        }
    })
], DateRangePickerComponent);
const DateRangePickerPlugin = {
    name: 'ejs-daterangepicker',
    install(Vue$$1) {
        Vue$$1.component(DateRangePickerPlugin.name, DateRangePickerComponent);
        Vue$$1.component(PresetPlugin.name, PresetDirective);
        Vue$$1.component(PresetsPlugin.name, PresetsDirective);
    }
};

var __decorate$5 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const properties$4 = ['allowEdit', 'calendarMode', 'cssClass', 'dayHeaderFormat', 'depth', 'enablePersistence', 'enableRtl', 'enabled', 'firstDayOfWeek', 'floatLabelType', 'format', 'htmlAttributes', 'isMultiSelection', 'keyConfigs', 'locale', 'max', 'min', 'placeholder', 'readonly', 'scrollTo', 'serverTimezoneOffset', 'showClearButton', 'showTodayButton', 'start', 'step', 'strictMode', 'timeFormat', 'value', 'values', 'weekNumber', 'width', 'zIndex', 'blur', 'change', 'cleared', 'close', 'created', 'destroyed', 'focus', 'navigated', 'open', 'renderDayCell'];
const modelProps$4 = ['value'];
/**
 * Represents the Essential JS 2 VueJS DateTimePicker Component.
 * ```html
 * <ejs-datetimepicker v-bind:value='dateTime'></ejs-datetimepicker>
 * ```
 */
let DateTimePickerComponent = class DateTimePickerComponent extends ComponentBase {
    constructor() {
        super();
        this.propKeys = properties$4;
        this.models = modelProps$4;
        this.hasChildDirective = false;
        this.hasInjectedModules = true;
        this.tagMapper = {};
        this.tagNameMapper = {};
        this.ej2Instances = new DateTimePicker({});
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
        return createElement('input', this.$slots.default);
    }
    addDate(dates) {
        return this.ej2Instances.addDate(dates);
    }
    createContent() {
        return this.ej2Instances.createContent();
    }
    currentView() {
        return this.ej2Instances.currentView();
    }
    focusIn() {
        return this.ej2Instances.focusIn();
    }
    focusOut() {
        return this.ej2Instances.focusOut();
    }
    hide(e) {
        return this.ej2Instances.hide(e);
    }
    navigateTo(view, date) {
        return this.ej2Instances.navigateTo(view, date);
    }
    removeDate(dates) {
        return this.ej2Instances.removeDate(dates);
    }
    requiredModules() {
        return this.ej2Instances.requiredModules();
    }
    show(type, e) {
        return this.ej2Instances.show(type, e);
    }
    toggle(e) {
        return this.ej2Instances.toggle(e);
    }
};
DateTimePickerComponent = __decorate$5([
    EJComponentDecorator({
        props: properties$4,
        model: {
            event: 'modelchanged'
        }
    })
], DateTimePickerComponent);
const DateTimePickerPlugin = {
    name: 'ejs-datetimepicker',
    install(Vue$$1) {
        Vue$$1.component(DateTimePickerPlugin.name, DateTimePickerComponent);
    }
};

export { CalendarComponent, CalendarPlugin, DatePickerComponent, DatePickerPlugin, TimePickerComponent, TimePickerPlugin, PresetsDirective, PresetDirective, PresetsPlugin, PresetPlugin, DateRangePickerComponent, DateRangePickerPlugin, DateTimePickerComponent, DateTimePickerPlugin };
export * from '@syncfusion/ej2-calendars';
//# sourceMappingURL=ej2-vue-calendars.es2015.js.map
