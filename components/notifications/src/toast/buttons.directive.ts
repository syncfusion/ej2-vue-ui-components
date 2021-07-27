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
export class ButtonModelPropsDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-buttonmodelprops';
    }
}
export const ButtonModelPropsPlugin = {
    name: 'e-buttonmodelprops',
    install(Vue: any) {
        Vue.component(ButtonModelPropsPlugin.name, ButtonModelPropsDirective);
    }
}

/**
 * 'e-button' directive represent a button of Vue toast 
 * It must be contained in a Toast component(`ejs-toast`). 
 * ```html
 * <ejs-toast id='toast' :showCloseIcon=true> 
 *   <e-buttons>
 *    <e-button :content='Ok' :isPrimary=true></e-button>
 *    <e-button :content='Cancel'></e-button>
 *   </e-buttons>
 * </ejs-toast>
 * ```
 */
@EJComponentDecorator({}, isExecute)
export class ButtonModelPropDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-buttonmodelprop';
    }
}
export const ButtonModelPropPlugin = {
    name: 'e-buttonmodelprop',
    install(Vue: any) {
        Vue.component(ButtonModelPropPlugin.name, ButtonModelPropDirective);
    }
}
