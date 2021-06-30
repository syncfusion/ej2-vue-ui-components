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
export class StockChartAnnotationsDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-stockchart-annotations';
    }
}
export const StockChartAnnotationsPlugin = {
    name: 'e-stockchart-annotations',
    install(Vue: any) {
        Vue.component(StockChartAnnotationsPlugin.name, StockChartAnnotationsDirective);
    }
}

/**
 * `e-annotation` directive represent a annotation of the VueJS Chart. 
 * It must be contained in a Chart component(`ejs-chart`). 
 * ```vue
 * <ejs-stockchart> 
 *   <e-stockchart-annotations>
 *    <e-annotation content='ID' />
 *    <e-annotation content='ID' />
 *   </e-annotations>
 * </ejs-chart>
 * ```
 */
@EJComponentDecorator({}, isExecute)
export class StockChartAnnotationDirective extends vueImport {
    public render(): void {
        return;
    }
    public getTag(): string {
        return 'e-stockchart-annotation';
    }
}
export const StockChartAnnotationPlugin = {
    name: 'e-stockchart-annotation',
    install(Vue: any) {
        Vue.component(StockChartAnnotationPlugin.name, StockChartAnnotationDirective);
    }
}
