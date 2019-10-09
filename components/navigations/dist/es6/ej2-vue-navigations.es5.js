import { Accordion, ContextMenu, Menu, Sidebar, Tab, Toolbar, TreeView } from '@syncfusion/ej2-navigations';
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
var AccordionItemsDirective = /** @__PURE__ @class */ (function (_super) {
    __extends(AccordionItemsDirective, _super);
    function AccordionItemsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AccordionItemsDirective.prototype.render = function () {
        return;
    };
    AccordionItemsDirective = __decorate([
        EJComponentDecorator({})
    ], AccordionItemsDirective);
    return AccordionItemsDirective;
}(Vue));
var AccordionItemsPlugin = {
    name: 'e-accordionitems',
    install: function (Vue$$1) {
        Vue$$1.component(AccordionItemsPlugin.name, AccordionItemsDirective);
    }
};
var AccordionItemDirective = /** @__PURE__ @class */ (function (_super) {
    __extends(AccordionItemDirective, _super);
    function AccordionItemDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AccordionItemDirective.prototype.render = function () {
        return;
    };
    AccordionItemDirective = __decorate([
        EJComponentDecorator({})
    ], AccordionItemDirective);
    return AccordionItemDirective;
}(Vue));
var AccordionItemPlugin = {
    name: 'e-accordionitem',
    install: function (Vue$$1) {
        Vue$$1.component(AccordionItemPlugin.name, AccordionItemDirective);
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
var properties = ['animation', 'dataSource', 'enablePersistence', 'enableRtl', 'expandMode', 'headerTemplate', 'height', 'itemTemplate', 'items', 'locale', 'width', 'clicked', 'created', 'destroyed', 'expanded', 'expanding'];
var modelProps = [];
/**
 * Represents the EJ2 VueJS Accordion Component.
 * ```html
 * <ejs-accordion  :items='accordionItems'></ejs-accordion>
 * ```
 */
var AccordionComponent = /** @__PURE__ @class */ (function (_super) {
    __extends$1(AccordionComponent, _super);
    function AccordionComponent() {
        var _this = _super.call(this) || this;
        _this.propKeys = properties;
        _this.models = modelProps;
        _this.hasChildDirective = true;
        _this.hasInjectedModules = false;
        _this.tagMapper = { "e-accordionitems": "e-accordionitem" };
        _this.tagNameMapper = { "e-accordionitems": "e-items" };
        _this.ej2Instances = new Accordion({});
        _this.bindProperties();
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        return _this;
    }
    AccordionComponent.prototype.setProperties = function (prop, muteOnChange) {
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
    AccordionComponent.prototype.render = function (createElement) {
        return createElement('div', this.$slots.default);
    };
    AccordionComponent.prototype.addItem = function (item, index) {
        return this.ej2Instances.addItem(item, index);
    };
    AccordionComponent.prototype.enableItem = function (index, isEnable) {
        return this.ej2Instances.enableItem(index, isEnable);
    };
    AccordionComponent.prototype.expandItem = function (isExpand, index) {
        return this.ej2Instances.expandItem(isExpand, index);
    };
    AccordionComponent.prototype.hideItem = function (index, isHidden) {
        return this.ej2Instances.hideItem(index, isHidden);
    };
    AccordionComponent.prototype.removeItem = function (index) {
        return this.ej2Instances.removeItem(index);
    };
    AccordionComponent.prototype.select = function (index) {
        return this.ej2Instances.select(index);
    };
    AccordionComponent = __decorate$1([
        EJComponentDecorator({
            props: properties
        })
    ], AccordionComponent);
    return AccordionComponent;
}(ComponentBase));
var AccordionPlugin = {
    name: 'ejs-accordion',
    install: function (Vue$$1) {
        Vue$$1.component(AccordionPlugin.name, AccordionComponent);
        Vue$$1.component(AccordionItemPlugin.name, AccordionItemDirective);
        Vue$$1.component(AccordionItemsPlugin.name, AccordionItemsDirective);
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
var ItemsDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$2(ItemsDirective, _super);
    function ItemsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ItemsDirective.prototype.render = function () {
        return;
    };
    ItemsDirective = __decorate$2([
        EJComponentDecorator({})
    ], ItemsDirective);
    return ItemsDirective;
}(Vue));
var ItemsPlugin = {
    name: 'e-items',
    install: function (Vue$$1) {
        Vue$$1.component(ItemsPlugin.name, ItemsDirective);
    }
};
var ItemDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$2(ItemDirective, _super);
    function ItemDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ItemDirective.prototype.render = function () {
        return;
    };
    ItemDirective = __decorate$2([
        EJComponentDecorator({})
    ], ItemDirective);
    return ItemDirective;
}(Vue));
var ItemPlugin = {
    name: 'e-item',
    install: function (Vue$$1) {
        Vue$$1.component(ItemPlugin.name, ItemDirective);
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
var properties$1 = ['enableCollision', 'enablePersistence', 'enableRtl', 'height', 'items', 'locale', 'overflowMode', 'scrollStep', 'width', 'beforeCreate', 'clicked', 'created', 'destroyed'];
var modelProps$1 = [];
/**
 * Represents the Essential JS 2 VueJS Toolbar Component.
 * ```html
 * <ejs-toolbar  :items='toolbarItems'></ejs-toolbar>
 * ```
 */
var ToolbarComponent = /** @__PURE__ @class */ (function (_super) {
    __extends$3(ToolbarComponent, _super);
    function ToolbarComponent() {
        var _this = _super.call(this) || this;
        _this.propKeys = properties$1;
        _this.models = modelProps$1;
        _this.hasChildDirective = true;
        _this.hasInjectedModules = false;
        _this.tagMapper = { "e-items": "e-item" };
        _this.tagNameMapper = {};
        _this.ej2Instances = new Toolbar({});
        _this.bindProperties();
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        return _this;
    }
    ToolbarComponent.prototype.setProperties = function (prop, muteOnChange) {
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
    ToolbarComponent.prototype.render = function (createElement) {
        return createElement('div', this.$slots.default);
    };
    ToolbarComponent.prototype.addItems = function (items, index) {
        return this.ej2Instances.addItems(items, index);
    };
    ToolbarComponent.prototype.disable = function (value) {
        return this.ej2Instances.disable(value);
    };
    ToolbarComponent.prototype.enableItems = function (items, isEnable) {
        return this.ej2Instances.enableItems(items, isEnable);
    };
    ToolbarComponent.prototype.hideItem = function (index, value) {
        return this.ej2Instances.hideItem(index, value);
    };
    ToolbarComponent.prototype.refreshOverflow = function () {
        return this.ej2Instances.refreshOverflow();
    };
    ToolbarComponent.prototype.removeItems = function (args) {
        return this.ej2Instances.removeItems(args);
    };
    ToolbarComponent = __decorate$3([
        EJComponentDecorator({
            props: properties$1
        })
    ], ToolbarComponent);
    return ToolbarComponent;
}(ComponentBase));
var ToolbarPlugin = {
    name: 'ejs-toolbar',
    install: function (Vue$$1) {
        Vue$$1.component(ToolbarPlugin.name, ToolbarComponent);
        Vue$$1.component(ItemPlugin.name, ItemDirective);
        Vue$$1.component(ItemsPlugin.name, ItemsDirective);
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
var properties$2 = ['animationSettings', 'cssClass', 'enablePersistence', 'enableRtl', 'enableScrolling', 'fields', 'filter', 'items', 'locale', 'showItemOnClick', 'target', 'template', 'beforeClose', 'beforeItemRender', 'beforeOpen', 'created', 'onClose', 'onOpen', 'select'];
var modelProps$2 = [];
/**
 * Represents the Essential JS 2 VueJS ContextMenu Component.
 * ```html
 * <div id='target'>Right click / Touch hold to open the ContextMenu</div>
 * <ejs-contextmenu target='#target' :items='menuItems'></ejs-contextmenu>
 * ```
 */
var ContextMenuComponent = /** @__PURE__ @class */ (function (_super) {
    __extends$4(ContextMenuComponent, _super);
    function ContextMenuComponent() {
        var _this = _super.call(this) || this;
        _this.propKeys = properties$2;
        _this.models = modelProps$2;
        _this.hasChildDirective = false;
        _this.hasInjectedModules = false;
        _this.tagMapper = {};
        _this.tagNameMapper = {};
        _this.ej2Instances = new ContextMenu({});
        _this.bindProperties();
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        return _this;
    }
    ContextMenuComponent.prototype.setProperties = function (prop, muteOnChange) {
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
    ContextMenuComponent.prototype.render = function (createElement) {
        return createElement('ul', this.$slots.default);
    };
    ContextMenuComponent.prototype.close = function () {
        return this.ej2Instances.close();
    };
    ContextMenuComponent.prototype.enableItems = function (items, enable, isUniqueId) {
        return this.ej2Instances.enableItems(items, enable, isUniqueId);
    };
    ContextMenuComponent.prototype.hideItems = function (items, isUniqueId) {
        return this.ej2Instances.hideItems(items, isUniqueId);
    };
    ContextMenuComponent.prototype.insertAfter = function (items, text, isUniqueId) {
        return this.ej2Instances.insertAfter(items, text, isUniqueId);
    };
    ContextMenuComponent.prototype.insertBefore = function (items, text, isUniqueId) {
        return this.ej2Instances.insertBefore(items, text, isUniqueId);
    };
    ContextMenuComponent.prototype.open = function (top, left, target) {
        return this.ej2Instances.open(top, left, target);
    };
    ContextMenuComponent.prototype.removeItems = function (items, isUniqueId) {
        return this.ej2Instances.removeItems(items, isUniqueId);
    };
    ContextMenuComponent.prototype.showItems = function (items, isUniqueId) {
        return this.ej2Instances.showItems(items, isUniqueId);
    };
    ContextMenuComponent = __decorate$4([
        EJComponentDecorator({
            props: properties$2
        })
    ], ContextMenuComponent);
    return ContextMenuComponent;
}(ComponentBase));
var ContextMenuPlugin = {
    name: 'ejs-contextmenu',
    install: function (Vue$$1) {
        Vue$$1.component(ContextMenuPlugin.name, ContextMenuComponent);
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
var TabItemsDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$5(TabItemsDirective, _super);
    function TabItemsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TabItemsDirective.prototype.render = function () {
        return;
    };
    TabItemsDirective = __decorate$5([
        EJComponentDecorator({})
    ], TabItemsDirective);
    return TabItemsDirective;
}(Vue));
var TabItemsPlugin = {
    name: 'e-tabitems',
    install: function (Vue$$1) {
        Vue$$1.component(TabItemsPlugin.name, TabItemsDirective);
    }
};
var TabItemDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$5(TabItemDirective, _super);
    function TabItemDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TabItemDirective.prototype.render = function () {
        return;
    };
    TabItemDirective = __decorate$5([
        EJComponentDecorator({})
    ], TabItemDirective);
    return TabItemDirective;
}(Vue));
var TabItemPlugin = {
    name: 'e-tabitem',
    install: function (Vue$$1) {
        Vue$$1.component(TabItemPlugin.name, TabItemDirective);
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
var properties$3 = ['animation', 'cssClass', 'enablePersistence', 'enableRtl', 'headerPlacement', 'height', 'heightAdjustMode', 'items', 'locale', 'overflowMode', 'scrollStep', 'selectedItem', 'showCloseButton', 'width', 'added', 'adding', 'created', 'destroyed', 'removed', 'removing', 'selected', 'selecting'];
var modelProps$3 = [];
/**
 * Represents the EJ2 VueJS Tab Component.
 * ```html
 * <ejs-tab  :items='tabItems'></ejs-tab>
 * ```
 */
var TabComponent = /** @__PURE__ @class */ (function (_super) {
    __extends$6(TabComponent, _super);
    function TabComponent() {
        var _this = _super.call(this) || this;
        _this.propKeys = properties$3;
        _this.models = modelProps$3;
        _this.hasChildDirective = true;
        _this.hasInjectedModules = false;
        _this.tagMapper = { "e-tabitems": "e-tabitem" };
        _this.tagNameMapper = { "e-tabitems": "e-items" };
        _this.ej2Instances = new Tab({});
        _this.bindProperties();
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        return _this;
    }
    TabComponent.prototype.setProperties = function (prop, muteOnChange) {
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
    TabComponent.prototype.render = function (createElement) {
        return createElement('div', this.$slots.default);
    };
    TabComponent.prototype.addTab = function (items, index) {
        return this.ej2Instances.addTab(items, index);
    };
    TabComponent.prototype.disable = function (value) {
        return this.ej2Instances.disable(value);
    };
    TabComponent.prototype.enableTab = function (index, value) {
        return this.ej2Instances.enableTab(index, value);
    };
    TabComponent.prototype.hideTab = function (index, value) {
        return this.ej2Instances.hideTab(index, value);
    };
    TabComponent.prototype.removeTab = function (index) {
        return this.ej2Instances.removeTab(index);
    };
    TabComponent.prototype.select = function (args) {
        return this.ej2Instances.select(args);
    };
    TabComponent = __decorate$6([
        EJComponentDecorator({
            props: properties$3
        })
    ], TabComponent);
    return TabComponent;
}(ComponentBase));
var TabPlugin = {
    name: 'ejs-tab',
    install: function (Vue$$1) {
        Vue$$1.component(TabPlugin.name, TabComponent);
        Vue$$1.component(TabItemPlugin.name, TabItemDirective);
        Vue$$1.component(TabItemsPlugin.name, TabItemsDirective);
    }
};

var __extends$7 = (undefined && undefined.__extends) || (function () {
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
var __decorate$7 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var properties$4 = ['allowDragAndDrop', 'allowEditing', 'allowMultiSelection', 'animation', 'autoCheck', 'checkedNodes', 'cssClass', 'enablePersistence', 'enableRtl', 'expandOn', 'expandedNodes', 'fields', 'fullRowSelect', 'loadOnDemand', 'locale', 'nodeTemplate', 'selectedNodes', 'showCheckBox', 'sortOrder', 'created', 'dataBound', 'dataSourceChanged', 'destroyed', 'drawNode', 'keyPress', 'nodeChecked', 'nodeChecking', 'nodeClicked', 'nodeCollapsed', 'nodeCollapsing', 'nodeDragStart', 'nodeDragStop', 'nodeDragging', 'nodeDropped', 'nodeEdited', 'nodeEditing', 'nodeExpanded', 'nodeExpanding', 'nodeSelected', 'nodeSelecting'];
var modelProps$4 = [];
/**
 * Represents the EJ2 VueJS TreeView Component.
 * ```html
 * <ejs-treeview></ejs-treeview>
 * ```
 */
var TreeViewComponent = /** @__PURE__ @class */ (function (_super) {
    __extends$7(TreeViewComponent, _super);
    function TreeViewComponent() {
        var _this = _super.call(this) || this;
        _this.propKeys = properties$4;
        _this.models = modelProps$4;
        _this.hasChildDirective = false;
        _this.hasInjectedModules = false;
        _this.tagMapper = {};
        _this.tagNameMapper = {};
        _this.ej2Instances = new TreeView({});
        _this.bindProperties();
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        return _this;
    }
    TreeViewComponent.prototype.setProperties = function (prop, muteOnChange) {
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
    TreeViewComponent.prototype.render = function (createElement) {
        return createElement('div', this.$slots.default);
    };
    TreeViewComponent.prototype.addNodes = function (nodes, target, index, preventTargetExpand) {
        return this.ej2Instances.addNodes(nodes, target, index, preventTargetExpand);
    };
    TreeViewComponent.prototype.beginEdit = function (node) {
        return this.ej2Instances.beginEdit(node);
    };
    TreeViewComponent.prototype.checkAll = function (nodes) {
        return this.ej2Instances.checkAll(nodes);
    };
    TreeViewComponent.prototype.collapseAll = function (nodes, level, excludeHiddenNodes) {
        return this.ej2Instances.collapseAll(nodes, level, excludeHiddenNodes);
    };
    TreeViewComponent.prototype.disableNodes = function (nodes) {
        return this.ej2Instances.disableNodes(nodes);
    };
    TreeViewComponent.prototype.enableNodes = function (nodes) {
        return this.ej2Instances.enableNodes(nodes);
    };
    TreeViewComponent.prototype.ensureVisible = function (node) {
        return this.ej2Instances.ensureVisible(node);
    };
    TreeViewComponent.prototype.expandAll = function (nodes, level, excludeHiddenNodes) {
        return this.ej2Instances.expandAll(nodes, level, excludeHiddenNodes);
    };
    TreeViewComponent.prototype.getAllCheckedNodes = function () {
        return this.ej2Instances.getAllCheckedNodes();
    };
    TreeViewComponent.prototype.getNode = function (node) {
        return this.ej2Instances.getNode(node);
    };
    TreeViewComponent.prototype.getTreeData = function (node) {
        return this.ej2Instances.getTreeData(node);
    };
    TreeViewComponent.prototype.moveNodes = function (sourceNodes, target, index, preventTargetExpand) {
        return this.ej2Instances.moveNodes(sourceNodes, target, index, preventTargetExpand);
    };
    TreeViewComponent.prototype.removeNodes = function (nodes) {
        return this.ej2Instances.removeNodes(nodes);
    };
    TreeViewComponent.prototype.uncheckAll = function (nodes) {
        return this.ej2Instances.uncheckAll(nodes);
    };
    TreeViewComponent.prototype.updateNode = function (target, newText) {
        return this.ej2Instances.updateNode(target, newText);
    };
    TreeViewComponent = __decorate$7([
        EJComponentDecorator({
            props: properties$4
        })
    ], TreeViewComponent);
    return TreeViewComponent;
}(ComponentBase));
var TreeViewPlugin = {
    name: 'ejs-treeview',
    install: function (Vue$$1) {
        Vue$$1.component(TreeViewPlugin.name, TreeViewComponent);
    }
};

var __extends$8 = (undefined && undefined.__extends) || (function () {
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
var __decorate$8 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var properties$5 = ['animate', 'closeOnDocumentClick', 'dockSize', 'enableDock', 'enableGestures', 'enablePersistence', 'enableRtl', 'height', 'isOpen', 'locale', 'mediaQuery', 'position', 'showBackdrop', 'target', 'type', 'width', 'zIndex', 'change', 'close', 'created', 'destroyed', 'open'];
var modelProps$5 = ['isOpen'];
/**
 *  Represents the Essential JS 2 VueJS Sidebar Component.
 * ```html
 * <ejs-sidebar></ejs-sidebar>
 * ```
 */
var SidebarComponent = /** @__PURE__ @class */ (function (_super) {
    __extends$8(SidebarComponent, _super);
    function SidebarComponent() {
        var _this = _super.call(this) || this;
        _this.propKeys = properties$5;
        _this.models = modelProps$5;
        _this.hasChildDirective = false;
        _this.hasInjectedModules = false;
        _this.tagMapper = {};
        _this.tagNameMapper = {};
        _this.ej2Instances = new Sidebar({});
        _this.ej2Instances._trigger = _this.ej2Instances.trigger;
        _this.ej2Instances.trigger = _this.trigger;
        _this.bindProperties();
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        return _this;
    }
    SidebarComponent.prototype.setProperties = function (prop, muteOnChange) {
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
    SidebarComponent.prototype.trigger = function (eventName, eventProp, successHandler) {
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
    SidebarComponent.prototype.render = function (createElement) {
        return createElement('div', this.$slots.default);
    };
    SidebarComponent.prototype.hide = function (e) {
        return this.ej2Instances.hide(e);
    };
    SidebarComponent.prototype.show = function (e) {
        return this.ej2Instances.show(e);
    };
    SidebarComponent.prototype.toggle = function (e) {
        return this.ej2Instances.toggle(e);
    };
    SidebarComponent = __decorate$8([
        EJComponentDecorator({
            props: properties$5,
            model: {
                event: 'modelchanged'
            }
        })
    ], SidebarComponent);
    return SidebarComponent;
}(ComponentBase));
var SidebarPlugin = {
    name: 'ejs-sidebar',
    install: function (Vue$$1) {
        Vue$$1.component(SidebarPlugin.name, SidebarComponent);
    }
};

var __extends$9 = (undefined && undefined.__extends) || (function () {
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
var __decorate$9 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var MenuItemsDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$9(MenuItemsDirective, _super);
    function MenuItemsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MenuItemsDirective.prototype.render = function () {
        return;
    };
    MenuItemsDirective = __decorate$9([
        EJComponentDecorator({})
    ], MenuItemsDirective);
    return MenuItemsDirective;
}(Vue));
var MenuItemsPlugin = {
    name: 'e-menu-items',
    install: function (Vue$$1) {
        Vue$$1.component(MenuItemsPlugin.name, MenuItemsDirective);
    }
};
var MenuItemDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$9(MenuItemDirective, _super);
    function MenuItemDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MenuItemDirective.prototype.render = function () {
        return;
    };
    MenuItemDirective = __decorate$9([
        EJComponentDecorator({})
    ], MenuItemDirective);
    return MenuItemDirective;
}(Vue));
var MenuItemPlugin = {
    name: 'e-',
    install: function (Vue$$1) {
        Vue$$1.component(MenuItemPlugin.name, MenuItemDirective);
    }
};

var __extends$10 = (undefined && undefined.__extends) || (function () {
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
var __decorate$10 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var properties$6 = ['animationSettings', 'cssClass', 'enablePersistence', 'enableRtl', 'enableScrolling', 'fields', 'filter', 'hamburgerMode', 'items', 'locale', 'orientation', 'showItemOnClick', 'target', 'template', 'title', 'beforeClose', 'beforeItemRender', 'beforeOpen', 'created', 'onClose', 'onOpen', 'select'];
var modelProps$6 = [];
/**
 * Represents the Essential JS 2 VueJS Menu Component.
 * ```html
 * <ejs-menu :items='menuItems'></ejs-menu>
 * ```
 */
var MenuComponent = /** @__PURE__ @class */ (function (_super) {
    __extends$10(MenuComponent, _super);
    function MenuComponent() {
        var _this = _super.call(this) || this;
        _this.propKeys = properties$6;
        _this.models = modelProps$6;
        _this.hasChildDirective = true;
        _this.hasInjectedModules = false;
        _this.tagMapper = { "e-menu-items": "e-" };
        _this.tagNameMapper = { "e-menu-items": "e-items" };
        _this.ej2Instances = new Menu({});
        _this.bindProperties();
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        return _this;
    }
    MenuComponent.prototype.setProperties = function (prop, muteOnChange) {
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
    MenuComponent.prototype.render = function (createElement) {
        return createElement('ul', this.$slots.default);
    };
    MenuComponent.prototype.close = function () {
        return this.ej2Instances.close();
    };
    MenuComponent.prototype.enableItems = function (items, enable, isUniqueId) {
        return this.ej2Instances.enableItems(items, enable, isUniqueId);
    };
    MenuComponent.prototype.hideItems = function (items, isUniqueId) {
        return this.ej2Instances.hideItems(items, isUniqueId);
    };
    MenuComponent.prototype.insertAfter = function (items, text, isUniqueId) {
        return this.ej2Instances.insertAfter(items, text, isUniqueId);
    };
    MenuComponent.prototype.insertBefore = function (items, text, isUniqueId) {
        return this.ej2Instances.insertBefore(items, text, isUniqueId);
    };
    MenuComponent.prototype.open = function () {
        return this.ej2Instances.open();
    };
    MenuComponent.prototype.removeItems = function (items, isUniqueId) {
        return this.ej2Instances.removeItems(items, isUniqueId);
    };
    MenuComponent.prototype.showItems = function (items, isUniqueId) {
        return this.ej2Instances.showItems(items, isUniqueId);
    };
    MenuComponent = __decorate$10([
        EJComponentDecorator({
            props: properties$6
        })
    ], MenuComponent);
    return MenuComponent;
}(ComponentBase));
var MenuPlugin = {
    name: 'ejs-menu',
    install: function (Vue$$1) {
        Vue$$1.component(MenuPlugin.name, MenuComponent);
        Vue$$1.component(MenuItemPlugin.name, MenuItemDirective);
        Vue$$1.component(MenuItemsPlugin.name, MenuItemsDirective);
    }
};

export { AccordionItemsDirective, AccordionItemDirective, AccordionItemsPlugin, AccordionItemPlugin, AccordionComponent, AccordionPlugin, ItemsDirective, ItemDirective, ItemsPlugin, ItemPlugin, ToolbarComponent, ToolbarPlugin, ContextMenuComponent, ContextMenuPlugin, TabItemsDirective, TabItemDirective, TabItemsPlugin, TabItemPlugin, TabComponent, TabPlugin, TreeViewComponent, TreeViewPlugin, SidebarComponent, SidebarPlugin, MenuItemsDirective, MenuItemDirective, MenuItemsPlugin, MenuItemPlugin, MenuComponent, MenuPlugin };
export * from '@syncfusion/ej2-navigations';
//# sourceMappingURL=ej2-vue-navigations.es5.js.map
