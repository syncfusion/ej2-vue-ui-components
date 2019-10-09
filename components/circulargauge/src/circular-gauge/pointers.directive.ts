import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

@EJComponentDecorator({})
export class PointersDirective extends Vue {
    public render(): void {
        return;
    }
}
export const PointersPlugin = {
    name: 'e-pointers',
    install(Vue: any) {
        Vue.component(PointersPlugin.name, PointersDirective);
    }
}

/**
 * `Pointers` directive represent a pointers of the Vuejs circular gauge.
 * ```vue
 * <ejs-circulargauge>
 * <e-axes>
 * <e-axis>
 * <e-pointers><e-pointer></e-pointer></e-pointers>
 * </e-axis>
 * </e-axes>
 * </ejs-circulargauge>
 * ```
 */
@EJComponentDecorator({})
export class PointerDirective extends Vue {
    public render(): void {
        return;
    }
}
export const PointerPlugin = {
    name: 'e-pointer',
    install(Vue: any) {
        Vue.component(PointerPlugin.name, PointerDirective);
    }
}
