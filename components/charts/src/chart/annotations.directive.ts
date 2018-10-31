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
 * `e-annotation` directive represent a annotation of the VueJS Chart. 
 * It must be contained in a Chart component(`ejs-chart`). 
 * ```vue
 * <ejs-chart> 
 *   <e-annotations>
 *    <e-annotation content='ID' />
 *    <e-annotation content='ID' />
 *   </e-annotations>
 * </ejs-chart>
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
