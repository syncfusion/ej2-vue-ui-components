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
export class CustomCursorsDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-cursormaps';
    }
}
export const CustomCursorsPlugin = {
    name: 'e-cursormaps',
    install(Vue: any) {
        Vue.component(CustomCursorsPlugin.name, CustomCursorsDirective);
    }
}

/**
 * `e-custormaps` directive represent a layers of the vue diagram. 
 * It must be contained in a Diagram component(`ejs-diagram`). 
 * ```vue
 * <ejs-diagram>
 * <e-custormaps>
 * <e-custormap>
 * </e-custormap>
 * </e-custormaps>
</ejs-diagram>
 * ```
 */
@EJComponentDecorator({}, isExecute)
export class CustomCursorDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-cursormap';
    }
}
export const CustomCursorPlugin = {
    name: 'e-cursormap',
    install(Vue: any) {
        Vue.component(CustomCursorPlugin.name, CustomCursorDirective);
    }
}
