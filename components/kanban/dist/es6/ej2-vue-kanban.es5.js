import { Kanban } from '@syncfusion/ej2-kanban';
import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

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
var StackedHeadersDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$1(StackedHeadersDirective, _super);
    function StackedHeadersDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StackedHeadersDirective.prototype.render = function () {
        return;
    };
    StackedHeadersDirective = __decorate$1([
        EJComponentDecorator({})
    ], StackedHeadersDirective);
    return StackedHeadersDirective;
}(Vue));
var StackedHeadersPlugin = {
    name: 'e-stackedHeaders',
    install: function (Vue$$1) {
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
var StackedHeaderDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$1(StackedHeaderDirective, _super);
    function StackedHeaderDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StackedHeaderDirective.prototype.render = function () {
        return;
    };
    StackedHeaderDirective = __decorate$1([
        EJComponentDecorator({})
    ], StackedHeaderDirective);
    return StackedHeaderDirective;
}(Vue));
var StackedHeaderPlugin = {
    name: 'e-stackedHeader',
    install: function (Vue$$1) {
        Vue$$1.component(StackedHeaderPlugin.name, StackedHeaderDirective);
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
var properties = ['allowDragAndDrop', 'allowKeyboard', 'cardSettings', 'columns', 'constraintType', 'cssClass', 'dataSource', 'dialogSettings', 'enablePersistence', 'enableRtl', 'enableTooltip', 'height', 'keyField', 'locale', 'query', 'showEmptyColumn', 'sortSettings', 'stackedHeaders', 'swimlaneSettings', 'tooltipTemplate', 'width', 'actionBegin', 'actionComplete', 'actionFailure', 'cardClick', 'cardDoubleClick', 'cardRendered', 'created', 'dataBinding', 'dataBound', 'dialogClose', 'dialogOpen', 'drag', 'dragStart', 'dragStop', 'queryCellInfo'];
var modelProps = [];
/**
 * `ej-kanban` represents the VueJS Kanban Component.
 * ```vue
 * <ejs-kanban></ejs-kanban>
 * ```
 */
var KanbanComponent = /** @__PURE__ @class */ (function (_super) {
    __extends$2(KanbanComponent, _super);
    function KanbanComponent() {
        var _this = _super.call(this) || this;
        _this.propKeys = properties;
        _this.models = modelProps;
        _this.hasChildDirective = true;
        _this.hasInjectedModules = false;
        _this.tagMapper = { "e-columns": "e-column", "e-stackedHeaders": "e-stackedHeader" };
        _this.tagNameMapper = {};
        _this.ej2Instances = new Kanban({});
        _this.bindProperties();
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        return _this;
    }
    KanbanComponent.prototype.setProperties = function (prop, muteOnChange) {
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
    KanbanComponent.prototype.render = function (createElement) {
        return createElement('div', this.$slots.default);
    };
    KanbanComponent.prototype.addCard = function (cardData) {
        return this.ej2Instances.addCard(cardData);
    };
    KanbanComponent.prototype.addColumn = function (columnOptions, index) {
        return this.ej2Instances.addColumn(columnOptions, index);
    };
    KanbanComponent.prototype.closeDialog = function () {
        return this.ej2Instances.closeDialog();
    };
    KanbanComponent.prototype.deleteCard = function (cardData) {
        return this.ej2Instances.deleteCard(cardData);
    };
    KanbanComponent.prototype.deleteColumn = function (index) {
        return this.ej2Instances.deleteColumn(index);
    };
    KanbanComponent.prototype.getCardDetails = function (target) {
        return this.ej2Instances.getCardDetails(target);
    };
    KanbanComponent.prototype.getColumnData = function (columnKey, dataSource) {
        return this.ej2Instances.getColumnData(columnKey, dataSource);
    };
    KanbanComponent.prototype.getSelectedCards = function () {
        return this.ej2Instances.getSelectedCards();
    };
    KanbanComponent.prototype.getSwimlaneData = function (keyField) {
        return this.ej2Instances.getSwimlaneData(keyField);
    };
    KanbanComponent.prototype.hideColumn = function (key) {
        return this.ej2Instances.hideColumn(key);
    };
    KanbanComponent.prototype.hideSpinner = function () {
        return this.ej2Instances.hideSpinner();
    };
    KanbanComponent.prototype.openDialog = function (action, data) {
        return this.ej2Instances.openDialog(action, data);
    };
    KanbanComponent.prototype.renderHeader = function () {
        return this.ej2Instances.renderHeader();
    };
    KanbanComponent.prototype.showColumn = function (key) {
        return this.ej2Instances.showColumn(key);
    };
    KanbanComponent.prototype.showSpinner = function () {
        return this.ej2Instances.showSpinner();
    };
    KanbanComponent.prototype.updateCard = function (cardData, index) {
        return this.ej2Instances.updateCard(cardData, index);
    };
    KanbanComponent = __decorate$2([
        EJComponentDecorator({
            props: properties
        })
    ], KanbanComponent);
    return KanbanComponent;
}(ComponentBase));
var KanbanPlugin = {
    name: 'ejs-kanban',
    install: function (Vue$$1) {
        Vue$$1.component(KanbanPlugin.name, KanbanComponent);
        Vue$$1.component(ColumnPlugin.name, ColumnDirective);
        Vue$$1.component(ColumnsPlugin.name, ColumnsDirective);
        Vue$$1.component(StackedHeaderPlugin.name, StackedHeaderDirective);
        Vue$$1.component(StackedHeadersPlugin.name, StackedHeadersDirective);
    }
};

export { ColumnsDirective, ColumnDirective, ColumnsPlugin, ColumnPlugin, StackedHeadersDirective, StackedHeaderDirective, StackedHeadersPlugin, StackedHeaderPlugin, KanbanComponent, KanbanPlugin };
export * from '@syncfusion/ej2-kanban';
//# sourceMappingURL=ej2-vue-kanban.es5.js.map
