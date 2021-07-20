import { Options } from 'vue-class-component';
import { ComponentBase, EJComponentDecorator, getProps, allVue, gh } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined } from '@syncfusion/ej2-base';

import { Spreadsheet } from '@syncfusion/ej2-spreadsheet';
import { ImagesDirective, ImageDirective, ImagesPlugin, ImagePlugin } from './image.directive'
import { ChartsDirective, ChartDirective, ChartsPlugin, ChartPlugin } from './chart.directive'
import { CellsDirective, CellDirective, CellsPlugin, CellPlugin } from './cells.directive'
import { RowsDirective, RowDirective, RowsPlugin, RowPlugin } from './rows.directive'
import { ColumnsDirective, ColumnDirective, ColumnsPlugin, ColumnPlugin } from './columns.directive'
import { RangesDirective, RangeDirective, RangesPlugin, RangePlugin } from './ranges.directive'
import { ConditionalFormatsDirective, ConditionalFormatDirective, ConditionalFormatsPlugin, ConditionalFormatPlugin } from './conditionalformats.directive'
import { SheetsDirective, SheetDirective, SheetsPlugin, SheetPlugin } from './sheets.directive'
import { DefinedNamesDirective, DefinedNameDirective, DefinedNamesPlugin, DefinedNamePlugin } from './definednames.directive'


// {{VueImport}}
export const properties: string[] = ['activeSheetIndex', 'allowCellFormatting', 'allowChart', 'allowConditionalFormat', 'allowDataValidation', 'allowDelete', 'allowEditing', 'allowFiltering', 'allowFindAndReplace', 'allowHyperlink', 'allowImage', 'allowInsert', 'allowMerge', 'allowNumberFormatting', 'allowOpen', 'allowResizing', 'allowSave', 'allowScrolling', 'allowSorting', 'allowUndoRedo', 'allowWrap', 'cellStyle', 'cssClass', 'definedNames', 'enableClipboard', 'enableContextMenu', 'enableKeyboardNavigation', 'enableKeyboardShortcut', 'enablePersistence', 'enableRtl', 'height', 'isProtected', 'locale', 'openUrl', 'password', 'saveUrl', 'scrollSettings', 'selectionSettings', 'sheets', 'showFormulaBar', 'showRibbon', 'showSheetTabs', 'width', 'actionBegin', 'actionComplete', 'afterHyperlinkClick', 'afterHyperlinkCreate', 'beforeCellFormat', 'beforeCellRender', 'beforeCellSave', 'beforeConditionalFormat', 'beforeDataBound', 'beforeHyperlinkClick', 'beforeHyperlinkCreate', 'beforeOpen', 'beforeSave', 'beforeSelect', 'beforeSort', 'cellEdit', 'cellEditing', 'cellSave', 'contextMenuBeforeClose', 'contextMenuBeforeOpen', 'contextMenuItemSelect', 'created', 'dataBound', 'dataSourceChanged', 'dialogBeforeOpen', 'fileMenuBeforeClose', 'fileMenuBeforeOpen', 'fileMenuItemSelect', 'openComplete', 'openFailure', 'queryCellInfo', 'saveComplete', 'select', 'sortComplete'];
export const modelProps: string[] = [];

export const testProp: any = getProps({props: properties});
export const props = testProp[0];
export const watch = testProp[1];

export const emitProbs: any = Object.keys(watch);
emitProbs.push('modelchanged');
for (let props of modelProps) {
    emitProbs.push(
        'update:'+props
    );
}

export const isExecute: any = gh ? false : true;

/**
 * `ejs-spreadsheet` represents the VueJS Spreadsheet Component.
 * ```vue
 * <ejs-spreadsheet></ejs-spreadsheet>
 * ```
 */
@EJComponentDecorator({
    props: properties
},isExecute)

/* Start Options({
    props: props,
    watch: watch,
    emits: emitProbs
}) End */

export class SpreadsheetComponent extends ComponentBase {
    
