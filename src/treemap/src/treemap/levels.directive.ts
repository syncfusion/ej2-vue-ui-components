import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

@EJComponentDecorator({})
export class LevelsDirective extends Vue {
    public render(): void {
        return;
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
@EJComponentDecorator({})
export class LevelDirective extends Vue {
    public render(): void {
        return;
    }
}
export const LevelPlugin = {
    name: 'e-level',
    install(Vue: any) {
        Vue.component(LevelPlugin.name, LevelDirective);
    }
}
