import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

@EJComponentDecorator({})
export class ProgressBarAnnotationsDirective extends Vue {
    public render(): void {
        return;
    }
}
export const ProgressBarAnnotationsPlugin = {
    name: 'e-progressbar-annotations',
    install(Vue: any) {
        Vue.component(ProgressBarAnnotationsPlugin.name, ProgressBarAnnotationsDirective);
    }
}


@EJComponentDecorator({})
export class ProgressBarAnnotationDirective extends Vue {
    public render(): void {
        return;
    }
}
export const ProgressBarAnnotationPlugin = {
    name: 'e-progressbar-annotation',
    install(Vue: any) {
        Vue.component(ProgressBarAnnotationPlugin.name, ProgressBarAnnotationDirective);
    }
}