    public ej2Instances: any;
    public propKeys: string[] = properties;
    public models: string[] = modelProps;
    public hasChildDirective: boolean = true;
    protected hasInjectedModules: boolean = true;
    public tagMapper: { [key: string]: Object } = {"e-sheets":{"e-sheet":{"e-rows":{"e-row":{"e-cells":{"e-cell":{"e-images":"e-image","e-charts":"e-chart"}}}},"e-columns":"e-column","e-ranges":"e-range","e-conditionalformats":"e-conditionalformat"}},"e-definednames":"e-definedname"};
    public tagNameMapper: Object = {"e-images":"e-image","e-charts":"e-chart","e-conditionalformats":"e-conditionalFormats","e-definednames":"e-definedNames"};
    public isVue3: boolean;
    
    constructor() {
        super(arguments);
        this.isVue3 = !isExecute;
        this.ej2Instances = new Spreadsheet({});
        this.bindProperties();
        this.ej2Instances._setProperties = this.ej2Instances.setProperties;
        this.ej2Instances.setProperties = this.setProperties;
    }
    public setProperties(prop: any, muteOnChange: boolean): void {
        if(this.isVue3) {
            this.models = !this.models ? this.ej2Instances.referModels : this.models;
        }
        if (this.ej2Instances && this.ej2Instances._setProperties) {
            this.ej2Instances._setProperties(prop, muteOnChange);
        }
        if (prop && this.models && this.models.length) {
            Object.keys(prop).map((key: string): void => {
                this.models.map((model: string): void => {
                    if ((key === model) && !(/datasource/i.test(key))) {
                        if (this.isVue3) {
                            this.ej2Instances.vueInstance.$emit('update:' + key, prop[key]);
                        } else {
                            (this as any).$emit('update:' + key, prop[key]);
                        }
                    }
                });
            });
        }
    }

    public render(createElement: any) {
        let h: any = gh || createElement;
        let slots: any = null;
        if(!isNullOrUndefined((this as any).$slots.default)) {
            slots = gh ? (this as any).$slots.default() : (this as any).$slots.default;
        }
        return h('div', slots);
    }
    
    public Unfreeze(sheet?: number | string): void {
        return this.ej2Instances.Unfreeze(sheet);
    }

    public addContextMenuItems(items: Object[], text: string, insertAfter: boolean, isUniqueId?: boolean): void {
        return this.ej2Instances.addContextMenuItems(items, text, insertAfter, isUniqueId);
    }

    public addCustomFunction(functionHandler: string | Object, functionName?: string): void {
        return this.ej2Instances.addCustomFunction(functionHandler, functionName);
    }

    public addDataValidation(rules: Object, range?: string): void {
        return this.ej2Instances.addDataValidation(rules, range);
    }

    public addDefinedName(definedName: Object): boolean {
        return this.ej2Instances.addDefinedName(definedName);
    }

    public addFileMenuItems(items: Object[], text: string, insertAfter: boolean, isUniqueId?: boolean): void {
        return this.ej2Instances.addFileMenuItems(items, text, insertAfter, isUniqueId);
    }

    public addHyperlink(hyperlink: string | Object, address: string): void {
        return this.ej2Instances.addHyperlink(hyperlink, address);
    }

    public addInvalidHighlight(range?: string): void {
        return this.ej2Instances.addInvalidHighlight(range);
    }

    public addRibbonTabs(items: Object[], insertBefore?: string): void {
        return this.ej2Instances.addRibbonTabs(items, insertBefore);
    }

    public addToolbarItems(tab: string, items: Object[], index?: number): void {
        return this.ej2Instances.addToolbarItems(tab, items, index);
    }

    public applyFilter(predicates?: Object[], range?: string): void {
        return this.ej2Instances.applyFilter(predicates, range);
    }

    public autoFit(range: string): void {
        return this.ej2Instances.autoFit(range);
    }

    public cellFormat(style: Object, range?: string): void {
        return this.ej2Instances.cellFormat(style, range);
    }

    public clear(options: Object): void {
        return this.ej2Instances.clear(options);
    }

    public clearConditionalFormat(range?: string): void {
        return this.ej2Instances.clearConditionalFormat(range);
    }

    public clearFilter(field?: string): void {
        return this.ej2Instances.clearFilter(field);
    }

