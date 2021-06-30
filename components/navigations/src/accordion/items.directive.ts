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
export class AccordionItemsDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-accordionitems';
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
@EJComponentDecorator({}, isExecute)
export class AccordionItemDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-accordionitem';
    }
}
export const AccordionItemPlugin = {
    name: 'e-accordionitem',
    install(Vue: any) {
        Vue.component(AccordionItemPlugin.name, AccordionItemDirective);
    }
}
