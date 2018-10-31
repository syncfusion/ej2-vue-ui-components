import { AccumulationChart, Chart, RangeNavigator, Smithchart, Sparkline } from '@syncfusion/ej2-charts';
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
var TrendlinesDirective = /** @__PURE__ @class */ (function (_super) {
    __extends(TrendlinesDirective, _super);
    function TrendlinesDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TrendlinesDirective.prototype.render = function () {
        return;
    };
    TrendlinesDirective = __decorate([
        EJComponentDecorator({})
    ], TrendlinesDirective);
    return TrendlinesDirective;
}(Vue));
var TrendlinesPlugin = {
    name: 'e-trendlines',
    install: function (Vue$$1) {
        Vue$$1.component(TrendlinesPlugin.name, TrendlinesDirective);
    }
};
var TrendlineDirective = /** @__PURE__ @class */ (function (_super) {
    __extends(TrendlineDirective, _super);
    function TrendlineDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TrendlineDirective.prototype.render = function () {
        return;
    };
    TrendlineDirective = __decorate([
        EJComponentDecorator({})
    ], TrendlineDirective);
    return TrendlineDirective;
}(Vue));
var TrendlinePlugin = {
    name: 'e-trendline',
    install: function (Vue$$1) {
        Vue$$1.component(TrendlinePlugin.name, TrendlineDirective);
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
var SegmentsDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$1(SegmentsDirective, _super);
    function SegmentsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SegmentsDirective.prototype.render = function () {
        return;
    };
    SegmentsDirective = __decorate$1([
        EJComponentDecorator({})
    ], SegmentsDirective);
    return SegmentsDirective;
}(Vue));
var SegmentsPlugin = {
    name: 'e-segments',
    install: function (Vue$$1) {
        Vue$$1.component(SegmentsPlugin.name, SegmentsDirective);
    }
};
var SegmentDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$1(SegmentDirective, _super);
    function SegmentDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SegmentDirective.prototype.render = function () {
        return;
    };
    SegmentDirective = __decorate$1([
        EJComponentDecorator({})
    ], SegmentDirective);
    return SegmentDirective;
}(Vue));
var SegmentPlugin = {
    name: 'e-segment',
    install: function (Vue$$1) {
        Vue$$1.component(SegmentPlugin.name, SegmentDirective);
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
var SeriesCollectionDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$2(SeriesCollectionDirective, _super);
    function SeriesCollectionDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SeriesCollectionDirective.prototype.render = function () {
        return;
    };
    SeriesCollectionDirective = __decorate$2([
        EJComponentDecorator({})
    ], SeriesCollectionDirective);
    return SeriesCollectionDirective;
}(Vue));
var SeriesCollectionPlugin = {
    name: 'e-series-collection',
    install: function (Vue$$1) {
        Vue$$1.component(SeriesCollectionPlugin.name, SeriesCollectionDirective);
    }
};
var SeriesDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$2(SeriesDirective, _super);
    function SeriesDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SeriesDirective.prototype.render = function () {
        return;
    };
    SeriesDirective = __decorate$2([
        EJComponentDecorator({})
    ], SeriesDirective);
    return SeriesDirective;
}(Vue));
var SeriesPlugin = {
    name: 'e-series',
    install: function (Vue$$1) {
        Vue$$1.component(SeriesPlugin.name, SeriesDirective);
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
var StripLinesDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$3(StripLinesDirective, _super);
    function StripLinesDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StripLinesDirective.prototype.render = function () {
        return;
    };
    StripLinesDirective = __decorate$3([
        EJComponentDecorator({})
    ], StripLinesDirective);
    return StripLinesDirective;
}(Vue));
var StripLinesPlugin = {
    name: 'e-striplines',
    install: function (Vue$$1) {
        Vue$$1.component(StripLinesPlugin.name, StripLinesDirective);
    }
};
var StripLineDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$3(StripLineDirective, _super);
    function StripLineDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StripLineDirective.prototype.render = function () {
        return;
    };
    StripLineDirective = __decorate$3([
        EJComponentDecorator({})
    ], StripLineDirective);
    return StripLineDirective;
}(Vue));
var StripLinePlugin = {
    name: 'e-stripline',
    install: function (Vue$$1) {
        Vue$$1.component(StripLinePlugin.name, StripLineDirective);
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
var CategoriesDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$4(CategoriesDirective, _super);
    function CategoriesDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CategoriesDirective.prototype.render = function () {
        return;
    };
    CategoriesDirective = __decorate$4([
        EJComponentDecorator({})
    ], CategoriesDirective);
    return CategoriesDirective;
}(Vue));
var CategoriesPlugin = {
    name: 'e-categories',
    install: function (Vue$$1) {
        Vue$$1.component(CategoriesPlugin.name, CategoriesDirective);
    }
};
var CategoryDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$4(CategoryDirective, _super);
    function CategoryDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CategoryDirective.prototype.render = function () {
        return;
    };
    CategoryDirective = __decorate$4([
        EJComponentDecorator({})
    ], CategoryDirective);
    return CategoryDirective;
}(Vue));
var CategoryPlugin = {
    name: 'e-category',
    install: function (Vue$$1) {
        Vue$$1.component(CategoryPlugin.name, CategoryDirective);
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
var MultiLevelLabelsDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$5(MultiLevelLabelsDirective, _super);
    function MultiLevelLabelsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MultiLevelLabelsDirective.prototype.render = function () {
        return;
    };
    MultiLevelLabelsDirective = __decorate$5([
        EJComponentDecorator({})
    ], MultiLevelLabelsDirective);
    return MultiLevelLabelsDirective;
}(Vue));
var MultiLevelLabelsPlugin = {
    name: 'e-multilevellabels',
    install: function (Vue$$1) {
        Vue$$1.component(MultiLevelLabelsPlugin.name, MultiLevelLabelsDirective);
    }
};
var MultiLevelLabelDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$5(MultiLevelLabelDirective, _super);
    function MultiLevelLabelDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MultiLevelLabelDirective.prototype.render = function () {
        return;
    };
    MultiLevelLabelDirective = __decorate$5([
        EJComponentDecorator({})
    ], MultiLevelLabelDirective);
    return MultiLevelLabelDirective;
}(Vue));
var MultiLevelLabelPlugin = {
    name: 'e-multilevellabel',
    install: function (Vue$$1) {
        Vue$$1.component(MultiLevelLabelPlugin.name, MultiLevelLabelDirective);
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
var AxesDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$6(AxesDirective, _super);
    function AxesDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AxesDirective.prototype.render = function () {
        return;
    };
    AxesDirective = __decorate$6([
        EJComponentDecorator({})
    ], AxesDirective);
    return AxesDirective;
}(Vue));
var AxesPlugin = {
    name: 'e-axes',
    install: function (Vue$$1) {
        Vue$$1.component(AxesPlugin.name, AxesDirective);
    }
};
var AxisDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$6(AxisDirective, _super);
    function AxisDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AxisDirective.prototype.render = function () {
        return;
    };
    AxisDirective = __decorate$6([
        EJComponentDecorator({})
    ], AxisDirective);
    return AxisDirective;
}(Vue));
var AxisPlugin = {
    name: 'e-axis',
    install: function (Vue$$1) {
        Vue$$1.component(AxisPlugin.name, AxisDirective);
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
var RowsDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$7(RowsDirective, _super);
    function RowsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RowsDirective.prototype.render = function () {
        return;
    };
    RowsDirective = __decorate$7([
        EJComponentDecorator({})
    ], RowsDirective);
    return RowsDirective;
}(Vue));
var RowsPlugin = {
    name: 'e-rows',
    install: function (Vue$$1) {
        Vue$$1.component(RowsPlugin.name, RowsDirective);
    }
};
var RowDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$7(RowDirective, _super);
    function RowDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RowDirective.prototype.render = function () {
        return;
    };
    RowDirective = __decorate$7([
        EJComponentDecorator({})
    ], RowDirective);
    return RowDirective;
}(Vue));
var RowPlugin = {
    name: 'e-row',
    install: function (Vue$$1) {
        Vue$$1.component(RowPlugin.name, RowDirective);
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
var ColumnsDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$8(ColumnsDirective, _super);
    function ColumnsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ColumnsDirective.prototype.render = function () {
        return;
    };
    ColumnsDirective = __decorate$8([
        EJComponentDecorator({})
    ], ColumnsDirective);
    return ColumnsDirective;
}(Vue));
var ColumnsPlugin = {
    name: 'e-columns',
    install: function (Vue$$1) {
        Vue$$1.component(ColumnsPlugin.name, ColumnsDirective);
    }
};
var ColumnDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$8(ColumnDirective, _super);
    function ColumnDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ColumnDirective.prototype.render = function () {
        return;
    };
    ColumnDirective = __decorate$8([
        EJComponentDecorator({})
    ], ColumnDirective);
    return ColumnDirective;
}(Vue));
var ColumnPlugin = {
    name: 'e-column',
    install: function (Vue$$1) {
        Vue$$1.component(ColumnPlugin.name, ColumnDirective);
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
var AnnotationsDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$9(AnnotationsDirective, _super);
    function AnnotationsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AnnotationsDirective.prototype.render = function () {
        return;
    };
    AnnotationsDirective = __decorate$9([
        EJComponentDecorator({})
    ], AnnotationsDirective);
    return AnnotationsDirective;
}(Vue));
var AnnotationsPlugin = {
    name: 'e-annotations',
    install: function (Vue$$1) {
        Vue$$1.component(AnnotationsPlugin.name, AnnotationsDirective);
    }
};
/**
 * `e-annotation` directive represent a annotation of the VueJS Chart.
 * It must be contained in a Chart component(`ejs-chart`).
 * ```vue
 * <ejs-chart>
 *   <e-annotations>
 *    <e-annotation content='ID' />
 *    <e-annotation content='ID' />
 *   </e-annotations>
 * </ejs-chart>
 * ```
 */
var AnnotationDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$9(AnnotationDirective, _super);
    function AnnotationDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AnnotationDirective.prototype.render = function () {
        return;
    };
    AnnotationDirective = __decorate$9([
        EJComponentDecorator({})
    ], AnnotationDirective);
    return AnnotationDirective;
}(Vue));
var AnnotationPlugin = {
    name: 'e-annotation',
    install: function (Vue$$1) {
        Vue$$1.component(AnnotationPlugin.name, AnnotationDirective);
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
var SelectedDataIndexesDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$10(SelectedDataIndexesDirective, _super);
    function SelectedDataIndexesDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SelectedDataIndexesDirective.prototype.render = function () {
        return;
    };
    SelectedDataIndexesDirective = __decorate$10([
        EJComponentDecorator({})
    ], SelectedDataIndexesDirective);
    return SelectedDataIndexesDirective;
}(Vue));
var SelectedDataIndexesPlugin = {
    name: 'e-selecteddataindexes',
    install: function (Vue$$1) {
        Vue$$1.component(SelectedDataIndexesPlugin.name, SelectedDataIndexesDirective);
    }
};
var SelectedDataIndexDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$10(SelectedDataIndexDirective, _super);
    function SelectedDataIndexDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SelectedDataIndexDirective.prototype.render = function () {
        return;
    };
    SelectedDataIndexDirective = __decorate$10([
        EJComponentDecorator({})
    ], SelectedDataIndexDirective);
    return SelectedDataIndexDirective;
}(Vue));
var SelectedDataIndexPlugin = {
    name: 'e-selecteddataindex',
    install: function (Vue$$1) {
        Vue$$1.component(SelectedDataIndexPlugin.name, SelectedDataIndexDirective);
    }
};

