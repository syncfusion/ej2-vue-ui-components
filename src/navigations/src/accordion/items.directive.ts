import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

@EJComponentDecorator({})
export class AccordionItemsDirective extends Vue {
    public render(): void {
        return;
    }
}
export const AccordionItemsPlugin = {
    name: 'e-accordionitems',
    install(Vue: any) {
        Vue.component(AccordionItemsPlugin.name, AccordionItemsDirective);
    }
}


@EJComponentDecorator({})
export class AccordionItemDirective extends Vue {
    public render(): void {
        return;
    }
}
export const AccordionItemPlugin = {
    name: 'e-accordionitem',
    install(Vue: any) {
        Vue.component(AccordionItemPlugin.name, AccordionItemDirective);
    }
}