    public closeEdit(): void {
        return this.ej2Instances.closeEdit();
    }

    public computeExpression(formula: string): string | number {
        return this.ej2Instances.computeExpression(formula);
    }

    public conditionalFormat(conditionalFormat: Object): void {
        return this.ej2Instances.conditionalFormat(conditionalFormat);
    }

    public copy(address?: string): Object {
        return this.ej2Instances.copy(address);
    }

    public cut(address?: string): Object {
        return this.ej2Instances.cut(address);
    }

    public delete(startIndex?: number, endIndex?: number, model?: Object, sheet?: number | string): void {
        return this.ej2Instances.delete(startIndex, endIndex, model, sheet);
    }

    public deleteChart(id?: string): void {
        return this.ej2Instances.deleteChart(id);
    }

    public deleteImage(id: string, range?: string): void {
        return this.ej2Instances.deleteImage(id, range);
    }

    public duplicateSheet(sheetIndex?: number): void {
        return this.ej2Instances.duplicateSheet(sheetIndex);
    }

    public enableContextMenuItems(items: string[], enable: boolean, isUniqueId?: boolean): void {
        return this.ej2Instances.enableContextMenuItems(items, enable, isUniqueId);
    }

    public enableFileMenuItems(items: string[], enable: boolean, isUniqueId?: boolean): void {
        return this.ej2Instances.enableFileMenuItems(items, enable, isUniqueId);
    }

    public enableRibbonTabs(tabs: string[], enable: boolean): void {
        return this.ej2Instances.enableRibbonTabs(tabs, enable);
    }

    public enableToolbarItems(tab: string, items?: number[] | string[], enable?: boolean): void {
        return this.ej2Instances.enableToolbarItems(tab, items, enable);
    }

    public endEdit(): void {
        return this.ej2Instances.endEdit();
    }

    public find(args: Object): void | string {
        return this.ej2Instances.find(args);
    }

    public findAll(value: string, mode?: string, isCSen?: boolean, isEMatch?: boolean, sheetIndex?: number): string[] {
        return this.ej2Instances.findAll(value, mode, isCSen, isEMatch, sheetIndex);
    }

    public freezePanes(row: number, column: number, sheet?: number | string): void {
        return this.ej2Instances.freezePanes(row, column, sheet);
    }

    public getData(address: string): Object {
        return this.ej2Instances.getData(address);
    }

    public getDisplayText(cell: Object): string {
        return this.ej2Instances.getDisplayText(cell);
    }

    public getSelectAllContent(): Object {
        return this.ej2Instances.getSelectAllContent();
    }

    public goTo(address: string): void {
        return this.ej2Instances.goTo(address);
    }

    public hideFileMenuItems(items: string[], hide: boolean, isUniqueId?: boolean): void {
        return this.ej2Instances.hideFileMenuItems(items, hide, isUniqueId);
    }

    public hideRibbonTabs(tabs: string[], hide: boolean): void {
        return this.ej2Instances.hideRibbonTabs(tabs, hide);
    }

    public hideSpinner(): void {
        return this.ej2Instances.hideSpinner();
    }

    public hideToolbarItems(tab: string, indexes: number[], hide: boolean): void {
        return this.ej2Instances.hideToolbarItems(tab, indexes, hide);
    }

    public insertChart(chart?: Object[]): void {
        return this.ej2Instances.insertChart(chart);
    }

    public insertColumn(startColumn?: number | Object[], endColumn?: number, sheet?: number | string): void {
        return this.ej2Instances.insertColumn(startColumn, endColumn, sheet);
    }

    public insertImage(images: Object[], range?: string): void {
        return this.ej2Instances.insertImage(images, range);
    }

    public insertRow(startRow?: number | Object[], endRow?: number, sheet?: number | string): void {
        return this.ej2Instances.insertRow(startRow, endRow, sheet);
    }

    public insertSheet(startSheet?: number | Object[], endSheet?: number): void {
        return this.ej2Instances.insertSheet(startSheet, endSheet);
    }

    public lockCells(range?: string, isLocked?: boolean): void {
        return this.ej2Instances.lockCells(range, isLocked);
    }

