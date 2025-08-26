# Vue Grid Component

The [Vue Grid](https://www.syncfusion.com/vue-ui-components/vue-grid?utm_source=npm&utm_medium=listing&utm_campaign=vue-grid-npm) component is a powerful and flexible tool for displaying and manipulating tabular data. Vue Grid component is its ability to bind to a wide range of data sources, including arrays of JSON objects, `OData web services`, and the Syncfusion DataManager. This makes it easy to integrate the grid into your application and display data from a variety of sources. In addition to its data binding capabilities, the Vue Grid also offers support for features such as sorting, filtering, paging, grouping, editing, frozen rows and columns, virtualization, and more. These features allow you to easily manipulate and present large datasets in an efficient and user-friendly way.

<p align="center">
  <a href="https://ej2.syncfusion.com/vue/documentation/grid/getting-started/?utm_source=npm&utm_medium=listing&utm_campaign=vue-grid-npm">Getting Started</a> . 
  <a href="https://ej2.syncfusion.com/vue/demos/?utm_source=npm&utm_medium=listing&utm_campaign=vue-grid-npm#/bootstrap5/grid/overview">Online demos</a> . 
  <a href="https://www.syncfusion.com/vue-components/vue-grid?utm_source=npm&utm_medium=listing&utm_campaign=vue-grid-npm">Learn more</a>
</p>

![Vue Grid Component](https://raw.githubusercontent.com/SyncfusionExamples/nuget-img/master/vue/vue-datagrid.png)

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

### Adding Syncfusion Grid package

All Syncfusion Vue packages are published in [npmjs.com](https://www.npmjs.com/~syncfusionorg) registry. To install Vue grid package, use the following command.

```bash
npm install @syncfusion/ej2-vue-grids --save
```

### Registering Grid component

You can register the Grid component in your application by using the **Vue.use()**. Refer to the code example given below.

```typescript
import { GridPlugin } from '@syncfusion/ej2-vue-grids';

Vue.use(GridPlugin);
```

> Registering **GridPlugin** in vue, will register the grid component along with its required child directives globally.

### Adding CSS references for Grid

Add CSS references needed for Grid in **style** section of the **App.vue** file from **../node_modules/@syncfusion** package folder.

```html
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';  
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';  
@import '../node_modules/@syncfusion/ej2-calendars/styles/material.css';  
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';  
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';  
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-notifications/styles/material.css';
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>
```

## Add Grid component

Add the Vue Grid by using **ejs-grid** selector in **template** section of the **App.vue** file.

```html
<template>
    <div id="app">
        <ejs-grid :dataSource="data" >
          <e-columns>
            <e-column field='OrderID' headerText='Order ID'></e-column>
            <e-column field='CustomerID' headerText='Customer ID'></e-column>
            <e-column field='ShipCountry' headerText='Ship Country'></e-column>
          </e-columns>
        </ejs-grid>
    </div>
</template>
<script>
import Vue from "vue";
import { GridPlugin } from "@syncfusion/ej2-vue-grids";

Vue.use(GridPlugin);

export default {
  data() {
    return {
      data: [
          {'OrderID': 10248,'CustomerID': 'VINET', 'ShipCountry': 'France'},
          {'OrderID': 10249,'CustomerID': 'TOMSP', 'ShipCountry': 'Germany'},
          {'OrderID': 10250,'CustomerID': 'HANAR', 'ShipCountry': 'Brazil' },
          {'OrderID': 10251,'CustomerID': 'VICTE', 'ShipCountry': 'France'}
      ],
    };
  },
}
</script>
<style>
 @import '../node_modules/@syncfusion/ej2-base/styles/material.css';  
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';  
@import '../node_modules/@syncfusion/ej2-calendars/styles/material.css';  
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';  
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';  
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-notifications/styles/material.css';
@import "../node_modules/@syncfusion/ej2-vue-grids/styles/material.css";
</style>
```
> Refer the [Getting Started with Vue3](https://ej2.syncfusion.com/vue/documentation/grid/getting-started-vue/) for using Syncfusion Vue components in Vue 3 applications.

## Supported frameworks

Grid component is also offered in the following list of frameworks.

| [<img src="https://ej2.syncfusion.com/github/images/js.svg" height="50" />](https://www.syncfusion.com/javascript-ui-controls?utm_medium=listing&utm_source=github)<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[JavaScript](https://www.syncfusion.com/javascript-ui-controls?utm_medium=listing&utm_source=github)&nbsp;&nbsp;&nbsp;&nbsp; | [<img src="https://ej2.syncfusion.com/github/images/angular-new.svg"  height="50" />](https://www.syncfusion.com/angular-components/?utm_medium=listing&utm_source=github)<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Angular](https://www.syncfusion.com/angular-components/?utm_medium=listing&utm_source=github)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | [<img src="https://ej2.syncfusion.com/github/images/react.svg" height="50" />](https://www.syncfusion.com/react-ui-components?utm_medium=listing&utm_source=github)<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[React](https://www.syncfusion.com/react-ui-components?utm_medium=listing&utm_source=github)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | [<img src="https://ej2.syncfusion.com/github/images/netcore.svg" height="50" />](https://www.syncfusion.com/aspnet-core-ui-controls?utm_medium=listing&utm_source=github)<br/>&nbsp;&nbsp;[ASP.NET&nbsp;Core](https://www.syncfusion.com/aspnet-core-ui-controls?utm_medium=listing&utm_source=github)&nbsp;&nbsp; | [<img src="https://ej2.syncfusion.com/github/images/netmvc.svg" height="50" />](https://www.syncfusion.com/aspnet-mvc-ui-controls?utm_medium=listing&utm_source=github)<br/>&nbsp;&nbsp;[ASP.NET&nbsp;MVC](https://www.syncfusion.com/aspnet-mvc-ui-controls?utm_medium=listing&utm_source=github)&nbsp;&nbsp; | 
| :-----: | :-----: | :-----: | :-----: | :-----: |

## Key features

* [Data sources](https://ej2.syncfusion.com/vue/demos/?utm_source=npm&utm_medium=listing&utm_campaign=vue-grid-npm/#/material/grid/local-data.html): Bind data seamlessly with various local and remote data sources such as JSON, OData, WCF, and RESTful web services with the help of DataManager.
* [High performance](https://ej2.syncfusion.com/vue/demos/?utm_source=npm&utm_medium=listing&utm_campaign=vue-grid-npm/#/material/grid/virtual-scrolling.html): Well thought out efforts, and focuses mainly on fast paced performance to load millions of records. Grid renders only the rows within the viewport, and loads additional data as the user scrolls vertically.
* [Adaptive UI layout](https://ej2.syncfusion.com/vue/demos/?utm_source=npm&utm_medium=listing&utm_campaign=vue-grid-npm/#/material/grid/adaptive-layout): UI is customized and redesigned for great views and usability on small screens. Filter, sort, search, and edit dialogs adaptive to the screen size and render row elements in a vertical direction.
* [Sorting and grouping](https://ej2.syncfusion.com/vue/demos/?utm_source=npm&utm_medium=listing&utm_campaign=vue-grid-npm/#/material/grid/grouping.html): Supporting N level of sorting and grouping can be useful for more complex data sets that have a deeper hierarchical structure or that need to be organized and analyzed in more detailed ways.
* [Aggregation](https://ej2.syncfusion.com/vue/demos/?utm_source=npm&utm_medium=listing&utm_campaign=vue-grid-npm/#/material/grid/aggregate.html): Easily visualize the aggregates for column values by calculating and displaying summary statistics such as sums, averages, counts, etc. By default, the aggregate value can be displayed in the footer, group footer, or group caption of the grid.
* [Filtering](https://ej2.syncfusion.com/vue/demos/?utm_source=npm&utm_medium=listing&utm_campaign=vue-grid-npm/#/material/grid/filtering.html): The filter UIs, including the filter bar, menu, excel, and checkbox, are available at each column to filter data.
* [Paging](https://ej2.syncfusion.com/vue/demos/?utm_source=npm&utm_medium=listing&utm_campaign=vue-grid-npm/#/material/grid/paging.html): Paging is used to view a segment of data from the assigned data source. It requests data on-demand when navigating to another page also allows to change the page size on the fly by using the page size dropdown in the pager.
* [Editing](https://ej2.syncfusion.com/vue/demos/?utm_source=npm&utm_medium=listing&utm_campaign=vue-grid-npm/#/material/grid/inline-editing.html): Grid supports create, read, update, and delete operations (CRUD). Also provides various edit modes such as inline, dialog, and batch edit (cell editing).
* [Selection](https://ej2.syncfusion.com/vue/demos/?utm_source=npm&utm_medium=listing&utm_campaign=vue-grid-npm/#/material/grid/selection): Select rows or cells either by using checkbox or by simply clicking them. Select more than one row or cell by holding Ctrl or Shift or Command, or simply dragging the pointer over the cells, or programmatically.
* [Hierarchical binding](https://ej2.syncfusion.com/vue/demos/?utm_source=npm&utm_medium=listing&utm_campaign=vue-grid-npm/#/material/grid/hierarchy-grid.html): Allows you to display table data in a hierarchical structure, allowing you to visualize the relationships between parent and child records in a clear and organized way.
* [Templates](https://ej2.syncfusion.com/vue/demos/?utm_source=npm&utm_medium=listing&utm_campaign=vue-grid-npm/#/material/grid/column-template.html): Using templates, users can create custom UI. It provides various template options to create custom headers, custom cell contents, custom rows, detail rows, toolbars, and custom editors for edit action.
* [Row drag and drop](https://ej2.syncfusion.com/vue/demos/?utm_source=npm&utm_medium=listing&utm_campaign=vue-grid-npm/#/material/grid/row-drag-and-drop.html): The Grid rows can be reordered while drag and drop the rows within the grid. Also allows to drop the dragged rows another Grid or custom component.
* Columns: The column definitions are used as the dataSource schema in the Grid. This plays a vital role in rendering column values in the required format.
  * [Reordering](https://ej2.syncfusion.com/vue/demos/?utm_source=npm&utm_medium=listing&utm_campaign=vue-grid-npm/#/material/grid/reorder.html): Allows you to rearrange the columns in the grid by dragging and dropping them to a new position in the column header row.
  * [Column chooser](https://ej2.syncfusion.com/vue/demos/?utm_source=npm&utm_medium=listing&utm_campaign=vue-grid-npm/#/material/grid/column-chooser.html): It provides a list of column names paired with check boxes that allow the visibility to be toggled on the fly.
  * [Resizing](https://ej2.syncfusion.com/vue/demos/?utm_source=npm&utm_medium=listing&utm_campaign=vue-grid-npm/#/material/grid/column-resize.html): Resizing allows changing column width on the fly by simply dragging the right corner of the column header.
  * [Frozen rows and columns](https://ej2.syncfusion.com/vue/demos/?utm_source=npm&utm_medium=listing&utm_campaign=vue-grid-npm/#/material/grid/frozen.html): Provides the ability to freeze columns and rows to allow for easy scrolling and comparison of cell values. It also offers the option to freeze columns on either the left or right side, or on both sides, of the grid.
  * [Cell spanning](https://ej2.syncfusion.com/vue/demos/?utm_source=npm&utm_medium=listing&utm_campaign=vue-grid-npm/#/material/grid/column-spanning.html): Grid cells can be spanned across multiple columns or rows in a grid layout to create a larger cell that takes up more space in the grid.
  * [Foreign key column binding](https://ej2.syncfusion.com/vue/demos/?utm_source=npm&utm_medium=listing&utm_campaign=vue-grid-npm/#/material/grid/foreign-key.html): A column can display values from external or lookup data sources using foreign key/value mapping.
* [Context menu](https://ej2.syncfusion.com/vue/demos/?utm_source=npm&utm_medium=listing&utm_campaign=vue-grid-npm/#/material/grid/context-menu.html): The context menu provides a list of actions to be performed in the grid. It appears when a grid cell, header, or the pager is right-clicked.
* [Clipboard](https://ej2.syncfusion.com/vue/demos/?utm_source=npm&utm_medium=listing&utm_campaign=vue-grid-npm/#/material/grid/clipboard.html): Selected rows and cells can be copied from the grid without header using Ctrl + C or with header using Ctrl + Shift + H shortcut. This allows you to easily transfer data from the grid to other applications or documents as needed.
* [Export to Excel and PDF](https://ej2.syncfusion.com/vue/demos/?utm_source=npm&utm_medium=listing&utm_campaign=vue-grid-npm/#/material/grid/export.html): Provides the options to Export the grid data to Excel, PDF, and CSV formats.
* [RTL support](https://ej2.syncfusion.com/vue/documentation/grid/global-local/?utm_source=npm&utm_medium=listing&utm_campaign=vue-grid-npm#right-to-left---rtl): Provides a full-fledged right-to-left mode which aligns content in the Grid component from right to left.
* [Accessibility](https://ej2.syncfusion.com/vue/documentation/grid/accessibility/?utm_source=npm&utm_medium=listing&utm_campaign=vue-grid-npm#wai-aria): Designed to be accessible to users with disabilities, with features such as WAI-ARIA standard compliance and keyboard navigation to ensure that the grid can be effectively used with assistive technologies such as screen readers.
* [Localization](https://ej2.syncfusion.com/vue/documentation/grid/global-local/?utm_source=npm&utm_medium=listing&utm_campaign=vue-grid-npm#localization): The Localization library enables you to adapt the default text content of the grid to fit the language and cultural preferences of your target audience.

## Support

Product support is available through the following mediums.

* [Support ticket](https://support.syncfusion.com/support/tickets/create) - Guaranteed Response in 24 hours | Unlimited tickets | Holiday support
* [Community forum](https://www.syncfusion.com/forums/vue?utm_source=npm&utm_medium=listing&utm_campaign=vue-grid-npm)
* [GitHub issues](https://github.com/syncfusion/ej2-vue-ui-components/issues/new)
* [Request feature or report bug](https://www.syncfusion.com/feedback/vue?utm_source=npm&utm_medium=listing&utm_campaign=vue-grid-npm)
* Live chat

## Changelog

Check the changelog [here](https://github.com/syncfusion/ej2-vue-ui-components/blob/master/components/grids/CHANGELOG.md?utm_source=npm&utm_medium=listing&utm_campaign=vue-grid-npm). Get minor improvements and bug fixes every week to stay up to date with frequent updates.

## License and copyright

> This is a commercial product and requires a paid license for possession or use. Syncfusion’s licensed software, including this component, is subject to the terms and conditions of Syncfusion's [EULA](https://www.syncfusion.com/eula/es/). To acquire a license for 80+ [Vue UI components](https://www.syncfusion.com/vue-components), you can [purchase](https://www.syncfusion.com/sales/products) or [start a free 30-day trial](https://www.syncfusion.com/account/manage-trials/start-trials).

> A free community [license](https://www.syncfusion.com/products/communitylicense) is also available for companies and individuals whose organizations have less than $1 million USD in annual gross revenue and five or fewer developers.

See [LICENSE FILE](https://github.com/syncfusion/ej2-vue-ui-components/blob/master/license?utm_source=npm&utm_medium=listing&utm_campaign=vue-grid-npm) for more info.

&copy; Copyright 2022 Syncfusion, Inc. All Rights Reserved. The Syncfusion Essential Studio license and copyright applies to this distribution.
