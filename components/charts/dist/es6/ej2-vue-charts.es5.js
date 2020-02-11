import { AccumulationChart, BulletChart, Chart, RangeNavigator, Smithchart, Sparkline, StockChart } from '@syncfusion/ej2-charts';
import Vue from 'vue';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';
import { isUndefined } from '@syncfusion/ej2-base';

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
var properties = ['allowMultiSelection', 'annotations', 'axes', 'background', 'backgroundImage', 'border', 'chartArea', 'columns', 'crosshair', 'currencyCode', 'dataSource', 'description', 'enableAnimation', 'enableCanvas', 'enableExport', 'enablePersistence', 'enableRtl', 'enableSideBySidePlacement', 'height', 'indicators', 'isMultiSelect', 'isTransposed', 'legendSettings', 'locale', 'margin', 'palettes', 'primaryXAxis', 'primaryYAxis', 'rows', 'selectedDataIndexes', 'selectionMode', 'series', 'subTitle', 'subTitleStyle', 'tabIndex', 'theme', 'title', 'titleStyle', 'tooltip', 'useGroupingSeparator', 'width', 'zoomSettings', 'afterExport', 'animationComplete', 'annotationRender', 'axisLabelRender', 'axisMultiLabelRender', 'axisRangeCalculated', 'beforeExport', 'beforePrint', 'chartMouseClick', 'chartMouseDown', 'chartMouseLeave', 'chartMouseMove', 'chartMouseUp', 'drag', 'dragComplete', 'dragEnd', 'dragStart', 'legendClick', 'legendRender', 'load', 'loaded', 'multiLevelLabelClick', 'onZooming', 'pointClick', 'pointMove', 'pointRender', 'resized', 'scrollChanged', 'scrollEnd', 'scrollStart', 'selectionComplete', 'seriesRender', 'textRender', 'tooltipRender', 'zoomComplete'];
var modelProps = ['dataSource'];
/**
 * Represents Vuejs chart Component
 * ```vue
 * <ejs-chart></ejs-chart>
 * ```
 */
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
        _this.ej2Instances._trigger = _this.ej2Instances.trigger;
        _this.ej2Instances.trigger = _this.trigger;
        _this.bindProperties();
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        return _this;
    }
    ChartComponent.prototype.setProperties = function (prop, muteOnChange) {
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
    ChartComponent.prototype.trigger = function (eventName, eventProp, successHandler) {
        if ((eventName === 'change' || eventName === 'input') && this.models && (this.models.length !== 0)) {
            var key = this.models.toString().match(/checked|value/) || [];
            var propKey = key[0];
            if (eventProp && key && !isUndefined(eventProp[propKey])) {
                this.$emit('update:' + propKey, eventProp[propKey]);
                this.$emit('modelchanged', eventProp[propKey]);
            }
        }
        if (this.ej2Instances && this.ej2Instances._trigger) {
            this.ej2Instances._trigger(eventName, eventProp, successHandler);
        }
    };
    ChartComponent.prototype.render = function (createElement) {
        return createElement('div', this.$slots.default);
    };
    ChartComponent.prototype.addSeries = function (seriesCollection) {
        return this.ej2Instances.addSeries(seriesCollection);
    };
    ChartComponent.prototype.clearSeries = function () {
        return this.ej2Instances.clearSeries();
    };
    ChartComponent.prototype.createChartSvg = function () {
        return this.ej2Instances.createChartSvg();
    };
    ChartComponent.prototype.export = function (type, fileName) {
        return this.ej2Instances.export(type, fileName);
    };
    ChartComponent.prototype.getLocalizedLabel = function (key) {
        return this.ej2Instances.getLocalizedLabel(key);
    };
    ChartComponent.prototype.print = function (id) {
        return this.ej2Instances.print(id);
    };
    ChartComponent.prototype.refreshLiveData = function () {
        return this.ej2Instances.refreshLiveData();
    };
    ChartComponent.prototype.removeSeries = function (index) {
        return this.ej2Instances.removeSeries(index);
    };
    ChartComponent.prototype.setAnnotationValue = function (annotationIndex, content) {
        return this.ej2Instances.setAnnotationValue(annotationIndex, content);
    };
    ChartComponent = __decorate$12([
        EJComponentDecorator({
            props: properties,
            model: {
                event: 'modelchanged'
            }
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
var properties$1 = ['annotations', 'background', 'backgroundImage', 'border', 'center', 'currencyCode', 'dataSource', 'enableAnimation', 'enableBorderOnMouseMove', 'enableExport', 'enablePersistence', 'enableRtl', 'enableSmartLabels', 'height', 'isMultiSelect', 'legendSettings', 'locale', 'margin', 'selectedDataIndexes', 'selectionMode', 'series', 'subTitle', 'subTitleStyle', 'theme', 'title', 'titleStyle', 'tooltip', 'useGroupingSeparator', 'width', 'animationComplete', 'annotationRender', 'beforePrint', 'chartMouseClick', 'chartMouseDown', 'chartMouseLeave', 'chartMouseMove', 'chartMouseUp', 'legendRender', 'load', 'loaded', 'pointClick', 'pointMove', 'pointRender', 'resized', 'seriesRender', 'textRender', 'tooltipRender'];
var modelProps$1 = ['dataSource'];
/**
 * Represents Vuejs AccumulationChart Component
 * ```vue
 * <ejs-accumulationchart></ejs-accumulationchart>
 * ```
 */
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
        _this.ej2Instances._trigger = _this.ej2Instances.trigger;
        _this.ej2Instances.trigger = _this.trigger;
        _this.bindProperties();
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        return _this;
    }
    AccumulationChartComponent.prototype.setProperties = function (prop, muteOnChange) {
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
    AccumulationChartComponent.prototype.trigger = function (eventName, eventProp, successHandler) {
        if ((eventName === 'change' || eventName === 'input') && this.models && (this.models.length !== 0)) {
            var key = this.models.toString().match(/checked|value/) || [];
            var propKey = key[0];
            if (eventProp && key && !isUndefined(eventProp[propKey])) {
                this.$emit('update:' + propKey, eventProp[propKey]);
                this.$emit('modelchanged', eventProp[propKey]);
            }
        }
        if (this.ej2Instances && this.ej2Instances._trigger) {
            this.ej2Instances._trigger(eventName, eventProp, successHandler);
        }
    };
    AccumulationChartComponent.prototype.render = function (createElement) {
        return createElement('div', this.$slots.default);
    };
    AccumulationChartComponent.prototype.export = function (type, fileName) {
        return this.ej2Instances.export(type, fileName);
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
            props: properties$1,
            model: {
                event: 'modelchanged'
            }
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
var modelProps$2 = ['dataSource'];
/**
 * Represents Vuejs RangeNavigator Component
 * ```vue
 * <ejs-rangenavigator></ejs-rangenavigator>
 * ```
 */
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
        _this.ej2Instances._trigger = _this.ej2Instances.trigger;
        _this.ej2Instances.trigger = _this.trigger;
        _this.bindProperties();
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        return _this;
    }
    RangeNavigatorComponent.prototype.setProperties = function (prop, muteOnChange) {
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
    RangeNavigatorComponent.prototype.trigger = function (eventName, eventProp, successHandler) {
        if ((eventName === 'change' || eventName === 'input') && this.models && (this.models.length !== 0)) {
            var key = this.models.toString().match(/checked|value/) || [];
            var propKey = key[0];
            if (eventProp && key && !isUndefined(eventProp[propKey])) {
                this.$emit('update:' + propKey, eventProp[propKey]);
                this.$emit('modelchanged', eventProp[propKey]);
            }
        }
        if (this.ej2Instances && this.ej2Instances._trigger) {
            this.ej2Instances._trigger(eventName, eventProp, successHandler);
        }
    };
    RangeNavigatorComponent.prototype.render = function (createElement) {
        return createElement('div', this.$slots.default);
    };
    RangeNavigatorComponent.prototype.createSecondaryElement = function () {
        return this.ej2Instances.createSecondaryElement();
    };
    RangeNavigatorComponent.prototype.export = function (type, fileName, orientation, controls, width, height, isVertical) {
        return this.ej2Instances.export(type, fileName, orientation, controls, width, height, isVertical);
    };
    RangeNavigatorComponent.prototype.print = function (id) {
        return this.ej2Instances.print(id);
    };
    RangeNavigatorComponent.prototype.renderChart = function () {
        return this.ej2Instances.renderChart();
    };
    RangeNavigatorComponent = __decorate$17([
        EJComponentDecorator({
            props: properties$2,
            model: {
                event: 'modelchanged'
            }
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
var properties$3 = ['axisSettings', 'border', 'containerArea', 'dataLabelSettings', 'dataSource', 'enablePersistence', 'enableRtl', 'endPointColor', 'fill', 'format', 'height', 'highPointColor', 'lineWidth', 'locale', 'lowPointColor', 'markerSettings', 'negativePointColor', 'opacity', 'padding', 'palette', 'query', 'rangeBandSettings', 'startPointColor', 'theme', 'tiePointColor', 'tooltipSettings', 'type', 'useGroupingSeparator', 'valueType', 'width', 'xName', 'yName', 'axisRendering', 'dataLabelRendering', 'load', 'loaded', 'markerRendering', 'pointRegionMouseClick', 'pointRegionMouseMove', 'pointRendering', 'resize', 'seriesRendering', 'sparklineMouseClick', 'sparklineMouseMove', 'tooltipInitialize'];
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
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        return _this;
    }
    SparklineComponent.prototype.setProperties = function (prop, muteOnChange) {
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
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        return _this;
    }
    SmithchartComponent.prototype.setProperties = function (prop, muteOnChange) {
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

var __extends$22 = (undefined && undefined.__extends) || (function () {
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
var __decorate$22 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var StockChartTrendlinesDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$22(StockChartTrendlinesDirective, _super);
    function StockChartTrendlinesDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StockChartTrendlinesDirective.prototype.render = function () {
        return;
    };
    StockChartTrendlinesDirective = __decorate$22([
        EJComponentDecorator({})
    ], StockChartTrendlinesDirective);
    return StockChartTrendlinesDirective;
}(Vue));
var StockChartTrendlinesPlugin = {
    name: 'e-trendlines',
    install: function (Vue$$1) {
        Vue$$1.component(StockChartTrendlinesPlugin.name, StockChartTrendlinesDirective);
    }
};
var StockChartTrendlineDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$22(StockChartTrendlineDirective, _super);
    function StockChartTrendlineDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StockChartTrendlineDirective.prototype.render = function () {
        return;
    };
    StockChartTrendlineDirective = __decorate$22([
        EJComponentDecorator({})
    ], StockChartTrendlineDirective);
    return StockChartTrendlineDirective;
}(Vue));
var StockChartTrendlinePlugin = {
    name: 'e-trendline',
    install: function (Vue$$1) {
        Vue$$1.component(StockChartTrendlinePlugin.name, StockChartTrendlineDirective);
    }
};

var __extends$23 = (undefined && undefined.__extends) || (function () {
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
var __decorate$23 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var StockChartSeriesCollectionDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$23(StockChartSeriesCollectionDirective, _super);
    function StockChartSeriesCollectionDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StockChartSeriesCollectionDirective.prototype.render = function () {
        return;
    };
    StockChartSeriesCollectionDirective = __decorate$23([
        EJComponentDecorator({})
    ], StockChartSeriesCollectionDirective);
    return StockChartSeriesCollectionDirective;
}(Vue));
var StockChartSeriesCollectionPlugin = {
    name: 'e-stockchart-series-collection',
    install: function (Vue$$1) {
        Vue$$1.component(StockChartSeriesCollectionPlugin.name, StockChartSeriesCollectionDirective);
    }
};
var StockChartSeriesDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$23(StockChartSeriesDirective, _super);
    function StockChartSeriesDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StockChartSeriesDirective.prototype.render = function () {
        return;
    };
    StockChartSeriesDirective = __decorate$23([
        EJComponentDecorator({})
    ], StockChartSeriesDirective);
    return StockChartSeriesDirective;
}(Vue));
var StockChartSeriesPlugin = {
    name: 'e-stockchart-series',
    install: function (Vue$$1) {
        Vue$$1.component(StockChartSeriesPlugin.name, StockChartSeriesDirective);
    }
};

var __extends$24 = (undefined && undefined.__extends) || (function () {
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
var __decorate$24 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var StockChartStripLinesDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$24(StockChartStripLinesDirective, _super);
    function StockChartStripLinesDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StockChartStripLinesDirective.prototype.render = function () {
        return;
    };
    StockChartStripLinesDirective = __decorate$24([
        EJComponentDecorator({})
    ], StockChartStripLinesDirective);
    return StockChartStripLinesDirective;
}(Vue));
var StockChartStripLinesPlugin = {
    name: 'e-stockchart-striplines',
    install: function (Vue$$1) {
        Vue$$1.component(StockChartStripLinesPlugin.name, StockChartStripLinesDirective);
    }
};
var StockChartStripLineDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$24(StockChartStripLineDirective, _super);
    function StockChartStripLineDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StockChartStripLineDirective.prototype.render = function () {
        return;
    };
    StockChartStripLineDirective = __decorate$24([
        EJComponentDecorator({})
    ], StockChartStripLineDirective);
    return StockChartStripLineDirective;
}(Vue));
var StockChartStripLinePlugin = {
    name: 'e-stockchart-stripline',
    install: function (Vue$$1) {
        Vue$$1.component(StockChartStripLinePlugin.name, StockChartStripLineDirective);
    }
};

var __extends$25 = (undefined && undefined.__extends) || (function () {
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
var __decorate$25 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var StockChartAxesDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$25(StockChartAxesDirective, _super);
    function StockChartAxesDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StockChartAxesDirective.prototype.render = function () {
        return;
    };
    StockChartAxesDirective = __decorate$25([
        EJComponentDecorator({})
    ], StockChartAxesDirective);
    return StockChartAxesDirective;
}(Vue));
var StockChartAxesPlugin = {
    name: 'e-stockchart-axes',
    install: function (Vue$$1) {
        Vue$$1.component(StockChartAxesPlugin.name, StockChartAxesDirective);
    }
};
var StockChartAxisDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$25(StockChartAxisDirective, _super);
    function StockChartAxisDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StockChartAxisDirective.prototype.render = function () {
        return;
    };
    StockChartAxisDirective = __decorate$25([
        EJComponentDecorator({})
    ], StockChartAxisDirective);
    return StockChartAxisDirective;
}(Vue));
var StockChartAxisPlugin = {
    name: 'e-stockchart-axis',
    install: function (Vue$$1) {
        Vue$$1.component(StockChartAxisPlugin.name, StockChartAxisDirective);
    }
};

var __extends$26 = (undefined && undefined.__extends) || (function () {
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
var __decorate$26 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var StockChartRowsDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$26(StockChartRowsDirective, _super);
    function StockChartRowsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StockChartRowsDirective.prototype.render = function () {
        return;
    };
    StockChartRowsDirective = __decorate$26([
        EJComponentDecorator({})
    ], StockChartRowsDirective);
    return StockChartRowsDirective;
}(Vue));
var StockChartRowsPlugin = {
    name: 'e-stockchart-rows',
    install: function (Vue$$1) {
        Vue$$1.component(StockChartRowsPlugin.name, StockChartRowsDirective);
    }
};
var StockChartRowDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$26(StockChartRowDirective, _super);
    function StockChartRowDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StockChartRowDirective.prototype.render = function () {
        return;
    };
    StockChartRowDirective = __decorate$26([
        EJComponentDecorator({})
    ], StockChartRowDirective);
    return StockChartRowDirective;
}(Vue));
var StockChartRowPlugin = {
    name: 'e-stockchart-row',
    install: function (Vue$$1) {
        Vue$$1.component(StockChartRowPlugin.name, StockChartRowDirective);
    }
};

