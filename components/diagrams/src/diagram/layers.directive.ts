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
 * `e-layers` directive represent a layers of the vue diagram. 
 * It must be contained in a Diagram component(`ejs-diagram`). 
 * ```vue
 * <ejs-diagram>
 * <e-layers>
 * <e-layer>
 * </e-layers>
 * </e-layers>
</ejs-diagram>
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
