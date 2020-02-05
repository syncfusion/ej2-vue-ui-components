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

/**
 * 'e-accordionitem' directive represent a item of Vue Accordion 
 * It must be contained in a Accordion component(`ejs-accordion`). 
 * ```html
 * <ejs-accordion> 
 *   <e-accordionitems>
 *    <e-accordionitem header='Header1'></e-accordionitem>
 *    <e-accordionitem header='Header2' content='Content2'></e-accordionitem>
 *   </e-accordionitems>
 * </ejs-accordion>
 * ```
 */
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
