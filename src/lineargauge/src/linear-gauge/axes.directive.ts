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
 * Axes directive represent a axes of the VueJS linear gauge.
 * ```vue
 * <ejs-lineargauge>
 * <e-axes><e-axis></e-axis></e-axes>
 * </ejs-lineargauge>
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
