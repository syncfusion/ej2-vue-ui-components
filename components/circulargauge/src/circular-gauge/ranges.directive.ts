import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

@EJComponentDecorator({})
export class RangesDirective extends Vue {
    public render(): void {
        return;
    }
}
export const RangesPlugin = {
    name: 'e-ranges',
    install(Vue: any) {
        Vue.component(RangesPlugin.name, RangesDirective);
    }
}

/**
 * `Ranges` directive represent a ranges of the Vuejs circular gauge.
 * ```vue
 * <ejs-circulargauge>
 * <e-axes>
 * <e-axis>
 * <e-ranges><e-range></e-range></e-ranges>
 * </e-axis>
 * </e-axes>
 * </ejs-circulargauge>
 * ```
 */
@EJComponentDecorator({})
export class RangeDirective extends Vue {
    public render(): void {
        return;
    }
}
export const RangePlugin = {
    name: 'e-range',
    install(Vue: any) {
        Vue.component(RangePlugin.name, RangeDirective);
    }
}
