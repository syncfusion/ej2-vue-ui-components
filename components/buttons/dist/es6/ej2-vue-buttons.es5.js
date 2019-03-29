import { Button, CheckBox, ChipList, RadioButton, Switch } from '@syncfusion/ej2-buttons';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';
import { isUndefined } from '@syncfusion/ej2-base';
import Vue from 'vue';

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
var properties = ['content', 'cssClass', 'disabled', 'enablePersistence', 'enableRtl', 'iconCss', 'iconPosition', 'isPrimary', 'isToggle', 'locale', 'created'];
var modelProps = [];
/**
 * Represents the Essential JS 2 VueJS Button Component
 * ```html
 * <ejs-button>Button</ejs-button>
 * ```
 */
var ButtonComponent = /** @__PURE__ @class */ (function (_super) {
    __extends(ButtonComponent, _super);
    function ButtonComponent() {
        var _this = _super.call(this) || this;
        _this.propKeys = properties;
        _this.models = modelProps;
        _this.hasChildDirective = false;
        _this.hasInjectedModules = false;
        _this.tagMapper = {};
        _this.tagNameMapper = {};
        _this.ej2Instances = new Button({});
        _this.bindProperties();
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        return _this;
    }
    ButtonComponent.prototype.setProperties = function (prop, muteOnChange) {
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
    ButtonComponent.prototype.render = function (createElement) {
        return createElement('button', this.$slots.default);
    };
    ButtonComponent = __decorate([
        EJComponentDecorator({
            props: properties
        })
    ], ButtonComponent);
    return ButtonComponent;
}(ComponentBase));
var ButtonPlugin = {
    name: 'ejs-button',
    install: function (Vue$$1) {
        Vue$$1.component(ButtonPlugin.name, ButtonComponent);
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
var properties$1 = ['checked', 'cssClass', 'disabled', 'enablePersistence', 'enableRtl', 'indeterminate', 'label', 'labelPosition', 'locale', 'name', 'value', 'change', 'created'];
var modelProps$1 = ['checked', 'indeterminate'];
/**
 * Represents the Essential JS 2 VueJS CheckBox Component
 * ```html
 * <ejs-checkbox label='Default'></ejs-checkbox>
 * ```
 */
var CheckBoxComponent = /** @__PURE__ @class */ (function (_super) {
    __extends$1(CheckBoxComponent, _super);
    function CheckBoxComponent() {
        var _this = _super.call(this) || this;
        _this.propKeys = properties$1;
        _this.models = modelProps$1;
        _this.hasChildDirective = false;
        _this.hasInjectedModules = false;
        _this.tagMapper = {};
        _this.tagNameMapper = {};
        _this.ej2Instances = new CheckBox({});
        _this.ej2Instances._trigger = _this.ej2Instances.trigger;
        _this.ej2Instances.trigger = _this.trigger;
        _this.bindProperties();
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        return _this;
    }
    CheckBoxComponent.prototype.setProperties = function (prop, muteOnChange) {
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
    CheckBoxComponent.prototype.trigger = function (eventName, eventProp) {
        if ((eventName === 'change' || eventName === 'input') && this.models && (this.models.length !== 0)) {
            var key = this.models.toString().match(/checked|value/) || [];
            var propKey = key[0];
            if (eventProp && key && !isUndefined(eventProp[propKey])) {
                this.$emit('update:' + propKey, eventProp[propKey]);
                this.$emit('modelchanged', eventProp[propKey]);
            }
        }
        if (this.ej2Instances && this.ej2Instances._trigger) {
            this.ej2Instances._trigger(eventName, eventProp);
        }
    };
    CheckBoxComponent.prototype.render = function (createElement) {
        return createElement('input', this.$slots.default);
    };
    CheckBoxComponent = __decorate$1([
        EJComponentDecorator({
            props: properties$1,
            model: {
                event: 'modelchanged'
            }
        })
    ], CheckBoxComponent);
    return CheckBoxComponent;
}(ComponentBase));
var CheckBoxPlugin = {
    name: 'ejs-checkbox',
    install: function (Vue$$1) {
        Vue$$1.component(CheckBoxPlugin.name, CheckBoxComponent);
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
var properties$2 = ['checked', 'cssClass', 'disabled', 'enablePersistence', 'enableRtl', 'label', 'labelPosition', 'locale', 'name', 'value', 'change', 'created'];
var modelProps$2 = ['checked'];
/**
 * Represents the Essential JS 2 VueJS RadioButton Component
 * ```html
 * <ejs-radiobutton label='Default'></ejs-radiobutton>
 * ```
 */
var RadioButtonComponent = /** @__PURE__ @class */ (function (_super) {
    __extends$2(RadioButtonComponent, _super);
    function RadioButtonComponent() {
        var _this = _super.call(this) || this;
        _this.propKeys = properties$2;
        _this.models = modelProps$2;
        _this.hasChildDirective = false;
        _this.hasInjectedModules = false;
        _this.tagMapper = {};
        _this.tagNameMapper = {};
        _this.ej2Instances = new RadioButton({});
        _this.ej2Instances._trigger = _this.ej2Instances.trigger;
        _this.ej2Instances.trigger = _this.trigger;
        _this.bindProperties();
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        return _this;
    }
    RadioButtonComponent.prototype.setProperties = function (prop, muteOnChange) {
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
    RadioButtonComponent.prototype.trigger = function (eventName, eventProp) {
        if ((eventName === 'change' || eventName === 'input') && this.models && (this.models.length !== 0)) {
            var key = this.models.toString().match(/checked|value/) || [];
            var propKey = key[0];
            if (eventProp && key && !isUndefined(eventProp[propKey])) {
                this.$emit('update:' + propKey, eventProp[propKey]);
                this.$emit('modelchanged', eventProp[propKey]);
            }
        }
        if (this.ej2Instances && this.ej2Instances._trigger) {
            this.ej2Instances._trigger(eventName, eventProp);
        }
    };
    RadioButtonComponent.prototype.render = function (createElement) {
        return createElement('input', this.$slots.default);
    };
    RadioButtonComponent = __decorate$2([
        EJComponentDecorator({
            props: properties$2,
            model: {
                event: 'modelchanged'
            }
        })
    ], RadioButtonComponent);
    return RadioButtonComponent;
}(ComponentBase));
var RadioButtonPlugin = {
    name: 'ejs-radiobutton',
    install: function (Vue$$1) {
        Vue$$1.component(RadioButtonPlugin.name, RadioButtonComponent);
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
var properties$3 = ['checked', 'cssClass', 'disabled', 'enablePersistence', 'enableRtl', 'locale', 'name', 'offLabel', 'onLabel', 'value', 'change', 'created'];
var modelProps$3 = ['checked'];
/**
 * Represents the Essential JS 2 VueJS Switch Component.
 * ```html
 * <ejs-switch></ejs-switch>
 * ```
 */
var SwitchComponent = /** @__PURE__ @class */ (function (_super) {
    __extends$3(SwitchComponent, _super);
    function SwitchComponent() {
        var _this = _super.call(this) || this;
        _this.propKeys = properties$3;
        _this.models = modelProps$3;
        _this.hasChildDirective = false;
        _this.hasInjectedModules = false;
        _this.tagMapper = {};
        _this.tagNameMapper = {};
        _this.ej2Instances = new Switch({});
        _this.ej2Instances._trigger = _this.ej2Instances.trigger;
        _this.ej2Instances.trigger = _this.trigger;
        _this.bindProperties();
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        return _this;
    }
    SwitchComponent.prototype.setProperties = function (prop, muteOnChange) {
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
    SwitchComponent.prototype.trigger = function (eventName, eventProp) {
        if ((eventName === 'change' || eventName === 'input') && this.models && (this.models.length !== 0)) {
            var key = this.models.toString().match(/checked|value/) || [];
            var propKey = key[0];
            if (eventProp && key && !isUndefined(eventProp[propKey])) {
                this.$emit('update:' + propKey, eventProp[propKey]);
                this.$emit('modelchanged', eventProp[propKey]);
            }
        }
        if (this.ej2Instances && this.ej2Instances._trigger) {
            this.ej2Instances._trigger(eventName, eventProp);
        }
    };
    SwitchComponent.prototype.render = function (createElement) {
        return createElement('input', this.$slots.default);
    };
    SwitchComponent.prototype.toggle = function () {
        return this.ej2Instances.toggle();
    };
    SwitchComponent = __decorate$3([
        EJComponentDecorator({
            props: properties$3,
            model: {
                event: 'modelchanged'
            }
        })
    ], SwitchComponent);
    return SwitchComponent;
}(ComponentBase));
var SwitchPlugin = {
    name: 'ejs-switch',
    install: function (Vue$$1) {
        Vue$$1.component(SwitchPlugin.name, SwitchComponent);
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
var ChipsDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$4(ChipsDirective, _super);
    function ChipsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChipsDirective.prototype.render = function () {
        return;
    };
    ChipsDirective = __decorate$4([
        EJComponentDecorator({})
    ], ChipsDirective);
    return ChipsDirective;
}(Vue));
var ChipsPlugin = {
    name: 'e-chips',
    install: function (Vue$$1) {
        Vue$$1.component(ChipsPlugin.name, ChipsDirective);
    }
};
/**
 * `e-chip` directive represent a chip of the Vue ChipList.
 * ```html
 * <ejs-chiplist >
 *   <e-chips>
 *    <e-chip text='chip1'></e-chip>
 *    <e-chip text='chip2'></e-chip>
 *   </e-chips>
 * </ejs-chiplist>
 * ```
 */
var ChipDirective = /** @__PURE__ @class */ (function (_super) {
    __extends$4(ChipDirective, _super);
    function ChipDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChipDirective.prototype.render = function () {
        return;
    };
    ChipDirective = __decorate$4([
        EJComponentDecorator({})
    ], ChipDirective);
    return ChipDirective;
}(Vue));
var ChipPlugin = {
    name: 'e-chip',
    install: function (Vue$$1) {
        Vue$$1.component(ChipPlugin.name, ChipDirective);
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
var properties$4 = ['avatarIconCss', 'avatarText', 'chips', 'cssClass', 'enableDelete', 'enablePersistence', 'enableRtl', 'enabled', 'leadingIconCss', 'locale', 'selectedChips', 'selection', 'text', 'trailingIconCss', 'click', 'created', 'delete'];
var modelProps$4 = [];
/**
 * Represents the Essential JS 2 VueJS ChipList Component.
 * ```html
 * <ejs-chiplist></ejs-chiplist>
 * ```
 */
var ChipListComponent = /** @__PURE__ @class */ (function (_super) {
    __extends$5(ChipListComponent, _super);
    function ChipListComponent() {
        var _this = _super.call(this) || this;
        _this.propKeys = properties$4;
        _this.models = modelProps$4;
        _this.hasChildDirective = true;
        _this.hasInjectedModules = false;
        _this.tagMapper = { "e-chips": "e-chip" };
        _this.tagNameMapper = {};
        _this.ej2Instances = new ChipList({});
        _this.bindProperties();
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        return _this;
    }
    ChipListComponent.prototype.setProperties = function (prop, muteOnChange) {
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
    ChipListComponent.prototype.render = function (createElement) {
        return createElement('div', this.$slots.default);
    };
    ChipListComponent.prototype.add = function (chipsData) {
        return this.ej2Instances.add(chipsData);
    };
    ChipListComponent.prototype.find = function (fields) {
        return this.ej2Instances.find(fields);
    };
    ChipListComponent.prototype.getSelectedChips = function () {
        return this.ej2Instances.getSelectedChips();
    };
    ChipListComponent.prototype.remove = function (fields) {
        return this.ej2Instances.remove(fields);
    };
    ChipListComponent.prototype.select = function (fields) {
        return this.ej2Instances.select(fields);
    };
    ChipListComponent = __decorate$5([
        EJComponentDecorator({
            props: properties$4
        })
    ], ChipListComponent);
    return ChipListComponent;
}(ComponentBase));
var ChipListPlugin = {
    name: 'ejs-chiplist',
    install: function (Vue$$1) {
        Vue$$1.component(ChipListPlugin.name, ChipListComponent);
        Vue$$1.component(ChipPlugin.name, ChipDirective);
        Vue$$1.component(ChipsPlugin.name, ChipsDirective);
    }
};

export { ButtonComponent, ButtonPlugin, CheckBoxComponent, CheckBoxPlugin, RadioButtonComponent, RadioButtonPlugin, SwitchComponent, SwitchPlugin, ChipsDirective, ChipDirective, ChipsPlugin, ChipPlugin, ChipListComponent, ChipListPlugin };
export * from '@syncfusion/ej2-buttons';
//# sourceMappingURL=ej2-vue-buttons.es5.js.map
