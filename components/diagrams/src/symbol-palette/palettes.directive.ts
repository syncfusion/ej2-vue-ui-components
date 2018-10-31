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
