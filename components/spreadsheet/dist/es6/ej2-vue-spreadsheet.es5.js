import { Spreadsheet } from '@syncfusion/ej2-spreadsheet';
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
var CellsDirective = /** @__PURE__ @class */ (function (_super) {
    __extends(CellsDirective, _super);
    function CellsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CellsDirective.prototype.render = function () {
        return;
    };
    CellsDirective = __decorate([
        EJComponentDecorator({})
    ], CellsDirective);
    return CellsDirective;
}(Vue));
var CellsPlugin = {
    name: 'e-cells',
    install: function (Vue$$1) {
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
var CellDirective = /** @__PURE__ @class */ (function (_super) {
    __extends(CellDirective, _super);
    function CellDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CellDirective.prototype.render = function () {
        return;
    };
    CellDirective = __decorate([
        EJComponentDecorator({})
    ], CellDirective);
    return CellDirective;
}(Vue));
var CellPlugin = {
    name: 'e-cell',
    install: function (Vue$$1) {
        Vue$$1.component(CellPlugin.name, CellDirective);
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
var RowsDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$1(RowsDirective, _super);
    function RowsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RowsDirective.prototype.render = function () {
        return;
    };
    RowsDirective = __decorate$1([
        EJComponentDecorator({})
    ], RowsDirective);
    return RowsDirective;
}(Vue));
var RowsPlugin = {
    name: 'e-rows',
    install: function (Vue$$1) {
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
var RowDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$1(RowDirective, _super);
    function RowDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RowDirective.prototype.render = function () {
        return;
    };
    RowDirective = __decorate$1([
        EJComponentDecorator({})
    ], RowDirective);
    return RowDirective;
}(Vue));
var RowPlugin = {
    name: 'e-row',
    install: function (Vue$$1) {
        Vue$$1.component(RowPlugin.name, RowDirective);
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
var ColumnsDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$2(ColumnsDirective, _super);
    function ColumnsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ColumnsDirective.prototype.render = function () {
        return;
    };
    ColumnsDirective = __decorate$2([
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
var ColumnDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$2(ColumnDirective, _super);
    function ColumnDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ColumnDirective.prototype.render = function () {
        return;
    };
    ColumnDirective = __decorate$2([
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
var RangesDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$3(RangesDirective, _super);
    function RangesDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RangesDirective.prototype.render = function () {
        return;
    };
    RangesDirective = __decorate$3([
        EJComponentDecorator({})
    ], RangesDirective);
    return RangesDirective;
}(Vue));
var RangesPlugin = {
    name: 'e-ranges',
    install: function (Vue$$1) {
        Vue$$1.component(RangesPlugin.name, RangesDirective);
    }
};
/**
 * `e-range` directive represent a range of the VueJS Spreadsheet.
 * It must be contained in a `e-sheet` directive.
 * ```vue
 * <ejs-spreadsheet>
 *   <e-sheets>
 *    <e-sheet>
 *    <e-ranges>
 *    <e-range :dataSource='data'></e-range>
 *    </e-ranges>
 *    </e-sheet>
 *   </e-sheets>
 * </ejs-spreadsheet>
 * ```
 */
var RangeDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$3(RangeDirective, _super);
    function RangeDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RangeDirective.prototype.render = function () {
        return;
    };
    RangeDirective = __decorate$3([
        EJComponentDecorator({})
    ], RangeDirective);
    return RangeDirective;
}(Vue));
var RangePlugin = {
    name: 'e-range',
    install: function (Vue$$1) {
        Vue$$1.component(RangePlugin.name, RangeDirective);
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
var SheetsDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$4(SheetsDirective, _super);
    function SheetsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SheetsDirective.prototype.render = function () {
        return;
    };
    SheetsDirective = __decorate$4([
        EJComponentDecorator({})
    ], SheetsDirective);
    return SheetsDirective;
}(Vue));
var SheetsPlugin = {
    name: 'e-sheets',
    install: function (Vue$$1) {
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
var SheetDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$4(SheetDirective, _super);
    function SheetDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SheetDirective.prototype.render = function () {
        return;
    };
    SheetDirective = __decorate$4([
        EJComponentDecorator({})
    ], SheetDirective);
    return SheetDirective;
}(Vue));
var SheetPlugin = {
    name: 'e-sheet',
    install: function (Vue$$1) {
        Vue$$1.component(SheetPlugin.name, SheetDirective);
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
var DefinedNamesDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$5(DefinedNamesDirective, _super);
    function DefinedNamesDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DefinedNamesDirective.prototype.render = function () {
        return;
    };
    DefinedNamesDirective = __decorate$5([
        EJComponentDecorator({})
    ], DefinedNamesDirective);
    return DefinedNamesDirective;
}(Vue));
var DefinedNamesPlugin = {
    name: 'e-definednames',
    install: function (Vue$$1) {
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
var DefinedNameDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$5(DefinedNameDirective, _super);
    function DefinedNameDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DefinedNameDirective.prototype.render = function () {
        return;
    };
    DefinedNameDirective = __decorate$5([
        EJComponentDecorator({})
    ], DefinedNameDirective);
    return DefinedNameDirective;
}(Vue));
var DefinedNamePlugin = {
    name: 'e-definedname',
    install: function (Vue$$1) {
        Vue$$1.component(DefinedNamePlugin.name, DefinedNameDirective);
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
var properties = ['activeSheetIndex', 'allowCellFormatting', 'allowDataValidation', 'allowDelete', 'allowEditing', 'allowFiltering', 'allowFindAndReplace', 'allowHyperlink', 'allowInsert', 'allowMerge', 'allowNumberFormatting', 'allowOpen', 'allowResizing', 'allowSave', 'allowScrolling', 'allowSorting', 'allowUndoRedo', 'allowWrap', 'cellStyle', 'cssClass', 'definedNames', 'enableClipboard', 'enableContextMenu', 'enableKeyboardNavigation', 'enableKeyboardShortcut', 'enablePersistence', 'enableRtl', 'height', 'locale', 'openUrl', 'saveUrl', 'scrollSettings', 'selectionSettings', 'sheets', 'showFormulaBar', 'showRibbon', 'showSheetTabs', 'width', 'actionBegin', 'actionComplete', 'afterHyperlinkClick', 'afterHyperlinkCreate', 'beforeCellFormat', 'beforeCellRender', 'beforeCellSave', 'beforeDataBound', 'beforeHyperlinkClick', 'beforeHyperlinkCreate', 'beforeOpen', 'beforeSave', 'beforeSelect', 'beforeSort', 'cellEdit', 'cellEditing', 'cellSave', 'contextMenuBeforeClose', 'contextMenuBeforeOpen', 'contextMenuItemSelect', 'created', 'dataBound', 'fileMenuBeforeClose', 'fileMenuBeforeOpen', 'fileMenuItemSelect', 'openComplete', 'openFailure', 'queryCellInfo', 'saveComplete', 'select', 'sortComplete'];
var modelProps = [];
/**
 * `ejs-spreadsheet` represents the VueJS Spreadsheet Component.
 * ```vue
 * <ejs-spreadsheet></ejs-spreadsheet>
 * ```
 */
var SpreadsheetComponent = /** @__PURE__ @class */ (function (_super) {
    __extends$6(SpreadsheetComponent, _super);
    function SpreadsheetComponent() {
        var _this = _super.call(this) || this;
        _this.propKeys = properties;
        _this.models = modelProps;
        _this.hasChildDirective = true;
        _this.hasInjectedModules = true;
        _this.tagMapper = { "e-sheets": { "e-sheet": { "e-rows": { "e-row": { "e-cells": "e-cell" } }, "e-columns": "e-column", "e-ranges": "e-range" } }, "e-definednames": "e-definedname" };
        _this.tagNameMapper = { "e-ranges": "e-range", "e-definednames": "e-definedNames" };
        _this.ej2Instances = new Spreadsheet({});
        _this.bindProperties();
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        return _this;
    }
    SpreadsheetComponent.prototype.setProperties = function (prop, muteOnChange) {
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
    SpreadsheetComponent.prototype.render = function (createElement) {
        return createElement('div', this.$slots.default);
    };
    SpreadsheetComponent.prototype.addContextMenuItems = function (items, text, insertAfter, isUniqueId) {
        return this.ej2Instances.addContextMenuItems(items, text, insertAfter, isUniqueId);
    };
    SpreadsheetComponent.prototype.addCustomFunction = function (functionHandler, functionName) {
        return this.ej2Instances.addCustomFunction(functionHandler, functionName);
    };
    SpreadsheetComponent.prototype.addDataValidation = function (rules, range) {
        return this.ej2Instances.addDataValidation(rules, range);
    };
    SpreadsheetComponent.prototype.addDefinedName = function (definedName) {
        return this.ej2Instances.addDefinedName(definedName);
    };
    SpreadsheetComponent.prototype.addFileMenuItems = function (items, text, insertAfter, isUniqueId) {
        return this.ej2Instances.addFileMenuItems(items, text, insertAfter, isUniqueId);
    };
    SpreadsheetComponent.prototype.addHyperlink = function (hyperlink, address) {
        return this.ej2Instances.addHyperlink(hyperlink, address);
    };
    SpreadsheetComponent.prototype.addInvalidHighlight = function (range) {
        return this.ej2Instances.addInvalidHighlight(range);
    };
    SpreadsheetComponent.prototype.addRibbonTabs = function (items, insertBefore) {
        return this.ej2Instances.addRibbonTabs(items, insertBefore);
    };
    SpreadsheetComponent.prototype.addToolbarItems = function (tab, items, index) {
        return this.ej2Instances.addToolbarItems(tab, items, index);
    };
    SpreadsheetComponent.prototype.applyFilter = function (predicates, range) {
        return this.ej2Instances.applyFilter(predicates, range);
    };
    SpreadsheetComponent.prototype.autoFit = function (range) {
        return this.ej2Instances.autoFit(range);
    };
    SpreadsheetComponent.prototype.cellFormat = function (style, range) {
        return this.ej2Instances.cellFormat(style, range);
    };
    SpreadsheetComponent.prototype.clearFilter = function (field) {
        return this.ej2Instances.clearFilter(field);
    };
    SpreadsheetComponent.prototype.closeEdit = function () {
        return this.ej2Instances.closeEdit();
    };
    SpreadsheetComponent.prototype.computeExpression = function (formula) {
        return this.ej2Instances.computeExpression(formula);
    };
    SpreadsheetComponent.prototype.copy = function (address) {
        return this.ej2Instances.copy(address);
    };
    SpreadsheetComponent.prototype.cut = function (address) {
        return this.ej2Instances.cut(address);
    };
    SpreadsheetComponent.prototype.delete = function (startIndex, endIndex, model) {
        return this.ej2Instances.delete(startIndex, endIndex, model);
    };
    SpreadsheetComponent.prototype.enableContextMenuItems = function (items, enable, isUniqueId) {
        return this.ej2Instances.enableContextMenuItems(items, enable, isUniqueId);
    };
    SpreadsheetComponent.prototype.enableFileMenuItems = function (items, enable, isUniqueId) {
        return this.ej2Instances.enableFileMenuItems(items, enable, isUniqueId);
    };
    SpreadsheetComponent.prototype.enableRibbonTabs = function (tabs, enable) {
        return this.ej2Instances.enableRibbonTabs(tabs, enable);
    };
    SpreadsheetComponent.prototype.enableToolbarItems = function (tab, items, enable) {
        return this.ej2Instances.enableToolbarItems(tab, items, enable);
    };
    SpreadsheetComponent.prototype.endEdit = function () {
        return this.ej2Instances.endEdit();
    };
    SpreadsheetComponent.prototype.filter = function (filterOptions, range) {
        return this.ej2Instances.filter(filterOptions, range);
    };
    SpreadsheetComponent.prototype.find = function (args) {
        return this.ej2Instances.find(args);
    };
    SpreadsheetComponent.prototype.findAll = function (value, mode, isCSen, isEMatch, sheetIndex) {
        return this.ej2Instances.findAll(value, mode, isCSen, isEMatch, sheetIndex);
    };
    SpreadsheetComponent.prototype.findHandler = function (args) {
        return this.ej2Instances.findHandler(args);
    };
    SpreadsheetComponent.prototype.getData = function (address) {
        return this.ej2Instances.getData(address);
    };
    SpreadsheetComponent.prototype.getDisplayText = function (cell) {
        return this.ej2Instances.getDisplayText(cell);
    };
    SpreadsheetComponent.prototype.goTo = function (address) {
        return this.ej2Instances.goTo(address);
    };
    SpreadsheetComponent.prototype.hideFileMenuItems = function (items, hide, isUniqueId) {
        return this.ej2Instances.hideFileMenuItems(items, hide, isUniqueId);
    };
    SpreadsheetComponent.prototype.hideRibbonTabs = function (tabs, hide) {
        return this.ej2Instances.hideRibbonTabs(tabs, hide);
    };
    SpreadsheetComponent.prototype.hideSpinner = function () {
        return this.ej2Instances.hideSpinner();
    };
    SpreadsheetComponent.prototype.hideToolbarItems = function (tab, indexes, hide) {
        return this.ej2Instances.hideToolbarItems(tab, indexes, hide);
    };
    SpreadsheetComponent.prototype.insertColumn = function (startColumn, endColumn) {
        return this.ej2Instances.insertColumn(startColumn, endColumn);
    };
    SpreadsheetComponent.prototype.insertRow = function (startRow, endRow) {
        return this.ej2Instances.insertRow(startRow, endRow);
    };
    SpreadsheetComponent.prototype.insertSheet = function (startSheet, endSheet) {
        return this.ej2Instances.insertSheet(startSheet, endSheet);
    };
    SpreadsheetComponent.prototype.lockCells = function (range, isLocked) {
        return this.ej2Instances.lockCells(range, isLocked);
    };
    SpreadsheetComponent.prototype.merge = function (range, type) {
        return this.ej2Instances.merge(range, type);
    };
    SpreadsheetComponent.prototype.numberFormat = function (format, range) {
        return this.ej2Instances.numberFormat(format, range);
    };
    SpreadsheetComponent.prototype.open = function (options) {
        return this.ej2Instances.open(options);
    };
    SpreadsheetComponent.prototype.openFromJson = function (options) {
        return this.ej2Instances.openFromJson(options);
    };
    SpreadsheetComponent.prototype.paste = function (address, type) {
        return this.ej2Instances.paste(address, type);
    };
    SpreadsheetComponent.prototype.protectSheet = function (sheetIndex, protectSettings) {
        return this.ej2Instances.protectSheet(sheetIndex, protectSettings);
    };
    SpreadsheetComponent.prototype.redo = function () {
        return this.ej2Instances.redo();
    };
    SpreadsheetComponent.prototype.removeContextMenuItems = function (items, isUniqueId) {
        return this.ej2Instances.removeContextMenuItems(items, isUniqueId);
    };
    SpreadsheetComponent.prototype.removeDataValidation = function (range) {
        return this.ej2Instances.removeDataValidation(range);
    };
    SpreadsheetComponent.prototype.removeDefinedName = function (definedName, scope) {
        return this.ej2Instances.removeDefinedName(definedName, scope);
    };
    SpreadsheetComponent.prototype.removeHyperlink = function (range) {
        return this.ej2Instances.removeHyperlink(range);
    };
    SpreadsheetComponent.prototype.removeInvalidHighlight = function (range) {
        return this.ej2Instances.removeInvalidHighlight(range);
    };
    SpreadsheetComponent.prototype.replace = function (args) {
        return this.ej2Instances.replace(args);
    };
    SpreadsheetComponent.prototype.replaceHandler = function (args) {
        return this.ej2Instances.replaceHandler(args);
    };
    SpreadsheetComponent.prototype.resize = function () {
        return this.ej2Instances.resize();
    };
    SpreadsheetComponent.prototype.save = function (saveOptions) {
        return this.ej2Instances.save(saveOptions);
    };
    SpreadsheetComponent.prototype.saveAsJson = function () {
        return this.ej2Instances.saveAsJson();
    };
    SpreadsheetComponent.prototype.selectRange = function (address) {
        return this.ej2Instances.selectRange(address);
    };
    SpreadsheetComponent.prototype.setBorder = function (style, range, type) {
        return this.ej2Instances.setBorder(style, range, type);
    };
    SpreadsheetComponent.prototype.setColWidth = function (width, colIndex, sheetIndex) {
        return this.ej2Instances.setColWidth(width, colIndex, sheetIndex);
    };
    SpreadsheetComponent.prototype.setRowHeight = function (height, rowIndex, sheetIndex) {
        return this.ej2Instances.setRowHeight(height, rowIndex, sheetIndex);
    };
    SpreadsheetComponent.prototype.showSpinner = function () {
        return this.ej2Instances.showSpinner();
    };
    SpreadsheetComponent.prototype.sort = function (sortOptions, range) {
        return this.ej2Instances.sort(sortOptions, range);
    };
    SpreadsheetComponent.prototype.startEdit = function () {
        return this.ej2Instances.startEdit();
    };
    SpreadsheetComponent.prototype.undo = function () {
        return this.ej2Instances.undo();
    };
    SpreadsheetComponent.prototype.updateAction = function (options) {
        return this.ej2Instances.updateAction(options);
    };
    SpreadsheetComponent.prototype.updateCell = function (cell, address) {
        return this.ej2Instances.updateCell(cell, address);
    };
    SpreadsheetComponent.prototype.updateUndoRedoCollection = function (args) {
        return this.ej2Instances.updateUndoRedoCollection(args);
    };
    SpreadsheetComponent.prototype.wrap = function (address, wrap) {
        return this.ej2Instances.wrap(address, wrap);
    };
    SpreadsheetComponent = __decorate$6([
        EJComponentDecorator({
            props: properties
        })
    ], SpreadsheetComponent);
    return SpreadsheetComponent;
}(ComponentBase));
var SpreadsheetPlugin = {
    name: 'ejs-spreadsheet',
    install: function (Vue$$1) {
        Vue$$1.component(SpreadsheetPlugin.name, SpreadsheetComponent);
        Vue$$1.component(SheetPlugin.name, SheetDirective);
        Vue$$1.component(SheetsPlugin.name, SheetsDirective);
        Vue$$1.component(RowPlugin.name, RowDirective);
        Vue$$1.component(RowsPlugin.name, RowsDirective);
        Vue$$1.component(CellPlugin.name, CellDirective);
        Vue$$1.component(CellsPlugin.name, CellsDirective);
        Vue$$1.component(ColumnPlugin.name, ColumnDirective);
        Vue$$1.component(ColumnsPlugin.name, ColumnsDirective);
        Vue$$1.component(RangePlugin.name, RangeDirective);
        Vue$$1.component(RangesPlugin.name, RangesDirective);
        Vue$$1.component(DefinedNamePlugin.name, DefinedNameDirective);
        Vue$$1.component(DefinedNamesPlugin.name, DefinedNamesDirective);
    }
};

export { CellsDirective, CellDirective, CellsPlugin, CellPlugin, RowsDirective, RowDirective, RowsPlugin, RowPlugin, ColumnsDirective, ColumnDirective, ColumnsPlugin, ColumnPlugin, RangesDirective, RangeDirective, RangesPlugin, RangePlugin, SheetsDirective, SheetDirective, SheetsPlugin, SheetPlugin, DefinedNamesDirective, DefinedNameDirective, DefinedNamesPlugin, DefinedNamePlugin, SpreadsheetComponent, SpreadsheetPlugin };
export * from '@syncfusion/ej2-spreadsheet';
//# sourceMappingURL=ej2-vue-spreadsheet.es5.js.map
