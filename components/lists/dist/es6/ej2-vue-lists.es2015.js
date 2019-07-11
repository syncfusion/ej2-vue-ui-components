import { ListView } from '@syncfusion/ej2-lists';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const properties = ['animation', 'checkBoxPosition', 'cssClass', 'dataSource', 'enable', 'enablePersistence', 'enableRtl', 'enableVirtualization', 'fields', 'groupTemplate', 'headerTemplate', 'headerTitle', 'height', 'htmlAttributes', 'locale', 'query', 'showCheckBox', 'showHeader', 'showIcon', 'sortOrder', 'template', 'width', 'actionBegin', 'actionComplete', 'actionFailure', 'select'];
const modelProps = [];
/**
 * Represents VueJS ListView Component
 * ```
 * <ejs-listview :dataSource='data'></ejs-listview>
 * ```
 */
let ListViewComponent = class ListViewComponent extends ComponentBase {
    constructor() {
        super();
        this.propKeys = properties;
        this.models = modelProps;
        this.hasChildDirective = false;
        this.hasInjectedModules = true;
        this.tagMapper = {};
        this.tagNameMapper = {};
        this.ej2Instances = new ListView({});
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
    render(createElement) {
        return createElement('div', this.$slots.default);
    }
    addItem(data, fields) {
        return this.ej2Instances.addItem(data, fields);
    }
    back() {
        return this.ej2Instances.back();
    }
    checkAllItems() {
        return this.ej2Instances.checkAllItems();
    }
    checkItem(item) {
        return this.ej2Instances.checkItem(item);
    }
    disableItem(obj) {
        return this.ej2Instances.disableItem(obj);
    }
    enableItem(obj) {
        return this.ej2Instances.enableItem(obj);
    }
    findItem(obj) {
        return this.ej2Instances.findItem(obj);
    }
    getSelectedItems() {
        return this.ej2Instances.getSelectedItems();
    }
    hideItem(obj) {
        return this.ej2Instances.hideItem(obj);
    }
    refreshItemHeight() {
        return this.ej2Instances.refreshItemHeight();
    }
    removeItem(obj) {
        return this.ej2Instances.removeItem(obj);
    }
    removeMultipleItems(obj) {
        return this.ej2Instances.removeMultipleItems(obj);
    }
    requiredModules() {
        return this.ej2Instances.requiredModules();
    }
    selectItem(obj) {
        return this.ej2Instances.selectItem(obj);
    }
    selectMultipleItems(obj) {
        return this.ej2Instances.selectMultipleItems(obj);
    }
    showItem(obj) {
        return this.ej2Instances.showItem(obj);
    }
    uncheckAllItems() {
        return this.ej2Instances.uncheckAllItems();
    }
    uncheckItem(item) {
        return this.ej2Instances.uncheckItem(item);
    }
};
ListViewComponent = __decorate([
    EJComponentDecorator({
        props: properties
    })
], ListViewComponent);
const ListViewPlugin = {
    name: 'ejs-listview',
    install(Vue) {
        Vue.component(ListViewPlugin.name, ListViewComponent);
    }
};

export { ListViewComponent, ListViewPlugin };
export * from '@syncfusion/ej2-lists';
//# sourceMappingURL=ej2-vue-lists.es2015.js.map
