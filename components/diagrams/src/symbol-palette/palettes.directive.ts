import { ComponentBase, EJComponentDecorator, allVue, gh } from '@syncfusion/ej2-vue-base';
import * as Vue3 from 'vue-class-component';
import Vue from 'vue';

export const isExecute: any = gh ? false : true;

let vueImport: any;
if (!isExecute || parseInt(allVue.version) < 3) {
    vueImport = (Vue3 as any).Vue;
} else {
    vueImport = Vue;
}

@EJComponentDecorator({}, isExecute)
export class PalettesDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-palettes';
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
@EJComponentDecorator({}, isExecute)
export class PaletteDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-palette';
    }
}
export const PalettePlugin = {
    name: 'e-palette',
    install(Vue: any) {
        Vue.component(PalettePlugin.name, PaletteDirective);
    }
}
