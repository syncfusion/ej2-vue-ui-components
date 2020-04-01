import { Accordion, ContextMenu, Menu, Sidebar, Tab, Toolbar, TreeView } from '@syncfusion/ej2-navigations';
import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';
import { isUndefined } from '@syncfusion/ej2-base';

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let AccordionItemsDirective = class AccordionItemsDirective extends Vue {
    render() {
        return;
    }
};
AccordionItemsDirective = __decorate([
    EJComponentDecorator({})
], AccordionItemsDirective);
const AccordionItemsPlugin = {
    name: 'e-accordionitems',
    install(Vue$$1) {
        Vue$$1.component(AccordionItemsPlugin.name, AccordionItemsDirective);
    }
};
/**
 * 'e-accordionitem' directive represent a item of Vue Accordion
 * It must be contained in a Accordion component(`ejs-accordion`).
 * ```html
 * <ejs-accordion>
 *   <e-accordionitems>
 *    <e-accordionitem header='Header1'></e-accordionitem>
 *    <e-accordionitem header='Header2' content='Content2'></e-accordionitem>
 *   </e-accordionitems>
 * </ejs-accordion>
 * ```
 */
let AccordionItemDirective = class AccordionItemDirective extends Vue {
    render() {
        return;
    }
};
AccordionItemDirective = __decorate([
    EJComponentDecorator({})
], AccordionItemDirective);
const AccordionItemPlugin = {
    name: 'e-accordionitem',
    install(Vue$$1) {
        Vue$$1.component(AccordionItemPlugin.name, AccordionItemDirective);
    }
};

var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const properties = ['animation', 'dataSource', 'enablePersistence', 'enableRtl', 'expandMode', 'headerTemplate', 'height', 'itemTemplate', 'items', 'locale', 'width', 'clicked', 'created', 'destroyed', 'expanded', 'expanding'];
const modelProps = [];
/**
 * Represents the VueJS Accoridon Component.
 * ```html
 * <ejs-accordion></ejs-accordion>
 * ```
 */
