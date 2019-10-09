import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

@EJComponentDecorator({})
export class ButtonsDirective extends Vue {
    public render(): void {
        return;
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
@EJComponentDecorator({})
export class DialogButtonDirective extends Vue {
    public render(): void {
        return;
    }
}
export const DialogButtonPlugin = {
    name: 'e-dialogbutton',
    install(Vue: any) {
        Vue.component(DialogButtonPlugin.name, DialogButtonDirective);
    }
}