var __extends$27 = (undefined && undefined.__extends) || (function () {
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
var __decorate$27 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var StockChartAnnotationsDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$27(StockChartAnnotationsDirective, _super);
    function StockChartAnnotationsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StockChartAnnotationsDirective.prototype.render = function () {
        return;
    };
    StockChartAnnotationsDirective = __decorate$27([
        EJComponentDecorator({})
    ], StockChartAnnotationsDirective);
    return StockChartAnnotationsDirective;
}(Vue));
var StockChartAnnotationsPlugin = {
    name: 'e-stockchart-annotations',
    install: function (Vue$$1) {
        Vue$$1.component(StockChartAnnotationsPlugin.name, StockChartAnnotationsDirective);
    }
};
/**
 * `e-annotation` directive represent a annotation of the VueJS Chart.
 * It must be contained in a Chart component(`ejs-chart`).
 * ```vue
 * <ejs-stockchart>
 *   <e-stockchart-annotations>
 *    <e-annotation content='ID' />
 *    <e-annotation content='ID' />
 *   </e-annotations>
 * </ejs-chart>
 * ```
 */
var StockChartAnnotationDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$27(StockChartAnnotationDirective, _super);
    function StockChartAnnotationDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StockChartAnnotationDirective.prototype.render = function () {
        return;
    };
    StockChartAnnotationDirective = __decorate$27([
        EJComponentDecorator({})
    ], StockChartAnnotationDirective);
    return StockChartAnnotationDirective;
}(Vue));
var StockChartAnnotationPlugin = {
    name: 'e-stockchart-annotation',
    install: function (Vue$$1) {
        Vue$$1.component(StockChartAnnotationPlugin.name, StockChartAnnotationDirective);
    }
};