var __extends$11 = (undefined && undefined.__extends) || (function () {
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
var __decorate$11 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var IndicatorsDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$11(IndicatorsDirective, _super);
    function IndicatorsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IndicatorsDirective.prototype.render = function () {
        return;
    };
    IndicatorsDirective = __decorate$11([
        EJComponentDecorator({})
    ], IndicatorsDirective);
    return IndicatorsDirective;
}(Vue));
var IndicatorsPlugin = {
    name: 'e-indicators',
    install: function (Vue$$1) {
        Vue$$1.component(IndicatorsPlugin.name, IndicatorsDirective);
    }
};
var IndicatorDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$11(IndicatorDirective, _super);
    function IndicatorDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IndicatorDirective.prototype.render = function () {
        return;
    };
    IndicatorDirective = __decorate$11([
        EJComponentDecorator({})
    ], IndicatorDirective);
    return IndicatorDirective;
}(Vue));
var IndicatorPlugin = {
    name: 'e-indicator',
    install: function (Vue$$1) {
        Vue$$1.component(IndicatorPlugin.name, IndicatorDirective);
    }
};

var __extends$12 = (undefined && undefined.__extends) || (function () {
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
var __decorate$12 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var properties = ['annotations', 'axes', 'background', 'border', 'chartArea', 'columns', 'crosshair', 'currencyCode', 'dataSource', 'description', 'enableAnimation', 'enablePersistence', 'enableRtl', 'enableSideBySidePlacement', 'height', 'indicators', 'isMultiSelect', 'isTransposed', 'legendSettings', 'locale', 'margin', 'palettes', 'primaryXAxis', 'primaryYAxis', 'rows', 'selectedDataIndexes', 'selectionMode', 'series', 'subTitle', 'subTitleStyle', 'tabIndex', 'theme', 'title', 'titleStyle', 'tooltip', 'useGroupingSeparator', 'width', 'zoomSettings', 'animationComplete', 'annotationRender', 'axisLabelRender', 'axisMultiLabelRender', 'axisRangeCalculated', 'beforePrint', 'chartMouseClick', 'chartMouseDown', 'chartMouseLeave', 'chartMouseMove', 'chartMouseUp', 'dragComplete', 'legendRender', 'load', 'loaded', 'pointClick', 'pointMove', 'pointRender', 'resized', 'scrollChanged', 'scrollEnd', 'scrollStart', 'seriesRender', 'textRender', 'tooltipRender', 'zoomComplete'];
var modelProps = [];
var ChartComponent = /** @__PURE__ @class */ (function (_super) {
    __extends$12(ChartComponent, _super);
    function ChartComponent() {
        var _this = _super.call(this) || this;
        _this.propKeys = properties;
        _this.models = modelProps;
        _this.hasChildDirective = true;
        _this.hasInjectedModules = true;
        _this.tagMapper = { "e-series-collection": { "e-series": { "e-trendlines": "e-trendline", "e-segments": "e-segment" } }, "e-axes": { "e-axis": { "e-striplines": "e-stripline", "e-multilevellabels": { "e-multilevellabel": { "e-categories": "e-category" } } } }, "e-rows": "e-row", "e-columns": "e-column", "e-annotations": "e-annotation", "e-selecteddataindexes": "e-selecteddataindex", "e-indicators": "e-indicator" };
        _this.tagNameMapper = { "e-series-collection": "e-series", "e-striplines": "e-stripLines", "e-multilevellabels": "e-multiLevelLabels", "e-selecteddataindexes": "e-selectedDataIndexes" };
        _this.ej2Instances = new Chart({});
        _this.bindProperties();
        return _this;
    }
    ChartComponent.prototype.render = function (createElement) {
        return createElement('div', this.$slots.default);
    };
    ChartComponent.prototype.addSeries = function (seriesCollection) {
        return this.ej2Instances.addSeries(seriesCollection);
    };
    ChartComponent.prototype.export = function (type, fileName, orientation, controls, width, height) {
        return this.ej2Instances.export(type, fileName, orientation, controls, width, height);
    };
    ChartComponent.prototype.getLocalizedLabel = function (key) {
        return this.ej2Instances.getLocalizedLabel(key);
    };
    ChartComponent.prototype.print = function (id) {
        return this.ej2Instances.print(id);
    };
    ChartComponent.prototype.removeSeries = function (index) {
        return this.ej2Instances.removeSeries(index);
    };
    ChartComponent.prototype.setAnnotationValue = function (annotationIndex, content) {
        return this.ej2Instances.setAnnotationValue(annotationIndex, content);
    };
    ChartComponent = __decorate$12([
        EJComponentDecorator({
            props: properties
        })
    ], ChartComponent);
    return ChartComponent;
}(ComponentBase));
var ChartPlugin = {
    name: 'ejs-chart',
    install: function (Vue$$1) {
        Vue$$1.component(ChartPlugin.name, ChartComponent);
        Vue$$1.component(SeriesPlugin.name, SeriesDirective);
        Vue$$1.component(SeriesCollectionPlugin.name, SeriesCollectionDirective);
        Vue$$1.component(TrendlinePlugin.name, TrendlineDirective);
        Vue$$1.component(TrendlinesPlugin.name, TrendlinesDirective);
        Vue$$1.component(SegmentPlugin.name, SegmentDirective);
        Vue$$1.component(SegmentsPlugin.name, SegmentsDirective);
        Vue$$1.component(AxisPlugin.name, AxisDirective);
        Vue$$1.component(AxesPlugin.name, AxesDirective);
        Vue$$1.component(StripLinePlugin.name, StripLineDirective);
        Vue$$1.component(StripLinesPlugin.name, StripLinesDirective);
        Vue$$1.component(MultiLevelLabelPlugin.name, MultiLevelLabelDirective);
        Vue$$1.component(MultiLevelLabelsPlugin.name, MultiLevelLabelsDirective);
        Vue$$1.component(CategoryPlugin.name, CategoryDirective);
        Vue$$1.component(CategoriesPlugin.name, CategoriesDirective);
        Vue$$1.component(RowPlugin.name, RowDirective);
        Vue$$1.component(RowsPlugin.name, RowsDirective);
        Vue$$1.component(ColumnPlugin.name, ColumnDirective);
        Vue$$1.component(ColumnsPlugin.name, ColumnsDirective);
        Vue$$1.component(AnnotationPlugin.name, AnnotationDirective);
        Vue$$1.component(AnnotationsPlugin.name, AnnotationsDirective);
        Vue$$1.component(SelectedDataIndexPlugin.name, SelectedDataIndexDirective);
        Vue$$1.component(SelectedDataIndexesPlugin.name, SelectedDataIndexesDirective);
        Vue$$1.component(IndicatorPlugin.name, IndicatorDirective);
        Vue$$1.component(IndicatorsPlugin.name, IndicatorsDirective);
    }
};

var __extends$13 = (undefined && undefined.__extends) || (function () {
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
var __decorate$13 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var AccumulationSeriesCollectionDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$13(AccumulationSeriesCollectionDirective, _super);
    function AccumulationSeriesCollectionDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AccumulationSeriesCollectionDirective.prototype.render = function () {
        return;
    };
    AccumulationSeriesCollectionDirective = __decorate$13([
        EJComponentDecorator({})
    ], AccumulationSeriesCollectionDirective);
    return AccumulationSeriesCollectionDirective;
}(Vue));
var AccumulationSeriesCollectionPlugin = {
    name: 'e-accumulation-series-collection',
    install: function (Vue$$1) {
        Vue$$1.component(AccumulationSeriesCollectionPlugin.name, AccumulationSeriesCollectionDirective);
    }
};
var AccumulationSeriesDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$13(AccumulationSeriesDirective, _super);
    function AccumulationSeriesDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AccumulationSeriesDirective.prototype.render = function () {
        return;
    };
    AccumulationSeriesDirective = __decorate$13([
        EJComponentDecorator({})
    ], AccumulationSeriesDirective);
    return AccumulationSeriesDirective;
}(Vue));
var AccumulationSeriesPlugin = {
    name: 'e-accumulation-series',
    install: function (Vue$$1) {
        Vue$$1.component(AccumulationSeriesPlugin.name, AccumulationSeriesDirective);
    }
};

