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
export class ColorMappingsDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-colorMappings';
    }
}
export const ColorMappingsPlugin = {
    name: 'e-colorMappings',
    install(Vue: any) {
        Vue.component(ColorMappingsPlugin.name, ColorMappingsDirective);
    }
}

/**
 * `BubblesDirective` directive represent a bubble settings of the Vuejs maps.
 * ```vue
 * <ejs-maps>
 * <e-layers>
 * <e-layer>
 * <e-bubbleSettings>
 * <e-bubbleSetting>
 * </e-bubbleSetting>
 * </e-bubbleSettings>
 * </e-layer>
 * </e-layers>
 * </ejs-maps>
 * ```
 */
@EJComponentDecorator({}, isExecute)
export class ColorMappingDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-colorMapping';
    }
}
export const ColorMappingPlugin = {
    name: 'e-colorMapping',
    install(Vue: any) {
        Vue.component(ColorMappingPlugin.name, ColorMappingDirective);
    }
}
