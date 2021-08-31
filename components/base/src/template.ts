import Vue from "vue";
import {
  setTemplateEngine,
  getTemplateEngine,
  getUniqueID,
  createElement,
  detach,
  extend,
  getValue,
} from "@syncfusion/ej2-base";

import { aVue, allVue, gh } from "./component-base";

// tslint:disable:no-any
let stringCompiler: (
  template: string,
  helper?: object
) => (data: Object | JSON) => string = getTemplateEngine(); 

export function compile(
  templateElement: any,
  helper?: Object
): (data: Object | JSON, component?: any, propName?: any) => Object {
  let that = this;
  if (typeof templateElement === "string") {
    return stringCompiler(templateElement, helper);
  } else {
    return (data: any, context: any,propName: any): any => {
      let pid: string = getUniqueID("templateParentDiv");
      let id: string = getUniqueID("templateDiv");
      let ele: HTMLElement = createElement("div", {
        id: pid,
        innerHTML: '<div id="' + id + '"></div>',
      });
      document.body.appendChild(ele);

      let tempObj: any = templateElement.call(that, {});
      let returnEle: any;
      if (context) {
        if (gh) {
          let object: any = tempObj;
          let propsData: any = getValue("template.propsData", tempObj);
          let dataObj: any = {
            data: { data: extend(tempObj.data || {}, data) },
            parent: context.vueInstance,
          };
          if (!object.template) {
            object.template = object[Object.keys(object)[0]]; 
          }
          let templateCompRef: any;
          if(object.template.extends) {
            templateCompRef = object.template.extends._context.components.template;
          } else {
              templateCompRef = object.template._context.components[templateElement.name];
          }
          let tempRef: any;
          if (propsData) {
              tempRef = (<any>Object).assign(templateCompRef.data(), propsData);
          } else {
              tempRef = (<any>Object).assign(templateCompRef.data(), dataObj.data)
          }
          templateCompRef.data = function () { return tempRef; };
          allVue
            .createApp(templateCompRef)
            .mount("#" + id);
          returnEle = ele.childNodes;
          detach(ele);
        } else {
          let templateFunction = tempObj.template;
          let propsData: any = getValue("template.propsData", tempObj);
          let dataObj: any = {
            data: { data: extend(tempObj.data || {}, data) },
            parent: context.vueInstance,
          };
          if (propsData) {
            templateFunction = tempObj.template.extends;
            dataObj.propsData = propsData;
          }
          if (typeof templateFunction !== "function") {
            templateFunction = Vue.extend(templateFunction);
          }
          let templateVue: any = new templateFunction(dataObj);
          // let templateVue = new Vue(tempObj.template);
          // templateVue.$data.data = extend(tempObj.data, data);
          templateVue.$mount("#" + id);
          returnEle = ele.childNodes;
        if (context.vueInstance) {
                let templateInstance: any = context.vueInstance.templateCollection;
                if (!templateInstance) {
                    context.vueInstance.templateCollection = {};
                    templateInstance = context.vueInstance.templateCollection;
                }
                if (propName) {
                    if (!templateInstance[propName]) {
                        templateInstance[propName] = [];
                    }
                    templateInstance[propName].push(returnEle[0]);
                }
            }
          detach(ele);
        }
      }
      return returnEle || [];
    };
  }
}

setTemplateEngine({ compile: compile as any });
