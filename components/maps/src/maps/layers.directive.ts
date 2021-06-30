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
export class LayersDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-layers';
    }
}
export const LayersPlugin = {
    name: 'e-layers',
    install(Vue: any) {
        Vue.component(LayersPlugin.name, LayersDirective);
    }
}

/**
 * `LayersDirective` directive represent a layers of the react maps.
 * ```vue
 * <ejs-maps>
 * <e-layers>
 * <e-layer></e-layer>
 * </e-layers>
 * </ejs-maps>
 * ```
 */
@EJComponentDecorator({}, isExecute)
export class LayerDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-layer';
    }
}
export const LayerPlugin = {
    name: 'e-layer',
    install(Vue: any) {
        Vue.component(LayerPlugin.name, LayerDirective);
    }
}
