import { Diagram, Overview, SymbolPalette } from '@syncfusion/ej2-diagrams';
import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';

var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var LayersDirective = /** @__PURE__ @class */ (function (_super) {
    __extends(LayersDirective, _super);
    function LayersDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LayersDirective.prototype.render = function () {
        return;
    };
    LayersDirective = __decorate([
        EJComponentDecorator({})
    ], LayersDirective);
    return LayersDirective;
}(Vue));
var LayersPlugin = {
    name: 'e-layers',
    install: function (Vue$$1) {
        Vue$$1.component(LayersPlugin.name, LayersDirective);
    }
};
/**
 * `e-layers` directive represent a layers of the vue diagram.
 * It must be contained in a Diagram component(`ejs-diagram`).
 * ```vue
 * <ejs-diagram>
 * <e-layers>
 * <e-layer>
 * </e-layers>
 * </e-layers>
</ejs-diagram>
 * ```
 */
var LayerDirective = /** @__PURE__ @class */ (function (_super) {
    __extends(LayerDirective, _super);
    function LayerDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LayerDirective.prototype.render = function () {
        return;
    };
    LayerDirective = __decorate([
        EJComponentDecorator({})
    ], LayerDirective);
    return LayerDirective;
}(Vue));
var LayerPlugin = {
    name: 'e-layer',
    install: function (Vue$$1) {
        Vue$$1.component(LayerPlugin.name, LayerDirective);
    }
};

var __extends$1 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var CustomCursorsDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$1(CustomCursorsDirective, _super);
    function CustomCursorsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomCursorsDirective.prototype.render = function () {
        return;
    };
    CustomCursorsDirective = __decorate$1([
        EJComponentDecorator({})
    ], CustomCursorsDirective);
    return CustomCursorsDirective;
}(Vue));
var CustomCursorsPlugin = {
    name: 'e-cursormaps',
    install: function (Vue$$1) {
        Vue$$1.component(CustomCursorsPlugin.name, CustomCursorsDirective);
    }
};
/**
 * `e-custormaps` directive represent a layers of the vue diagram.
 * It must be contained in a Diagram component(`ejs-diagram`).
 * ```vue
 * <ejs-diagram>
 * <e-custormaps>
 * <e-custormap>
 * </e-custormap>
 * </e-custormaps>
</ejs-diagram>
 * ```
 */
var CustomCursorDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$1(CustomCursorDirective, _super);
    function CustomCursorDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomCursorDirective.prototype.render = function () {
        return;
    };
    CustomCursorDirective = __decorate$1([
        EJComponentDecorator({})
    ], CustomCursorDirective);
    return CustomCursorDirective;
}(Vue));
var CustomCursorPlugin = {
    name: 'e-cursormap',
    install: function (Vue$$1) {
        Vue$$1.component(CustomCursorPlugin.name, CustomCursorDirective);
    }
};

var __extends$2 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$2 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ConnectorAnnotationsDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$2(ConnectorAnnotationsDirective, _super);
    function ConnectorAnnotationsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConnectorAnnotationsDirective.prototype.render = function () {
        return;
    };
    ConnectorAnnotationsDirective = __decorate$2([
        EJComponentDecorator({})
    ], ConnectorAnnotationsDirective);
    return ConnectorAnnotationsDirective;
}(Vue));
var ConnectorAnnotationsPlugin = {
    name: 'e-connector-annotations',
    install: function (Vue$$1) {
        Vue$$1.component(ConnectorAnnotationsPlugin.name, ConnectorAnnotationsDirective);
    }
};
/**
 * `e-connector-annotation` directive represent a annotation of the vue Diagram.
 * It must be contained in a Diagram component(`ejs-diagram`).
 * ```html
 * <ejs-diagram>
 * <e-connectors>
 * <e-connector>
 * <e-connector-annotations>
 * <e-connector-annotation>
 * </e-connector-annotation>
 * </e-connector-annotations>
 * </e-connector>
 * </e-connectors>
 * </ejs-diagram>
 * ```
 */
var ConnectorAnnotationDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$2(ConnectorAnnotationDirective, _super);
    function ConnectorAnnotationDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConnectorAnnotationDirective.prototype.render = function () {
        return;
    };
    ConnectorAnnotationDirective = __decorate$2([
        EJComponentDecorator({})
    ], ConnectorAnnotationDirective);
    return ConnectorAnnotationDirective;
}(Vue));
var ConnectorAnnotationPlugin = {
    name: 'e-connector-annotation',
    install: function (Vue$$1) {
        Vue$$1.component(ConnectorAnnotationPlugin.name, ConnectorAnnotationDirective);
    }
};

var __extends$3 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$3 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ConnectorsDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$3(ConnectorsDirective, _super);
    function ConnectorsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConnectorsDirective.prototype.render = function () {
        return;
    };
    ConnectorsDirective = __decorate$3([
        EJComponentDecorator({})
    ], ConnectorsDirective);
    return ConnectorsDirective;
}(Vue));
var ConnectorsPlugin = {
    name: 'e-connectors',
    install: function (Vue$$1) {
        Vue$$1.component(ConnectorsPlugin.name, ConnectorsDirective);
    }
};
/**
 * `e-connectors` directive represent a connectors of the vue diagram.
 * It must be contained in a Diagram component(`ejs-diagram`).
 * ```html
 * <ejs-diagram>
 * <e-connectors>
 * <e-connector></e-connector>
 * </e-connectors>
 * </ejs-diagram>
 * ```
 */
var ConnectorDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$3(ConnectorDirective, _super);
    function ConnectorDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ConnectorDirective.prototype.render = function () {
        return;
    };
    ConnectorDirective = __decorate$3([
        EJComponentDecorator({})
    ], ConnectorDirective);
    return ConnectorDirective;
}(Vue));
var ConnectorPlugin = {
    name: 'e-connector',
    install: function (Vue$$1) {
        Vue$$1.component(ConnectorPlugin.name, ConnectorDirective);
    }
};

var __extends$4 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$4 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var NodeAnnotationsDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$4(NodeAnnotationsDirective, _super);
    function NodeAnnotationsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NodeAnnotationsDirective.prototype.render = function () {
        return;
    };
    NodeAnnotationsDirective = __decorate$4([
        EJComponentDecorator({})
    ], NodeAnnotationsDirective);
    return NodeAnnotationsDirective;
}(Vue));
var NodeAnnotationsPlugin = {
    name: 'e-node-annotations',
    install: function (Vue$$1) {
        Vue$$1.component(NodeAnnotationsPlugin.name, NodeAnnotationsDirective);
    }
};
/**
 * `e-node` directive represent a annotation of the vue Diagram.
 * It must be contained in a Diagram component(`ejs-diagram`).
 * ```html
 * <ejs-diagram>
 * <e-nodes>
 * <e-node>
 * <e-node-annotations>
 * <e-node-annotation>
 * </e-node-annotation>
 * </e-node-annotations>
 * </e-node>
 * </e-nodes>
 * </ejs-diagram>
 * ```
 */
var NodeAnnotationDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$4(NodeAnnotationDirective, _super);
    function NodeAnnotationDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NodeAnnotationDirective.prototype.render = function () {
        return;
    };
    NodeAnnotationDirective = __decorate$4([
        EJComponentDecorator({})
    ], NodeAnnotationDirective);
    return NodeAnnotationDirective;
}(Vue));
var NodeAnnotationPlugin = {
    name: 'e-node-annotation',
    install: function (Vue$$1) {
        Vue$$1.component(NodeAnnotationPlugin.name, NodeAnnotationDirective);
    }
};

var __extends$5 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$5 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var PortsDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$5(PortsDirective, _super);
    function PortsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PortsDirective.prototype.render = function () {
        return;
    };
    PortsDirective = __decorate$5([
        EJComponentDecorator({})
    ], PortsDirective);
    return PortsDirective;
}(Vue));
var PortsPlugin = {
    name: 'e-node-ports',
    install: function (Vue$$1) {
        Vue$$1.component(PortsPlugin.name, PortsDirective);
    }
};
/**
 * `e-port` directive represent a port of the vue Diagram.
 * It must be contained in a Diagram component(`ejs-diagram`).
 * ```html
 * <ejs-diagram>
 * <e-nodes>
 * <e-node>
 * <e-node-ports>
 * <e-node-port>
 * </e-node-port>
 * </e-node-ports>
 * </e-node>
 * </e-nodes>
 * </ejs-diagram>
 * ```
 */
var PortDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$5(PortDirective, _super);
    function PortDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PortDirective.prototype.render = function () {
        return;
    };
    PortDirective = __decorate$5([
        EJComponentDecorator({})
    ], PortDirective);
    return PortDirective;
}(Vue));
var PortPlugin = {
    name: 'e-node-port',
    install: function (Vue$$1) {
        Vue$$1.component(PortPlugin.name, PortDirective);
    }
};

var __extends$6 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$6 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var NodesDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$6(NodesDirective, _super);
    function NodesDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NodesDirective.prototype.render = function () {
        return;
    };
    NodesDirective = __decorate$6([
        EJComponentDecorator({})
    ], NodesDirective);
    return NodesDirective;
}(Vue));
var NodesPlugin = {
    name: 'e-nodes',
    install: function (Vue$$1) {
        Vue$$1.component(NodesPlugin.name, NodesDirective);
    }
};
/**
 * `e-node` directive represent a nodes of the vue diagram.
 * It must be contained in a Diagram component(`ejs-diagram`).
 * ```html
 * <ejs-diagram>
 * <e-nodes>
 * <e-node></e-node>
 * </e-nodes>
 * </ejs-diagram>
 * ```
 */
var NodeDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$6(NodeDirective, _super);
    function NodeDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NodeDirective.prototype.render = function () {
        return;
    };
    NodeDirective = __decorate$6([
        EJComponentDecorator({})
    ], NodeDirective);
    return NodeDirective;
}(Vue));
var NodePlugin = {
    name: 'e-node',
    install: function (Vue$$1) {
        Vue$$1.component(NodePlugin.name, NodeDirective);
    }
};

var __extends$7 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$7 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var properties = ['addInfo', 'annotationTemplate', 'backgroundColor', 'bridgeDirection', 'commandManager', 'connectorDefaults', 'connectors', 'constraints', 'contextMenuSettings', 'customCursor', 'dataSourceSettings', 'drawingObject', 'enablePersistence', 'enableRtl', 'getConnectorDefaults', 'getCustomCursor', 'getCustomProperty', 'getCustomTool', 'getDescription', 'getNodeDefaults', 'height', 'historyManager', 'layers', 'layout', 'locale', 'mode', 'nodeDefaults', 'nodeTemplate', 'nodes', 'pageSettings', 'rulerSettings', 'scrollSettings', 'selectedItems', 'serializationSettings', 'setNodeTemplate', 'snapSettings', 'tool', 'tooltip', 'updateSelection', 'width', 'animationComplete', 'click', 'collectionChange', 'commandExecute', 'connectionChange', 'contextMenuBeforeItemRender', 'contextMenuClick', 'contextMenuOpen', 'created', 'dataLoaded', 'doubleClick', 'dragEnter', 'dragLeave', 'dragOver', 'drop', 'expandStateChange', 'historyChange', 'historyStateChange', 'keyDown', 'keyUp', 'mouseEnter', 'mouseLeave', 'mouseOver', 'onImageLoad', 'onUserHandleMouseDown', 'onUserHandleMouseEnter', 'onUserHandleMouseLeave', 'onUserHandleMouseUp', 'positionChange', 'propertyChange', 'rotateChange', 'scrollChange', 'segmentCollectionChange', 'selectionChange', 'sizeChange', 'sourcePointChange', 'targetPointChange', 'textEdit'];
var modelProps = [];
/**
 * Represents vue Diagram Component
 * ```html
 * <ejs-diagram></ejs-diagram>
 * ```
 */
