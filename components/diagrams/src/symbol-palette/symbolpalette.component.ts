import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';
import { SymbolPalette } from '@syncfusion/ej2-diagrams';
import { PalettesDirective, PaletteDirective, PalettesPlugin, PalettePlugin } from './palettes.directive'


export const properties: string[] = ['accessKey', 'allowDrag', 'connectorDefaults', 'enableAnimation', 'enablePersistence', 'enableRtl', 'enableSearch', 'expandMode', 'filterSymbols', 'getConnectorDefaults', 'getNodeDefaults', 'getSymbolInfo', 'getSymbolTemplate', 'height', 'ignoreSymbolsOnSearch', 'locale', 'nodeDefaults', 'palettes', 'symbolDragSize', 'symbolHeight', 'symbolInfo', 'symbolMargin', 'symbolPreview', 'symbolWidth', 'width', 'paletteSelectionChange'];
export const modelProps: string[] = [];

/**
 * Represents vue SymbolPalette Component
 * ```html
 * <ej-symbol-palette></ej-symbol-palette>
 * ```
 */
@EJComponentDecorator({
    props: properties
})
export class SymbolPaletteComponent extends ComponentBase {
    
    public ej2Instances: any;
    public propKeys: string[] = properties;
    public models: string[] = modelProps;
    public hasChildDirective: boolean = true;
    protected hasInjectedModules: boolean = true;
    public tagMapper: { [key: string]: Object } = {"e-palettes":"e-palette"};
    public tagNameMapper: Object = {};
    
    constructor() {
        super();
        this.ej2Instances = new SymbolPalette({});
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
    
    public addPaletteItem(paletteName: string, paletteSymbol: Object | Object): void {
        return this.ej2Instances.addPaletteItem(paletteName, paletteSymbol);
    }

    public addPalettes(palettes: Object[]): void {
        return this.ej2Instances.addPalettes(palettes);
    }

    public removePaletteItem(paletteName: string, symbolId: string): void {
        return this.ej2Instances.removePaletteItem(paletteName, symbolId);
    }

    public removePalettes(palettes: string[]): void {
        return this.ej2Instances.removePalettes(palettes);
    }
}

export const SymbolPalettePlugin = {
    name: 'ejs-symbolpalette',
    install(Vue: any) {
        Vue.component(SymbolPalettePlugin.name, SymbolPaletteComponent);
        Vue.component(PalettePlugin.name, PaletteDirective);
        Vue.component(PalettesPlugin.name, PalettesDirective);

    }
}
