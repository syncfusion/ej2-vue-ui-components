# Vue PDF Viewer Component

The [Vue PDF Viewer](https://www.syncfusion.com/pdf-viewer-sdk/vue-pdf-viewer?utm_source=npm&utm_medium=listing&utm_campaign=vue-pdf-viewer-npm) component enables you to view, annotate, prepare and fill forms, and print PDF files from your web applications.

<p align="center">
    <a href="https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/getting-started?utm_source=npm&utm_medium=listing&utm_campaign=vue-pdf-viewer-npm">Getting started</a> . 
    <a href="https://document.syncfusion.com/demos/pdf-viewer/vue/index.html#/tailwind3/pdfviewer/default.html?utm_source=npm&utm_medium=listing&utm_campaign=vue-pdf-viewer-npm">Online demos</a> . 
    <a href="https://www.syncfusion.com/pdf-viewer-sdk/vue-pdf-viewer?utm_source=npm&utm_medium=listing&utm_campaign=vue-pdf-viewer-npm">Learn more</a>
</p>

<p align="center">
    <img src="https://raw.githubusercontent.com/SyncfusionExamples/nuget-img/master/vue/vue-pdf-viewer.png" alt="Vue PDF Viewer Component"/>
</p>

<p align="center">
Trusted by the world's leading companies
  <a href="https://www.syncfusion.com">
    <img src="https://ej2.syncfusion.com/home/images/trusted_companies.png" alt="Bootstrap logo">
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

> Refer the [Getting Started with Vue3](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/getting-started-application) for using Syncfusion&reg; Vue components in Vue 3 applications.

## Supported frameworks

PDF Viewer component is also offered in the following list of frameworks.

| [<img src="https://ej2.syncfusion.com/github/images/js.svg" height="50" />](https://www.syncfusion.com/pdf-viewer-sdk/javascript-pdf-viewer?utm_source=npm&utm_medium=listing&utm_campaign=vue-pdf-viewer-npm)<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[JavaScript](https://www.syncfusion.com/pdf-viewer-sdk/javascript-pdf-viewer?utm_source=npm&utm_medium=listing&utm_campaign=vue-pdf-viewer-npm)&nbsp;&nbsp;&nbsp;&nbsp; | [<img src="https://ej2.syncfusion.com/github/images/angular-new.svg"  height="50" />](https://www.syncfusion.com/pdf-viewer-sdk/angular-pdf-viewer/?utm_source=npm&utm_medium=listing&utm_campaign=vue-pdf-viewer-npm)<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Angular](https://www.syncfusion.com/pdf-viewer-sdk/angular-pdf-viewer/?utm_source=npm&utm_medium=listing&utm_campaign=vue-pdf-viewer-npm)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | [<img src="https://ej2.syncfusion.com/github/images/react.svg"  height="50" />](https://www.syncfusion.com/pdf-viewer-sdk/react-pdf-viewer?utm_source=npm&utm_medium=listing&utm_campaign=vue-pdf-viewer-npm)<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[React](https://www.syncfusion.com/pdf-viewer-sdk/react-pdf-viewer?utm_source=npm&utm_medium=listing&utm_campaign=vue-pdf-viewer-npm)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | [<img src="https://ej2.syncfusion.com/github/images/netcore.svg" height="50" />](https://www.syncfusion.com/pdf-viewer-sdk/asp-net-core-pdf-viewer?utm_source=npm&utm_medium=listing&utm_campaign=vue-pdf-viewer-npm)<br/>&nbsp;&nbsp;[ASP.NET&nbsp;Core](https://www.syncfusion.com/pdf-viewer-sdk/asp-net-core-pdf-viewer?utm_source=npm&utm_medium=listing&utm_campaign=vue-pdf-viewer-npm)&nbsp;&nbsp; | [<img src="https://ej2.syncfusion.com/github/images/netmvc.svg" height="50" />](https://www.syncfusion.com/pdf-viewer-sdk/asp-net-mvc-pdf-viewer?utm_source=npm&utm_medium=listing&utm_campaign=vue-pdf-viewer-npm)<br/>&nbsp;&nbsp;[ASP.NET&nbsp;MVC](https://www.syncfusion.com/pdf-viewer-sdk/asp-net-mvc-pdf-viewer?utm_source=npm&utm_medium=listing&utm_campaign=vue-pdf-viewer-npm)&nbsp;&nbsp; | 
| :-----: | :-----: | :-----: | :-----: | :-----: |

## Key features

* [View PDF Document](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/getting-started?utm_source=npm&utm_medium=listing&utm_campaign=vue-pdf-viewer-npm) - Open and display both the normal and the protected PDF files with AES and RC4 encryption.
* [Annotations](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/annotation/text-markup-annotation?utm_source=npm&utm_medium=listing&utm_campaign=vue-pdf-viewer-npm) - Annotate with text markup, shapes, stamps, ink, and sticky notes.
* [Form Fields](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/forms/form-filling?utm_source=npm&utm_medium=listing&utm_campaign=vue-pdf-viewer-npm) - Form filling and form designing can be done.
* Signature - Hand-written and digital signatures are allowed.
* [Toolbar](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/toolbar?utm_source=npm&utm_medium=listing&utm_campaign=vue-pdf-viewer-npm) - Built-in-toolbar and custom toolbars to perform user interaction of PDF Viewer functionalities.
* [Navigation](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/navigation?utm_source=npm&utm_medium=listing&utm_campaign=vue-pdf-viewer-npm) - Easy navigation with the help of bookmarks, thumbnails, hyperlinks, and table of contents.
* [Magnification](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/magnification?utm_source=npm&utm_medium=listing&utm_campaign=vue-pdf-viewer-npm) - Fit to page, fit to width, and automatic (fits to the visible area).
* [Search](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/text-search/overview?utm_source=npm&utm_medium=listing&utm_campaign=vue-pdf-viewer-npm) - Search a text easily across the PDF document.	
* [Core Interactions](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/interaction-mode?utm_source=npm&utm_medium=listing&utm_campaign=vue-pdf-viewer-npm) - Allows scrolling, zooming, panning, selection, and page navigation.
* [Print](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/print/overview?utm_source=npm&utm_medium=listing&utm_campaign=vue-pdf-viewer-npm) - Print the entire document or a specific page directly from the browser.
* [Globalization](https://help.syncfusion.com/document-processing/pdf/pdf-viewer/vue/localization/default-language?utm_source=npm&utm_medium=listing&utm_campaign=vue-pdf-viewer-npm) - Provides inherent support to localize the UI.

## Resources

* [Theme Studio](https://ej2.syncfusion.com/themestudio/?utm_source=npm&utm_medium=listing&utm_campaign=vue-pdf-viewer-npm)
* [What's New](https://www.syncfusion.com/products/whatsnew/pdf-viewer-sdk?utm_source=npm&utm_medium=listing&utm_campaign=vue-pdf-viewer-npm)
* [Road Map](https://www.syncfusion.com/products/roadmap/pdf-viewer-sdk?utm_source=npm&utm_medium=listing&utm_campaign=vue-pdf-viewer-npm)
* [E-Books](https://www.syncfusion.com/succinctly-free-ebooks?searchkey=vue&type=all?utm_source=npm&utm_medium=listing&utm_campaign=vue-pdf-viewer-npm)

## Support

Product support is available through the following mediums.

* [Support ticket](https://support.syncfusion.com/support/tickets/create?utm_source=npm&utm_medium=listing&utm_campaign=vue-pdf-viewer-npm) - Guaranteed Response in 24 hours | Unlimited tickets | Holiday support
* [Community forum](https://www.syncfusion.com/forums/pdf-viewer-sdk?utm_source=npm&utm_medium=listing&utm_campaign=vue-pdf-viewer-npm)
* [GitHub issues](https://github.com/syncfusion/ej2-Vue-ui-components/issues/new?utm_source=npm&utm_medium=listing&utm_campaign=vue-pdf-viewer-npm)
* [Request feature or report bug](https://www.syncfusion.com/feedback/pdf-viewer-sdk?utm_source=npm&utm_medium=listing&utm_campaign=vue-pdf-viewer-npm)
* Live chat

## Changelog

Check the changelog [here](https://github.com/syncfusion/ej2-vue-ui-components/blob/master/components/pdfviewer/CHANGELOG.md?utm_source=npm&utm_medium=listing&utm_campaign=vue-pdf-viewer-npm). Get minor improvements and bug fixes every week to stay up to date with frequent updates.

## License and copyright

> This is a commercial product and requires a paid license for possession or use. Syncfusion<sup>®</sup> licensed software, including this component, is subject to the terms and conditions of Syncfusion<sup>®</sup> [EULA](https://www.syncfusion.com/eula/es/?utm_source=npm&utm_medium=listing&utm_campaign=vue-pdf-viewer-npm). To acquire a license for 140+ [Vue UI components](https://www.syncfusion.com/vue-components?utm_source=npm&utm_medium=listing&utm_campaign=vue-pdf-viewer-npm), you can [purchase](https://www.syncfusion.com/sales/products) or [start a free 30-day trial](https://www.syncfusion.com/downloads/pdf-viewer-sdk?tag=es-ft-vue-pdf-viewer-banner).

> A free community [license](https://www.syncfusion.com/products/communitylicense?utm_source=npm&utm_medium=listing&utm_campaign=vue-pdf-viewer-npm) is also available for companies and individuals whose organizations have less than $1 million USD in annual gross revenue and five or fewer developers.

&copy; Copyright 2025 Syncfusion<sup>®</sup> Inc. All Rights Reserved. The Syncfusion<sup>®</sup> Essential Studio<sup>®</sup> license and copyright applies to this distribution.
