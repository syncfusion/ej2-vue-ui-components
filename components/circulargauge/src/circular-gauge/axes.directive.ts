import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

@EJComponentDecorator({})
export class AxesDirective extends Vue {
    public render(): void {
        return;
    }
}
export const AxesPlugin = {
    name: 'e-axes',
    install(Vue: any) {
        Vue.component(AxesPlugin.name, AxesDirective);
    }
}

/**
 * Represents the directive to render the axes in the Circular Gauge.
 * ```vue
 * <ejs-circulargauge>
 * <e-axes><e-axis></e-axis></e-axes>
 * </ejs-circulargauge>
 * ```
 */
@EJComponentDecorator({})
export class AxisDirective extends Vue {
    public render(): void {
        return;
    }
}
export const AxisPlugin = {
    name: 'e-axis',
    install(Vue: any) {
        Vue.component(AxisPlugin.name, AxisDirective);
    }
}