var __extends$14 = (undefined && undefined.__extends) || (function () {
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
var __decorate$14 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var AccumulationAnnotationsDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$14(AccumulationAnnotationsDirective, _super);
    function AccumulationAnnotationsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AccumulationAnnotationsDirective.prototype.render = function () {
        return;
    };
    AccumulationAnnotationsDirective = __decorate$14([
        EJComponentDecorator({})
    ], AccumulationAnnotationsDirective);
    return AccumulationAnnotationsDirective;
}(Vue));
var AccumulationAnnotationsPlugin = {
    name: 'e-accumulation-annotations',
    install: function (Vue$$1) {
        Vue$$1.component(AccumulationAnnotationsPlugin.name, AccumulationAnnotationsDirective);
    }
};
var AccumulationAnnotationDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$14(AccumulationAnnotationDirective, _super);
    function AccumulationAnnotationDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AccumulationAnnotationDirective.prototype.render = function () {
        return;
    };
    AccumulationAnnotationDirective = __decorate$14([
        EJComponentDecorator({})
    ], AccumulationAnnotationDirective);
    return AccumulationAnnotationDirective;
}(Vue));
var AccumulationAnnotationPlugin = {
    name: 'e-accumulation-annotation',
    install: function (Vue$$1) {
        Vue$$1.component(AccumulationAnnotationPlugin.name, AccumulationAnnotationDirective);
    }
};

