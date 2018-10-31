import { Diagram, Overview, SymbolPalette } from '@syncfusion/ej2-diagrams';
import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
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
LayersDirective = __decorate([
    EJComponentDecorator({})
], LayersDirective);
const LayersPlugin = {
    name: 'e-layers',
    install(Vue$$1) {
        Vue$$1.component(LayersPlugin.name, LayersDirective);
    }
};
let LayerDirective = class LayerDirective extends Vue {
    render() {
        return;
    }
};
LayerDirective = __decorate([
    EJComponentDecorator({})
], LayerDirective);
const LayerPlugin = {
    name: 'e-layer',
    install(Vue$$1) {
        Vue$$1.component(LayerPlugin.name, LayerDirective);
    }
};

var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let ConnectorAnnotationsDirective = class ConnectorAnnotationsDirective extends Vue {
    render() {
        return;
    }
};
ConnectorAnnotationsDirective = __decorate$1([
    EJComponentDecorator({})
], ConnectorAnnotationsDirective);
const ConnectorAnnotationsPlugin = {
    name: 'e-connector-annotations',
    install(Vue$$1) {
        Vue$$1.component(ConnectorAnnotationsPlugin.name, ConnectorAnnotationsDirective);
    }
};
let ConnectorAnnotationDirective = class ConnectorAnnotationDirective extends Vue {
    render() {
        return;
    }
};
ConnectorAnnotationDirective = __decorate$1([
    EJComponentDecorator({})
], ConnectorAnnotationDirective);
const ConnectorAnnotationPlugin = {
    name: 'e-connector-annotation',
    install(Vue$$1) {
        Vue$$1.component(ConnectorAnnotationPlugin.name, ConnectorAnnotationDirective);
    }
};

var __decorate$2 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let ConnectorsDirective = class ConnectorsDirective extends Vue {
    render() {
        return;
    }
};
ConnectorsDirective = __decorate$2([
    EJComponentDecorator({})
], ConnectorsDirective);
const ConnectorsPlugin = {
    name: 'e-connectors',
    install(Vue$$1) {
        Vue$$1.component(ConnectorsPlugin.name, ConnectorsDirective);
    }
};
let ConnectorDirective = class ConnectorDirective extends Vue {
    render() {
        return;
    }
};
ConnectorDirective = __decorate$2([
    EJComponentDecorator({})
], ConnectorDirective);
const ConnectorPlugin = {
    name: 'e-connector',
    install(Vue$$1) {
        Vue$$1.component(ConnectorPlugin.name, ConnectorDirective);
    }
};

var __decorate$3 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let NodeAnnotationsDirective = class NodeAnnotationsDirective extends Vue {
    render() {
        return;
    }
};
NodeAnnotationsDirective = __decorate$3([
    EJComponentDecorator({})
], NodeAnnotationsDirective);
const NodeAnnotationsPlugin = {
    name: 'e-node-annotations',
    install(Vue$$1) {
        Vue$$1.component(NodeAnnotationsPlugin.name, NodeAnnotationsDirective);
    }
};
let NodeAnnotationDirective = class NodeAnnotationDirective extends Vue {
    render() {
        return;
    }
};
NodeAnnotationDirective = __decorate$3([
    EJComponentDecorator({})
], NodeAnnotationDirective);
const NodeAnnotationPlugin = {
    name: 'e-node-annotation',
    install(Vue$$1) {
        Vue$$1.component(NodeAnnotationPlugin.name, NodeAnnotationDirective);
    }
};

var __decorate$4 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let PortsDirective = class PortsDirective extends Vue {
    render() {
        return;
    }
};
PortsDirective = __decorate$4([
    EJComponentDecorator({})
], PortsDirective);
const PortsPlugin = {
    name: 'e-node-ports',
    install(Vue$$1) {
        Vue$$1.component(PortsPlugin.name, PortsDirective);
    }
};
let PortDirective = class PortDirective extends Vue {
    render() {
        return;
    }
};
PortDirective = __decorate$4([
    EJComponentDecorator({})
], PortDirective);
const PortPlugin = {
    name: 'e-node-port',
    install(Vue$$1) {
        Vue$$1.component(PortPlugin.name, PortDirective);
    }
};