var __extends$28 = (undefined && undefined.__extends) || (function () {
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
var __decorate$28 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var StockChartSelectedDataIndexesDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$28(StockChartSelectedDataIndexesDirective, _super);
    function StockChartSelectedDataIndexesDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StockChartSelectedDataIndexesDirective.prototype.render = function () {
        return;
    };
    StockChartSelectedDataIndexesDirective = __decorate$28([
        EJComponentDecorator({})
    ], StockChartSelectedDataIndexesDirective);
    return StockChartSelectedDataIndexesDirective;
}(Vue));
var StockChartSelectedDataIndexesPlugin = {
    name: 'e-stockchart-selectedDataIndexes',
    install: function (Vue$$1) {
        Vue$$1.component(StockChartSelectedDataIndexesPlugin.name, StockChartSelectedDataIndexesDirective);
    }
};
var StockChartSelectedDataIndexDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$28(StockChartSelectedDataIndexDirective, _super);
    function StockChartSelectedDataIndexDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StockChartSelectedDataIndexDirective.prototype.render = function () {
        return;
    };
    StockChartSelectedDataIndexDirective = __decorate$28([
        EJComponentDecorator({})
    ], StockChartSelectedDataIndexDirective);
    return StockChartSelectedDataIndexDirective;
}(Vue));
var StockChartSelectedDataIndexPlugin = {
    name: 'e-stockchart-selectedDataIndex',
    install: function (Vue$$1) {
        Vue$$1.component(StockChartSelectedDataIndexPlugin.name, StockChartSelectedDataIndexDirective);
    }
};