var __extends$15 = (undefined && undefined.__extends) || (function () {
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
var __decorate$15 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var properties$1 = ['annotations', 'background', 'border', 'currencyCode', 'dataSource', 'enableAnimation', 'enablePersistence', 'enableRtl', 'enableSmartLabels', 'height', 'isMultiSelect', 'legendSettings', 'locale', 'margin', 'selectedDataIndexes', 'selectionMode', 'series', 'subTitle', 'subTitleStyle', 'theme', 'title', 'titleStyle', 'tooltip', 'width', 'animationComplete', 'annotationRender', 'beforePrint', 'chartMouseClick', 'chartMouseDown', 'chartMouseLeave', 'chartMouseMove', 'chartMouseUp', 'legendRender', 'load', 'loaded', 'pointClick', 'pointMove', 'pointRender', 'resized', 'seriesRender', 'textRender', 'tooltipRender'];
var modelProps$1 = [];
var AccumulationChartComponent = /** @__PURE__ @class */ (function (_super) {
    __extends$15(AccumulationChartComponent, _super);
    function AccumulationChartComponent() {
        var _this = _super.call(this) || this;
        _this.propKeys = properties$1;
        _this.models = modelProps$1;
        _this.hasChildDirective = true;
        _this.hasInjectedModules = true;
        _this.tagMapper = { "e-accumulation-series-collection": "e-accumulation-series", "e-accumulation-annotations": "e-accumulation-annotation" };
        _this.tagNameMapper = { "e-accumulation-series-collection": "e-series", "e-accumulation-annotations": "e-annotations" };
        _this.ej2Instances = new AccumulationChart({});
        _this.bindProperties();
        return _this;
    }
    AccumulationChartComponent.prototype.render = function (createElement) {
        return createElement('div', this.$slots.default);
    };
    AccumulationChartComponent.prototype.export = function (type, fileName, orientation, controls, width, height) {
        return this.ej2Instances.export(type, fileName, orientation, controls, width, height);
    };
    AccumulationChartComponent.prototype.print = function (id) {
        return this.ej2Instances.print(id);
    };
    AccumulationChartComponent.prototype.setAnnotationValue = function (annotationIndex, content) {
        return this.ej2Instances.setAnnotationValue(annotationIndex, content);
    };
    AccumulationChartComponent.prototype.titleTooltip = function (event, x, y, isTouch) {
        return this.ej2Instances.titleTooltip(event, x, y, isTouch);
    };
    AccumulationChartComponent = __decorate$15([
        EJComponentDecorator({
            props: properties$1
        })
    ], AccumulationChartComponent);
    return AccumulationChartComponent;
}(ComponentBase));
var AccumulationChartPlugin = {
    name: 'ejs-accumulationchart',
    install: function (Vue$$1) {
        Vue$$1.component(AccumulationChartPlugin.name, AccumulationChartComponent);
        Vue$$1.component(AccumulationSeriesPlugin.name, AccumulationSeriesDirective);
        Vue$$1.component(AccumulationSeriesCollectionPlugin.name, AccumulationSeriesCollectionDirective);
        Vue$$1.component(AccumulationAnnotationPlugin.name, AccumulationAnnotationDirective);
        Vue$$1.component(AccumulationAnnotationsPlugin.name, AccumulationAnnotationsDirective);
    }
};

var __extends$16 = (undefined && undefined.__extends) || (function () {
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
var __decorate$16 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var RangenavigatorSeriesCollectionDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$16(RangenavigatorSeriesCollectionDirective, _super);
    function RangenavigatorSeriesCollectionDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RangenavigatorSeriesCollectionDirective.prototype.render = function () {
        return;
    };
    RangenavigatorSeriesCollectionDirective = __decorate$16([
        EJComponentDecorator({})
    ], RangenavigatorSeriesCollectionDirective);
    return RangenavigatorSeriesCollectionDirective;
}(Vue));
var RangenavigatorSeriesCollectionPlugin = {
    name: 'e-rangenavigator-series-collection',
    install: function (Vue$$1) {
        Vue$$1.component(RangenavigatorSeriesCollectionPlugin.name, RangenavigatorSeriesCollectionDirective);
    }
};
var RangenavigatorSeriesDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$16(RangenavigatorSeriesDirective, _super);
    function RangenavigatorSeriesDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RangenavigatorSeriesDirective.prototype.render = function () {
        return;
    };
    RangenavigatorSeriesDirective = __decorate$16([
        EJComponentDecorator({})
    ], RangenavigatorSeriesDirective);
    return RangenavigatorSeriesDirective;
}(Vue));
var RangenavigatorSeriesPlugin = {
    name: 'e-rangenavigator-series',
    install: function (Vue$$1) {
        Vue$$1.component(RangenavigatorSeriesPlugin.name, RangenavigatorSeriesDirective);
    }
};

