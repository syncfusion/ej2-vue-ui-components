# Vue Gantt Component

The [Vue Gantt](https://www.syncfusion.com/vue-ui-components/vue-gantt-chart?utm_source=npm&utm_medium=listing&utm_campaign=vue-gantt-npm) component is a project planning and management tool used to display and manage hierarchical tasks with timeline details. It helps assess how long a project should take, determine the resources needed, manage the dependencies between tasks, and plan the order in which the tasks should be completed.

<p align="center">
<img alt="Vue Gantt Control" src="https://raw.githubusercontent.com/SyncfusionExamples/nuget-img/master/vue/vue-gantt-chart.png"> </p>

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

### Adding Syncfusion Gantt package

All Syncfusion Vue packages are published in [npmjs.com](https://www.npmjs.com/~syncfusionorg) registry. To install Vue gantt package, use the following command.

```bash
npm install @syncfusion/ej2-vue-gantt --save
```

### Registering Gantt Component

You can register the Gantt component in your application by using the **Vue.use()**. Refer to the code example given below.

```typescript
import { GanttPlugin } from '@syncfusion/ej2-vue-gantt';

Vue.use(GanttPlugin);
```

> Registering **GanttPlugin** in vue, will register the gantt component along with its required child directives globally.

### Adding CSS references for Gantt

Add CSS references needed for Gantt in **style** section of the **App.vue** file from **../node_modules/@syncfusion** package folder.

```html
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-calendars/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
@import '../node_modules/@syncfusion/ej2-layouts/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-grids/styles/material.css';
@import '../node_modules/@syncfusion/ej2-treegrid/styles/material.css';
@import '../node_modules/@syncfusion/ej2-gantt/styles/material.css';
@import '../node_modules/@syncfusion/ej2-vue-gantt/styles/material.css';
</style>
```

## Add Gantt Component

Add the Vue Gantt by using **ejs-gantt** selector in **template** section of the **App.vue** file.

```html
<template>
 <div id="app">
    <ejs-gantt :dataSource="data" :taskFields = "taskFields"></ejs-gantt>
</div>
</template>
<script>
import Vue from "vue";
import { GanttPlugin } from "@syncfusion/ej2-vue-gantt";

Vue.use(GanttPlugin);

export default {
  data: function() {
  return{
        data: [
        {
            TaskID: 1,
            TaskName: 'Project Initiation',
            StartDate: new Date('04/02/2019'),
            EndDate: new Date('04/21/2019'),
            subtasks: [
                { TaskID: 2, TaskName: 'Identify Site location', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50 },
                { TaskID: 3, TaskName: 'Perform Soil test', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50  },
                { TaskID: 4, TaskName: 'Soil test approval', StartDate: new Date('04/02/2019'), Duration: 4, Progress: 50 },
            ]
        },
        {
            TaskID: 5,
            TaskName: 'Project Estimation',
            StartDate: new Date('04/02/2019'),
            EndDate: new Date('04/21/2019'),
            subtasks: [
                { TaskID: 6, TaskName: 'Develop floor plan for estimation', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 },
                { TaskID: 7, TaskName: 'List materials', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 },
                { TaskID: 8, TaskName: 'Estimation approval', StartDate: new Date('04/04/2019'), Duration: 3, Progress: 50 }
            ]
        }],
        taskFields: {
            id: 'TaskID',
            name: 'TaskName',
            startDate: 'StartDate',
            endDate: 'EndDate',
            duration: 'Duration',
            child: 'subtasks'
        },
    };
  },
};
</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-calendars/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
@import '../node_modules/@syncfusion/ej2-layouts/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-grids/styles/material.css';
@import '../node_modules/@syncfusion/ej2-treegrid/styles/material.css';
@import '../node_modules/@syncfusion/ej2-gantt/styles/material.css';
@import '../node_modules/@syncfusion/ej2-vue-gantt/styles/material.css';
</style>
```
> Refer the [Getting Started with Vue3](https://ej2.syncfusion.com/vue/documentation/gantt/getting-started-vue/) for using Syncfusion Vue components in Vue 3 applications.

## Supported frameworks

Gantt component is also offered in the following list of frameworks.

| [<img src="https://ej2.syncfusion.com/github/images/js.svg" height="50" />](https://www.syncfusion.com/javascript-ui-controls?utm_medium=listing&utm_source=github)<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[JavaScript](https://www.syncfusion.com/javascript-ui-controls?utm_medium=listing&utm_source=github)&nbsp;&nbsp;&nbsp;&nbsp; | [<img src="https://ej2.syncfusion.com/github/images/angular-new.svg"  height="50" />](https://www.syncfusion.com/angular-components/?utm_medium=listing&utm_source=github)<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[Angular](https://www.syncfusion.com/angular-components/?utm_medium=listing&utm_source=github)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | [<img src="https://ej2.syncfusion.com/github/images/react.svg" height="50" />](https://www.syncfusion.com/react-ui-components?utm_medium=listing&utm_source=github)<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[React](https://www.syncfusion.com/react-ui-components?utm_medium=listing&utm_source=github)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | [<img src="https://ej2.syncfusion.com/github/images/netcore.svg" height="50" />](https://www.syncfusion.com/aspnet-core-ui-controls?utm_medium=listing&utm_source=github)<br/>&nbsp;&nbsp;[ASP.NET&nbsp;Core](https://www.syncfusion.com/aspnet-core-ui-controls?utm_medium=listing&utm_source=github)&nbsp;&nbsp; | [<img src="https://ej2.syncfusion.com/github/images/netmvc.svg" height="50" />](https://www.syncfusion.com/aspnet-mvc-ui-controls?utm_medium=listing&utm_source=github)<br/>&nbsp;&nbsp;[ASP.NET&nbsp;MVC](https://www.syncfusion.com/aspnet-mvc-ui-controls?utm_medium=listing&utm_source=github)&nbsp;&nbsp; | 
| :-----: | :-----: | :-----: | :-----: | :-----: |

## Key features

* [Data sources](https://ej2.syncfusion.com/vue/demos/?utm_source=npm&utm_campaign=vue-gantt-npm#/bootstrap5/gantt/local-data.html): Bind hierarchical or self-referential data to Gantt chart with an array of JSON objects or DataManager.
* [Timeline](https://ej2.syncfusion.com/vue/demos/?utm_source=npm&utm_campaign=vue-gantt-npm#/bootstrap5/gantt/timeline.html): Display timescale from minutes to decades easily, and also display custom texts in the timeline units. Timeline can be displayed in either one-tier or two-tier layout.
* [Task dependency](https://ej2.syncfusion.com/vue/demos/?utm_source=npm&utm_campaign=vue-gantt-npm#/bootstrap5/gantt/editing.html): Allows for the definition or update of dependencies between tasks in a project using four types of task dependencies: Finish – Start, Start – Finish, Finish – Finish, and Start – Start.
* [Resources](https://ej2.syncfusion.com/vue/demos/?utm_source=npm&utm_campaign=vue-gantt-npm#/bootstrap5/gantt/resource-view.html): Visualizes the list of tasks assigned to each resource in hierarchy manner and switch the resources as per user need by task editing.
* [Editing](https://ej2.syncfusion.com/vue/demos/?utm_source=npm&utm_campaign=vue-gantt-npm#/bootstrap5/gantt/editing.html): Provides the options to dynamically insert, delete and update tasks using columns, dialog and taskbar editing options.
* [Virtual scrolling](https://ej2.syncfusion.com/vue/demos/?utm_source=npm&utm_campaign=vue-gantt-npm#/bootstrap5/gantt/virtual-scroll.html): Improves the performance of the gantt control when binding large amounts of data by only rendering the currently visible parts of the user interface and rendering other elements as needed while scrolling.
* [Critical path](https://ej2.syncfusion.com/vue/demos/?utm_source=npm&utm_campaign=vue-gantt-npm#/bootstrap5/gantt/critical-path.html): The critical path in a project is displayed by a single task or a series of tasks. If a task in critical path is delayed, the entire project will be delayed. A task is considered to be critical if any delay to this task would affect the project end date.
* [Customizable taskbars](https://ej2.syncfusion.com/vue/demos/?utm_source=npm&utm_campaign=vue-gantt-npm#/bootstrap5/gantt/taskbar-template.html): Display various tasks in a project using parent and child taskbars, summary taskbars and milestone UI, which can be customized with templates.
* [Unscheduled tasks](https://ej2.syncfusion.com/vue/demos/?utm_source=npm&utm_campaign=vue-gantt-npm#/bootstrap5/gantt/unscheduled-task.html): Gantt Chart supports the display of tasks with undefined start date, end date or duration in a project.
* [Baseline](https://ej2.syncfusion.com/vue/demos/?utm_source=npm&utm_campaign=vue-gantt-npm#/bootstrap5/gantt/baseline.html): Display the deviations between planned dates and actual dates of a task in a project using baselines.
* [Markers and indicators](https://ej2.syncfusion.com/vue/demos/?utm_source=npm&utm_campaign=vue-gantt-npm#/bootstrap5/gantt/event-markers.html): Display indicators and flags along with taskbars and task labels. Also map important events in a project using event marker.
* [Task label customization](https://ej2.syncfusion.com/vue/demos/?utm_source=npm&utm_campaign=vue-gantt-npm#/bootstrap5/gantt/tasklabel-template.html): Allows for the customization of labels within and on either side of the task bar.
* [Sorting](https://ej2.syncfusion.com/vue/demos/?utm_source=npm&utm_campaign=vue-gantt-npm#/bootstrap5/gantt/sorting-api.html): Supports n levels of sorting.
* [Filtering](https://ej2.syncfusion.com/vue/demos/?utm_source=npm&utm_campaign=vue-gantt-npm#/bootstrap5/gantt/filtering.html): Offers filter UIs such as filter bar and menu at each column to filter data. Also allows for filtering based on related parent or child records.
* [Columns](https://ej2.syncfusion.com/vue/demos/?utm_source=npm&utm_campaign=vue-gantt-npm#/bootstrap5/gantt/column-menu.html): Column definitions are used as the dataSource schema in the gantt. This plays a vital role in rendering column values in the required format. Column functionalities such as resizing, reordering, column template, show or hide columns, etc., are supported.
* [Column re-ordering](https://ej2.syncfusion.com/vue/demos/?utm_source=npm&utm_campaign=vue-gantt-npm#/bootstrap5/gantt/reorder.html): Drag any column and drop it at any position in the grid's column header row, to reposition the column.
* [Column resizing](https://ej2.syncfusion.com/vue/demos/?utm_source=npm&utm_campaign=vue-gantt-npm#/bootstrap5/gantt/resizing.html): Resizing allows changing column width on the fly by simply dragging the right corner of the column header.
* [Row re-ordering](https://ej2.syncfusion.com/vue/demos/?utm_source=npm&utm_campaign=vue-gantt-npm#/bootstrap5/gantt/drag-and-drop.html): Allows rows to be rearranged through drag and drop actions, changing their position and hierarchy level. A child row can be moved as a sibling within the same parent row or as a child to a different parent row.
* [Selection](https://ej2.syncfusion.com/vue/demos/?utm_source=npm&utm_campaign=vue-gantt-npm#/bootstrap5/gantt/selection.html): Rows or cells can be selected in the Gantt Chart. One or more rows or cells can also be selected by holding Shift, Ctrl or Command, or programmatically.
* [Templates](https://ej2.syncfusion.com/vue/demos/?utm_source=npm&utm_campaign=vue-gantt-npm#/bootstrap5/gantt/column-template.html): Templates can be used to create custom user experiences in the gantt.
* [RTL support](https://ej2.syncfusion.com/vue/documentation/gantt/global-local/#right-to-left-rtl): Provides the right-to-left mode which aligns content in the Gantt Chart component from right to left. This improves user experience and accessibility for those who work with RTL languages like Hebrew and Arabic.
* [Localization](https://ej2.syncfusion.com/vue/documentation/gantt/global-local/#localization): Provides inherent support to localize the UI.

## Support

Product support is available through the following mediums.

* [Support ticket](https://support.syncfusion.com/support/tickets/create) - Guaranteed Response in 24 hours | Unlimited tickets | Holiday support
* [Community forum](https://www.syncfusion.com/forums/vue?utm_source=npm&utm_medium=listing&utm_campaign=vue-gantt-npm)
* [GitHub issues](https://github.com/syncfusion/ej2-vue-ui-components/issues/new)
* [Request feature or report bug](https://www.syncfusion.com/feedback/vue?utm_source=npm&utm_medium=listing&utm_campaign=vue-gantt-npm)
* Live chat

## Changelog

Check the changelog [here](https://github.com/syncfusion/ej2-vue-ui-components/blob/master/components/gantt/CHANGELOG.md?utm_source=npm&utm_medium=listing&utm_campaign=vue-gantt-npm). Get minor improvements and bug fixes every week to stay up to date with frequent updates.

## License and copyright

> This is a commercial product and requires a paid license for possession or use. Syncfusion’s licensed software, including this component, is subject to the terms and conditions of Syncfusion's [EULA](https://www.syncfusion.com/eula/es/). To acquire a license for 80+ [Vue UI components](https://www.syncfusion.com/vue-components), you can [purchase](https://www.syncfusion.com/sales/products) or [start a free 30-day trial](https://www.syncfusion.com/account/manage-trials/start-trials).

> A free community [license](https://www.syncfusion.com/products/communitylicense) is also available for companies and individuals whose organizations have less than $1 million USD in annual gross revenue and five or fewer developers.

See [LICENSE FILE](https://github.com/syncfusion/ej2-vue-ui-components/blob/master/license?utm_source=npm&utm_medium=listing&utm_campaign=vue-grid-npm) for more info.

&copy; Copyright 2022 Syncfusion, Inc. All Rights Reserved. The Syncfusion Essential Studio license and copyright applies to this distribution.