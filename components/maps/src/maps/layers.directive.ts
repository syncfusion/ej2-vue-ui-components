import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

@EJComponentDecorator({})
export class LayersDirective extends Vue {
    public render(): void {
        return;
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
@EJComponentDecorator({})
export class LayerDirective extends Vue {
    public render(): void {
        return;
    }
}
export const LayerPlugin = {
    name: 'e-layer',
    install(Vue: any) {
        Vue.component(LayerPlugin.name, LayerDirective);
    }
}
