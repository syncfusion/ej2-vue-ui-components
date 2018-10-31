import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

@EJComponentDecorator({})
export class StripLinesDirective extends Vue {
    public render(): void {
        return;
    }
}
export const StripLinesPlugin = {
    name: 'e-striplines',
    install(Vue: any) {
        Vue.component(StripLinesPlugin.name, StripLinesDirective);
    }
}


@EJComponentDecorator({})
export class StripLineDirective extends Vue {
    public render(): void {
        return;
    }
}
export const StripLinePlugin = {
    name: 'e-stripline',
    install(Vue: any) {
        Vue.component(StripLinePlugin.name, StripLineDirective);
    }
}
