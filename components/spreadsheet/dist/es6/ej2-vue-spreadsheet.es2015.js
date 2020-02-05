import { Spreadsheet } from '@syncfusion/ej2-spreadsheet';
import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let CellsDirective = class CellsDirective extends Vue {
    render() {
        return;
    }
};
CellsDirective = __decorate([
    EJComponentDecorator({})
], CellsDirective);
const CellsPlugin = {
    name: 'e-cells',
    install(Vue$$1) {
        Vue$$1.component(CellsPlugin.name, CellsDirective);
    }
};
/**
 * `e-cell` directive represent a cell of the VueJS Spreadsheet.
 * It must be contained in a `e-row` directive.
 * ```vue
 * <ejs-spreadsheet>
 *   <e-sheets>
 *    <e-sheet>
 *    <e-rows>
 *    <e-row>
 *    <e-cells>
 *    <e-cell value='A1'></e-cell>
 *    </e-cells>
 *    </e-row>
 *    </e-rows>
 *    </e-sheet>
 *   </e-sheets>
 * </ejs-spreadsheet>
 * ```
 */
let CellDirective = class CellDirective extends Vue {
    render() {
        return;
    }
};
CellDirective = __decorate([
    EJComponentDecorator({})
], CellDirective);
const CellPlugin = {
    name: 'e-cell',
    install(Vue$$1) {
        Vue$$1.component(CellPlugin.name, CellDirective);
    }
};

var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let RowsDirective = class RowsDirective extends Vue {
    render() {
        return;
    }
};
RowsDirective = __decorate$1([
    EJComponentDecorator({})
], RowsDirective);
const RowsPlugin = {
    name: 'e-rows',
    install(Vue$$1) {
        Vue$$1.component(RowsPlugin.name, RowsDirective);
    }
};
/**
 * `e-row` directive represent a row of the VueJS Spreadsheet.
 * It must be contained in a `e-sheet` directive.
 * ```vue
 * <ejs-spreadsheet>
 *   <e-sheets>
 *    <e-sheet>
 *    <e-rows>
 *    <e-row></e-row>
 *    </e-rows>
 *    </e-sheet>
 *   </e-sheets>
 * </ejs-spreadsheet>
 * ```
 */
let RowDirective = class RowDirective extends Vue {
    render() {
        return;
    }
};
RowDirective = __decorate$1([
    EJComponentDecorator({})
], RowDirective);
const RowPlugin = {
    name: 'e-row',
    install(Vue$$1) {
        Vue$$1.component(RowPlugin.name, RowDirective);
    }
};

var __decorate$2 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
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
ColumnsDirective = __decorate$2([
    EJComponentDecorator({})
], ColumnsDirective);
const ColumnsPlugin = {
    name: 'e-columns',
    install(Vue$$1) {
        Vue$$1.component(ColumnsPlugin.name, ColumnsDirective);
    }
};
/**
 * `e-column` directive represent a column of the VueJS Spreadsheet.
 * It must be contained in a `e-sheet` directive.
 * ```vue
 * <ejs-spreadsheet>
 *   <e-sheets>
 *    <e-sheet>
 *    <e-columns>
 *    <e-column></e-column>
 *    </e-columns>
 *    </e-sheet>
 *   </e-sheets>
 * </ejs-spreadsheet>
 * ```
 */
let ColumnDirective = class ColumnDirective extends Vue {
    render() {
        return;
    }
};
ColumnDirective = __decorate$2([
    EJComponentDecorator({})
], ColumnDirective);
const ColumnPlugin = {
    name: 'e-column',
    install(Vue$$1) {
        Vue$$1.component(ColumnPlugin.name, ColumnDirective);
    }
};

var __decorate$3 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let RangeSettingsDirective = class RangeSettingsDirective extends Vue {
    render() {
        return;
    }
};
RangeSettingsDirective = __decorate$3([
    EJComponentDecorator({})
], RangeSettingsDirective);
const RangeSettingsPlugin = {
    name: 'e-rangesettings',
    install(Vue$$1) {
        Vue$$1.component(RangeSettingsPlugin.name, RangeSettingsDirective);
    }
};
/**
 * `e-rangesetting` directive represent a range setting of the VueJS Spreadsheet.
 * It must be contained in a `e-sheet` directive.
 * ```vue
 * <ejs-spreadsheet>
 *   <e-sheets>
 *    <e-sheet>
 *    <e-rangesettings>
 *    <e-rangesetting :dataSource='data'></e-rangesetting>
 *    </e-rangesettings>
 *    </e-sheet>
 *   </e-sheets>
 * </ejs-spreadsheet>
 * ```
 */