var __extends$29 = (undefined && undefined.__extends) || (function () {
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
var __decorate$29 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var StockChartPeriodsDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$29(StockChartPeriodsDirective, _super);
    function StockChartPeriodsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StockChartPeriodsDirective.prototype.render = function () {
        return;
    };
    StockChartPeriodsDirective = __decorate$29([
        EJComponentDecorator({})
    ], StockChartPeriodsDirective);
    return StockChartPeriodsDirective;
}(Vue));
var StockChartPeriodsPlugin = {
    name: 'e-stockchart-periods',
    install: function (Vue$$1) {
        Vue$$1.component(StockChartPeriodsPlugin.name, StockChartPeriodsDirective);
    }
};
var StockChartPeriodDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$29(StockChartPeriodDirective, _super);
    function StockChartPeriodDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StockChartPeriodDirective.prototype.render = function () {
        return;
    };
    StockChartPeriodDirective = __decorate$29([
        EJComponentDecorator({})
    ], StockChartPeriodDirective);
    return StockChartPeriodDirective;
}(Vue));
var StockChartPeriodPlugin = {
    name: 'e-stockchart-period',
    install: function (Vue$$1) {
        Vue$$1.component(StockChartPeriodPlugin.name, StockChartPeriodDirective);
    }
};

var __extends$30 = (undefined && undefined.__extends) || (function () {
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
var __decorate$30 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var StockEventsDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$30(StockEventsDirective, _super);
    function StockEventsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StockEventsDirective.prototype.render = function () {
        return;
    };
    StockEventsDirective = __decorate$30([
        EJComponentDecorator({})
    ], StockEventsDirective);
    return StockEventsDirective;
}(Vue));
var StockEventsPlugin = {
    name: 'e-stockchart-stockevents',
    install: function (Vue$$1) {
        Vue$$1.component(StockEventsPlugin.name, StockEventsDirective);
    }
};
var StockEventDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$30(StockEventDirective, _super);
    function StockEventDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StockEventDirective.prototype.render = function () {
        return;
    };
    StockEventDirective = __decorate$30([
        EJComponentDecorator({})
    ], StockEventDirective);
    return StockEventDirective;
}(Vue));
var StockEventPlugin = {
    name: 'e-stockchart-stockevent',
    install: function (Vue$$1) {
        Vue$$1.component(StockEventPlugin.name, StockEventDirective);
    }
};