var __decorate$5 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let NodesDirective = class NodesDirective extends Vue {
    render() {
        return;
    }
};
NodesDirective = __decorate$5([
    EJComponentDecorator({})
], NodesDirective);
const NodesPlugin = {
    name: 'e-nodes',
    install(Vue$$1) {
        Vue$$1.component(NodesPlugin.name, NodesDirective);
    }
};
let NodeDirective = class NodeDirective extends Vue {
    render() {
        return;
    }
};
NodeDirective = __decorate$5([
    EJComponentDecorator({})
], NodeDirective);
const NodePlugin = {
    name: 'e-node',
    install(Vue$$1) {
        Vue$$1.component(NodePlugin.name, NodeDirective);
    }
};

var __decorate$6 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const properties = ['addInfo', 'backgroundColor', 'bridgeDirection', 'commandManager', 'connectors', 'constraints', 'contextMenuSettings', 'dataSourceSettings', 'drawingObject', 'enablePersistence', 'enableRtl', 'getConnectorDefaults', 'getCustomCursor', 'getCustomProperty', 'getCustomTool', 'getDescription', 'getNodeDefaults', 'height', 'layers', 'layout', 'locale', 'mode', 'nodes', 'pageSettings', 'rulerSettings', 'scrollSettings', 'selectedItems', 'setNodeTemplate', 'snapSettings', 'tool', 'tooltip', 'width', 'animationComplete', 'click', 'collectionChange', 'connectionChange', 'contextMenuClick', 'contextMenuOpen', 'created', 'dataLoaded', 'doubleClick', 'dragEnter', 'dragLeave', 'dragOver', 'drop', 'historyChange', 'mouseEnter', 'mouseLeave', 'mouseOver', 'positionChange', 'propertyChange', 'rotateChange', 'scrollChange', 'selectionChange', 'sizeChange', 'sourcePointChange', 'targetPointChange', 'textEdit'];
const modelProps = [];
let DiagramComponent = class DiagramComponent extends ComponentBase {
    constructor() {
        super();
        this.propKeys = properties;
        this.models = modelProps;
        this.hasChildDirective = true;
        this.hasInjectedModules = true;
        this.tagMapper = { "e-layers": "e-layer", "e-connectors": { "e-connector": { "e-connector-annotations": "e-connector-annotation" } }, "e-nodes": { "e-node": { "e-node-annotations": "e-node-annotation", "e-node-ports": "e-node-port" } } };
        this.tagNameMapper = { "e-connector-annotations": "e-annotations", "e-node-annotations": "e-annotations", "e-node-ports": "e-ports" };
        this.ej2Instances = new Diagram({});
        this.bindProperties();
    }
    render(createElement) {
        return createElement('div', this.$slots.default);
    }
    add(obj, group) {
        return this.ej2Instances.add(obj, group);
    }
    addHistoryEntry(entry) {
        return this.ej2Instances.addHistoryEntry(entry);
    }
    addLabels(obj, labels) {
        return this.ej2Instances.addLabels(obj, labels);
    }
    addLayer(layer, layerObject) {
        return this.ej2Instances.addLayer(layer, layerObject);
    }
    addPorts(obj, ports) {
        return this.ej2Instances.addPorts(obj, ports);
    }
    addProcess(process, parentId) {
        return this.ej2Instances.addProcess(process, parentId);
    }
    addTextAnnotation(annotation, node) {
        return this.ej2Instances.addTextAnnotation(annotation, node);
    }
    align(option, objects, type) {
        return this.ej2Instances.align(option, objects, type);
    }
    bringIntoView(bound) {
        return this.ej2Instances.bringIntoView(bound);
    }
    bringLayerForward(layerName) {
        return this.ej2Instances.bringLayerForward(layerName);
    }
    bringToCenter(bound) {
        return this.ej2Instances.bringToCenter(bound);
    }
    bringToFront() {
        return this.ej2Instances.bringToFront();
    }
    clear() {
        return this.ej2Instances.clear();
    }
    clearSelection() {
        return this.ej2Instances.clearSelection();
    }
    cloneLayer(layerName) {
        return this.ej2Instances.cloneLayer(layerName);
    }
    copy() {
        return this.ej2Instances.copy();
    }
    createSvg(id, width, height) {
        return this.ej2Instances.createSvg(id, width, height);
    }
    cut() {
        return this.ej2Instances.cut();
    }
    distribute(option, objects) {
        return this.ej2Instances.distribute(option, objects);
    }
    doLayout() {
        return this.ej2Instances.doLayout();
    }
    drag(obj, tx, ty) {
        return this.ej2Instances.drag(obj, tx, ty);
    }
    dragSourceEnd(obj, tx, ty) {
        return this.ej2Instances.dragSourceEnd(obj, tx, ty);
    }
    dragTargetEnd(obj, tx, ty) {
        return this.ej2Instances.dragTargetEnd(obj, tx, ty);
    }
    endGroupAction() {
        return this.ej2Instances.endGroupAction();
    }
    exportDiagram(options) {
        return this.ej2Instances.exportDiagram(options);
    }
    findElementUnderMouse(obj, position) {
        return this.ej2Instances.findElementUnderMouse(obj, position);
    }
    findObjectUnderMouse(objects, action, inAction) {
        return this.ej2Instances.findObjectUnderMouse(objects, action, inAction);
    }
    findObjectsUnderMouse(position, source) {
        return this.ej2Instances.findObjectsUnderMouse(position, source);
    }
    findTargetObjectUnderMouse(objects, action, inAction, position, source) {
        return this.ej2Instances.findTargetObjectUnderMouse(objects, action, inAction, position, source);
    }
    fitToPage(options) {
        return this.ej2Instances.fitToPage(options);
    }
    getActiveLayer() {
        return this.ej2Instances.getActiveLayer();
    }
    getCursor(action, active) {
        return this.ej2Instances.getCursor(action, active);
    }
    getEndNodeWrapper(node, connector, source) {
        return this.ej2Instances.getEndNodeWrapper(node, connector, source);
    }
    getObject(name) {
        return this.ej2Instances.getObject(name);
    }
    getTool(action) {
        return this.ej2Instances.getTool(action);
    }
    group() {
        return this.ej2Instances.group();
    }
    initLayerObjects() {
        return this.ej2Instances.initLayerObjects();
    }
    loadDiagram(data) {
        return this.ej2Instances.loadDiagram(data);
    }
    moveForward() {
        return this.ej2Instances.moveForward();
    }
    moveObjects(objects, targetLayer) {
        return this.ej2Instances.moveObjects(objects, targetLayer);
    }
    nudge(direction, x, y) {
        return this.ej2Instances.nudge(direction, x, y);
    }
    pan(horizontalOffset, verticalOffset, focusedPoint) {
        return this.ej2Instances.pan(horizontalOffset, verticalOffset, focusedPoint);
    }
    paste(obj) {
        return this.ej2Instances.paste(obj);
    }
    print(options) {
        return this.ej2Instances.print(options);
    }
    redo() {
        return this.ej2Instances.redo();
    }
    remove(obj) {
        return this.ej2Instances.remove(obj);
    }
    removeElements(currentObj) {
        return this.ej2Instances.removeElements(currentObj);
    }
    removeLabels(obj, labels) {
        return this.ej2Instances.removeLabels(obj, labels);
    }
    removeLayer(layerId) {
        return this.ej2Instances.removeLayer(layerId);
    }
    removeObjectsFromLayer(obj) {
        return this.ej2Instances.removeObjectsFromLayer(obj);
    }
    removePorts(obj, ports) {
        return this.ej2Instances.removePorts(obj, ports);
    }
    removeProcess(id) {
        return this.ej2Instances.removeProcess(id);
    }
    renderSelectorForAnnotation(selectorModel, selectorElement) {
        return this.ej2Instances.renderSelectorForAnnotation(selectorModel, selectorElement);
    }
    reset() {
        return this.ej2Instances.reset();
    }
    rotate(obj, angle, pivot) {
        return this.ej2Instances.rotate(obj, angle, pivot);
    }
    sameSize(option, objects) {
        return this.ej2Instances.sameSize(option, objects);
    }
    saveDiagram() {
        return this.ej2Instances.saveDiagram();
    }
    scale(obj, sx, sy, pivot) {
        return this.ej2Instances.scale(obj, sx, sy, pivot);
    }
    select(objects, multipleSelection) {
        return this.ej2Instances.select(objects, multipleSelection);
    }
    selectAll() {
        return this.ej2Instances.selectAll();
    }
    sendBackward() {
        return this.ej2Instances.sendBackward();
    }
    sendLayerBackward(layerName) {
        return this.ej2Instances.sendLayerBackward(layerName);
    }
    sendToBack() {
        return this.ej2Instances.sendToBack();
    }
    setActiveLayer(layerName) {
        return this.ej2Instances.setActiveLayer(layerName);
    }
    startGroupAction() {
        return this.ej2Instances.startGroupAction();
    }
    startTextEdit(node, id) {
        return this.ej2Instances.startTextEdit(node, id);
    }
    unGroup() {
        return this.ej2Instances.unGroup();
    }
    unSelect(obj) {
        return this.ej2Instances.unSelect(obj);
    }
    undo() {
        return this.ej2Instances.undo();
    }
    updateConnectorEdges(actualObject) {
        return this.ej2Instances.updateConnectorEdges(actualObject);
    }
    updateViewPort() {
        return this.ej2Instances.updateViewPort();
    }
    updateVirtualObjects(collection, remove, tCollection) {
        return this.ej2Instances.updateVirtualObjects(collection, remove, tCollection);
    }
    zoom(factor, focusedPoint) {
        return this.ej2Instances.zoom(factor, focusedPoint);
    }
    zoomTo(options) {
        return this.ej2Instances.zoomTo(options);
    }
};
DiagramComponent = __decorate$6([
    EJComponentDecorator({
        props: properties
    })
], DiagramComponent);
const DiagramPlugin = {
    name: 'ejs-diagram',
    install(Vue$$1) {
        Vue$$1.component(DiagramPlugin.name, DiagramComponent);
        Vue$$1.component(LayerPlugin.name, LayerDirective);
        Vue$$1.component(LayersPlugin.name, LayersDirective);
        Vue$$1.component(ConnectorPlugin.name, ConnectorDirective);
        Vue$$1.component(ConnectorsPlugin.name, ConnectorsDirective);
        Vue$$1.component(ConnectorAnnotationPlugin.name, ConnectorAnnotationDirective);
        Vue$$1.component(ConnectorAnnotationsPlugin.name, ConnectorAnnotationsDirective);
        Vue$$1.component(NodePlugin.name, NodeDirective);
        Vue$$1.component(NodesPlugin.name, NodesDirective);
        Vue$$1.component(NodeAnnotationPlugin.name, NodeAnnotationDirective);
        Vue$$1.component(NodeAnnotationsPlugin.name, NodeAnnotationsDirective);
        Vue$$1.component(PortPlugin.name, PortDirective);
        Vue$$1.component(PortsPlugin.name, PortsDirective);
    }
};