    public merge(range?: string, type?: Object): void {
        return this.ej2Instances.merge(range, type);
    }

    public moveSheet(position: number, sheetIndexes?: number[]): void {
        return this.ej2Instances.moveSheet(position, sheetIndexes);
    }

    public numberFormat(format: string, range?: string): void {
        return this.ej2Instances.numberFormat(format, range);
    }

    public open(options: Object): void {
        return this.ej2Instances.open(options);
    }

    public openFromJson(options: undefined): void {
        return this.ej2Instances.openFromJson(options);
    }

    public paste(address?: string, type?: Object): void {
        return this.ej2Instances.paste(address, type);
    }

    public protectSheet(sheet?: number | string, protectSettings?: Object): void {
        return this.ej2Instances.protectSheet(sheet, protectSettings);
    }

    public redo(): void {
        return this.ej2Instances.redo();
    }

    public refresh(isNew?: boolean): void {
        return this.ej2Instances.refresh(isNew);
    }

    public removeContextMenuItems(items: string[], isUniqueId?: boolean): void {
        return this.ej2Instances.removeContextMenuItems(items, isUniqueId);
    }

    public removeDataValidation(range?: string): void {
        return this.ej2Instances.removeDataValidation(range);
    }

    public removeDefinedName(definedName: string, scope: string): boolean {
        return this.ej2Instances.removeDefinedName(definedName, scope);
    }

    public removeHyperlink(range: string): void {
        return this.ej2Instances.removeHyperlink(range);
    }

    public removeInvalidHighlight(range?: string): void {
        return this.ej2Instances.removeInvalidHighlight(range);
    }

    public replace(args: Object): void {
        return this.ej2Instances.replace(args);
    }

    public resize(): void {
        return this.ej2Instances.resize();
    }

    public save(saveOptions: Object): void {
        return this.ej2Instances.save(saveOptions);
    }

    public saveAsJson(): Object {
        return this.ej2Instances.saveAsJson();
    }

    public selectRange(address: string): void {
        return this.ej2Instances.selectRange(address);
    }

    public setBorder(style: Object, range?: string, type?: Object): void {
        return this.ej2Instances.setBorder(style, range, type);
    }

    public setColWidth(width: number | string, colIndex: number, sheetIndex?: number): void {
        return this.ej2Instances.setColWidth(width, colIndex, sheetIndex);
    }

    public setRowHeight(height: number | string, rowIndex: number, sheetIndex?: number, edited?: boolean): void {
        return this.ej2Instances.setRowHeight(height, rowIndex, sheetIndex, edited);
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

    public undo(): void {
        return this.ej2Instances.undo();
    }

    public unprotectSheet(sheet?: number | string): void {
        return this.ej2Instances.unprotectSheet(sheet);
    }

    public updateAction(options: Object): void {
        return this.ej2Instances.updateAction(options);
    }

    public updateCell(cell: Object, address?: string): void {
        return this.ej2Instances.updateCell(cell, address);
    }

    public updateUndoRedoCollection(args: undefined): void {
        return this.ej2Instances.updateUndoRedoCollection(args);
    }

    public wrap(address: string, wrap: boolean): void {
        return this.ej2Instances.wrap(address, wrap);
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
        Vue.component(ImagePlugin.name, ImageDirective);
        Vue.component(ImagesPlugin.name, ImagesDirective);
        Vue.component(ChartPlugin.name, ChartDirective);
        Vue.component(ChartsPlugin.name, ChartsDirective);
        Vue.component(ColumnPlugin.name, ColumnDirective);
        Vue.component(ColumnsPlugin.name, ColumnsDirective);
        Vue.component(RangePlugin.name, RangeDirective);
        Vue.component(RangesPlugin.name, RangesDirective);
        Vue.component(ConditionalFormatPlugin.name, ConditionalFormatDirective);
        Vue.component(ConditionalFormatsPlugin.name, ConditionalFormatsDirective);
        Vue.component(DefinedNamePlugin.name, DefinedNameDirective);
        Vue.component(DefinedNamesPlugin.name, DefinedNamesDirective);

    }
}
