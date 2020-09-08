/**
 * Vue Component Base
 */
import Vue, { ComponentOptions, PluginObject } from 'vue';
import { Base, Component as EJ2Component, isNullOrUndefined } from '@syncfusion/ej2-base';
import { ComponentBase } from './component-base';
export let $internalHooks = [
  'data',
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeDestroy',
  'destroyed',
  'beforeUpdate',
  'updated',
  'activated',
  'deactivated',
  'render',
  'errorCaptured' // 2.5
];

export function EJComponentDecorator(options: any): any {
  return function (Component: any) {
    return EJcomponentFactory(Component, options);
  }
}

export function EJcomponentFactory(
  Component: any,
  options: any = {}
): any {
  options.name = options.name || (Component as any)._componentTag || (Component as any).name
  // prototype props.
  const proto = Component.prototype
  if (options.props) {
    for (let prop of options.props) {
      (options.props || (options.props = {}))[prop] = {

      };
      (options.watch || (options.watch = {}))[prop] = function (newVal: Object) { // watch it
        this.ej2Instances[prop] = newVal;
        if (this.dataBind) {
            this.dataBind();    
        }
      };
    }
  }
  Object.getOwnPropertyNames(proto).forEach(function (key) {
    // hooks
    if (key === 'constructor') {
      return;
    }
    if ($internalHooks.indexOf(key) > -1) {
      options[key] = proto[key]
      return
    }
    const descriptor = Object.getOwnPropertyDescriptor(proto, key)!
    if (typeof descriptor.value === 'function') {
      // methods
      (options.methods || (options.methods = {}))[key] = descriptor.value
    } else if (descriptor.get || descriptor.set) {
      // computed properties
      (options.computed || (options.computed = {}))[key] = {
        get: descriptor.get,
        set: descriptor.set
      }
    }
  });
  Object.getOwnPropertyNames(ComponentBase.prototype).forEach(function (key) {
    if ($internalHooks.indexOf(key) > -1) {
      options[key] = proto[key]
      return
    }
  });
  (options.mixins || (options.mixins = [])).push({
    data(this: Vue) {
      return collectDataFromConstructor(this, Component)
    }
  })
  //  decorate options
  const decorators = (Component as any).__decorators__
  if (decorators) {
    decorators.forEach(Function(options))
    delete (Component as any).__decorators__
  }

  // find super
  const superProto = Object.getPrototypeOf(Component.prototype)
  const Super = superProto instanceof Vue
    ? superProto.constructor as any
    : Vue
  const Extended = Super.extend(options)

  return Extended
}

function collectDataFromConstructor(vm: any, Component: any) {
  Component.prototype._init = function () {
      var _this = this;
      var keys = Object.getOwnPropertyNames(vm);
      if (vm.$options.props) {
          for (var key in vm.$options.props) {
              if (!vm.hasOwnProperty(key)) {
                  keys.push(key);
              }
          }
      }
      keys.forEach(function (key) {
          if (key.charAt(0) !== '_') {
              Object.defineProperty(_this, key, {
                  get: function () { return vm[key]; },
                  set: function (value) { return vm[key] = value; }
              });
          }
      });
  };
  var data = new Component();
  var plainData = {};
  Object.keys(data).forEach(function (key) {
      if (data[key] !== undefined) {
          plainData[key] = data[key];
      }
  });
  return plainData;
}