let RangeSettingDirective = class RangeSettingDirective extends Vue {
    render() {
        return;
    }
};
RangeSettingDirective = __decorate$3([
    EJComponentDecorator({})
], RangeSettingDirective);
const RangeSettingPlugin = {
    name: 'e-rangesetting',
    install(Vue$$1) {
        Vue$$1.component(RangeSettingPlugin.name, RangeSettingDirective);
    }
};

var __decorate$4 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let SheetsDirective = class SheetsDirective extends Vue {
    render() {
        return;
    }
};
SheetsDirective = __decorate$4([
    EJComponentDecorator({})
], SheetsDirective);
const SheetsPlugin = {
    name: 'e-sheets',
    install(Vue$$1) {
        Vue$$1.component(SheetsPlugin.name, SheetsDirective);
    }
};
/**
 * `e-sheet` directive represent a sheet of the VueJS Spreadsheet.
 * It must be contained in a Spreadsheet component(`ejs-spreadsheet`).
 * ```vue
 * <ejs-spreadsheet>
 *   <e-sheets>
 *    <e-sheet></e-sheet>
 *    <e-sheet></e-sheet>
 *   </e-sheets>
 * </ejs-spreadsheet>
 * ```
 */
let SheetDirective = class SheetDirective extends Vue {
    render() {
        return;
    }
};
SheetDirective = __decorate$4([
    EJComponentDecorator({})
], SheetDirective);
const SheetPlugin = {
    name: 'e-sheet',
    install(Vue$$1) {
        Vue$$1.component(SheetPlugin.name, SheetDirective);
    }
};

var __decorate$5 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let DefinedNamesDirective = class DefinedNamesDirective extends Vue {
    render() {
        return;
    }
};
DefinedNamesDirective = __decorate$5([
    EJComponentDecorator({})
], DefinedNamesDirective);
const DefinedNamesPlugin = {
    name: 'e-definednames',
    install(Vue$$1) {
        Vue$$1.component(DefinedNamesPlugin.name, DefinedNamesDirective);
    }
};
/**
 * `e-definedname` directive represent a defined name of the VueJS Spreadsheet.
 * It must be contained in a Spreadsheet component(`ejs-spreadsheet`).
 * ```vue
 * <ejs-spreadsheet>
 *   <e-definednames>
 *    <e-definedname></e-definedname>
 *    <e-definedname></e-definedname>
 *   </e-definednames>
 * </ejs-spreadsheet>
 * ```
 */
let DefinedNameDirective = class DefinedNameDirective extends Vue {
    render() {
        return;
    }
};
DefinedNameDirective = __decorate$5([
    EJComponentDecorator({})
], DefinedNameDirective);
const DefinedNamePlugin = {
    name: 'e-definedname',
    install(Vue$$1) {
        Vue$$1.component(DefinedNamePlugin.name, DefinedNameDirective);
    }
};

var __decorate$6 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const properties = ['activeSheetTab', 'allowCellFormatting', 'allowEditing', 'allowFiltering', 'allowHyperlink', 'allowNumberFormatting', 'allowOpen', 'allowResizing', 'allowSave', 'allowScrolling', 'allowSorting', 'allowUndoRedo', 'cellStyle', 'cssClass', 'definedNames', 'enableClipboard', 'enableContextMenu', 'enableKeyboardNavigation', 'enableKeyboardShortcut', 'enablePersistence', 'enableRtl', 'height', 'locale', 'openUrl', 'saveUrl', 'scrollSettings', 'selectionSettings', 'sheets', 'showFormulaBar', 'showRibbon', 'showSheetTabs', 'width', 'actionBegin', 'actionComplete', 'afterHyperlinkClick', 'afterHyperlinkCreate', 'beforeCellFormat', 'beforeCellRender', 'beforeDataBound', 'beforeHyperlinkClick', 'beforeHyperlinkCreate', 'beforeOpen', 'beforeSave', 'beforeSelect', 'beforeSort', 'cellEdit', 'cellEditing', 'cellSave', 'contextMenuBeforeClose', 'contextMenuBeforeOpen', 'contextMenuItemSelect', 'created', 'dataBound', 'fileItemSelect', 'fileMenuBeforeClose', 'fileMenuBeforeOpen', 'openComplete', 'openFailure', 'saveComplete', 'select', 'sortComplete'];
const modelProps = [];
/**
 * `ejs-spreadsheet` represents the VueJS Spreadsheet Component.
 * ```vue
 * <ejs-spreadsheet></ejs-spreadsheet>
 * ```
 */
