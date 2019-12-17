import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

@EJComponentDecorator({})
export class InitialShapeSelectionsDirective extends Vue {
    public render(): void {
        return;
    }
}
export const InitialShapeSelectionsPlugin = {
    name: 'e-initialShapeSelections',
    install(Vue: any) {
        Vue.component(InitialShapeSelectionsPlugin.name, InitialShapeSelectionsDirective);
    }
}

/**
 * `InitialShapeSelectionsDirective` directive represent a selection settings of the Vuejs maps.
 * ```vue
 * <ejs-maps>
 * <e-layers>
 * <e-layer>
 * <e-initialShapeSelections>
 * <e-initialShapeSelection>
 * </e-initialShapeSelection>
 * </e-initialShapeSelections>
 * </e-layer>
 * </e-layers>
 * </ejs-maps>
 * ```
 */
@EJComponentDecorator({})
export class InitialShapeSelectionDirective extends Vue {
    public render(): void {
        return;
    }
}
export const InitialShapeSelectionPlugin = {
    name: 'e-initialShapeSelection',
    install(Vue: any) {
        Vue.component(InitialShapeSelectionPlugin.name, InitialShapeSelectionDirective);
    }
}
