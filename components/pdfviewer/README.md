# Vue PDF Viewer Component

The [Vue PDF Viewer](https://www.syncfusion.com/Vue-ui-components/Vue-pdf-viewer?utm_source=npm&utm_medium=listing&utm_campaign=Vue-pdf-viewer-npm) component enables you to view, annotate, prepare and fill forms, and print PDF files from your web applications.

<p align="center">
    <a href="https://ej2.syncfusion.com/vue/documentation/pdfviewer/getting-started/?utm_source=npm&utm_medium=listing&utm_campaign=Vue-pdf-viewer-npm">Getting started</a> . 
    <a href="https://ej2.syncfusion.com/vue/demos/?utm_source=npm&utm_medium=listing&utm_campaign=Vue-pdf-viewer-npm#/bootstrap5/pdfviewer/default">Online demos</a> . 
    <a href="https://www.syncfusion.com/Vue-components/Vue-pdf-viewer?utm_source=npm&utm_medium=listing&utm_campaign=Vue-pdf-viewer-npm">Learn more</a>
</p>

<p align="center">
    <img src="https://raw.githubusercontent.com/SyncfusionExamples/nuget-img/master/vue/vue-pdf-viewer.png" alt="Vue PDF Viewer Component"/>
</p>

<p align="center">
Trusted by the world's leading companies
  <a href="https://www.syncfusion.com">
    <img src="https://raw.githubusercontent.com/SyncfusionExamples/nuget-img/master/syncfusion/syncfusion-trusted-companies.webp" alt="Bootstrap logo">
  </a>
</p>

## Setup

### Create a Vue Application

You can use [`Vue CLI`](https://github.com/vuejs/vue-cli) to setup your Vue 2 applications.To install Vue CLI use the following commands.

```bash
npm install -g @vue/cli
npm install -g @vue/cli-init
vue init webpack-simple quickstart
cd quickstart
npm install
```

Initiating a new project prompts us to choose the type of project to be used for the current application. Select the option `Default ([Vue 2] babel, eslint)` from the menu.

### Adding Syncfusion&reg; PDF Viewer package

All Syncfusion&reg; Vue packages are published in [npmjs.com](https://www.npmjs.com/~syncfusionorg) registry. To install Vue PDF Viewer package, use the following command.

```bash
npm install @syncfusion/ej2-vue-pdfviewer --save
```

### Registering PDF Viewer component

You can register the PDF Viewer component in your application by using the **Vue.use()**. Refer to the code example given below.

```typescript
import { PdfViewerPlugin } from '@syncfusion/ej2-vue-pdfviewer';

Vue.use(PdfViewerPlugin);
```

> Registering **PdfViewerPlugin** in Vue, will register the PDF Viewer component along with its required child directives globally.

### Adding CSS references for PDF Viewer

Add CSS references needed for PDF Viewer in **style** section of the **App.vue** file from **../node_modules/@syncfusion** package folder.

```html
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-notifications/styles/material.css';  
@import "../node_modules/@syncfusion/ej2-vue-pdfviewer/styles/material.css";
</style>
```

## Add PDF Viewer component

Add the Vue PDF Viewer by using **ejs-pdfviewer** selector in **template** section of the **App.vue** file.

```html
<template>
  <div id="app">
<ejs-pdfviewer id="pdfViewer" :serviceUrl="serviceUrl" :documentPath="documentPath"> </ejs-pdfviewer>
  </div>
</template>

<script>
import Vue from 'vue';
import { PdfViewerPlugin, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner } from '@syncfusion/ej2-vue-pdfviewer';
Vue.use(PdfViewerPlugin);
export default {
  name: 'app',
  data () {
return {
  serviceUrl:"https://ej2services.syncfusion.com/production/web-services/api/pdfviewer",
  documentPath:"PDF_Succinctly.pdf"
};
  },
  provide: {
PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner]
  }
}
</script>
```

> Refer the [Getting Started with Vue3](https://ej2.syncfusion.com/vue/documentation/pdfviewer/getting-started-application/) for using Syncfusion&reg; Vue components in Vue 3 applications.

## Supported frameworks

PDF Viewer component is also offered in the following list of frameworks.

| [<img src="https://ej2.syncfusion.com/github/images/js.svg" height="50" />](https://www.syncfusion.com/javascript-ui-controls?utm_medium=listing&utm_source=github)<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[JavaScript](https://www.syncfusion.com/javascript-ui-controls?utm_medium=listing&utm_source=github)&nbsp;&nbsp;&nbsp;&nbsp; | [<img src="https://ej2.syncfusion.com/github/images/angular-new.svg"  height="50" />](https://www.syncfusion.com/angular-components/?utm_medium=listing&utm_source=github)<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Angular](https://www.syncfusion.com/angular-components/?utm_medium=listing&utm_source=github)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | [<img src="https://ej2.syncfusion.com/github/images/vue.svg" height="50" />](https://www.syncfusion.com/vue-ui-components?utm_medium=listing&utm_source=github)<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Vue](https://www.syncfusion.com/vue-ui-components?utm_medium=listing&utm_source=github)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | [<img src="https://ej2.syncfusion.com/github/images/netcore.svg" height="50" />](https://www.syncfusion.com/aspnet-core-ui-controls?utm_medium=listing&utm_source=github)<br/>&nbsp;&nbsp;[ASP.NET&nbsp;Core](https://www.syncfusion.com/aspnet-core-ui-controls?utm_medium=listing&utm_source=github)&nbsp;&nbsp; | [<img src="https://ej2.syncfusion.com/github/images/netmvc.svg" height="50" />](https://www.syncfusion.com/aspnet-mvc-ui-controls?utm_medium=listing&utm_source=github)<br/>&nbsp;&nbsp;[ASP.NET&nbsp;MVC](https://www.syncfusion.com/aspnet-mvc-ui-controls?utm_medium=listing&utm_source=github)&nbsp;&nbsp; | 
| :-----: | :-----: | :-----: | :-----: | :-----: |

## Key features

* [View PDF Document](https://ej2.syncfusion.com/vue/documentation/pdfviewer/getting-started/) - Open and display both the normal and the protected PDF files with AES and RC4 encryption.
* [Annotations](https://ej2.syncfusion.com/vue/documentation/pdfviewer/annotation/text-markup-annotation/) - Annotate with text markup, shapes, stamps, ink, and sticky notes.
* [Form Fields](https://ej2.syncfusion.com/vue/documentation/pdfviewer/form-designer/create-fillable-PDF-forms/create-programmatically/) - Form filling and form designing can be done.
* [Signature](https://ej2.syncfusion.com/angular/documentation/pdfviewer/handwritten-signature/) - Hand-written and digital signatures are allowed.
* [Toolbar](https://ej2.syncfusion.com/vue/documentation/pdfviewer/toolbar/) - Built-in-toolbar and custom toolbars to perform user interaction of PDF Viewer functionalities.
* [Navigation](https://ej2.syncfusion.com/vue/documentation/pdfviewer/navigation/) - Easy navigation with the help of bookmarks, thumbnails, hyperlinks, and table of contents.
* [Magnification](https://ej2.syncfusion.com/vue/documentation/pdfviewer/magnification/) - Fit to page, fit to width, and automatic (fits to the visible area).
* [Search](https://ej2.syncfusion.com/vue/documentation/pdfviewer/text-search/) - Search a text easily across the PDF document.	
* [Core Interactions](https://ej2.syncfusion.com/vue/documentation/pdfviewer/interaction-mode/) - Allows scrolling, zooming, panning, selection, and page navigation.
* [Print](https://ej2.syncfusion.com/vue/documentation/pdfviewer/interaction-mode/) - Print the entire document or a specific page directly from the browser.
* [Globalization](https://ej2.syncfusion.com/vue/documentation/pdfviewer/globalization/) - Provides inherent support to localize the UI.

## Support

Product support is available through the following mediums.

* [Support ticket](https://support.syncfusion.com/support/tickets/create) - Guaranteed Response in 24 hours | Unlimited tickets | Holiday support
* [Community forum](https://www.syncfusion.com/forums/Vue-js2?utm_source=npm&utm_medium=listing&utm_campaign=Vue-pdf-viewer-npm)
* [GitHub issues](https://github.com/syncfusion/ej2-Vue-ui-components/issues/new)
* [Request feature or report bug](https://www.syncfusion.com/feedback/Vue?utm_source=npm&utm_medium=listing&utm_campaign=Vue-pdf-viewer-npm)
* Live chat

## Changelog

Check the changelog [here](https://github.com/syncfusion/ej2-vue-ui-components/blob/master/components/pdfviewer/CHANGELOG.md?utm_source=npm&utm_medium=listing&utm_campaign=Vue-pdf-viewer-npm). Get minor improvements and bug fixes every week to stay up to date with frequent updates.

## License and copyright

> This is a commercial product and requires a paid license for possession or use. The Syncfusion&reg; licensed software, including this component, is subject to the terms and conditions of the Syncfusion&reg; [EULA](https://www.syncfusion.com/eula/es/). To acquire a license for 80+ [Vue UI components](https://www.syncfusion.com/Vue-components), you can [purchase](https://www.syncfusion.com/sales/products) or [start a free 30-day trial](https://www.syncfusion.com/account/manage-trials/start-trials).

> A free community [license](https://www.syncfusion.com/products/communitylicense) is also available for companies and individuals whose organizations have less than $1 million USD in annual gross revenue and five or fewer developers.

See [LICENSE FILE](https://github.com/syncfusion/ej2/blob/master/license?utm_source=npm&utm_medium=listing&utm_campaign=Vue-pdf-viewer-npm) for more info.
