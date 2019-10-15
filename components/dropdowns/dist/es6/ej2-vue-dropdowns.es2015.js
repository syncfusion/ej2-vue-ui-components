import { AutoComplete, ComboBox, DropDownList, ListBox, MultiSelect } from '@syncfusion/ej2-dropdowns';
import { isUndefined } from '@syncfusion/ej2-base';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const properties = ['actionFailureTemplate', 'allowFiltering', 'cssClass', 'dataSource', 'enablePersistence', 'enableRtl', 'enabled', 'fields', 'filterBarPlaceholder', 'filterType', 'floatLabelType', 'footerTemplate', 'groupTemplate', 'headerTemplate', 'htmlAttributes', 'ignoreAccent', 'ignoreCase', 'index', 'itemTemplate', 'locale', 'noRecordsTemplate', 'placeholder', 'popupHeight', 'popupWidth', 'query', 'readonly', 'showClearButton', 'sortOrder', 'text', 'value', 'valueTemplate', 'width', 'zIndex', 'actionBegin', 'actionComplete', 'actionFailure', 'beforeOpen', 'blur', 'change', 'close', 'created', 'dataBound', 'destroyed', 'filtering', 'focus', 'open', 'select'];
const modelProps = ['value'];
/**
 * DropDownList contains a list of predefined values from which the user can choose
 * ```html
 * <ejs-dropdownlist :dataSource='data'></ejs-dropdownlist>
 * ```
 */