var __decorate$7 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let PalettesDirective = class PalettesDirective extends Vue {
    render() {
        return;
    }
};
PalettesDirective = __decorate$7([
    EJComponentDecorator({})
], PalettesDirective);
const PalettesPlugin = {
    name: 'e-palettes',
    install(Vue$$1) {
        Vue$$1.component(PalettesPlugin.name, PalettesDirective);
    }
};
let PaletteDirective = class PaletteDirective extends Vue {
    render() {
        return;
    }
};
PaletteDirective = __decorate$7([
    EJComponentDecorator({})
], PaletteDirective);
const PalettePlugin = {
    name: 'e-palette',
    install(Vue$$1) {
        Vue$$1.component(PalettePlugin.name, PaletteDirective);
    }
};

var __decorate$8 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const properties$1 = ['accessKey', 'allowDrag', 'enableAnimation', 'enablePersistence', 'enableRtl', 'enableSearch', 'expandMode', 'filterSymbols', 'getConnectorDefaults', 'getNodeDefaults', 'getSymbolInfo', 'getSymbolTemplate', 'height', 'locale', 'palettes', 'symbolHeight', 'symbolMargin', 'symbolPreview', 'symbolWidth', 'width', 'paletteSelectionChange'];
const modelProps$1 = [];
let SymbolPaletteComponent = class SymbolPaletteComponent extends ComponentBase {
    constructor() {
        super();
        this.propKeys = properties$1;
        this.models = modelProps$1;
        this.hasChildDirective = true;
        this.hasInjectedModules = true;
        this.tagMapper = { "e-palettes": "e-palette" };
        this.tagNameMapper = {};
        this.ej2Instances = new SymbolPalette({});
        this.bindProperties();
    }
    render(createElement) {
        return createElement('div', this.$slots.default);
    }
    addPaletteItem(paletteName, paletteSymbol) {
        return this.ej2Instances.addPaletteItem(paletteName, paletteSymbol);
    }
    removePaletteItem(paletteName, symbolId) {
        return this.ej2Instances.removePaletteItem(paletteName, symbolId);
    }
};
SymbolPaletteComponent = __decorate$8([
    EJComponentDecorator({
        props: properties$1
    })
], SymbolPaletteComponent);
const SymbolPalettePlugin = {
    name: 'ejs-symbolpalette',
    install(Vue$$1) {
        Vue$$1.component(SymbolPalettePlugin.name, SymbolPaletteComponent);
        Vue$$1.component(PalettePlugin.name, PaletteDirective);
        Vue$$1.component(PalettesPlugin.name, PalettesDirective);
    }
};

