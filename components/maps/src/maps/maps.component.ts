import Vue from 'vue';
import { isUndefined } from '@syncfusion/ej2-base';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';
import { Maps } from '@syncfusion/ej2-maps';
import { MarkersDirective, MarkerDirective, MarkersPlugin, MarkerPlugin } from './markersettings.directive'
import { ColorMappingsDirective, ColorMappingDirective, ColorMappingsPlugin, ColorMappingPlugin } from './colormapping.directive'
import { BubblesDirective, BubbleDirective, BubblesPlugin, BubblePlugin } from './bubblesettings.directive'
import { NavigationLinesDirective, NavigationLineDirective, NavigationLinesPlugin, NavigationLinePlugin } from './navigationlinesettings.directive'
import { LayersDirective, LayerDirective, LayersPlugin, LayerPlugin } from './layers.directive'
import { AnnotationsDirective, AnnotationDirective, AnnotationsPlugin, AnnotationPlugin } from './annotations.directive'


export const properties: string[] = ['annotations', 'background', 'baseLayerIndex', 'border', 'centerPosition', 'description', 'enablePersistence', 'enableRtl', 'format', 'height', 'layers', 'legendSettings', 'locale', 'mapsArea', 'margin', 'projectionType', 'tabIndex', 'theme', 'titleSettings', 'tooltipDisplayMode', 'useGroupingSeparator', 'width', 'zoomSettings', 'animationComplete', 'annotationRendering', 'beforePrint', 'bubbleClick', 'bubbleMouseMove', 'bubbleRendering', 'click', 'dataLabelRendering', 'doubleClick', 'itemHighlight', 'itemSelection', 'layerRendering', 'load', 'loaded', 'markerClick', 'markerClusterClick', 'markerClusterMouseMove', 'markerClusterRendering', 'markerMouseMove', 'markerRendering', 'pan', 'resize', 'rightClick', 'shapeHighlight', 'shapeRendering', 'shapeSelected', 'tooltipRender', 'tooltipRenderComplete', 'zoom'];
export const modelProps: string[] = ['dataSource'];

/**
 * Represents Vuejs Maps Component
 * ```vue
 * <ejs-maps></ejs-maps>
 * ```
 */
@EJComponentDecorator({
    props: properties,
    model: {
        event: 'modelchanged'
    }
})
export class MapsComponent extends ComponentBase {
    
    public ej2Instances: any;
    public propKeys: string[] = properties;
    public models: string[] = modelProps;
    public hasChildDirective: boolean = true;
    protected hasInjectedModules: boolean = true;
    public tagMapper: { [key: string]: Object } = {"e-layers":{"e-layer":{"e-markerSettings":"e-markerSetting","e-bubbleSettings":{"e-bubbleSetting":{"e-colorMappings":"e-colorMapping"}},"e-navigationLineSettings":"e-navigationLineSetting"}},"e-maps-annotations":"e-maps-annotation"};
    public tagNameMapper: Object = {"e-colorMappings":"e-colorMapping","e-maps-annotations":"e-annotations"};
    
    constructor() {
        super();
        this.ej2Instances = new Maps({});        this.ej2Instances._trigger = this.ej2Instances.trigger;
        this.ej2Instances.trigger = this.trigger;

        this.bindProperties();
        this.ej2Instances._setProperties = this.ej2Instances.setProperties;
        this.ej2Instances.setProperties = this.setProperties;
    }
    public setProperties(prop: any, muteOnChange: boolean): void {
        if (this.ej2Instances && this.ej2Instances._setProperties) {
            this.ej2Instances._setProperties(prop, muteOnChange);
        }
        if (prop && this.models && this.models.length) {
            Object.keys(prop).map((key: string): void => {
                this.models.map((model: string): void => {
                    if ((key === model) && !(/datasource/i.test(key))) {
                        this.$emit('update:' + key, prop[key]);
                    }
                });
            });
        }
    }
    public trigger(eventName: string, eventProp: {[key:string]:Object}, successHandler?: Function): void {
        if ((eventName === 'change' || eventName === 'input') && this.models && (this.models.length !== 0)) {
            let key: string[] = this.models.toString().match(/checked|value/) || [];
            let propKey: string = key[0];
            if (eventProp && key && !isUndefined(eventProp[propKey])) {
                (this as any).$emit('update:'+ propKey, eventProp[propKey]);
                (this as any).$emit('modelchanged', eventProp[propKey]);
            }
        }
        if (this.ej2Instances && this.ej2Instances._trigger) {
            this.ej2Instances._trigger(eventName, eventProp, successHandler);
        }            
    }

