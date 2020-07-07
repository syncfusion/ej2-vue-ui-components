import { Kanban } from '@syncfusion/ej2-kanban';
import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let ColumnsDirective = class ColumnsDirective extends Vue {
    render() {
        return;
    }
};
ColumnsDirective = __decorate([
    EJComponentDecorator({})
], ColumnsDirective);
const ColumnsPlugin = {
    name: 'e-columns',
    install(Vue$$1) {
        Vue$$1.component(ColumnsPlugin.name, ColumnsDirective);
    }
};
/**
 * `e-columns` directive represent a columns of the VueJS Kanban board.
 * It must be contained in a Kanban component(`ejs-kanban`).
 * ```vue
 * <ejs-kanban>
 *   <e-columns>
 *    <e-column keyField='Open' textField='To Do'></e-column>
 *    <e-column keyField='Close' textField='Completed'></e-column>
 *   </e-columns>
 * </ejs-kanban>
 * ```
 */
let ColumnDirective = class ColumnDirective extends Vue {
    render() {
        return;
    }
};
ColumnDirective = __decorate([
    EJComponentDecorator({})
], ColumnDirective);
const ColumnPlugin = {
    name: 'e-column',
    install(Vue$$1) {
        Vue$$1.component(ColumnPlugin.name, ColumnDirective);
    }
};

var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let StackedHeadersDirective = class StackedHeadersDirective extends Vue {
    render() {
        return;
    }
};
StackedHeadersDirective = __decorate$1([
    EJComponentDecorator({})
], StackedHeadersDirective);
const StackedHeadersPlugin = {
    name: 'e-stackedHeaders',
    install(Vue$$1) {
        Vue$$1.component(StackedHeadersPlugin.name, StackedHeadersDirective);
    }
};
/**
 * `e-stackedHeaders` directive represent a stacked header of the VueJS Kanban board.
 * It must be contained in a Kanban component(`ejs-kanban`).
 * ```vue
 * <ejs-kanban>
 *   <e-stackedHeaders>
 *    <e-stackedHeader keyField='Open' text='To Do'></e-stackedHeader>
 *    <e-stackedHeader keyField='Close' text='Completed'></e-stackedHeader>
 *   </e-stackedHeaders>
 * </ejs-kanban>
 * ```
 */
let StackedHeaderDirective = class StackedHeaderDirective extends Vue {
    render() {
        return;
    }
};
StackedHeaderDirective = __decorate$1([
    EJComponentDecorator({})
], StackedHeaderDirective);
const StackedHeaderPlugin = {
    name: 'e-stackedHeader',
    install(Vue$$1) {
        Vue$$1.component(StackedHeaderPlugin.name, StackedHeaderDirective);
    }
};

var __decorate$2 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const properties = ['allowDragAndDrop', 'allowKeyboard', 'cardSettings', 'columns', 'constraintType', 'cssClass', 'dataSource', 'dialogSettings', 'enablePersistence', 'enableRtl', 'enableTooltip', 'height', 'keyField', 'locale', 'query', 'showEmptyColumn', 'sortSettings', 'stackedHeaders', 'swimlaneSettings', 'tooltipTemplate', 'width', 'actionBegin', 'actionComplete', 'actionFailure', 'cardClick', 'cardDoubleClick', 'cardRendered', 'created', 'dataBinding', 'dataBound', 'dialogClose', 'dialogOpen', 'drag', 'dragStart', 'dragStop', 'queryCellInfo'];
const modelProps = [];
/**
 * `ej-kanban` represents the VueJS Kanban Component.
 * ```vue
 * <ejs-kanban></ejs-kanban>
 * ```
 */
let KanbanComponent = class KanbanComponent extends ComponentBase {
    constructor() {
        super();
        this.propKeys = properties;
        this.models = modelProps;
        this.hasChildDirective = true;
        this.hasInjectedModules = false;
        this.tagMapper = { "e-columns": "e-column", "e-stackedHeaders": "e-stackedHeader" };
        this.tagNameMapper = {};
        this.ej2Instances = new Kanban({});
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
    addCard(cardData) {
        return this.ej2Instances.addCard(cardData);
    }
    addColumn(columnOptions, index) {
        return this.ej2Instances.addColumn(columnOptions, index);
    }
    closeDialog() {
        return this.ej2Instances.closeDialog();
    }
    deleteCard(cardData) {
        return this.ej2Instances.deleteCard(cardData);
    }
    deleteColumn(index) {
        return this.ej2Instances.deleteColumn(index);
    }
    getCardDetails(target) {
        return this.ej2Instances.getCardDetails(target);
    }
    getColumnData(columnKey, dataSource) {
        return this.ej2Instances.getColumnData(columnKey, dataSource);
    }
    getSelectedCards() {
        return this.ej2Instances.getSelectedCards();
    }
    getSwimlaneData(keyField) {
        return this.ej2Instances.getSwimlaneData(keyField);
    }
    hideColumn(key) {
        return this.ej2Instances.hideColumn(key);
    }
    hideSpinner() {
        return this.ej2Instances.hideSpinner();
    }
    openDialog(action, data) {
        return this.ej2Instances.openDialog(action, data);
    }
    showColumn(key) {
        return this.ej2Instances.showColumn(key);
    }
    showSpinner() {
        return this.ej2Instances.showSpinner();
    }
    updateCard(cardData) {
        return this.ej2Instances.updateCard(cardData);
    }
};
KanbanComponent = __decorate$2([
    EJComponentDecorator({
        props: properties
    })
], KanbanComponent);
const KanbanPlugin = {
    name: 'ejs-kanban',
    install(Vue$$1) {
        Vue$$1.component(KanbanPlugin.name, KanbanComponent);
        Vue$$1.component(ColumnPlugin.name, ColumnDirective);
        Vue$$1.component(ColumnsPlugin.name, ColumnsDirective);
        Vue$$1.component(StackedHeaderPlugin.name, StackedHeaderDirective);
        Vue$$1.component(StackedHeadersPlugin.name, StackedHeadersDirective);
    }
};

export { ColumnsDirective, ColumnDirective, ColumnsPlugin, ColumnPlugin, StackedHeadersDirective, StackedHeaderDirective, StackedHeadersPlugin, StackedHeaderPlugin, KanbanComponent, KanbanPlugin };
export * from '@syncfusion/ej2-kanban';
//# sourceMappingURL=ej2-vue-kanban.es2015.js.map
