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
export class ButtonsDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-buttons';
    }
}
export const ButtonsPlugin = {
    name: 'e-buttons',
    install(Vue: any) {
        Vue.component(ButtonsPlugin.name, ButtonsDirective);
    }
}

/**
 * 'e-button' directive represent a button of Vue Dialog 
 * It must be contained in a Dialog component(`ejs-dialog`). 
 * ```html
 * <ejs-Dialog id='dialog' :showCloseIcon=true> 
 *   <e-buttons>
 *    <e-dialogbutton :buttonModal='okButton'></e-dialogbutton>
 *    <e-dialogbutton :buttonModal='cancelButton'></e-dialogbutton>
 *   </e-buttons>
 * </ejs-Dialog>
 * ```
 */
@EJComponentDecorator({}, isExecute)
export class DialogButtonDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-dialogbutton';
    }
}
export const DialogButtonPlugin = {
    name: 'e-dialogbutton',
    install(Vue: any) {
        Vue.component(DialogButtonPlugin.name, DialogButtonDirective);
    }
}