var __extends$31 = (undefined && undefined.__extends) || (function () {
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
var __decorate$31 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var StockChartIndicatorsDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$31(StockChartIndicatorsDirective, _super);
    function StockChartIndicatorsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StockChartIndicatorsDirective.prototype.render = function () {
        return;
    };
    StockChartIndicatorsDirective = __decorate$31([
        EJComponentDecorator({})
    ], StockChartIndicatorsDirective);
    return StockChartIndicatorsDirective;
}(Vue));
var StockChartIndicatorsPlugin = {
    name: 'e-stockchart-indicators',
    install: function (Vue$$1) {
        Vue$$1.component(StockChartIndicatorsPlugin.name, StockChartIndicatorsDirective);
    }
};
var StockChartIndicatorDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$31(StockChartIndicatorDirective, _super);
    function StockChartIndicatorDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StockChartIndicatorDirective.prototype.render = function () {
        return;
    };
    StockChartIndicatorDirective = __decorate$31([
        EJComponentDecorator({})
    ], StockChartIndicatorDirective);
    return StockChartIndicatorDirective;
}(Vue));
var StockChartIndicatorPlugin = {
    name: 'e-stockchart-indicator',
    install: function (Vue$$1) {
        Vue$$1.component(StockChartIndicatorPlugin.name, StockChartIndicatorDirective);
    }
};