var __extends$17 = (undefined && undefined.__extends) || (function () {
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
var __decorate$17 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var properties$2 = ['allowSnapping', 'animationDuration', 'dataSource', 'disableRangeSelector', 'enableDeferredUpdate', 'enableGrouping', 'enablePersistence', 'enableRtl', 'groupBy', 'height', 'interval', 'intervalType', 'labelFormat', 'labelIntersectAction', 'labelPosition', 'labelStyle', 'locale', 'logBase', 'majorGridLines', 'majorTickLines', 'margin', 'maximum', 'minimum', 'navigatorBorder', 'navigatorStyleSettings', 'periodSelectorSettings', 'query', 'secondaryLabelAlignment', 'series', 'skeleton', 'skeletonType', 'theme', 'tickPosition', 'tooltip', 'useGroupingSeparator', 'value', 'valueType', 'width', 'xName', 'yName', 'beforePrint', 'changed', 'labelRender', 'load', 'loaded', 'resized', 'selectorRender', 'tooltipRender'];
var modelProps$2 = [];
var RangeNavigatorComponent = /** @__PURE__ @class */ (function (_super) {
    __extends$17(RangeNavigatorComponent, _super);
    function RangeNavigatorComponent() {
        var _this = _super.call(this) || this;
        _this.propKeys = properties$2;
        _this.models = modelProps$2;
        _this.hasChildDirective = true;
        _this.hasInjectedModules = true;
        _this.tagMapper = { "e-rangenavigator-series-collection": "e-rangenavigator-series" };
        _this.tagNameMapper = { "e-rangenavigator-series-collection": "e-series" };
        _this.ej2Instances = new RangeNavigator({});
        _this.bindProperties();
        return _this;
    }
    RangeNavigatorComponent.prototype.render = function (createElement) {
        return createElement('div', this.$slots.default);
    };
    RangeNavigatorComponent.prototype.createSecondaryElement = function () {
        return this.ej2Instances.createSecondaryElement();
    };
    RangeNavigatorComponent.prototype.export = function (type, fileName, orientation, controls, width, height) {
        return this.ej2Instances.export(type, fileName, orientation, controls, width, height);
    };
    RangeNavigatorComponent.prototype.print = function (id) {
        return this.ej2Instances.print(id);
    };
    RangeNavigatorComponent.prototype.renderChart = function () {
        return this.ej2Instances.renderChart();
    };
    RangeNavigatorComponent = __decorate$17([
        EJComponentDecorator({
            props: properties$2
        })
    ], RangeNavigatorComponent);
    return RangeNavigatorComponent;
}(ComponentBase));
var RangeNavigatorPlugin = {
    name: 'ejs-rangenavigator',
    install: function (Vue$$1) {
        Vue$$1.component(RangeNavigatorPlugin.name, RangeNavigatorComponent);
        Vue$$1.component(RangenavigatorSeriesPlugin.name, RangenavigatorSeriesDirective);
        Vue$$1.component(RangenavigatorSeriesCollectionPlugin.name, RangenavigatorSeriesCollectionDirective);
    }
};

var __extends$18 = (undefined && undefined.__extends) || (function () {
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
var __decorate$18 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var RangeBandSettingsDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$18(RangeBandSettingsDirective, _super);
    function RangeBandSettingsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RangeBandSettingsDirective.prototype.render = function () {
        return;
    };
    RangeBandSettingsDirective = __decorate$18([
        EJComponentDecorator({})
    ], RangeBandSettingsDirective);
    return RangeBandSettingsDirective;
}(Vue));
var RangeBandSettingsPlugin = {
    name: 'e-rangeBandSettings',
    install: function (Vue$$1) {
        Vue$$1.component(RangeBandSettingsPlugin.name, RangeBandSettingsDirective);
    }
};
var RangeBandSettingDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$18(RangeBandSettingDirective, _super);
    function RangeBandSettingDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RangeBandSettingDirective.prototype.render = function () {
        return;
    };
    RangeBandSettingDirective = __decorate$18([
        EJComponentDecorator({})
    ], RangeBandSettingDirective);
    return RangeBandSettingDirective;
}(Vue));
var RangeBandSettingPlugin = {
    name: 'e-rangeBandSetting',
    install: function (Vue$$1) {
        Vue$$1.component(RangeBandSettingPlugin.name, RangeBandSettingDirective);
    }
};

