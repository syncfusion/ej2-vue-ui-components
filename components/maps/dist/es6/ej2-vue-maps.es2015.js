import { Maps } from '@syncfusion/ej2-maps';
import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';
import { isUndefined } from '@syncfusion/ej2-base';

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let InitialShapeSelectionsDirective = class InitialShapeSelectionsDirective extends Vue {
    render() {
        return;
    }
};
InitialShapeSelectionsDirective = __decorate([
    EJComponentDecorator({})
], InitialShapeSelectionsDirective);
const InitialShapeSelectionsPlugin = {
    name: 'e-initialShapeSelections',
    install(Vue$$1) {
        Vue$$1.component(InitialShapeSelectionsPlugin.name, InitialShapeSelectionsDirective);
    }
};
/**
 * `InitialShapeSelectionsDirective` directive represent a selection settings of the Vuejs maps.
 * ```vue
 * <ejs-maps>
 * <e-layers>
 * <e-layer>
 * <e-initialShapeSelections>
 * <e-initialShapeSelection>
 * </e-initialShapeSelection>
 * </e-initialShapeSelections>
 * </e-layer>
 * </e-layers>
 * </ejs-maps>
 * ```
 */
let InitialShapeSelectionDirective = class InitialShapeSelectionDirective extends Vue {
    render() {
        return;
    }
};
InitialShapeSelectionDirective = __decorate([
    EJComponentDecorator({})
], InitialShapeSelectionDirective);
const InitialShapeSelectionPlugin = {
    name: 'e-initialShapeSelection',
    install(Vue$$1) {
        Vue$$1.component(InitialShapeSelectionPlugin.name, InitialShapeSelectionDirective);
    }
};

var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let MarkersDirective = class MarkersDirective extends Vue {
    render() {
        return;
    }
};
MarkersDirective = __decorate$1([
    EJComponentDecorator({})
], MarkersDirective);
const MarkersPlugin = {
    name: 'e-markerSettings',
    install(Vue$$1) {
        Vue$$1.component(MarkersPlugin.name, MarkersDirective);
    }
};
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
let MarkerDirective = class MarkerDirective extends Vue {
    render() {
        return;
    }
};
MarkerDirective = __decorate$1([
    EJComponentDecorator({})
], MarkerDirective);
const MarkerPlugin = {
    name: 'e-markerSetting',
    install(Vue$$1) {
        Vue$$1.component(MarkerPlugin.name, MarkerDirective);
    }
};

var __decorate$2 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let ColorMappingsDirective = class ColorMappingsDirective extends Vue {
    render() {
        return;
    }
};
ColorMappingsDirective = __decorate$2([
    EJComponentDecorator({})
], ColorMappingsDirective);
const ColorMappingsPlugin = {
    name: 'e-colorMappings',
    install(Vue$$1) {
        Vue$$1.component(ColorMappingsPlugin.name, ColorMappingsDirective);
    }
};
/**
 * `BubblesDirective` directive represent a bubble settings of the Vuejs maps.
 * ```vue
 * <ejs-maps>
 * <e-layers>
 * <e-layer>
 * <e-bubbleSettings>
 * <e-bubbleSetting>
 * </e-bubbleSetting>
 * </e-bubbleSettings>
 * </e-layer>
 * </e-layers>
 * </ejs-maps>
 * ```
 */
let ColorMappingDirective = class ColorMappingDirective extends Vue {
    render() {
        return;
    }
};
ColorMappingDirective = __decorate$2([
    EJComponentDecorator({})
], ColorMappingDirective);
const ColorMappingPlugin = {
    name: 'e-colorMapping',
    install(Vue$$1) {
        Vue$$1.component(ColorMappingPlugin.name, ColorMappingDirective);
    }
};

var __decorate$3 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let BubblesDirective = class BubblesDirective extends Vue {
    render() {
        return;
    }
};
BubblesDirective = __decorate$3([
    EJComponentDecorator({})
], BubblesDirective);
const BubblesPlugin = {
    name: 'e-bubbleSettings',
    install(Vue$$1) {
        Vue$$1.component(BubblesPlugin.name, BubblesDirective);
    }
};
/**
 * `BubblesDirective` directive represent a bubble settings of the Vuejs maps.
 * ```vue
 * <ejs-maps>
 * <e-layers>
 * <e-layer>
 * <e-bubbleSettings>
 * <e-bubbleSetting>
 * </e-bubbleSetting>
 * </e-bubbleSettings>
 * </e-layer>
 * </e-layers>
 * </ejs-maps>
 * ```
 */
