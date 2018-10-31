import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

@EJComponentDecorator({})
export class AnnotationsDirective extends Vue {
    public render(): void {
        return;
    }
}
export const AnnotationsPlugin = {
    name: 'e-annotations',
    install(Vue: any) {
        Vue.component(AnnotationsPlugin.name, AnnotationsDirective);
    }
}

/**
 * `Annotations` directive represent a annotations of the Vuejs circular gauge.
 * ```vue
 * <ejs-circulargauge>
 * <e-axes>
 * <e-axis>
 * <e-annotations><e-annotation></e-annotation></e-annotations>
 * </e-axis>
 * </e-axes>
 * </ejs-circulargauge>
 * ```
 */
@EJComponentDecorator({})
export class AnnotationDirective extends Vue {
    public render(): void {
        return;
    }
}
export const AnnotationPlugin = {
    name: 'e-annotation',
    install(Vue: any) {
        Vue.component(AnnotationPlugin.name, AnnotationDirective);
    }
}
