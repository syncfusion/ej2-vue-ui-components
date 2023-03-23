import { gh, isExecute, vueDefineComponent } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined } from '@syncfusion/ej2-base';

export let ChartsDirective =  vueDefineComponent({
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
            return 'e-charts';
        }
    }
});
export const ChartsPlugin = {
    name: 'e-charts',
    install(Vue: any) {
        Vue.component(ChartsPlugin.name, ChartsDirective);
    }
}


export let ChartDirective =  vueDefineComponent({
    render(): void {
        return;
    },
    methods: {
        getTag(): string {
            return 'e-chart';
        }
    }
});
export const ChartPlugin = {
    name: 'e-chart',
    install(Vue: any) {
        Vue.component(ChartPlugin.name, ChartDirective);
    }
}