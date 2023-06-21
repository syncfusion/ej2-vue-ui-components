import { ComponentBase, gh, getProps, isExecute, vueDefineComponent } from '@syncfusion/ej2-vue-base';
import { isNullOrUndefined, getValue } from '@syncfusion/ej2-base';

import { Diagram } from '@syncfusion/ej2-diagrams';
import { LayersDirective, LayerDirective, LayersPlugin, LayerPlugin } from './layers.directive'
import { CustomCursorsDirective, CustomCursorDirective, CustomCursorsPlugin, CustomCursorPlugin } from './customcursor.directive'
import { ConnectorFixedUserHandlesDirective, ConnectorFixedUserHandleDirective, ConnectorFixedUserHandlesPlugin, ConnectorFixedUserHandlePlugin } from './connector-fixeduserhandle.directive'
import { ConnectorAnnotationsDirective, ConnectorAnnotationDirective, ConnectorAnnotationsPlugin, ConnectorAnnotationPlugin } from './connector-annotation.directive'
import { ConnectorsDirective, ConnectorDirective, ConnectorsPlugin, ConnectorPlugin } from './connectors.directive'
import { NodeFixedUserHandlesDirective, NodeFixedUserHandleDirective, NodeFixedUserHandlesPlugin, NodeFixedUserHandlePlugin } from './node-fixeduserhandle.directive'
import { NodeAnnotationsDirective, NodeAnnotationDirective, NodeAnnotationsPlugin, NodeAnnotationPlugin } from './node-annotation.directive'
import { PortsDirective, PortDirective, PortsPlugin, PortPlugin } from './ports.directive'
import { NodesDirective, NodeDirective, NodesPlugin, NodePlugin } from './nodes.directive'


export const properties: string[] = ['isLazyUpdate', 'plugins', 'addInfo', 'annotationTemplate', 'backgroundColor', 'bridgeDirection', 'commandManager', 'connectorDefaults', 'connectors', 'constraints', 'contextMenuSettings', 'customCursor', 'dataSourceSettings', 'diagramSettings', 'drawingObject', 'enableConnectorSplit', 'enablePersistence', 'enableRtl', 'getConnectorDefaults', 'getCustomCursor', 'getCustomProperty', 'getCustomTool', 'getDescription', 'getNodeDefaults', 'height', 'historyManager', 'layers', 'layout', 'locale', 'mode', 'nodeDefaults', 'nodeTemplate', 'nodes', 'pageSettings', 'rulerSettings', 'scrollSettings', 'segmentThumbShape', 'selectedItems', 'serializationSettings', 'setNodeTemplate', 'snapSettings', 'tool', 'tooltip', 'updateSelection', 'userHandleTemplate', 'width', 'animationComplete', 'click', 'collectionChange', 'commandExecute', 'connectionChange', 'contextMenuBeforeItemRender', 'contextMenuClick', 'contextMenuOpen', 'created', 'dataLoaded', 'doubleClick', 'dragEnter', 'dragLeave', 'dragOver', 'drop', 'expandStateChange', 'fixedUserHandleClick', 'historyChange', 'historyStateChange', 'keyDown', 'keyUp', 'mouseEnter', 'mouseLeave', 'mouseOver', 'mouseWheel', 'onImageLoad', 'onUserHandleMouseDown', 'onUserHandleMouseEnter', 'onUserHandleMouseLeave', 'onUserHandleMouseUp', 'positionChange', 'propertyChange', 'rotateChange', 'scrollChange', 'segmentChange', 'segmentCollectionChange', 'selectionChange', 'sizeChange', 'sourcePointChange', 'targetPointChange', 'textEdit', 'elementDraw'];
export const modelProps: string[] = [];

export const testProp: any = getProps({props: properties});
export const props = testProp[0], watch = testProp[1], emitProbs: any = Object.keys(watch);
emitProbs.push('modelchanged', 'update:modelValue');
for (let props of modelProps) { emitProbs.push('update:'+props) }

/**
 * Represents vue Diagram Component
 * ```html
 * <ejs-diagram></ejs-diagram>
 * ```
 */
