import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';
import { Spreadsheet } from '@syncfusion/ej2-spreadsheet';
import { CellsDirective, CellDirective, CellsPlugin, CellPlugin } from './cells.directive'
import { RowsDirective, RowDirective, RowsPlugin, RowPlugin } from './rows.directive'
import { ColumnsDirective, ColumnDirective, ColumnsPlugin, ColumnPlugin } from './columns.directive'
import { RangeSettingsDirective, RangeSettingDirective, RangeSettingsPlugin, RangeSettingPlugin } from './rangesettings.directive'
import { SheetsDirective, SheetDirective, SheetsPlugin, SheetPlugin } from './sheets.directive'
import { DefinedNamesDirective, DefinedNameDirective, DefinedNamesPlugin, DefinedNamePlugin } from './definednames.directive'


export const properties: string[] = ['activeSheetTab', 'allowCellFormatting', 'allowEditing', 'allowNumberFormatting', 'allowOpen', 'allowResizing', 'allowSave', 'allowScrolling', 'allowSorting', 'cellStyle', 'cssClass', 'definedNames', 'enableClipboard', 'enableContextMenu', 'enableKeyboardNavigation', 'enableKeyboardShortcut', 'enablePersistence', 'enableRtl', 'height', 'locale', 'openUrl', 'saveUrl', 'scrollSettings', 'selectionSettings', 'sheets', 'showFormulaBar', 'showRibbon', 'showSheetTabs', 'width', 'beforeCellFormat', 'beforeCellRender', 'beforeDataBound', 'beforeOpen', 'beforeSave', 'beforeSelect', 'beforeSort', 'cellEdit', 'cellEditing', 'cellSave', 'contextMenuBeforeClose', 'contextMenuBeforeOpen', 'contextMenuItemSelect', 'created', 'dataBound', 'fileItemSelect', 'fileMenuBeforeClose', 'fileMenuBeforeOpen', 'openFailure', 'saveComplete', 'select', 'sortComplete'];
export const modelProps: string[] = [];

/**
 * `ejs-spreadsheet` represents the VueJS Spreadsheet Component.
 * ```vue
 * <ejs-spreadsheet></ejs-spreadsheet>
 * ```
 */
@EJComponentDecorator({
    props: properties
})
export class SpreadsheetComponent extends ComponentBase {
    
    public ej2Instances: any;
    public propKeys: string[] = properties;
    public models: string[] = modelProps;
    public hasChildDirective: boolean = true;
    protected hasInjectedModules: boolean = true;
    public tagMapper: { [key: string]: Object } = {"e-sheets":{"e-sheet":{"e-rows":{"e-row":{"e-cells":"e-cell"}},"e-columns":"e-column","e-rangesettings":"e-rangesetting"}},"e-definednames":"e-definedname"};
    public tagNameMapper: Object = {"e-rangesettings":"e-rangeSettings","e-definednames":"e-definedNames"};
    
    constructor() {
        super();
        this.ej2Instances = new Spreadsheet({});
        this.bindProperties();
        this.ej2Instances._setProperties = this.ej2Instances.setProperties;
        this.ej2Instances.setProperties = this.setProperties;
    }
    public setProperties(prop: any, muteOnChange: boolean): void {
        if (this.ej2Instances && this.ej2Instances._setProperties) {
            this.ej2Instances._setProperties(prop, muteOnChange);
        }
        if (prop && this.models && this.models.length) {
            Object.keys(prop).map((key: string): void => {
                this.models.map((model: string): void => {
                    if ((key === model) && !(/datasource/i.test(key))) {
                        this.$emit('update:' + key, prop[key]);
                    }
                });
            });
        }
    }

    public render(createElement: any) {
        return createElement('div', (this as any).$slots.default);
    }
    
    public addContextMenuItems(items: Object[], text: string, insertAfter: boolean, isUniqueId?: boolean): void {
        return this.ej2Instances.addContextMenuItems(items, text, insertAfter, isUniqueId);
    }

    public addDefinedName(definedName: Object): boolean {
        return this.ej2Instances.addDefinedName(definedName);
    }

    public cellFormat(style: Object, range?: string): void {
        return this.ej2Instances.cellFormat(style, range);
    }

    public closeEdit(): void {
        return this.ej2Instances.closeEdit();
    }

    public copy(address?: string): void {
        return this.ej2Instances.copy(address);
    }

    public cut(address?: string): void {
        return this.ej2Instances.cut(address);
    }

    public enableContextMenuItems(items: string[], enable: boolean, isUniqueId?: boolean): void {
        return this.ej2Instances.enableContextMenuItems(items, enable, isUniqueId);
    }

    public endEdit(): void {
        return this.ej2Instances.endEdit();
    }

    public getData(address: string): Object {
        return this.ej2Instances.getData(address);
    }

    public goTo(address: string): void {
        return this.ej2Instances.goTo(address);
    }

    public hideSpinner(): void {
        return this.ej2Instances.hideSpinner();
    }

    public numberFormat(format: string, range?: string): void {
        return this.ej2Instances.numberFormat(format, range);
    }

    public open(options: Object): void {
        return this.ej2Instances.open(options);
    }

    public paste(address?: string, type?: Object): void {
        return this.ej2Instances.paste(address, type);
    }

    public removeContextMenuItems(items: string[], isUniqueId?: boolean): void {
        return this.ej2Instances.removeContextMenuItems(items, isUniqueId);
    }

    public removeDefinedName(definedName: string, scope: string): boolean {
        return this.ej2Instances.removeDefinedName(definedName, scope);
    }

    public resize(): void {
        return this.ej2Instances.resize();
    }

    public save(saveOptions: Object): void {
        return this.ej2Instances.save(saveOptions);
    }

    public selectRange(address: string): void {
        return this.ej2Instances.selectRange(address);
    }

    public showSpinner(): void {
        return this.ej2Instances.showSpinner();
    }

    public sort(sortOptions?: Object, range?: string): Object {
        return this.ej2Instances.sort(sortOptions, range);
    }

    public startEdit(): void {
        return this.ej2Instances.startEdit();
    }

    public updateCell(cell: Object, address?: string): void {
        return this.ej2Instances.updateCell(cell, address);
    }
}

export const SpreadsheetPlugin = {
    name: 'ejs-spreadsheet',
    install(Vue: any) {
        Vue.component(SpreadsheetPlugin.name, SpreadsheetComponent);
        Vue.component(SheetPlugin.name, SheetDirective);
        Vue.component(SheetsPlugin.name, SheetsDirective);
        Vue.component(RowPlugin.name, RowDirective);
        Vue.component(RowsPlugin.name, RowsDirective);
        Vue.component(CellPlugin.name, CellDirective);
        Vue.component(CellsPlugin.name, CellsDirective);
        Vue.component(ColumnPlugin.name, ColumnDirective);
        Vue.component(ColumnsPlugin.name, ColumnsDirective);
        Vue.component(RangeSettingPlugin.name, RangeSettingDirective);
        Vue.component(RangeSettingsPlugin.name, RangeSettingsDirective);
        Vue.component(DefinedNamePlugin.name, DefinedNameDirective);
        Vue.component(DefinedNamesPlugin.name, DefinedNamesDirective);

    }
}
