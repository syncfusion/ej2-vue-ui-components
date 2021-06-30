import { ComponentBase, EJComponentDecorator, allVue, gh } from '@syncfusion/ej2-vue-base';
import * as Vue3 from 'vue-class-component';
import Vue from 'vue';

export const isExecute: any = gh ? false : true;

let vueImport: any;
if (!isExecute || parseInt(allVue.version) < 3) {
    vueImport = (Vue3 as any).Vue;
} else {
    vueImport = Vue;
}

@EJComponentDecorator({}, isExecute)
export class AnnotationsDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-maps-annotations';
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
@EJComponentDecorator({}, isExecute)
export class AnnotationDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-maps-annotation';
    }
}
export const AnnotationPlugin = {
    name: 'e-maps-annotation',
    install(Vue: any) {
        Vue.component(AnnotationPlugin.name, AnnotationDirective);
    }
}