let DropDownListComponent = class DropDownListComponent extends ComponentBase {
    constructor() {
        super();
        this.propKeys = properties;
        this.models = modelProps;
        this.hasChildDirective = false;
        this.hasInjectedModules = false;
        this.tagMapper = {};
        this.tagNameMapper = {};
        this.ej2Instances = new DropDownList({});
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
    addItem(items, itemIndex) {
        return this.ej2Instances.addItem(items, itemIndex);
    }
    filter(dataSource, query, fields) {
        return this.ej2Instances.filter(dataSource, query, fields);
    }
    focusIn(e) {
        return this.ej2Instances.focusIn(e);
    }
    focusOut() {
        return this.ej2Instances.focusOut();
    }
    getDataByValue(value) {
        return this.ej2Instances.getDataByValue(value);
    }
    getItems() {
        return this.ej2Instances.getItems();
    }
    hidePopup() {
        return this.ej2Instances.hidePopup();
    }
    hideSpinner() {
        return this.ej2Instances.hideSpinner();
    }
    showPopup() {
        return this.ej2Instances.showPopup();
    }
    showSpinner() {
        return this.ej2Instances.showSpinner();
    }
};
DropDownListComponent = __decorate([
    EJComponentDecorator({
        props: properties,
        model: {
            event: 'modelchanged'
        }
    })
], DropDownListComponent);
const DropDownListPlugin = {
    name: 'ejs-dropdownlist',
    install(Vue) {
        Vue.component(DropDownListPlugin.name, DropDownListComponent);
    }
};

var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const properties$1 = ['actionFailureTemplate', 'allowCustom', 'allowFiltering', 'autofill', 'cssClass', 'dataSource', 'enablePersistence', 'enableRtl', 'enabled', 'fields', 'filterBarPlaceholder', 'filterType', 'floatLabelType', 'footerTemplate', 'groupTemplate', 'headerTemplate', 'htmlAttributes', 'ignoreAccent', 'ignoreCase', 'index', 'itemTemplate', 'locale', 'noRecordsTemplate', 'placeholder', 'popupHeight', 'popupWidth', 'query', 'readonly', 'showClearButton', 'sortOrder', 'text', 'value', 'valueTemplate', 'width', 'zIndex', 'actionBegin', 'actionComplete', 'actionFailure', 'beforeOpen', 'blur', 'change', 'close', 'created', 'customValueSpecifier', 'dataBound', 'destroyed', 'filtering', 'focus', 'open', 'select'];
const modelProps$1 = ['value'];
/**
 * ComboBox component allows the user to type a value or choose an option from the list of predefined options available
 * ```html
 * <ejs-combobox :dataSource='data'></ejs-combobox>
 * ```
 */
let ComboBoxComponent = class ComboBoxComponent extends ComponentBase {
    constructor() {
        super();
        this.propKeys = properties$1;
        this.models = modelProps$1;
        this.hasChildDirective = false;
        this.hasInjectedModules = false;
        this.tagMapper = {};
        this.tagNameMapper = {};
        this.ej2Instances = new ComboBox({});
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
    addItem(items, itemIndex) {
        return this.ej2Instances.addItem(items, itemIndex);
    }
    filter(dataSource, query, fields) {
        return this.ej2Instances.filter(dataSource, query, fields);
    }
    focusIn() {
        return this.ej2Instances.focusIn();
    }
    focusOut() {
        return this.ej2Instances.focusOut();
    }
    getDataByValue(value) {
        return this.ej2Instances.getDataByValue(value);
    }
    getItems() {
        return this.ej2Instances.getItems();
    }
    hidePopup() {
        return this.ej2Instances.hidePopup();
    }
    hideSpinner() {
        return this.ej2Instances.hideSpinner();
    }
    showPopup() {
        return this.ej2Instances.showPopup();
    }
    showSpinner() {
        return this.ej2Instances.showSpinner();
    }
};
ComboBoxComponent = __decorate$1([
    EJComponentDecorator({
        props: properties$1,
        model: {
            event: 'modelchanged'
        }
    })
], ComboBoxComponent);
const ComboBoxPlugin = {
    name: 'ejs-combobox',
    install(Vue) {
        Vue.component(ComboBoxPlugin.name, ComboBoxComponent);
    }
};

var __decorate$2 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const properties$2 = ['actionFailureTemplate', 'allowCustom', 'allowFiltering', 'autofill', 'cssClass', 'dataSource', 'enablePersistence', 'enableRtl', 'enabled', 'fields', 'filterBarPlaceholder', 'filterType', 'floatLabelType', 'footerTemplate', 'groupTemplate', 'headerTemplate', 'highlight', 'htmlAttributes', 'ignoreAccent', 'ignoreCase', 'index', 'itemTemplate', 'locale', 'minLength', 'noRecordsTemplate', 'placeholder', 'popupHeight', 'popupWidth', 'query', 'readonly', 'showClearButton', 'showPopupButton', 'sortOrder', 'suggestionCount', 'text', 'value', 'valueTemplate', 'width', 'zIndex', 'actionBegin', 'actionComplete', 'actionFailure', 'beforeOpen', 'blur', 'change', 'close', 'created', 'customValueSpecifier', 'dataBound', 'destroyed', 'filtering', 'focus', 'open', 'select'];
const modelProps$2 = ['value'];
/**
 * The AutoComplete component provides all the matched suggestion list on typing the input from which the user can select one.
 * ```html
 * <ejs-autocomplete :dataSource='data'></ejs-autocomplete>
 * ```
 */
let AutoCompleteComponent = class AutoCompleteComponent extends ComponentBase {
    constructor() {
        super();
        this.propKeys = properties$2;
        this.models = modelProps$2;
        this.hasChildDirective = false;
        this.hasInjectedModules = false;
        this.tagMapper = {};
        this.tagNameMapper = {};
        this.ej2Instances = new AutoComplete({});
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
    addItem(items, itemIndex) {
        return this.ej2Instances.addItem(items, itemIndex);
    }
    filter(dataSource, query, fields) {
        return this.ej2Instances.filter(dataSource, query, fields);
    }
    focusIn() {
        return this.ej2Instances.focusIn();
    }
    focusOut() {
        return this.ej2Instances.focusOut();
    }
    getDataByValue(value) {
        return this.ej2Instances.getDataByValue(value);
    }
    getItems() {
        return this.ej2Instances.getItems();
    }
    hidePopup() {
        return this.ej2Instances.hidePopup();
    }
    hideSpinner() {
        return this.ej2Instances.hideSpinner();
    }
    showPopup() {
        return this.ej2Instances.showPopup();
    }
    showSpinner() {
        return this.ej2Instances.showSpinner();
    }
};
AutoCompleteComponent = __decorate$2([
    EJComponentDecorator({
        props: properties$2,
        model: {
            event: 'modelchanged'
        }
    })
], AutoCompleteComponent);
const AutoCompletePlugin = {
    name: 'ejs-autocomplete',
    install(Vue) {
        Vue.component(AutoCompletePlugin.name, AutoCompleteComponent);
    }
};

var __decorate$3 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const properties$3 = ['actionFailureTemplate', 'allowCustomValue', 'allowFiltering', 'changeOnBlur', 'closePopupOnSelect', 'cssClass', 'dataSource', 'delimiterChar', 'enableGroupCheckBox', 'enablePersistence', 'enableRtl', 'enableSelectionOrder', 'enabled', 'fields', 'filterBarPlaceholder', 'filterType', 'floatLabelType', 'footerTemplate', 'groupTemplate', 'headerTemplate', 'hideSelectedItem', 'htmlAttributes', 'ignoreAccent', 'ignoreCase', 'itemTemplate', 'locale', 'maximumSelectionLength', 'mode', 'noRecordsTemplate', 'openOnClick', 'placeholder', 'popupHeight', 'popupWidth', 'query', 'readonly', 'selectAllText', 'showClearButton', 'showDropDownIcon', 'showSelectAll', 'sortOrder', 'text', 'unSelectAllText', 'value', 'valueTemplate', 'width', 'zIndex', 'actionBegin', 'actionComplete', 'actionFailure', 'beforeOpen', 'blur', 'change', 'chipSelection', 'close', 'created', 'customValueSelection', 'dataBound', 'destroyed', 'filtering', 'focus', 'open', 'removed', 'removing', 'select', 'selectedAll', 'tagging'];
const modelProps$3 = ['value'];
/**
 * MultiSelect component allows the user to select a value from the predefined list of values.
 * ```html
 * <ejs-multiselect :dataSource='data'></ejs-multiselect>
 * ```
 */
let MultiSelectComponent = class MultiSelectComponent extends ComponentBase {
    constructor() {
        super();
        this.propKeys = properties$3;
        this.models = modelProps$3;
        this.hasChildDirective = false;
        this.hasInjectedModules = true;
        this.tagMapper = {};
        this.tagNameMapper = {};
        this.ej2Instances = new MultiSelect({});
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
    addItem(items, itemIndex) {
        return this.ej2Instances.addItem(items, itemIndex);
    }
    filter(dataSource, query, fields) {
        return this.ej2Instances.filter(dataSource, query, fields);
    }
    focusIn() {
        return this.ej2Instances.focusIn();
    }
    focusOut() {
        return this.ej2Instances.focusOut();
    }
    getDataByValue(value) {
        return this.ej2Instances.getDataByValue(value);
    }
    getItems() {
        return this.ej2Instances.getItems();
    }
    hidePopup() {
        return this.ej2Instances.hidePopup();
    }
    hideSpinner() {
        return this.ej2Instances.hideSpinner();
    }
    requiredModules() {
        return this.ej2Instances.requiredModules();
    }
    selectAll(state) {
        return this.ej2Instances.selectAll(state);
    }
    showPopup() {
        return this.ej2Instances.showPopup();
    }
    showSpinner() {
        return this.ej2Instances.showSpinner();
    }
};
MultiSelectComponent = __decorate$3([
    EJComponentDecorator({
        props: properties$3,
        model: {
            event: 'modelchanged'
        }
    })
], MultiSelectComponent);
const MultiSelectPlugin = {
    name: 'ejs-multiselect',
    install(Vue) {
        Vue.component(MultiSelectPlugin.name, MultiSelectComponent);
    }
};

var __decorate$4 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const properties$4 = ['actionFailureTemplate', 'allowDragAndDrop', 'allowFiltering', 'cssClass', 'dataSource', 'enablePersistence', 'enableRtl', 'enabled', 'fields', 'filterType', 'groupTemplate', 'height', 'ignoreAccent', 'ignoreCase', 'itemTemplate', 'locale', 'maximumSelectionLength', 'noRecordsTemplate', 'query', 'scope', 'selectionSettings', 'sortOrder', 'toolbarSettings', 'value', 'zIndex', 'actionBegin', 'actionComplete', 'actionFailure', 'beforeItemRender', 'change', 'created', 'dataBound', 'destroyed', 'drag', 'dragStart', 'drop', 'filtering', 'select'];
const modelProps$4 = ['value'];
/**
 * ListBox component allows the user to select values from the predefined list of values.
 * ```html
 * <ejs-listbox :dataSource='data'></ejs-listbox>
 * ```
 */
let ListBoxComponent = class ListBoxComponent extends ComponentBase {
    constructor() {
        super();
        this.propKeys = properties$4;
        this.models = modelProps$4;
        this.hasChildDirective = false;
        this.hasInjectedModules = true;
        this.tagMapper = {};
        this.tagNameMapper = {};
        this.ej2Instances = new ListBox({});
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
    addItems(items, itemIndex) {
        return this.ej2Instances.addItems(items, itemIndex);
    }
    enableItems(items, enable) {
        return this.ej2Instances.enableItems(items, enable);
    }
    filter(dataSource, query, fields) {
        return this.ej2Instances.filter(dataSource, query, fields);
    }
    getDataByValue(value) {
        return this.ej2Instances.getDataByValue(value);
    }
    getItems() {
        return this.ej2Instances.getItems();
    }
    removeItem(items, itemIndex) {
        return this.ej2Instances.removeItem(items, itemIndex);
    }
    removeItems(items, itemIndex) {
        return this.ej2Instances.removeItems(items, itemIndex);
    }
    requiredModules() {
        return this.ej2Instances.requiredModules();
    }
    selectAll(state) {
        return this.ej2Instances.selectAll(state);
    }
    selectItems(items, state) {
        return this.ej2Instances.selectItems(items, state);
    }
};
ListBoxComponent = __decorate$4([
    EJComponentDecorator({
        props: properties$4,
        model: {
            event: 'modelchanged'
        }
    })
], ListBoxComponent);
const ListBoxPlugin = {
    name: 'ejs-listbox',
    install(Vue) {
        Vue.component(ListBoxPlugin.name, ListBoxComponent);
    }
};

export { DropDownListComponent, DropDownListPlugin, ComboBoxComponent, ComboBoxPlugin, AutoCompleteComponent, AutoCompletePlugin, MultiSelectComponent, MultiSelectPlugin, ListBoxComponent, ListBoxPlugin };
export * from '@syncfusion/ej2-dropdowns';
//# sourceMappingURL=ej2-vue-dropdowns.es2015.js.map
