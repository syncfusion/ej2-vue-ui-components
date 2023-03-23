import { gh, isExecute, vueDefineComponent } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined } from '@syncfusion/ej2-base';

export let StockChartPeriodsDirective =  vueDefineComponent({
    inject: { custom: { default: null } },
    render(createElement: any): void {
        if (!isExecute) {
            let h: any = !isExecute ? gh : createElement;
            let slots: any = null;
            if(!isNullOrUndefined((this as any).$slots.default)) {
                slots = !isExecute ? (this as any).$slots.default() : (this as any).$slots.default;
            }
            return h('div', { class: 'e-directive' }, slots);
        }
        return;
    },
    updated(): void {
        if (!isExecute && this.custom) { this.custom() }
    },
    methods: {
        getTag(): string {
            return 'e-stockchart-periods';
        }
    }
});
export const StockChartPeriodsPlugin = {
    name: 'e-stockchart-periods',
    install(Vue: any) {
        Vue.component(StockChartPeriodsPlugin.name, StockChartPeriodsDirective);
    }
}


export let StockChartPeriodDirective =  vueDefineComponent({
    render(): void {
        return;
    },
    methods: {
        getTag(): string {
            return 'e-stockchart-period';
        }
    }
});
export const StockChartPeriodPlugin = {
    name: 'e-stockchart-period',
    install(Vue: any) {
        Vue.component(StockChartPeriodPlugin.name, StockChartPeriodDirective);
    }
}