export let DiagramComponent =  vueDefineComponent({
    name: 'DiagramComponent',
    mixins: [ComponentBase],
    props: props,
    watch: watch,
    emits: emitProbs,
    provide() { return { custom: this.custom } },
    data() {
        return {
            ej2Instance: new Diagram({}) as any,
            propKeys: properties as string[],
            models: modelProps as string[],
            hasChildDirective: true as boolean,
            hasInjectedModules: true as boolean,
            tagMapper: {"e-layers":"e-layer","e-cursormaps":"e-cursormap","e-connectors":{"e-connector":{"e-connector-fixeduserhandles":"e-connector-fixeduserhandle","e-connector-annotations":"e-connector-annotation"}},"e-nodes":{"e-node":{"e-node-fixeduserhandles":"e-node-fixeduserhandle","e-node-annotations":"e-node-annotation","e-node-ports":"e-node-port"}}} as { [key: string]: Object },
            tagNameMapper: {"e-cursormaps":"e-customCursor","e-connector-fixeduserhandles":"e-fixedUserHandles","e-connector-annotations":"e-annotations","e-node-fixeduserhandles":"e-fixedUserHandles","e-node-annotations":"e-annotations","e-node-ports":"e-ports"} as Object,
            isVue3: !isExecute as boolean,
            templateCollection: {} as any,
        }
    },
    created() {

        this.bindProperties();
        this.ej2Instances._setProperties = this.ej2Instances.setProperties;
        this.ej2Instances.setProperties = this.setProperties;
        this.ej2Instances.clearTemplate = this.clearTemplate;
        this.updated = this.updated;
    },
    render(createElement: any) {
        let h: any = !isExecute ? gh : createElement;
        let slots: any = null;
        if(!isNullOrUndefined((this as any).$slots.default)) {
            slots = !isExecute ? (this as any).$slots.default() : (this as any).$slots.default;
        }
        return h('div', slots);
    },
    methods: {
        clearTemplate(templateNames?: string[]): any {
            if (!templateNames){ templateNames = Object.keys(this.templateCollection || {}) }
            if (templateNames.length &&  this.templateCollection) {
                for (let tempName of templateNames){
                    let elementCollection: any = this.templateCollection[tempName];
                    if(elementCollection && elementCollection.length) {
                        for(let ele of elementCollection) {
                            let destroy: any = getValue('__vue__.$destroy', ele);
                            if (destroy) { ele.__vue__.$destroy() }
                            if (ele.innerHTML) { ele.innerHTML = '' }
                        }
                        delete this.templateCollection[tempName];
                    }
                }
            }
        },
        setProperties(prop: any, muteOnChange: boolean): void {
            if(this.isVue3) { this.models = !this.models ? this.ej2Instances.referModels : this.models }
            if (this.ej2Instances && this.ej2Instances._setProperties) {
                this.ej2Instances._setProperties(prop, muteOnChange);
            }
            if (prop && this.models && this.models.length) {
                Object.keys(prop).map((key: string): void => {
                    this.models.map((model: string): void => {
                        if ((key === model) && !(/datasource/i.test(key))) {
                            if (this.isVue3) {
                                this.ej2Instances.vueInstance.$emit('update:' + key, prop[key]);
                            } else {
                                (this as any).$emit('update:' + key, prop[key]);
                                (this as any).$emit('modelchanged', prop[key]);
                            }
                        }
                    });
                });
            }
        },
        custom(): void {
            this.updated();
        },
        add(obj: Object | Object, group?: boolean): Object | Object {
            return this.ej2Instances.add(obj, group);
        },
        addChildToGroup(group: Object, child: string | Object | Object): void {
            return this.ej2Instances.addChildToGroup(group, child);
        },
        addConnector(obj: Object): Object {
            return this.ej2Instances.addConnector(obj);
        },
        addConnectorLabels(obj: Object, labels: Object[]): void {
            return this.ej2Instances.addConnectorLabels(obj, labels);
        },
        addConstraints(constraintsType: number, constraintsValue: number): number {
            return this.ej2Instances.addConstraints(constraintsType, constraintsValue);
        },
        addCustomHistoryEntry(entry: Object): void {
            return this.ej2Instances.addCustomHistoryEntry(entry);
        },
        addHistoryEntry(entry: Object, sourceId?: string[]): void {
            return this.ej2Instances.addHistoryEntry(entry, sourceId);
        },
        addLabels(obj: Object | Object, labels: Object[] | Object[] | Object[]): void {
            return this.ej2Instances.addLabels(obj, labels);
        },
        addLanes(node: Object, lane: Object[], index?: number): void {
            return this.ej2Instances.addLanes(node, lane, index);
        },
        addLayer(layer: Object, layerObject?: Object[]): void {
            return this.ej2Instances.addLayer(layer, layerObject);
        },
        addNode(obj: Object, group?: boolean): Object {
            return this.ej2Instances.addNode(obj, group);
        },
        addNodeLabels(obj: Object, labels: Object[]): void {
            return this.ej2Instances.addNodeLabels(obj, labels);
        },
        addNodeToLane(node: Object, swimLane: string, lane: string): void {
            return this.ej2Instances.addNodeToLane(node, swimLane, lane);
        },
        addPhases(node: Object, phases: Object[]): void {
            return this.ej2Instances.addPhases(node, phases);
        },
        addPorts(obj: Object, ports: Object[]): void {
            return this.ej2Instances.addPorts(obj, ports);
        },
        addProcess(process: Object, parentId: string): void {
            return this.ej2Instances.addProcess(process, parentId);
        },
        addTextAnnotation(annotation: Object, node: Object): void {
            return this.ej2Instances.addTextAnnotation(annotation, node);
        },
        align(option: Object, objects?: undefined[], type?: Object): void {
            return this.ej2Instances.align(option, objects, type);
        },
        bringIntoView(bound: Object): void {
            return this.ej2Instances.bringIntoView(bound);
        },
        bringLayerForward(layerName: string): void {
            return this.ej2Instances.bringLayerForward(layerName);
        },
        bringToCenter(bound: Object): void {
            return this.ej2Instances.bringToCenter(bound);
        },
        bringToFront(): void {
            return this.ej2Instances.bringToFront();
        },
        clear(): void {
            return this.ej2Instances.clear();
        },
        clearHistory(): void {
            return this.ej2Instances.clearHistory();
        },
        clearSelection(): void {
            return this.ej2Instances.clearSelection();
        },
        cloneLayer(layerName: string): void {
            return this.ej2Instances.cloneLayer(layerName);
        },
        copy(): Object {
            return this.ej2Instances.copy();
        },
        cut(): void {
            return this.ej2Instances.cut();
        },
        distribute(option: Object, objects?: undefined[]): void {
            return this.ej2Instances.distribute(option, objects);
        },
        doLayout(): Object | boolean {
            return this.ej2Instances.doLayout();
        },
        drag(obj: Object | Object | Object, tx: number, ty: number): void {
            return this.ej2Instances.drag(obj, tx, ty);
        },
        dragSourceEnd(obj: Object, tx: number, ty: number): void {
            return this.ej2Instances.dragSourceEnd(obj, tx, ty);
        },
        dragTargetEnd(obj: Object, tx: number, ty: number): void {
            return this.ej2Instances.dragTargetEnd(obj, tx, ty);
        },
        endGroupAction(): void {
            return this.ej2Instances.endGroupAction();
        },
        exportDiagram(options: Object): string | Object {
            return this.ej2Instances.exportDiagram(options);
        },
        exportImage(image: string, options: Object): void {
            return this.ej2Instances.exportImage(image, options);
        },
        findElementUnderMouse(obj: Object, position: Object, padding?: number): Object {
            return this.ej2Instances.findElementUnderMouse(obj, position, padding);
        },
        findObjectUnderMouse(objects: undefined[], action: Object, inAction: boolean): Object {
            return this.ej2Instances.findObjectUnderMouse(objects, action, inAction);
        },
        findObjectsUnderMouse(position: Object, source?: Object): Object[] {
            return this.ej2Instances.findObjectsUnderMouse(position, source);
        },
        findTargetObjectUnderMouse(objects: undefined[], action: Object, inAction: boolean, position: Object, source?: Object): Object {
            return this.ej2Instances.findTargetObjectUnderMouse(objects, action, inAction, position, source);
        },
        fitToPage(options?: Object): void {
            return this.ej2Instances.fitToPage(options);
        },
        getActiveLayer(): Object {
            return this.ej2Instances.getActiveLayer();
        },
        getConnectorObject(id: string): Object {
            return this.ej2Instances.getConnectorObject(id);
        },
        getCursor(action: string, active: boolean): string {
            return this.ej2Instances.getCursor(action, active);
        },
        getDiagramAction(diagramAction: Object): string {
            return this.ej2Instances.getDiagramAction(diagramAction);
        },
        getDiagramBounds(): Object {
            return this.ej2Instances.getDiagramBounds();
        },
        getDiagramContent(styleSheets?: Object): string {
            return this.ej2Instances.getDiagramContent(styleSheets);
        },
        getEdges(args: Object): string[] {
            return this.ej2Instances.getEdges(args);
        },
        getHistoryStack(isUndoStack: boolean): Object[] {
            return this.ej2Instances.getHistoryStack(isUndoStack);
        },
        getNodeObject(id: string): Object {
            return this.ej2Instances.getNodeObject(id);
        },
        getObject(name: string): Object {
            return this.ej2Instances.getObject(name);
        },
        getParentId(id: string): string {
            return this.ej2Instances.getParentId(id);
        },
        getTool(action: string): Object {
            return this.ej2Instances.getTool(action);
        },
        group(): void {
            return this.ej2Instances.group();
        },
        hideTooltip(obj: Object | Object): void {
            return this.ej2Instances.hideTooltip(obj);
        },
        insertData(node?: Object | Object): object {
            return this.ej2Instances.insertData(node);
        },
        loadDiagram(data: string, isEJ1Data?: boolean): Object {
            return this.ej2Instances.loadDiagram(data, isEJ1Data);
        },
        moveForward(): void {
            return this.ej2Instances.moveForward();
        },
        moveObjects(objects: string[], targetLayer?: string): void {
            return this.ej2Instances.moveObjects(objects, targetLayer);
        },
        moveObjectsUp(node: Object | Object, currentLayer: Object): void {
            return this.ej2Instances.moveObjectsUp(node, currentLayer);
        },
        nudge(direction: Object, x?: number, y?: number): void {
            return this.ej2Instances.nudge(direction, x, y);
        },
        pan(horizontalOffset: number, verticalOffset: number, focusedPoint?: Object, isInteractiveZoomPan?: boolean): void {
            return this.ej2Instances.pan(horizontalOffset, verticalOffset, focusedPoint, isInteractiveZoomPan);
        },
        paste(obj?: undefined[]): void {
            return this.ej2Instances.paste(obj);
        },
        print(options: Object): void {
            return this.ej2Instances.print(options);
        },
        printImage(image: string, options: Object): void {
            return this.ej2Instances.printImage(image, options);
        },
        redo(): void {
            return this.ej2Instances.redo();
        },
        remove(obj?: Object | Object): void {
            return this.ej2Instances.remove(obj);
        },
        removeConstraints(constraintsType: number, constraintsValue: number): number {
            return this.ej2Instances.removeConstraints(constraintsType, constraintsValue);
        },
        removeData(node?: Object | Object): object {
            return this.ej2Instances.removeData(node);
        },
        removeLabels(obj: Object | Object, labels: Object[] | Object[]): void {
            return this.ej2Instances.removeLabels(obj, labels);
        },
        removeLane(node: Object, lane: Object): void {
            return this.ej2Instances.removeLane(node, lane);
        },
        removeLayer(layerId: string): void {
            return this.ej2Instances.removeLayer(layerId);
        },
        removePhase(node: Object, phase: Object): void {
            return this.ej2Instances.removePhase(node, phase);
        },
        removePorts(obj: Object, ports: Object[]): void {
            return this.ej2Instances.removePorts(obj, ports);
        },
        removeProcess(id: string): void {
            return this.ej2Instances.removeProcess(id);
        },
        reset(): void {
            return this.ej2Instances.reset();
        },
        resetSegments(): void {
            return this.ej2Instances.resetSegments();
        },
        rotate(obj: Object | Object | Object, angle: number, pivot?: Object): boolean {
            return this.ej2Instances.rotate(obj, angle, pivot);
        },
        sameSize(option: Object, objects?: undefined[]): void {
            return this.ej2Instances.sameSize(option, objects);
        },
        saveDiagram(): string {
            return this.ej2Instances.saveDiagram();
        },
        scale(obj: Object | Object | Object, sx: number, sy: number, pivot: Object): boolean {
            return this.ej2Instances.scale(obj, sx, sy, pivot);
        },
        select(objects: undefined[], multipleSelection?: boolean, oldValue?: undefined[]): void {
            return this.ej2Instances.select(objects, multipleSelection, oldValue);
        },
        selectAll(): void {
            return this.ej2Instances.selectAll();
        },
        sendBackward(): void {
            return this.ej2Instances.sendBackward();
        },
        sendLayerBackward(layerName: string): void {
            return this.ej2Instances.sendLayerBackward(layerName);
        },
        sendToBack(): void {
            return this.ej2Instances.sendToBack();
        },
        setActiveLayer(layerName: string): void {
            return this.ej2Instances.setActiveLayer(layerName);
        },
        setStackLimit(stackLimit: number): void {
            return this.ej2Instances.setStackLimit(stackLimit);
        },
        showTooltip(obj: Object | Object): void {
            return this.ej2Instances.showTooltip(obj);
        },
        startGroupAction(): void {
            return this.ej2Instances.startGroupAction();
        },
        startTextEdit(node?: Object | Object, id?: string): void {
            return this.ej2Instances.startTextEdit(node, id);
        },
        unGroup(): void {
            return this.ej2Instances.unGroup();
        },
        unSelect(obj: Object | Object): void {
            return this.ej2Instances.unSelect(obj);
        },
        undo(): void {
            return this.ej2Instances.undo();
        },
        updateData(node?: Object | Object): object {
            return this.ej2Instances.updateData(node);
        },
        updateViewPort(): void {
            return this.ej2Instances.updateViewPort();
        },
        zoom(factor: number, focusedPoint?: Object): void {
            return this.ej2Instances.zoom(factor, focusedPoint);
        },
        zoomTo(options: Object): void {
            return this.ej2Instances.zoomTo(options);
        },
    }
});

