import { HeatMap } from '@syncfusion/ej2-heatmap';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const properties = ['cellSettings', 'dataSource', 'enablePersistence', 'enableRtl', 'height', 'legendSettings', 'locale', 'margin', 'paletteSettings', 'renderingMode', 'showTooltip', 'theme', 'titleSettings', 'width', 'xAxis', 'yAxis', 'cellClick', 'created', 'load', 'tooltipRender'];
const modelProps = [];
/**
 * Represents Vuejs HeatMap Component
 * ```vue
 * <ejs-heatmap></ejs-heatmap>
 * ```
 */
let HeatMapComponent = class HeatMapComponent extends ComponentBase {
    constructor() {
        super();
        this.propKeys = properties;
        this.models = modelProps;
        this.hasChildDirective = true;
        this.hasInjectedModules = true;
        this.tagMapper = {};
        this.tagNameMapper = {};
        this.ej2Instances = new HeatMap({});
        this.bindProperties();
    }
    render(createElement) {
        return createElement('div', this.$slots.default);
    }
    heatMapMouseClick(e) {
        return this.ej2Instances.heatMapMouseClick(e);
    }
    removeSvg() {
        return this.ej2Instances.removeSvg();
    }
};
HeatMapComponent = __decorate([
    EJComponentDecorator({
        props: properties
    })
], HeatMapComponent);
const HeatMapPlugin = {
    name: 'ejs-heatmap',
    install(Vue) {
        Vue.component(HeatMapPlugin.name, HeatMapComponent);
    }
};

export { HeatMapComponent, HeatMapPlugin };
export * from '@syncfusion/ej2-heatmap';
//# sourceMappingURL=ej2-vue-heatmap.es2015.js.map