let AccordionComponent = class AccordionComponent extends ComponentBase {
    constructor() {
        super();
        this.propKeys = properties;
        this.models = modelProps;
        this.hasChildDirective = true;
        this.hasInjectedModules = false;
        this.tagMapper = { "e-accordionitems": "e-accordionitem" };
        this.tagNameMapper = { "e-accordionitems": "e-items" };
        this.ej2Instances = new Accordion({});
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
    addItem(item, index) {
        return this.ej2Instances.addItem(item, index);
    }
    enableItem(index, isEnable) {
        return this.ej2Instances.enableItem(index, isEnable);
    }
    expandItem(isExpand, index) {
        return this.ej2Instances.expandItem(isExpand, index);
    }
    hideItem(index, isHidden) {
        return this.ej2Instances.hideItem(index, isHidden);
    }
    refresh() {
        return this.ej2Instances.refresh();
    }
    removeItem(index) {
        return this.ej2Instances.removeItem(index);
    }
    select(index) {
        return this.ej2Instances.select(index);
    }
};
AccordionComponent = __decorate$1([
    EJComponentDecorator({
        props: properties
    })
], AccordionComponent);
const AccordionPlugin = {
    name: 'ejs-accordion',
    install(Vue$$1) {
        Vue$$1.component(AccordionPlugin.name, AccordionComponent);
        Vue$$1.component(AccordionItemPlugin.name, AccordionItemDirective);
        Vue$$1.component(AccordionItemsPlugin.name, AccordionItemsDirective);
    }
};

var __decorate$2 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let ItemsDirective = class ItemsDirective extends Vue {
    render() {
        return;
    }
};
ItemsDirective = __decorate$2([
    EJComponentDecorator({})
], ItemsDirective);
const ItemsPlugin = {
    name: 'e-items',
    install(Vue$$1) {
        Vue$$1.component(ItemsPlugin.name, ItemsDirective);
    }
};
/**
 * 'e-item' directive represent a item of Vue Toolbar
 * It must be contained in a Toolbar component(`ejs-toolbar`).
 * ```html
 * <ejs-toolbar>
 *   <e-items>
 *    <e-item text='Cut'></e-item>
 *    <e-item text='Copy'></e-item>
 *   </e-items>
 * </ejs-toolbar>
 * ```
 */
let ItemDirective = class ItemDirective extends Vue {
    render() {
        return;
    }
};
ItemDirective = __decorate$2([
    EJComponentDecorator({})
], ItemDirective);
const ItemPlugin = {
    name: 'e-item',
    install(Vue$$1) {
        Vue$$1.component(ItemPlugin.name, ItemDirective);
    }
};

var __decorate$3 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const properties$1 = ['allowKeyboard', 'cssClass', 'enableCollision', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'height', 'items', 'locale', 'overflowMode', 'scrollStep', 'width', 'beforeCreate', 'clicked', 'created', 'destroyed'];
const modelProps$1 = [];
/**
 * Represents the VueJS Toolbar Component.
 * ```html
 * <ejs-toolbar></ejs-toolbar>
 * ```
 */
let ToolbarComponent = class ToolbarComponent extends ComponentBase {
    constructor() {
        super();
        this.propKeys = properties$1;
        this.models = modelProps$1;
        this.hasChildDirective = true;
        this.hasInjectedModules = false;
        this.tagMapper = { "e-items": "e-item" };
        this.tagNameMapper = {};
        this.ej2Instances = new Toolbar({});
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
    addItems(items, index) {
        return this.ej2Instances.addItems(items, index);
    }
    disable(value) {
        return this.ej2Instances.disable(value);
    }
    enableItems(items, isEnable) {
        return this.ej2Instances.enableItems(items, isEnable);
    }
    hideItem(index, value) {
        return this.ej2Instances.hideItem(index, value);
    }
    refreshOverflow() {
        return this.ej2Instances.refreshOverflow();
    }
    removeItems(args) {
        return this.ej2Instances.removeItems(args);
    }
};
ToolbarComponent = __decorate$3([
    EJComponentDecorator({
        props: properties$1
    })
], ToolbarComponent);
const ToolbarPlugin = {
    name: 'ejs-toolbar',
    install(Vue$$1) {
        Vue$$1.component(ToolbarPlugin.name, ToolbarComponent);
        Vue$$1.component(ItemPlugin.name, ItemDirective);
        Vue$$1.component(ItemsPlugin.name, ItemsDirective);
    }
};

var __decorate$4 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const properties$2 = ['animationSettings', 'cssClass', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'enableScrolling', 'fields', 'filter', 'items', 'locale', 'showItemOnClick', 'target', 'template', 'beforeClose', 'beforeItemRender', 'beforeOpen', 'created', 'onClose', 'onOpen', 'select'];
const modelProps$2 = [];
/**
 * Represents the Essential JS 2 VueJS ContextMenu Component.
 * ```html
 * <div id='target'>Right click / Touch hold to open the ContextMenu</div>
 * <ejs-contextmenu target='#target' :items='menuItems'></ejs-contextmenu>
 * ```
 */
let ContextMenuComponent = class ContextMenuComponent extends ComponentBase {
    constructor() {
        super();
        this.propKeys = properties$2;
        this.models = modelProps$2;
        this.hasChildDirective = false;
        this.hasInjectedModules = false;
        this.tagMapper = {};
        this.tagNameMapper = {};
        this.ej2Instances = new ContextMenu({});
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
        return createElement('ul', this.$slots.default);
    }
    close() {
        return this.ej2Instances.close();
    }
    enableItems(items, enable, isUniqueId) {
        return this.ej2Instances.enableItems(items, enable, isUniqueId);
    }
    hideItems(items, isUniqueId) {
        return this.ej2Instances.hideItems(items, isUniqueId);
    }
    insertAfter(items, text, isUniqueId) {
        return this.ej2Instances.insertAfter(items, text, isUniqueId);
    }
    insertBefore(items, text, isUniqueId) {
        return this.ej2Instances.insertBefore(items, text, isUniqueId);
    }
    open(top, left, target) {
        return this.ej2Instances.open(top, left, target);
    }
    removeItems(items, isUniqueId) {
        return this.ej2Instances.removeItems(items, isUniqueId);
    }
    showItems(items, isUniqueId) {
        return this.ej2Instances.showItems(items, isUniqueId);
    }
};
ContextMenuComponent = __decorate$4([
    EJComponentDecorator({
        props: properties$2
    })
], ContextMenuComponent);
const ContextMenuPlugin = {
    name: 'ejs-contextmenu',
    install(Vue$$1) {
        Vue$$1.component(ContextMenuPlugin.name, ContextMenuComponent);
    }
};

var __decorate$5 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let TabItemsDirective = class TabItemsDirective extends Vue {
    render() {
        return;
    }
};
TabItemsDirective = __decorate$5([
    EJComponentDecorator({})
], TabItemsDirective);
const TabItemsPlugin = {
    name: 'e-tabitems',
    install(Vue$$1) {
        Vue$$1.component(TabItemsPlugin.name, TabItemsDirective);
    }
};
/**
 * 'e-tabitem' directive represent a item of the Vue Tab
 * It must be contained in a Tab component(`ejs-tab`).
 * ```html
 * <ejs-tab>
 *  <e-tabitems>
 *   <e-tabitem :header='Header 1' :content='Content 1'></e-tabitem>
 *   <e-tabitem :header='Header 2' :content='Content 2'></e-tabitem>
 *  <e-tabitems>
 * </ejs-tab>
 * ```
 */
let TabItemDirective = class TabItemDirective extends Vue {
    render() {
        return;
    }
};
TabItemDirective = __decorate$5([
    EJComponentDecorator({})
], TabItemDirective);
const TabItemPlugin = {
    name: 'e-tabitem',
    install(Vue$$1) {
        Vue$$1.component(TabItemPlugin.name, TabItemDirective);
    }
};

var __decorate$6 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const properties$3 = ['animation', 'cssClass', 'enablePersistence', 'enableRtl', 'headerPlacement', 'height', 'heightAdjustMode', 'items', 'loadOn', 'locale', 'overflowMode', 'scrollStep', 'selectedItem', 'showCloseButton', 'width', 'added', 'adding', 'created', 'destroyed', 'removed', 'removing', 'selected', 'selecting'];
const modelProps$3 = [];
/**
 * Represents the VueJS Tab Component.
 * ```html
 * <ejs-tab></ejs-tab>
 * ```
 */
let TabComponent = class TabComponent extends ComponentBase {
    constructor() {
        super();
        this.propKeys = properties$3;
        this.models = modelProps$3;
        this.hasChildDirective = true;
        this.hasInjectedModules = false;
        this.tagMapper = { "e-tabitems": "e-tabitem" };
        this.tagNameMapper = { "e-tabitems": "e-items" };
        this.ej2Instances = new Tab({});
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
    addTab(items, index) {
        return this.ej2Instances.addTab(items, index);
    }
    disable(value) {
        return this.ej2Instances.disable(value);
    }
    enableTab(index, value) {
        return this.ej2Instances.enableTab(index, value);
    }
    hideTab(index, value) {
        return this.ej2Instances.hideTab(index, value);
    }
    refresh() {
        return this.ej2Instances.refresh();
    }
    removeTab(index) {
        return this.ej2Instances.removeTab(index);
    }
    select(args) {
        return this.ej2Instances.select(args);
    }
};
TabComponent = __decorate$6([
    EJComponentDecorator({
        props: properties$3
    })
], TabComponent);
const TabPlugin = {
    name: 'ejs-tab',
    install(Vue$$1) {
        Vue$$1.component(TabPlugin.name, TabComponent);
        Vue$$1.component(TabItemPlugin.name, TabItemDirective);
        Vue$$1.component(TabItemsPlugin.name, TabItemsDirective);
    }
};

var __decorate$7 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const properties$4 = ['allowDragAndDrop', 'allowEditing', 'allowMultiSelection', 'animation', 'autoCheck', 'checkedNodes', 'cssClass', 'disabled', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'expandOn', 'expandedNodes', 'fields', 'fullRowNavigable', 'fullRowSelect', 'loadOnDemand', 'locale', 'nodeTemplate', 'selectedNodes', 'showCheckBox', 'sortOrder', 'actionFailure', 'created', 'dataBound', 'dataSourceChanged', 'destroyed', 'drawNode', 'keyPress', 'nodeChecked', 'nodeChecking', 'nodeClicked', 'nodeCollapsed', 'nodeCollapsing', 'nodeDragStart', 'nodeDragStop', 'nodeDragging', 'nodeDropped', 'nodeEdited', 'nodeEditing', 'nodeExpanded', 'nodeExpanding', 'nodeSelected', 'nodeSelecting'];
const modelProps$4 = [];
/**
 * Represents the EJ2 VueJS TreeView Component.
 * ```html
 * <ejs-treeview></ejs-treeview>
 * ```
 */
let TreeViewComponent = class TreeViewComponent extends ComponentBase {
    constructor() {
        super();
        this.propKeys = properties$4;
        this.models = modelProps$4;
        this.hasChildDirective = false;
        this.hasInjectedModules = false;
        this.tagMapper = {};
        this.tagNameMapper = {};
        this.ej2Instances = new TreeView({});
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
    addNodes(nodes, target, index, preventTargetExpand) {
        return this.ej2Instances.addNodes(nodes, target, index, preventTargetExpand);
    }
    beginEdit(node) {
        return this.ej2Instances.beginEdit(node);
    }
    checkAll(nodes) {
        return this.ej2Instances.checkAll(nodes);
    }
    collapseAll(nodes, level, excludeHiddenNodes) {
        return this.ej2Instances.collapseAll(nodes, level, excludeHiddenNodes);
    }
    disableNodes(nodes) {
        return this.ej2Instances.disableNodes(nodes);
    }
    enableNodes(nodes) {
        return this.ej2Instances.enableNodes(nodes);
    }
    ensureVisible(node) {
        return this.ej2Instances.ensureVisible(node);
    }
    expandAll(nodes, level, excludeHiddenNodes) {
        return this.ej2Instances.expandAll(nodes, level, excludeHiddenNodes);
    }
    getAllCheckedNodes() {
        return this.ej2Instances.getAllCheckedNodes();
    }
    getDisabledNodes() {
        return this.ej2Instances.getDisabledNodes();
    }
    getNode(node) {
        return this.ej2Instances.getNode(node);
    }
    getTreeData(node) {
        return this.ej2Instances.getTreeData(node);
    }
    moveNodes(sourceNodes, target, index, preventTargetExpand) {
        return this.ej2Instances.moveNodes(sourceNodes, target, index, preventTargetExpand);
    }
    refreshNode(target, newData) {
        return this.ej2Instances.refreshNode(target, newData);
    }
    removeNodes(nodes) {
        return this.ej2Instances.removeNodes(nodes);
    }
    uncheckAll(nodes) {
        return this.ej2Instances.uncheckAll(nodes);
    }
    updateNode(target, newText) {
        return this.ej2Instances.updateNode(target, newText);
    }
};
TreeViewComponent = __decorate$7([
    EJComponentDecorator({
        props: properties$4
    })
], TreeViewComponent);
const TreeViewPlugin = {
    name: 'ejs-treeview',
    install(Vue$$1) {
        Vue$$1.component(TreeViewPlugin.name, TreeViewComponent);
    }
};

var __decorate$8 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const properties$5 = ['animate', 'closeOnDocumentClick', 'dockSize', 'enableDock', 'enableGestures', 'enablePersistence', 'enableRtl', 'height', 'isOpen', 'locale', 'mediaQuery', 'position', 'showBackdrop', 'target', 'type', 'width', 'zIndex', 'change', 'close', 'created', 'destroyed', 'open'];
const modelProps$5 = ['isOpen'];
/**
 *  Represents the Essential JS 2 VueJS Sidebar Component.
 * ```html
 * <ejs-sidebar></ejs-sidebar>
 * ```
 */
let SidebarComponent = class SidebarComponent extends ComponentBase {
    constructor() {
        super();
        this.propKeys = properties$5;
        this.models = modelProps$5;
        this.hasChildDirective = false;
        this.hasInjectedModules = false;
        this.tagMapper = {};
        this.tagNameMapper = {};
        this.ej2Instances = new Sidebar({});
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
        else if ((eventName === 'actionBegin' && eventProp.requestType === 'dateNavigate') && this.models && (this.models.length !== 0)) {
            let key = this.models.toString().match(/currentView|selectedDate/) || [];
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
    hide(e) {
        return this.ej2Instances.hide(e);
    }
    show(e) {
        return this.ej2Instances.show(e);
    }
    toggle(e) {
        return this.ej2Instances.toggle(e);
    }
};
SidebarComponent = __decorate$8([
    EJComponentDecorator({
        props: properties$5,
        model: {
            event: 'modelchanged'
        }
    })
], SidebarComponent);
const SidebarPlugin = {
    name: 'ejs-sidebar',
    install(Vue$$1) {
        Vue$$1.component(SidebarPlugin.name, SidebarComponent);
    }
};

var __decorate$9 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let MenuItemsDirective = class MenuItemsDirective extends Vue {
    render() {
        return;
    }
};
MenuItemsDirective = __decorate$9([
    EJComponentDecorator({})
], MenuItemsDirective);
const MenuItemsPlugin = {
    name: 'e-menu-items',
    install(Vue$$1) {
        Vue$$1.component(MenuItemsPlugin.name, MenuItemsDirective);
    }
};
let MenuItemDirective = class MenuItemDirective extends Vue {
    render() {
        return;
    }
};
MenuItemDirective = __decorate$9([
    EJComponentDecorator({})
], MenuItemDirective);
const MenuItemPlugin = {
    name: 'e-',
    install(Vue$$1) {
        Vue$$1.component(MenuItemPlugin.name, MenuItemDirective);
    }
};

var __decorate$10 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const properties$6 = ['animationSettings', 'cssClass', 'enableHtmlSanitizer', 'enablePersistence', 'enableRtl', 'enableScrolling', 'fields', 'filter', 'hamburgerMode', 'items', 'locale', 'orientation', 'showItemOnClick', 'target', 'template', 'title', 'beforeClose', 'beforeItemRender', 'beforeOpen', 'created', 'onClose', 'onOpen', 'select'];
const modelProps$6 = [];
/**
 * Represents the Essential JS 2 VueJS Menu Component.
 * ```html
 * <ejs-menu :items='menuItems'></ejs-menu>
 * ```
 */
let MenuComponent = class MenuComponent extends ComponentBase {
    constructor() {
        super();
        this.propKeys = properties$6;
        this.models = modelProps$6;
        this.hasChildDirective = true;
        this.hasInjectedModules = false;
        this.tagMapper = { "e-menu-items": "e-" };
        this.tagNameMapper = { "e-menu-items": "e-items" };
        this.ej2Instances = new Menu({});
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
        return createElement('ul', this.$slots.default);
    }
    close() {
        return this.ej2Instances.close();
    }
    enableItems(items, enable, isUniqueId) {
        return this.ej2Instances.enableItems(items, enable, isUniqueId);
    }
    hideItems(items, isUniqueId) {
        return this.ej2Instances.hideItems(items, isUniqueId);
    }
    insertAfter(items, text, isUniqueId) {
        return this.ej2Instances.insertAfter(items, text, isUniqueId);
    }
    insertBefore(items, text, isUniqueId) {
        return this.ej2Instances.insertBefore(items, text, isUniqueId);
    }
    open() {
        return this.ej2Instances.open();
    }
    removeItems(items, isUniqueId) {
        return this.ej2Instances.removeItems(items, isUniqueId);
    }
    showItems(items, isUniqueId) {
        return this.ej2Instances.showItems(items, isUniqueId);
    }
};
MenuComponent = __decorate$10([
    EJComponentDecorator({
        props: properties$6
    })
], MenuComponent);
const MenuPlugin = {
    name: 'ejs-menu',
    install(Vue$$1) {
        Vue$$1.component(MenuPlugin.name, MenuComponent);
        Vue$$1.component(MenuItemPlugin.name, MenuItemDirective);
        Vue$$1.component(MenuItemsPlugin.name, MenuItemsDirective);
    }
};

export { AccordionItemsDirective, AccordionItemDirective, AccordionItemsPlugin, AccordionItemPlugin, AccordionComponent, AccordionPlugin, ItemsDirective, ItemDirective, ItemsPlugin, ItemPlugin, ToolbarComponent, ToolbarPlugin, ContextMenuComponent, ContextMenuPlugin, TabItemsDirective, TabItemDirective, TabItemsPlugin, TabItemPlugin, TabComponent, TabPlugin, TreeViewComponent, TreeViewPlugin, SidebarComponent, SidebarPlugin, MenuItemsDirective, MenuItemDirective, MenuItemsPlugin, MenuItemPlugin, MenuComponent, MenuPlugin };
export * from '@syncfusion/ej2-navigations';
//# sourceMappingURL=ej2-vue-navigations.es2015.js.map
