# Changelog

## [Unreleased]

## 31.1.18 (2025-09-10)

### PDF Viewer

#### Bug Fixes

- `#I761851` - Resolved an issue where stamp comments were missing in the comment panel when opacity was not set in `stampSettings`.
- `#I755572` - Resolved a script error when opening the context menu after selecting the text more than three pages.

## 31.1.17 (2025-09-05)

### PDF Viewer

#### New Features

- `#I703098` - Added support for angle constraints in line-based annotations, with customizable angle settings.

#### Bug Fixes

- `#I756156` - Resolved an issue where the page became unresponsive when searching the provided line in the UI.
- `#I755829` - Resolved an issue where the exception thrown when saving the customer provided document in server rendering mode.
- `#I758341` , `#I758504` - Resolved an issue where the script error occurs when retrieving bookmarks in the customer provided document.

## 30.2.6 (2025-08-19)

### PDF Viewer

#### Bug Fixes

- `#I751541` - Resolved an issue where annotations were not displayed after saving and reloading the document when using multiple PDF viewers on a single page.
- `#I754856` - Resolved an issue where the script error occurred when importing annotations with Unicode characters in server rendering mode.
- `#I750256` - Resolved a script error that occurred when passing long text to the `findText` method.
- `#I751635` - Resolved an issue where the last few characters were missing when programmatically highlighting multi-line sentences using the `findText`.

## 30.2.5 (2025-08-13)

### PDF Viewer

#### Bug Fixes

- `#I747378` - Resolved an issue where custom fonts were not properly applied to form fields when reloading the PDF document.
- `#I747633` - Resolved an issue where the script error occurs when saving PDF after adding rectangle annotation with zero height and zero width.
- `#I751778` - Resolved an issue where the annotations in non-rendered pages are not deleting properly when deleted using `deleteAnnotationById` method.
- `#I750004` - Resolved an issue where annotations are duplicated on non-rendered pages when importing the annotations.

## 30.2.4 (2025-08-07)

### PDF Viewer

#### Bug Fixes

- `#I743981` - Resolved an issue where worker memory increased when loading the PDF document continuously.
- `#I749027` - Resolved an issue where the script error occurred when downloading the customer provided document.

## 30.1.42 (2025-07-29)

### PDF Viewer

#### Bug Fixes

- `#I741878` - Enhanced performance of the `findText` and `deleteAnnotations` methods.

## 30.1.41 (2025-07-22)

### PDF Viewer

#### Bug Fixes

- `#I744124` - Resolved an issue where the context menu is not proper with nested custom context menu items.
- `#I738912` - Resolved an issue where the signature and initial field indicators were cut off at lower zoom levels.
- `#I729371` - Resolved an issue where a script error occurred when adding a comment after programmatically editing the annotation author.

## 30.1.40 (2025-07-15)

### PDF Viewer

#### Bug Fixes

- `#I743298` - Resolved an issue where the `findText` bounds are not proper for the different line sentence.

## 30.1.39 (2025-07-08)

### PDF Viewer

#### Bug Fixes

- `#I738319` - Resolved an issue where `enableToolbarItem` method not working for custom toolbar items.
- `#I737343` - Resolved an issue where the tooltip is not proper for custom toolbar items.
- `#I736747` - Resolved an issue where the short hex values are not working for annotation color when importing annotations.

## 30.1.38 (2025-07-02)

### PDF Viewer

#### Bug Fixes

- `#I731877` - Fixed an issue where Annotations are not rendered on non-rendered pages due to same name with imported annotation.
- `#I729510` - Fixed an issue where the Viewer container does not adjust properly when the display is not set to block.
- `#I729539` - Resolved an issue where the annotation selector settings are not applied properly without the `resizerSize` property.
- `#I723498` - The comment panel input field now opens correctly on `SharePoint` wiki and web part pages.

## 30.1.37 (2025-06-25)

### PDF Viewer

#### New Features

- `#I712601` - Added support to dynamically enable or disable text selection in the PDF Viewer.
- PDF Viewer now supports squiggly annotations. This feature allows users to highlight important sections of the text with wavy underlines, enhancing document review and collaboration. Squiggly annotations can be added, edited, and customized directly within the viewer, providing a seamless and intuitive experience for annotating PDFs.
- `#I687373` - Provided zooming support in the Page Organizer view of the PDF Viewer. This enhancement provides an interactive zoom experience to help users identify the pages they are organizing.

#### Bug Fixes

- `#I731429` - Resolved an issue where the rectangle annotation was not added correctly in the PDF Viewer when it was drawn quickly.

## 29.2.11 (2025-06-17)

### PDF Viewer

#### Bug Fixes

- `#I723913` - Resolved an issue where text search and `findText` functionalities are not working with the provided document.
- `#I724481` - Fixed an issue where the current page number not reset properly when `unload` method called.
- `#I729976` - Fixed an issue where the form fields lagged when zooming in and out with a large number of fields.
- `#I728939` - Fixed an issue where the date time format is not proper when using the `loadCldr` method.
- `#I732950` - Resolved an issue where a memory leak occurred after destroying the PDF viewer.

## 29.2.10 (2025-06-10)

### PDF Viewer

#### Bug Fixes

- `#I728109` - Fixed an issue where the multiline input text gets combined into one line without `Formdesigner` module on Re-render.
- `#I731710` - The script error no longer occurs when the `destroy` method is called without annotation module.
- `#I730602` - Resolved an issue where the current author name doesn't get updated when editing note in the comment panel.

## 29.2.8 (2025-06-03)

### PDF Viewer

#### Bug Fixes

- `#I725861` - Resolved an issue where text selection and highlight annotations were not working properly in the provided document.
- `#I728949` - Resolved an issue where annotations disappeared on duplicated PDF pages during re-rendering in the PDF viewer.
- `#I725266` - Fixed an issue where the PDF Viewer does not scroll to annotation location when selected from comment panel at higher zoom levels.
- `#I717803` - Fixed an issue where the scale ratio unable to set above 100.
- `#I720768` - Fixed an issue where the comment panel title and note overlap for long author name.

## 29.2.7 (2025-05-27)

### PDF Viewer

#### Bug Fixes

- `#I957375` - Resolved an issue where the fill color was not applied when changed from transparent to white.
- `#I721139` - Fixed an issue where `retrieveFormFields` method returns empty values for Textbox and Password fields without injecting Form Designer module.

## 29.2.5 (2025-05-21)

### PDF Viewer

#### Bug Fixes

- `#I721515` - Resolved an issue where a script error occurred while scrolling through a customer-provided document.
- `#I719937` - The script error no longer occurs when loading the customer provided document.
- `#I719934` - Resolved an issue where custom fonts were not preserved in the downloaded document for form fields on the server side.
- `#I720572` - Fixed an issue where the `fireFormFieldRemoveEvent` is not triggered when deleting the form fields on non-render pages.
- `#I721617` - Resolved an issue where an undefined exception was thrown while accessing the destination page of child bookmarks in the provided document.
- `#I723539` - Resolved an issue where importing text markup annotations was slow for large documents at higher zoom levels.

## 29.2.4 (2025-05-14)

### PDF Viewer

#### Bug Fixes

- `#I717333` - Fixed an issue where the draw and type signatures were missing in the downloaded document for non-rendered pages when updating it using the `updateFormFieldsValue` method.
- `#I715531` - Resolved an issue where hyperlinks were not rendered when `enableTileRendering` was set to true.
- `#I715989` - Resolved an issue where the rectangle annotation was not properly added when the cursor was quickly moved outside the page during drawing.
- `#I717767` - Resolved an issue where tile rendered documents appeared blurry at minimum zoom levels in server rendering mode.
- `#I643817` - Resolved an issue where calibration was not functioning correctly for measurement annotations.
- `#I714312` , `#I712195` - Improved loading and interaction performance when opening documents containing a more number of form fields.

## 29.1.41 (2025-05-06)

### PDF Viewer

#### Bug Fixes

- `#I712197` - Fixed an issue where the form field value and font size not preserved when downloading the document without form designer module.
- `#I713625` - Resolved an issue where form field data was not retained in the downloaded document without annotation module.

## 29.1.40 (2025-04-29)

### PDF Viewer

#### Bug Fixes

- `#I708159` - Resolved the issue where the `clearFormFields` method was not working for newly added form fields.
- `#I709563` - Resolved an issue where the shape label could not be set during the `annotationAdd` event.
- `#I709131` - Resolved the issue where the form field cursor position was incorrect when `enableRtl` was set to true.
- `#I713403` - Fixed an issue where the `isDocumentEdited` property remains false in the `annotationAdd` event when adding a free text annotation.
- `#I711690` - Resolved an exception that occurs when saving the document after programmatically updating an existing type signature to an image signature.

## 29.1.39 (2025-04-22)

### PDF Viewer

#### Bug Fixes

- `#I706265` - Resolved the issue where text markup annotations disappear when adding the free text annotation programmatically.
- `#I710824` - Resolved an exception that occurs when opening a password-protected document with a digital signature.

## 29.1.38 (2025-04-15)

### PDF Viewer

#### Bug Fixes

- `#I709549` - Added condition before accessing the `getPageSize` and `exportHyperlinks` methods.
- `#I705240` - The form field positions are correct after updating them using the `updateFormField` method.
- `#I704004` - The `ajaxRequestSuccess` event is triggered properly after the download action is completed.
- `#I701556` - The image signature in the signature/initial field is preserved correctly when printing the document.
- `#I702570` - The form fields on non-rendered pages are now visible when printing the document.
- `#I705546` - The form field position is updated correctly for non-rendered pages using the `updateFormField` method.

## 29.1.37 (2025-04-08)

### PDF Viewer

#### Bug Fixes

- `#I708196` - The script error no longer occurs when loading the PDF document after it has been programmatically unloaded from the PDF Viewer.
- `#I196344` - Fixed an issue where the signature value did not appear while adding the field programmatically.
- `#I700063` - The annotation rendering is now optimized for documents with more annotations.
- `#I698822` - Fixed an issue where the locked custom stamp remains editable.
- `#I704815` - Enhanced the `fireFormFieldMoveEvent`, `fireFormFieldMouseLeaveEvent`, `fireFormFieldMouseOverEvent`, `fireFormFieldSelectEvent`, `fireFormFieldUnSelectEvent`, and `fireFormFieldResizeEvent` to include additional relevant details.
- `#I680814` - Fixed an issue where the custom font is not rendered properly in reloaded document.

## 29.1.35 (2025-04-01)

### PDF Viewer

#### Bug Fixes

- `#I702575` - Double quotes will no longer be removed from the text box field when reloading a downloaded document.
- `#I685698` - `PDFium` resources can now be loaded without requiring the `ej2-pdfviewer-lib` folder.
- `#I689380` - The file size will not increase when saving the document without making any changes.
- `#I698835` - Improved performance and reduced lag when zooming in on specific landscape PDF files.
- `#I704811` - Now, the `formFieldAdd` event is triggered when adding form fields programmatically to non-rendered pages.
- `#I695141` - The `documentLoadFailed` event now triggers as expected when attempting to load an invalid PDF URL.
- `#I683048` - Fixed an issue where the custom stamp image did not appear in the downloaded PDF when modified programmatically.
- `#I697942` - The signature and initial form field values are now correctly included in the form field collections for non-rendered pages.
- `#I699488` - Resolved an exception that occurred when importing and deleting annotations simultaneously within the `annotationAdd` event.
- `#I699776` - Fixed an issue where `PdfViewer` threw a 'Cannot read properties of undefined' error under certain conditions when module injection was not used.
- `#I707879` - The script error does not occur when the `documentId` is passed to the document path on the server side.

- `#I702575` - Double quotes will no longer be removed from the text box field when reloading a downloaded document.
- `#I685698` - `PDFium` resources can now be loaded without requiring the `ej2-pdfviewer-lib` folder.
- `#I689380` - The file size will not increase when saving the document without making any changes.
- `#I698835` - Improved performance and reduced lag when zooming in on specific landscape PDF files.
- `#I704811` - The `formFieldAdd` event is now triggered when adding form fields programmatically to non-rendered pages.
- `#I695141` - The `documentLoadFailed` event now triggers as expected when attempting to load an invalid PDF URL.
- `#I683048` - Fixed an issue where the custom stamp image did not appear in the downloaded PDF when modified programmatically.
- `#I697942` - The signature and initial form field values are now correctly included in the form field collections for non-rendered pages.
- `#I699488` - Resolved an exception that occurred when importing and deleting annotations simultaneously within the `annotationAdd` event.
- `#I699776` - Fixed an issue where `PdfViewer` threw a 'Cannot read properties of undefined' error under certain conditions when module injection was not used.
- `#I707879` - The script error does not occur when the `documentId` is passed to the document path on the server side.

## 29.1.33 (2025-03-25)

### PDF Viewer

#### New Features

- Enhanced text search performance for large PDF documents.
- Added support for asynchronously extracting and finding text using the `extractText` and `findTextAsync` APIs.
- `#I645218` - Optimized memory usage when loading large PDF documents, with further enhancements available through the `ExtractTextOptions`.
- `#I645354` - Added the `resourcesLoaded` event in PDF Viewer.

#### Bug Fixes

- `#I686925` - Now, the text search works correctly when searching for multiple words in Unicode text.
- `#I693186` - Now, the Angular change detection event does not trigger continuously while zooming.

## 28.2.11 (2025-03-11)

### PDF Viewer

#### Bug Fixes

- `#I696432` - Now, the form fields no longer disappear when reloading the PDF document after a pinch zoom without the form designer module.
- `#I695648` - Now, the exception did not occur when saving the provided document without scrolling.
- `#I695167` - Now, the custom data value is updated properly for non-rendered pages using the `updateFormField` API.

#### Breaking Changes