let BubbleDirective = class BubbleDirective extends Vue {
    render() {
        return;
    }
};
BubbleDirective = __decorate$3([
    EJComponentDecorator({})
], BubbleDirective);
const BubblePlugin = {
    name: 'e-bubbleSetting',
    install(Vue$$1) {
        Vue$$1.component(BubblePlugin.name, BubbleDirective);
    }
};

var __decorate$4 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let NavigationLinesDirective = class NavigationLinesDirective extends Vue {
    render() {
        return;
    }
};
NavigationLinesDirective = __decorate$4([
    EJComponentDecorator({})
], NavigationLinesDirective);
const NavigationLinesPlugin = {
    name: 'e-navigationLineSettings',
    install(Vue$$1) {
        Vue$$1.component(NavigationLinesPlugin.name, NavigationLinesDirective);
    }
};
/**
 * `NavigationLinesDirective` directive represent a bubble settings of the Vuejs maps.
 * ```vue
 * <ejs-maps>
 * <e-layers>
 * <e-layer>
 * <e-navigationLineSettings>
 * <e-navigationLineSetting>
 * </e-navigationLineSetting>
 * </e-navigationLineSettings>
 * </e-layer>
 * </e-layers>
 * </ejs-maps>
 * ```
 */
let NavigationLineDirective = class NavigationLineDirective extends Vue {
    render() {
        return;
    }
};
NavigationLineDirective = __decorate$4([
    EJComponentDecorator({})
], NavigationLineDirective);
const NavigationLinePlugin = {
    name: 'e-navigationLineSetting',
    install(Vue$$1) {
        Vue$$1.component(NavigationLinePlugin.name, NavigationLineDirective);
    }
};

var __decorate$5 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let LayersDirective = class LayersDirective extends Vue {
    render() {
        return;
    }
};
LayersDirective = __decorate$5([
    EJComponentDecorator({})
], LayersDirective);
const LayersPlugin = {
    name: 'e-layers',
    install(Vue$$1) {
        Vue$$1.component(LayersPlugin.name, LayersDirective);
    }
};
/**
 * `LayersDirective` directive represent a layers of the react maps.
 * ```vue
 * <ejs-maps>
 * <e-layers>
 * <e-layer></e-layer>
 * </e-layers>
 * </ejs-maps>
 * ```
 */
let LayerDirective = class LayerDirective extends Vue {
    render() {
        return;
    }
};
LayerDirective = __decorate$5([
    EJComponentDecorator({})
], LayerDirective);
const LayerPlugin = {
    name: 'e-layer',
    install(Vue$$1) {
        Vue$$1.component(LayerPlugin.name, LayerDirective);
    }
};

var __decorate$6 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let AnnotationsDirective = class AnnotationsDirective extends Vue {
    render() {
        return;
    }
};
AnnotationsDirective = __decorate$6([
    EJComponentDecorator({})
], AnnotationsDirective);
const AnnotationsPlugin = {
    name: 'e-maps-annotations',
    install(Vue$$1) {
        Vue$$1.component(AnnotationsPlugin.name, AnnotationsDirective);
    }
};
/**
 * `AnnotationsDirective` directive represent a annotation of the Vuejs maps.
 * ```vue
 * <ejs-maps>
 * <e-maps-annotations>
 * <e-maps-annotation></e-maps-annotation>
 * </e-maps-annotations>
 * </ejs-maps>
 * ```
 */
let AnnotationDirective = class AnnotationDirective extends Vue {
    render() {
        return;
    }
};
AnnotationDirective = __decorate$6([
    EJComponentDecorator({})
], AnnotationDirective);
const AnnotationPlugin = {
    name: 'e-maps-annotation',
    install(Vue$$1) {
        Vue$$1.component(AnnotationPlugin.name, AnnotationDirective);
    }
};