var __extends$32 = (undefined && undefined.__extends) || (function () {
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
var __decorate$32 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var properties$5 = ['annotations', 'axes', 'background', 'border', 'chartArea', 'crosshair', 'dataSource', 'enableCustomRange', 'enablePeriodSelector', 'enablePersistence', 'enableRtl', 'enableSelector', 'exportType', 'height', 'indicatorType', 'indicators', 'isMultiSelect', 'isSelect', 'isTransposed', 'locale', 'margin', 'periods', 'primaryXAxis', 'primaryYAxis', 'rows', 'selectedDataIndexes', 'selectionMode', 'series', 'seriesType', 'stockEvents', 'theme', 'title', 'titleStyle', 'tooltip', 'trendlineType', 'width', 'zoomSettings', 'axisLabelRender', 'load', 'loaded', 'onZooming', 'pointClick', 'pointMove', 'rangeChange', 'selectorRender', 'seriesRender', 'stockChartMouseClick', 'stockChartMouseDown', 'stockChartMouseLeave', 'stockChartMouseMove', 'stockChartMouseUp', 'stockEventRender', 'tooltipRender'];
var modelProps$5 = ['dataSource'];
/**
 * Represents Vuejs chart Component
 * ```vue
 * <ejs-stockchart></ejs-stockchart>
 * ```
 */
var StockChartComponent = /** @__PURE__ @class */ (function (_super) {
    __extends$32(StockChartComponent, _super);
    function StockChartComponent() {
        var _this = _super.call(this) || this;
        _this.propKeys = properties$5;
        _this.models = modelProps$5;
        _this.hasChildDirective = true;
        _this.hasInjectedModules = true;
        _this.tagMapper = { "e-stockchart-series-collection": { "e-stockchart-series": { "e-trendlines": "e-trendline" } }, "e-stockchart-axes": { "e-stockchart-axis": { "e-stockchart-striplines": "e-stockchart-stripline" } }, "e-stockchart-rows": "e-stockchart-row", "e-stockchart-annotations": "e-stockchart-annotation", "e-stockchart-selectedDataIndexes": "e-stockchart-selectedDataIndex", "e-stockchart-periods": "e-stockchart-period", "e-stockchart-stockevents": "e-stockchart-stockevent", "e-stockchart-indicators": "e-stockchart-indicator" };
        _this.tagNameMapper = { "e-stockchart-series-collection": "e-series", "e-stockchart-striplines": "e-stripLines", "e-stockchart-axes": "e-axes", "e-stockchart-rows": "e-rows", "e-stockchart-annotations": "e-annotations", "e-stockchart-selectedDataIndexes": "e-selectedDataIndexes", "e-stockchart-periods": "e-periods", "e-stockchart-stockevents": "e-stockEvents", "e-stockchart-indicators": "e-indicators" };
        _this.ej2Instances = new StockChart({});
        _this.ej2Instances._trigger = _this.ej2Instances.trigger;
        _this.ej2Instances.trigger = _this.trigger;
        _this.bindProperties();
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        return _this;
    }
    StockChartComponent.prototype.setProperties = function (prop, muteOnChange) {
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
    StockChartComponent.prototype.trigger = function (eventName, eventProp, successHandler) {
        if ((eventName === 'change' || eventName === 'input') && this.models && (this.models.length !== 0)) {
            var key = this.models.toString().match(/checked|value/) || [];
            var propKey = key[0];
            if (eventProp && key && !isUndefined(eventProp[propKey])) {
                this.$emit('update:' + propKey, eventProp[propKey]);
                this.$emit('modelchanged', eventProp[propKey]);
            }
        }
        if (this.ej2Instances && this.ej2Instances._trigger) {
            this.ej2Instances._trigger(eventName, eventProp, successHandler);
        }
    };
    StockChartComponent.prototype.render = function (createElement) {
        return createElement('div', this.$slots.default);
    };
    StockChartComponent.prototype.chartModuleInjection = function () {
        return this.ej2Instances.chartModuleInjection();
    };
    StockChartComponent.prototype.findCurrentData = function (totalData, xName) {
        return this.ej2Instances.findCurrentData(totalData, xName);
    };
    StockChartComponent.prototype.rangeChanged = function (updatedStart, updatedEnd) {
        return this.ej2Instances.rangeChanged(updatedStart, updatedEnd);
    };
    StockChartComponent.prototype.renderPeriodSelector = function () {
        return this.ej2Instances.renderPeriodSelector();
    };
    StockChartComponent.prototype.stockChartDataManagerSuccess = function () {
        return this.ej2Instances.stockChartDataManagerSuccess();
    };
    StockChartComponent = __decorate$32([
        EJComponentDecorator({
            props: properties$5,
            model: {
                event: 'modelchanged'
            }
        })
    ], StockChartComponent);
    return StockChartComponent;
}(ComponentBase));
var StockChartPlugin = {
    name: 'ejs-stockchart',
    install: function (Vue$$1) {
        Vue$$1.component(StockChartPlugin.name, StockChartComponent);
        Vue$$1.component(StockChartSeriesPlugin.name, StockChartSeriesDirective);
        Vue$$1.component(StockChartSeriesCollectionPlugin.name, StockChartSeriesCollectionDirective);
        Vue$$1.component(StockChartTrendlinePlugin.name, StockChartTrendlineDirective);
        Vue$$1.component(StockChartTrendlinesPlugin.name, StockChartTrendlinesDirective);
        Vue$$1.component(StockChartAxisPlugin.name, StockChartAxisDirective);
        Vue$$1.component(StockChartAxesPlugin.name, StockChartAxesDirective);
        Vue$$1.component(StockChartStripLinePlugin.name, StockChartStripLineDirective);
        Vue$$1.component(StockChartStripLinesPlugin.name, StockChartStripLinesDirective);
        Vue$$1.component(StockChartRowPlugin.name, StockChartRowDirective);
        Vue$$1.component(StockChartRowsPlugin.name, StockChartRowsDirective);
        Vue$$1.component(StockChartAnnotationPlugin.name, StockChartAnnotationDirective);
        Vue$$1.component(StockChartAnnotationsPlugin.name, StockChartAnnotationsDirective);
        Vue$$1.component(StockChartSelectedDataIndexPlugin.name, StockChartSelectedDataIndexDirective);
        Vue$$1.component(StockChartSelectedDataIndexesPlugin.name, StockChartSelectedDataIndexesDirective);
        Vue$$1.component(StockChartPeriodPlugin.name, StockChartPeriodDirective);
        Vue$$1.component(StockChartPeriodsPlugin.name, StockChartPeriodsDirective);
        Vue$$1.component(StockEventPlugin.name, StockEventDirective);
        Vue$$1.component(StockEventsPlugin.name, StockEventsDirective);
        Vue$$1.component(StockChartIndicatorPlugin.name, StockChartIndicatorDirective);
        Vue$$1.component(StockChartIndicatorsPlugin.name, StockChartIndicatorsDirective);
    }
};

var __extends$33 = (undefined && undefined.__extends) || (function () {
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
var __decorate$33 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var BulletRangeCollectionDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$33(BulletRangeCollectionDirective, _super);
    function BulletRangeCollectionDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BulletRangeCollectionDirective.prototype.render = function () {
        return;
    };
    BulletRangeCollectionDirective = __decorate$33([
        EJComponentDecorator({})
    ], BulletRangeCollectionDirective);
    return BulletRangeCollectionDirective;
}(Vue));
var BulletRangeCollectionPlugin = {
    name: 'e-bullet-range-collection',
    install: function (Vue$$1) {
        Vue$$1.component(BulletRangeCollectionPlugin.name, BulletRangeCollectionDirective);
    }
};
var BulletRangeDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$33(BulletRangeDirective, _super);
    function BulletRangeDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BulletRangeDirective.prototype.render = function () {
        return;
    };
    BulletRangeDirective = __decorate$33([
        EJComponentDecorator({})
    ], BulletRangeDirective);
    return BulletRangeDirective;
}(Vue));
var BulletRangePlugin = {
    name: 'e-bullet-range',
    install: function (Vue$$1) {
        Vue$$1.component(BulletRangePlugin.name, BulletRangeDirective);
    }
};

var __extends$34 = (undefined && undefined.__extends) || (function () {
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
var __decorate$34 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var properties$6 = ['animation', 'border', 'categoryField', 'categoryLabelStyle', 'dataLabel', 'dataSource', 'enableGroupSeparator', 'enablePersistence', 'enableRtl', 'height', 'interval', 'labelFormat', 'labelPosition', 'labelStyle', 'locale', 'majorTickLines', 'margin', 'maximum', 'minimum', 'minorTickLines', 'minorTicksPerInterval', 'opposedPosition', 'orientation', 'query', 'ranges', 'subtitle', 'subtitleStyle', 'tabIndex', 'targetColor', 'targetField', 'targetTypes', 'targetWidth', 'theme', 'tickPosition', 'title', 'titlePosition', 'titleStyle', 'tooltip', 'type', 'valueBorder', 'valueField', 'valueFill', 'valueHeight', 'width', 'beforePrint', 'load', 'loaded', 'tooltipRender'];
var modelProps$6 = ['dataSource'];
/**
 * Represents Vuejs BulletChart Component
 * ```vue
 * <ejs-bulletchart></ejs-bulletchart>
 * ```
 */
var BulletChartComponent = /** @__PURE__ @class */ (function (_super) {
    __extends$34(BulletChartComponent, _super);
    function BulletChartComponent() {
        var _this = _super.call(this) || this;
        _this.propKeys = properties$6;
        _this.models = modelProps$6;
        _this.hasChildDirective = true;
        _this.hasInjectedModules = true;
        _this.tagMapper = { "e-bullet-range-collection": "e-bullet-range" };
        _this.tagNameMapper = { "e-bullet-range-collection": "e-ranges" };
        _this.ej2Instances = new BulletChart({});
        _this.ej2Instances._trigger = _this.ej2Instances.trigger;
        _this.ej2Instances.trigger = _this.trigger;
        _this.bindProperties();
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        return _this;
    }
    BulletChartComponent.prototype.setProperties = function (prop, muteOnChange) {
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
    BulletChartComponent.prototype.trigger = function (eventName, eventProp, successHandler) {
        if ((eventName === 'change' || eventName === 'input') && this.models && (this.models.length !== 0)) {
            var key = this.models.toString().match(/checked|value/) || [];
            var propKey = key[0];
            if (eventProp && key && !isUndefined(eventProp[propKey])) {
                this.$emit('update:' + propKey, eventProp[propKey]);
                this.$emit('modelchanged', eventProp[propKey]);
            }
        }
        if (this.ej2Instances && this.ej2Instances._trigger) {
            this.ej2Instances._trigger(eventName, eventProp, successHandler);
        }
    };
    BulletChartComponent.prototype.render = function (createElement) {
        return createElement('div', this.$slots.default);
    };
    BulletChartComponent.prototype.createSvg = function (chart) {
        return this.ej2Instances.createSvg(chart);
    };
    BulletChartComponent.prototype.export = function (type, fileName, orientation, controls, width, height, isVertical) {
        return this.ej2Instances.export(type, fileName, orientation, controls, width, height, isVertical);
    };
    BulletChartComponent.prototype.print = function (id) {
        return this.ej2Instances.print(id);
    };
    BulletChartComponent.prototype.removeSvg = function () {
        return this.ej2Instances.removeSvg();
    };
    BulletChartComponent = __decorate$34([
        EJComponentDecorator({
            props: properties$6,
            model: {
                event: 'modelchanged'
            }
        })
    ], BulletChartComponent);
    return BulletChartComponent;
}(ComponentBase));
var BulletChartPlugin = {
    name: 'ejs-bulletchart',
    install: function (Vue$$1) {
        Vue$$1.component(BulletChartPlugin.name, BulletChartComponent);
        Vue$$1.component(BulletRangePlugin.name, BulletRangeDirective);
        Vue$$1.component(BulletRangeCollectionPlugin.name, BulletRangeCollectionDirective);
    }
};

export { TrendlinesDirective, TrendlineDirective, TrendlinesPlugin, TrendlinePlugin, SegmentsDirective, SegmentDirective, SegmentsPlugin, SegmentPlugin, SeriesCollectionDirective, SeriesDirective, SeriesCollectionPlugin, SeriesPlugin, StripLinesDirective, StripLineDirective, StripLinesPlugin, StripLinePlugin, CategoriesDirective, CategoryDirective, CategoriesPlugin, CategoryPlugin, MultiLevelLabelsDirective, MultiLevelLabelDirective, MultiLevelLabelsPlugin, MultiLevelLabelPlugin, AxesDirective, AxisDirective, AxesPlugin, AxisPlugin, RowsDirective, RowDirective, RowsPlugin, RowPlugin, ColumnsDirective, ColumnDirective, ColumnsPlugin, ColumnPlugin, AnnotationsDirective, AnnotationDirective, AnnotationsPlugin, AnnotationPlugin, SelectedDataIndexesDirective, SelectedDataIndexDirective, SelectedDataIndexesPlugin, SelectedDataIndexPlugin, IndicatorsDirective, IndicatorDirective, IndicatorsPlugin, IndicatorPlugin, ChartComponent, ChartPlugin, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, AccumulationSeriesCollectionPlugin, AccumulationSeriesPlugin, AccumulationAnnotationsDirective, AccumulationAnnotationDirective, AccumulationAnnotationsPlugin, AccumulationAnnotationPlugin, AccumulationChartComponent, AccumulationChartPlugin, RangenavigatorSeriesCollectionDirective, RangenavigatorSeriesDirective, RangenavigatorSeriesCollectionPlugin, RangenavigatorSeriesPlugin, RangeNavigatorComponent, RangeNavigatorPlugin, RangeBandSettingsDirective, RangeBandSettingDirective, RangeBandSettingsPlugin, RangeBandSettingPlugin, SparklineComponent, SparklinePlugin, SmithchartSeriesCollectionDirective, SmithchartSeriesDirective, SmithchartSeriesCollectionPlugin, SmithchartSeriesPlugin, SmithchartComponent, SmithchartPlugin, StockChartTrendlinesDirective, StockChartTrendlineDirective, StockChartTrendlinesPlugin, StockChartTrendlinePlugin, StockChartSeriesCollectionDirective, StockChartSeriesDirective, StockChartSeriesCollectionPlugin, StockChartSeriesPlugin, StockChartStripLinesDirective, StockChartStripLineDirective, StockChartStripLinesPlugin, StockChartStripLinePlugin, StockChartAxesDirective, StockChartAxisDirective, StockChartAxesPlugin, StockChartAxisPlugin, StockChartRowsDirective, StockChartRowDirective, StockChartRowsPlugin, StockChartRowPlugin, StockChartAnnotationsDirective, StockChartAnnotationDirective, StockChartAnnotationsPlugin, StockChartAnnotationPlugin, StockChartSelectedDataIndexesDirective, StockChartSelectedDataIndexDirective, StockChartSelectedDataIndexesPlugin, StockChartSelectedDataIndexPlugin, StockChartPeriodsDirective, StockChartPeriodDirective, StockChartPeriodsPlugin, StockChartPeriodPlugin, StockEventsDirective, StockEventDirective, StockEventsPlugin, StockEventPlugin, StockChartIndicatorsDirective, StockChartIndicatorDirective, StockChartIndicatorsPlugin, StockChartIndicatorPlugin, StockChartComponent, StockChartPlugin, BulletRangeCollectionDirective, BulletRangeDirective, BulletRangeCollectionPlugin, BulletRangePlugin, BulletChartComponent, BulletChartPlugin };
export * from '@syncfusion/ej2-charts';
//# sourceMappingURL=ej2-vue-charts.es5.js.map
