import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

@EJComponentDecorator({})
export class AccumulationAnnotationsDirective extends Vue {
    public render(): void {
        return;
    }
}
export const AccumulationAnnotationsPlugin = {
    name: 'e-accumulation-annotations',
    install(Vue: any) {
        Vue.component(AccumulationAnnotationsPlugin.name, AccumulationAnnotationsDirective);
    }
}


@EJComponentDecorator({})
export class AccumulationAnnotationDirective extends Vue {
    public render(): void {
        return;
    }
}
export const AccumulationAnnotationPlugin = {
    name: 'e-accumulation-annotation',
    install(Vue: any) {
        Vue.component(AccumulationAnnotationPlugin.name, AccumulationAnnotationDirective);
    }
}
