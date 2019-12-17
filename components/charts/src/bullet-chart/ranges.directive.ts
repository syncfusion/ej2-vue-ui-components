import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

@EJComponentDecorator({})
export class BulletRangeCollectionDirective extends Vue {
    public render(): void {
        return;
    }
}
export const BulletRangeCollectionPlugin = {
    name: 'e-bullet-range-collection',
    install(Vue: any) {
        Vue.component(BulletRangeCollectionPlugin.name, BulletRangeCollectionDirective);
    }
}


@EJComponentDecorator({})
export class BulletRangeDirective extends Vue {
    public render(): void {
        return;
    }
}
export const BulletRangePlugin = {
    name: 'e-bullet-range',
    install(Vue: any) {
        Vue.component(BulletRangePlugin.name, BulletRangeDirective);
    }
}