var __decorate$7 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const properties = ['annotations', 'background', 'baseLayerIndex', 'border', 'centerPosition', 'description', 'enablePersistence', 'enableRtl', 'format', 'height', 'layers', 'legendSettings', 'locale', 'mapsArea', 'margin', 'projectionType', 'tabIndex', 'theme', 'titleSettings', 'tooltipDisplayMode', 'useGroupingSeparator', 'width', 'zoomSettings', 'animationComplete', 'annotationRendering', 'beforePrint', 'bubbleClick', 'bubbleMouseMove', 'bubbleRendering', 'click', 'dataLabelRendering', 'doubleClick', 'itemHighlight', 'itemSelection', 'layerRendering', 'legendRendering', 'load', 'loaded', 'markerClick', 'markerClusterClick', 'markerClusterMouseMove', 'markerClusterRendering', 'markerMouseMove', 'markerRendering', 'pan', 'resize', 'rightClick', 'shapeHighlight', 'shapeRendering', 'shapeSelected', 'tooltipRender', 'tooltipRenderComplete', 'zoom'];
const modelProps = ['dataSource'];
/**
 * Represents Vuejs Maps Component
 * ```vue
 * <ejs-maps></ejs-maps>
 * ```
 */
let MapsComponent = class MapsComponent extends ComponentBase {
    constructor() {
        super();
        this.propKeys = properties;
        this.models = modelProps;
        this.hasChildDirective = true;
        this.hasInjectedModules = true;
        this.tagMapper = { "e-layers": { "e-layer": { "e-initialShapeSelections": "e-initialShapeSelection", "e-markerSettings": "e-markerSetting", "e-bubbleSettings": { "e-bubbleSetting": { "e-colorMappings": "e-colorMapping" } }, "e-navigationLineSettings": "e-navigationLineSetting" } }, "e-maps-annotations": "e-maps-annotation" };
        this.tagNameMapper = { "e-initialShapeSelections": "e-initialShapeSelection", "e-colorMappings": "e-colorMapping", "e-maps-annotations": "e-annotations" };
        this.ej2Instances = new Maps({});
        this.ej2Instances._trigger = this.ej2Instances.trigger;
        this.ej2Instances.trigger = this.trigger;
        this.bindProperties();
        this.ej2Instances._setProperties = this.ej2Instances.setProperties;
        this.ej2Instances.setProperties = this.setProperties;
    }
    setProperties(prop, muteOnChange) {
        if (this.ej2Instances && this.ej2Instances._setProperties) {
            this.ej2Instances._setProperties(prop, muteOnChange);
        }
        if (prop && this.models && this.models.length) {
            Object.keys(prop).map((key) => {
                this.models.map((model) => {
                    if ((key === model) && !(/datasource/i.test(key))) {
                        this.$emit('update:' + key, prop[key]);
                    }
                });
            });
        }
    }
    trigger(eventName, eventProp, successHandler) {
        if ((eventName === 'change' || eventName === 'input') && this.models && (this.models.length !== 0)) {
            let key = this.models.toString().match(/checked|value/) || [];
            let propKey = key[0];
            if (eventProp && key && !isUndefined(eventProp[propKey])) {
                this.$emit('update:' + propKey, eventProp[propKey]);
                this.$emit('modelchanged', eventProp[propKey]);
            }
        }
        else if ((eventName === 'actionBegin' && eventProp.requestType === 'dateNavigate') && this.models && (this.models.length !== 0)) {
            let key = this.models.toString().match(/currentView|selectedDate/) || [];
            let propKey = key[0];
            if (eventProp && key && !isUndefined(eventProp[propKey])) {
                this.$emit('update:' + propKey, eventProp[propKey]);
                this.$emit('modelchanged', eventProp[propKey]);
            }
        }
        if (this.ej2Instances && this.ej2Instances._trigger) {
            this.ej2Instances._trigger(eventName, eventProp, successHandler);
        }
    }
    render(createElement) {
        return createElement('div', this.$slots.default);
    }
    addLayer(layer) {
        return this.ej2Instances.addLayer(layer);
    }
    addMarker(layerIndex, markerCollection) {
        return this.ej2Instances.addMarker(layerIndex, markerCollection);
    }
    export(type, fileName, orientation, isDownload) {
        return this.ej2Instances.export(type, fileName, orientation, isDownload);
    }
    getGeoLocation(layerIndex, location) {
        return this.ej2Instances.getGeoLocation(layerIndex, location);
    }
    getLocalizedLabel(key) {
        return this.ej2Instances.getLocalizedLabel(key);
    }
    getTileGeoLocation(location) {
        return this.ej2Instances.getTileGeoLocation(location);
    }
    mapsOnClick(e) {
        return this.ej2Instances.mapsOnClick(e);
    }
    mapsOnDoubleClick(e) {
        return this.ej2Instances.mapsOnDoubleClick(e);
    }
    mapsOnResize(e) {
        return this.ej2Instances.mapsOnResize(e);
    }
    mouseDownOnMap(e) {
        return this.ej2Instances.mouseDownOnMap(e);
    }
    mouseEndOnMap(e) {
        return this.ej2Instances.mouseEndOnMap(e);
    }
    mouseLeaveOnMap(e) {
        return this.ej2Instances.mouseLeaveOnMap(e);
    }
    mouseMoveOnMap(e) {
        return this.ej2Instances.mouseMoveOnMap(e);
    }
    onMouseMove(e) {
        return this.ej2Instances.onMouseMove(e);
    }
    panByDirection(direction, mouseLocation) {
        return this.ej2Instances.panByDirection(direction, mouseLocation);
    }
    pointToLatLong(pageX, pageY) {
        return this.ej2Instances.pointToLatLong(pageX, pageY);
    }
    print(id) {
        return this.ej2Instances.print(id);
    }
    processResponseJsonData(processType, data, layer, dataType) {
        return this.ej2Instances.processResponseJsonData(processType, data, layer, dataType);
    }
    removeLayer(index) {
        return this.ej2Instances.removeLayer(index);
    }
    shapeSelection(layerIndex, propertyName, name, enable) {
        return this.ej2Instances.shapeSelection(layerIndex, propertyName, name, enable);
    }
    zoomByPosition(centerPosition, zoomFactor) {
        return this.ej2Instances.zoomByPosition(centerPosition, zoomFactor);
    }
    zoomToCoordinates(minLatitude, minLongitude, maxLatitude, maxLongitude) {
        return this.ej2Instances.zoomToCoordinates(minLatitude, minLongitude, maxLatitude, maxLongitude);
    }
};
MapsComponent = __decorate$7([
    EJComponentDecorator({
        props: properties,
        model: {
            event: 'modelchanged'
        }
    })
], MapsComponent);
const MapsPlugin = {
    name: 'ejs-maps',
    install(Vue$$1) {
        Vue$$1.component(MapsPlugin.name, MapsComponent);
        Vue$$1.component(LayerPlugin.name, LayerDirective);
        Vue$$1.component(LayersPlugin.name, LayersDirective);
        Vue$$1.component(InitialShapeSelectionPlugin.name, InitialShapeSelectionDirective);
        Vue$$1.component(InitialShapeSelectionsPlugin.name, InitialShapeSelectionsDirective);
        Vue$$1.component(MarkerPlugin.name, MarkerDirective);
        Vue$$1.component(MarkersPlugin.name, MarkersDirective);
        Vue$$1.component(BubblePlugin.name, BubbleDirective);
        Vue$$1.component(BubblesPlugin.name, BubblesDirective);
        Vue$$1.component(ColorMappingPlugin.name, ColorMappingDirective);
        Vue$$1.component(ColorMappingsPlugin.name, ColorMappingsDirective);
        Vue$$1.component(NavigationLinePlugin.name, NavigationLineDirective);
        Vue$$1.component(NavigationLinesPlugin.name, NavigationLinesDirective);
        Vue$$1.component(AnnotationPlugin.name, AnnotationDirective);
        Vue$$1.component(AnnotationsPlugin.name, AnnotationsDirective);
    }
};

export { InitialShapeSelectionsDirective, InitialShapeSelectionDirective, InitialShapeSelectionsPlugin, InitialShapeSelectionPlugin, MarkersDirective, MarkerDirective, MarkersPlugin, MarkerPlugin, ColorMappingsDirective, ColorMappingDirective, ColorMappingsPlugin, ColorMappingPlugin, BubblesDirective, BubbleDirective, BubblesPlugin, BubblePlugin, NavigationLinesDirective, NavigationLineDirective, NavigationLinesPlugin, NavigationLinePlugin, LayersDirective, LayerDirective, LayersPlugin, LayerPlugin, AnnotationsDirective, AnnotationDirective, AnnotationsPlugin, AnnotationPlugin, MapsComponent, MapsPlugin };
export * from '@syncfusion/ej2-maps';
//# sourceMappingURL=ej2-vue-maps.es2015.js.map
