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
export class InitialShapeSelectionsDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-initialShapeSelections';
    }
}
export const InitialShapeSelectionsPlugin = {
    name: 'e-initialShapeSelections',
    install(Vue: any) {
        Vue.component(InitialShapeSelectionsPlugin.name, InitialShapeSelectionsDirective);
    }
}

/**
 * `InitialShapeSelectionsDirective` directive represent a selection settings of the Vuejs maps.
 * ```vue
 * <ejs-maps>
 * <e-layers>
 * <e-layer>
 * <e-initialShapeSelections>
 * <e-initialShapeSelection>
 * </e-initialShapeSelection>
 * </e-initialShapeSelections>
 * </e-layer>
 * </e-layers>
 * </ejs-maps>
 * ```
 */
@EJComponentDecorator({}, isExecute)
export class InitialShapeSelectionDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-initialShapeSelection';
    }
}
export const InitialShapeSelectionPlugin = {
    name: 'e-initialShapeSelection',
    install(Vue: any) {
        Vue.component(InitialShapeSelectionPlugin.name, InitialShapeSelectionDirective);
    }
}