export type DiagramComponent = InstanceType<typeof DiagramComponent>;

export const DiagramPlugin = {
    name: 'ejs-diagram',
    install(Vue: any) {
        Vue.component(DiagramPlugin.name, DiagramComponent);
        Vue.component(LayerPlugin.name, LayerDirective);
        Vue.component(LayersPlugin.name, LayersDirective);
        Vue.component(CustomCursorPlugin.name, CustomCursorDirective);
        Vue.component(CustomCursorsPlugin.name, CustomCursorsDirective);
        Vue.component(ConnectorPlugin.name, ConnectorDirective);
        Vue.component(ConnectorsPlugin.name, ConnectorsDirective);
        Vue.component(ConnectorFixedUserHandlePlugin.name, ConnectorFixedUserHandleDirective);
        Vue.component(ConnectorFixedUserHandlesPlugin.name, ConnectorFixedUserHandlesDirective);
        Vue.component(ConnectorAnnotationPlugin.name, ConnectorAnnotationDirective);
        Vue.component(ConnectorAnnotationsPlugin.name, ConnectorAnnotationsDirective);
        Vue.component(NodePlugin.name, NodeDirective);
        Vue.component(NodesPlugin.name, NodesDirective);
        Vue.component(NodeFixedUserHandlePlugin.name, NodeFixedUserHandleDirective);
        Vue.component(NodeFixedUserHandlesPlugin.name, NodeFixedUserHandlesDirective);
        Vue.component(NodeAnnotationPlugin.name, NodeAnnotationDirective);
        Vue.component(NodeAnnotationsPlugin.name, NodeAnnotationsDirective);
        Vue.component(PortPlugin.name, PortDirective);
        Vue.component(PortsPlugin.name, PortsDirective);

    }
}