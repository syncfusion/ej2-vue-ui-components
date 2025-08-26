# Vue Word Processor Component

The [Vue Word Processor](https://www.syncfusion.com/vue-ui-components/vue-word-processor?utm_source=npm&utm_medium=listing&utm_campaign=vue-word-processor-npm) component is a feature rich UI component with document editing capabilities like Microsoft Word. Also known as the document editor, it is used to create, edit, view, and print Word documents. It provides all the common Word processing features including editing text, formatting content, resizing images and tables, finding and replacing text, bookmarks, tables of contents, track changes, commenting, restrict editing, printing, importing and exporting Word documents.

An example [Word Processor server-side Web API projects for ASP.NET MVC, ASP.NET Core, and Java is available in GitHub](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices?utm_source=npm&utm_medium=listing&utm_campaign=vue-word-processor-npm) which contains all the mandatory Web APIs for opening Word documents, paste with formatting, restrict editing, spell-checking, and saving documents other than SFDT/DOCX format. Apart from these operations, all the user interactions and editing operations run purely in the client-side provides much faster editing experience to the users.

Syncfusion provides a predefined [Word Processor server docker image](https://hub.docker.com/r/syncfusion/word-processor-server?utm_source=npm&utm_medium=listing&utm_campaign=vue-word-processor-npm) targeting ASP.NET Core 2.1 framework. You can directly pull this docker image and deploy it in server on the go. You can also create own docker image by customizing the existing [docker project from GitHub](https://github.com/SyncfusionExamples/Word-Processor-Server-Docker?utm_source=npm&utm_medium=listing&utm_campaign=vue-word-processor-npm).

<p align="center">
  <a href="https://ej2.syncfusion.com/vue/documentation/document-editor/getting-started/?utm_source=npm&utm_medium=listing&utm_campaign=vue-word-processor-npm">Getting Started</a> . 
  <a href="https://ej2.syncfusion.com/vue/demos/?utm_source=npm&utm_medium=listing&utm_campaign=vue-word-processor-npm#/bootstrap5/document-editor/default.html">Online demos</a> . 
  <a href="https://www.syncfusion.com/vue-ui-components/vue-word-processor?utm_source=npm&utm_medium=listing&utm_campaign=vue-word-processor-npm">Learn more</a>
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/SyncfusionExamples/nuget-img/master/vue/vue-word-processor.png" alt="Vue Word Processor Component">
</p>

<p align="center">
Trusted by the world's leading companies
  <a href="https://www.syncfusion.com">
    <img src="https://raw.githubusercontent.com/SyncfusionExamples/nuget-img/master/syncfusion/syncfusion-trusted-companies.webp" alt="Bootstrap logo">
  </a>
</p>

## Setup

### Create an Vue Application

You can use [`Vue CLI`](https://github.com/vuejs/vue-cli) to setup your Vue 2 applications.To install Vue CLI use the following commands.

```bash
npm install -g @vue/cli
vue create quickstart
cd quickstart
npm run serve
```
Initiating a new project prompts us to choose the type of project to be used for the current application. Select the option `Default ([Vue 2] babel, eslint)` from the menu.

### Adding Syncfusion Word Processor package

All Syncfusion Vue packages are published in [npmjs.com](https://www.npmjs.com/~syncfusionorg) registry. To install Vue Document editor package, use the following command.

```bash
npm install @syncfusion/ej2-vue-documenteditor --save
```

### Registering Word Processor component

You can register the Word Processor (Document editor) component in your application by using the **Vue.use()**. Refer to the code example given below.

```typescript
import { DocumentEditorPlugin } from '@syncfusion/ej2-vue-documenteditor';

Vue.use(DocumentEditorPlugin);
```

> Registering **DocumentEditorContainerPlugin** in vue, will register the Document editor component along with its required child directives globally.

### Adding CSS references for Word Processor

Add CSS references needed for Document editor in **style** section of the **App.vue** file from **../node_modules/@syncfusion** package folder.

```html
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import "../node_modules/@syncfusion/ej2-vue-documenteditor/styles/material.css";
</style>
```

## Add Word Processor component

Add the Vue Document editor by using **ejs-documenteditorcontainer** selector in **template** section of the **App.vue** file.

```html
<template>
    <div id="app">
        <ejs-documenteditorcontainer height="590px" :serviceUrl='serviceUrl' :enableToolbar='true'> </ejs-documenteditorcontainer>
    </div>
</template>

<script>
  import Vue from 'vue';
  import { DocumentEditorContainerPlugin, DocumentEditorContainerComponent,Toolbar } from '@syncfusion/ej2-vue-documenteditor';

  Vue.use(DocumentEditorContainerPlugin);
  export default {
      data(){
          return { serviceUrl:'https://ej2services.syncfusion.com/production/web-services/api/documenteditor/' }
      },
      provide: {
          //Inject require modules.
          DocumentEditorContainer: [Toolbar]
      }
  }
</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import "../node_modules/@syncfusion/ej2-vue-documenteditor/styles/material.css";
</style>
```

> The web API ('https://ej2services.syncfusion.com/production/web-services/api/documenteditor/') is created specifically for our online demos. You should host web API on your side, refer the [web service documentation](https://ej2.syncfusion.com/vue/documentation/document-editor/web-services/?utm_source=npm&utm_medium=listing&utm_campaign=vue-word-processor-npm) for more information.
> Refer the [Getting Started with Vue3](https://ej2.syncfusion.com/vue/documentation/document-editor/getting-started-vue-3/?utm_source=npm&utm_medium=listing&utm_campaign=vue-word-processor-npm) for using Syncfusion Vue components in Vue 3 applications.

## Supported frameworks

The Vue Word Processor (Document Editor) component is also offered in the following list of frameworks.

| [<img src="https://ej2.syncfusion.com/github/images/js.svg" height="50" />](https://www.syncfusion.com/javascript-ui-controls?utm_medium=listing&utm_source=github)<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[JavaScript](https://www.syncfusion.com/javascript-ui-controls?utm_medium=listing&utm_source=github)&nbsp;&nbsp;&nbsp;&nbsp; | [<img src="https://ej2.syncfusion.com/github/images/angular-new.svg"  height="50" />](https://www.syncfusion.com/angular-components/?utm_medium=listing&utm_source=github)<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Angular](https://www.syncfusion.com/angular-components/?utm_medium=listing&utm_source=github)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | [<img src="https://ej2.syncfusion.com/github/images/react.svg" height="50" />](https://www.syncfusion.com/react-ui-components?utm_medium=listing&utm_source=github)<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[React](https://www.syncfusion.com/react-ui-components?utm_medium=listing&utm_source=github)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | [<img src="https://ej2.syncfusion.com/github/images/netcore.svg" height="50" />](https://www.syncfusion.com/aspnet-core-ui-controls?utm_medium=listing&utm_source=github)<br/>&nbsp;&nbsp;[ASP.NET&nbsp;Core](https://www.syncfusion.com/aspnet-core-ui-controls?utm_medium=listing&utm_source=github)&nbsp;&nbsp; | [<img src="https://ej2.syncfusion.com/github/images/netmvc.svg" height="50" />](https://www.syncfusion.com/aspnet-mvc-ui-controls?utm_medium=listing&utm_source=github)<br/>&nbsp;&nbsp;[ASP.NET&nbsp;MVC](https://www.syncfusion.com/aspnet-mvc-ui-controls?utm_medium=listing&utm_source=github)&nbsp;&nbsp; | 
| :-----: | :-----: | :-----: | :-----: | :-----: |

## Key features

* [Document Authoring](https://ej2.syncfusion.com/vue/demos/?utm_source=npm&utm_medium=listing&utm_campaign=vue-word-processor-npm#/bootstrap5/document-editor/default.html) -  Allows to create a document with supported elements and formatting options.
  * Supported elements - Supports document elements like text, inline image, table, hyperlink, fields, bookmark, table of contents, footnote and endnote, section, header, and footer.
  * Styles - Supports character and paragraph styles.
  * Editing - Supports all the common editing and formatting operations.
  * History - Supports options to perform undo redo operations.
  * Find and replace - Provides support to find and replace text within the document.
  * [Track changes](https://ej2.syncfusion.com/vue/demos/?utm_source=npm&utm_medium=listing&utm_campaign=vue-word-processor-npm#/bootstrap5/document-editor/track-changes.html) - Suppports tracking the content insertion and deletion.
  * [Commenting](https://ej2.syncfusion.com/vue/demos/?utm_source=npm&utm_medium=listing&utm_campaign=vue-word-processor-npm#/bootstrap5/document-editor/comments.html) - Supports adding a comment, replying to an existing comment or mark as resolved and more.
  * [Form filling](https://ej2.syncfusion.com/vue/demos/?utm_source=npm&utm_medium=listing&utm_campaign=vue-word-processor-npm#/bootstrap5/document-editor/form-fields.html) - Supports designing fillable forms in Word document and fill the forms.
  * [Restrict editng](https://ej2.syncfusion.com/vue/demos/?utm_source=npm&utm_medium=listing&utm_campaign=vue-word-processor-npm#/bootstrap5/document-editor/document-protection.html) - Supports restricting edit permission for a region in Word document and control what type of changes can be made to the document.
* Export - Provides the options to export the documents in the client-side as `Syncfusion Document Text (*.sfdt)` and `Word document (*.docx)`. With server-side library, exporting as other formats can be achieved.
* Import - Provides the options to import the native `Syncfusion Document Text (*.sfdt)` format documents in the client-side. With server-side library, importing other formats can be achieved.
* Print - Provides the options to print the documents.
* Clipboard - Provides support to cut, copy, and paste rich text contents within the component. Also allows pasting simple text from other applications. Paste rich text from other applications using server-side library.
* User interface - Provides intuitive user friendly interface to perform various operations.
  * Context menu - Provides context menu.
  * Dialog - Provides dialog for inserting elements such as hyperlink, table and formatting such as font, paragraph, list, style, table.
  * Options pane - Provides options pane to perform find and replace operations.

## Support

Product support is available through the following mediums.

* [Support ticket](https://support.syncfusion.com/support/tickets/create) - Guaranteed Response in 24 hours | Unlimited tickets | Holiday support
* [Community forum](https://www.syncfusion.com/forums/vue?utm_source=npm&utm_medium=listing&utm_campaign=vue-word-processor-npm)
* [GitHub issues](https://github.com/syncfusion/ej2-vue-ui-components/issues/new)
* [Request feature or report bug](https://www.syncfusion.com/feedback/vue?utm_source=npm&utm_medium=listing&utm_campaign=vue-word-processor-npm)
* Live chat

## Changelog

Check the changelog [here](https://github.com/syncfusion/ej2-vue-ui-components/blob/master/components/documenteditor/CHANGELOG.md?utm_source=npm&utm_medium=listing&utm_campaign=vue-word-processor-npm). Get minor improvements and bug fixes every week to stay up to date with frequent updates.

## License and copyright

> This is a commercial product and requires a paid license for possession or use. Syncfusion<sup>®</sup> licensed software, including this component, is subject to the terms and conditions of Syncfusion<sup>®</sup> [EULA](https://www.syncfusion.com/eula/es/). To acquire a license for 80+ [Vue UI components](https://www.syncfusion.com/vue-components), you can [purchase](https://www.syncfusion.com/sales/products) or [start a free 30-day trial](https://www.syncfusion.com/account/manage-trials/start-trials).

> A free community [license](https://www.syncfusion.com/products/communitylicense) is also available for companies and individuals whose organizations have less than $1 million USD in annual gross revenue and five or fewer developers.

See [LICENSE FILE](https://github.com/syncfusion/ej2-vue-ui-components/blob/master/license?utm_source=npm&utm_medium=listing&utm_campaign=vue-word-processor-npm) for more info.

&copy; Copyright 2022 Syncfusion<sup>®</sup> Inc. All Rights Reserved. The Syncfusion<sup>®</sup> Essential Studio<sup>®</sup> license and copyright applies to this distribution.