import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

@EJComponentDecorator({})
export class MarkersDirective extends Vue {
    public render(): void {
        return;
    }
}
export const MarkersPlugin = {
    name: 'e-markerSettings',
    install(Vue: any) {
        Vue.component(MarkersPlugin.name, MarkersDirective);
    }
}

/**
 * `MarkerSettingsDirective` directive represent a marker settings of the Vuejs maps.
 * ```vue
 * <ejs-maps>
 * <e-layers>
 * <e-layer>
 * <e-markerSettings>
 * <e-markerSetting>
 * </e-markerSetting>
 * </e-markerSettings>
 * </e-layer>
 * </e-layers>
 * </ejs-maps>
 * ```
 */
@EJComponentDecorator({})
export class MarkerDirective extends Vue {
    public render(): void {
        return;
    }
}
export const MarkerPlugin = {
    name: 'e-markerSetting',
    install(Vue: any) {
        Vue.component(MarkerPlugin.name, MarkerDirective);
    }
}
