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
var RangeSettingsDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$3(RangeSettingsDirective, _super);
    function RangeSettingsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RangeSettingsDirective.prototype.render = function () {
        return;
    };
    RangeSettingsDirective = __decorate$3([
        EJComponentDecorator({})
    ], RangeSettingsDirective);
    return RangeSettingsDirective;
}(Vue));
var RangeSettingsPlugin = {
    name: 'e-rangesettings',
    install: function (Vue$$1) {
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
var RangeSettingDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$3(RangeSettingDirective, _super);
    function RangeSettingDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RangeSettingDirective.prototype.render = function () {
        return;
    };
    RangeSettingDirective = __decorate$3([
        EJComponentDecorator({})
    ], RangeSettingDirective);
    return RangeSettingDirective;
}(Vue));
var RangeSettingPlugin = {
    name: 'e-rangesetting',
    install: function (Vue$$1) {
        Vue$$1.component(RangeSettingPlugin.name, RangeSettingDirective);
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
var properties = ['activeSheetTab', 'allowCellFormatting', 'allowEditing', 'allowNumberFormatting', 'allowOpen', 'allowResizing', 'allowSave', 'allowScrolling', 'allowSorting', 'cellStyle', 'cssClass', 'definedNames', 'enableClipboard', 'enableContextMenu', 'enableKeyboardNavigation', 'enableKeyboardShortcut', 'enablePersistence', 'enableRtl', 'height', 'locale', 'openUrl', 'saveUrl', 'scrollSettings', 'selectionSettings', 'sheets', 'showFormulaBar', 'showRibbon', 'showSheetTabs', 'width', 'beforeCellFormat', 'beforeCellRender', 'beforeDataBound', 'beforeOpen', 'beforeSave', 'beforeSelect', 'beforeSort', 'cellEdit', 'cellEditing', 'cellSave', 'contextMenuBeforeClose', 'contextMenuBeforeOpen', 'contextMenuItemSelect', 'created', 'dataBound', 'fileItemSelect', 'fileMenuBeforeClose', 'fileMenuBeforeOpen', 'openFailure', 'saveComplete', 'select', 'sortComplete'];
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
        _this.tagMapper = { "e-sheets": { "e-sheet": { "e-rows": { "e-row": { "e-cells": "e-cell" } }, "e-columns": "e-column", "e-rangesettings": "e-rangesetting" } }, "e-definednames": "e-definedname" };
        _this.tagNameMapper = { "e-rangesettings": "e-rangeSettings", "e-definednames": "e-definedNames" };
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
    SpreadsheetComponent.prototype.addDefinedName = function (definedName) {
        return this.ej2Instances.addDefinedName(definedName);
    };
    SpreadsheetComponent.prototype.cellFormat = function (style, range) {
        return this.ej2Instances.cellFormat(style, range);
    };
    SpreadsheetComponent.prototype.closeEdit = function () {
        return this.ej2Instances.closeEdit();
    };
    SpreadsheetComponent.prototype.copy = function (address) {
        return this.ej2Instances.copy(address);
    };
    SpreadsheetComponent.prototype.cut = function (address) {
        return this.ej2Instances.cut(address);
    };
    SpreadsheetComponent.prototype.enableContextMenuItems = function (items, enable, isUniqueId) {
        return this.ej2Instances.enableContextMenuItems(items, enable, isUniqueId);
    };
    SpreadsheetComponent.prototype.endEdit = function () {
        return this.ej2Instances.endEdit();
    };
    SpreadsheetComponent.prototype.getData = function (address) {
        return this.ej2Instances.getData(address);
    };
    SpreadsheetComponent.prototype.goTo = function (address) {
        return this.ej2Instances.goTo(address);
    };
    SpreadsheetComponent.prototype.hideSpinner = function () {
        return this.ej2Instances.hideSpinner();
    };
    SpreadsheetComponent.prototype.numberFormat = function (format, range) {
        return this.ej2Instances.numberFormat(format, range);
    };
    SpreadsheetComponent.prototype.open = function (options) {
        return this.ej2Instances.open(options);
    };
    SpreadsheetComponent.prototype.paste = function (address, type) {
        return this.ej2Instances.paste(address, type);
    };
    SpreadsheetComponent.prototype.removeContextMenuItems = function (items, isUniqueId) {
        return this.ej2Instances.removeContextMenuItems(items, isUniqueId);
    };
    SpreadsheetComponent.prototype.removeDefinedName = function (definedName, scope) {
        return this.ej2Instances.removeDefinedName(definedName, scope);
    };
    SpreadsheetComponent.prototype.resize = function () {
        return this.ej2Instances.resize();
    };
    SpreadsheetComponent.prototype.save = function (saveOptions) {
        return this.ej2Instances.save(saveOptions);
    };
    SpreadsheetComponent.prototype.selectRange = function (address) {
        return this.ej2Instances.selectRange(address);
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
        Vue$$1.component(RangeSettingPlugin.name, RangeSettingDirective);
        Vue$$1.component(RangeSettingsPlugin.name, RangeSettingsDirective);
        Vue$$1.component(DefinedNamePlugin.name, DefinedNameDirective);
        Vue$$1.component(DefinedNamesPlugin.name, DefinedNamesDirective);
    }
};

export { CellsDirective, CellDirective, CellsPlugin, CellPlugin, RowsDirective, RowDirective, RowsPlugin, RowPlugin, ColumnsDirective, ColumnDirective, ColumnsPlugin, ColumnPlugin, RangeSettingsDirective, RangeSettingDirective, RangeSettingsPlugin, RangeSettingPlugin, SheetsDirective, SheetDirective, SheetsPlugin, SheetPlugin, DefinedNamesDirective, DefinedNameDirective, DefinedNamesPlugin, DefinedNamePlugin, SpreadsheetComponent, SpreadsheetPlugin };
export * from '@syncfusion/ej2-spreadsheet';
//# sourceMappingURL=ej2-vue-spreadsheet.es5.js.map
