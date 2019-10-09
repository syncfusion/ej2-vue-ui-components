import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

@EJComponentDecorator({})
export class ColorMappingsDirective extends Vue {
    public render(): void {
        return;
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
@EJComponentDecorator({})
export class ColorMappingDirective extends Vue {
    public render(): void {
        return;
    }
}
export const ColorMappingPlugin = {
    name: 'e-colorMapping',
    install(Vue: any) {
        Vue.component(ColorMappingPlugin.name, ColorMappingDirective);
    }
}