var __extends$19 = (undefined && undefined.__extends) || (function () {
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
var __decorate$19 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var properties$3 = ['axisSettings', 'border', 'containerArea', 'dataLabelSettings', 'dataSource', 'enablePersistence', 'enableRtl', 'endPointColor', 'fill', 'format', 'height', 'highPointColor', 'lineWidth', 'locale', 'lowPointColor', 'markerSettings', 'negativePointColor', 'opacity', 'padding', 'palette', 'rangeBandSettings', 'startPointColor', 'theme', 'tiePointColor', 'tooltipSettings', 'type', 'useGroupingSeparator', 'valueType', 'width', 'xName', 'yName', 'axisRendering', 'dataLabelRendering', 'load', 'loaded', 'markerRendering', 'pointRegionMouseClick', 'pointRegionMouseMove', 'pointRendering', 'resize', 'seriesRendering', 'sparklineMouseClick', 'sparklineMouseMove', 'tooltipInitialize'];
var modelProps$3 = [];
/**
 * Represents Vuejs Sparkline Component
 * ```vue
 * <ejs-sparkline></ejs-sparkline>
 * ```
 */
var SparklineComponent = /** @__PURE__ @class */ (function (_super) {
    __extends$19(SparklineComponent, _super);
    function SparklineComponent() {
        var _this = _super.call(this) || this;
        _this.propKeys = properties$3;
        _this.models = modelProps$3;
        _this.hasChildDirective = true;
        _this.hasInjectedModules = true;
        _this.tagMapper = { "e-rangeBandSettings": "e-rangeBandSetting" };
        _this.tagNameMapper = {};
        _this.ej2Instances = new Sparkline({});
        _this.bindProperties();
        return _this;
    }
    SparklineComponent.prototype.render = function (createElement) {
        return createElement('div', this.$slots.default);
    };
    SparklineComponent.prototype.renderSparkline = function () {
        return this.ej2Instances.renderSparkline();
    };
    SparklineComponent = __decorate$19([
        EJComponentDecorator({
            props: properties$3
        })
    ], SparklineComponent);
    return SparklineComponent;
}(ComponentBase));
var SparklinePlugin = {
    name: 'ejs-sparkline',
    install: function (Vue$$1) {
        Vue$$1.component(SparklinePlugin.name, SparklineComponent);
        Vue$$1.component(RangeBandSettingPlugin.name, RangeBandSettingDirective);
        Vue$$1.component(RangeBandSettingsPlugin.name, RangeBandSettingsDirective);
    }
};

var __extends$20 = (undefined && undefined.__extends) || (function () {
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
var __decorate$20 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var SmithchartSeriesCollectionDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$20(SmithchartSeriesCollectionDirective, _super);
    function SmithchartSeriesCollectionDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SmithchartSeriesCollectionDirective.prototype.render = function () {
        return;
    };
    SmithchartSeriesCollectionDirective = __decorate$20([
        EJComponentDecorator({})
    ], SmithchartSeriesCollectionDirective);
    return SmithchartSeriesCollectionDirective;
}(Vue));
var SmithchartSeriesCollectionPlugin = {
    name: 'e-seriesCollection',
    install: function (Vue$$1) {
        Vue$$1.component(SmithchartSeriesCollectionPlugin.name, SmithchartSeriesCollectionDirective);
    }
};
var SmithchartSeriesDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$20(SmithchartSeriesDirective, _super);
    function SmithchartSeriesDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SmithchartSeriesDirective.prototype.render = function () {
        return;
    };
    SmithchartSeriesDirective = __decorate$20([
        EJComponentDecorator({})
    ], SmithchartSeriesDirective);
    return SmithchartSeriesDirective;
}(Vue));
var SmithchartSeriesPlugin = {
    name: 'e-series',
    install: function (Vue$$1) {
        Vue$$1.component(SmithchartSeriesPlugin.name, SmithchartSeriesDirective);
    }
};