-`#I695236` - The `validateFormFields` API will no longer be triggered after completing the required form fields and initiating `download` or `saveAsBlob`. To proceed with `download` or `saveAsBlob` without filling in the required fields, simply disable the `validateFormFields` event by setting [`enableFormFieldsValidation`](https://helpej2.syncfusion.com/documentation/api/pdfviewer/#enableformfieldsvalidation) to false.

-`#I695236` - The `validateFormFields` API will no longer be triggered after completing the required form fields and initiating `download` or `saveAsBlob`. To proceed with `download` or `saveAsBlob` without filling in the required fields, simply disable the `validateFormFields` event by setting [`enableFormFieldsValidation`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/#enableformfieldsvalidation) to false.

## 28.2.9 (2025-03-04)

### PDF Viewer

#### Bug Fixes

- `#I688924` - Now, the stamp annotation is displayed correctly in the provided document in the PDF Viewer.
- `#I688583` - Now, we are able to add the signature to the signature field properly after clearing the form field value using the `clearFormFields` method.

## 28.2.7 (2025-02-25)

### PDF Viewer

#### Bug Fixes

- `#I687949` - Now, the Exception will not occur while loading the customer provided document with form fields.
- `#I688986` - Now, the form field bounds values are available in the `formFieldAdd` event.
- `#I691472` - Now, the exception did not occur when trying to print the document without annotation modules.
- Now, the script error did not occur when loading the document with modified toolbar settings.
- `#I689173` - Now, the form field on the non-rendered page does not disappear after filling in the textbox field.

- `#I687949` - Now, the Exception will not occur while loading the customer provided document with form fields.
- `#I688986` - Now, the form field bounds values are available in the `formFieldAdd` event.
- Now, the script error did not occur when loading the document with modified toolbar settings.
- `#I691472` - Now, the exception did not occur when trying to print the document without annotation modules.
- `#I689173` - Now, the form field on the non-rendered page does not disappear after filling in the textbox field.

## 28.2.6 (2025-02-18)

### PDF Viewer

#### Bug Fixes

- `#I664230` - Now , the signature annotation will appear in UI upon import when deleted programmatically.
- `#I683048` - Now , the custom stamp image will appear in UI when changing the image source dynamically.
- `#I686411` - Now, the pan mode is not disabled when the Ctrl key is pressed.
- `#I686925`, `#686758` - Now, the `findText` method properly returns the width value for the searched text.
- `#I689347` - Now, the script error no longer occurs when deleting the text markup annotation using the `deleteAnnotationById` method.

## 28.2.5 (2025-02-11)

### PDF Viewer

#### Bug Fixes

- `#I683657` - Now, the scale ratio updated properly when changing the `measurementSettings` dynamically.
- `#I683269` - Now, the form field value is updated properly after disabling read-only mode programmatically.
- `#I675316` - The date and time format is now preserved correctly in the comment panel when importing annotations.
- `#I687098` - Now , the Exception will not occur when downloading the customer provided document with the newly added annotation.
- `#I680877` - Now, the handwritten signature width and height are not swapped for rotated documents.
- `#I682398` - Now, the font height is retrieved properly from the widget annotation.
- `#I686841` - Now , the `customData` will update properly when adding the annotations programmatically.

## 28.2.4 (2025-02-04)

### PDF Viewer

#### Breaking Changes

- `#I661474` - The default preservation of highlight annotations has been enhanced, along with an update to the default highlight color when added programmatically.

## 28.2.3 (2025-01-29)

### PDF Viewer

#### Bug Fixes

- `#I679527` - Now, the annotations no longer disappear when programmatically selecting annotations on a non-rendered page.
- `#I678021` - Now, the order of annotations is properly preserved if the document contains stamp annotations.

## 28.1.41 (2025-01-21)

### PDF Viewer

#### Bug Fixes

- `#I676738` - Now, the radio button is visible on the non-rendered page when saving the document.
- `#I675055`, `#678431` - Now, the script error no longer occurs when using the PDF Viewer in React with `Vite` in production.
- `#I678021` - Now, the free text annotation is not missing when saving a document with Unicode text and newline characters.
- `#I680495` - Now, the annotations are visible in the customer provided document.

#### Breaking Changes

- `#I676549` - In the `pageRenderComplete` event, the page number property now reflects the actual page number instead of the page index.

## 28.1.39 (2025-01-14)

### PDF Viewer

#### Bug Fixes

- `#I674223` - Now, the form field alignment is correctly preserved after downloading the document in a `standalone` PDF Viewer.
- `#I665085` - Now, the PDF viewer no longer crashes when loading large size digital signature document.

## 28.1.38 (2025-01-07)

### PDF Viewer

#### Bug Fixes

- `#I659553` - Now, the text field background color appears as expected.
- `#I662006` - Now, the non-rendered page form fields are properly updated using the `updateFormFieldsValue` method.
- `#I666148` - Now, the page navigation now works correctly for hyperlinks pointing to pages above 100.

## 28.1.37 (2024-12-31)

### PDF Viewer

#### Bug Fixes

- `#I664554` - Now, the `documentId` property is no longer missing in the `ajaxRequestInitiate` event after rotating the PDF pages.
- `#I662588` - A proper error message is now displayed when an invalid base 64 string is loaded in the PDF Viewer.

## 28.1.36 (2024-12-24)

### PDF Viewer

#### Bug Fixes

- `#I551643`, `#I664728` - Now, the script error does not occur when importing the large annotations.
- `#I663071` - Now, the `printStart` event is triggered when printing a PDF using the `Ctrl + P` shortcut.
- `#I662257` - No script error occurs when loading the provided document and scrolling quickly to the end of the page.

- `#I551643`, `#I664728` - Now, the script error does not occur when importing the large annotations.
- `#I663071` - Now, the `printStart` event is triggered when printing a PDF using the `Ctrl + P` shortcut.
- `#I662257` - No script error occurs when loading the provided document and scrolling quickly to the end of the page.
- `#I659553` - Now, the text field background color appears as expected.

## 28.1.35 (2024-12-18)

### PDF Viewer

#### Bug Fixes

- `#I63329` - Now, after the font family is changed, the default font family does not appear in the font family dropdown on the appearance tab.
- `#I646929` - Now, the typed signature appears in the signature field after being added using the custom font.

## 28.1.33 (2024-12-12)

### PDF Viewer

#### New Features

- `#I593597` - Added support for preserving `unicode` text in free text annotations within the `standalone` PDF Viewer.
- `#I630970` - Added support for local session storage in the PDF Viewer.
- Added support for preserving `unicode` text in form fields within the `standalone` PDF Viewer.

#### Bug Fixes

- `#I655125` - Now, the page renders correctly with form fields after zooming in and out on an iOS device.
- `#I655531` - Now, the button field color is rendered properly in the PDF viewer.
- `#I655380` - Now, the `signatureIndicatorSettings` updated properly for the existing signature fields in the document.
- `#I655530` - Now, able to load the provided document when form designer module is enabled.
- `#I653882` - Now, the sticky notes is properly visible by import after delete the annotation using the `deleteAnnotations` API.

## 27.2.5 (2024-12-03)

### PDF Viewer

#### Bug Fixes

- `#I649989` - Now, the image quality of the printed document is properly preserved.
- `#I646167` - Now, the scrolling is consistent during word search at high zoom levels.
- `#I651103` - Now, the tab navigation works properly in the customer provided document.
- `#I641323` - Now, the PDF pages render properly when performing a text search in the provided document.
- `#I641323` - Now, the text search match count is displayed correctly when searching for the first word on a PDF page.
- `#I656223` - Now, the custom stamp dialog opens on the desktop when the enableDesktopMode API is set to true.
- `#I652167` - Now, programmatically setting `fontStyle` to `none` is working properly for the form fields.
- `#I654176` - Now, the programmatically added form field is no longer missing when downloading the digital signature document.

## 27.2.4 (2024-11-26)

### PDF Viewer

#### Bug Fixes

- `#I633354` - Now, the text search highlight is displayed correctly when the searched page contains Unicode text.
- `#I653415` - Now, saving PDF as blob with programmatically aligned Free Text annotations works properly.
- `#I651412` - Now, the signature and initial field indicator text is displayed correctly during minimum zoom.

## 27.2.3 (2024-11-21)

### PDF Viewer

#### Bug Fixes

- `#I651818` - Now, the dropdown values are correctly preserved when opening the PDF document, with different item names and values for the dropdown options.
- `#I645218` - Now, the memory out-of-bounds exception no longer occurs in `Vue 2`.
- `#I645714` - Now, the added text markup annotation bounds and the exported annotation bounds are the same.
- `#I652381` - Now, the signature with custom font is visible properly in downloaded PDF document.
- `#I645043` - Now, the radio button field data is not lost when scrolling through the provided document.
- `#I646730` - Now, the Text Selection and Pan keyboard shortcuts are disabled when the corresponding options are not available in the toolbar.
- `#I635071` - Now, the checkbox form fields are properly checked in the downloaded document.

- `#I645218` - Now, the memory out-of-bounds exception no longer occurs in `Vue 2`.
- `#I645714` - Now, the added text markup annotation bounds and the exported annotation bounds are the same.
- `#I652381` - Now, the signature with custom font is visible properly in downloaded PDF document.
- `#I651818` - Now, the dropdown values are correctly preserved when opening the PDF document, with different item names and values for the dropdown options.
- `#I645043` - Now, the radio button field data is not lost when scrolling through the provided document.
- `#I646730` - Now, the Text Selection and Pan keyboard shortcuts are disabled when the corresponding options are not available in the toolbar.
- `#I635071` - Now, the checkbox form fields are properly checked in the downloaded document.

#### New Features

- `#I593597` - Added support for preserving `unicode` text in free text annotations within the `standalone` PDF Viewer.

## 27.2.2 (2024-11-15)

### PDF Viewer

#### Bug Fixes

- `#I648250` - Now, the form field drag element is active when moving form fields.

## 27.1.58 (2024-11-05)

### PDF Viewer

#### Bug Fixes

- `#I638740` - Now, the comment delete event is properly triggered when the parent comment `div` is deleted.
- `#I646822` - Now, the `formFieldMouseover` event includes both the form field ID and Name.
- `#I637574` - Now, the signature position is accurately rendered in the provided document upon reloading the downloaded file.
- `#I641496` - Now, the annotation signature buttons no longer overflow when the translation string is too long.

## 27.1.57 (2024-10-29)

### PDF Viewer

#### Breaking Changes

- The `getPageDetails` API has been renamed to `getPageInfo`. Additionally, the zoom factor parameter has been removed from the `getPageInfo` API, as the zoom factor can be accessed directly through the `zoomPercentage` API.

| Existing API name| New API Name |
|------|-------------|
| `getPageDetails`| `getPageInfo`|

## 27.1.55 (2024-10-22)

### PDF Viewer

#### Bug Fixes

- `#I638745` - Now, the sticky notes annotation is correctly added when the PDF Viewer window is resized to a smaller size, with the sticky annotation option available in the toolbar dropdown menu.
- `#I637865` - Now, the form field type updates properly when switching fields without adding in the PDF Viewer.
- `#I637742` - Now, the annotations are not missing, and no script errors occur when `enableThumbnail` and `isThumbnailViewOpen` are enabled.
- `#I634412` - Now, the stamp annotation is no longer missing when printing the imported annotations.

## 27.1.53 (2024-10-15)

### PDF Viewer

#### Bug Fixes

- `#I638294` - Now, the notification dialog is not shown for search text with no matches when `showNotificationDialog` API is set to false.
- `#I636244` - Now, the annotation toolbar is programmatically opened on a mobile device using the `showAnnotationToolbar` method.
- `#I637351` - Now, the signature collection ID and ID from the `addSignature` event are the same on mobile devices.
- `#F194443` - Now, the tooltip is properly removed when programmatically removing a form field tooltip using the `updateFormField` API.
- `#I637350` - Now, the PDF Viewer does not stop responding when searching the text.
- `#I637275` - Now, the download option is disabled in mobile mode when `enableDownload` API is set to false.
- `#I633438` , `#I633453` - Now, the invalid file corrupted dialog closes automatically after a valid PDF document is loaded.
- `#I619099` - Now, the delay in searching for text after completing text extraction has been reduced.
- `#I635120` - Now, the undo and redo functions for free text annotations, as well as the ability to change alignment and font size using the `editAnnotation` method, are now functioning correctly.
- `#I608686` - Now, a script error does not occur when trying to update and delete annotations simultaneously after importing them.
- `#I635119` - Now, after programmatically highlighting and deleting text, the text will not be highlighted again unless a new selection is made, as the selection is cleared when the delete method is called programmatically.
- Now, the close button is clickable across all size scenarios when the thumbnail container is resized.
- `#I908781` - Now, the Form field data will be accurately preserved after scrolling, even when form fields with the same name are updated, and the form designer module is not included.
- `#I631265` - Now, the signature is correctly saved in the downloaded document provided by the customer.

- `#I638294` - Now, the notification dialog is not shown for search text with no matches when `showNotificationDialog` API is set to false.
- `#I636244` - Now, the annotation toolbar is programmatically opened on a mobile device using the `showAnnotationToolbar` method.
- `#I637351` - Now, the signature collection ID and ID from the `addSignature` event are the same on mobile devices.
- `#F194443` - Now, the tooltip is properly removed when programmatically removing a form field tooltip using the `updateFormField` API.
- `#I637275` - Now, the download option is disabled in mobile mode when `enableDownload` API is set to false.
- `#I637350` - Now, the PDF Viewer does not stop responding when searching the text.
- `#I633438` , `#I633453` - Now, the invalid file corrupted dialog closes automatically after a valid PDF document is loaded.
- `#I619099` - Now, the delay in searching for text after completing text extraction has been reduced.
- `#I635120` - Now, the undo and redo functions for free text annotations, as well as the ability to change alignment and font size using the `editAnnotation` method, are now functioning correctly.
- `#I608686` - Now, a script error does not occur when trying to update and delete annotations simultaneously after importing them.
- `#I635119` - Now, after programmatically highlighting and deleting text, the text will not be highlighted again unless a new selection is made, as the selection is cleared when the delete method is called programmatically.
- Now, the close button is clickable across all size scenarios when the thumbnail container is resized.
- `#I908781` - Now, the Form field data will be accurately preserved after scrolling, even when form fields with the same name are updated, and the form designer module is not included.
- `#I631265` - Now, the signature is correctly saved in the downloaded document provided by the customer.

#### New Features

- `#I627469` - Added support for retrieving page details, such as the current page size, page rotation and zoom factor, through the `getPageDetails`.

## 27.1.52 (2024-10-08)

### PDF Viewer

#### Bug Fixes

- `#I634439` - Now, the value of the dropdown field name does not set to null in the `formFieldCollections` when the `enableFormDesigner` API is disabled.
- `#I631430` - Now, the form field index is correctly calculated, and `NaN` is no longer added to the form field name when creating new fields from the designer in PDF Viewer.
- `#I631901` - Now, the keyboard shortcuts for the `OpenOption` are disabled when the `OpenOption` item is not included in the toolbar.

## 27.1.51 (2024-09-30)

### PDF Viewer

#### Bug Fixes

- `#I627789` - Now, the context menu for form fields opens properly in desktop touch mode.
- `#I630341` - Now, the text is properly aligned in the freetext annotation when using the subject property.
- `#I629789` - Now, the `IsDocumentEdited` property set to false when loading the customer provided PDF document.
- `#I632424` - Now, the object reference error won't occur when downloading with the dropdown field after updating the dropdown options programmatically.
- `#I627479` - Now, the browse button is working properly  when dynamically changing enableFormFields API value.
- `#I635120` - Now, After adding a freetext, changing the alignment and font size, the undo and redo functions working properly.
- `#I635116` - Now, Freetext annotation appeared properly when update the alignment styling.
- `#I635117` - Now, the undo and redo actions is properly working when perform the cut and paste action.
- `#I630883` - Now, resizing the form field on the first page doesn't hide the form field on the third page.
- `#I630441` - Now, the `pageMouseover` event is triggered without annotation and form designer modules.

## 27.1.50 (2024-09-24)

### PDF Viewer

#### Bug Fixes

- `#I626172` - Now, stamp annotation is saved properly when adding custom Data property.
- `#I631717` - Now, Free text author and comment characters are not changed when importing the exported annotation.
- `#I632150` - Now, the handwritten signature is properly selected after being added to the PDF viewer on a mobile device.
- `#I626892` - Now, the large document opens in `standalone` PDF Viewer.
- `#I632511` - Now, the fetch request is not sent if the URL is set to the document path on the Server-Backed PDF Viewer.
- `#I632378` - Now, copy paste is working with formfields when `enableFormDesigner` as false.
- `#I631207` - Now, the `textmarkup` annotations are not unselected when changing the properties programmatically.
- `#I627322` - Now, the Form fields can not be moved outside of the document.

## 27.1.48 (2024-09-18)

### PDF Viewer

#### Bug Fixes

- `#I620380` - Now, the sticky note annotation was added correctly along with the comment programmatically inside the annotationAdd event without any exceptions.
- `#I624857` - The `ArgumentOutOfRangeException` no longer occurs when clicking the submit button in the provided document.
- `#F194120` - The bookmark navigation now works properly in the provided document.
- `#I619099` - The pages now render properly when navigating to the searched text continuously.
- `#I626710` - Now, the signature is added to the correct signature field when switching the mobile device from portrait to landscape orientation.

#### Features

- Added support to import PDF documents within the Organize Pages dialog, enabling users to incorporate pages from other PDFs into the current document.
- `#F181628` , `#I482858` , `#I488268` , `#I494793` , `#I595206` - Introduced the ability to programmatically add handwritten signatures and initial annotations in PDF documents.
- `#F183710` , `#I470260` - Implemented options to customize print quality in the PDF Viewer, allowing users to select different quality levels to balance print clarity with processing speed.
- Enabled multi-word search functionality within the PDF Viewer.
- `#I592524` , `#I598159` - Added support for loading custom fonts in `PDFium` WASM to ensure proper rendering of page content.
- `#I340793` , `#I345576` , `#I359942` , `#I379567` , `#I386590` , `#I605421` , `#I607974` - Added support for custom fonts in the `TypeHere` signature and initial fields.

### Breaking Changes

- In the Server-backed PDF Viewer, two action methods, `RenderPdfTexts` and `ValidatePassword`, are now required in the controller for proper functionality. This change is necessary because text extraction for PDF documents has been separated by default. Additionally, when importing a new PDF document in the organize window, a protected document validation check must be performed before the import.
    - **Solution** : To update the `PDFViewerController` file on your server, refer to the framework-specific sample repository available [here](https://github.com/SyncfusionExamples/EJ2-PDFViewer-WebServices/tree/main) for guidance.

## 26.2.12 (2024-09-03)

### PDF Viewer

#### Bug Fixes

- `#I621133` - The `IsDocumentEdited` API does not return true for documents with form fields.
- `#I620047` - Now, the text markup annotation rotation is correctly rendered after rotating the PDF pages.
- `#I625999` - Now, the free text annotation font size is updating properly.
- `#I620349` - Now, the `FormFieldPropertiesChange` event is triggered when adding or deleting the dropdown options.
- `#I622415` - Now, the able to copy text from the input box of the search dialog.
- `#I626450` - Now, no more console errors occur when focusing on the PDF Viewer.
- `#I626966` - The invalid behavior of font alignment and font color tools in the `annotationToolbarItems` has been resolved now.
- `#I626108` - The polygon annotation is now preserved properly when adding and rotating the pages.
- `#I627416` - Now, the form field background color is now correctly updated when changing form field visibility from `hidden` to `visible` mode.
- `#622761` - Now, `ValidateFormFieldsArgs` is triggered properly when the submit button is clicked.

## 26.2.11 (2024-08-27)

### PDF Viewer

#### Bug Fixes

- `#I614031` - Now, able to insert capital `H` and `V` in multiline textbox fields in PDF Viewer when holding `SHIFT` key.
- `#I622939` - Now, able to insert capital `H` and `V` in search text in PDF Viewer when holding `SHIFT` key.
- `#I619818` - Now, the annotation select event is triggered in provided document.
- `#I624012` - Now, the font size of the type signature is correctly preserved in the downloaded document.
- `#I618143` - Now, the password-protected PDF document is properly exported to an image using the server library.

## 26.2.10 (2024-08-20)

### PDF Viewer

#### Bug Fixes

- `#I614475` - Now, when deleting a signature field image after zooming in the image is removed and does not remains visually presented on the screen.
- `#I615933` - Now, the Radio button retains selection when clicked more than once.
- `#I615285` - Now, form fields are being correctly retrieved from the widget in the provided document.
- `#I612386` - Now, the checkbox and radio button size is increased properly using `updateFormField` method.

## 26.2.9 (2024-08-13)

### PDF Viewer

#### Bug Fixes

- `#I612252` - Now, the `ArgumentOutOfRangeException` does not occurs while attempting to download the provided document.
- Now, the script error does not occurs when searching the non-matched word in the document without magnification module.
- `#F189402` - Now, the PDF viewer can load the PDF document as a blob URL.
- `#F190306` - Now, the script error does not occur when loading the provided document.

## 26.2.8 (2024-08-06)

### PDF Viewer

#### Bug Fixes

- `#I607610` - Now, we are able to click the checkbox field in the customer-provided document on mobile devices.
- `#I608686` - Now, the script error no longer occurs when deleting the added annotations using the `deleteAnnotations` API.
- `#I612530` - Now, able to copy text from form field text boxes using Ctrl+C.
- `#I612848` - Now, the form fields can not be pasted out of the page.
- `#I609340` - Now, the invalid error message is not displayed when loading an incorrect file path in stand-alone mode.

## 26.2.7 (2024-07-30)

### PDF Viewer

#### Bug Fixes

- `#608779` - Now, the signature field value is not removed from `formFieldCollections` when updating visibility programmatically.

## 26.2.5 (2024-07-26)

### PDF Viewer

#### Bug Fixes

- `#I605917` - Now, duplicate form fields are not added to the collection when loading the provided document.
- `#I610387` - Now, the spinner shown properly when we click the save button in the organize dialog.
- `#I611496` - Now, the page render request is sent correctly when the `zoomMode` is set with a specific viewer container size and the page render request is not sent if `restrictZoomRequest` is set to true and `enableTileRendering` is set to false.

## 26.2.4 (2024-07-24)

### PDF Viewer

#### Bug Fixes

- `#I604925` - Now, the stamp annotation is updated correctly in the downloaded PDF.
- `#I609434` - Now, the `Approved` stamp rendered properly in the stand-alone PDF viewer when exporting/importing as an object.
- `#I603747` - Now, the PDF document is loaded properly in the PDF Viewer when disposing of the PdfRenderer object.

## 26.1.42 (2024-07-16)

### PDF Viewer

#### Bug Fixes

- `#I592444` - Now, the size of the focused free text annotation remains unchanged when pressing the Alt key.
- `#I609398` - Now, the script error does not occurs when selecting the custom stamp with customized `stampSettings`.
- `#I608331` - Now, the `FormFieldRemove` event is not triggered when resizing the form field.
- `#I609661` - Now, the Pages are rendered properly when navigating to the pages using the `goToBookmark` method.
- `#F189033` - Now, the print preview images are displayed properly on the Safari browser on an iPhone device.

## 26.1.41 (2024-07-09)

### PDF Viewer

#### Bug Fixes

- `#I605035` - Now, the script error does not occurs when using display mode as type alone in signature field.
- `#I605293` - Now, the script error does not occurs when updating the PDF Viewer height value programmatically on mobile devices.
- `#I601076` - Now, the annotation with author and subject are not missing in downloaded PDF.
- `#I602512` - Now, the comment `div` is no longer created when an annotation is pasted onto a different page.

## 26.1.40 (2024-07-02)

### PDF Viewer

#### Bug Fixes

- `#I598100` - Now, when importing the position of the exported ink annotation is correct.
- `#I598074` - Now, the annotations are not missing in `annotationCollection` after undo action.
- `#I599164` - Now, the highlight position is working properly for OCR documents in client and server-side rendering.
- `#I597488` , `#I599166` - Now, the page rendering performance has been increased.
- `#I599114` - Now, the required page requests are only sent when we scroll using the mouse or touchpad.
- `#I598716` - Now, the signature field indicator is placed in correct position in the provided document without `FormDesigner` module.
- `#I598109` - Now, the performance issue did not occur when updating multiple form fields at once.

## 26.1.39 (2024-06-25)

### PDF Viewer

#### Bug Fixes

- `#I598098` - Now, the undo function works properly when the ink annotation mode is not ended after adding.
- `#I599963` - Now, the form field property name updates correctly when added programmatically.
- `#I587763` - Now, the form field value that starts with `«` will be visible in the downloaded document.
- `#I597258` - Now, the thumbnail image is loaded properly when using `IDistributedCache` only as parameter.
- `#I600864` , `#I58620` , `#I601654` - Now, the blank page does not appear when loading the customer-provided document in server-side rendering.
- `#I599889` - Now, able to include the capital `H` in the text fields without `FormDesigner` module.
- `#I595214` - Now, the locked Custom stamp is not able to edited when opened in Adobe.

## 26.1.38 (2024-06-19)

### PDF Viewer

#### Bug Fixes

- `#I589042` - Now, the textbox field font size is does not increase automatically when zoom percentage increases.
- `#F188158` - Now, script error does not occurred when searching the non-matched word in the provided document.
- `#I587591` - Now, the stamp is updated correctly after reloading the resized stamp.
- `#I593317` - Now, the signature and initial background color is preserved upon reloading the downloaded document.
- `#I591009` - Now, the radio button name does not changes upon reloading the downloaded document.
- `#I591558` - Now, the ink annotation comment was not missing when importing the annotation sequentially in Stand-alone mode.
- `#I586497` - Now, the stamp annotation rendered properly when the PDF document is loaded with `EditContent` restrictions.
- `#I590035` - Now, the handwritten signature is exported properly when the `isSignatureEditable` API is set to true.
- `#I587843` - Now, the checkbox state is properly preserved when saving the provided document, even though the form designer module was not injected.
- `#I591558` - Now, the selector style applied for programmatically added annotation.
- `#I588798` - Now, the date time in the comment panel is not updated automatically upon export and import after locking annotations.

## 26.1.35 (2024-06-11)

### PDF Viewer

#### Bug Fixes

- `#I591752` - Now, the textbox field and comment panel focused when entering `Shift + H` and `Shift + V` characters.

#### Features

- Experience seamless page movement, allowing you to reorder pages effortlessly.
- Effortlessly duplicate pages to better manage your documents.
- Quickly undo or redo changes made within the organize pages dialog for a smoother editing experience.
- Enabled minimum and maximum zoom settings in the PDF Viewer for enhanced control over zoom levels.

## 25.2.7 (2024-06-04)

### PDF Viewer

#### Bug Fixes

- `#I583706` - Now, the PDF Viewer scroll bar was not updated after deleting the existing value using API from the signature field.
- `#I587314` - Now, the text markup annotations is properly locked using isLock and `isCommentLock` properties.
- `#I589575` - Now, the links are loaded correctly when navigate and return to same page.
- `#I581546` - Now, able to download PDF from AWS S3 signed URL in mobile device.
- `#F188158` - Now, script error does not occurred when searching the non-matched word in the provided document.

## 25.2.6 (2024-05-28)

### PDF Viewer

#### Bug Fixes

- `#I586371` - Now, the page does not become unresponsive when search multiple text.
- `#I586065` - Now, the `isDocumentEdited` API is set to true after making changes in the organize dialog.
- `#I587851` - Now, the signature field saved properly when using the provided code snippet for the customer.
- `#I585582` - Now, the text selection is working properly for OCR documents in client-side rendering.
- `#I586473` - Now, the signature dialog opens properly when using the provided code snippet for the customer on a mobile device.
- `#I574463` - Now, the script error does not occur when updating form fields in non-rendered pages.

## 25.2.5 (2024-05-21)

### PDF Viewer

#### Bug Fixes

- `#I582982` - Now, the Undo does not retains the deleted annotation in annotation collection.
- `#I577813` - Now, the document is loading properly without any script errors when a value has already been included in the session storage by default.
- `#I580839`, `#I580793` - Now, the extra page is not appeared in the print preview when print the provided document.
- `#I586052` - Now, able to use markup annotations over shape annotations.
- `#I583019` - Now, the annotation collection and action collection will match in multiple undo.
- `#I582676` - Now, the annotation order in the comment panel does not change when adding new annotations in client-side rendering.
- `#I586408` - Now, the form field ID is not missing in `FormFieldResizerArgs` event.
- `#I577318`, `#I577549` - Now, the `deleteFormField` method is working properly for the non-render pages.
- `#I582388` - Now, the form field tab order is working properly for the customer-provided document.
- `#I583890` - Now, the Edit and Delete option will get disabled when use `isCommentLock`.

## 25.2.4 (2024-05-14)

### PDF Viewer

#### Bug Fixes

- `#I575320` - Now, the Form Fields data does not wrongly appear when exporting.
- `#I581452` - Now, the form field background and border color are set to transparent properly.
- `#I585089` - Now, the annotation selector is properly removed when undoing annotations in select mode.
- `#I575320` - Now, the Form Fields data does not wrongly appear when exporting.

## 25.2.3 (2024-05-08)

### PDF Viewer

#### Bug Fixes

- `#I51830`- Now, the form field signature does not shift upwards every time the document is saved.
- `#I573912` - Now, the custom image signature does not appears bold when opening the saved document.
- `#I576319` - Now, the `extractTextCompleted` event was triggered properly in client-side rendering.

## 25.1.42 (2024-04-30)

### PDF Viewer

#### Bug Fixes

- `#I580966` - Now, the script error will not occur after deleting the stamp annotation with customized annotation selector settings.
- `#I582426` - Now, the old JSON data will be imported in PDF Viewer without any issues.
- `#I576350` - Now, the customer-provided document will be downloaded without any issues or script errors.
- `#I576386` - Now, the script error will not occur after removing the `selectorLineDashArray` property.
- `#I572623` - Now, the signature rendered properly after loading the customer-provided document in client-side rendering.

## 25.1.41 (2024-04-23)

### PDF Viewer

#### Bug Fixes

- `#I578038` - Now, the script error will not occur after resizing the annotations for ink, stamp and signature annotations.
- `#I558650` - Now, the customer document will get loaded without any issue or script error.
- `#I573798` - Now, the form fields are properly preserved in the provided document when saving it.
- `#I574104` - Now, the cursor position change when pressing the left and right arrow keys in the text box fields.
- `#I572302` - Now, the form field validation event was not triggered when the Form Designer module was removed.
- `#I559996` - Now, the freeText annotations are updating properly with editAnnotation method.

## 25.1.40 (2024-04-16)

### PDF Viewer

#### Bug Fixes

- `#I571265` - Now, the author name is not changed for shape and free text annotations upon saving the document.
- `#I572045` - Now, the transparent background color is not changed to black upon importing exported annotation and saving the document.
- `#I572061` - Now, the Stand-alone saved PDF document with a `Not Approved` dynamic stamp does not throw an error when opened in Adobe.
- `#I569884` - Now, the script error is not occurred when setting the text markup annotation module to false.
- `#F187662` - Now, the exception is not occurred when right clicking the form fields in the provided document.
- `#I572289` - Now, the exception does not occur when dynamically loading PDF documents in Stand-alone mode.

## 25.1.39 (2024-04-09)

### PDF Viewer

#### Bug Fixes

- `#I571236` - Now, the extra border will not appear on the page for the image element in the tagged PDF.
- `#I569364` - Now, the form field click event is triggered properly for radio button in the customer provided document.
- `#I570815` - Now, the unload request has not been triggered in the Stand-alone PDF Viewer on reloading the current page.

## 25.1.38 (2024-04-02)

### PDF Viewer

#### Bug Fixes

- `#I565875` - Now, the page does not navigate to undefined when loading the provided PDF document.
- `#I559473` - Now, the thickness value is properly loaded when loading float thickness value annotations on the server side.
- `#I567299` - Now, does not throw `NullReferenceException` when loading Empty PDF document.
- `#I567306` - Now, the annotations are not shifted to the left in landscape documents.

## 25.1.37 (2024-03-26)

### PDF Viewer

#### Bug Fixes

- `#I561320` - Now, the undo has restored the programmatically deleted annotations.
- `#I562878` - Now, the custom data is not missing from deleted annotation properties when initializing settings with custom data.
- `#I565199` - Now, the annotation custom data is not missing in `AnnotationSelect` events.
- `#I563333` - Now, the comments cannot be edited when the annotation is locked.
- `#I874338` - Now, the locked annotations are preserved properly when importing the annotation.
- `#I566765` - Now, the create and clear buttons are not enabled if the text box is empty in the text signature tab.
- `#I564309` - Now, the script error not occurred when dynamically updating toolbar items without annotation module.
- `#I564643` - Now, the form fields are rendered properly after deleting it from the customer document.

## 25.1.35 (2024-03-15)

### PDF Viewer

#### Bug Fixes

- `#I557034` - Now, the text markup content is preserved properly in the exported JSON for multiline annotations.
- `#I559996`, `#I556643` - Now, the author’s name does not update automatically upon moving the annotations.
- `#I560732` - Now, the empty file is not exported if the added annotations are deleted through the context menu delete option.
- `#I559473` - Now, the exporting rectangle annotation with custom thickness is working properly.

#### Features

- `#I551138`, `#I553282` - Implemented functionality to manage PDF page organization, including insertion, deletion, and rotation in the PDF Viewer.
- `#I325358`, `#I336517`, `#I355078` - Enabled customization of context menu items in the PDF Viewer by introducing the `addCustomMenu` API for adding custom menu items. Additionally, provided the `customContextMenuSelect` and `customContextMenuBeforeOpen` events to enhance flexibility and control over context menu interactions within the PDF Viewer.
- `#I516224` - Implemented the ability to programmatically control the opening and closing of the bookmark pane in the PDF Viewer through the introduction of the `openBookmarkPane` and `closeBookmarkPane` APIs. This allows users to conveniently interact with the bookmark pane within the PDF Viewer interface.
- `#I515986` - Introduced events, namely `pageRenderInitiate` and `pageRenderComplete`, in the PDF Viewer to provide notification regarding the initiation and completion of page rendering processes. These events offer users enhanced control and insights into the rendering workflow within the viewer interface.
- Integrated keyboard accessibility shortcuts and options for custom key commands using the `commandManager` API in the PDF Viewer, utilizing properties such as `keyboardCommand.name` for specifying custom command names and `keyboardCommand.gesture` for defining custom key gestures.
- `#I477482`- Enhanced support for rendering custom appearance stamp images in the PDF Viewer.
- Implemented support for utilizing PNG format images in the Stand-alone PDF Viewer for adding images to handwritten annotations, custom stamps, signatures, and initial form fields. Previously limited to certain formats like JPEG, now PNG images can also be saved and rendered for these purposes.

## 24.2.9 (2024-03-05)

### PDF Viewer

#### Bug Fixes

- `#I547297` - Now, the data property was updated properly in the `addSignature` event.
- `#I556216` - Now, the download was working properly for the provided document.
- `#I556594` - Now, the script error does not occur when programmatically changing the font size in mobile mode.

## 24.2.8 (2024-02-27)

### PDF Viewer

#### Bug Fixes

- `#I549538` - Now, the selected value and index of the dropdown are updated correctly for dropdown lists that are not selected.
- `#I550956` - Now, the comments do not overlap when the author name has more characters.
- `#I545417` - Now, dynamically show and hide the text search pane is working properly.
- `#I553949` - Now, the check box appearance is properly displayed on iOS devices.
- `#I558011` - Now, the form fields are rendered properly after pinch zooming in mobile mode.
- `#I553568` - Now, the `ValidateFormFields` event is triggered properly, even though the form designer module was not injected.

## 24.2.7 (2024-02-20)

### PDF Viewer

#### Bug Fixes

- `#I548067` - Now, the freetext annotation is able to be added to a specific page in the provided document.
- `#I550522` - Now, the text search does not fail to highlight the last character on a page.
- `#I551213` - Now, the pending ajax requests were properly aborted when unloading the PDF Viewer.

## 24.2.6 (2024-02-15)

### PDF Viewer

#### Bug Fixes

- `#I548067` - Now, the freetext annotation is able to be added to a specific page in the provided document.
- `#I550522` - Now, the text search does not fail to highlight the last character on a page.

## 24.2.5 (2024-02-13)

### PDF Viewer

#### Bug Fixes

- `#I543533` - Now, the `annotationPropertiesChange` event is triggered when updating the freetext annotation value for the first time.
- `#I549061` - Now, the text markup selection is working properly in mobile devices.
- `#I547297` - Now, the canvas within the Signature dialogue container is now centred for mobile view, and in the mobile view, the data property has been included in the `addSignature` event arguments.
- `#I549061` - Now, the tree text annotation selector is resized after programmatically changing font size.
- `#I549061` - Now, the page does not zoom when selecting the free text annotation on a mobile device.
- `#I542451` - Now, the background color of the freeText annotation does not appear as black after downloading the document in a Stand-alone PDF Viewer.

## 24.2.4 (2024-02-06)

### PDF Viewer

#### Bug Fixes

- `#I544458` - Now, the tooltip content is not displayed for read-only form fields in preview mode.
- `#I542660` - Now, the annotation collection was properly updated when performing undo and redo.
- `#I538222` - Now, the annotations are appeared properly in the MVC package in the provided rotated PDF document.
- `#F186268` - Now, the measurement value is retained when downloading the document in a Stand-alone PDF Viewer.
- `#F186304` - Now, the measurement scale ratio value does not get swapped when opened again after setting it in the scale ratio property dialog.
- `#I541860` - Now, the radio button position is not changed when downloading the document after zooming in PDF Viewer MVC.
- `#I544942` - Now, the `exportAnnotationsAsBase64String` functionality is working properly.

## 24.2.3 (2024-01-31)

### PDF Viewer

#### Bug Fixes

- `#I542557` - Now, multiline textbox field is not able to resize without form designer mode.
- `#I537053` - Now, the highlight button does not appear focused even after being clicked again.
- `#I537971` - Now, the signature content is visible when loading the customer provided PDF document.
- `#I545609` - Now, the current page does not change when selecting 400% from the zoom drop-down.
- `#I537057` - Now, the font sizes of the input element items in the toolbar does not vary across different themes.
- `#I537061` - Now, the vertical alignment of toolbar items does not vary across different themes.
- `#I538873` - Now, the text search is working properly in the Stand-alone PDF Viewer.
- `#I545609` - The text selection in the Stand-alone PDF Viewer now works properly when zoomed in above 100%.
- `#I539013` - Scrolling now works even if the annotation module is not injected on iPad and iPhone devices.
- `#I533379` - Now, the freetext fill color is updated correctly.
- `#I539640` - Now, the ink annotation is rendered properly in the downloaded document in Stand-alone PDF Viewer.

## 24.1.47 (2024-01-23)

### PDF Viewer

#### Bug Fixes

- `#I537869` - Now, the text markup annotation comments are properly displayed after exporting and importing the text markup annotation.
- `#I538222` - Now, the annotations are appeared properly in the provided rotated PDF document.
- `#I536060` - Now, the form field values export programmatically when updating the `isChecked` property on checkbox.

## 24.1.46 (2024-01-17)

### PDF Viewer

#### Bug Fixes

- `#I533753` - Now, only the formFieldSelect event is called when select the `formField`.
- `#I537980` - Now, the form fields have rendered properly without injecting the annotation, text selection, and text search modules.
- `#I536567` - Now, duplicate comment and replay content are not added to the annotation when exporting/importing the text markup annotation.
- `#I537955` - Now, programmatically opening the handwritten signature dialog is works properly after opening the Initial dialog.
- `#I536470` - Now, a script error is not occurs when rapidly adding a TextBox across multiple pages.

## 24.1.45 (2024-01-09)

### PDF Viewer

#### Bug Fixes

- `#I529642` - Now, the `strikethrough` is properly preserved in the provided document when downloading it and opening it in other viewers.
- `#I527440` - Now, the thumbnail PDF is retaining the position for larger pages after rotating a single page in PDF document.
- `#I529806` - Now, the DOM elements related to the PDF Viewer control are properly destroyed after destroying the PDF Viewer control.
- `#I533430`, `#I533962` - Now, the provided documents are loading in the Stand-alone PDF Viewer.
- `#I532281` - Now, the landscape documents are properly re-rendered in the Stand-alone PDF Viewer.
- `#I524631` - Now, the custom stamp options are not being removed in the custom stamp menu when updating after control initialization.
- `#I531042` - Now, the custom data of the annotation is properly preserved after undoing the deletion of the imported annotation.
- `#I533144` - Now, the documents load properly in the Stand-alone PDF Viewer when using the document path and open option alternatively.
- `#I537955` - Now, programmatically opening the handwritten signature dialog is works properly after opening the Initial dialog.

## 24.1.44 (2024-01-03)

### PDF Viewer

#### Bug Fixes

- `#I529607` - Now, the formatting is not applying to extraneous line spacing in freetext annotation for PDF Viewer and downloaded document.

## 24.1.43 (2023-12-27)

### PDF Viewer

#### Bug Fixes

- `#I499403` - Now, the import functionality is working for the given custom stamp annotation.
- `#I525379` - Now, the PDF pages are rendered properly when zooming in the provided PDF document on the client-side rendering.
- `#F185745` - Now, the calibrate distance annotations is not flip when downloading the document and opening it in the other viewers.
- `#I529609` - Now, the annotation time does not change in the comment panel without making any changes.
- `#I529723` - Now, the radio button size does not enlarge when copied, pasted, or dragged.
- `#I529705` - Now, the annotations are displayed after importing XFDF file.

## 24.1.41 (2023-12-18)

### PDF Viewer

#### Bug Fixes

- `#I522001` - Now, the `RenderPdfPages` request is not triggered twice when the `zoomMode` is set during the initial loading.
- `#I526468` - Now, the position of the free text annotations does not shift when double-clicking the annotation in the provided document.
- `#I525845` - Now, the read-only radio buttons are properly preserved in the saved document.

#### New Features

- Introduced support for adding multiple new items within the built-in toolbar, offering users the ability to customize and expand their toolbar options.
- Introduced keyboard-based navigation features to improve the user experience, allowing individuals to navigate the PDF Viewer with greater efficiency.

## 23.2.7 (2023-12-05)

### PDF Viewer

#### Bug Fixes

- `#I526059` - Now, the export Annotations is working in the presence of subject property in `annotationSettings`.
- `#I525692` - Now, the stretch fit mode has been appropriately implemented for the signature image content within the signature and initial field.

## 23.2.6 (2023-11-29)

### PDF Viewer

#### Bug Fixes

- `#I518113` - Now, the provided document is properly loaded and scrolls without getting stuck or freezing.
- `#I517738` - Now, the text selection is working properly while selecting the text from left to right.
- `#I521831` - Now, The script error is resolved when the read only property of the form fields were updated as true.
- `#I510393` - Now, the script error has been resolved while loading a provided PDF document.
- `#I521824` - now, when the read-only radio button is clicked, the undo button does not get automatically enabled.

## 23.2.5 (2023-11-23)

### PDF Viewer

#### Bug Fixes

- `#I517898` - Now, the radio button's background color does not shifts to white automatically.
- `#I507874` - Now, circles with graphics are rendered properly when loading the specific document.
- `#I517892` - Now, the read-only radio button does not gets automatically selected.
- `#I517897` - Now, the background color is not changed for read-only dropdown, checkbox and radio button fields in other viewers while saving the document.

## 23.2.4 (2023-11-20)

### PDF Viewer

#### Bug Fixes

- `#I512867` - Now, the transparency in the border color for the checkbox is being maintained when the document is loaded.
- `#I515960` - Now, the mouse cursor position is properly updated for multiline fields when clicked.

## 23.1.44 (2023-11-07)

### PDF Viewer

#### Bug Fixes

- `#I511552` - Now, the `openThumbnailPane` method does not close the thumbnail pane.
- `#I509218` - Now, The thumbnail pane is now rendered properly when opened programmatically.
- `#I509483` - Now, the issue of loading the provided PDF document has been resolved.
- `#I510606` - Now, the opacity value is properly preserved in the free annotation if it is set as zero programmatically.
- `#I513923` -Now, the script error is resolved when loading a document using the created event.

## 23.1.43 (2023-10-31)

### PDF Viewer

#### Bug Fixes

- `#I511694` - Now, The script error is resolved when export the annotation as object after adding the handwritten signature.
- `#I511005` - Now, the programmatically added stamp annotation is visible in the PDF Viewer.
- `#I508032` - Now, the signature fields are not placed outside the page when placed between pages.
- `#I508421` - Now, the redo operations on free text annotations is working properly.

#### New Features

- `#I504779` - Provided support to programmatically add and update the annotation subject property.

## 23.1.42 (2023-10-24)

### PDF Viewer

#### Bug Fixes

- `#I509234` - Now, the multiline property is properly updated when the `updateformfields` API is called programmatically.
- `#I509208` - Now, the script error no longer occurs when adding the signature event without injecting the form fields.

## 23.1.41 (2023-10-17)

### PDF Viewer

#### Bug Fixes

- `#I503904` - Now, the missing properties have been included in the form field collections.
- `#I506233` - Now, the dropdown list does not open when selecting the dropdown field in designer mode.
- `#F184471` - Newline characters are now correctly retained in the saved document when saving a document with numerous free text annotations.
- `#I505498` - Now, the thumbnail highlighting functions correctly when scrolling and viewing rotated pages.
- `#I507503` - Now, clicking again the same bookmark after scrolling ,the bookmark is navigated correctly.
- `#I504089` - Now, the search is working when the Enter key is pressed continuously in the Public API.
- `#I501644` - Now, the Stack Overflow exception is not occurred while loading the 6000 bookmarks document.

## 23.1.40 (2023-10-10)

### PDF Viewer

#### New Features

- `#I497356`,`#I505447`,`#I506487` - Now, users can set the resource URL for assets or the public directory. The Stand-alone PDF Viewer will load its custom resources from this URL.

#### Bug Fixes

- `#I506873` - Now, the `AnnotationMove` and `AnnotationResize` events are triggered for the respective actions of the annotations.
- `#I503362` - Now, the author name is updated properly in the comment panel when adding annotations programmatically.
- `#I505753` - Now, the annotation comment text is rendered correctly, and it is possible to add a reply comment after importing the annotation.

## 23.1.39 (2023-10-04)

### PDF Viewer

#### Bug Fixes

- `#I497739` - Now, the comment panel close and more buttons are properly displayed in mobile mode.
- `#I485341` - Now, the free text annotation does not resizes automatically on first click when enable autofit is set to true.
- `#F184471` - Now, when saving a document with free text annotation, newline characters are properly preserved in the saved document.
- `#I502323` - Now, the form field names do not get duplicated when we add them programmatically or through the UI.
- `#I499440`, `#I505546` - Now, the comment panel value for the ink annotation is added with the provided author value.

## 23.1.38 (2023-09-26)

### PDF Viewer

#### Bug Fixes

- `#I498978` - Now, the tooltip will not be displayed when no value is provided for the tooltip on radio buttons and checkboxes fields.
- `#I498981` - Now, the tooltip is not visible after deleting the tooltip value for the dropdown field.
- `#I494968` - Now, the annotation toolbar opens properly in mobile mode when `isAnnotationToolbarOpen` is set to TRUE.
- `#I495804` - Now, the loading indicator is enabled while the document is being zoomed.
- `#I497662` - Now, the close button in the comment panel is properly hidden when switching from mobile mode to desktop mode.
- `#I497663` - Now, the annotation toolbar shows properly if the comment panel is opened while enabling desktop mode on a mobile device.
- `#I497269` - Now, the read-only multi-line text box field is not resized in form preview mode.
- `#I498984` - Now, the tabs within the form field properties do not navigate when swiping over labels.
- `#I498244` - Now, the allowed interaction is respected when creating locked annotations.
- `#I496823` - Now, the form field hover does not disappears after adding many form fields.
- `#I497857` - Now, the cursor position is updated properly when clicking the content in the text box field.
- `#I496823` - Now, it is possible to resize the form fields if placed at the edge of the page.
- `#I498980` - Now, if the value of the radio button is null, then the name of the radio button is automatically assigned to the value.
- `#I502251` - Now, the content of the annotation comment is properly exported in the exported object.

## 23.1.36 (2023-09-15)

### PDF Viewer

#### New Features

- `#I472310` - Provided support to render the digital signature appearance in the exported images using the 'Export as Image APIs'.
- `#I445342` - Provided support to enable or disable the lock on comment replies for annotations.
- `#I320602`, `#I332921`, `#I335469`, `#I334005`, `#I336580`, `#I338402`, `#I340993`, `#I342275`, `#I342451`, `#I344418`, `#I345156`, `#I297938`, `#I374753`, `#F156674`, `#379682`, `#I379543`, `#I381844`, `#I428937`, `#I448747`, `#I450636`, `#I448292`, `#I453737`, `#I453781`, `#I494648`, `#I495352` - Provided support for client side rendering using the PDFIUM Web Assembly.
- Provided support to restrict file downloads when exporting form fields and annotations using the event argument "cancel".

#### Bug Fixes

- `#I489522` - Now, when annotations are double-clicked, the `isDocumentEdited API` no longer switches to the TRUE state.
- `#I492457` - Now, the page renders properly after zooming in and out when the provided PDF document is loaded.
- `#I488322` - Now, the annotations exported from the older version are imported into the latest version
- `#I491908` - Now, the type of handwritten signature in Arabic language is retained when downloading the document.
- `#I490945` - Now, the rotation of the annotations is properly preserved when importing them before rendering the pages.

## 22.2.11 (2023-08-29)

### PDF Viewer

#### Bug Fixes

- `#I490803` - The script error is now resolved when deleting annotations from different pages.
- `#I490484` - The comment panel value in the ink annotation is added in the provided document.
- `#I489551` - Now, the ink annotation in the provided document does not get duplicated.

## 22.2.10 (2023-08-22)

### PDF Viewer

#### Bug Fixes

- `#I489048` - Now, the Unload API is properly called for the respective components when we use multiple components on a page.
- `#I489448` - Now, it is possible to add form fields after a few pages with edited properties.
- `#I490199` - Now, the touch-based page scrolling is works as expected on simulated iOS/iPad devices.
- The issue with server side rendering in `Next.js` has been resolved.

## 22.2.9 (2023-08-15)

### PDF Viewer

#### Bug Fixes

- `#I487346` - The free text annotation is now visible during printing when the free text annotation settings is customised.
- `#I489176` - Now, the line type annotations are drawn properly on mobile devices after zooming.

## 22.2.8 (2023-08-08)

### PDF Viewer

#### Bug Fixes

- `#I484429` - Now, the error does not occur when we programmatically delete the added annotation.
- `#I485416` - Now, the ink annotations are rendered properly after programmatically adding the highlight annotation.

## 22.2.7 (2023-08-02)

### PDF Viewer

#### Bug Fixes

- `#F183545` - Now, the scale ratio is being applied when we set it in the measure settings object.
- `#I481837` - Now, when updating the form field to be read-only programmatically, it is functioning properly for the pages that are not rendered.

## 22.2.5 (2023-07-27)

### PDF Viewer

#### Bug Fixes

- `#I481075` - Now, the link navigation is working properly in the provided document.
- `#I481233` - Now, the selected value of the dropdown field is properly preserved in the downloaded document when we programmatically set the form fields to be read-only.
- `#I479497` - Now, the annotations are locked properly when setting the isLock to true in `annotationSettings`.

## 22.1.39 (2023-07-18)

### PDF Viewer

#### Bug Fixes

- `#I476124` - Now, able to cut, copy and paste the comments on the comment panel using keyboard shortcuts.
- `#I475392` - Now, `Ctrl + Z` does not removes the entire comment text while editing the comment.
- `#I478671` - Now, annotations have been rendered and no script error occurred while loading the given document by setting the `enableMeasureAnnotation` to false.
- `#I464868` - Now, we can automatically select the placeholder text in the comment panel for the FreeText annotation without having to set the `defaultText` in `freeTextSettings`.
- `#I480522` - Now, the deleted imported annotations do not appear when we resize the PDF Viewer.
- `#F182930` - Now, the script error no longer occurs when updating the values for the signature and initial fields that have the same name, which are found in pages that are not being rendered.
- `#I477780` - Now, we are able to add the annotations properly using the add annotation API.

## 22.1.38 (2023-07-11)

### PDF Viewer

#### Bug Fixes

- `#I476114` - Now, the text selection is properly preserved in the comment panel for text markup annotation.
- `#I470260` - Now, the signature content prints properly in the printed outputs.
- `#I475929` - Now, the annotation's `isReadonly` behavior is working properly when the `allowedInteractions` set to Select and the isLock property is set to true.

## 22.1.37 (2023-07-04)

### PDF Viewer

#### Bug Fixes

- `#I473387` - Now, the `fontStyle` object is properly preserved in the annotationSelect event argument if we apply strikeout after underline.
- `#I472962` - Now, the `isStrikeout` property is properly preserved in the annotationSelect event argument when applying the underline programmatically.
- `#I470103` - Now, the ink annotation mode is maintained when resizing the PDF Viewer container.
- `#I473639` - Now, the ink annotation is preserved in the downloaded document when session storage exceeds in the application.
- `#I473865` - Now, the content of the typed Handwritten signature position is properly preserved in downloaded document.

## 22.1.36 (2023-06-28)

### PDF Viewer

#### New Features

- `#I832710` - Now, we can restrict the file download of export annotation and form fields.

#### Bug Fixes

- `#I470152` - Now, when making the form fields read-only, the background color is visible.
- `#I473505` - Now, the PDF pages are rendered properly for the provided PDF file.
- `#I472797` - Now, the wrap box for free text annotation automatically updates when changing the font size if the autofit property is set to true.
- `#I473873` - Now, the content of the typed handwritten signature is properly preserved in the saved document.

## 22.1.34 (2023-06-21)

### PDF Viewer

#### Bug Fixes

- `#I464829` - Now, we can select text in the comment panel using the mouse cursor.
- `#I464868` - Now, the default placeholder text is automatically selected when the comment text box for free text annotation is in focus.
- `#I430769` - Now, when the document is reloaded, exported, or imported into the PDF viewer, the order of the annotations is preserved.
- `#I472757` - Now, the custom Stamp is not removed when downloading the document after undo and redo.

#### New Features

- `#I426363`, `F180068` – Provided the support for value property in the radio button and checkbox field.
- `#I448261` – Exposed the API to load the number of pages on the initial loading.

## 21.2.9 (2023-06-06)

### PDF Viewer

#### Bug Fixes

- `#I464832` - Now, we can able to edit the first comment of the text markup annotation.
- `#I464832` - Now, the words within the comments are split for readability.
- `#I464992` - Now, enabling the form designer toolbar programmatically activates the form designer mode.
- `#I466770` - Now, able to edit the free text annotation content programmatically and the content does not change while exporting.
- `#I465319` - Now, adding a free text annotation shows its content once in the comment panel.
- `#I464819` - Now, web service not listening does not occur when loading the provided PDF file.

## 21.2.8 (2023-05-30)

### PDF Viewer

#### Bug Fixes

- `#I464823` - Now, able to edit the annotation comments when cursor is placed in the textbox.
- `#I464868` - Now, when double-clicking the free text annotation comment, the comment is focused.
- `#I438900` - Now, double tap zooming is working after signing the signature field.
- `#I438900` - Now, double tap zooming is working on iOS devices even if annotation module is not injected.
- `#I467181` - Now, the tab key is working when we add PDF Viewer and input elements in the same page.
- `#I467222` - Now, the `triggerAnnotationPropChange` event is not triggered multiple times when adding the free text annotation programmatically.
- `#I464511` - Now, the content of the free text annotation does not changes when we click outside of it.
- `#I463293` - Now, the form fields are placed properly while zoom in or zoom out in mobile device.

## 21.2.5 (2023-05-16)

### PDF Viewer

#### Bug Fixes

- `#I460490` - Now, the signature style is saved when we save the typed signature option.
- `#I460513` - Now, the exception does not occur when downloading the provided PDF file.
- `#I459487` - Now, the script error does not occur when importing the values programmatically.
- `#I461544` - Now, scrolling the multiline textbox field works when we set it to read-only.
- `#I462652` - Now, the form field validation works properly for non-rendered pages.
- `#I460704` - Now, the script error does not occur when pressing the delete key.

## 21.2.4 (2023-05-09)

### PDF Viewer

#### New Features

- `#I426363`, `F180068` – Provided support for value property in the radio button and checkbox field.

#### Bug Fixes

- `#I456051` - Now, the stamp annotations are displayed correctly in the provided document.
- `#I452436` - Now, the radio button and checkbox are added properly.
- `#I403367` - Now, underlining and text selection are working properly in the provided document.
- `#I456864` - Now, the download performance has been enhanced when downloading the provided document.
- `#I458313` - Now, the add annotation API working fine when the annotation object is given as input.

## 21.2.3 (2023-05-03)

### PDF Viewer

#### Bug Fixes

- `#F181471` - Now, deleted comment value will not appeared while importing the exported XFDF/JSON annotation data.
- `#I453496` - Now, when `enableAnnotation` is set to false, the script error does not happen while scrolling the document.
- `#I452488` - Now, large files are loaded through the document file path.
- `#F181447` - Now, the free text annotation content is changed properly while resizing.

## 21.1.41 (2023-04-18)

### PDF Viewer

#### Bug Fixes

- `#F181315` - Now, the `commentEdit` event is triggered when editing free text annotations.
- `#I452575` - Now, `clearFormFields` API deletes the signature content only and preserves form field.
- `#I449909` - Now, the image in the provided document is rendered properly.
- `#I449638` - The issue with Signature canvas content clearing on window resizing has been resolved.

## 21.1.39 (2023-04-11)

### PDF Viewer

#### New Features

- `#I448261` – Exposed the API to load the number of pages on initial loading.

#### Bug Fixes

- `#F181069` - Now, the fill color of the free text annotation is  preserved properly on XFDF import.
- `#F180774` - Now, the date format and time zone were correct when importing the annotations in the Azure app service.
- `#F181073` - Now, we can able to delete and set status of annotations last comment.
- `#I446702` - Now, the zooming operations for documents with mixed page orientations function correctly.
- `#F181068` - Now, the free text annotation is resized properly if a large content is added to the comment panel.
- `#I447783` - Reloading a PDF document with handwritten signatures on non-rendered pages are preserved properly.

## 21.1.38 (2023-04-04)

### PDF Viewer

#### Bug Fixes

- `#I180998` - Now, the date format is same while importing the exported annotations.
- `#I447985` - Now, the textbox and password fields value can be deleted by pressing the delete key.
- `#F181004` - Now, while attempting to delete the annotation from the comment panel working properly.

## 21.1.37 (2023-03-29)

### PDF Viewer

#### Bug Fixes

- `#F180886` - Now, the `setAnnotationMode` API supports switching between annotations.
- `#I181023` - Now, the time is shown properly in the comment panel while adding the free text annotation programmatically.
- `#I180982`, `#I180983` - Now, able to post a comment with single character or pasted content.
- `#I180968` - Now, red vertical lines are not showing in the highlight annotation on viewing the downloaded document on other viewers.
- `#F180997` - Now, the free text content is updated if we directly type in the comment panel.

## 21.1.35 (2023-03-23)

### PDF Viewer

#### Bug Fixes

- `#I437765` - Now, the script error does not occur when the update form field value API is used when a signature already has signature content.
- `#F180666` - Now, the exception does not occur while downloading the document after adding the type and uploading the handwritten signature and initial annotation.
- `#I428493` - Now, the signature image in the signature field is visible while printing in the other viewers changes made on the server side.
- `#I441773` - Now, the annotation positions are moving properly.
- Now, the `PDFium` package has been updated.
- `#I438960` - Now, the different culture date time is working properly while exporting annotations.
- `#I444307` - Now, the check box is not added to the left-most corner of the page.
- `#I444707` - Now, the signature dialog box footer button alignment is proper in the fluent theme.
- `#I440251` - Now, the typed handwritten signature is not broken into a new line after downloading and viewing in other viewers.
- `#I429508` - Now, the form fields appear properly in mobile mode.
- `#I433831` - The A4 document size is now properly set during printing.
- `#F180764` - Now, if you move the arrow or line annotations programmatically, their position won't be changed during export.
- `#I429549` - Now, the checkbox displays properly during the print preview.
- `#I436286` - Now that the enable shape annotation is false, the script error no longer occurs.
- `#I429775` - Now, the problem with some specific document's slow rendering has been resolved.
- `#I437396` - Now, when the page's zoom level is higher, the resizer will not enable inside the annotation.
- `#I435370` - Now, the border color is preserved properly for the transparent textbox field.
- `#I438421` - Now, the script error does not occur while loading an annotation restricted document when the `enableAnnotation` API is set to false.
- `#F180082` - Now, while adding the text markup annotation programmatically, the text markup content is added properly.
- `#I434198` - Now, the custom stamp is added properly on the form fields.
- `#I180081` - Now, when attempting to delete a post in the comment panel, the annotations are not deleted from the comment panel.
- `#I431466` - Now, the toolbar behavior is stable in mobile mode.
- `#I432820`, `#I432145`, `#F179720` - Now, the formFields with the same name in non-rendered pages are downloaded successfully.
- `#I429549` - Now, the checkboxes are no longer offset to the right in the print preview.
- `#I429288` - Now, the delete option for a draw signature type will be visible in the context menu.
- `#I431758` - Now, the checkboxes with the same name are correctly selected.
- `#I429416` - The checkbox layer is now rendered properly when loading the provided PDF document.
- `#I431679` - Now, the handwritten signature does not become empty when a random signature is added.
- `#I431466` - Now, the toolbar icon is properly visible in mobile mode.
- `#I431286` - Now, the radio button selector size is proper in the given document.
- `#I408530`, `#I428623` - Now, the free text annotations do not shift towards the left side in edit mode.

#### New Features

- `#I344527` - Now, the support provided is navigated to the next and previous signature field in the form designer.
- `#I443775` - Now, support is provided for the saving type and image signatures in the form fields.
- Now, the JSON structure has been modified based on the PDF library.
- `#I411856` - Now, support is provided to render the accessibility tags in the PDF Viewer.
- `#I426307` - Improvements to page rendering for zoom levels under 25% by using thumbnail images.
- Now, support is provided for the tab navigation in the form fields and form designer.

## 20.4.54 (2023-03-14)

### PDF Viewer

#### Bug Fixes

- `#I438960` - Now, different culture date time is working properly while exporting annotations.
- `#I444307` - Now, the check box is not added to the left-most corner of the page.
- `#I444707` - Now, signature dialog box footer button alignment is proper in fluent theme.
- `#I440251` - Now, typed handwritten signature is not broken into a new line after downloading and viewing in other viewers.

## 20.4.53 (2023-03-07)

### PDF Viewer

#### Bug Fixes

- `#I429508` - Now, the form fields appears properly in mobile mode.
- `#I433831` - The A4 documents size is now properly set during printing.
- `#F180764` - Now, if we move arrow/line annotations programmatically, their position won't be changed during export.
- `#I429549` - Now, the checkbox displays properly during the print preview.

## 20.4.52 (2023-02-28)

### PDF Viewer

#### Bug Fixes

- `#I436286` - Now, the script error is not occurred the enable shape annotation is set to false.
- `#I429775` - Now that the problem with some specific document's slow rendering has been resolved.
- `#I437396` - Now, when the page's zoom level is higher, the resizer will not enable inside annotation.

## 20.4.51 (2023-02-21)

### PDF Viewer

#### Bug Fixes

- `#I435370` - Now, the border color is preserved properly for transparent textbox field.
- `#I438421` - Now, the script error is not occurred while loading an annotation restricted document when `enableAnnotation` API is set as false.
- `#F180082` - Now, while adding the text markup annotation programmatically, the text markup content is added properly.

## 20.4.50 (2023-02-14)

### PDF Viewer

#### Bug Fixes

- `#I434198` - Now, the custom stamp is added properly on form fields.
- `#I180081` - Now, when attempting to delete a post in the comment panel, annotations are not deleted from the comment panel.
- `#I431466` - Now, the toolbar behavior is stable in mobile mode.
- `#I432820`, `#I432145`, `#F179720` - Now, formFields with same name present in non-rendered pages are download successfully.

## 20.4.49 (2023-02-07)

### PDF Viewer

#### New Features

- `#I426307` - Improvements to page rendering for zoom levels under 25% by using thumbnail images.
- Now, support provided for tab navigation in form fields and form designer.

#### Bug Fixes

- `#I429549` - Now, the check boxes are no longer offset to the right in the print preview.
- `#I429288` - Now, the deletion option for a draw signature type will visible in the context menu.
- `#I431758` - Now, the checkboxes with the same name are correctly selected.
- `#I429416` - Checkbox layer is now rendered properly when loading the provided PDF document.
- `#I431679` - Now, the handwritten signature does not now become empty when a random signature is added.
- `#I431466` - Now, the toolbar icon is properly visible in mobile mode.
- `#I431286` - Now, the radio button selector size is proper in the given document.
- `#I408530`,`#I428623` - Now, free text annotations does not shifted towards left side in edit mode.

## 20.4.48 (2023-02-01)

### PDF Viewer

#### Bug Fixes

- `#I425450` - Now, when exporting as XFDF, the border no longer displays on a free text annotation.
- `#F179811` - Now, the `AnnotationResize` event is triggered properly for the Line and Arrow annotation.
- `#I426541` - Now, the signature renders successfully even if the document contains an invalid signature field name.
- `#F179704` - If the `enableMeasureAnnotation` is set to false, the Annotation events for shape annotations are now properly triggered.
- `#I426591` - Now, the focus form field functions after programmatically updating the signature field.
- `#I427179` - Now, the blank pages print on the iPad printing issue has been fixed.
- `#I427451` - Now, the script error does not occur while changing the dropdown value.
- `#I427404` - Now, the signature field indicator sizes have been adjusted in consistent with the signature fields.
- `#I422857` - Now, the problem with the signature value disappearing from the collection while scrolling has been fixed.
- `#I411856` - Fixed the accessibility issues with the PDF Viewer component.
- `#I423893` - Now, the script error does not occur while double-clicking on the free text annotation.
- `#I427362` - Now, the checkbox background color is properly updated while rendering using the form field module.
- `#I427364` - Now, the button images are rendered properly while scrolling the document.
- `#I421445` - Now, the multiple Font-styles(bold, italic, underline, and strikeout) can be applied together for the textbox fields.
- `#I426174` - Now, the form fields that have been selected programmatically can be deleted by using the delete key.
- `#I422813` - Now, the value in the free text annotation will be updated properly in the mobile environment.
- `#I420988` - Now, the annotations are not deleted while dragging, resizing, or deleting the form fields.
- `#I422542` - Now, the `strikethrough` can now be added to the free text annotations programmatically.
- `#I424231` - Now, the issue with the document's signature disappearing has been fixed.

#### Features

- `#I424468` - Provided support for rendering the existing comb-type textbox in the form designer module.

## 20.4.44 (2023-01-18)

### PDF Viewer

#### Bug Fixes

- `#I426541` - Now, the signature renders successfully even if the document contains an invalid signature field name.
- `#F179704` - If `enableMeasureAnnotation` is set to false, the Annotation events for shape annotations are now properly triggered.
- `#I426591` -  After programmatically updating the signature field, the focus form field is now functioning.
- `#I427179` - Now, blank pages prints on iPad printing issue has been fixed.
- `#I427451` - Now, script error does not occurs while changing the dropdown value.
- `#I427404` - Now, the signature field indicator sizes have been adjusted in consistent with the signature fields.

## 20.4.42 (2023-01-04)

### PDF Viewer

#### Bug Fixes

- `#I422857` - Now, the problem with the signature value disappearing from the collection while scrolling has been fixed.
- `#I411856` - Fixed the accessibility issues with the PDF Viewer component.
- `#I423893` - Now, script error not occurs while double clicking on free text annotation.
- `#I427362` - Now, the checkbox background color is properly updated while rendering using form field module.
- `#I427364` - Now, the button images are rendered properly while scrolling the document.
- `#I421445` - Now, the multiple Font-styles(bold, italic, underline and strikeout) can be applied together for textbox fields.
- `#I426174` - Now, the form fields that have been selected programmatically can be deleted by using the delete key.
- `#I422813` - Now, value in the free text annotation will be updated properly in mobile environment.

#### New Features

- `#I424468` - Provided support for rendering the existing comb type textbox in form designer module.

## 20.4.40 (2022-12-28)

### PDF Viewer

#### Bug Fixes

- `#I420988` - Now, the annotations are not delete while drag, resize or deleting the form fields.
- `#I422542` - Now, the strike through can now be added to free text annotations programmatically.
- `#I424231` - Now, the issue with the document's signature disappearing has been fixed.

## 20.4.38 (2022-12-21)

### PDF Viewer

#### Bug Fixes

- `#F178667` - Now, the zero thickness property is applied to the form fields.
- `#I421990` - Updating read-only to false for a form field is working properly.
- `#I420531` - The free text annotations are no longer scaled on double clicks.
- `#F178453` - Cut, copy, and paste at the form fields are working properly on downloading.
- `#I419557` - The `IsPrint` property value of the text markup annotation is properly updated.
- `#I418726` - The draw and image type signatures are now preserved while changing the tabs on mobile devices.
- `#I420588` - Printing the PDF document that contains signature fields on non-rendered pages won’t throw script errors.
- `#I420304` - Programmatically updating the read only properties won’t throw script errors.
- `#I416032` - The radio button now triggers the form field click event.
- `#I420423` - The background color of the initial indicator settings can be applied programmatically while adding form fields.
- `#I422736` - Fixed issue with saving the PDF document on form fields export.
- `#I418731` - Export and import values of form fields with same name have been properly updated.
- `#I416298` - Focusing the signature and initial fields are proper on different zoom levels.
- `#I411856` - The issue with programmatically updating the initial indicator properties has been resolved.
- `#F178660` - Fixed issue with `RenderAnnotationComments` on the .NET 6.0 platform.
- `#I418199` - Programmatically updating images in the form fields won’t throw script errors.
- `#I408281` - Switching between the PDF view and the text view won’t throw script errors.
- `#I413254` - Aspect ratio is maintained for the image type signatures.
- `#F178250` - Now, the color palette is no longer obscured in the PDF Viewer.
- `#I178667` - Now, the text box's border color is properly updated and no longer hidden.
- `#I418214` - Session items of the older documents are cleared now.
- `#I178018` - Searching for a multiple-sentence phrase no longer causes the PDF Viewer to freeze.
- `#I421388` - Handwritten signatures will appear properly on loading the document again.
- `#F178018` - Now, the script issue no longer occurs when doing multiline searches in the Pdf document.

#### Features

- Form fields values can be exported to FDF and XFDF formats and the same can be imported into the PDF Viewer, programmatically.
- Digital signatures of the existing PDF documents are now rendered in the PDF Viewer.
- `#I369895`, `#I403367`, `#I406191` - Now, the text selection `strikethrough` has been improved.
- `#I419679` - Provided the support to show or hide the `FormDesignerToolbar` after document loading.
- `#I421694` - Angular applications renders PDF Viewer controls without ID properties by generating the ID internally, if not provided.
- `#I409823` - Margin can be set to the value was preserved for the free text annotation in the downloaded document.
- `#I412460` - Provided the support for retrying Ajax requests with a status code collection.

## 20.3.60 (2022-12-06)

### PDF Viewer

#### New Features

- `#I369895`,`#I403367`,`#I406191` - Now, improvements in text selection `strikethrough` for specific document.
- `#I419679` - Provided the ability to display or hide the `FormDesignerToolbar` after document loading.

#### Bug Fixes

- `#F178453` - Now, cut, copy and paste of form field are working properly on downloading.

## 20.3.59 (2022-11-29)

### PDF Viewer

#### New Features

- `#I421694` - Now, Angular applications may render PDF Viewer controls without ID properties.
- `#I409823` - Support was given for a custom margin property in the free text annotation.

#### Bug Fixes

- `#I419557` - Now, the `IsPrint` property values for text markup annotation have been properly updated.
- `#I418726` - Now, the draw and image signature is now preserved while changing tabs on mobile devices.
- `#I420588` - Now, the Script error does not occur while printing the document contains signature fields on non-rendered pages.
- `#I420304` - Now, the script error does not occur while updating read only property programmatically.
- `#I416032` - The radio button now triggers the form field click event.
- `#I420423` - Now, the background color of the initial indicator settings is now applied when adding form fields programmatically.
- `#I422736` - Fixed issue with saving PDF document on form fields export.

## 20.3.58 (2022-11-22)

### PDF Viewer

#### New Features

- `#I412460` - Now, the ability to support retrying Ajax requests with a status code collection.

#### Bug Fixes

- `#I418731` - Now, for fields with the same name, the export and import form fields' values have been properly updated.
- `#I416298` - Now, the focus for signature and initial fields are proper in different zoom levels.
- `#I411856` - The issue with programmatically updating the initial indicator properties has been resolved.
- `#F178660` - Fixed issue with `RenderAnnotationComments` on `.NET 6.0` platform.

## 20.3.57 (2022-11-15)

### PDF Viewer

#### Bug Fixes

- `#I418199` - Now, the Script error does not occur while updating the image in the form fields programmatically.
- `#I408281` - Now, the Script error does not occur while changing the PDF view to the text view in the sample.
- `#I413254` - Now, the aspect ratio value for the image type signature has been properly handled.
- `#F178250` - Now, the Color Palette is no longer obscured in the PDF Viewer.
- `#I178667` - Now, the text box's border color is now properly updated and no longer hidden.
- `#I418214` - Cleared session items for the older documents.
- `#I178018` - Now, searching for a multiple-sentence phrase no longer causes the PDF Viewer to freeze.

## 20.3.56 (2022-11-08)

### PDF Viewer

#### New Features

- `#I408588` - Touchpad pinch zooming has been implemented in Windows and Mac environments.

#### Bug Fixes

- `#I411644` - Now, Signature are added properly in the respective signature fields.
- `#I412264` - Now, Exposed the API for show and hide the digital signature form fields in the PDF Viewer.
- `#I408609` - Now, properties dialog and context menu are open on right click.
- `#I414492`,`#I414536` - Now, the Signature dialogue is vertical.
- `#I413111` - Now the Ink annotation auto-write issue is resolved.
- `#I406980` - Now, the Values of free text annotation properties are not missing on importing.
- `#I408171` - Now, Annotation added above free text annotation does not hide behind after downloading and flattening.
- `#I412525` - Now we are able to update form field values from code behind if the pages are not rendered.
- `#I408588` - Pinch zoom pivot point calculation for touch-based devices has been improved.

## 20.3.52 (2022-10-26)

### PDF Viewer

#### New Features

- `#I408588` - Mouse wheel zooming has been implemented based on cursor position. On iPad/iOS devices, the zooming issue has been fixed. and enhanced mobile device pinch zooming functionality.
- `#I409164` - Now the thickness property for signature and initial fields has been added, so now the signature field and initial field will allow changing their border thickness.

#### Bug Fixes

- `#I408281` - Now, The Script error does not occur while changing the PDF view to the text view in the sample.
- `#I412183` - Now, Vertical images are rendered properly in the signature fields.
- `#I397357` - Now, Radio buttons are rendered properly while printing the document.
- `#I411792` - Now, able to export annotation after `strikethrough`.
- `#I401159` - Now, backward text selection is working properly.

## 20.3.50 (2022-10-18)

### PDF Viewer

#### Bug Fixes

- `#I409189` - Now, no blank pages are created while printing the document.
- `#I411098` - Now, Form fields are rendered properly while printing the document.
- `#I405132` - Now, the copied text content from pdf document is contain the space lining.
- `#I409184` - Now, able to change the background color of Initial field indicator element.
- `#I409766` - Now, type signature is working properly.

## 20.3.49 (2022-10-11)

### PDF Viewer

#### Bug Fixes

- `#F177655` - Now we can select the search-highlighted text content.
- `#I408819`,`#I409541`,`#I409234` - Now, ink annotations are rendered properly while loading the document.
- `#I408950` - Now the script error does not occur when ink annotation moves out of the document.
- `#I409797` - Now, Form fields value are not missing on scrolling the pages using keyboard shortcut.
- `#I407919` - Now, Custom data property from free text annotation is updating in the imported annotation.

## 20.3.48 (2022-10-05)

### PDF Viewer

#### Bug Fixes

- `#I406164` - Now, the Ink annotations from the import JSON file present on the last page.
- `#I406143` - Now, the Page Index property is present in the form field collections while adding the form fields.
- `#I406883` - Now, the Deleted ink annotations do not exist after scrolling the document.
- `#I408609` - Now, the Keyboard shortcuts are working properly.
- `#I383963` - Now, the Form fields are allowed to rename without affecting any other field.
- `#I406552` - Now, The removal of fields from other pages is prevented while the field is programmatically focused.
- `#I406586` - Now, Ink annotation is not missing in the annotation collection.
- `#I408087` - Now, adequate space in the type signature field.
- `#I404936` - Now, Typed signature is appeared from the downloaded document.
- `#I406793` - Now, two custom stamps can't be selected at the same time.

## 20.3.47 (2022-09-29)

### PDF Viewer

#### New Features

- `#I391994` - The document download performance has improved for larger PDF files, over 5000+ pages.

#### Bug Fixes

- `#I397357` - Now, Radio button values update properly.
- `#I401805` - Now, Form fields updates proper value on download.
- `#I382837` - Now, Interaction on checkbox in mobile device is working fine.
- `#I404631` - Now, `isFormDesignerToolbarVisible=true` property opens in the Form designer toolbar.
- `#I385978` - Now, Free Text Annotations can be edited in iPhone, iPad and iPod Devices.
- `#I403614` - Now, the annotation signature key not found error is resolved in the customer document.
- `#I403632` - Now, custom stamp position is not wrong on mobile device.
- `#I404420` - Now, Selection of the closely placed Signature Field is improved in Mobile devices.
- `#I403607` - Now, the Add Signature event is triggered when adding the signature, and the Remove Signature event is triggered while removing the signature.
- `#I397357` - Now, Radio button values update properly.
- `#I401805` - Now, Form fields updates the proper value on download.
- `#I382837` - Now, the interaction on a checkbox in the mobile device is working fine.
- `#I404631` - Now, `isFormDesignerToolbarVisible=true` property opens in the Form designer toolbar.
- `#I385978` - Now, Free Text Annotations can be edited on iPhone, iPad, and iPod Devices.
- `#I403614` - Now, the annotation signature key not found error is resolved in the customer document.
- `#I403632` - Now, the custom stamp position is not wrong on the mobile device.
- `#I404420` - Now, the Selection of the closely placed Signature Field is improved in Mobile devices.
- `#I403607` - Now, the Add Signature event is triggered when adding the signature, and the Remove Signature event is triggered while removing the signature.
- `#I176922` - Now, comments are not duplicated if a shape annotation is added inside an annotation.
- `#I390997`,`#I392717`,`#I394607` - The signature is now displayed and properly positioned in change the width and height and in the read-only mode of the document that was downloaded.
- `#I398911` - Provided support for suppressing the Digital signature without affecting the download of the same.
- `#I400958` - Now, Adding a signature field programmatically and from the UI level does not have the same signature field name.
- `#I398958` - Now, the Script error does not occur while adding signature and initial fields when enabling form field is false.
- `#I397605` - Now, If a portion of the free text annotation is outside the viewer, moving or resizing it will bring that annotation inside the viewer.
- `#I392269` - Now, considered both GUID and description while importing the annotations.
- `#I398972` - Now, The Script error does not occur while saving the PDF consecutively with Calibrate perimeter control.
- `#I399220` - Now, Some form fields are not removed on reloading the downloaded document.
- `#I389566` - Now, The Script error does not occur while trying to change the PDF view to the text view in the sample.
- `#I369895` - When an image signature is added programmatically, the width is now properly maintained.
- `#I388895` - Now, stamp annotations comments display valid time in the comment panel for any culture.
- `#I391994` - Now, Programmatically able to add all form fields in read-only mode.
- `#I394117` - Now, Tapping a page with a signature field does not moves to another page on mobile devices.
- `#I395979` - Now, Deleted annotations are updated in the annotation collection properly.
- `#I369895` - Now, The selection and strike-through are now aligned properly.
- `#I389679` - Now, the form field color should not be changed on read-only mode.
- `#I383430` - Now, form fields do not generate duplicates while using CTRL c and CRTL v.
- `#I394763` - Now, form fields are not deleted while trying to delete the text with the delete key in the property dialog.
- `#I394979` - The problem with continuously and programmatically adding a signature image disappearing has been resolved.
- `#I397495` - Now, the signature and Initial field are visible in chrome downloaded in the PDF Viewer.
- `#F176687` - Now, markup text of Free Text annotation is proper for Arabic text.
- `#I386832` - Now if the `zoomMode` is set to `FitToWidth`, we can update or get the form field values properly.
- `#I394274`,`#I394827` - Now, the signature and initials are updated after the 10th page.
- `#I395889` - Now, the script error that occurs without injecting annotation has been fixed.
- `#F173061` - Now, we can able to zoom to a specific annotation if the annotation is not visible in the viewport.
- `#I396556` - Now, import and export for JSON and XFDF is the document working properly.
- `#I401240` - Now, search content text highlight is working fine.
- `#I401761`,`#I399940`,`#I405109`,`#I406172` - Now, the Page is not scrolled when deleting annotations using `deleteAnnotationById()` method.

## 20.2.49 (2022-09-13)

### PDF Viewer

#### Bug Fixes

- `#I176922` - Now, comments are not duplicated if a shape annotation is added inside an annotation.
- `#I390997`,`#I392717`,`#I394607` - The signature is now displayed and properly positioned in change the width and height the document that was downloaded.
- `#I398911` - Provided support for suppressing of the Digital signature without affecting download of the same.
- `#I400958` - Now, Adding signature field programmatically and from UI level does not have same signature field name.

## 20.2.48 (2022-09-06)

### PDF Viewer

#### Bug Fixes

- `#I398958` -  Now, Script error does not occurs while adding signature and initial fields when enable form field is false.
- `#I397605` -  Now, If a portion of the free text annotation is outside the viewer, moving or resizing it will bring that annotation inside viewer.
- `#I392269` -  Now, considered both GUID and description while importing the annotations .
- `#I398972` -  Now, The Script error is not occurred while saving the PDF consecutively with Calibrate perimeter control .
- `#I399220` -  Now, Some form fields are not removed on reloading the downloaded document .
- `#I389566` -  Now, The Script error is not occurred while try to change PDF view to text view in sample .
- `#I369895` -  When an image signature is added programmatically, the width is now properly maintained.
- `#I388895` -  Now, stamp annotations comments displays valid time in comment panel for any culture.

## 20.2.46 (2022-08-30)

### PDF Viewer

#### Bug Fixes

- `#I391994` -  Now, Programmatically able to add a all form fields in read only mode .
- `#I394117` -  Now, Tapping a page with signature field does not moves to another page on mobile devices.
- `#I395979` -  Now, Deleted annotations are updated in the annotation collection properly.
- `#I369895` -  Now, The selection and strike through is now aligned properly.

## 20.2.45 (2022-08-23)

### PDF Viewer

#### Bug Fixes

- `#I389679` -  Now ,form fields color should not be changed on read only mode.
- `#I390997`,`#I392717`,`#I394607` - The signature is now displayed and properly positioned in read only mode the document that was downloaded.
- `#I383430` -   Now , form fields does not generate duplicates while using CTRL c and CRTL v.
- `#I394763` -   Now , form fields is not deleted while trying to delete the text with delete key in property dialog.
- `#I394979` -  The problem with continuously and programmatically adding a signature image disappearing has been resolved.
- `#I397495` - Now the signature and Initial field is visible in chrome downloaded in the PDF Viewer.
- `#F176687` - Now, markup text of Free Text annotation is proper for Arabic text.
- `#I394979` -  The problem with continuously and programmatically adding a signature image disappearing has been resolved.
- `#I386832` - Now if the `zoomMode` is set to `FitToWidth`, we can update or get the form field values properly.
- `#I391994` - Now, The document download performance is improved if the PDF document contains above 1000 pages.

## 20.2.44 (2022-08-16)

### PDF Viewer

#### Bug Fixes

- `#I394274`,`#I394827` -  Now ,The signature and initial is updated after the 10th page.
- `#I395889` -  Now ,script error occurs without injecting annotation has been fixed.
- `#F173061` - Now, we can able to zoom to specific annotation if the annotation is not visible in the viewport.
- `#I396556` -  Now ,import and export for JSON and XFDF is document working properly.

## 20.2.43 (2022-08-08)

### PDF Viewer

#### Bug Fixes

- `#F176277` - Context menus will now open all the pages that are visible in the viewport.
- `#I3813` - The signature is now being downloaded without any pixel issue.
- `#I390997`,`#I392717`,`#I394607` - The signature is now displayed and properly positioned in the document that was downloaded.
- `#I383108` - Now,the custom stamp annotations are added properly in touch mode
- `#I377362` - Annotations are now placed in the correct position in the download PDF document with crop value.
- `#I383385` - The delete key can be used to remove annotations added in touch mode.
- `#I381030` - Unloading a PDF document from the first PDF Viewer component no longer affects the rendering of the PDF document in the second PDF Viewer component.
- `#I385936` - The value of the Add Signature button will not extend outside the button and missing Portuguese tooltips have been translated.
- `#I372855`, `#F173951` - An annotation can now be added and resized up to the edge of the PDF document.
- `#I380996` - The `TextSearchComplete` event will be triggered when the text is searched in the PDF viewer.
- `#I377035`,`#I379948` - A tooltip will be displayed in a form field even if the FormDesignerService is not injected.
- `#I380472` - Added form fields after pressing escape no longer shades form fields.
- `#I384112` - The `formFieldSelect` event will be triggered while selecting the first form field in the document.
- `#I386568` - In the Bootstrap5 theme, the search icon will change to a clear icon after a search has been initiated.
- `#I382999` - The type signature in the signature fields will be modified based on the height of the Signature field while resizing.
- `#I379221` - Now, cache values (PDF_CONTENT) are updated in the `getCache()` method.
- `#I385864` - Now, the dropdown values will be changed programmatically in the PDF Viewer.
- `#I386545` - Now, the signature field color will appear while scrolling down long document.
- `#I272377` - Now, the position and size of the arrow shapes in the shape annotation are same as in the downloaded document.
- `#F173953` - Now, Script error have been resolved.
- `#I378591` - The issue with the comment panel not opening after disabling and enabling again has been fixed.
- `#I386545` - Now, the signature field color will appear with opacity while scrolling down long document.
- `#I390764` - The issue of is document edited API is false while editing a document has been resolved.
- `#I388086` - The issue of replied comments merging with other annotations has been resolved.
- `#I379142`,`#I391296` - The x,y bounds of the form fields are proper while adding the form field.
- `#I386887` - The issue with radio button alignment with different zoom settings has been resolved.
- `#F175614` - For load failed and PDF file path not found errors, an error message is now displayed.
- `#I379627` - formFieldMouseover and formFieldMouseLeave is now trigger properly.
- `#I387260` - Now Signature Indicator Properties can be modified Programmatically in DOM.
- `#I384670` - Now that the type has been fixed, the signature value for the second time has been updated using form field collections.
- `#I382941`,`#I383132` - Now duplicate form fields able to select, move, delete and edit after deleting original form fields.
- `#I389566` - Now, Script Error is not occurs while try to change Pdf view to text view in sample.
- `#I376222` - Now, Annotation selector binds while dragging with right click and then clicking left click.
- `#I382568` - Now text boxes with the same name are saved and preserved after downloading and loading the document.
- `#I387261` - The signature in the signature field is not visible on Adobe Reader's print preview has been resolved.
- `#I380373` - Now the event triggering is fixed for Hand Written Signature only, if it is a Signature field, then the add and remove signature events are skipped.
- `#I383430` - Now copy, cut and paste does not generate any duplicates while using key short cut.
- `#I376526` - Now, Mobile device resizing of the Signature Form Field has been improved.
- `#I392270` - Now Signature is not drawn few inches away from the cursor on signature dialog.
- `#I389178` - If the target position is within the document, a form field will be added. As a result, adding Inaccessible Form fields is prevented.

## 20.2.40 (2022-07-26)

### PDF Viewer

#### Bug Fixes

- `#I389566` - Now, Script Error is not occurs while try to change Pdf view to text view in sample.
- `#I376222` - Now, Annotation selector binds while dragging with right click and then clicking left click.
- `#I382568` - Now text boxes with the same name are saved and preserved after downloading and loading the document.
- `#I387261` - The signature in the signature field is not visible on Adobe Reader's print preview has been resolved.
- `#I380373` - Now the event triggering is fixed for Hand Written Signature only, if it is a Signature field, then the add and remove signature events are skipped.
- `#I383430` - Now copy, cut and paste does not generate any duplicates while using key short cut.
- `#I376526` - Now, Mobile device resizing of the Signature Form Field has been improved.
- `#I392270` - Now Signature is not drawn few inches away from the cursor on signature dialog.

## 20.2.39 (2022-07-19)

### PDF Viewer

#### Bug Fixes

- `#I390764` - The issue of is document edited API is false while editing a document has been resolved.
- `#I388086` - The issue of replied comments merging with other annotations has been resolved.
- `#I379142`,`#I391296` - The x,y bounds of the form fields are proper while adding the form field.
- `#I386887` - The issue with radio button alignment with different zoom settings has been resolved.
- `#F175614` - For load failed and PDF file path not found errors, an error message is now displayed.
- `#I379627` - formFieldMouseover and formFieldMouseLeave is now trigger properly.
- `#I387260` - Now Signature Indicator Properties can be modified Programmatically in DOM.
- `#I384670` - Now that the type has been fixed, the signature value for the second time has been updated using form field collections.
- `#I382941`,`#I383132` - Now duplicate form fields able to select, move, delete and edit after deleting original form fields.

## 20.2.38 (2022-07-12)

### PDF Viewer

#### Bug Fixes

- `#I383108` - Now,the custom stamp annotations are added properly in touch mode
- `#I377362` - Annotations are now placed in the correct position in the download PDF document with crop value.
- `#I383385` - The delete key can be used to remove annotations added in touch mode.
- `#I381030` - Unloading a PDF document from the first PDF Viewer component no longer affects the rendering of the PDF document in the second PDF Viewer component.
- `#I385936` - The value of the Add Signature button will not extend outside the button and missing Portuguese tooltips have been translated.
- `#I372855`, `#F173951` - An annotation can now be added and resized up to the edge of the PDF document.
- `#I380996` - The `TextSearchComplete` event will be triggered when the text is searched in the PDF viewer.
- `#I377035`,`#I379948` - A tooltip will be displayed in a form field even if the FormDesignerService is not injected.
- `#I380472` - Added form fields after pressing escape no longer shades form fields.
- `#I384112` - The `formFieldSelect` event will be triggered while selecting the first form field in the document.
- `#I386568` - In the Bootstrap5 theme, the search icon will change to a clear icon after a search has been initiated.
- `#I382999` - The type signature in the signature fields will be modified based on the height of the Signature field while resizing.
- `#I379221` - Now, cache values (PDF_CONTENT) are updated in the `getCache()` method.
- `#I385864` - Now, the dropdown values will be changed programmatically in the PDF Viewer.
- `#I386545` - Now, the signature field color will appear while scrolling down long document.
- `#I272377` - Now, the position and size of the arrow shapes in the shape annotation are same as in the downloaded document.
- `#F173953` - Now, Script error have been resolved.
- `#I378591` - The issue with the comment panel not opening after disabling and enabling again has been fixed.
- `#I386545` - Now, the signature field color will appear with opacity while scrolling down long document.

## 20.2.36 (2022-06-30)

### PDF Viewer

#### Bug Fixes

- `#I371792` - Pan mode is now activated for all mobile devices by default.
- `#I363298` - The issue when form fields had different names when the form designer module is enabled and disabled has been fixed.
- `#F173953` - The issue with the incorrect sentence search functionality in the PDF Viewer has been resolved.
- `#I368423` - Now, rotation for form elements is considered.
- `#F173751` - Radio buttons that have been dynamically imported can now preserve its checked status.
- `#I376227` - The issue with the PDF Viewer's annotation FillColor not updating correctly has been fixed.
- `#I376346` - This issue with an annotation moving to the top of multiple pages has been resolved.
- `#F173061` - A `zoomToRect()` method is now used to zoom a particular area multiple times with different scroll positions in the viewport.
- `#I377714` - The problem with pinch zooming and form field position has been fixed.
- `#I377638` - The issue with the Read Only radio button value changing when downloading has been fixed.
- `#I378257` - The issue with the checkbox printing multiple times has been resolved.
- `#I378394` - Changes to form field properties that are made using the `formFieldPropertiesChange` event are no longer lost is now working properly.
- `#I379205` - Drawing a freehand signature when switching between tabs in the Add signature dialogue is no longer possible.
- `#I379120` - The pixel quality of the handwritten signature has now improved.
- `#I386899` - Issue with signature rendering is now resolved.
- `#I383513` - When a textbox is marked as required, it no longer has a red border in the document that's been downloaded is now working properly.
- `#I369733` - The free text annotation is no longer rotated when it is added programmatically to rotated documents.
- `#I383963` - Issue with cloned form field value is duplicated has been fixed.

## 20.1.60 (2022-06-14)

### PDF Viewer

#### Bug Fixes

- `#I378257` - The issue with the checkbox printing multiple times has been resolved.
- `#F173751` - Radio buttons that have been dynamically imported can now preserve its checked status.
- `#F173061` - A `zoomToRect()` method is now used to zoom a particular area multiple times with different scroll positions in the viewport.
- `#I371792` - Pan mode is now activated for all mobile devices by default.
- `#I368423` - Now, rotation for form elements is considered.
- `#I379205` - Drawing a freehand signature when switching between tabs in the Add signature dialogue is no longer possible.
- `#I379120` - The pixel quality of the handwritten signature has now improved.

## 20.1.59 (2022-06-07)

### PDF Viewer

#### Bug Fixes

- `#F174154`- Now, the signature value for all signature fields in the PDF document will be updated programmatically using the `updateFormFieldsValue()` method.
- `#I376222`- Now, Annotation selector binds correctly to annotations when dragging.
- `#I367416`- The `FindText()` method of PDF Base allows for finding the number.
- `#I372876`- The `annotationSelect` and `commentAdd` events are triggered properly for the sticky notes annotation.

## 20.1.58 (2022-05-31)

### PDF Viewer

#### Bug Fixes

- `#I377034`- Now, the existing form fields value can be retrieved using the `retrieveFormFields()` method.
- `#I367416`- The radio buttons on the iPad are displayed properly after zooming in and out.
- `#I374726`- Signatures will appear in the PDF viewer for the provided document.

## 20.1.57 (2022-05-24)

### PDF Viewer

#### Bug Fixes

- `#I376240`- Multiple words in the typed handwritten signature and signature fields are preserved correctly in the downloaded document.
- `#F174506`- Improved the printing quality of the PDF viewer.
- `#I372853`- Now, ink annotation will be added programmatically with path data available in the annotationAdd event.

## 20.1.56 (2022-05-17)

### PDF Viewer

#### Bug Fixes

- `#I371824`- The properties of form fields will be updated properly using the `updateFormField` method while scrolling over pages.

## 20.1.55 (2022-05-12)

### PDF Viewer

#### New Features

- `#I368647`, `#I366041` - Exposed a method to focus form fields on a document.
- `#I362221`, `#I364814`, `#I368380`, `#I363379` - Provided the support for field Id and field Name for the Form Fields events.
- `#I353301` - Implemented the `GetPageNumberFromClientPoint`, `ConvertClientPointToPagePoint`, `ConvertPagePointToClientPoint`, `ConvertPagePointToScrollingPoint` and `zoomToRect` methods.

#### Bug Fixes

- `#I372732` - A signature in the signature field will be displayed in the downloaded document when the form field properties have been updated using the `updateFormFields` method.
- `#I361979` - Now, signature fields with the same value for the name property will be visible when the document is downloaded and reloaded.
- `#I367560`, `#I367313` - Improved the pinch-zoom in and out responsiveness in the mobile device.
- `#I368770`, `#I373344`, `#I372215` - Now, the properties of text box fields are changed properly using the `textFieldSettings` property.
- `#I369002` - A signature will be downloaded in the correct position for rotated and scanned documents.
- `#I369554` - The form fields are now added horizontally to the page, even for rotated documents.
- `#I371560` - Form fields in a rotated document will be rendered according to the field rotation.
- `#I373137` - The `ArgumentOutOfRangeException` exception will no longer occur when extracting the text for the provided document.
- `#I375548`, `#I374826`, `#I375215`, `#I376171`, `#I376531` - The `Microsoft.Extensions.Caching.Memory` was changed into a stable version.
- `#I364871` - Now, the handwritten signature images and custom stamps will be resized proportionally.
- `#I368168` - PDF Viewer toolbar appeared properly from view on zooming in mobile mode.
- `#I370140` - The label content of calibrating annotations is correctly updated when their properties are edited programmatically.
- `#I370758` - The Script error will no longer be thrown while downloading the document after adding the handwritten type signature on a mobile device.
- `#I370904` - The signature collection and some signature properties are properly defined in the `addSignature` event on a mobile device.
- `#I377746` - The PDF Viewer download button no longer opens the blob URL in Firefox for downloading the document.
- `#I367878` - The Script error will no longer be thrown while clicking the form field for the second time.
- `#I373785` - The initial field will no longer be undefined after filling the field.
- `#I363381` - The `formFieldPropertiesChange` event triggers on removing the signature from the signature field.
- `#I371825` - Now, the form fields will appear while scrolling through the different pages.
- `#I371838` - The Custom stamp annotation will be rendered correctly for the PDF document provided.
- `#I365736`, `#I366420` - In mobile devices, the Script error will no longer occur when adding the signature.

## 20.1.52 (2022-05-04)

### PDF Viewer

#### Bug Fixes

- `#I361979`- Now, signature fields with the same value for the name property will be visible when the document is downloaded and reloaded.

## 20.1.51 (2022-04-26)

### PDF Viewer

#### Bug Fixes

- `#I369554`- The form fields are now added horizontally to the page, even for rotated documents.
- `#I369733`- The free text annotation is no longer rotated when it is added programmatically to rotated documents.
- `#I371560`- Form fields in a rotated document will be rendered according to the field rotation.

## 20.1.50 (2022-04-19)

### PDF Viewer

#### New Features

- `#I362221`,`#I364814`,`#I368380`,`#I363379`- Provided the support for field Id and field Name for the Form Fields events.
- `#I353301`- Implemented the `zoomTo` method.

#### Bug Fixes

- `#I366955`- Now, the page can be scrolled in mobile mode when it is in fitToPage mode.
- `#I368168`- PDF Viewer toolbar appeared properly from view on zooming in mobile mode.
- `#I367878`- The Script error will no longer be thrown while clicking the form field for the second time.
- `#I368770`,`#I373344`,`#I372215`- Now, the properties of text box fields are changed properly using the `textFieldSettings` property.
- `#I370140`- The label content of calibrate annotations is correctly updated when their properties are edited programmatically.
- `#I370758`- The Script error will no longer be thrown while downloading the document after adding the handwritten type signature in mobile device.
- `#I370904`- The signature collection and some signature properties are properly defined in the `addSignature` event on mobile device.
- `#I373344`,`#I372215`- The Script error will no longer be thrown while adding PDF Viewer to the Angular application.

## 20.1.47 (2022-04-04)

### PDF Viewer

#### New Features

- `#I368647`, `#I366041`- Exposed a method to focus form fields in a document.

#### Bug Fixes

- `#I366679`- Selection is working properly for the overlapped stamp annotations.
- `#I364656`- Now, the signature fields are read-only when the annotation and form designer modules are disabled.

## 19.4.55 (2022-03-08)

### PDF Viewer

#### Bug Fixes

- `#I365496`- In editable mode, the free text annotation remains in the same position during zooming.
- `#I366345`- In mobile devices, context menus will not appear when moving annotations.

## 19.4.54 (2022-03-01)

### PDF Viewer

#### Bug Fixes

- `#I362858`- The existing form fields are now cleared completely from the collections when loading another document.
- `#F172325`- The Script error will no longer be thrown while scrolling the landscape PDF documents before loading.
- `#I364909`- The Ink annotation curve is now smooth on mobile devices at higher zoom factors.
- `#I364296`- The free text annotation is now not visible in the print preview when the `isPrint` property is set to false.
- `#I364510`, `#I363938`- The signature is now drawn correctly in the signature field on switching the tabs.
- `#I364296`- The PDF document is now downloaded properly when the form field background color is transparent.
- `#I363381`- The `formFieldPropertiesChange` event triggers on removing the signature from the signature field.
- `#I362811`, `#I364480`- The existing from field collections are now updated properly when loading the document.

## 19.4.53 (2022-02-22)

### PDF Viewer

#### Bug Fixes

- `#I362122` - Now, the shape annotation bounds are updated properly in the `annotationResize` event.
- `#I361850` - Now, the annotation toolbar icons are aligned correctly after resizing.
- `#I363301` - The script error is no longer thrown while hovering the toolbar icons without using the `showTooltip` property.
- `#I362647` - Now, the signature, and initial fields are unable to edit in the read-only mode.
- `#I361801` - Script error is no longer thrown while destroying the viewer control in the IE browser.
- `#I363899` - Now, the `annotationUnSelect` event triggers for custom stamp annotations.
- `#I363936` - Now, the signature panel will not be opened on right-click of signature fields.
- `#F168155` - The downloaded document displays Czech characters.

## 19.4.52 (2022-02-15)

### PDF Viewer

#### Bug Fixes

- `#I361967`- Copy and paste is now working properly for the signature field when it is added at the bottom of the page.
- `#I361906`- The text position for the provided PDF document is now correct.
- `#I361379`- While importing the annotations, the FontColor and FillColor properties are now updated properly.
- `#I360076`- In the signature field, the drawn signature is not stretched now.
- `#I364148`, `#F172304`- The Script error will no longer be thrown in the mobile view while destroying the PDF Viewer.
- `#I362874`- The form field names are now added properly to the form fields.
- `#I365411`, `#I360719`- The annotations are now properly added to the pages when enableDesktopMode is true on mobile devices.

## 19.4.50 (2022-02-08)

### PDF Viewer

#### Bug Fixes

- `#I360337`- Exception is thrown while downloading the empty list box field is now resolved.
- `#I360635`,`#I361422`,`#I361359`- Now, the form field is hidden properly when setting the visible property to hidden.
- `#I358375`- Now, the PDF document loaded properly in the PDF Viewer when you set the size limit for the memory cache.
- `#I359388`- Now, the form fields position is correct for a rotated PDF document.
- `#I354638`- Now, the free text annotation is not hidden when clicking outside of the free text annotation.
- `#I360405`- Now, the Free text annotations and ink annotations are rendered properly in the lower zoom factors.
- `#F171647`- Now, the annotationAdd event is triggered after adding the sticky notes annotation in the annotation collection.
- `#I361639`- The Script error will no longer be thrown when loading the form-fields document without injecting the form field module.
- `#I362311`- Now, the Move cursor is not showing above the custom stamp while the custom stamp annotation is selected.
- `#I359233`- The hidden issue of free text characters is now resolved.
- `#I363626`- The Script error will no longer be thrown while loading a PDF document when the enableHyperlink is set to false.
- `#I363055`- Now, the free text becomes edited properly while clicking the selector.
- `#I363411`- Now, the free text position on a downloaded document is accurate on the Chrome browser.

## 19.4.43 (2022-01-18)

### PDF Viewer

#### Bug Fixes

`#I359772`,`#I359880`- Now, the form fields are editable on the mobile device.
`#I359042`- Free text annotations are downloaded properly without hiding any last character.
`#I358308`- Spinners are hidden properly while removing the display as none for the spinner.
`#I360035`- The Script error will no longer be thrown while using the editAnnotation method in mobile mode.
`#I358584`- Stamps are saved properly in the rotated PDF document.

## 19.4.42 (2022-01-11)

### PDF Viewer

#### Bug Fixes

- `#I358006`- Overlapped stamp annotations are now placed at the exact position in the saved PDF document.
- `#I357273`- Exception thrown while loading the provided PDF document due to an invalid key, is now resolved.
- `#I357655`- The PDF pages are now exported to image in a multi-threaded environment.
- `#I357060`- Now, the typed handwritten signature content does not exceed the text area.

## 19.4.41 (2022-01-04)

### PDF Viewer

#### Bug Fixes

- `#I357108` - Now, the annotations are displayed properly for the rotated documents.
- `#I357489` - Now, the unnecessary thumbnail requests are restricted.

## 19.4.40 (2021-12-28)

### PDF Viewer

#### Bug Fixes

- `#I299110`, `#I348963` - Now, the font size is updated properly while export and import shape annotations.

## 19.4.38 (2021-12-17)

### PDF Viewer

#### New Features

- `#I354638` - Provided auto fit support to the free text annotations.

#### Bug Fixes

- `#I346343`- Now, the text wraps based on the word length regardless of character length in free-text annotation.

## 19.3.56 (2021-12-02)

### PDF Viewer

#### New Features

- `#I336589`, `#I339329`, `#I346113` - Provided annotation toolbar settings support in mobile view.

#### Bug Fixes

- `#I347402`, `#I347555`- Now, the signature dialog is opened correctly on clicking the signature field in Firefox and Safari browser.
- `#I344549`- The ink annotations are preserved correctly in the Adobe.
- `#I346607`- Now, the signature dialog width is proper on resizing the browser window.
- `#I345897`- The ink annotations are now drawn over the free-text annotations when the 'allowEditTextOnly' property is enabled.
- `#I347427`- The form designer tooltip is now hidden when the 'showToolTip' property is set to FALSE.
- `#I348023`- The 'isReadOnly' property is now updated correctly once we set the value to TRUE.
- `#I345130`- Now, the exact shape of the image is maintained when added to the signature field.
- `#I347558`- Now, the custom stamp position is added properly in mobile view.

## 19.3.54 (2021-11-17)

### PDF Viewer

#### Bug Fixes

- `#I346152`- The script error will not be thrown for the document which contains link annotation.

## 19.3.48 (2021-11-02)

### PDF Viewer

#### Bug Fixes

- `#I344888`, `#F169870` - Now, signature dialog settings is working properly for the handwritten signature dialog.
- `#I346090`- Now, the primary toolbar should not hide if form designer toolbar is visible.
- `#I344897`, `#I345574` - Now, the indicator text and required properties for signature fields settings are working properly.
- `#I344082`- Now, signature text annotation is rendered properly on loading the document.

## 19.3.47 (2021-10-26)

### PDF Viewer

#### Bug Fixes

- `#I344034` - The Script error will no longer be thrown if we select text markup annotation when text selection is disabled.

## 19.3.46 (2021-10-19)

### PDF Viewer

#### Bug Fixes

- `#I339329`, `#I341199` - Now, the default context menu of browser will no longer be shown on selecting the text in mobile view.

## 19.3.45 (2021-10-12)

### PDF Viewer

#### Bug Fixes

- `#F169102` - Now, the download action is working properly after importing the provided customer document.
- `#I342951` - Now, the Bookmark navigation is working properly in mobile mode.
- `#I343011` - Now, the download action is working properly after adding the text markup annotation.

## 19.3.44 (2021-10-05)

### PDF Viewer

#### Bug Fixes

- `#I297147`, `#I339056` - Now, the free text annotations with 90 and 270 rotated angle are rotated properly.
- `#I341677` - Now, the opacity is applied properly for the custom stamps.
- `#I341074` - Now, the search icon is visible to close the search dialog.

## 19.1.67 (2021-06-08)

### PDF Viewer

#### Bug Fixes

- `#I328989` - Now, the clear and create button in the signature panel is enabled only on drawing the signature.
- `#I328499` - Now, the stamp annotations are downloaded correctly in the PDF document.

## 19.1.66 (2021-06-01)

### PDF Viewer

#### Bug Fixes

- `#I328030` - The dynamic stamp annotation size is maintained properly while importing and exporting the stamp annotation in XFDF format.

## 19.1.65 (2021-05-25)

### PDF Viewer

#### New Features

- `#I326021` - hyperlinkClick event must be handled to cancel the navigation or change the URL.

## 19.1.64 (2021-05-19)

### PDF Viewer

#### Bug Fixes

- `#I325096` - The Script error will no longer be thrown if we add form fields value by code behind.
- `#I326083` - Now, the signature is appeared inside of the Signature Field in the PDF Viewer.
- `#I326054` - The Script error will no longer be thrown while clicking the provided document hyperlink content.
- `#I324660` - Now, the distance annotation can be added after deleting the incompletely drawn distance annotation.

## 19.1.59 (2021-05-04)

### PDF Viewer

#### Bug Fixes

- `#I322039` - The Arrow icon is shown properly in the custom stamp dropdown.

## 19.1.58 (2021-04-27)

### PDF Viewer

#### Bug Fixes

- `#I322799` - The imported stamp annotation position is updated correctly in the MVC platform.

## 19.1.57 (2021-04-20)

### PDF Viewer

#### Bug Fixes

- `#I317344` - The Script error will no longer be thrown if we add the custom stamp image more than 4MB size.

## 19.1.56 (2021-04-13)

### PDF Viewer

#### Bug Fixes

- `#I315264` - Now, the User names in comments are working properly.

## 19.1.54 (2021-03-30)

### PDF Viewer

#### New Features

- `#F158073`, `#I291648` - Exposed the annotation UnSelect event in PDF Viewer.

## 18.2.56 (2020-09-01)

### PDF Viewer

#### New Features

- `#I289233` - Provided the support to add expiration timing for cache.

#### Bug Fixes

- `#I289417` - Now, the annotation toolbar position is maintained correctly.

## 18.2.47 (2020-07-28)

### PDF Viewer

#### New Features

- `#I267670` - Exposed the toolbar option to retrieve the form field data in JSON format.

#### Bug Fixes

- `#I282486` - Now, undo and redo is working properly for the freetext annotations.
- `#F155593`- Exception will no longer be thrown while exporting the formfields.

## 18.2.46 (2020-07-21)

### PDF Viewer

#### Bug Fixes

- `#I282530` - The Script error will no longer be thrown if we select the handwritten signature in mobile devices.

## 18.2.45 (2020-07-14)

### PDF Viewer

#### New Features

- `#I281898` - Provided the support to add comments programmatically for the newly added annotations.

#### Bug Fixes

- `#F155593`, `#I283379` - Now, PDF Viewer control is working in IE.

## 18.2.44 (2020-07-07)

### PDF Viewer

#### Bug Fixes

- `#I273237` - Now, Annotation comments are locked properly when locked the annotations.

## 18.1.55 (2020-06-02)

### PDF Viewer

#### New Features

- `#F154248` - Provided the Support to show/hide the annotation toolbar in code behind.
- `#F153946` - Provided the Options to disable AutoComplete options in form filling documents.
- `#I273237` - Provided the Support to lock the text markup annotations.
- `#I277143` - Provided the support for ink annotation.

## 18.1.54 (2020-05-26)

### PDF Viewer

#### New Features

- `#I254075` , `#I266559` - Provided the support  to render the hyperlinks which are preserved as plain text

#### Bug Fixes

- `#I274036` - Now, the page does not gets refreshed on clicking the import annotation button
- `#I267062` - Size of the Stamp is rendered correctly after saving and loading the file in PDF Viewer.
- `#I268505` - Download is working correctly For French Culture Environment.
- `#F153465` - Digital Signature in the exported image is preserved correctly.
- `#F153465` - Style of the form fields are preserved properly in PDF Viewer.
- `#I274694` -Text highlight is working properly.
- `#I276547` -Text selection is working properly for lower zoom factor.

## 18.1.48 (2020-05-05)

### PDF Viewer

#### New Features

- `#I272985` - Provided the support to edit the annotation properties without selecting the annotation.

## 18.1.45 (2020-04-21)

### PDF Viewer

#### New Features

- `#I267283` - Provided the support to identify the imported annotation and drawn annotation
- `#I268736` - Exposed the text search events in PDF Viewer.
- `#I258786` - Exposed the signature Select event in PDF Viewer.

#### Bug Fixes

- `#I272053` - The annotation bounds value is now preserved properly in annotation events.
- `#I269001` - Improved the page rendering behaviour in PDF Viewer.

## 18.1.44 (2020-04-14)

### PDF Viewer

#### New Features

- `#I263306` - Provided the support for Meter Calibration ratio in PDF Viewer.
- `#I271053` - Provided the support to enable and disable the multiline annotations in overlapping collections.

#### Bug Fixes

- `#I271180` - Free Text Annotation and annotation label text position updated properly in downloaded rotational documents.
- `#F153036` - Now, Annotation toolbar separator shown properly when hiding some annotation toolbar items.

## 18.1.43 (2020-04-07)

### PDF Viewer

#### New Features

- `#I267524` - Provided the support for feet inch Calibration ratio in PDF Viewer.
- `#I269003` - Exposed the non filled form fields value in the fireValidatedFailed event arguments.
- `#I268276` - Provided the support to customize the annotation resize  cursor type in PDF Viewer.
- `#I268715` - Exposed the 'Not Approved' stamp annotation under dynamic stamp type.

#### Bug Fixes

- `#I271163` - Errors will no longer occur when the print module in disabled state.
- `#I268829` - Now, the deleted annotations are removed properly from the PDF document.

## 18.1.42 (2020-04-01)

### PDF Viewer

#### New Features

- `#I268975` - Exposed the event for notifying page mouse over action.
- `#I264529` - Exposed the volume calibrate annotation depth value in annotationSelect event arguments and provide options to edit the depth value.
- `#I263297`, `#I268677` - Provided the options to enable and disable the tile rendering mode.
- `#I263473` - Provided the isLock options to  individual annotation object level.

#### Bug Fixes

- `#I269004` – The typo errors in PDF Viewer JSON objects has been resolved.
- `#I266218`, `#I266559` - The import/export form fields are now working properly for the form fields data contains special characters.
- `#I268505` - Download is now working properly for different culture settings.
- `#I268109` - The updated label content is now preserved properly in the exported annotation data.

## 18.1.36-beta (2020-03-19)

### PDF Viewer

#### New Features

- `#I235592` - Provided the support for setting the lower zoomfactor value to the PDF Viewer control.
- `#I259521` - Provided the support for importing the form fields data from JSON object.
- `#I261558` - Provided the support for customizing the distance measurement annotation leader length property.
- `#I256687` - Provided the support for setting the custom data for annotation objects.
- `#I252340` - Provided the support for setting the minimum or maximum size and isLock properties at individual annotation level.
- `#I262008` - Exposed the event for notifying annotation mouse over action.
- `#F149148` - Provided the binding support for the enableFormFields property.
- `#I258769` - Provided the option to suppress the error dialog in PDF Viewer.
- `#I261269` - Provided the support to allow credential for XMLHttpRequest in PDF Viewer.
- `#I262787` - Exposed the event to notify the getPDFDocumentTexts method completed for all the pages.

#### Bug Fixes

- `#I262525` – The render PDF pages method triggers properly for the provided PDF document.
- `#I262692` - The text markup resizer position is now updated properly for the provided document.
- `#I262692` - The text content bounds are now rendered properly for the provided document.

## 17.4.50 (2020-02-18)

### PDF Viewer

#### New Features

- `#I262787` - Exposed the event to notify the getPDFDocumentTexts method completed for all the pages.

## 17.4.49 (2020-02-11)

### PDF Viewer

#### New Features

- `#I258769` - Provided the option to suppress the error dialog in PDF Viewer.
- `#I261269` - Provided the support to allow credential for XMLHttpRequest in PDF Viewer.

## 17.4.46 (2020-01-30)

### PDF Viewer

#### New Features

- `#I258172` - Provided the support to open the command panel while loading the PDF document if the isCommandPanelOpen property is set to true.
- `#I259159` - Provided the support to open the thumbnail view panel while loading the PDF document if the isThumbnailViewOpen property is set to true.
- `#I259961` - Exposed the annotation label settings value in the annotationAdd event arguments.
- `#I259615` - Exposed the annotation label settings value in import/export JSON data.
- `#I256596` - Exposed the annotation selector settings value for individual annotation objects and import/export JSON data.

## 17.4.44 (2021-01-21)

### PDF Viewer

#### New Features

- `#I257519` - Provided Support to edit the free Text annotation value in code behind.

#### Bug Fixes

- `#I259848` – Now, the deleted annotations are removed properly from the PDF document.
- `#I259734` - Custom Stamp annotations are drawn properly while importing the annotations.
- `#I260512` - Errors will no longer occur while importing the annotations in the documentLoad event.
- `#I260575` - The download file name is now set properly if we provide during the control initialization.

## 17.4.43 (2020-01-14)

### PDF Viewer

#### New Features

- `#I255057` – Provided the support for validating the form fields value whether it is filled or not in the loaded PDF document.
- `#I258786`, `#I259327` – Provided the support for exporting and importing the handwritten signature.

#### Bug Fixes

- `#I149882` – The downloadEnd event triggers properly if we save the document in server side.
- `#I257630` – The importSuccess event triggers properly if we save the document in server side.
- `#I260295` – The distance calibrate annotation now resized properly.
- `#I260128` – The volume and area calibrate annotation fill color is updated correctly on importing the annotations.

## 17.4.41 (2020-01-07)

### PDF Viewer

#### New Features

- `#I257514` – Provided the support for import/export the custom stamp annotations.
- `#I257231` – Exposed the property to access the search count value.
- `#I258386` – Exposed the API to retrieve the text content and bounds along with page size details.

#### Bug Fixes

- `#I259524` – Annotations are rendered properly in the large page size document if the page rendered in fitToPage mode initially.
- `#I259523` – Errors will no longer occur while exporting the annotation if the document contains text web link annotation.
- `#I259134` – The annotationSelect event now triggers properly if we add the multiple annotations to a page.
- `#I258949` – The opacity value is now applied properly if set it on annotation during initialization.
- `#I259383` – The errors will no longer occur if we import the annotations after deleting the added annotations.
- `#I259166` – The text content will be selected properly at the end of the page.
- `#I259078` – The annotations will now be created if we resize the annotation through multipage.
- `#I259564` – The Null reference error will no longer occur while loading the provided PDF document.

## 17.4.40 (2019-12-24)

### PDF Viewer

#### New Features

- `#I256131` – Improved the rendering quality and performance for the large size PDF document.

#### Bug Fixes

- `#I258250` – The imported annotations are rendered properly if we import the annotation details in the documentLoad event.

## 17.4.39 (2019-12-17)

### PDF Viewer

#### New Features

- `#I251150` – Provided the support to find the interlinked annotations while selecting the annotations.
- `#I243077` , `#I241487`, `#I244802`, `#I252340` – Provided the support for setting the annotation UI properties.
- `#I254634` – Provided the support to maintain the aspect ratio for custom stamp annotation.
- `#I253745`, `#I256518` – Exposed the event to notify the annotation object being moved.
- `#I254275` – Exposed the event to notify the download process in the PDF Viewer control.

#### Bug Fixes

- `#I253751` – Resolved the typo error in annotation exported data.
- `#I255345` – Errors will no longer occur while rendering the annotation in the Firefox browser.
- `#I255137` – Errors will no longer occur in mobile view mode if we set the Pan interaction mode.
- `#I253704` – The form fields are downloaded properly while loading the PDF document in tab control.
- `#I253745` – The annotationAdd and annotationPropertiesChange events are triggered properly for the annotations.
- `#I252881` – The toolbar settings property is working for mobile device.
- `#I255042`, `#I255073` – Errors will no longer occur if the session storage exceeds the maximum limit.
- `#I254115`, `#I254942` – The annotation modified date is preserved properly in different localization.
- `#I256044` – The font family and text alignment are rendered properly from the exported FreeText annotation data.
- `#I255124` – The text markup annotations are now added properly if the PDF Viewer element ID contains characters.
- `#I256220` – The context menu will now be shown/hidden properly if we disable the default toolbar.
- `#I256131` – The annotation toolbar will now be shown/hidden properly if we disable the annotation toolbar.
- `#I256932` - Errors will no longer occur while resizing the text markup annotations.
- `#I252805` – The annotationId value is now preserved properly for all annotation events.
- `#I255647` - The form fields contents are rendered properly in the printed document, which has been printed in IE browser.

## 17.3.28 (2019-11-19)

### PDF Viewer

#### New Features

- `#I251151`, `#I254032` – Improved the annotation selection behavior in code behind.
- `#I254776`, `#I255304` – Provided the support to set the custom JSON data for AJAX request.
- `#I253341` – Provided the support to customize the label content during initial rendering of annotations.
- `#I252421` – Provided the support to set the zoom mode value during initial loading.

#### Bug Fixes

- `#I253926` – Resolved the memory leak while rendering the PDF documents.

## 17.3.27 (2019-11-12)

### PDF Viewer

#### New Features

- `#I251151`, `#I254032` – Provided the support for annotation selection in code behind.
- `#I249245` – Provided the support for UI customization of annotation selector border and resizer.
- Improved the PDF viewer mobile view performance.

#### Bug Fixes

- `#I253317` – The measured annotation value is updated properly in the label when you disable the default toolbar.
- `#I253888` – The Script error will no longer be thrown if we load the PDF documents using ASP.NET MVC web service.
- `#I253317` – The measured value is now update properly for the measured annotation.

## 17.3.26 (2019-11-05)

### PDF Viewer

#### New Features

- `#I252805` - Exposed the annotation unique ID in the annotationAdd event arguments.

#### Bug Fixes

- `#I252806` - Annotation bounds are retrieved properly when importing and exporting the annotation details in rotated PDF documents.
- `#I253016` - Free text annotation bounds are preserved properly in the rotated PDF document while saving the document.
- `#I251152` - Text markup annotation resizer position will be updated properly in the doctype HTML pages.
- `#I252879` - Script errors will no longer occur if we disable the magnification module.
- `#I253504` - The character start and end indexes will be updated properly in the text markup annotationAdd event arguments.

## 17.3.21 (2019-10-30)

### PDF Viewer

#### New Features

- `#I252111` - Provided the support for handwritten signature.
- `#I251149` - Provided the support for customizing the text search highlight color.

#### Bug Fixes

- `#I251864` - The pages in the landscape document will be rendered properly.
- `#I250902` - Now, the text Markup annotations are working properly inside the Tab control.
- `#I250538` - The ajaxRequestFailed event will be triggered for all the possible ajax error codes.
- `#I252269` – The mouse cursor has been updated properly after adding the free text annotation.
- `#I251401` - The annotationSelect event will be triggered properly while selecting the annotations.

## 17.3.19 (2019-10-22)

### PDF Viewer

#### New Features

- `#I249703` - The quality of the printed copy has been improved.
- `#I147267`, `#I251146` - Provided the support to delete the annotations in code behind.
- `#I248609` - Provided the support to customize the annotation selector.
- `#I247224`, `#I248179` - Provided the support to resize the text markup annotation bounds.

#### Bug Fixes

- `#I251577` - The value of the isDocumentEdited property now returned properly for shapes, measure, stamps annotation and form filling features.
- `#I249588` - The PDF Viewer control size is updated properly while using in tab control.
- `#I251729` - The text markup annotation selector is cleared properly when loading the another PDF document.
- `#I251742` - The perimeter shape type has been updated properly when exporting the annotation details.
- `#I251494` - The reference error will no longer be thrown if you render the PDF document in docker Linux container environment.
- `#I251153` – The previously imported annotations are no more cleared when import the other set of annotations.

## 17.3.17 (2019-10-15)

### PDF Viewer

#### New Features

- `#I248585` - The start and end indexes of text markup annotation have been exposed in the annotationAdd event.

#### Bug Fixes

- `#I249742` - The annotationSelect event will be triggered properly after selecting another text markup annotation.
- `#I245008` - Notes of the measure annotations will now be updated properly after modifying the scale values.

## 17.3.16 (2019-10-09)

### PDF Viewer

#### New Features

- `#I249725` - Provided the support to enable or disable the comment panel.
- `#I248609` -  Exposed the API for textSelectionStart and textSelectionEnd events in the PDF Viewer.

#### Bug Fixes

- `#I249017` - Multiline text markup annotation bounds will be returned properly in the annotationAdd event arguments.

## 17.3.14 (2019-10-03)

### PDF Viewer

#### New Features

- `#I227046`, `#I230887`, `#I142366`, `#I231973`, `#I237847`, `#I244849`, `#I238686`, `#I239233`, `#I241638`, `#I241638`, `#I242232`, `#I239221`, `#I240051`, `#I245255` – The support has been provided for filling the form fields.
- `#I233655`, `#I236240`, `#I236825`, `#I238694`, `#I241974`, `#I243864`, `#I245087` – The support has been provided for free text annotation.
- `#I246059` - Exposed the thumbnailClick event to identify the thumbnail clicks action.
- `#I246767` – The support has been provided to export the annotation details as JSON object in client-side.
- `#I245008` – The support has been provided to update the existing calibrate annotation if we modify the scale value.
- Improved the scrolling performance in mobile devices.

#### Bug Fixes

- `#I247914` – The perimeter annotation will be rendered properly when the line is ended in the starting point.
- `#I248062` – Extra edge will not be added to the polygon shapes when rendered in the page.
- `#I248092` – Contents will not be swapped if you switch randomly between two documents.
- `#I248093` – Script error will no longer be thrown if you switch randomly between two documents.
- `#I247787` – The searched text will be highlighted properly in the provided document.
- `#I146785` – Script error will no longer be thrown when the PDF Viewer control is used in the React application.

## 17.3.9-beta (2019-09-20)

### PDF Viewer

#### New Features

- `#I227046`, `#I230887`, `#I142366`, `#I231973`, `#I237847`, `#I244849`, `#I238686`, `#I239233`, `#I241638`, `#I241638`, `#I242232`, `#I239221`, `#I240051`, `#I245255` – The support has been provided for filling the form fields.
- `#I233655`, `#I236240`, `#I236825`, `#I238694`, `#I241974`, `#I243864`, `#I245087` – The support has been provided for free text annotation.
- `#I246059` - Exposed the thumbnailClick event to identify the thumbnail clicks action.
- `#I246767` – The support has been provided to export the annotation details as JSON object in client-side.
- `#I245008` – The support has been provided to update the existing calibrate annotation if we modify the scale value.
- Improved the scrolling performance in mobile devices.

## 17.2.49 (2019-09-04)

### PDF Viewer

#### Bug Fixes

- `#I246044` – The assigned author name is now preserved properly while loading or saving the document in PDF Viewer.
- `#I245087` – The Polygon, Perimeter, and Volume annotations will be drawn properly in the low zoom values.
- `#I245820` - Magnification on double tap will no longer happen when the pinch zoom is disabled in the PDF Viewer control.
- `#I244787` – The Comment panel is now opened properly while double clicking the annotation created from the code behind.
- `#I246041` - The warning message will no longer be thrown when the web action method is executed.

## 17.2.47 (2019-08-27)

### PDF Viewer

#### New Features

- `#I243205`, `#I245009` - Provided the support to include Custom stamps in stamp dropdown.
- `#I243133` - Provided the support to customize tooltip of the hyperlink on mouse hover.
- `#I245007` - Provided the Feet unit support in measurement annotation.

#### Bug Fixes

- `#I244499` - The shape and measurement annotations will now be rendered properly in the rotated documents.
- `#I244481` - The script errors will no longer be thrown in PDF Viewer in IE browser.

## 17.2.46 (2019-08-22)

### PDF Viewer

#### Breaking Changes

- The following API is renamed.

| Existing API name| New API Name |
|------|-------------|
| toolbarItem| toolbarItems|

#### New Features

- `#I223065`, `#I234860`, `#I241770`, `#I241487`, `#I229426`, `#I244801` – Provided the support for importing and exporting the annotation details as a JSON object.

#### Bug Fixes

- `#I243837` – Exception will no longer be thrown while loading the PDF document as FileStream.

## 17.2.41 (2019-08-14)

### PDF Viewer

#### Bug Fixes

- `#I241487`, `#I243077` - Annotation author name is now updated properly in the comment panel.
- `#I242804` - The Bookmark's destination value is now maintained properly during navigation.
- `#I241487` - The provided PDF document will now be loaded properly in the PDF Viewer control.
- `#I244437` - Resolved the typo errors in the PDF Viewer toolbar content.
- `#I244654` - The editAnnotation API is now working properly.
- `#I243134` - The PDF documents load properly when render the PDF Viewer control under multiple tab with fitToPage view mode during initial loading.

## 17.2.40 (2019-08-06)

### PDF Viewer

#### New Features

- `#I242329` - Provided the support to customize scale ratio value of measurement annotation.
- `#I241886` - Provided the support to display context menu in mouse up action.

#### Bug Fixes

- `#I242495`, `#I243160` – Hyperlink element is now rendered properly for the rotated page document.
- `#I238064` – Searched target text is now highlighted properly for the provided document.
- `#I241904`, `#I241294` – Converted PDF document is now rendered properly in IE browser.
- `#I242282` – Text search is now working properly while using PDF Viewer control inside the Tab control.

## 17.2.39 (2019-07-30)

### PDF Viewer

#### New Features

- `#I240440` - More details have been provided in the ajaxRequestfailure event.
- `#I242375` – Now, the annotation edit toolbar is enabled by default using the enableAnnotationToolbar property.
- `#I241715` - Support has been provided to render the annotation modified date and time in the comment panel.

#### Bug Fixes

- `#I242803` - The request handling has been optimized for retrieving the comments details from the PDF document.

## 17.2.36 (2019-07-24)

### PDF Viewer

#### New Features

- Provided the API to modify the scale ratio to change the quality of the pages rendered in the PDF Viewer.

## 17.2.35 (2019-07-17)

### PDF Viewer

#### Bug Fixes

- `#I229426` - Provided the API to select, edit, and delete the annotations.

## 17.2.34 (2019-07-11)

### PDF Viewer

#### Breaking Changes

- The following event arguments are renamed.

| Existing Event Arguments Name| New Event Arguments Name |
|------|-------------|
|IUnloadEventArgs|UnloadEventArgs|
|ILoadEventArgs|LoadEventArgs|
|ILoadFailedEventArgs|LoadFailedEventArgs|
|IAjaxRequestFailureEventArgs|AjaxRequestFailureEventArgs|
|IPageChangeEventArgs|PageChangeEventArgs|
|IPageClickEventArgs|PageClickEventArgs|
|IZoomChangeEventArgs|ZoomChangeEventArgs|
|IHyperlinkClickEventArgs |HyperlinkClickEventArgs |
|IAnnotationAddEventArgs|AnnotationAddEventArgs|
|IAnnotationRemoveEventArgs|AnnotationRemoveEventArgs|
|IAnnotationPropertiesChangeEventArgs|AnnotationPropertiesChangeEventArgs|

#### New Features

- `#I208298`, `#I223253`, `#I224643`, `#I233655`, `#I238694` - Provided the supports for shape annotations.
- `#I219446`, `#I224643`, `#I230115`, `#I233032`, `#F144297`, `#I236825`, `#I238694` - Provided the supports for stamp annotations.
- `#I229426` - Provided the supports for calibrate annotations.
- `#I223253`, `#I238694` - Provided the supports for sticky notes annotations.
- `#I238812` – Provided support to restrict the hyperlink navigation.
- `#I236995` – Provided support to restrict the pinch zooming using the ‘enablePinchZoom’ property.

#### Bug Fixes

- `#I233161` – Now, loading Indicator will be shown properly while loading a large page size document.
- `#I233035` - HyperlinkClick event is now triggered properly.
- `#I234364` - Pan interaction mode is now working properly when the toolbar is disabled.
- `#I231436` - PDF document is now rendered properly while using the PDF Viewer control inside Tab control.
- `#I232104` - Cleared the warnings in css files.
- `#I238761` - Height of the PDF Viewer control is now maintained properly when using inside the tab control.

## 17.2.28-beta (2019-06-27)

### PDF Viewer

#### Breaking Changes

- The following event arguments are renamed.

| Existing Event Arguments Name| New Event Arguments Name |
|------|-------------|
|IUnloadEventArgs|UnloadEventArgs|
|ILoadEventArgs|LoadEventArgs|
|ILoadFailedEventArgs|LoadFailedEventArgs|
|IAjaxRequestFailureEventArgs|AjaxRequestFailureEventArgs|
|IPageChangeEventArgs|PageChangeEventArgs|
|IPageClickEventArgs|PageClickEventArgs|
|IZoomChangeEventArgs|ZoomChangeEventArgs|
|IHyperlinkClickEventArgs |HyperlinkClickEventArgs |
|IAnnotationAddEventArgs|AnnotationAddEventArgs|
|IAnnotationRemoveEventArgs|AnnotationRemoveEventArgs|
|IAnnotationPropertiesChangeEventArgs|AnnotationPropertiesChangeEventArgs|

#### New Features

- `#I208298`, `#I223253`, `#I224643`, `#I233655`, `#I238694` - Provided the supports for shape annotations.
- `#I219446`, `#I224643`, `#I230115`, `#I233032`, `#F144297`, `#I236825`, `#I238694` - Provided the supports for stamp annotations.
- `#I229426` - Provided the supports for calibrate annotations.
- `#I223253`, `#I238694` - Provided the supports for sticky notes annotations.

#### Bug Fixes

- `#I233161` – Now, loading Indicator will be shown properly while loading a large page size document.
- `#I233035` - HyperlinkClick event is now triggered properly.
- `#I234364` - Pan interaction mode is now working properly when the toolbar is disabled.
- `#I231436` - PDF document is now rendered properly while using the PDF Viewer control inside Tab control.
- `#I232104` - Cleared the warnings in css files.

## 17.1.47 (2019-05-14)

### PDF Viewer

#### New Features

- Provided the supports for adding custom header to the AJAX requests in the PDF viewer control.

## 17.1.44 (2019-05-07)

### PDF Viewer

#### New Features

- Provided the supports for adding custom header to the AJAX requests in the PDF viewer control.

## 17.1.43 (2019-04-30)

### PDF Viewer

#### Bug Fixes

- The Loading Indicator is now shown properly while loading a large page size document.
- The pan interaction mode is now working properly when the toolbar is disabled.

## 17.1.42 (2019-04-23)

### PDF Viewer

#### Bug Fixes

- The issue "the hyperlinkClick event is not triggered for web links" has been fixed.

## 17.1.41 (2019-04-16)

### PDF Viewer

#### Bug Fixes

- The font size is missing warning will no longer be thrown from styles in the PDF Viewer.

## 17.1.40 (2019-04-09)

### PDF Viewer

#### Bug Fixes

- The PDF document is now rendered properly while using the PDF Viewer inside the Tab control.
- The font size is missing warning will no longer be thrown from styles in the PDF Viewer.

## 17.1.38 (2019-03-29)

### PDF Viewer

#### New Features

- Text Markup annotation support has been provided to PDF Viewer.
- Mobile view responsiveness support has been provided.
- Right-to-left support has been provided.
- Accessibility support has been provided to PDF Viewer.

#### Bug Fixes

- The issue “Added PDF document cache element did not maintain properly” has been fixed.
- The issue “PdfRenderer object is not disposing properly in EJ2 PDF Viewer library” has been fixed.
- The issue “PDF Viewer clears all the session storage” has been fixed.
- Resolved the script error while accessing invalid link annotation destination.
- Resolved Single Page Document Rendering issue.
- Document Load event not triggered for lower zoom value issue has been fixed.

## 17.1.32-beta (2019-03-13)

### PDF Viewer

#### New Features

- Text Markup annotation support has been provided to PDF Viewer.
- Mobile view responsiveness support has been provided.
- Right-to-left support has been provided.
- Accessibility support has been provided to PDF Viewer.

#### Bug Fixes

- The issue “Added PDF document cache element did not maintain properly” has been fixed.
- The issue “PdfRenderer object is not disposing properly in EJ2 PDF Viewer library” has been fixed.
- The issue “PDF Viewer clears all the session storage” has been fixed.
- Resolved the script error while accessing invalid link annotation destination.
- Resolved Single Page Document Rendering issue.
- Document Load event not triggered for lower zoom value issue has been fixed.

## 16.4.55 (2019-02-27)

### PDF Viewer

#### Bug Fixes

- Document Load event not triggered for lower zoom value issue was fixed.

## 16.4.52 (2019-02-05)

### PDF Viewer

#### Bug Fixes

- Resolved PDF Viewer Session Storage Clear Issue.
- Resolved single Page Document Rendering Issue.
- Resolved the script error while accessing invalid link annotation destination.
- The scrolling when the toolbar is clicked is prevented

## 16.4.48 (2019-01-22)

### PDF Viewer

#### Bug Fixes

- Resolved PDF Viewer Session Storage Clear Issue.
- Resolved single Page Document Rendering Issue.

## 16.4.46 (2019-01-08)

### PDF Viewer

#### Bug Fixes

- Resolved the script error while accessing invalid link annotation destination.

## 16.4.44 (2018-12-24)

### PDF Viewer

#### Bug Fixes

- The scrolling when the toolbar is clicked is prevented

## 16.4.40-beta (2018-12-10)

### PDF Viewer

#### Bug Fixes

The PDF Viewer component enables you to view and print the PDF files.

- Both normal and PDF files protected with AES and RC4 encryption can be opened and displayed.
- Core interactions are included: scrolling, zooming, panning, and page navigation.
- Built-in toolbar.
- Text can be selected and copied from PDF files.
- Text can be easily searched for across the PDF document.
- Easy navigation with the help of bookmarks, thumbnails, hyperlinks, and a table of contents.
- Two view modes are included: fit-to-page and fit-to-width.
- An entire document or a specific page can be printed directly from the browser.