var DiagramComponent = /** @__PURE__ @class */ (function (_super) {
    __extends$7(DiagramComponent, _super);
    function DiagramComponent() {
        var _this = _super.call(this) || this;
        _this.propKeys = properties;
        _this.models = modelProps;
        _this.hasChildDirective = true;
        _this.hasInjectedModules = true;
        _this.tagMapper = { "e-layers": "e-layer", "e-cursormaps": "e-cursormap", "e-connectors": { "e-connector": { "e-connector-annotations": "e-connector-annotation" } }, "e-nodes": { "e-node": { "e-node-annotations": "e-node-annotation", "e-node-ports": "e-node-port" } } };
        _this.tagNameMapper = { "e-cursormaps": "e-customCursor", "e-connector-annotations": "e-annotations", "e-node-annotations": "e-annotations", "e-node-ports": "e-ports" };
        _this.ej2Instances = new Diagram({});
        _this.bindProperties();
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        return _this;
    }
    DiagramComponent.prototype.setProperties = function (prop, muteOnChange) {
        var _this = this;
        if (this.ej2Instances && this.ej2Instances._setProperties) {
            this.ej2Instances._setProperties(prop, muteOnChange);
        }
        if (prop && this.models && this.models.length) {
            Object.keys(prop).map(function (key) {
                _this.models.map(function (model) {
                    if ((key === model) && !(/datasource/i.test(key))) {
                        _this.$emit('update:' + key, prop[key]);
                    }
                });
            });
        }
    };
    DiagramComponent.prototype.render = function (createElement) {
        return createElement('div', this.$slots.default);
    };
    DiagramComponent.prototype.add = function (obj, group) {
        return this.ej2Instances.add(obj, group);
    };
    DiagramComponent.prototype.addChildToGroup = function (group, child) {
        return this.ej2Instances.addChildToGroup(group, child);
    };
    DiagramComponent.prototype.addConnector = function (obj) {
        return this.ej2Instances.addConnector(obj);
    };
    DiagramComponent.prototype.addConnectorLabels = function (obj, labels) {
        return this.ej2Instances.addConnectorLabels(obj, labels);
    };
    DiagramComponent.prototype.addConstraints = function (constraintsType, constraintsValue) {
        return this.ej2Instances.addConstraints(constraintsType, constraintsValue);
    };
    DiagramComponent.prototype.addCustomHistoryEntry = function (entry) {
        return this.ej2Instances.addCustomHistoryEntry(entry);
    };
    DiagramComponent.prototype.addHistoryEntry = function (entry) {
        return this.ej2Instances.addHistoryEntry(entry);
    };
    DiagramComponent.prototype.addLabels = function (obj, labels) {
        return this.ej2Instances.addLabels(obj, labels);
    };
    DiagramComponent.prototype.addLanes = function (node, lane, index) {
        return this.ej2Instances.addLanes(node, lane, index);
    };
    DiagramComponent.prototype.addLayer = function (layer, layerObject) {
        return this.ej2Instances.addLayer(layer, layerObject);
    };
    DiagramComponent.prototype.addNode = function (obj, group) {
        return this.ej2Instances.addNode(obj, group);
    };
    DiagramComponent.prototype.addNodeLabels = function (obj, labels) {
        return this.ej2Instances.addNodeLabels(obj, labels);
    };
    DiagramComponent.prototype.addNodeToLane = function (node, swimLane, lane) {
        return this.ej2Instances.addNodeToLane(node, swimLane, lane);
    };
    DiagramComponent.prototype.addPhases = function (node, phases) {
        return this.ej2Instances.addPhases(node, phases);
    };
    DiagramComponent.prototype.addPorts = function (obj, ports) {
        return this.ej2Instances.addPorts(obj, ports);
    };
    DiagramComponent.prototype.addProcess = function (process, parentId) {
        return this.ej2Instances.addProcess(process, parentId);
    };
    DiagramComponent.prototype.addTextAnnotation = function (annotation, node) {
        return this.ej2Instances.addTextAnnotation(annotation, node);
    };
    DiagramComponent.prototype.align = function (option, objects, type) {
        return this.ej2Instances.align(option, objects, type);
    };
    DiagramComponent.prototype.bringIntoView = function (bound) {
        return this.ej2Instances.bringIntoView(bound);
    };
    DiagramComponent.prototype.bringLayerForward = function (layerName) {
        return this.ej2Instances.bringLayerForward(layerName);
    };
    DiagramComponent.prototype.bringToCenter = function (bound) {
        return this.ej2Instances.bringToCenter(bound);
    };
    DiagramComponent.prototype.bringToFront = function () {
        return this.ej2Instances.bringToFront();
    };
    DiagramComponent.prototype.clear = function () {
        return this.ej2Instances.clear();
    };
    DiagramComponent.prototype.clearHistory = function () {
        return this.ej2Instances.clearHistory();
    };
    DiagramComponent.prototype.clearSelection = function () {
        return this.ej2Instances.clearSelection();
    };
    DiagramComponent.prototype.cloneLayer = function (layerName) {
        return this.ej2Instances.cloneLayer(layerName);
    };
    DiagramComponent.prototype.copy = function () {
        return this.ej2Instances.copy();
    };
    DiagramComponent.prototype.cut = function () {
        return this.ej2Instances.cut();
    };
    DiagramComponent.prototype.distribute = function (option, objects) {
        return this.ej2Instances.distribute(option, objects);
    };
    DiagramComponent.prototype.doLayout = function () {
        return this.ej2Instances.doLayout();
    };
    DiagramComponent.prototype.drag = function (obj, tx, ty) {
        return this.ej2Instances.drag(obj, tx, ty);
    };
    DiagramComponent.prototype.dragSourceEnd = function (obj, tx, ty) {
        return this.ej2Instances.dragSourceEnd(obj, tx, ty);
    };
    DiagramComponent.prototype.dragTargetEnd = function (obj, tx, ty) {
        return this.ej2Instances.dragTargetEnd(obj, tx, ty);
    };
    DiagramComponent.prototype.endGroupAction = function () {
        return this.ej2Instances.endGroupAction();
    };
    DiagramComponent.prototype.exportDiagram = function (options) {
        return this.ej2Instances.exportDiagram(options);
    };
    DiagramComponent.prototype.exportImage = function (image, options) {
        return this.ej2Instances.exportImage(image, options);
    };
    DiagramComponent.prototype.findElementUnderMouse = function (obj, position) {
        return this.ej2Instances.findElementUnderMouse(obj, position);
    };
    DiagramComponent.prototype.findObjectUnderMouse = function (objects, action, inAction) {
        return this.ej2Instances.findObjectUnderMouse(objects, action, inAction);
    };
    DiagramComponent.prototype.findObjectsUnderMouse = function (position, source) {
        return this.ej2Instances.findObjectsUnderMouse(position, source);
    };
    DiagramComponent.prototype.findTargetObjectUnderMouse = function (objects, action, inAction, position, source) {
        return this.ej2Instances.findTargetObjectUnderMouse(objects, action, inAction, position, source);
    };
    DiagramComponent.prototype.fitToPage = function (options) {
        return this.ej2Instances.fitToPage(options);
    };
    DiagramComponent.prototype.getActiveLayer = function () {
        return this.ej2Instances.getActiveLayer();
    };
    DiagramComponent.prototype.getConnectorObject = function (id) {
        return this.ej2Instances.getConnectorObject(id);
    };
    DiagramComponent.prototype.getCursor = function (action, active) {
        return this.ej2Instances.getCursor(action, active);
    };
    DiagramComponent.prototype.getDiagramBounds = function () {
        return this.ej2Instances.getDiagramBounds();
    };
    DiagramComponent.prototype.getDiagramContent = function (styleSheets) {
        return this.ej2Instances.getDiagramContent(styleSheets);
    };
    DiagramComponent.prototype.getEdges = function (args) {
        return this.ej2Instances.getEdges(args);
    };
    DiagramComponent.prototype.getHistoryStack = function (isUndoStack) {
        return this.ej2Instances.getHistoryStack(isUndoStack);
    };
    DiagramComponent.prototype.getNodeObject = function (id) {
        return this.ej2Instances.getNodeObject(id);
    };
    DiagramComponent.prototype.getObject = function (name) {
        return this.ej2Instances.getObject(name);
    };
    DiagramComponent.prototype.getParentId = function (id) {
        return this.ej2Instances.getParentId(id);
    };
    DiagramComponent.prototype.getTool = function (action) {
        return this.ej2Instances.getTool(action);
    };
    DiagramComponent.prototype.group = function () {
        return this.ej2Instances.group();
    };
    DiagramComponent.prototype.hideTooltip = function (obj) {
        return this.ej2Instances.hideTooltip(obj);
    };
    DiagramComponent.prototype.insertData = function (node) {
        return this.ej2Instances.insertData(node);
    };
    DiagramComponent.prototype.loadDiagram = function (data) {
        return this.ej2Instances.loadDiagram(data);
    };
    DiagramComponent.prototype.moveForward = function () {
        return this.ej2Instances.moveForward();
    };
    DiagramComponent.prototype.moveObjects = function (objects, targetLayer) {
        return this.ej2Instances.moveObjects(objects, targetLayer);
    };
    DiagramComponent.prototype.moveObjectsUp = function (node, currentLayer) {
        return this.ej2Instances.moveObjectsUp(node, currentLayer);
    };
    DiagramComponent.prototype.nudge = function (direction, x, y) {
        return this.ej2Instances.nudge(direction, x, y);
    };
    DiagramComponent.prototype.pan = function (horizontalOffset, verticalOffset, focusedPoint) {
        return this.ej2Instances.pan(horizontalOffset, verticalOffset, focusedPoint);
    };
    DiagramComponent.prototype.paste = function (obj) {
        return this.ej2Instances.paste(obj);
    };
    DiagramComponent.prototype.print = function (options) {
        return this.ej2Instances.print(options);
    };
    DiagramComponent.prototype.printImage = function (image, options) {
        return this.ej2Instances.printImage(image, options);
    };
    DiagramComponent.prototype.redo = function () {
        return this.ej2Instances.redo();
    };
    DiagramComponent.prototype.remove = function (obj) {
        return this.ej2Instances.remove(obj);
    };
    DiagramComponent.prototype.removeConstraints = function (constraintsType, constraintsValue) {
        return this.ej2Instances.removeConstraints(constraintsType, constraintsValue);
    };
    DiagramComponent.prototype.removeData = function (node) {
        return this.ej2Instances.removeData(node);
    };
    DiagramComponent.prototype.removeLabels = function (obj, labels) {
        return this.ej2Instances.removeLabels(obj, labels);
    };
    DiagramComponent.prototype.removeLane = function (node, lane) {
        return this.ej2Instances.removeLane(node, lane);
    };
    DiagramComponent.prototype.removeLayer = function (layerId) {
        return this.ej2Instances.removeLayer(layerId);
    };
    DiagramComponent.prototype.removePhase = function (node, phase) {
        return this.ej2Instances.removePhase(node, phase);
    };
    DiagramComponent.prototype.removePorts = function (obj, ports) {
        return this.ej2Instances.removePorts(obj, ports);
    };
    DiagramComponent.prototype.removeProcess = function (id) {
        return this.ej2Instances.removeProcess(id);
    };
    DiagramComponent.prototype.reset = function () {
        return this.ej2Instances.reset();
    };
    DiagramComponent.prototype.resetSegments = function () {
        return this.ej2Instances.resetSegments();
    };
    DiagramComponent.prototype.rotate = function (obj, angle, pivot) {
        return this.ej2Instances.rotate(obj, angle, pivot);
    };
    DiagramComponent.prototype.sameSize = function (option, objects) {
        return this.ej2Instances.sameSize(option, objects);
    };
    DiagramComponent.prototype.saveDiagram = function () {
        return this.ej2Instances.saveDiagram();
    };
    DiagramComponent.prototype.scale = function (obj, sx, sy, pivot) {
        return this.ej2Instances.scale(obj, sx, sy, pivot);
    };
    DiagramComponent.prototype.select = function (objects, multipleSelection) {
        return this.ej2Instances.select(objects, multipleSelection);
    };
    DiagramComponent.prototype.selectAll = function () {
        return this.ej2Instances.selectAll();
    };
    DiagramComponent.prototype.sendBackward = function () {
        return this.ej2Instances.sendBackward();
    };
    DiagramComponent.prototype.sendLayerBackward = function (layerName) {
        return this.ej2Instances.sendLayerBackward(layerName);
    };
    DiagramComponent.prototype.sendToBack = function () {
        return this.ej2Instances.sendToBack();
    };
    DiagramComponent.prototype.setActiveLayer = function (layerName) {
        return this.ej2Instances.setActiveLayer(layerName);
    };
    DiagramComponent.prototype.setStackLimit = function (stackLimit) {
        return this.ej2Instances.setStackLimit(stackLimit);
    };
    DiagramComponent.prototype.showTooltip = function (obj) {
        return this.ej2Instances.showTooltip(obj);
    };
    DiagramComponent.prototype.startGroupAction = function () {
        return this.ej2Instances.startGroupAction();
    };
    DiagramComponent.prototype.startTextEdit = function (node, id) {
        return this.ej2Instances.startTextEdit(node, id);
    };
    DiagramComponent.prototype.unGroup = function () {
        return this.ej2Instances.unGroup();
    };
    DiagramComponent.prototype.unSelect = function (obj) {
        return this.ej2Instances.unSelect(obj);
    };
    DiagramComponent.prototype.undo = function () {
        return this.ej2Instances.undo();
    };
    DiagramComponent.prototype.updateData = function (node) {
        return this.ej2Instances.updateData(node);
    };
    DiagramComponent.prototype.updateViewPort = function () {
        return this.ej2Instances.updateViewPort();
    };
    DiagramComponent.prototype.zoom = function (factor, focusedPoint) {
        return this.ej2Instances.zoom(factor, focusedPoint);
    };
    DiagramComponent.prototype.zoomTo = function (options) {
        return this.ej2Instances.zoomTo(options);
    };
    DiagramComponent = __decorate$7([
        EJComponentDecorator({
            props: properties
        })
    ], DiagramComponent);
    return DiagramComponent;
}(ComponentBase));
var DiagramPlugin = {
    name: 'ejs-diagram',
    install: function (Vue$$1) {
        Vue$$1.component(DiagramPlugin.name, DiagramComponent);
        Vue$$1.component(LayerPlugin.name, LayerDirective);
        Vue$$1.component(LayersPlugin.name, LayersDirective);
        Vue$$1.component(CustomCursorPlugin.name, CustomCursorDirective);
        Vue$$1.component(CustomCursorsPlugin.name, CustomCursorsDirective);
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

var __extends$8 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$8 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var PalettesDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$8(PalettesDirective, _super);
    function PalettesDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PalettesDirective.prototype.render = function () {
        return;
    };
    PalettesDirective = __decorate$8([
        EJComponentDecorator({})
    ], PalettesDirective);
    return PalettesDirective;
}(Vue));
var PalettesPlugin = {
    name: 'e-palettes',
    install: function (Vue$$1) {
        Vue$$1.component(PalettesPlugin.name, PalettesDirective);
    }
};
/**
 * `Palette` directive represent a axis palette of the vue SymbolPalette.
 * It must be contained in a SymbolPalette component(`SymbolPaletteComponent`).
 * ```html
 * <e-palettes><e-palette></e-palette><e-palettes>
 * ```
 */
var PaletteDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$8(PaletteDirective, _super);
    function PaletteDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PaletteDirective.prototype.render = function () {
        return;
    };
    PaletteDirective = __decorate$8([
        EJComponentDecorator({})
    ], PaletteDirective);
    return PaletteDirective;
}(Vue));
var PalettePlugin = {
    name: 'e-palette',
    install: function (Vue$$1) {
        Vue$$1.component(PalettePlugin.name, PaletteDirective);
    }
};

var __extends$9 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$9 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var properties$1 = ['accessKey', 'allowDrag', 'connectorDefaults', 'enableAnimation', 'enablePersistence', 'enableRtl', 'enableSearch', 'expandMode', 'filterSymbols', 'getConnectorDefaults', 'getNodeDefaults', 'getSymbolInfo', 'getSymbolTemplate', 'height', 'ignoreSymbolsOnSearch', 'locale', 'nodeDefaults', 'palettes', 'symbolDragSize', 'symbolHeight', 'symbolInfo', 'symbolMargin', 'symbolPreview', 'symbolWidth', 'width', 'paletteSelectionChange'];
var modelProps$1 = [];
/**
 * Represents vue SymbolPalette Component
 * ```html
 * <ej-symbol-palette></ej-symbol-palette>
 * ```
 */
var SymbolPaletteComponent = /** @__PURE__ @class */ (function (_super) {
    __extends$9(SymbolPaletteComponent, _super);
    function SymbolPaletteComponent() {
        var _this = _super.call(this) || this;
        _this.propKeys = properties$1;
        _this.models = modelProps$1;
        _this.hasChildDirective = true;
        _this.hasInjectedModules = true;
        _this.tagMapper = { "e-palettes": "e-palette" };
        _this.tagNameMapper = {};
        _this.ej2Instances = new SymbolPalette({});
        _this.bindProperties();
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        return _this;
    }
    SymbolPaletteComponent.prototype.setProperties = function (prop, muteOnChange) {
        var _this = this;
        if (this.ej2Instances && this.ej2Instances._setProperties) {
            this.ej2Instances._setProperties(prop, muteOnChange);
        }
        if (prop && this.models && this.models.length) {
            Object.keys(prop).map(function (key) {
                _this.models.map(function (model) {
                    if ((key === model) && !(/datasource/i.test(key))) {
                        _this.$emit('update:' + key, prop[key]);
                    }
                });
            });
        }
    };
    SymbolPaletteComponent.prototype.render = function (createElement) {
        return createElement('div', this.$slots.default);
    };
    SymbolPaletteComponent.prototype.addPaletteItem = function (paletteName, paletteSymbol) {
        return this.ej2Instances.addPaletteItem(paletteName, paletteSymbol);
    };
    SymbolPaletteComponent.prototype.removePaletteItem = function (paletteName, symbolId) {
        return this.ej2Instances.removePaletteItem(paletteName, symbolId);
    };
    SymbolPaletteComponent = __decorate$9([
        EJComponentDecorator({
            props: properties$1
        })
    ], SymbolPaletteComponent);
    return SymbolPaletteComponent;
}(ComponentBase));
var SymbolPalettePlugin = {
    name: 'ejs-symbolpalette',
    install: function (Vue$$1) {
        Vue$$1.component(SymbolPalettePlugin.name, SymbolPaletteComponent);
        Vue$$1.component(PalettePlugin.name, PaletteDirective);
        Vue$$1.component(PalettesPlugin.name, PalettesDirective);
    }
};

