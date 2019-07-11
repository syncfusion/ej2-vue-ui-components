import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

@EJComponentDecorator({})
export class StockChartAnnotationsDirective extends Vue {
    public render(): void {
        return;
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
@EJComponentDecorator({})
export class StockChartAnnotationDirective extends Vue {
    public render(): void {
        return;
    }
}
export const StockChartAnnotationPlugin = {
    name: 'e-stockchart-annotation',
    install(Vue: any) {
        Vue.component(StockChartAnnotationPlugin.name, StockChartAnnotationDirective);
    }
}
