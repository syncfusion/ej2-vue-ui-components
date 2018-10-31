import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

@EJComponentDecorator({})
export class AnnotationsDirective extends Vue {
    public render(): void {
        return;
    }
}
export const AnnotationsPlugin = {
    name: 'e-maps-annotations',
    install(Vue: any) {
        Vue.component(AnnotationsPlugin.name, AnnotationsDirective);
    }
}

/**
 * `AnnotationsDirective` directive represent a annotation of the Vuejs maps.
 * ```vue
 * <ejs-maps>
 * <e-maps-annotations>
 * <e-maps-annotation></e-maps-annotation>
 * </e-maps-annotations>
 * </ejs-maps>
 * ```
 */
@EJComponentDecorator({})
export class AnnotationDirective extends Vue {
    public render(): void {
        return;
    }
}
export const AnnotationPlugin = {
    name: 'e-maps-annotation',
    install(Vue: any) {
        Vue.component(AnnotationPlugin.name, AnnotationDirective);
    }
}
