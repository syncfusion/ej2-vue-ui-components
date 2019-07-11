import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

@EJComponentDecorator({})
export class SegmentsDirective extends Vue {
    public render(): void {
        return;
    }
}
export const SegmentsPlugin = {
    name: 'e-segments',
    install(Vue: any) {
        Vue.component(SegmentsPlugin.name, SegmentsDirective);
    }
}


@EJComponentDecorator({})
export class SegmentDirective extends Vue {
    public render(): void {
        return;
    }
}
export const SegmentPlugin = {
    name: 'e-segment',
    install(Vue: any) {
        Vue.component(SegmentPlugin.name, SegmentDirective);
    }
}