var __extends$10 = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$10 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var properties$2 = ['enablePersistence', 'enableRtl', 'height', 'locale', 'sourceID', 'width', 'created'];
var modelProps$2 = [];
/**
 * Represents vue Overview Component
 * ```html
 * <ej-overview></ej-overview>
 * ```
 */
var OverviewComponent = /** @__PURE__ @class */ (function (_super) {
    __extends$10(OverviewComponent, _super);
    function OverviewComponent() {
        var _this = _super.call(this) || this;
        _this.propKeys = properties$2;
        _this.models = modelProps$2;
        _this.hasChildDirective = true;
        _this.hasInjectedModules = false;
        _this.tagMapper = {};
        _this.tagNameMapper = {};
        _this.ej2Instances = new Overview({});
        _this.bindProperties();
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        return _this;
    }
    OverviewComponent.prototype.setProperties = function (prop, muteOnChange) {
        var _this = this;
        if (this.ej2Instances && this.ej2Instances._setProperties) {
            this.ej2Instances._setProperties(prop, muteOnChange);
        }
        if (prop && this.models && this.models.length) {
            Object.keys(prop).map(function (key) {
                _this.models.map(function (model) {
                    if ((key === model) && !(/datasource/i.test(key))) {
                        _this.$emit('update:' + key, prop[key]);
                    }
                });
            });
        }
    };
    OverviewComponent.prototype.render = function (createElement) {
        return createElement('div', this.$slots.default);
    };
    OverviewComponent.prototype.updateHtmlLayer = function (view) {
        return this.ej2Instances.updateHtmlLayer(view);
    };
    OverviewComponent = __decorate$10([
        EJComponentDecorator({
            props: properties$2
        })
    ], OverviewComponent);
    return OverviewComponent;
}(ComponentBase));
var OverviewPlugin = {
    name: 'ejs-overview',
    install: function (Vue$$1) {
        Vue$$1.component(OverviewPlugin.name, OverviewComponent);
    }
};

export { LayersDirective, LayerDirective, LayersPlugin, LayerPlugin, CustomCursorsDirective, CustomCursorDirective, CustomCursorsPlugin, CustomCursorPlugin, ConnectorAnnotationsDirective, ConnectorAnnotationDirective, ConnectorAnnotationsPlugin, ConnectorAnnotationPlugin, ConnectorsDirective, ConnectorDirective, ConnectorsPlugin, ConnectorPlugin, NodeAnnotationsDirective, NodeAnnotationDirective, NodeAnnotationsPlugin, NodeAnnotationPlugin, PortsDirective, PortDirective, PortsPlugin, PortPlugin, NodesDirective, NodeDirective, NodesPlugin, NodePlugin, DiagramComponent, DiagramPlugin, PalettesDirective, PaletteDirective, PalettesPlugin, PalettePlugin, SymbolPaletteComponent, SymbolPalettePlugin, OverviewComponent, OverviewPlugin };
export * from '@syncfusion/ej2-diagrams';
//# sourceMappingURL=ej2-vue-diagrams.es5.js.map