var __decorate$9 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const properties$2 = ['enablePersistence', 'enableRtl', 'height', 'locale', 'sourceID', 'width', 'created'];
const modelProps$2 = [];
let OverviewComponent = class OverviewComponent extends ComponentBase {
    constructor() {
        super();
        this.propKeys = properties$2;
        this.models = modelProps$2;
        this.hasChildDirective = true;
        this.hasInjectedModules = false;
        this.tagMapper = {};
        this.tagNameMapper = {};
        this.ej2Instances = new Overview({});
        this.bindProperties();
    }
    render(createElement) {
        return createElement('div', this.$slots.default);
    }
};
OverviewComponent = __decorate$9([
    EJComponentDecorator({
        props: properties$2
    })
], OverviewComponent);
const OverviewPlugin = {
    name: 'ejs-overview',
    install(Vue$$1) {
        Vue$$1.component(OverviewPlugin.name, OverviewComponent);
    }
};

export { LayersDirective, LayerDirective, LayersPlugin, LayerPlugin, ConnectorAnnotationsDirective, ConnectorAnnotationDirective, ConnectorAnnotationsPlugin, ConnectorAnnotationPlugin, ConnectorsDirective, ConnectorDirective, ConnectorsPlugin, ConnectorPlugin, NodeAnnotationsDirective, NodeAnnotationDirective, NodeAnnotationsPlugin, NodeAnnotationPlugin, PortsDirective, PortDirective, PortsPlugin, PortPlugin, NodesDirective, NodeDirective, NodesPlugin, NodePlugin, DiagramComponent, DiagramPlugin, PalettesDirective, PaletteDirective, PalettesPlugin, PalettePlugin, SymbolPaletteComponent, SymbolPalettePlugin, OverviewComponent, OverviewPlugin };
export * from '@syncfusion/ej2-diagrams';
//# sourceMappingURL=ej2-vue-diagrams.es2015.js.map