    public render(createElement: any) {
        return createElement('div', (this as any).$slots.default);
    }
    
    public addLayer(layer: Object): void {
        return this.ej2Instances.addLayer(layer);
    }

    public addMarker(layerIndex: number, markerCollection: Object[]): void {
        return this.ej2Instances.addMarker(layerIndex, markerCollection);
    }

    public export(type: Object, fileName: string, orientation?: Object): void {
        return this.ej2Instances.export(type, fileName, orientation);
    }

    public getGeoLocation(layerIndex: number, location: Object): Object {
        return this.ej2Instances.getGeoLocation(layerIndex, location);
    }

    public getLocalizedLabel(key: string): string {
        return this.ej2Instances.getLocalizedLabel(key);
    }

    public getTileGeoLocation(location: Object): Object {
        return this.ej2Instances.getTileGeoLocation(location);
    }

    public mapsOnClick(e: Object): void {
        return this.ej2Instances.mapsOnClick(e);
    }

    public mapsOnDoubleClick(e: Object): void {
        return this.ej2Instances.mapsOnDoubleClick(e);
    }

    public mapsOnResize(e: Object): boolean {
        return this.ej2Instances.mapsOnResize(e);
    }

    public mouseDownOnMap(e: Object): void {
        return this.ej2Instances.mouseDownOnMap(e);
    }

    public mouseEndOnMap(e: Object): boolean {
        return this.ej2Instances.mouseEndOnMap(e);
    }

    public mouseLeaveOnMap(e: Object): void {
        return this.ej2Instances.mouseLeaveOnMap(e);
    }

    public mouseMoveOnMap(e: Object): void {
        return this.ej2Instances.mouseMoveOnMap(e);
    }

    public onMouseMove(e: Object): boolean {
        return this.ej2Instances.onMouseMove(e);
    }

    public panByDirection(direction: Object): void {
        return this.ej2Instances.panByDirection(direction);
    }

    public pointToLatLong(pageX: number, pageY: number): Object {
        return this.ej2Instances.pointToLatLong(pageX, pageY);
    }

    public print(id?: string[] | string | Object): void {
        return this.ej2Instances.print(id);
    }

    public processResponseJsonData(processType: string, data?: any | string, layer?: Object, dataType?: string): void {
        return this.ej2Instances.processResponseJsonData(processType, data, layer, dataType);
    }

    public removeLayer(index: number): void {
        return this.ej2Instances.removeLayer(index);
    }

    public zoomByPosition(centerPosition: undefined, zoomFactor: number): void {
        return this.ej2Instances.zoomByPosition(centerPosition, zoomFactor);
    }
}

export const MapsPlugin = {
    name: 'ejs-maps',
    install(Vue: any) {
        Vue.component(MapsPlugin.name, MapsComponent);
        Vue.component(LayerPlugin.name, LayerDirective);
        Vue.component(LayersPlugin.name, LayersDirective);
        Vue.component(MarkerPlugin.name, MarkerDirective);
        Vue.component(MarkersPlugin.name, MarkersDirective);
        Vue.component(BubblePlugin.name, BubbleDirective);
        Vue.component(BubblesPlugin.name, BubblesDirective);
        Vue.component(ColorMappingPlugin.name, ColorMappingDirective);
        Vue.component(ColorMappingsPlugin.name, ColorMappingsDirective);
        Vue.component(NavigationLinePlugin.name, NavigationLineDirective);
        Vue.component(NavigationLinesPlugin.name, NavigationLinesDirective);
        Vue.component(AnnotationPlugin.name, AnnotationDirective);
        Vue.component(AnnotationsPlugin.name, AnnotationsDirective);

    }
}