var __extends$21 = (undefined && undefined.__extends) || (function () {
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
var __decorate$21 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var properties$4 = ['background', 'border', 'elementSpacing', 'enablePersistence', 'enableRtl', 'font', 'height', 'horizontalAxis', 'legendSettings', 'locale', 'margin', 'radialAxis', 'radius', 'renderType', 'series', 'theme', 'title', 'width', 'animationComplete', 'axisLabelRender', 'beforePrint', 'legendRender', 'load', 'loaded', 'seriesRender', 'subtitleRender', 'textRender', 'titleRender'];
var modelProps$4 = [];
/**
 * Represents Vuejs Smithchart Component
 * ```vue
 * <ejs-smithchart></ejs-smithchart>
 * ```
 */
var SmithchartComponent = /** @__PURE__ @class */ (function (_super) {
    __extends$21(SmithchartComponent, _super);
    function SmithchartComponent() {
        var _this = _super.call(this) || this;
        _this.propKeys = properties$4;
        _this.models = modelProps$4;
        _this.hasChildDirective = true;
        _this.hasInjectedModules = true;
        _this.tagMapper = { "e-seriesCollection": "e-series" };
        _this.tagNameMapper = { "e-seriesCollection": "e-series" };
        _this.ej2Instances = new Smithchart({});
        _this.bindProperties();
        return _this;
    }
    SmithchartComponent.prototype.render = function (createElement) {
        return createElement('div', this.$slots.default);
    };
    SmithchartComponent.prototype.export = function (type, fileName, orientation) {
        return this.ej2Instances.export(type, fileName, orientation);
    };
    SmithchartComponent.prototype.mouseEnd = function (e) {
        return this.ej2Instances.mouseEnd(e);
    };
    SmithchartComponent.prototype.mouseMove = function (e) {
        return this.ej2Instances.mouseMove(e);
    };
    SmithchartComponent.prototype.print = function (id) {
        return this.ej2Instances.print(id);
    };
    SmithchartComponent.prototype.smithchartOnClick = function (e) {
        return this.ej2Instances.smithchartOnClick(e);
    };
    SmithchartComponent.prototype.smithchartOnResize = function (e) {
        return this.ej2Instances.smithchartOnResize(e);
    };
    SmithchartComponent = __decorate$21([
        EJComponentDecorator({
            props: properties$4
        })
    ], SmithchartComponent);
    return SmithchartComponent;
}(ComponentBase));
var SmithchartPlugin = {
    name: 'ejs-smithchart',
    install: function (Vue$$1) {
        Vue$$1.component(SmithchartPlugin.name, SmithchartComponent);
        Vue$$1.component(SmithchartSeriesPlugin.name, SmithchartSeriesDirective);
        Vue$$1.component(SmithchartSeriesCollectionPlugin.name, SmithchartSeriesCollectionDirective);
    }
};

export { TrendlinesDirective, TrendlineDirective, TrendlinesPlugin, TrendlinePlugin, SegmentsDirective, SegmentDirective, SegmentsPlugin, SegmentPlugin, SeriesCollectionDirective, SeriesDirective, SeriesCollectionPlugin, SeriesPlugin, StripLinesDirective, StripLineDirective, StripLinesPlugin, StripLinePlugin, CategoriesDirective, CategoryDirective, CategoriesPlugin, CategoryPlugin, MultiLevelLabelsDirective, MultiLevelLabelDirective, MultiLevelLabelsPlugin, MultiLevelLabelPlugin, AxesDirective, AxisDirective, AxesPlugin, AxisPlugin, RowsDirective, RowDirective, RowsPlugin, RowPlugin, ColumnsDirective, ColumnDirective, ColumnsPlugin, ColumnPlugin, AnnotationsDirective, AnnotationDirective, AnnotationsPlugin, AnnotationPlugin, SelectedDataIndexesDirective, SelectedDataIndexDirective, SelectedDataIndexesPlugin, SelectedDataIndexPlugin, IndicatorsDirective, IndicatorDirective, IndicatorsPlugin, IndicatorPlugin, ChartComponent, ChartPlugin, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, AccumulationSeriesCollectionPlugin, AccumulationSeriesPlugin, AccumulationAnnotationsDirective, AccumulationAnnotationDirective, AccumulationAnnotationsPlugin, AccumulationAnnotationPlugin, AccumulationChartComponent, AccumulationChartPlugin, RangenavigatorSeriesCollectionDirective, RangenavigatorSeriesDirective, RangenavigatorSeriesCollectionPlugin, RangenavigatorSeriesPlugin, RangeNavigatorComponent, RangeNavigatorPlugin, RangeBandSettingsDirective, RangeBandSettingDirective, RangeBandSettingsPlugin, RangeBandSettingPlugin, SparklineComponent, SparklinePlugin, SmithchartSeriesCollectionDirective, SmithchartSeriesDirective, SmithchartSeriesCollectionPlugin, SmithchartSeriesPlugin, SmithchartComponent, SmithchartPlugin };
export * from '@syncfusion/ej2-charts';
//# sourceMappingURL=ej2-vue-charts.es5.js.map
