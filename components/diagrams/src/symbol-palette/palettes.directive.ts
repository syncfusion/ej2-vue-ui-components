import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

@EJComponentDecorator({})
export class PalettesDirective extends Vue {
    public render(): void {
        return;
    }
}
export const PalettesPlugin = {
    name: 'e-palettes',
    install(Vue: any) {
        Vue.component(PalettesPlugin.name, PalettesDirective);
    }
}

/**
 * `Palette` directive represent a axis palette of the vue SymbolPalette. 
 * It must be contained in a SymbolPalette component(`SymbolPaletteComponent`). 
 * ```html
 * <e-palettes><e-palette></e-palette><e-palettes>
 * ```
 */
@EJComponentDecorator({})
export class PaletteDirective extends Vue {
    public render(): void {
        return;
    }
}
export const PalettePlugin = {
    name: 'e-palette',
    install(Vue: any) {
        Vue.component(PalettePlugin.name, PaletteDirective);
    }
}