let SpreadsheetComponent = class SpreadsheetComponent extends ComponentBase {
    constructor() {
        super();
        this.propKeys = properties;
        this.models = modelProps;
        this.hasChildDirective = true;
        this.hasInjectedModules = true;
        this.tagMapper = { "e-sheets": { "e-sheet": { "e-rows": { "e-row": { "e-cells": "e-cell" } }, "e-columns": "e-column", "e-rangesettings": "e-rangesetting" } }, "e-definednames": "e-definedname" };
        this.tagNameMapper = { "e-rangesettings": "e-rangeSettings", "e-definednames": "e-definedNames" };
        this.ej2Instances = new Spreadsheet({});
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
    addContextMenuItems(items, text, insertAfter, isUniqueId) {
        return this.ej2Instances.addContextMenuItems(items, text, insertAfter, isUniqueId);
    }
    addCustomFunction(functionHandler, functionName) {
        return this.ej2Instances.addCustomFunction(functionHandler, functionName);
    }
    addDefinedName(definedName) {
        return this.ej2Instances.addDefinedName(definedName);
    }
    addFileMenuItems(items, text, insertAfter, isUniqueId) {
        return this.ej2Instances.addFileMenuItems(items, text, insertAfter, isUniqueId);
    }
    addHyperlink(hyperlink, address) {
        return this.ej2Instances.addHyperlink(hyperlink, address);
    }
    addRibbonTabs(items, insertBefore) {
        return this.ej2Instances.addRibbonTabs(items, insertBefore);
    }
    addToolbarItems(tab, items, index) {
        return this.ej2Instances.addToolbarItems(tab, items, index);
    }
    applyFilter(predicates, range) {
        return this.ej2Instances.applyFilter(predicates, range);
    }
    autoFit(range) {
        return this.ej2Instances.autoFit(range);
    }
    cellFormat(style, range) {
        return this.ej2Instances.cellFormat(style, range);
    }
    clearFilter(field) {
        return this.ej2Instances.clearFilter(field);
    }
    closeEdit() {
        return this.ej2Instances.closeEdit();
    }
    copy(address) {
        return this.ej2Instances.copy(address);
    }
    cut(address) {
        return this.ej2Instances.cut(address);
    }
    enableContextMenuItems(items, enable, isUniqueId) {
        return this.ej2Instances.enableContextMenuItems(items, enable, isUniqueId);
    }
    enableFileMenuItems(items, enable, isUniqueId) {
        return this.ej2Instances.enableFileMenuItems(items, enable, isUniqueId);
    }
    enableRibbonTabs(tabs, enable) {
        return this.ej2Instances.enableRibbonTabs(tabs, enable);
    }
    enableToolbarItems(tab, items, enable) {
        return this.ej2Instances.enableToolbarItems(tab, items, enable);
    }
    endEdit() {
        return this.ej2Instances.endEdit();
    }
    filter(filterOptions, range) {
        return this.ej2Instances.filter(filterOptions, range);
    }
    getData(address) {
        return this.ej2Instances.getData(address);
    }
    getDisplayText(cell) {
        return this.ej2Instances.getDisplayText(cell);
    }
    goTo(address) {
        return this.ej2Instances.goTo(address);
    }
    hideFileMenuItems(items, hide, isUniqueId) {
        return this.ej2Instances.hideFileMenuItems(items, hide, isUniqueId);
    }
    hideRibbonTabs(tabs, hide) {
        return this.ej2Instances.hideRibbonTabs(tabs, hide);
    }
    hideSpinner() {
        return this.ej2Instances.hideSpinner();
    }
    hideToolbarItems(tab, indexes, hide) {
        return this.ej2Instances.hideToolbarItems(tab, indexes, hide);
    }
    numberFormat(format, range) {
        return this.ej2Instances.numberFormat(format, range);
    }
    open(options) {
        return this.ej2Instances.open(options);
    }
    openFromJson(options) {
        return this.ej2Instances.openFromJson(options);
    }
    paste(address, type) {
        return this.ej2Instances.paste(address, type);
    }
    redo() {
        return this.ej2Instances.redo();
    }
    removeContextMenuItems(items, isUniqueId) {
        return this.ej2Instances.removeContextMenuItems(items, isUniqueId);
    }
    removeDefinedName(definedName, scope) {
        return this.ej2Instances.removeDefinedName(definedName, scope);
    }
    removeHyperlink(range) {
        return this.ej2Instances.removeHyperlink(range);
    }
    resize() {
        return this.ej2Instances.resize();
    }
    save(saveOptions) {
        return this.ej2Instances.save(saveOptions);
    }
    saveAsJson() {
        return this.ej2Instances.saveAsJson();
    }
    selectRange(address) {
        return this.ej2Instances.selectRange(address);
    }
    setColWidth(width, colIndex, sheetIndex) {
        return this.ej2Instances.setColWidth(width, colIndex, sheetIndex);
    }
    setRowHeight(height, rowIndex, sheetIndex) {
        return this.ej2Instances.setRowHeight(height, rowIndex, sheetIndex);
    }
    showSpinner() {
        return this.ej2Instances.showSpinner();
    }
    sort(sortOptions, range) {
        return this.ej2Instances.sort(sortOptions, range);
    }
    startEdit() {
        return this.ej2Instances.startEdit();
    }
    undo() {
        return this.ej2Instances.undo();
    }
    updateAction(options) {
        return this.ej2Instances.updateAction(options);
    }
    updateCell(cell, address) {
        return this.ej2Instances.updateCell(cell, address);
    }
    updateUndoRedoCollection(args) {
        return this.ej2Instances.updateUndoRedoCollection(args);
    }
};
SpreadsheetComponent = __decorate$6([
    EJComponentDecorator({
        props: properties
    })
], SpreadsheetComponent);
const SpreadsheetPlugin = {
    name: 'ejs-spreadsheet',
    install(Vue$$1) {
        Vue$$1.component(SpreadsheetPlugin.name, SpreadsheetComponent);
        Vue$$1.component(SheetPlugin.name, SheetDirective);
        Vue$$1.component(SheetsPlugin.name, SheetsDirective);
        Vue$$1.component(RowPlugin.name, RowDirective);
        Vue$$1.component(RowsPlugin.name, RowsDirective);
        Vue$$1.component(CellPlugin.name, CellDirective);
        Vue$$1.component(CellsPlugin.name, CellsDirective);
        Vue$$1.component(ColumnPlugin.name, ColumnDirective);
        Vue$$1.component(ColumnsPlugin.name, ColumnsDirective);
        Vue$$1.component(RangeSettingPlugin.name, RangeSettingDirective);
        Vue$$1.component(RangeSettingsPlugin.name, RangeSettingsDirective);
        Vue$$1.component(DefinedNamePlugin.name, DefinedNameDirective);
        Vue$$1.component(DefinedNamesPlugin.name, DefinedNamesDirective);
    }
};

export { CellsDirective, CellDirective, CellsPlugin, CellPlugin, RowsDirective, RowDirective, RowsPlugin, RowPlugin, ColumnsDirective, ColumnDirective, ColumnsPlugin, ColumnPlugin, RangeSettingsDirective, RangeSettingDirective, RangeSettingsPlugin, RangeSettingPlugin, SheetsDirective, SheetDirective, SheetsPlugin, SheetPlugin, DefinedNamesDirective, DefinedNameDirective, DefinedNamesPlugin, DefinedNamePlugin, SpreadsheetComponent, SpreadsheetPlugin };
export * from '@syncfusion/ej2-spreadsheet';
//# sourceMappingURL=ej2-vue-spreadsheet.es2015.js.map
