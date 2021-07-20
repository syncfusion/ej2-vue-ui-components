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
export class LevelsDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-levels';
    }
}
export const LevelsPlugin = {
    name: 'e-levels',
    install(Vue: any) {
        Vue.component(LevelsPlugin.name, LevelsDirective);
    }
}

/**
 * `LevelsDirective` directive represent a levels of the react treemap.
 * ```vue
 * <ejs-treemap>
 * <e-levels>
 * <e-level></e-level>
 * </e-levels>
 * </ejs-treemap>
 * ```
 */
@EJComponentDecorator({}, isExecute)
export class LevelDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-level';
    }
}
export const LevelPlugin = {
    name: 'e-level',
    install(Vue: any) {
        Vue.component(LevelPlugin.name, LevelDirective);
    }
}
