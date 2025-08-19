# Changelog

## [Unreleased]

## 30.2.5 (2025-08-13)

### DocumentEditor

#### Bug Fixes

- `#I748873` - Fixed a script error that occurred when decreasing the indent in list paragraphs.
- `#I971894` - Resolved a script error triggered during `beginUndoAction` when clearing the redo collection.
- `#I747660` - Addressed an issue where the comments panel failed to display correctly when `showRevision` was set to false.
- `#I750354` - Resolved an issue where pressing keys on the numeric keypad did not trigger page number input in the status bar.
- `#I747885` - Corrected layout inconsistencies when inserting white space after selecting content.
- `#I748857` - Ensured left and right margins are properly applied during horizontal ruler scrolling.
- `#I748856` - Fixed horizontal ruler misalignment when resizing the vertical ruler.
- `#I741169` - Resolved an issue where underlines applied to images were not retained correctly.
- `#I744835` - Fixed a script error occurring when dragging text from a table into the header.
- `#I746062` - Addressed export issues with nested content controls.

#### Features

- `#I723821` - Added event to access the paste action before it paste

## 30.1.42 (2025-07-29)

### DocumentEditor

#### Bug Fixes

- `#I734726` - Fixed table layout issues when documents contain multiple floating tables.
- `#I702538` - Enhanced performance when editing large documents with editable regions.
- `#I737779` - Fixed an issue where Undo did not work correctly with bookmark elements.
- `#I742694` - Corrected layout problems in Hebrew right to left documents containing form fields.
- `#I740631` - Resolved a script error that occurred when pasting a table row containing bookmarks inside a cell.
- `#I743329` - Fixed browser freezing when performing the `Accept` action in Track Changes mode.
- `#I741247` - Resolved an application crash issue when opening a `.txt` file.
- `#I744394` - Fixed a script error in documents opened in protection mode.
- `#I744057` - Modified the Dialog content when closing the comments panel

- `#I737518` - Handled Ms Word behaviour when styles are duplicated in a document
- `#I744551` - Resolved the performance issue in Ribbon mode when press and hold key
- `#I741625` - Resolved parsing issue when field type splits into multiple paragraphs
- `#I734726` - Resolved table layout issue when document contains both floating and normal tables
- `#I743853` - Resolved the paragraph styles are not properly visible in Ribbon UI

## 30.1.40 (2025-07-15)

### DocumentEditor

#### Bug Fixes

- `#I736018` - Fixed browser hanging issue that occurred when accepting page breaks in track changes mode.
- `#I738556` - Fixed section break deletion issue in multi-column documents.

## 30.1.39 (2025-07-08)

### DocumentEditor

#### Bug Fixes

- `#I736749` - Resolved the text overlap issue when deleting content.
- `#I738500` - Resolved the issue with removing content.
- `#I739874` - Resolved the issue with selection updates on right-click.
- `#I724502` - Fixed the paste issue with non-editable content controls.
- `#I737044` - Fixed the issue where the "Capitalize Each Word" function does not work after tabulation.
- `#I725100` - Resolved the Border and shading dialog responsive issue specific to localized non-English language.

#### Features

- `#I720493` - Added API to set the custom data in revision.

## 30.1.38 (2025-07-02)

### DocumentEditor

#### Bug Fixes

- `#I732868` - Improved the performance when applying formatting to content.
- `#I723831` - Fixed issue where the spell checker not triggered when the selection moved outside the content after delete action.
- `#I728253`, `#F68214` - Resolved script error when pasting content into a table cell with the spell checker enabled.
- `#I738426` - Fixed header and footer selection position issue when `enableLayout` is set to false.
- `#I731084` - Addressed script error when selecting content inside a table cell that spans across two pages.
- `#I728388` - Improved dropdown item selection behaviour in the zoom factor control.
- `#I726264` - Fixed header and footer reference mismatch when deleting a section break.
- `#I731465` - Resolved document scrolling issue when moving the mouse outside the Document Editor area.
- `#I713824` - Fixed layout issue involving shape elements in the header.
- `#I732155` - Corrected invalid characters being added to footnotes during DOCX export.
- `#I726900` - Resolved table layout issues in multi-column sections when opening documents.
- `#I731473` - Fixed issue where bullet language changed unexpectedly in the Document Editor.
- `#I734383` - Addressed issues with find and replace functionality for selected content.
- `#I736267` - Resolved script error triggered by backspace action.
- `#I729239` - Fixed script error when inserting a merge field after a bullet point.

## 30.1.37 (2025-06-25)

### DocumentEditor

#### Bug Fixes

- `#I720298` - Resolved the content overlapping issue that occurred when deleting section break content.
- `#I725100` - Fixed issues in the borders and shading dialog of the Document Editor.
- `#I726431` - Fixed the table of contents display issue and the table layout problem in multi-column sections.
- `#I725020` - Resolved the document opening issue on Mac devices.
- `#I720002` - Fixed the exporting issue for nested block content controls.
- `#I712003` - Resolved the table resizing issue when selecting a table row.

##### Features

- `#I364681`, `#I659735`, `#I659690`, `#I690350`, `#I706236`, `#I683493`, `#I713243`, `#I386519` - Added the ribbon interface support in Document Editor.
- `#I702584` - Added support for removing empty paragraph based on current selection.
- `#I712717` - Added support for grouping undo and redo action.
- `#I710413` - Added support for synchronized scrolling.
- `#I728576` - Added support to enable and disable layout options.
- `#I273578` - Added support to preserve group shape.

## 29.2.10 (2025-06-10)

### DocumentEditor

#### Bug Fixes

- `#I681319` - Fixed content overlapping issue when pasting inside a table cell.
- `#I728184` - Fixed table layout issue when the table height type is set to `Exactly`.
- `#I722688` - Fixed list formatting issues in documents with duplicate abstract list collections.
- `#I724060` - Fixed a script error that occurred when pasting content into merged cells.
- `#I709787` - Improved rendering performance by reducing unnecessary re-rendering in Document Editor.
- `#I723846` - Fixed a stack overflow error caused by recursive processing of a large number of paragraphs.
- `#I723712` - Fixed incorrect offset calculation for space elements when inserting text at the beginning of a line.

## 29.2.8 (2025-06-03)

### DocumentEditor

#### Bug Fixes

- `#I724519` - Fixed a script error that occurred when pasting content into a table.
- `#I717943` - Addressed a performance issue when deleting content on the last page.
- `#I715113` - Fixed an issue where image width values were not preserved when exporting to DOCX.
- `#I715058`, `#I712565` - Resolved issues with mapped content controls in headers and footers.
- `#I709838` - Fixed script errors that occurred during `Accept All` and `Reject All` operations in track changes.
- `#I714933` - Fixed paragraph layout issues in multi-column documents.
- `#I707365` - Addressed the auto fit table layout problems occurring during text insertion.
- `#I718360` - Fixed placeholder text insertion issue when using the `insertContentControl` API.
- `#I712236` - Fixed the style preservation issue when inserting text programmatically within selected bookmarks.
- `#I712559` - Improved behaviour when pasting table content into another table in the Document Editor.
- `#I715683` - Resolved layout inconsistencies in headers and footers while loading documents.
- `#I713462` - Fixed layout issues in footnote body content when pressing the Enter key.
- `#I720302` - Fixed the page number field updates issue during edit operations.

## 29.2.5 (2025-05-21)

### DocumentEditor

#### Bug Fixes

- `#I710210` - Fixed the issue with bookmark navigation in the editor.
- `#I715670` - Addressed the problem where the `LinkToPrevious` property for header and footer table widgets was not updating correctly.
- `#I713244` - Fixed the scrollbar not updating properly in the Document Editor when using Web Layout.
- `#I710185` - Resolved the issue where pasted content inside a table was not tracked correctly.
- `#I724703` - Fixed the issue with incorrect list numbering when pasting content.

## 29.2.4 (2025-05-14)

### DocumentEditor

#### Bug Fixes

- `#I709841`,`#I722525` - Improved editing performance when spell check is enabled.
- `#I716525` - Fixed performance issues related to bookmark manipulation during editing operations.
- `#I715428` - Resolved a script error that occurred when loading SFDT without injecting the editor module.
- `#I716353` - Fixed an issue where table cell content was clipped when zooming out.
- `#I709838` - Resolved a script error that occurred when exporting after performing a delete operation with track changes enabled.

#### Features

- `#I682661` - Added support for removing editing region in the current selection position.
- `#I706446` - Added support for retrieving fields within the selected range.
- `#I712473` - Added screen reader support in Document Editor.

## 29.1.41 (2025-05-06)

### DocumentEditor

#### Bug Fixes

- `#I712778` - Fixed an issue where a new paragraph was inserted outside the editable region in protected documents.
- `#I713902` - Corrected the underline rendering for the appropriate word during spell check.
- `#I710270` - Resolved a table formatting issue when applying shading to specific cells.
- `#I707681` - Fixed the DocumentEditor refresh issue when the spell checker is enabled.
- `#I701076` - Addressed an issue where bullet points were not applied correctly when pasting SFDT content.
- `#I719946` - Resolved a script error that occurred during repeated find-and-replace operations.

## 29.1.40 (2025-04-29)

### DocumentEditor

#### Bug Fixes

- `#I713147` - Fixed an issue where list formatting was not restored correctly after performing an undo action.
- `#FB66240` - Fixed an issue where spaces were incorrectly removed when checking or unchecking a checkbox.

## 29.1.39 (2025-04-22)

### DocumentEditor

#### Bug Fixes

- `#I705934` - Fixed the issue where paragraph borders were splitting during merge field insertion using the `insertField` API.
- `#I706158` - Improved cell content control insertion behaviour and resolved border rendering issues.
- `#I708026` - Fixed the overlapping issue with header tags.
- `#I705207` - Addressed the layout issue caused by section breaks during document editing.
- `#I705451` - Resolved the revision pane issue when opening documents using the Document Editor open API.
- `#I703602` - Fixed the `isComplete` flag incorrectly remaining true when dragging the mouse outside the Document Editor view.

## 29.1.38 (2025-04-15)

### DocumentEditor

#### Bug Fixes

- `#I699159` - Fixed the issue where indent was decreasing incorrectly in a list for the entire selection.
- `#I699123` - Fixed the issue with applying numbering and bullet lists.
- `#I703013` - Fixed the issue where the paragraph mark was not included when inserting a bookmark.
- `#I700209` - Fixed the issue where inserting a nested content control only inserted text instead of another content control.
- `#I702581` - Fixed the content control border rendering issue when the paragraph had an indent.
- `#I706170` - Fixed the content overlapping issue with the previous page footer during paragraph deletion.
- `#I705530` - Fixed the rendering issue of double underlines for spell check inside table cell.

## 29.1.37 (2025-04-08)

### DocumentEditor

#### Bug Fixes

- `#I702414` - Fixed an issue where a paragraph was inserted outside the editable region after pressing the End key in a restricted editing document.
- `#I703674` - Addressed the issue where paragraph borders were not fully visible.
- `#I697400` - Resolved a looping issue encountered when opening certain documents.
- `#I701520` - Fixed a formatting issue that occurred after inserting a hyperlink.
- `#I700199` - Resolved a paragraph splitting issue that occurred when removing multiple bookmarks programmatically.
- `#I698715` - Fixed key input issues caused by the timing of composition end for Japanese text.
- `#I698829` - Resolved a discrepancy in the `isComplete` property during selection changes made using the keyboard.
- `#I702270` - Fixed an issue where an extra new line was added in server-side exported documents.

## 29.1.35 (2025-04-01)

### DocumentEditor

#### Bug Fixes

- `#I689728` - Fixed text shifting to the previous page when applying formatting styles to a combined paragraph.
- `#I698686` - Fixed the undo issue for merged table cells.
- `#I693506` - Fixed table header row resizing incorrectly when adding a row to the table.
- `#I693683` - Fixed the issue where the document editor remained stuck on loading and failed to open documents.
- `#I698863` - Fixed the outline rendering issue for rounded rectangle shapes.
- `#I702446` - Fixed the edit region highlight issue when switching between print and web layouts.
- `#I701024` - Fixed the malformed URI issue on Mac during document serialization.
- `#I694808` - Fixed incorrect cursor positioning when continuously pressing Enter in a table cell that extends to the next page.
- `#I698411` - Improved performance when scrolling and typing in large documents with spell check enabled.
- `#I681319` - Fixed the issue where comments were removed when selecting text before the comment's end offset.
- `#I699227`, `#I699397` - Improved editing performance when continuously typing characters.
- `#I700275` - Fixed table layout issues with repeated header rows.
- `#I697583` - Fixed missing table cell content when exporting to DOCX.
- `#I652799` - Fixed incorrect cursor positioning when selecting a column cell.
- `#I701772` - Fixed style issues in content control text.
- `#I697055` - Fixed script errors when saving a document as a blob after deleting tracked changes content.

## 29.1.33 (2025-03-25)

### DocumentEditor

#### Features

- `#I690626` - Added support for preserving hidden text when opening and exporting Word documents.

## 28.2.12 (2025-03-19)

### DocumentEditor

#### Bug Fixes

- `#I691095` - Fixed an issue where the `getComments` API returned the same comment ID for both parent and reply comments.
- `#I695884` - Resolved a browser hanging issue caused by table row splitting when opening an attached document.
- `#I691853` - Fixed a list numbering issue in the Document Editor that occurred when pasting content multiple times.
- `#I693444` - Addressed an issue where the toggling of a checkbox content control did not reflect its character format.
- `#I701050` - Fixed a blob document import issue in the Document Editor when using a Docker container.
- `#I689203` - Resolved an issue where content deletion with track changes was not functioning correctly.
- `#I695107` - Fixed a cursor disappearance issue when pressing and holding the arrow button.

## 28.2.11 (2025-03-11)

### DocumentEditor

#### Bug Fixes

- `#F196134` - Fixed a script error that occurred when copying content containing checkbox content control properties.
- `#I688686` - Fixed the selection issue when applying upper-case formatting to text.
- `#I644193` - Fixed the XML mapping issue when copy pasting content controls within Document Editor.
- `#I691211` - Fixed the incorrect drop down list display by using the display text instead of the value.
- `#I691064` - Fixed the issue of removing and adding highlights to editable ranges using the `highlightEditableRanges` property.
- `#I686376` - Fixed a script error that occurred when undoing after performing Enter and Apply Style actions.
- `#I693248` - Fixed the issue where the editing region moved out of the viewport when the keyboard opened on mobile devices.
- `#I684310`, `#I693656` - Fixed the border rendering issue for nested content controls.
- `#I691211` - Improved typing performance inside a table when the document contains more than 400 content controls.

## 28.2.9 (2025-03-04)

### DocumentEditor

#### Bug Fixes

- `#I687932` - Fixed the issue where focus was not updated to the document when selecting a comment in the comment pane.
- `#I685571`, `#I694238` - Fixed the tab element formatting issue when opening the reported document.
- `#I683091` - Fixed the issue where cell size was not reverting correctly and an extra column was created after deleting a row.
- `#I683159` - Fixed the issue where the editable region start marker was not rendering correctly when a paragraph had a right margin.
- `#I691849` - Fixed the issue where Document Editor became unresponsive when accepting all changes in SFDT files containing multiple lists copied from Word.

## 28.2.7 (2025-02-25)

### DocumentEditor

#### Bug Fixes

- `#I682091` - Fixed a document corruption issue when applying a custom style and exporting to Docx.
- `#I683126` - Fixed a script error that occurred when performing undo, delete, and reject actions on track changes content.
- `#I691258` - Fixed an issue where undoing the deletion of list items did not work correctly with track changes enabled.
- `#I687962` - Fixed incorrect behaviour when applying "Capitalize Each Word" to sentences containing multiple words with apostrophes.
- `#I683579` - Fixed a spell checker issue that occurred when track changes were enabled on combined insertion and deletion content.
- `#I688793` - Fixed a script error that occurred when opening an SFDT document containing track changes content.

## 28.2.6 (2025-02-18)

### DocumentEditor

#### Bug Fixes

- `#I682967` - Fixed a script error that occurred when deleting content inside an edit region.
- `#I684112` - Fixed a script issue when opening a line-marker chart in Document Editor.
- `#I683052` - Fixed a bookmark insertion issue when spell check is enabled.

## 28.2.5 (2025-02-11)

### DocumentEditor

#### Bug Fixes

- `#I683467` - Improved performance by optimizing bookmark manipulation during text insertion.
- `#I684634` - Fixed an issue where focus moved to the document editor when selecting a tracked revision.
- `#I684435` - Resolved a freezing issue when accepting all tracked changes.
- `#I686056` - Fixed an issue where the background color was not updating properly in the properties pane.
- `#I679707` - Corrected the continuation of page numbers after restarting page numbering.
- `#I680995` - Fixed font rendering issues when applying the theme font to text.
- `#I687189` - Resolved caret height inconsistencies in collaborative editing.
- `#I682585` - Fixed incorrect list indentation when performing an undo action.
- `#F195801` - Resolved an issue where the content change event was triggered twice when applying a paragraph style.

## 28.2.4 (2025-02-04)

### DocumentEditor

#### Bug Fixes

- `#I680965` - Fixed document corruption when opening a client-side exported DOCX in Microsoft Word.
- `#I681505` - Fixed issues with programmatically added comment replies and text range selection in the Document Editor.
- `#I684705` - Fixed wavy underline rendering issue for non-misspelled words when pressing backspace.
- `#I680849` - Fixed missing split cell content when a row spans multiple pages.
- `#I667699` - Fixed missing content in shapes after copying and pasting the entire content, followed by server-side DOCX export.
- `#I678996`, `#I678997`, `#I678999` - Fixed script errors when accepting track changes in list paragraphs and table paragraphs.

## 28.1.39 (2024-01-14)

### DocumentEditor

#### Bug Fixes

- `#I660432` - Improved performance when applying formatting to an entire document.
- `#I668208` - Fixed text duplication caused by the move-down action outside the editable element after inserting text using Japanese IME on Windows.
- `#I665638` - Addressed issues with arrow keys, deletion, and keyboard input in form field protection mode for Content Controls.

## 28.1.38 (2025-01-07)

### DocumentEditor

#### Bug Fixes

- `#I665316` - Fixed layout issue during editing due to start and end fields being in different paragraphs.
- `#I664308` - Addressed the problem of HTML content not copying correctly to the clipboard when copying table content with block content control.
- `#I669203` - Corrected the issue where revisions in headers were not reflected in the track changes pane due to existing header/footer conditions.
- `#I675010` - Resolved script error encountered when removing inline contents that include field elements.
- `#I658140` - Improved performance when inserting text into split table cells across multiple pages.
- `#I665482` - Fixed script error that occurred when pasting content from Microsoft Word into the Document Editor after selecting table cell content.

## 28.1.37 (2024-12-31)

### DocumentEditor

#### Bug Fixes

- `#I646103` - Fixed the rendering issue of dot and circle bullets in the Ubuntu environment.
- `#I664612` - Fixed the application hanging issue when searching for text within a split cell widget using the find option.
- `#I665316` - Fixed the layout issue during editing actions caused by field start and end tags being in different paragraphs.
- `#I656347` - Fixed the issue where an empty cell was not added in a split row widget.
- `#I662866` - Fixed a script error that occurred when opening a document with block content controls inside a cell with revisions.
- `#I660441` - Fixed the issue where a table became corrupt after merging cells.
- `#I660453` - Fixed the issue where the replace API was not working when using a pattern to find and replace text.

## 28.1.36 (2024-12-24)

### DocumentEditor

#### Bug Fixes

- `#I664697` - Implemented image cropping for metafile images in the Document Editor.
- `#I662670` - Fixed the navigation pane issue where it moved to the start position when clicking sub-level headings. The selected heading is now properly highlighted.
- `#I653747` - Resolved the font family rendering issue for special characters when the `FontHintType` property is applied in the character format.
- `#I658305` - Corrected the updating of ordered list numbers when the list includes level overrides.
- `#I662705` - The `setDefaultCharacterFormat` API now functions correctly in the Document Editor.
- `#I652850` - Fixed cursor position updates and keyboard navigation issues for content controls in the Document Editor.
- `#I668350` - Addressed the bullet list symbol rendering issue in exported DOCX documents after inserting a bullet list in the Document Editor.
- `#I662244` - Resolved the track changes inconsistency issue in collaborative mode.
- `#I660426` - Fixed the undo issue that occurred after merging table cells.
- `#I661535` - Resolved the issue of span elements being present in comment data.

## 28.1.35 (2024-12-18)

### DocumentEditor

#### Bug Fixes

- `#I653914` - Script error no longer thrown when drag and drop the text in document editor.
- `#I655487` - Now, table column is rendered properly when imported the exported document.
- `#I656985` - Now, oval shape is preserved properly in the document editor.
- `#I658167` - Now table row get resized properly when we resize the row fast.
- `F194125` - Now, Footnote and content does not get overlap when edit inside the document.
- `#I640675` - Resolved the document freezing issue when reject the track changes.
- `#I651428` - Now, comment get removed properly when delete the paragraph and accept the changes.
- `#I661065` - Table border is rendered properly when table cell border's line style is set as none.
- `#I658922` - Now, check box is rendered properly after change the value as checked.
- `#I651509` - Provided content change event support to notify when protect and unprotected the document.
- `#I658140` - Resolved the performance issue that occurs when performing the undo and redo functions after copy pasting multiple paragraphs within a table.
- `#I656347` - Resolved the table layout issue when opening the exported document due to an improperly added row widget during exporting.
- `#I645286`, `#I647203` - Handled the logic to combine text ranges with the same character formatting in the paragraph when exporting as SFDT to resolve performance issues.
- `#I653756` - Resolved the content control border rendering issue for paragraph with lists and indentation applied.

## 27.2.4 (2024-11-26)

### DocumentEditor

#### Bug Fixes

- `#I647577` - Resolved the control freezing issue when opening Word document in Document Editor.
- `#I648529` - Resolved the script error issue when form fields inside header and footer.
- `#I649632` - Resolved the lists with negative `nsid` values in exported document.
- `#I649605` - Resolved the missing other properties of content control in `setContentControlInfo` API.
- `#I651950` - Now, disabled the comment insertion when selection inside footnote and endnote.

## 27.2.3 (2024-11-21)

### DocumentEditor

#### Bug Fixes

- `#I642653` - Resolved the XML mapping data document importing issue.
- `#I639842` - Resolved the layouting issue in RTL table.
- `#I644826` - Resolved the comments escape characters issue when opening exported document.
- `#I645913` - Resolved the selection issue incorrect behaviour with Comments.
- `#I623329` - Resolved the performance issues with document editor.
- `#I650898` - Resolved the Document generates a corrupted docx issue.
- `#I643649` - Now selection in document does not get changed after modifying the style.
- `#I644795` - Resolved the adding enter in syncfusion editor leads to weird tab behaviour issue.
- `#I645817` - Resolved the change case functionality bugs.
- `#I645091` - Resolved the table text outside table at end of page issue.

## 27.2.2 (2024-11-15)

### DocumentEditor

#### Bug Fixes

- `#I650912` - Resolved the comment pane is not shown issue while inserting the empty comment.

## 27.1.58 (2024-11-05)

### DocumentEditor

#### Bug Fixes

- `#I914903` - Resolved the endNote layouting issue.

## 27.1.57 (2024-10-29)

### DocumentEditor

#### Bug Fixes

- `#I644412` - Resolved the issue of editor deletes all text in document.
- `#I642436` - Resolve the issue with track Changes when pasting Word contents multiple times.
- `F194706` - Now able to copy highlighted text from word processor when Restrict Editing property is true.
- `#I640675` - Resolve script error when using track changes.
- `#I639276` - Resolved the issue of page freezes when trying to load document in document editor.

## 27.1.55 (2024-10-22)

### DocumentEditor

#### Bug Fixes

- `#I636914` - Now track changes working as expected when using collaboration.
- `#I641336` - Resolved the text overlap issue in document uploading.
- `#I636876` - Now script error does not get thrown when unmounting the DocumentEditor with collaboration.
- `#I638548` - Resolved the issue of document stays loading.
- `#I637068` - Now proper font family is updated for splitted Chinese text.
- `#I618565` - Now text get highlighted properly if user clicks on comment.

## 27.1.53 (2024-10-15)

### DocumentEditor

#### Bug Fixes

- `#I628955` - Resolved the Pie chart color issue in Blazor word processor.
- `#I627890` - Resolved the error in opening the document.
- `#I631391` - Resolved the Word Preview Freezes Browser issue.
- `#I632707` - Resolved the issue of tables with complex structures that have cells wrapping to the next page are not rendered.
- `#FB61513` - Resolved the error when saving track changes.
- `#I631081` - Resolved the table looping issue while opening attached sfdt.
- `#I638813` - Resolved the XSS vulnerability issue.
- `#I635143` - Resolved the mailto issue in the Document editor.
- `#I632855` - Resolved script error when try to download the document with unposted comments.
- `#I627023` - Now SpellCheck API pass the custom header when using beforeXmlHttpRequestSend.
- `#I631727` - Resolved the issue bullet points loses it style.
- `#I636298` - Now stopProtectionAsync reject properly when entered wrong password.
- `#I626464` - Resolved the Characters get hidden when typing multi languages with Track changes OFF.
- `#I632911` - Resolved console warning for missing modules in document editor.
- `#I630998` - Now able to add text after a content control when no other element is next to it.
- `#I622732` - Resolved script error while delete content after search text.
- `#I624123` - Resolved the footnote overlap with table issue in document editor.
- `#I635035` - Now Content control has been exported properly in document editor.
- `#I633148` - Resolved the issue multiple spell check triggered when inserting text.

#### Features

- `#I629004` - Added support for selecting revision in beforeAcceptRejectChanges event in document editor.
- `#I568983` - Provided support to refer external font in Document Editor.

## 27.1.52 (2024-10-08)

### DocumentEditor

#### Bug Fixes

- `#I636488` - Resolved the console error thrown when opening attached SFDT document.
- `#I630929` - Resolved the content not syncing properly after removing content control at the end of the document.
- `#I627161` - Resolved the RTL text formatting issue in Document Editor.

## 27.1.51 (2024-09-30)

### DocumentEditor

#### Bug Fixes

- `#I630170` - Resolved the paragraph shifting issue when pasting text content.
- `#I626306` - Resolved the font family and page content is not rendered properly.
- `F193063` - Resolved the time delay issue when using moveToDocumentStart and End API continuously after paste operation.
- `#I620990` - Resolved the script errors while undo / redo the bookmark.
- `#I631993` - Text gets selected properly now after deleting a selected bookmark.
- `#I627023` - Now changes are present when we use beforeXmlHttpRequestSend to modify the xmlhttprequest.
- `#I628666` - Resolved Script error occur when using save blob in Blazor maui hybrid mode.
- `#I629140` - Resolved script error when loading the document with content control.
- `#I631762` - Check box under font popup dialog now retained properly.
- `#I628921` - Heading font styles are now preserved properly while save and open the document.
- `#I635930` - Table background color now change properly when using the table properties pane.

## 27.1.50 (2024-09-24)

### DocumentEditor

#### Bug Fixes

- `#I623329` - Resolved the Heap memory increasing issue even after destroying the component.
- `#I624644` - Improved the performance of rendering border for content control.
- `#I627238` - Resolved formatting different when layouting the document.
- `#I625566` - Content control with multiple paragraph now exported properly.
- `#I626922` - Resolved script error when highlighting edit range.
- `#I624612` - Nested table border is not render properly.
- `#I627042` - Alert message it now shown properly when opening broken sfdt.
- `#I624582` - Formatting now preserved properly when copy/paste content from excel document.

## 27.1.48 (2024-09-18)

### DocumentEditor

#### Features

- `#I420700`, `#I425501`, `#I476988`, `#I508922`, `#I542244`, `#I556252`, `#I600435` - Added shapes support feature which allows you to preserve shapes in Word documents when opening and saving them in the Word Processor. Please refer to the [documentation](https://ej2.syncfusion.com/documentation/document-editor/shapes) and [demo](https://ej2.syncfusion.com/demos/#/fluent2/document-editor/autoshapes.html) for more details.
- `#F155458`, `#I329106`, `#I324222`, `#I315874`, `#I295727`, `#I291743`, `#I282998`, `#I280778`, `#I277336`, `#I275144`, `#I274602`, `#I273391`, `#I269063`, `#I268167`, `#I269063`, `#I361328`, `#I438671`, `#I546241`, `#I582321` - Added XML mapped content controls feature which allows you to insert content controls in your document that are linked to custom XML data. By mapping specific parts of your document to XML data, you can ensure that the content within these controls is automatically updated whenever the underlying XML data changes, making it ideal for dynamic documents. Please refer to the [documentation](https://ej2.syncfusion.com/documentation/document-editor/content-control) for more details.

- `#I420700`, `#I425501`, `#I476988`, `#I508922`, `#I542244`, `#I556252`, `#I600435` - Added shapes support feature which allows you to preserve shapes in Word documents when opening and saving them in the Word Processor. Please refer to the [documentation](https://ej2.syncfusion.com/vue/documentation/document-editor/shapes) and [demo](https://ej2.syncfusion.com/vue/demos/#/fluent2/document-editor/autoshapes.html) for more details.
- `#F155458`, `#I329106`, `#I324222`, `#I315874`, `#I295727`, `#I291743`, `#I282998`, `#I280778`, `#I277336`, `#I275144`, `#I274602`, `#I273391`, `#I269063`, `#I268167`, `#I269063`, `#I361328`, `#I438671`, `#I546241`, `#I582321` - Added XML mapped content controls feature which allows you to insert content controls in your document that are linked to custom XML data. By mapping specific parts of your document to XML data, you can ensure that the content within these controls is automatically updated whenever the underlying XML data changes, making it ideal for dynamic documents. Please refer to the [documentation](https://ej2.syncfusion.com/vue/documentation/document-editor/content-control) for more details.

## 26.2.12 (2024-09-10)

### DocumentEditor

#### Bug Fixes

- `#I626531` - Resolved the alignment issue column (spacing and width) in the page setup dialog box.
- `#I620813` - Resolved the script error issue when exporting the attached document.
- `#I618994` - Resolved the script error issue when copy pasting content for the given document.
- `#I620006` - Resolved the content overlapping issue when copy pasting external text.
- `#I625188`, `#I627428` - Resolved the multi column content copying issue.
- `#I624334` - Resolved the error when using text only option.
- `#I623974` - Resolved the line spacing issue after selecting text only in paste options.
- `#I618565` - Resolved the Issue appears while editing the track change document.

## 26.2.11 (2024-08-27)

### DocumentEditor

#### Bug Fixes

- `#I617570` - Resolved the time delay issue when opening the provided documents.
- `#I616985` - Resolved the issue that searching the content present in the document displays as no matches found.
- `#I622039` - Resolved the track changes pane is not opening while deleting changes.
- `#I608091` - Resolved the content overlapping issue when using insert text method.
- `#I618189` - Resolved the paging issue printing documents in landscape mode.
- `#F191318` - Resolved the double click behaviour changes.
- `#F193935` - Resolved the control freeze issue when preforming accept all action.
- `#I605284` - Paragraph marks in the Track Changes pane are now shown or hidden according to the value of the `showHiddenMarks`.

#### Features

- `#I617641` - Added support for context based paste options.

## 26.2.10 (2024-08-20)

### DocumentEditor

#### Bug Fixes

- `#I613623` - Resolved the script error occurs while copy pasting the content from Word when enabling spellcheck.
- `#I616511` - Resolved the problem with selecting and editing text after the comment inserted.
- `#I616207` - Resolved the table left margin issue when opening attached document.
- `#I616276` - Resolved the can edit and can delete values in content control are bound inversely.
- `#I620559` - Resolved the issue that Ctrl + H opens the Find option instead of replace option.
- `#I613766` - Resolved the single page content expanded into 13 pages issue in Document Editor.
- `#I616846` - Resolved the overlapping issue when updating table of contents field.

## 26.2.9 (2024-08-13)

### DocumentEditor

#### Bug Fixes

- `#I612018` - Resolved the combined merged cells deleting issue when deleting entire column.
- `#I614400` - Resolved the document corrupted issue when exporting document with TOC revisions.
- `#I612515` - Resolved the maximum call stack size exceeded issue after document loaded.
- `#I612103` - Resolved the text cannot be edited issue when picture is layouted behind the text.
- `#I606994` - Resolved the list paragraph copy pasting issue.

## 26.2.8 (2024-08-06)

### DocumentEditor

#### Bug Fixes

- `#I616045` - Resolved the endnote format is not applied and label mismatch in note property dialog.
- `#I595112` - Resolved the copy pasting issue while pasting the content as destination format.
- `#I597283` - Resolved the issues with bookmarks in Document Editor.
- `#I610080` - Resolved the revision split issue when inserting comment on deleted content.
- `#I607949` - Resolved the table row alignment issue when opening a document in editor
- `#I610857` - Resolved the issue that footnote is inserted but cannot be edited in protection enabled document.
- `#I613938` - Resolved the Editor formatting getting corrupted issue.

## 26.2.7 (2024-07-30)

### DocumentEditor

#### Bug Fixes

- `#I597088` - Resolved the footnote and endnote numbers appearing as box issue.
- `#I613353`, `#I610202` - Resolved the issue occurs when copying the paragraph.
- `#I607408` - Resolved the copy pasting issue with certain chars on enabling local paste.
- `#I605357`, `I605371` - Resolved the footnote and endnote inconsistent behaviour with track changes.
- `#I609576` - Resolved the content layout issue on protected edit region.
- `#I607325` - Resolved the content gets overlapped issue when selection moves to header.
- `#I607277` - Resolved the script error when applying border for merged cells.
- `#I606994` - Resolved the script error issue when copy pasting list.
- `#I606137` - Resolved the content overlapping issue when the track changes alert dialog closed.
- `#I610807` - Resolved the script error issue when exporting document as PDF.

## 26.2.4 (2024-07-24)

### DocumentEditor

#### Bug Fixes

- `#I604324` - Resolved the issue that endnote are not visible in DocumentEditor when it splitted to next page.
- `#I611455` - Word document viewer now working properly in open method when display control after document open.
- `#I605521` - Text in comment section is now showing in correct format.
- `#I603460` - Resolved the content control border issue when insert multiple paragraph.

## 26.1.42 (2024-07-16)

### DocumentEditor

#### Bug Fixes

- `#I597193` - DocumentEditor properly edited table cell that sprawls multiple pages.
- `#I600466` - Resolved the table overlapping issue.
- `#F188884` - Resolved the type error cannot read properties of undefined (reading 'paragraph') when switching layout modes.
- `#I602758`, `I607110` - Resolved the issue that bullet points disappearing when adding new lines before.
- `#I605797` - Resolved the Alt text missing when copy/paste the title *Impression:*.
- `#I605542` - Resolved the issue that adding time stamp parameter to image URLs Causing 403 Error.
- `#I607449` - Resolved the issue that inserting footnotes in headings trigger layout issues when navigation pane is open.
- `#I609613` - Resolved the issue that script error occurs while switching from web layout to print layout.
- `#I604994` - Resolved the issue of selected content isn't deleted properly.
- `#I598395` - Resolved the script error issue when exporting attached document as SFDT.
- `#I603179`, `I604479` - Resolved the issue that Added the revision with text table of content while clicking the find button.
- `#I604994` - Resolved the improper deletion when track changes enabled.

## 26.1.41 (2024-07-09)

### DocumentEditor

#### Bug Fixes

- `#I596607` - Resolved the bookmark marker rendering issue.
- `#I604485` - Resolved the shape rendering issue.
- `#I595112` - Resolved the copy pasting issue while pasting the content as destination format.
- `#I595816` - Resolved the hanging issue occurred while opening the attached sfdt.
- `#I601514` - Resolved the table overlapping issue when editing inside the table.
- `#I602853` - Resolved the lines disappear issue when pressing tab from backward and undoing.
- `#I595604` - Resolved the form field highlight issue while switching web to page layout.
- `#I598645` - Resolved the document loading issue with custom header.

## 26.1.40 (2024-07-02)

### DocumentEditor

#### Bug Fixes

- `#I599170` - Resolved the bookmarks are not added properly in Document Editor.
- `#I599982` - Resolved the bookmark not navigation issue while clicking the hyperlink.
- `#I600181` - Resolved the script error issue when modify the levels in table of contents.
- `#I598250` - Resolved the before comment action event behaviour issues.
- `#I576525` - Resolved the performance issue when editing paragraph that split into multiple pages.
- `#I600212`, `#I429607` - Resolved the bookmark is not retrieved when selecting the table cell.

#### Features

- `#I559439` - Added support to apply multicolumn for selected paragraph.

## 26.1.39 (2024-06-25)

### DocumentEditor

#### Bug Fixes

- `#I585937`, `I588421` - Resolve the editor shrink issue, while close the comment pane.
- `#I466554` - Resolved the unresponsive issue while backspacing table.
- `#I588278`, `I558603` - Resolved table layout issue while opening HTML pages.
- `#I595405` - Resolved the paste image issue after opening document content through paste API.
- `#I597223` - SFDT is exported properly for selected content.
- `#I600065` - Resolved the script error issue when accept or reject track changes.
- `#I588943` - Resolved the script error, while delete the contents.
- `#I591394` - Resolved the coping and pasting lists loses indentation issue.
- `#I591792` - Resolved the table border render issue when opening exported document.
- `#I591145` - Resolved the overlapping issue while opening the attached sfdt.

## 26.1.38 (2024-06-19)

### DocumentEditor

#### Bug Fixes

- `#I590548` - Resolved the layout issue when opening the attached document.
- `#I598215` - Resolved the table auto fit columns issue when opening attached document
- `#I591154` - Resolved the spellcheck local storage issue.
- `#I592343` - Resolved the comment icon removal issue.
- `#I576560` - Resolved the multi column layout issue in Word 2010 Compatibility mode.
- `#I588649` - Resolved the table resizing issue.

#### Features

- `#I559439` - Added the support to add a paragraph before the table.

## 26.1.35 (2024-06-11)

### DocumentEditor

#### Features

- `#F155458`, `#I329106`, `#I324222`, `#I315874`, `#I295727`, `#I291743`, `#I282998`, `#I280778`, `#I277336`, `#I275144`, `#I274602`, `#I273391`, `#I269063`, `#I268167`, `#I269063`, `#I361328`, `#I438671`, `#I546241`, `#I582321` - Content controls are individual controls that users can add and customize for use in templates, forms, and documents. (Rich text, plain text, dropdown list, check box, date picker, combo box and picture). Check out the [demo](https://ej2.syncfusion.com/demos/#/bootstrap5/document-editor/bindUI-to-document.html) here.

- `#F155458`, `#I329106`, `#I324222`, `#I315874`, `#I295727`, `#I291743`, `#I282998`, `#I280778`, `#I277336`, `#I275144`, `#I274602`, `#I273391`, `#I269063`, `#I268167`, `#I269063`, `#I361328`, `#I438671`, `#I546241`, `#I582321` - Content controls are individual controls that users can add and customize for use in templates, forms, and documents. (Rich text, plain text, dropdown list, check box, date picker, combo box and picture). Check out the [demo](https://ej2.syncfusion.com/vue/demos/#/bootstrap5/document-editor/bindui-to-document.html) here.

## 25.2.7 (2024-06-04)

### DocumentEditor

#### Bug Fixes

- `#I586051` - Resolved the script error when passing null value to open API.
- `#F188215` - Resolved the Horizontal scrollbar in Continuous layout type.
- `#I576525` - Resolved the script error issue when inserting bookmarks with the same name.
- `#I578500` - Resolved the hanging and layout issue when split the widow control paragraph inside table.
- `#I588495` - Resolved the hanging issue when opening a document with big image inside table.
- `#I592601` - Resolved a script error when undoing style changes.
- `#I592608` - Resolved a content syncing issue when switching paste options.

## 25.2.6 (2024-05-28)

### DocumentEditor

#### Bug Fixes

- `#I588344` - Resolved the content overlapping issue when editing multi column document.
- `#I586107` - Resolved the script error when inserting image.
- `#I585401` - Resolved the tab anchor issue in ruler when right clicking on it.
- `#I586654` - Resolved the strange indentation behaviour when editing list item.

## 25.2.5 (2024-05-21)

### DocumentEditor

#### Bug Fixes

- `#I584933` - Resolved the Manage Styles is missing from the DocumentEditor.
- `#I585396` - Resolved the odd cursor behaviour with superscript and subscript.
- `#I583968` - Resolved the insert field issue when local paste is enabled.
- `#I587711` - Resolved the spellcheck change all does not work on document opening case.
- `#I586658` - Resolved the backspace issue while deleting list item.
- `#I585406` - Resolved the spellcheck annotation disappears issue when cursor is in range.

## 25.2.4 (2024-05-14)

### DocumentEditor

#### Bug Fixes

- `#F187485` - Resolved the issue of Form Field dialog always pops up upon double clicking anywhere within the word document.
- `#I575901` - Resolved the table divided to next page.
- `#I560985` - Resolved table cell split issue in the attached document.
- `#F187818` - Resolved the document collapse issue while undoing.

## 25.1.42 (2024-04-30)

### DocumentEditor

#### Bug Fixes

- `#I575385` - Resolved the multi column line split issue when opening attached document.
- `#I576161` - Resolved the hyperlink preservation issue in pane.
- `#I576442` - Resolved the table not properly aligned issue.
- `#I576647` - Resolved list numbering change issue, while editing the content.
- `#I580085` - Resolved the Combo box focus issue in document editor.
- `#I561167` - Resolved hyperlink style issue while reject the changes.

## 25.1.41 (2024-04-23)

### DocumentEditor

#### Bug Fixes

- `#I576244` - Resolved the tracking changes avatar undefined when last name empty.
- `#I572963` - Resolved the overlapping issue when hitting the backspace key.
- `#I575590` - Resolve the console error issue while adding the mail merge fields.

## 25.1.40 (2024-04-16)

### DocumentEditor

#### Bug Fixes

- `#I565023` - Resolved the list formatting issue in the attached document.
- `#I542227` - Resolved the overlapping issue when editing the justified paragraph.
- `#I573648` - Resolved the empty paragraph added issue while pasting content.

## 25.1.39 (2024-04-09)

### DocumentEditor

#### Bug Fixes

- `#I556448` - Resolved the table header rendering issue.
- `#I559218` - Resolved the table border issue in the attached document.
- `#I561167` - Resolved the hyperlink style issue while reject the changes.
- `#I562628` - Resolved the application crashes when performing reject all changes.
- `#I562668` - Resolved the list level preservation issue.
- `#I562943` - Resolved the track changes disable issue while stop RevisionsOnly protection.
- `#I563223` - Resolved the paragraph indentation and border render issues inside table.
- `#I565315` - Resolved the issue of applying character style to the selected text.
- `#I529797` - Resolved the search issue when using plus symbol.
- `#I565843` - Resolved the undo issue while applying border style in table.

## 25.1.38 (2024-04-02)

### DocumentEditor

#### Bug Fixes

- `#I558448` - Added the preservation support for the list's paragraph style property.
- `#I543917` - Resolved the table layout and border rendering issue.

## 25.1.37 (2024-03-26)

### DocumentEditor

#### Bug Fixes

- `#I545513` - Added the preservation support for table style property in Document editor.
- `#I548396` - Resolved the page number not refreshed issue while delete page.
- `#I549835` - Resolved the document lagging issue.
- `#I553758` - Resolved the editing issue in the attached document, which contains a chart.
- `#I556874` - Resolved the script error issue when performing undo action on table.
- `#I558460` - Resolved the tab rendering issue in the attached document.
- `#I558529` - Resolved the form field editing issue in read only mode.
- `#I558289` - Resolved the list numbering issue.
- `#I558259` - Resolved the content formatting issue when removing hyperlink.
- `#I559197` - Resolved the drag and drop issue.
- `#I559912` - Resolved the image removed issue when selecting an image and perform enter action.
- `#I561716` - Resolved the duplicate image string added to sfdt issue while drag and drop.
- `#I561052` - Resolved the cursor position issue in mobile mode.
- `#I563837` - Resolved the table overlapping issue in the attached document.
- `#F186648` - Resolved the script error issue while opening a attached document.
- `#F186745` - Resolved the table splitting issue in the merge cell.

## 25.1.35 (2024-03-15)

### DocumentEditor

#### Features

- `#I560979` - Added the server action settings API for spellcheck by page.
- `#F139237`, `#I225881`, `#I238529`, `F147966`, `#I251329`, `#I255850`, `#I269572`, `F156967`, `#I294592`, `#I308077`, `#I285839`, `#I312842`, `#I315455`, `#I325461`, `#I326378`, `F169367`, `#I345520`, `#I348003`, `#I357490`, `#I357833`, `#I357923`, `#I361570`, `#I361614`, `#I364681`, `#I369799`, `#I369893`, `#I370223`, `#I371589`, `#I391523` - Added support for collaborative editing. With this feature you can draft and edit Word documents together with multiple users at the same time.
- `#I304171`, `#I269478`, `#419821`, `#I500679` - Added support for heading navigation support.
- `#I317930`, `#I318103`, `#I343750`, `#349393`, `#F164868` - Added change case functionality allows users to quickly change the capitalization of the selected text.
- Document Editor now supports saving the document as a Word Template (DOTX).
- `#I458609`, `#I355736`, `#I257172`, `#I348514`, `#F165825` - Add support to customize color picker in Document Editor.
- `#I264509`, `#I280374`, `#I291521`, `#I327285`, `#F166016`, `#F176988` - Added mention support for comments.

## 24.2.9 (2024-03-05)

### DocumentEditor

#### Bug Fixes

- `#I555058` - Resolved the shape position issue in the attached document.
- `#I546422` - Resolved the presence of additional spacing in the Arabic document.
- `#I544048` - Resolved the before spacing issue.
- `#I547781` - Resolved the show revisions API not working properly issue.
- `#I540605`, `I527154` - Resolved the copy pasting issue in blazor.

## 24.2.8 (2024-02-27)

### DocumentEditor

#### Bug Fixes

- `#I549317` - Resolved the layouting issue when opening attached document.
- `#I541401` - Resolved the indentation rendering issue.
- `#I546320` - Resolved the spell checker suggestions not replacing issue.
- `#I543922` - Resolved the layouting issue when line spacing type is exactly.
- `#I545234` - Resolved the spell check issues in blazor.
- `#I555335` - Resolved the character format applying issue when pasting sfdt content.
- `#I529782` - Resolved the overlapping issue while opening the attached document.
- `#I524548` - Resolved the font family issue in table of content.
- `#I547495` - Resolved the column content missing issue.
- `#I547296` - Resolved the Arabic content copy pasting issue.

## 24.2.7 (2024-02-20)

### DocumentEditor

#### Bug Fixes

- `#I553680` - Resolved the script error issue while click print button.
- `#I542229` - Resolved the document layout issue in Blazor.
- `#I548069` - Resolved the spell check squiggly lines render issue on print.
- `#I546222` - Resolved the script error issue while applying table border.
- `#I533544` - Resolved the table resize undo issue.
- `#I526592` - Resolved the list numbering is not continuing issue.
- `#I548595` - Resolved the text ordered incorrectly while typing in Blazor.

## 24.2.5 (2024-02-13)

### DocumentEditor

#### Bug Fixes

- `#I554171` - Resolved the document corruption in save as blob exported document.
- `#I544606` - Resolved the arabic text selection issue when selecting justified rtl paragraph.
- `#I544673` - Resolved the page number field text update issue.
- `#I543368` - Resolved the numbers of each section has been changed to roman numerals issue.
- `#I543923` - Resolved the extra table is being displayed on the first page.

## 24.2.4 (2024-02-06)

### DocumentEditor

#### Bug Fixes

- `#I526349` - Resolved the shape overlapping issue.
- `#I507001` - Resolved the track changes count mismatch issue.
- `#I542276` - Resolved the shape alignment issue when insert enter.
- `#I543927` - Resolved the spacing issue of the image is being pushed to a third page.
- `#I538962` - Resolved the issues when accepting the track changes.
- `#I534920` - Resolved the track changes issue.
- `#I539334` - Resolved the undo issue with deleted table on track changes enabled.
- `#I543421` - Resolved the spell check issue in Blazor.
- `#I525746` - Resolved the input lag issue when using multi columns.
- `#I541459` - Resolved the table border style issue.

## 24.1.47 (2024-01-23)

### DocumentEditor

#### Bug Fixes

- `#I515234` - Resolved the issue in paragraph goes to page end while press enter.
- `#I533538` - Resolved the tracking issue in the revisions only protection mode.
- `#I539142` - Resolved the script error issue while pasting content.
- `#I536328` - Resolved the footnote duplicating issue.
- `#I539648` - Resolved script error issue and layout issue in the exported document.

## 24.1.46 (2024-01-17)

### DocumentEditor

#### Bug Fixes

- `#I532824` - Resolved list numbering issue in the attached document.
- `#I531058` - Resolved the reply comment sorted issue.
- `#I532310` - Resolved Issue while opening the document Editor exported document.
- `#F185679` - Resolve script error and deleting cell from table removes other texts outside table.

## 24.1.45 (2024-01-09)

### DocumentEditor

#### Bug Fixes

- `#I528964` - Resolved the table border issue when exporting as docx.
- `#I531058` - Resolved the reply comment sorted issue.
- `#I453495` - Resolved the shape element shifting issue when pressing enter.
- `#I528503` - Resolved the script error issue in server side rendering.

## 24.1.44 (2024-01-03)

### DocumentEditor

#### Bug Fixes

- `#I523857` - Resolved the performance issue while updating the field in document.
- `#I526974` - Resolved control freeze issue while pasting content inside table.
- `#I526633` - Resolved the issue in rendering of shape element.

## 24.1.43 (2023-12-27)

### DocumentEditor

#### Bug Fixes

- `#I514005` - Resolved section break parsing issue while pasting.
- `#I515062` - Resolved Locale constant missing in Vietnamese.
- `#I520469` - Resolved Alignment issue in document editor.
- `#I524057` - Resolved The arabic selection issue.
- `#I520821` - Resolved Justify Enter issue for Arabic text.
- `#I523987` - Resolved the hyphen text is not rendered issue.
- `#I526246` - Resolved Spell Check dialog popup issue.
- `#I526232` - Resolved the list continuity issue on paste content.
- `#I527224` - Resolved Open Hyperlink & Copy Hyperlink missing in contextMenu while readOnly mode.
- `#I529797` - Resolved the Search result return Zero.
- `#I532949` - Resolved the list numbering issue

## 24.1.41 (2023-12-18)

### DocumentEditor

#### Bug Fixes

- `#I516207` - Resolved the issue of search text of footnote content.
- `#I513118` - Resolved the Background Color is missing in exported document issue.
- `#I517682` - Resolved the document corrupted issue on exporting as Docx.
- `#I514089` - Resolved overlapping issue while pasting.
- `#I521049` - Resolved the issue in search the font in style dropdown.
- `#I514009` - Resolved the script error when undoing pasted table.
- `#I515234` - Resolved the issue in paragraph goes to page end while press enter.
- `#I516988` - Resolved the SFDT list property is not populated issue.
- `#I515700` - Resolved script error issue while exporting the document.
- `#I514962` - Resolved the issue in selection is not updated properly while inserting text.
- `#I513117` - Resolved editing and last page delete issue.
- `#I525400` - Resolved issue in paste.
- `#I513061` - Resolved editing issues in the attached document.
- `#I516733` - Resolved the script error issue while pasting content.

#### Features

- `#F139237`,`#I225881`,`#I238529`,`F147966`,`#I251329`,`#I255850`,`#I269572`,`F156967`,`#I294592`,`#I308077`,`#I285839`,`#I312842`,`#I315455`,`#I325461`,`#I326378`,`F169367`,`#I345520`,`#I348003`,`#I357490`,`#I357833`,`#I357923`,`#I361570`,`#I361614`,`#I364681`,`#I369799`,`#I369893`,`#I370223`,`#I371589`,`#I391523` - Added support for collaborative editing in `preview` mode. With this feature you can draft and edit Word documents together with multiple users at the same time.

## 23.2.6 (2023-11-28)

### DocumentEditor

#### Bug Fixes

- `#I515528` - Resolved the strange behaviour of track changes on backspace and delete action.
- `#I517039` - Resolved the cut issue in table when track changes is enabled.
- `#I518614` - Resolved the hyperlink removing issue.
- `#I513222` - Resolved the script error issue when opening attached document.
- `#I513443` - Resolved the Exception issue when disable toolbar in blazor.
- `#I507772` - Resolved the spellcheck underline issue on editing text.
- `#I518011` - Resolved the find and replace issue for restricted document.

## 23.2.5 (2023-11-23)

### DocumentEditor

#### Bug Fixes

- `#I512661` - Resolved the TOC updating issue in the attached document.
- `#I519561` - Resolved the track changes issues.
- `#I521082` - Resolved the script error issue while accepting tracked changes.
- `#I514000` - Resolved the script error while opening the attached document.
- `#I516382` - Resolved the page ordering issue in the exported document.
- `#I519451` - Resolved the script error issue when export as docx after accept all changes.
- `#I519571` - Resolved the issue in track changes on enter.
- `#I520505` - Resolved the issue of undo track changes with bullet numbering.

## 23.2.4 (2023-11-20)

### DocumentEditor

#### Bug Fixes

- `#I509814` - Resolved the bullet list character format losses issue when pasting the sfdt.
- `#I511667` - Resolved the TIFF image rendering issue with RTF file.
- `#I512264` - Resolved the section Break continuous issue.
- `#I513068` - Resolved script error issue while deleting the floating table.
- `#I513107` - Resolved the section break continuous issue when press the delete key.
- `#I504697` - Resolved the control hanging issue while opening the document.
- `#I512059` - Resolved the URL image not appear issue until interact with document.
- `#I509812` - Resolved the format losses issue when pasting the copied HTML text.

#### Features

- `#I491720` - Added support to set target element to append the Dialog and Context menu.
- `#I499751` - Added support to display the symbol field code text in client side.
- `#I501878` - Added support to preserve the carriage return character.
- `#I503197` - Added API to check whether the document is empty or not.

## 23.1.44 (2023-11-07)

### DocumentEditor

#### Bug Fixes

- `#I510408` - Resolved keep para together issue with RTF file.
- `#I509697` - Resolved script error throws while opening a document.
- `#I511095` - Resolved the paragraph and table rendering issue on If field condition.
- `#I510706` - The text is not inserted in proper order on spell check enable mode.
- `#I513307` - Resolved the SFDT pasting issue in blazor DocumentEditor.
- `#I508874` - Resolved the script error when export as docx document.
- `#I511641` - Underline for misspelled word not rendering properly in RTL text.
- `#I509516` - Resolved the SVG image export and import issue as URL.
- `#I513724` - Resolved the image rendering for screen tip text while hovering hyperlink.
- `#I508875` - Resolved the cell content control layout issue in table.

## 23.1.43 (2023-10-31)

### DocumentEditor

#### Bug Fixes

- `#I510262` - Resolved the edit issue of Restrict Editing with comments only.
- `#I508928` - Resolved the exception when update field the attached document.
- `#I510261` - Resolved the duplicate last page on save when using external styles.

## 23.1.42 (2023-10-24)

### DocumentEditor

#### Bug Fixes

- `#FB47474` -  Resolved the serialize API returns hyperlink to number
- `#I508875` -  Resolved the cell content control check box alignment issue in table.
- `#I494044` -  Resolved the Issue in bullet and numbering list
- `#I509697` -  Resolved script error throws while opening a document
- `#I507568` -  Word Processor now loads the  RTF file with margin properly.
- `#I505872` -  Resolved the issue with respect to page break and section break continuous.

## 23.1.41 (2023-10-17)

### DocumentEditor

#### Bug Fixes

- `#I504910` - Resolve the script error issue when loading document in blazor.
- `#I506290` - When performing edit operation and save the document it throws script error document is not saved.
- `#I506225` - Resolve the issue of reply comments in the comment tab.
- `#I506000` - Resolve script error issue while opening the attached document.

## 23.1.40 (2023-10-10)

### DocumentEditor

#### Bug Fixes

- `#I483749` - Resolved the table title and description preservation issue in server side save.
- `#I504150` - Resolved the svg image issue.
- `#I485502` - Resolved the URL image refresh issue while opening the exported document.
- `#I505977` - Heading style destroyed when insert hyperlink.
- `#I506107` - Resolved the issue, footnote content is disappeared when open saved sfdt.
- `#I506619` - Resolved the exporting issue of attached sfdt.
- `#I503945` - Script error occurred when tried to save the document using java server.

#### New Features

- `#I397854`, `#I401771` - Added support for editing alternate text for images.
- `#I370306`, `#I438565` - Added support for character spacing and scaling.
- `#I273864`, `#I318326`, `#I325320`, `#I331615`, `#I339872`, `#F164047` - Added support for linking to the previous header/footer.
- `#I445060`, `#I468741` - Added a property in the `selectionChanged` event arguments to identify whether the user has completed their selection.

## 21.2.10 (2023-06-13)

### Document Editor

#### Bug Fixes

- `#I470779` - Resolved the script error when inserting comments while restrict editing is enabled.
- `#I467632` - Resolved the Script error is thrown when opening a document after performing FindAllAsync.
- `#I444469`, `#I467461` - Resolved the Script error occurs when opening a document.
- `#I467769` - Print widow now closed properly after closing the parent window.

## 21.2.9 (2023-06-06)

### Document Editor

#### Bug Fixes

- `#I454822` - Resolved the issue occurred when performing the pasting functionality.
- `#I455887` - Resolved the Editor height is increased issue when selecting or inserting text.
- `#I461390` - Resolved the Endnote/footnote number inconsistency.
- `#F182256` - Table cell border now applying properly.
- `#I458144` - Now, Docx exporting properly.
- `#I464522` - Resolved the issue in bookmark removal when deleting table.
- `#I466742` - Resolved the text selection issue while retrieving the selected text.

## 21.2.8 (2023-05-30)

### Document Editor

#### Bug Fixes

- `#I454919` - ShowComment API is now working properly.
- `#FB43366` - when track changes is enabled, chinese letters are now properly rendered.
- `#I457517` - Resolved script error occurred when removing the content.
- `#I454821` - Resolved the issue with document parsing in the Tika server.
- `#I457688` - Resolved the selected content removing issue.
- `#I457853` - Select all content is now removed properly.
- `#I458134` - Table is now rendered properly without overlapping issue.
- `#I459215` - Resolved Black color chart appearance while exporting as Docx.
- `#I459220` - Resolved the component hanging issue on loading a document.
- `#I459229` - Delete/backspace is now working for RTL last content.
- `#I461305` - Resolved the style issue while pasting content from office 365.
- `#I453980` - When opening the exported document with chart in Document Editor is not throwing an error.
- `#I459906` - Header/Footer class is now added while converting docx/SFDT into HTML.
- `#F182457` - Resolved the style issue while pasting content from office 365.

## 21.2.6 (2023-05-23)

### Document Editor

#### Bug Fixes

- `#I455945` - Resolved the issue in Shape position.
- `#I457467` - Now, getStyle() API will return the paragraph format.
- `#I454858` - Resolved the image missing issue in footer.
- `#I451667` - Horizontal scroll bar is not update properly based on cursor position.
- `#I457039` - Resolved the console error while giving accept all.
- `#I453407` - Resolved the script error when loading the document with smileys.

#### New Features

- `#I448978` - Added preservation support for text wrapping break.
- `#F179297` - Added navigation support between the multiple comments in a single line while clicking the comment icon.
- `#I433546` - Added support to show start and end markers for restricted range.
- `#I450206` - Added support to restrict maximum number of columns when creating a table.

## 21.2.5 (2023-05-16)

### Document Editor

#### Bug Fixes

- `#I449912` - Resolved layout issue while opening document.
- `#I450342` - Resolved the wrong Font issue while opening a document.
- `#I458331` - Resolved the paragraph combine issue when insert and delete comment.
- `#I458334` - Cursor position issue is resolved when shift enter key is pressed.
- `#I449581` - Resolved the script error when loading the track changes document with author field empty
- `#I452303` - Layout issue is now not occurred when editing the document.
- `#I452150` - Resolved the hanging issue when opening the attached document.
- `#I453495` - Resolved the Overlapping issue when we do enter/page break before the shape.
- `#I453196` - Resolved the issue in when perform undo action for Arabic content
- `#I454659` - Resolved the issue occurred when performing track changes for Arabic content.
- `#I449049` - A performance issue is resolved when typing inside the table.

## 21.2.4 (2023-05-09)

### Document Editor

#### Bug Fixes

- `#I451421` - Resolved the issue with list indentation.
- `#I450834` - Resolved the Script issue while opening SFDT.
- `#I452243` - Resolved the issue with modifying the style in existing styles.
- `#I449324` - Resolved the issue occurred while exporting the document in the .docx format.

## 21.2.3 (2023-05-03)

### Document Editor

#### Bug Fixes

- `#SF-446881` - Using getFormFieldNames() methods, now form fields are retrieved in order.
- `#F181200` - Resolved Script error thrown when attempting to delete a checkbox form field.
- `#SF-448155` - Resolved the position issue while resizing table.
- `#FB42313`- Resolved Table Merge Cell & Insert Column bug.
- `#SF-449967` - Resolved the problem with the loading of the document.

## 21.1.41 (2023-04-18)

### Document Editor

#### Bug Fixes

- `#SF-447180` - Resolved Allow row to break across pages issue.
- `#SF-439301` - Resolved Textbox and picture is not preserved properly in Header.
- `#SF-442538` - Resolved the script error while updating table of contents.
- `#SF-447249` - Resolved issue in default character format.
- `#SF-447180` - Resolved Layouting issue while opening the document.
- `#SF-447117` - Resolved the issue with the replacement of the incorrect word.
- `#SF-444154` - Resolved the text is not preserved while drag and drop.
- `#SF-452497` - Resolved the script error while pasting images with text content.

## 21.1.39 (2023-04-11)

### Document Editor

#### Bug Fixes

- `#SF-442240` - Resolved the space issue while opening document.
- `#SF-446434` - Resolved the border rendering issue in first page.
- `#SF-442538` - Resolved the list number issue when updating table of contents.
- `#SF-443314` - Resolved the script errors while delete the content with track changes enabled.
- `#SF-444283` - Resolved the script error while loading mail merged document.
- `#SF-448042` - Resolved the Blank page created while printing with A5 paper.
- `#SF-434487` - Improved the cache logic in spell check for text with special character.

#### New Features

 - `#SF-438580` - Added support for the event `beforeAcceptRejectChanges` to prevent accepting or rejecting tracked changes.

## 21.1.38 (2023-04-04)

### Document Editor

#### Bug Fixes

- `#SF-440282` - Resolved an error while trying to change font for whole document.
- `#SF-441499` - Resolved the script error while opening Document.
- `#SF-438842` - Header/Footer area are now resized based on the inserted image.
- `#SF-441437` - Resolved the dropdown form field items expanding issue.

#### New Features

- `#I418721` - Added API to auto resize when the Document editor became visible.

## 21.1.37 (2023-03-29)

### Document Editor

#### Bug Fixes

- `#I438125` - Resolved the header issue when editing in different section format.
- `#I439280` - Selection is now working properly in the paragraph with indentation.
- `#I436536`, `#I435119` - Table and paragraph is not overlapped while loading the attached document.
- `#I436445` - Resolved the overlapping issue while opening the document.
- `#I446019` - Resolved the issue in opening "Dotx" format document.

## 21.1.35 (2023-03-23)

### Document Editor

#### Breaking Changes

- Starting from version v21.1.x, the SFDT file generated in Word Processor component is optimized by default to reduce the file size. Hence, the optimized SFDT files can't be directly manipulated as JSON string. Please refer the [documentation](https://ej2.syncfusion.com/documentation/document-editor/how-to/optimize-sfdt).

#### Bug Fixes

- `#425697` - Resolved the positioning and line spacing issue in shape document

#### New Features

- `#I249004`, `#I250933`, `#I256703`, `#I286287`, `#I290760`, `#I301513`, `#I313194`, `#I314827`, `#I316496`, `#I317964`, `#I320201`, `#I320872`, `#I327636`,  `#I331310`, `#I333899`, `#I334058`, `#I334929`, `#I337202`, `#I341931`, `#I341953`, `#I345929`, `#I348344`, `#I349206`, `#I349683`, `#I349895`, `#I354081`, `#I356432` - Added support for continuous section break in DocumentEditor.
- `#I422408`, `#I435125` - Optimized SFDT file to reduce the file size relative to a Docx file.
- `#I330729`, `#I256794` - Added support to display bookmark start and end in DocumentEditor.
- `#I333042`, `#I349829` - Added support disable the auto focus to DocumentEditor.
- `#I175038` - Added API to modify the predefine styles in DocumentEditor.

## 20.4.54 (2023-03-14)

### Document Editor

#### Bug Fixes

- `#I436974` - Combined the next paragraph while removing the paragraph mark.
- `#I436444` - Resolved the control hanging issue when editing inside table.
- `#I442823` - Restricted text inserting issue when restrict editing is in enabled state.

## 20.4.53 (2023-03-07)

### Document Editor

#### Bug Fixes

- `#I443034` - Resolved the font applying issue for Arabic content.
- `#I439255` - Resolved issue in "Allow spacing between the cells" check box.
- `#I438742` - Restricted editing in form field when it is disabled.

## 20.4.52 (2023-02-28)

### Document Editor

#### Bug Fixes

- `#I436133` - When inserting, the endnote order was resolved.
- `#I434491` - Resolved the Text off the page and outside the margin issue when paste the text.

## 20.4.51 (2023-02-21)

### Document Editor

#### Bug Fixes

- `#I434382` - Resolved script error thrown while clicking the New button after loading protected document.
- `#I436256` - Accept All/ Reject All  is now disappear in Read only.

## 20.4.50 (2023-02-14)

### Document Editor

#### Bug Fixes

- `#I426407` - Resolved the issue with application-level CSS inherited to the content during copy and paste operation.
- `#I430244` - Resolved the issue when cursor position is at second line start and press backspace key.
- `#I428246` - Resolved the footnote overlapping and row interchanging issue while resizing the table.
- `#I433138` - Resolved the undo issue when find and replace the text.
- `#I433139` - Resolved the typed letters are appearing twice issue.

## 20.4.49 (2023-02-07)

### Document Editor

#### Bug Fixes

- `#I426407` - Resolved the issue with application-level CSS inherited to the content during copy and paste operation.
- `#I428463` - Resolved the issue while editing in header with track changes enabled state.
- `#I420355` - Resolved the issue with page break and paragraph pagination properties preservation.
`#I371788` - Resolved the multiple spell check call triggering when enabled of initial disabled in creation.

## 20.4.48 (2023-02-01)

### Document Editor

#### Bug Fixes

- `#I426081` - Included the Footnote while printing.
- `#I426150` - Resolved the Whole Paragraph moving while entering TAB key.
- `#I425934` - Resolved the Error Message while opening the document in Ms Word.
- `#I430307` - Table is now pasted while pasting the copied table content.
- `#I430526` - Resolved the issue while comment post a comment and removing the content.

## 20.4.44 (2023-01-18)

### Document Editor

#### Bug Fixes

- `#425697` - Resolved the positioning and line spacing issue in shape document

#### New Features

- `#419514` - Added API to modify form field name

## 20.4.43 (2023-01-10)

### Document Editor

#### Bug Fixes

- `#I424682` - Resolved the issue in the delete and backspace case in bookmark start and end element.
- `#I425401` - Header is now read-only when resizing a table.

## 20.4.42 (2023-01-04)

### Document Editor

#### Bug Fixes

- `#I423889` - Resolved the text alignment issue in RTL paragraph.
- `#I423889` - Resolved the content overlapping issue in RTL paragraph
- `#F179129` - Resolved the paragraph format applying issue.
- `#I419630` - Resolved the script error while opening a document containing clustered bar chart.
- `#I422366`, `#I423320` - Resolved the script error while removing content in protected document.
- `#I424337` - Handled mouse selection inside table cell similar to Microsoft Word.
- `#F179297` - Resolved the comment icon positioning issue.

## 20.4.40 (2022-12-28)

### Document Editor

#### Bug Fixes

- `#I421680` - Resolved the paragraph overlapping and border issue while opening the attached document.
- `#I424498` - Attached document with hyperlink text is now displayed properly.
- `#I425696` - Resolved the overlap issue in options pane.

## 20.3.60 (2022-12-06)

### Document Editor

#### Bug Fixes

- `#I418719` - Resolved the issue with removing bookmark element.
- `#I420043` - Table of content (TOC) is now updated properly.

## 20.3.59 (2022-11-29)

### Document Editor

#### Bug Fixes

- `#I417535` - The page number is not updated properly while inserting TOC.
- `#I418000` , `#F178993` - Resolved the tab character width issue.

## 20.3.58 (2022-11-22)

### Document Editor

#### Bug Fixes

- `#I417708` - Comment with multiple paragraph is now exported properly.
- `#I414849` - Textbox with no outline is now exported properly.
- `#I419171` - Resolved the script error while discarding the unposted comment.
- `#I417911` - Resolved the consecutive symbol selection issue while selecting text with white spaces.
- `#I418127` - Image width and height is now resized to fit inside the page width.
- `#I417899` - Table borders are now removed when border style set as none.
- `#I417257` - Ordinal number format is now preserved properly in exported word document.
- `#F178501` - Resolved document corruption issue due to insert revision not serialized properly.

## 20.3.57 (2022-11-15)

### Document Editor

#### Bug Fixes

- `#I415922` - Resolved the browser hanging issue while opening the document.
- `#I415359` - Resolved the table layouting issue while resizing the table.
- `#I414775` - Resolved the layouting issue while inserting page break.
- `#I414224` - Table resizing is now working properly in header/footer.
- `#I413303`, `#I417629` - Resolved the script error while opening the word document.
- `#I413477` - Resolved the script error while deleting text with comment.
- `#F178063` - Scrolling on bookmark navigation is now working similar to Microsoft Word.

## 20.3.56 (2022-11-08)

### Document Editor

#### Bug Fixes

- `#FB37929` - Resolved the exception while exporting the document with duplicate character style.
- `#I412146` - Resolved the script error while opening the document.
- `#I408099` - Resolved the list numbering issue.
- `#I412284` - Table border is now rendering properly.
- `#I413316` - Resolved the script error while deleting content of few pages.
- `#I414066` - Resolved the script error while modifying locale key.
- `#I412817` - Formatting is now applied properly in track changes protection mode.
- `#I413284` - Strike through is now properly skipped for trailing space characters like Microsoft Word.
- `#I412529` - Resolved the script error while opening html document with nested list.

#### New Features

- `#I297837`, `#I336116`, `#I342219`, `#I346980`, `#F164814`, `#F168911` - Improved the display of the RTL text in a bi-directional layout.

## 20.3.52 (2022-10-26)

### Document Editor

#### Bug Fixes

- `#I410179` - Cell background color is now rendering properly.
- `#I411016` - List numbering is now rendered properly.
- `#I411008` - Paragraph border is now rendering properly.
- `#FB37770` - Resolved the script error while printing the document.
- `#I409887` - Replacing text with bookmark is now working properly.

## 20.3.50 (2022-10-18)

### Document Editor

#### Bug Fixes

- `#I410296` - Tooltip for the show/hide properties button is now updated properly.
- `#I407021` - Table properties are now reverted properly on undo/redo.
- `#I408686` - Comments pane is now switching properly while adding comment.
- `#I409821` - Resolved the next paragraph deletion issue while switching paste option.
- `#I408431` - Resolved the script error while opening the document with track changes.
- `#I409991` - Resolved the table layouting issue.
- `#I407092` - Resolved the paragraph border rendering issue.
- `#I410940` - Resolved the script error while merging cells in header/footer.

## 20.3.49 (2022-10-11)

### Document Editor

#### Bug Fixes

- `#I401609` - Resolved the curly braces preservation in RTL paragraph
- `#I400473` - Resolved the paragraph mark selection issue on shift + page up.
- `#I405251` - Resolved the script error while opening the document with duplicate style name.
- `#I398151` - Resolved the issue with accept all/reject all from track changes pane.
- `#I399611` - Paragraph formatting is now preserved properly on copy and paste.
- `#I404592` - Resolved the script error while exporting the document with content control.
- `#I405251` - Resolved the script error while opening the document with line break character.
- `#I396300` - Resolved the overlapping issue while resizing the table cell.

## 20.3.48 (2022-10-05)

### Document Editor

#### Bug Fixes

- `#I400154` - Handled selecting consecutive special character on double click.
- `#I400506` - Handled selection while navigating the page using page down/ page up.
- `#I403371` - Resolved the inline shape alignment issue.
- `#I404840` - Resolved the browser hanging issue while changing the line spacing.
- `#I401957` - Resolved the script error while inserting the table.
- `#I403238` - Newly added custom style is now updated properly in properties pane.
- `#I401826` - Resolved the pagination issue on the exported word document.
- `#I408407`. `#I403326` - Resolved the script error while deleting the content.
- `#I379655` - Newly added paragraph is now removed properly while rejecting the changes.
- `#I403248` - Resolved script error while deleting the text with comment.
- `#I401520` - Underline format is now preserved properly in exported word document.
- `#F175079` - Resolved search issue in splitted table cell.

## 20.3.47 (2022-09-29)

### Document Editor

#### New Features

- `#I345329`,`#I325944`,`#I302342`,`#I301994`,`#I258650`,`#F157122`,`#F164860` - Added support to show or hide the hidden formatting symbols like spaces, tab, paragraph marks, and breaks.

## 20.1.52 (2022-05-04)

### Document Editor

#### Bug Fixes

- `#I368653` - Resolved the Document Editor numbering continuity issue.
- `#I376374` - Resolved the exception thrown on exporting a sfdt without a metafile property in server-side.
- `#I373298` - Resolved the  extra paragraph added while updating the table of contents.
- `#I373359` - Resolved the multiples instances of table of content creation when track changes is enabled.
- `#I373451` - Resolved exception while open the document with image without relation identifier.
- `#I373159` - Resolved the console error thrown on pasting a content and then changing page orientation.
- `#I373175` - Resolved the script error thrown on deleting the revision text.
- `#I372741` - Resolved inconsistent behaviour of text selection inside an editable table cell within a read only document.
- `#I372794` - Resolved the script error while serializing sfdt document with page break to html format in server-side.
- `#I372636` - Resolved the text inside the shape with wrapping style 'in-front of text'.
- `#I372159` - Default number format for Page field is now displayed properly.
- `#I371816` - List format is now preserved properly on importing.
- `#I371644` - Table formatting is now preserved properly while copy pasting table and resolved the document hanging in copying.
- `#I370909` - Resolved the script error rendering after content delete.
- `#I369585` - Resolved the scrolling becomes quite slow while selecting the text in document with more than 20 pages.
- `#I368794` - Resolved the tab space issue.
- `#I366157`, `#I367362` - Resolved the table rendering issue at the bottom of the page.
- `#I293527` - Justify paragraph layout issue in new page first paragraph is now resolved.
- `#I373340` - Resolved the content hanging issue while opening the attached document.
- `#I372431` - Resolved the table misalignment issue if the table has positioning properties.

## 20.1.51 (2022-04-26)

### Document Editor

#### Bug Fixes

- `#I361566`, `#I372584` - Resolved the wrapping style issue in header/footer.
- `#I373016` - Resolved the script error in accepting the revision inside the table.
- `#I370714` - Resolved the character format updating issue.
- `#I364803` - Resolved the track changes to empty page.
- `#I356022` - Resolved the wrong comma placing in Hebrew language.
- `#I368816` - Resolved the pie chart rendering and exporting issue.

## 20.1.50 (2022-04-19)

### Document Editor

#### Bug Fixes

- `#I374477` - Resolved the script error in XmlHttpRequest in lock and edit.
- `#I372421` - Resolved issues in insert row/column paragraph format inheritance from previous paragraph.
- `#IF173898` - Resolved the highlight color is not preserved in copy/paste.

## 20.1.48 (2022-04-12)

### Document Editor

#### Bug Fixes

- `#I374325`, `#I374720` - Resolved the text input issue replacing the selected text.
- `#I366806` - Resolved the content overlapping issue.
- `#I360442`, `#I372285` - Resolved the add to dictionary context item localization issue.
- `#I368653` - Resolved the numbering continuity issue.
- `#I368442` - Resolved the table of content alignment issue.
- `#I369908` - Resolved the alignment issue in the header.
- `#I368287` - Resolved the rendering issue for font family with number in canvas element.
- `#I368056` - Resolved the newly inserted footnote content style issue.
- `#I365347` - Resolved the paste content in between a paragraph.
- `#I366850` - Resolved the script error in DocumentEditorContainer component destroy.
- `#I368658` - Resolved the script error in pasting the content.
- `#F171582`, `#F173213` - Resolved the color preservation issue in pasting the highlighted cell from excel.
- `#F173430` - Resolved the delay in filling a document with large number of form fields.
- `#I370428` - Resolved the script error in replacing the text.
- `#I370305` - Resolved the cropped image rendering issue.
- `#I368292` - Resolved the empty merge field layout issue.
- `#I369092` - Indentation behaviour for numbered list is updated.

## 20.1.47 (2022-04-04)

### Document Editor

#### Bug Fixes

- `#I367457` - Resolved the nested table content positioning issue.
- `#I365347` - Copied content is now pasted properly in between the paragraph.
- `#I361140` - Resolved the script error in inserting footnote content.
- `#I366968` - Newly added table row border is now exported properly in server-side word export.
- `#I366806` - Resolved the content overlapping issue with wrapped shape.
- `#I363360` - Resolved the new window sample dialog height issue.

#### New Features

- `#I348441` - Added support for adding SVG image in a Word document.
- `#I348727` - Added support for setting automatic space before and after a paragraph in a Word document.
- `#I268209` - Added support for restricting documents with comments only protection type.
- `#I363489` - Improved the performance of the server-side spell check library.

## 19.4.56 (2022-03-15)

### Document Editor

#### Bug Fixes

- `#SF-366157`, `#SF-367362` - Table in the end of the page is now rendered properly.
- `#SF-365958` - Resolved the issue in track change undo/redo.
- `#SF-366627` - Resolved the script error in the inline form fill mode.
- `#SF-367474`, `#SF-367493` - Resolved the line breaking issue in keep text only mode pasting.
- `#SF-366968` - Table border is now exported properly in server-side word export.
- `#SF-361925` - Resolved the script error in creating consecutive styles.
- `#SF-366592` - Resolved the number format issue in decreasing the indent.

## 19.4.55 (2022-03-08)

### Document Editor

#### Bug Fixes

- `#SF-368151` - Resolved the upper case function in localization.
- `#SF-367003` - Text is congested after using numbering is resolved.
- `#SF-366157` - Resolved the multi level list restart numbering issue.
- `#SF-365713` - Resolved the table layout issue in compatibility mode.
- `#SF-354038` - Resolved the script error in exporting document with large.
- `#SF-364803` - Resolved the track changes to empty page.
- `#F172160` - Resolved the editing the document after inserting table of contents.
- `#SF-367119` - Resolved the script error while loading a document.
- `#SF-369375` - Resolved the revision duplication in loading document with track changes.
- `#SF-365347` - Resolved the copy/paste for match destination formatting.
- `#SF-366101` - Resolved the font size binding issue in font dialog.
- `#SF-362395` - Resolved the table delete issue when track changes is enabled.
- `#SF-359599` - Resolved the empty paragraph track changes not showing in track changes pane.
- `#SF-361140` - Endnote splitting issue to new page is resolved.
- `#SF-367119` - Resolved the script error in opening document with shapes.

## 19.4.54 (2022-03-01)

### Document Editor

#### Bug Fixes

- `#SF-365347` - Resolved the copy/paste for match destination formatting.
- `#SF-366101` - Resolved the font size binding issue in font dialog.
- `#SF-362395` - Resolved the table delete issue when track changes is enabled.
- `#SF-359599` - Resolved the empty paragraph track changes not showing in track changes pane.
- `#SF-361140` - Endnote splitting issue to new page is resolved.
- `#SF-367119` - Resolved the script error in opening document with shapes.

## 19.4.53 (2022-02-22)

### Document Editor

#### Bug Fixes

- `#F172362` - Resolved the script error in removing form field
- `#SF-363487` - Resolved the spell check call triggering issue along with spell check by page.
- `#SF-365295` - Comment and track changes date time is now compatible with MS Word.
- `#SF-363790` - Resolved the performance issue in selection when focus moves out for Document editor.
- `#SF-293910` - Comment operation is are restricted in the read only mode.
- `#F171981` - Resolved the `beforeFormFieldFill` event triggering issue keyboard navigation.
- `#SF-363546` - Resolved the script error in deleting the table with the bookmark.
- `#FB31160` - Resolved the empty lines tracked changes.
- `#SF-364322`, `#SF-365061` - Resolved the high light colour exporting issue in server-side saving.
- `#FB32346` - Resolved the script error in deleting the image in spell check enabled mode.

## 19.4.52 (2022-02-15)

### Document Editor

#### Bug Fixes

- `#SF-356242`, `#SF-364511` - Resolved the character format and paragraph format in inserting new row and column.
- `#SF-363021` - Resolved the bullet list copy paste issue.
- `#SF-363285` - Resolved the bulleted list deletion issue inside table.
- `#SF-362395` - Resolved the table delete issue when track changes is enabled.
- `#F171944` - Resolved the document scrolling issue.
- `#SF-361169` - Resolved the pasting issue in large non-formatted content.
- `#SF-356384` - Resolved the merged cell rendering issue.
- `#SF-355425` - Resolved the relayout issue in editing wrapped table editing.
- `#SF-352941` - Resolved the table border rendering.
- `#SF-353976` - Resolved the table merged cells rendering issue.

#### New Features

- `#F168557` - Added support for insert new paragraph using \r\n, \r, \n
- `#SF-358641` - Added API to get/set field information.

## 19.4.50 (2022-02-08)

### Document Editor

#### Bug Fixes

- `#F171012` - Character style is now applied properly.
- `#SF-361141` - Resolved the endnote number format rendering issue.
- `#SF-359056` - Resolved the hanging issue in loading document with hebrew text.
- `#SF-352586`, `#F170330` - Resolved the track changes and restrict editing region issues in header/footer.
- `#SF-364411` - Resolved the image height and width serialization issue in server-side exporting.
- `#SF-361566` - Resolved the wrapping style issue in header/footer.
- `#SF-361147` - Resolved the relayout issue in footnote moving to next page.
- `#SF-361532` - Resolved the strike through applying issue for bulleted list.
- `#F171673`, `#SF-362944` - Resolved the comments pane opening issue in editing.
- `#SF-361056`, `#SF-364408` - Resolved the empty revision loading issue track changes pane.

## 19.4.48 (2022-01-31)

### Document Editor

#### Bug Fixes

- `#SF-355895` - Resolved the stacked column rendering issue.
- `#SF-359392` - Resolved the pie chart color rendering issue.
- `#F171212` - Resolved the section format copy/paste issue.
- `#SF-359809` - Table formatting is not applied properly.
- `#SF-359914` - Resolved the nested table height issue.
- `#SF-362938` - Resolved the spell check shows error for correct word after backspace/delete.
- `#SF-358997` - Resolved the script error in selection when first page of the document filled with shape with image and wrapping style.
- `#SF-361108` - Resolved the script error in the copy/paste.
- `#FB29987` - Resolved the table layouting issue in conversion from HTML to Document.
- `#SF-362365` - Resolved the modifying level in drop down.
- `#SF-363485` - Resolved the preferred width type mismatch in server-side SFDT to Docx conversion.
- `#F171941` - Resolved the insert page break in optimized spell check mode.
- `#SF-359775` - Column Clustered is not rendered properly.
- `#SF-359392` - Resolved the default chart color applied to pie chart.
- `#SF-359223` - Resolved the backspace issue in track changes.
- `#SF-356022` - Resolved the wrong comma placing in Hebrew language.
- `#SF-359056` - Resolved document hanging issue opening hebrew document.
- `#F169863`, `#SF-354348` - Resolved the server-side exporting issue in SFDT to Docx.
- `#SF-359780` - Resolved the layout issue in word 2013 justification for list applied text.
- `#SF-356294` - Resolved the extra space adding while copying and pasting text with bookmarks.
- `#SF-356242` - Resolved the style issue for the newly added rows & columns in the table.
- `#SF-358936` - Resolved the HTML Element ContentEditable property issue in DocumentEditor.
- `#SF-357051` - Resolved the element alignment issue due to page break.
- `#SF-355713` - Resolved the script error in applying restrict editing in DocumentEditorContainer.
- `#SF-354207` - Resolved the atleast line spacing type line height issue.
- `#SF-354215` - Resolved the floating elements positioning issue after update form fields.
- `#SF-357939` - Resolved the footer overlapping issue after pasting large content.
- `#SF-354644` - Resolved the overlapping issue for image with top and bottom wrapping style in header.
- `#SF-358814` - Document with applied list format is exported properly.
- `#F171012` - Resolved the script error in applying the list format to character style applied text.
- `#SF-358474` - Resolved the header/footer tooltip and toolbar item text wrap issue when localized.
- `#SF-358523` - Resolved the status bar and font family style issue when localized.
- `#SF-356958` - Resolved the misalignment after list applying.
- `#SF-355425` - Resolved the auto fit table with preferred with type 'Point' is now layouted properly.
- `#SF-359606` - Resolved the default tab width calculation with tab stop.
- `#SF-355860` - Resolved the tab element layout issue in footer.
- `#SF-359156` - Resolved the cropped image issue rendering in header/footer.
- `#SF-354038` - Resolved the performance issue in inserting table more rows.
- `#SF-354463` - Resolved the crashing issue in splitting rows in rendering table.
- `#SF-353961` - Resolved the performance issue in editing document with merge field.
- `#SF-355429` - Resolved selection issue for the shape with in front of text wrapping.
- `#SF-360442` - Resolved the spell check suggestion replace issue in localized document editor.
- `#F171032` - Resolved the empty line adding in text exporting.
- `#F171461` - Resolved the content control preservation issue in exporting.
- `#I347750` - Resolved the hanging issue when pasting large non-formatted content.
- `#I349289`, `#I349128` - Resolved the endnote shifting and overlapping issue.
- `#F171307` - Resolved the track changes issue in editing paragraph inside table.
- `#SF-356951`, `#F170963`, `#SF-351886`, `#SF-359815`, `#SF-359312` - Resolved the merged cell width rendering issue.
- `#I347523` - Resolved the invalid SFDT generation after pasting formatted content.
- `#SF-357703` - Resolved the table row splitting issue.

#### New Features

- `#SF-354038` - Added API to restrict the maximum number of rows in insert table dialog(`DocumentEditorSettings.maximumRows`)
- `#SF-348990` - Added screen tip support for hyperlink.

## 19.4.47 (2022-01-25)

### Document Editor

#### Bug Fixes

- `#FB29987` - Resolved the table layouting issue in conversion from HTML to Document.
- `#SF-362365` - Resolved the modifying level in drop down.
- `#SF-363485` - Resolved the preferred width type mismatch in server-side SFDT to Docx conversion.
- `#F171941` - Resolved the insert page break in optimized spell check mode.
- `#SF-359775` - Column Clustered is not rendered properly.
- `#SF-359392` - Resolved the default chart color applied to pie chart.
- `#SF-359223` - Resolved the backspace issue in track changes.
- `#SF-356022` - Resolved the wrong comma placing in Hebrew language.
- `#SF-359056` - Resolved document hanging issue opening hebrew document.

## 19.4.43 (2022-01-18)

### Document Editor

#### Bug Fixes

- `#F169863`, `#SF-354348` - Resolved the server-side exporting issue in SFDT to Docx.
- `#SF-359780` - Resolved the layout issue in word 2013 justification for list applied text.
- `#SF-356294` - Resolved the extra space adding while copying and pasting text with bookmarks.
- `#SF-356242` - Resolved the style issue for the newly added rows & columns in the table.
- `#SF-358936` - Resolved the HTML Element ContentEditable property issue in DocumentEditor.
- `#SF-357051` - Resolved the element alignment issue due to page break.
- `#SF-355713` - Resolved the script error in applying restrict editing in DocumentEditorContainer.
- `#SF-354207` - Resolved the atleast line spacing type line height issue.
- `#SF-354215` - Resolved the floating elements positioning issue after update form fields.
- `#SF-357939` - Resolved the footer overlapping issue after pasting large content.
- `#SF-354644` - Resolved the overlapping issue for image with top and bottom wrapping style in header.
- `#SF-358814` - Document with applied list format is exported properly.
- `#F171012` - Resolved the script error in applying the list format to character style applied text.
- `#SF-358474` - Resolved the header/footer tooltip and toolbar item text wrap issue when localized.
- `#SF-358523` - Resolved the status bar and font family style issue when localized.
- `#SF-356958` - Resolved the misalignment after list applying.
- `#SF-355425` - Resolved the auto fit table with preferred with type 'Point' is now layouted properly.
- `#SF-359606` - Resolved the default tab width calculation with tab stop.
- `#SF-355860` - Resolved the tab element layout issue in footer.
- `#SF-359156` - Resolved the cropped image issue rendering in header/footer.
- `#SF-354038` - Resolved the performance issue in inserting table more rows.

## 19.4.41 (2022-01-04)

### Document Editor

#### Bug Fixes

- `#SF-354463` - Resolved the crashing issue in splitting rows in rendering table.
- `#SF-353961` - Resolved the performance issue in editing document with merge field.
- `#SF-355429` - Resolved selection issue for the shape with in front of text wrapping.
- `#SF-360442` - Resolved the spell check suggestion replace issue in localized document editor.
- `#F171032` - Resolved the empty line adding in text exporting.
- `#F171461` - Resolved the content control preservation issue in exporting.

#### New Features

- `#SF-354038` - Added API to restrict the maximum number of rows in insert table dialog(`DocumentEditorSettings.maximumRows`)

## 19.4.40 (2021-12-28)

### Document Editor

#### Bug Fixes

- `#I347750` - Resolved the hanging issue when pasting large non-formatted content.
- `#I349289`, `#I349128` - Resolved the endnote shifting and overlapping issue.
- `#F171307` - Resolved the track changes issue in editing paragraph inside table.
- `#SF-359156` - Resolved the cropped image issue rendering in header/footer.
- `#SF-356951`, `#F170963`, `#SF-351886`, #`SF-359815`, `#SF-359312` - Resolved the merged cell width rendering issue.
- `#I347523` - Resolved the invalid SFDT generation after pasting formatted content.
- `#SF-357703` - Resolved the table row splitting issue.

## 19.4.38 (2021-12-17)

### Document Editor

#### Bug Fixes

- `#I348089` - Resolved the protected columns, rows, and cells editing issue.
- `#I344822` - Word with hyphen characters are now displayed properly.
- `#I345558` - Resolved the table layout for the nested table with position.
- `#I346408` - Table cell content reversed on undo is now resolved.
- `#I346992` - Paragraph with widow/orphan property is now displayed properly.
- `#I341119` - Document with image and table with top and bottom wrapping style is now opened properly.
- `#I344713`- Resolved table header row rendering issue.
- `#I341963`, `#I341840` - Resolved the table rendering issue.
- `#I344704` - Resolved issue with tracking changes in empty paragraph.
- `#I344351` - Line height is now calculated properly when space character has font size greater than the paragraph mark.
- `#I345759`, `#I343106`- Resolved the table border rendering issue.
- `#I343645` - Table grid after width defined as percentage type is now properly exported in server-side.
- `#I341659` - Resolved the list alignment issue.
- `#I347230` - Line spacing value zero is now properly exported in server-side.
- `#I346468` - Resolved the document corruption issue due to z-order in server-side exporting.
- `#I344830` - Resolved exception in opening and saving the document with calculation type form field.
- `#I345582`, `#I341985` - Document with tab width is now displayed properly.
- `#I346985` - Line height is now properly updated for tab character when its font size greater than other elements in the line.
- `#FB29648` - Table rows/columns in header and footer are now resized properly.
- `#I349115` - Resolved the scrolling behaviour issue when using `goToPage` API.
- `#I348516` - Table/Cell background color is preserved properly during copy/paste.
- `#I341891` - Resolved the hanging issue while editing the footnote content.
- `#I344790` - Resolved the footnote overlapping issue when editing a table.
- `#I343310` - Resolved the blank page issue in the exported Word document due to footnote.
- `#I345594` - Resolved the new style listing problem when Document editor is localized for languages other than English.
- `#I344840` - Resolved the height and width for `insertImage` API.
- `#I343403` - Resolved the script error while opening document with tracked changes and restrict editing enabled.
- `#I342774` - The Word document is now exported properly when the document contains content control.
- `#I340276` - Resolved issue with entering custom date time value for form field.
- `#I344605` - Resolved the context menu displaying issue when multiple instances of Document Editor are used in same page.
- `#I337087`, `#I344332` - Improved the suggestion construction logic for error words.
- `#I338302` - Resolved the hanging issue when opening document with table.
- `#I339240` - RTL list is now deleted properly.
- `#I340758` - The Word document is now exported properly when the document contains table with merged cells.
- `#I341140` - Tracked changes is now updated properly for the existing empty line.
- `#F167253`, `#F168269` - Track changes pane visibility issue is now resolved.
- `#F168463` - The floating element with square wrapping style is now displayed properly.
- `#I338947` - Resolved the issue with undo after pasting Hebrew text.
- `#I341435` - Optimized the content change event triggering in Document Editor.
- `#I340867` - Selection is now working properly after applying character format.
- `#I341335` - Text formatting is now preserved properly for merge fields.
- `#I339239`, `#I339242`, `#I339021` - RTL text are now arranged properly.
- `#I335659` - RTL text are now preserved properly on undo/redo.
- `#I340643` - The comment mark is now removed properly when deleting comment.
- `#I339335` - Resolved the hanging issue when editing document with Hebrew text.
- `#I340121` - Resolved the issue with rendering elbow connector as line connector.
- `#I339453` - Resolved the issue with rendering a fixed width table.
- `#I341119` - Resolved the overlapping issue for image with top and bottom wrapping inside table.
- `#I339602` – Track changes is now updated properly in header and footer.
- `#I341964`, `#I342165` – RTL text is now arranged properly when copy/paste.
- `#I339714` – Footnote order is now updated properly.
- `#I339973` - Table is now preserved properly in the exported Word document.
- `#I340795` – Field is now copied properly.
- `#I339872` – Page number in footer is now updated properly.
- `#I339576`, `#F168072` – Resolved the issue in applying page orientation with the section break.
- `#I339027` – Resolved the script error in saving document with tracked changes in header/footer.
- `#I340532` – Html elements are now properly disposed.
- `#F168319` – Resolved the ViewChange event binding issue in Document Editor component.
- `#I341375` – Resolved the undo/redo issue in comment editing operations.

#### New Features

- `#I345565` - Added support for Word 2013 justification.
- `#I343497` - Added support to display the texture style for table cell shading.
- `#I343751` - Added alert window for row and column specified more than 63 and 32767 respectively in insert table dialog.
- `#I342110` - Added event to customize the XMLHttpRequest in DocumentEditor and DocumentEditorContainer component.

## 19.3.56 (2021-12-02)

### Document Editor

#### Bug Fixes

- `#I343645` - Table grid after width percentage value is now properly exported in server-side.
- `#I341659` - Resolved the list alignment issues.
- `#I347230` - Zero line spacing value is now properly exported in server-side.
- `#I346468` - Resolved the document corruption issue due to z-order in server-side exporting.
- `#I344830` - Resolved in exception in opening and saving document with calculation form field.
- `#I345582`, `#I341985` - Document with tab width is now rendered properly.
- `#I346985` - Line height issue is now properly updated for tab character with greater size than rest of the elements in the line.
- `#FB29648` - Table rows/columns in header and footer are now resized properly.
- `#I349115` - Resolved the `goToPage` API scrolling behaviour issue.
- `#I348516` - Table/Cell background color serialized properly in copy/paste.
- `#I341891` - Resolved the hanging issue in editing the footnote content.
- `#I344790` - Resolved footnote overlapping issue when editing a table.

## 19.3.55 (2021-11-23)

### Document Editor

#### Bug Fixes

- `I345759`- Resolved the table border rendering issue.

## 19.3.54 (2021-11-17)

### Document Editor

#### Bug Fixes

- `I344713`- Resolved table header row rendering issue.
- `I341963` - Resolved the table rendering issue.
- `I344704` - Resolved the empty paragraph tracking issue.
- `I344351` - Line height is now calculated property when space character has larger font size the paragraph mark.

## 19.3.53 (2021-11-12)

### Document Editor

#### Bug Fixes

- `#I343310` - Resolved the blank page adding issue in exported word document due to footnote.
- `#I345594` - Resolved the new style listing problem during localization.
- `#I344840` - Resolved the height and width for `insertImage` API.
- `#I343403` - Resolved the script error while opening document with tracked changes and restrict editing enabled.
- `#I342774` - Resolved the word export issue for document with content control.
- `#I340276` - Resolved issue with entering custom date time value in form field.
- `#I344605` - Resolved the context menu rendering issue for multiple instances of DocumentEditor in the same page.
- `#I343106` - Resolved the table border rendering issue.
- `#I337087`, `#I344332` - Improved the suggestion construction logic for error words.
- `#I338302` - Resolved the hanging issue when opening document with table.
- `#I339240` - RTL list is now deleted properly.
- `#I340758` - Resolved the word export issue for the table with merged cells.
- `#I341140` - Track changes content is now updated properly for the existing empty line.
- `#F167253`, `#F168269` - Track changes pane visibility issue is resolved.
- `#I341985` - Resolved the tab space rendering issue.
- `#F168463` - Resolved the layout issue for the element with square wrapping style.
- `#I338947` - Resolved the undo problem after paste of hebrew text.
- `#I341435` - Optimized the content change event triggering in Document Editor.
- `#I340867` - Selection issue after applying character format is resolved.
- `#I341335` - Resolved the text formatting preservation for merge fields.
- `#I339239`, `#I339242`, `#I339021` - Resolved the text arrangement issue for RTL documents.
- `#I335659` - Resolved the undo/redo some text in RTL mode.
- `#I340643` - Resolved the comment mark removal issue in comment delete.
- `#I339335` - Resolved the hanging issue in editing document with Hebrew text.
- `#I340121` - Resolved the issue with elbow connector rendering as line connector.
- `#I339453` - Resolved the rendering issue in fixed table width case.
- `#I341119` - Resolved the image with top and bottom wrapping overlapping issue with table.
- `#I339602` – Track changes is now updated properly in header and footer.
- `#I341964`, `#I342165` – Resolved the text rearrange issue in copy/paste of RTL text.
- `#I339714` – Footnote order is now updated properly.
- `#I339973` - Table serialization issue in word export is resolved.
- `#I340795` – Issue with copying field is resolved.
- `#I339872` – Page number is footer is now updated properly.
- `#I339576`, `#F168072` – Resolved the issue in applying page orientation with the section break.
- `#I339027` – Resolved the script error in saving tracked content in header/footer.
- `#I340532` – Html elements are nor properly disposed.
- `#F168319` – Resolved the ViewChange event binding issue in Document Editor component.
- `#I341375` – Resolved the history issue in comment operations.
- `#I341840` – Resolved the table rendering issue.

#### New Features

- `#I345565` - Added support for Word 2013 justification.
- `#I343497` - Added support to render the texture style for table cell shading.
- `#I343751` - Added alert window for row and column specified more than 63 and 32767 respectively in insert table dialog.
- `#I342110` - Added event to customize the XMLHttpRequest in DocumentEditor and DocumentEditorContainer component.

## 19.3.48 (2021-11-02)

### Document Editor

#### Bug Fixes

- `#I340276` - Resolved issue with entering custom date time value in form field.
- `#I344605` - Resolved the context menu rendering issue for multiple instances of DocumentEditor in the same page.
- `#I343106` - Resolved the table border rendering issue.

## 19.3.47 (2021-10-26)

### Document Editor

#### Bug Fixes

- `#I337087`, `#I344332` - Improved the suggestion construction logic for error words.
- `#I338302` - Resolved the hanging issue when opening document with table.
- `#I339240` - RTL list is now deleted properly.

## 19.3.46 (2021-10-19)

### Document Editor

#### Bug Fixes

- `#I340758` - Resolved the word export issue for the table with merged cells.
- `#I341140` - Track changes content is now updated properly for the existing empty line.
- `#F167253`, `#F168269` - Track changes pane visibility issue is resolved.
- `#I341985` - Resolved the tab space rendering issue.
- `#F168463` - Resolved the layout issue for the element with square wrapping style.
- `#I338947` - Resolved the undo problem after paste of hebrew text.

#### New Features

- `#I345565` - Added support for Word 2013 justification.
- `#I343751` - Added alert window for row and column specified more than 63 and 32767 respectively in insert table dialog.

## 19.3.45 (2021-10-12)

### Document Editor

#### Bug Fixes

- `#I341435` - Optimized the content change event triggering in Document Editor.
- `#I340867` - Selection issue after applying character format is resolved.
- `#I341335` - Resolved the text formatting preservation for merge fields.
- `#I339239`, `#I339242`, `#I339021` - Resolved the text arrangement issue for RTL documents.
- `#I335659` - Resolved the undo/redo some text in RTL mode.
- `#I340643` - Resolved the comment mark removal issue in comment delete.
- `#I339335` - Resolved the hanging issue in editing document with Hebrew text.
- `#I340121` - Resolved the issue with elbow connector rendering as line connector.
- `#I339453` - Resolved the rendering issue in fixed table width case.
- `#I341119` - Resolved the image with top and bottom wrapping overlapping issue with table.

#### New Features

- `#I343497` - Added support to render the texture style for table cell shading.

## 19.3.44 (2021-10-05)

### Document Editor

#### Bug Fixes

- `#I339602` – Track changes is now updated properly in header and footer.
- `#I341964`, `#I342165` – Resolved the text rearrange issue in copy/paste of RTL text.
- `#I339714` – Footnote order is now updated properly.
- `#I339973` - Table serialization issue in word export is resolved.
- `#I340795` – Issue with copying field is resolved.
- `#I339872` – Page number is footer is now updated properly.
- `#I339576`, `#F168072` – Resolved the issue in applying page orientation with the section break.
- `#I339027` – Resolved the script error in saving tracked content in header/footer.
- `#I340532` – Html elements are now properly disposed.
- `#F168319` – Resolved the ViewChange event binding issue in Document Editor component
- `#I340643`, `#I341375` – Resolved the history issue in comment operations
- `#I341840` – Resolved the table rendering issue.

#### New Features

- `#I342110` - Added event to customize the XMLHttpRequest in DocumentEditor and DocumentEditorContainer component.

## 19.3.43 (2021-09-30)

### Document Editor

#### Breaking Changes

- Optimized the accuracy of text size measurements such as to match Microsoft Word pagination for most Word documents. This improvement is included as default behaviour along with an optional API `enableOptimizedTextMeasuring` in Document editor settings. To disable this improvement and retain the document pagination behaviour of older versions, kindly set `false` to `enableOptimizedTextMeasuring` property.

#### Bug Fixes

- `#I334754`, `#I337720`, `#F167429` - Resolved the localization issue.
- `#I333264` - Resolved the before spacing issue for the paragraph starting in new page.
- `#I333226` - Resolved the underline issue.
- `#I332508` - Resolved the tracking of multiline and empty paragraph revision.
- `#I335858`, `#F148494` - Resolved the script error in component destroy.
- `#F166420` - Resolved the SFDT exporting issue with shape.
- `#I332253` - Resolved the cut paste hyperlink issue when track changes enabled.
- `#I335409` - Resolved user list updating issue in restrict editing pane.
- `#I328976` - Table and document content is now displayed properly.
- `#I331333` - Resolved the page unresponsive issue when opening a document with nested table.
- `#I331763` - Table with position property is now displayed properly after editing the document.
- `#I330233` - Resolved the extra page issue when updating cross reference field.
- `#I329790`, `#I331351` - Table is now displayed properly based on compatibility mode of the document.
- `#I332483` - Bookmark is now preserved properly after deleting the content from a document containing bookmark.
- `#I331762` - Table with merged cell is now displayed properly.
- `#I330485` - Ole picture is now preserved properly as normal picture.
- `#I330776` - Resolved the casing issue in the suggestions generated by spell checker.
- `#I330982` - Resolved the text encoding problem when pasting with Java server-side library.
- `#I325741` - Footnote is now displayed properly when opening a document.
- `#I331634` - Table with preferred width type percent and allow auto fit property false is now displayed properly.
- `#I331274` - Table positioning property is now preserved properly.
- `#I331667` - Document with building block gallery content control is now exported properly.
- `#I331452` - Footnote inside the table is now displayed properly.
- `#I331606` - Document with block content control is now exported properly.
- `#I331667`, `#I332223` - Shape in footer is now preserved properly.
- `#I330686`, `#I331349`, `#I310463` - Shape fill is now preserved properly.
- `#I332333` - Zoom value is now updated properly in status bar.
- `#I319210` - The changes and comment tab in the review pane will be visible only if at least one tracked change or comment is present in the document.
- `#I337569` - Table in a document with compatibility mode is now displayed properly after editing.
- `#I331349` - Resolved the text clipping issue.
- `#I336632` - Resolved the next style hierarchy issue.
- `#I335857` - Resolved the after spacing preservation issue during copy and paste.
- `#I335107` - Table with position property is now displayed properly when it overlap on another table.
- `#I334036` - Resolved the spell check word by word service triggering issue in optimized spell check mode.
- `#I330165`, `#I327647`, `#I324515`, `#I338278` - Resolved the issues in comment edit, delete, and history operation.
- `#I336315` - Tab character inside absolute positioned table is now displayed properly.
- `#I319206` - Resolved the issue with displaying the horizontal line shape.
- `#F167416` - Line spacing is now preserved properly in server-side export.
- `#I335145`, `#I337499` - Resolved the text size measurement issue when HTML and body tag contains styles.
- `#I339105` - Resolved the number formatting color change issue.
- `#I340265` - Default value for text form field is now preserved properly in Word export.
- `#I336632` - Style names are now properly listed in the drop down of text properties pane.
- `#I338027` - Track changes close icon is now positioned properly in RTL mode.
- `#I337566` - Last empty paragraph (cell mark) inside a table cell after a nested table is now invisible.
- `#I340416` - Resolved the script error with custom toolbar items during destroy.
- `#I337274` - Resolved the border issue for merged cell.
- `#I336588` - Resolved the RTL text issue when copy and paste with text only option.
- `#I338123` - Line spacing is now applied properly for the result text of text form field.
- `#I337118` - Shape inside a table is now displayed properly.
- `#I337397` - Resolved the script error when opening a document with nested table.
- `#I337786` - Empty footer is now ignored properly from bottom margin calculation.
- `#I337968` - Resolved the automatic color issue for the text inside table.
- `#I339240` - Resolved the RTL text issue when deleting the text.
- `#I339488` - Resolved the script error while opening a document with footnote.
- `#I339715` - Footnote is now displayed properly on next page after editing.
- `#I339454` - Resolved alignment issue for a table that is wrapped over a positioned object.
- `#I341016` - Resolved the script error while exporting a document with empty list.
- `#I334046` - Optimized the spell check by page service call in optimized spell check mode.

#### New Features

- `#I256210`, `#F150773`, `#I295055`, `#I295551`, `#I324037`, `#I326715` - Added support for Widow/Orphan control, Keep with next and Keep lines together properties.
- `#I298019`, `#I307321`, `#F160804`, `#F164217`, `#F164872` – Improved the accuracy of text size measurements such as to match Microsoft Word pagination for most Word documents.
- `#I243246`, `#I249594`, `#I287633`, `#I295055`, `#I295549`, `#I299657`, `#I308408`, `#I326567` – Added support to preserve tables with position properties.
- Added option to directly convert DocIO's WordDocument to SFDT and vice-versa in .NET and Java server-side library.
- Added Word-to-SFDT conversion in Java server-side library.
- Added new spell checker library for Java.

## 19.2.62 (2021-09-14)

### Document Editor

#### Bug Fixes

- `#I337118` - Resolved the table rendering issue.
- `#I338123` - Form field elements are now aligned properly.

## 19.2.60 (2021-09-07)

### Document Editor

#### Bug Fixes

- `#I340416` - Resolved the toolbar reinitialization issue.
- `#I337274` - Resolved the merged cell border rendering issue.
- `#I335107` - Text is not layouted properly when used with floating table.
- `#I336588` - Resolved the RTL text Copy/paste text only mode.

## 19.2.59 (2021-08-31)

### Document Editor

#### Bug Fixes

- `#I339105` - Resolved the number formatting color change issue.
- `#I340265` - Text form field default value is preserved in word export.
- `#I336632` - Style names are now properly listed in the drop down.
- `#I338027` - Track changes close icon is now positioned properly in RTL mode.
- `#I337566` - Resolved the table empty paragraph rendering issue.

## 19.2.57 (2021-08-24)

### Document Editor

#### Bug Fixes

- `#I335857` - Resolved the after spacing preservation issue in copy paste.
- `#I335107` - Resolved the table rendering issue.
- `#I336632` - Resolved the next style hierarchy issue.
- `#I334046` - Optimized the spell check by page service call in optimized spell check mode.
- `#I330165`, `#I327647`, `#I324515`, `#I338278` - Resolved the issues in comment delete and history operation.
- `#I336315` - Resolved the tab issue for the text with floating table.
- `#I319206` - Resolved issue with horizontal line shape rendering.
- `#F167416` - Line spacing is now preserved properly in server side export.
- `#I337720` - Resolved the localization in Document Editor.
- `#I335145`, `#I337499` - Resolved the text measuring issue when HTML and Body tag contains styles.

## 19.2.56 (2021-08-17)

### Document Editor

#### Bug Fixes

- `#I337569` - Resolved the table relayout issue for the document with compatibility mode.
- `#I331349` - Resolved the text content clipping issue.
- `#I334046` - Optimized the service triggering in spell check by page mode.

## 19.2.55 (2021-08-11)

### Document Editor

#### New Features

- `#I256210`,`#F150773`,`#I295055`,`#I295551`,`#I324037`,`#I326715` - Added support for keep with next and keep lines together.

#### Bug Fixes

- `#I334754`, `#F167429` - Resolved the localization issue.
- `#I333264` - Resolved the before spacing issue for the paragraph starting in new page.
- `#I333226` - Resolved the underline issue.
- `#I332508` - Resolved the tracking of multiline tracking and empty paragraph revision.
- `#I335858`, `#F148494` - Resolved the script error in component destroy.
- `#F166420` - Resolved the SFDT exporting issue with shape.
- `#I332253` - Resolved the cut paste hyperlink with track changes enabled.
- `#I335409` - Resolved user list updating issue in restrict editing pane.
- `#I328976` - Table and document content is not layouted properly.
- `#I331333` - Resolved the page unresponsive issue in splitting the nested tables.
- `#I331763` - Resolve the shifting issue in the table with table positioning property on relayouting
- `#I330233` - Resolved the extra page adding issue when using update field.
- `#I329790`, `#I331351` - Table is now layouted based on compatibility mode.
- `#I332483` - Resolved the issue on bookmark shifting while removing document content.
- `#I331762` - Table with merged cell is now layouted properly.
- `#I330485` - Ole picture is now preserved as normal picture.
- `#I330776` - Resolved the casing issue in the generated suggestions.
- `#I330982` - Resolved the unexpected characters when pasting using Java server-side library.
- `#I325741` - Resolved the footnote layouting issue when opening a document.
- `#I331634` - Resolved the issue on updating the table cell width.
- `#I331274` - Table positioning property is now preserved properly.
- `#I331667` - Document with BuildingBlockGallery content control type is now exported properly.
- `#I331452` - Resolved the layout issue on footnote inside the table.
- `#I331606` - Document with content control block saving issue is now exported properly.
- `#I331667`, `#I332223` - Shape in footer is now preserved properly.
- `#I330686`, `#I331349`, `#I310463` - Shape fill is now preserved properly.
- `#I332333` - Zoom value is now updated properly in status bar.
- `#I330165`, `#I327647`, `#I324515` - Resolved the worst case scenario issues in comment editing and deleting.
- `#I319210` - The changes and comment tab in the review pane will be visible only if at least one tracked change or comment is present respectively in the document.

## 19.2.49 (2021-07-27)

### Document Editor

#### Bug Fixes

- `#I333226` - Resolved the underline issue.
- `#I330233` - Resolved the shape shifting issue in editing.
- `#I332508` - Resolved the tracking of multiline tracking and empty paragraph revision.
- `#I335858`, `#F148494` - Resolved the script error in component destroy.
- `#F166420` - Resolved the SFDT exporting issue with shape.
- `#I332253` - Resolved the cut paste hyperlink with track changes enabled.

## 19.2.48 (2021-07-20)

### Document Editor

#### Bug Fixes

- `#I329790`, `#I331351` - Resolved export issue for the Table with compatibility mode.
- `#I335409` - Resolved user list updating issue in restrict editing pane.
- `#I328976` - Table and document content is not layouted properly.
- `#I331333` - Resolved the page unresponsive issue in splitting the nested tables.

## 19.2.47 (2021-07-13)

### Document Editor

#### Bug Fixes

- `#I331763` - Resolve the shifting issue in the table with table positioning property on relayouting
- `#I330233` - Resolved the extra page adding issue when using update field.
- `#I329790`, `#I331351` - Table is now layouted based on compatibility mode.
- `#I332483` - Resolved the issue on bookmark shifting while removing document content.
- `#I331762` - Table with merged cell is now layouted properly.
- `#I330485` - Ole picture is now preserved as normal picture.
- `#I330776` - Resolved the casing issue in the generated suggestions.
- `#I330982` - Resolved the unexpected characters when pasting using Java server-side library.

#### New Features

- `#326715` - Added support to preserve "Keep With Next" and "Keep Lines Together" paragraph formatting in the document.

## 19.2.46 (2021-07-06)

### Document Editor

#### Bug Fixes

- `#I325741` - Resolved the footnote layouting issue when opening a document.
- `#I331634` - Resolved the issue on updating the table cell width.
- `#I331274` - Table positioning property is now preserved properly.
- `#I331667` - Document with BuildingBlockGallery content control type is now exported properly.
- `#I331452` - Resolved the layout issue on footnote inside the table.
- `#I331606` - Document with content control block saving issue is now exported properly.
- `#I331667`, `#I332223` - Shape in footer is now preserved properly.
- `#I330686`, `#I331349`, `#I310463` - Shape fill is now preserved properly.
- `#I332333` - Zoom value is now updated properly in status bar.
- `#I330165`, `#I327647`, `#I324515` - Resolved the worst case scenario issues in comment editing and deleting.
- `#I319210` - The changes and comment tab in the review pane will be visible only if at least one tracked change or comment is present respectively in the document.

## 19.2.44 (2021-06-30)

### Document Editor

#### New Features

- `#I278021`, `#I301809` - Added table paste options.
- `#I165071`, `#I226674`, `#I229069`, `#I231373`, `#I241445`, `#I251719`, `#I251720`, `#I267474`, `#I284190`, `#I287633`, `#I291766`, `#I295055`, `#I295549`, `#I298036`, `#I297705`, `#I301313`, `#I291964`, `#I306274`, `#I305349`, `#I308409`, `#I310463`, `#I311260`, `#I312302`, `#I313526`, `#I314192`, `#I317340`, `#I319563` - Added support to preserve image position with square, in-front of text, behind text, top and bottom wrapping styles.
- `#I137901`,`#I158324`,`#I208312`,`#I219539`,`#I226018`,`#I226019`,`#I227643`,`#I238552`,`#I243495`,`#I246168`,`#I247514`,`#I248720`,`#I252754`,`#I253251`,`#I280213`,`#I280379`,`#I285871`,`#I290372`,`#I297705`,`#I298334`,`#I306415`,`#I306466`,`#I308411`,`#I310537`,`#I312846`,`#I314262`,`#I317497`,`#I319206`,`#I320434`,`#I324903`,`#I333100` - Textbox shape with square, in-front of text, behind text, top and bottom wrapping styles.
- `#I307321` - Added support to preserve table positioning properties.
- `#I298019` - Added support for exporting the document pages as image.
- `#I324911` - Provided support for inserting non-breaking space character on Ctrl + Shift + Space key combination.
- `#I326184` - Added option to specify the device pixel ratio for the image generated while printing the document.

#### Bug Fixes

- `#I318381` - Resolved the script error while adding comments across two pages.
- `#I318283` - Handled the "Different First Page" in Headers and Footers after section breaks.
- `#I319182` - Selection issue after editing header is resolved.
- `#I315240` - The script error while parsing shape is resolved.
- `#I319182` - Resolved the script error while editing the header/footer.
- `#F163188` - Highlight color is now working properly.
- `#I320821` - Resolved the script error while opening document with table.
- `#I319403`, `#I317463` - Resolved file corruption issue while exporting the document with shapes.
- `#I319185` - Resolved left border rendering issue in merged cells.
- `#I313943` - Tab character is now displayed properly.
- `#I318786` - The document with footnote is now opened properly.
- `#I318786` - Table column width is now updated properly.
- `#I319991` - Inline form filling is now working properly in Internet Explorer.
- `#I319782` - Resolved script error while deleting the content.
- `#I320821`, `#I320991` - Table is now displayed with proper line width.
- `#I319987` - Table with merged cells is now displayed properly.
- `#I320513` - Header content is now displayed properly.
- `#I321397` - Table with merged cells is now preserved properly in the exported document.
- `#I317683` - Exported document with footnote is no longer corrupted.
- `#I313465` - Image inserted using API is now displayed properly.
- `#I308899` - Track changes is now listed properly in revision pane.
- `#I320270` - Table changes are now tracked during paste operation.
- `#I313821` - Table with preferred width type as auto is now displayed properly.
- `#F162726` - Line spacing is now updated properly.
- `#I319819` - Undo/Redo for multilevel list is now working properly.
- `#I318381` - Comment is now added properly.
- `#I317743` - Script error on accept track changes is now resolved.
- `#I307321` - Checkbox with tab width is rendered properly.
- `#FB23691` - Resolved changes pane visibility issue in read only mode.
- `#I319397` - Spell checker now works properly for words ending with ‘ies’.
- `#F164367` - Resolved the script error in npm run sass.
- `#I319824` - Resolved the extra page rendering issue.
- `#I319824` - Border displayed properly in the exported word document.
- `#I319421`, `#F163236` - Resolved the copy/paste issue for content copied from Document editor.
- `#I307321` - Line shape is now preserved properly in the exported document.
- `#I307321` - Exported document is now displayed properly.
- `#I321190` - Resolved the icon issue in material-dark, bootstrap-dark, fabric-dark themes.
- `#I319808` - Document with tab is now displayed properly.
- `#I317303` - Spacing after the numbered list is preserved properly.
- `#I324052` - Added the footnote and endnote locale strings.
- `#I307321` - Table border is now preserved properly in exported word document.
- `#I307321` - List with hanging indent is displayed properly.
- `#I321108` - Script error on tracking the changes is now resolved.
- `#I321923` - Script error on pasting image URL in track change mode is now resolved.
- `#I317358` - Image copy/paste issue in ASP.NET MVC framework is now resolved.
- `#I318843` - Resolved the list formatting issue in copy pasted content.
- `#I319868` - Exported document with image in header is now opened properly in Libre Office.
- `#I324025` - Resolved the font dialog option value in localized mode.
- `#I324223`, `#I324023` - Resolved the underline issue while exporting word document.
- `#I322402` - Before pane switch event triggering twice issue is resolved.
- `#F163664` - Document editor now opens large size text file properly.
- `#I322548` - Resolved the issue with track changes.
- `#I322561` - Bookmark delete and undo/redo operation is now working properly.
- `#I324028` - Resolved the issue with applying properties in font dialog.
- `#I323597` - Textbox in RTF documents are now displayed properly.
- `#I323603` - Resolved the footnote issue when switching to web layout.
- `#I321745` - Comment is now selected properly.
- `#I322561` - Resolved the script error with bookmark undo/redo operation.
- `#I323670` - Resolved the font size and font family issue during copy paste.
- `#I325291` - Document with alternate chunks is now displayed properly.
- `#I323401`, `#I323423` - Resolved the page wise footnote content display issue.
- `#I326150` - Resolved issue in updating cross reference field.
- `#F160804` - Styles are now considered properly while deleting the content.
- `#I312306` - Hyperlink content is now retrieved properly.
- `#I325681` - Resolved the Textbox border displaying issue.
- `#I323059` - Resolved the script error when ignore action in spelling dialog.
- `#I323423` - Resolved the issue when moving footnote to next page.
- `#I324169` - Resolved opacity issue in toolbar item.
- `#I322560`, `#I323516` - Script error in the top and bottom layout is resolved.
- `#I323824` - Resolved the document corruption issue when opening the document in MS Office 2007.
- `#I325554` - Resolved the script error when multiple documents pasted as SFDT.
- `#I327626` - Footnote is now displayed properly.
- `#I326000` - Document content is now displayed properly.
- `#I327097` - Resolved the script error related to square wrapping style.
- `#I327458` - Text overlapping issue is resolved.
- `#I327647` - Issue with removing comment is resolved.
- `#I322560` - Resolved the issue with duplication of page content.
- `#I322560` - Font size is now parsed properly.
- `#I323423` - Footnote is now displayed properly.
- `#I325920` - Selection behaviour is now working properly when mouse pointer goes outside the control.
- `#I323608` - Textbox with fill color is now displayed properly.
- `#I326144` - Resolved the issue with multi-line track changes.
- `#I328063` - Document with checkbox form field applied is now displayed properly.
- `#I328067` - Resolved the navigation issue when form filling mode is inline.
- `#F164875`, `#F163714` - Resolved the border issue when textbox has square border.
- `#I327817` - Resolved the script error when using insert footnote in custom toolbar.
- `#I325320` - Page number is now updated properly.
- `#FB25004` - Exported document with table is opened properly in Libre Office.
- `#I325323` - Textbox shape is now displayed properly.
- `#FB24917` - Document is now exported properly after deleting comment.
- `#F163116` - Hanging indent is now retrieved properly in paragraph dialog.
- `#I327769` - Checkbox is now displayed properly.
- `#I326567` - Nested table with preferred width type percentage is now displayed properly.
- `#I328479` - Resolved script error while deleting merged cells.
- `#I329173`, `#I330233` - Resolve script error while updating cross reference field.
- `#F165501` - Resolve script error while applying border.
- `#I328310` - Shape is now rendered properly in header and footer.
- `#I325741` - Footnote content is now displayed properly.
- `#I329564` - Accept and reject changes are now disabled properly in read only mode.
- `#F164814` - Character format is now applied properly for RTL text.
- `#I328063` - Resolved script error while scrolling.
- `#I327450` - Resolved the overlapping issue in footnote section when working with text.
- `#I327606` - Font size is now updated properly for the cursor position.
- `#I329354` - Resolved the exception while exporting documents in server-side.
- `#I330375` - Updated the constants for locale constants.
- `#I330047` - Resolved the script error with refresh API.
- `#I329637` - Resoled the issue with deleting comment.
- `#I330918`, `#I331136` - Resolved the issue with updating cursor.
- `#I329954` - Resolved the overlapping issue in options pane.
- `#I327635`, `#I330160` - Resolved the text overlapping when editing the footnote.
- `#I315396`, `#I316110` - Enhanced Word to SFDT conversion in Java server-side library.
- `#I324042` - Resolved the issue with displaying document footer.
- `#I315376` - Resolved the script error related to Jest framework.
- `#I318321` - Resolved the script error with `showRestrictEditingPane` API.
- `#I307321` - Resolved the issue with document zooming.

## 19.1.69 (2021-06-15)

### Document Editor

#### Bug Fixes

- `#I329173`, `#I330233` - Resolve script error while updating cross reference field.
- `#F165501` - Resolve script error while applying border.
- `#I328310` - Shape is now rendered properly in header & footer.
- `#I325741` - Footnote content is now layout properly.
- `#I329564` - Disabled accept and reject changes in read only mode.
- `#F164814` - Character format is now applied properly in RTL text.
- `#I328063` - Resolved script error while scrolling.

## 19.1.67 (2021-06-08)

### Document Editor

#### Bug Fixes

- `#FB25004` - Exported document with table is opened properly in Libre Office.
- `#I325323` - Textbox shape is now rendered properly.
- `#FB24917` - Document is now exporting properly after deleting comment.
- `#F163116` - Hanging indent is now retrieved properly in paragraph dialog.
- `#I327769` - Checkbox is now layout properly.
- `#I326567` - Nested table with preferred width type percent now rendered properly.
- `#I328479` - Resolved script error while deleting merged cells.

## 19.1.66 (2021-06-01)

### Document Editor

- `#I326144` - Resolved the issue with multi line track changes.
- `#I328063` - Document with checkbox form field applied with to character format is now opened properly.
- `#I328067` - Resolved the navigation issue in inline form field editing.
- `#F164875`, `#F163714` - Resolved the unsupported textbox border as square border.
- `#I327817` - Resolved the script error in using insert footnote in custom toolbar.
- `#I325320` - Page number is now updated properly.

## 19.1.65 (2021-05-25)

### Document Editor

#### Bug Fixes

- `#I325554` - Resolved the script error in multiple document pasted as SFDT.
- `#I327626` - Footnote is rendered now.
- `#I326000` - Resolved the document rendering issue.
- `#I327097` - Resolved the script error in square wrapping style.
- `#I327458` - Text overlapping issue is resolved.
- `#I327647` - Issue with comment removal is resolved.
- `#I322560` - Resolved the page content duplication issue.
- `#I322560` - Resolved the font size parsing issue.
- `#I323423` - Footnote is rendering issue is resolved.
- `#I325920` - Selection behaviour is handled for moving outside the control.
- `#I323608` - Textbox with fill color is rendered.

## 19.1.64 (2021-05-19)

### Document Editor

#### Bug Fixes

- `#I325681` - Resolved the textbox border rendering issue.
- `#I323059` - Resolved the script error when ignore action in spelling dialog.
- `#I323423` - Resolved the footnote moving issue to next page.
- `#I324169` - Resolved opacity issue in toolbar item.
- `#I322560`, `#I323516` - Script error in the top and bottom layout is resolved.
- `#I323824` - Resolved the document corruption issue in MS Office 2007.
- Resolved the document rendering issue document footer.
- Resolved the script error for Jest framework.

## 19.1.63 (2021-05-13)

### Document Editor

#### Bug Fixes

`#I326717` - Table border is preserved in the exported word document
`#I325968` - New line changes are now tracked properly
`#I325590` - Context menu behaviour for spell check is resolved.
`#I325697` - Spell check in tracked changes is now updated properly.
`#I324896` - List track changes are now applied properly.
`#I322387` - DocumentEditorContainer disposing issue is resolved.
`#I324622` - Resolved the chart parsing issue.
`#I324911` - Console error when opening document with footnote is resolved.
`#I324907` - Numbering list is copied with proper color.
`#I323215` - Table is now layout properly after row delete.
`#I322560` - Page content duplication issue is resolved.

#### New Features

- `#I324911` - Provided support for inserting non-breaking space character on Ctrl + Shift + Space key combination.
- `#I326184` - Added option to specify the device pixel ratio for the image generated while printing the document.

## 19.1.59 (2021-05-04)

### Document Editor

#### New Features

- `#I307321` - Added support table positioning properties.

#### Bug Fixes

- `#I324028` - Resolved the font dialog properties applied in font dialog.
- `#I323597` - Resolved the text box rendering in RTF documents.
- `#I323603` - Resolved the footnote issue when switching to web layout.
- `#I321745` - Resolved the comment selection issue.
- `#I322561` - Resolved the bookmark undo and redo script error.
- `#I323670` - Resolved the font size and font family issue in copy paste.
- `#I325291` - Document with alternate chunks is now loaded properly.
- `#I323401`, `#I323423` - Resolved the page wise footnote content layout issue.
- `#I326150` - Resolved issue in updating cross reference field.
- `#F160804` - Styles not considered properly while deleting the content.
- `#I324169` - Resolved opacity issue in toolbar item.
- `#I312306` - Hyperlink context is now retrieved properly.
- Resolved the `showRestrictEditingPane` API script error.
- Resolved the document zooming issue.

## 19.1.58 (2021-04-27)

### Document Editor

#### Bug Fixes

- `#I324223`, `#I324023` - Resolved the underline issue in word document export.
- `#I322560`, `#I323516` - Script error in the top and bottom layout is resolved.
- `#I322402` - Before pane switch event triggering twice issue is resolved.
- `#F163664` - Unresponsive issue in opening large size text file is resolved.
- `#I323401`, `#I323423` - Resolved the page wise footnote content layout issue.
- `#I322548` - Resolved the track changes issue in track changes.
- `#I322561` - Bookmark delete and history operation is working fine.

#### New Features

- `#I307321` - Added support table positioning properties.

## 19.1.57 (2021-04-20)

### Document Editor

#### Bug Fixes

- `#I319397` - Resolved the spell check for certain words ending with `ies`.
- `#F164367` - Resolved the script error in `npm run sass`.
- `#I319824` - Resolved the extra page rendering issue.
- `#I319824` - Resolved the border rendering issue in the exported word document.
- `#I319421`, `#F163236` - Resolved the copy/paste issue for content copied from Document Editor.
- `#I307321` - Document exporting issue with line shape is resolved.
- `#I307321` - Exported document rendering issue in resolved.
- `#I321190` - Resolved the icon issue in material-dark, bootstrap-dark, fabric-dark themes.
- `#I319808` - Document with tab is now rendered properly.
- `#I317303` - Spacing after the numbered list is preserved.
- `#I324052` - Added the footnote and endnote locale strings.
- `#I307321` - Table border issue in exported word document is resolved.
- `#I307321` - List with hanging indent is rendered properly.
- `#I313465` - Resolved the image rendering issue in insert image API.
- `#I321108` - Script error in tracking the changes is resolved.
- `#I321923` - Script error in pasting image URL in track change mode is resolved.
- `#I317358` - Image copy/paste issue in ASP.NET MVC framework is resolved.
- `#I318843` - Resolved the list formatting issue in copy pasted content.
- `#I319868` - Exported document with image in header is opened properly in Libre Office.
- `#I324025` - Resolved the font dialog option value in localized mode.

## 19.1.56 (2021-04-13)

### Document Editor

#### Bug Fixes

- `#I319991` - Inline form filling is now working properly in Internet Explorer.
- `#319782` - Resolved script error while deleting the content.
- `#I320821`, `#I320991` - Table is now drawn with proper line width.
- `#I319987` - Table with merged cells now layout properly.
- `#I320513` - Header content is not rendered properly.
- `#I321397` - Table with merged cells is now exported properly.
- `#I317683` - Exported document with footnote is no longer corrupted.
- `#I313465` - Insert image renders the image properly.
- `#I308899` - Track changes is now listed properly in revision pane.
- `#I320270` - Table track changes is now tracked in paste.
- `#I319403`, `#I317463` - Resolved file corruption issue while exporting the document with shapes.
- `#I319185` - Resolved left border rendering issue in merged cells.
- `#I313943` - Tab character is now layout properly.
- `#I313821` - Fixed layouting issue in table with preferred width type as auto.
- `#F162726` - Line spacing is now updated properly.
- `#I319819` - Issue with Undo/Redo in multilevel list is resolved.
- `#I318381` - Comment is not added properly.
- `#I317743` - Accept track changes script error is resolved.
- `#I307321` - Checkbox with tab width rendered properly.
- `#FB23691` - Updated the track changes behaviour in read only mode.

## 19.1.55 (2021-04-06)

### Document Editor

#### Bug Fixes

- `#I318381` - Resolved the script error in adding comments across two pages.
- `#I318283` - Handled the "Different First Page" in Headers and Footers after section breaks.
- `#I319182` - Selection issue after editing header is resolved.
- `#I315240` - Shape parsing script error is resolved.
- `#I319182` - Resolved the script error while editing the header/footer.
- `#F163188` - Highlight color is now working properly.
- `#I320821` - Resolved the script error in opening document with table.
- `#319403`, `#317463` - Resolved file corruption issue while exporting the document with shapes.
- `#319185` - Resolved left border rendering issue in merged cells.
- `#313943` - Tab character is now layout properly.
- `#313821` - Fixed layouting issue in table with preferred width type as auto.
- `#318786` - Resolved the document with footnote opening issue.
Table column width is now updated properly.

## 19.1.54 (2021-03-30)

### Document Editor

#### Breaking Changes

- The `DictionaryData(int langID,string dictPath,string affPath,string customPath)` is marked as obsolete. Please use the alternate new constructor `DictionaryData(int langID, string dictPath, string affPath)` in `Syncfusion.EJ2.SpellChecker` spell checker.
- The `SpellChecker(List<SpellCheckDictionary> dictItem)` is marked as obsolete. Please use the alternate new constructor `SpellChecker(List<DictionaryData> dictItem, string customDicPath)` in `Syncfusion.EJ2.SpellChecker` spell checker.

#### Bug Fixes

- `#315096` - Selection behaviour is updated properly, while pasting a URL and clicking enter after the URL.
- `#315413`, `#317463` - Table cell is now rendered properly.
- `#314467` - Find and replace is now working properly.
- `#315441` - While inserting same bookmark multiple times and deleting, bookmarks were preserved properly now.
- `#316532` - ParagraphFormat is now preserved while pasting with text only option.
- `#314193` - Document with charts were now preserved properly on exporting.
- `#161908`, `#318321` - Added API to show/hide restrict editing pane.
- `#315435` - Table cell width now preserved properly on editing.
- `#162638` - Table background color was now updated properly on updating borders and shading.

## 18.4.49 (2021-03-23)

### Document Editor

#### Bug Fixes

- `#317061` - The merged cell table border rendering issue is resolved.
- `#318283` - Resolved script error while editing the last section header.
- `#310874` - The table with the merged cell is exporting properly.
- `#162017` - Restart page numbering is now preserved properly on exporting.
- `#316810` - Spell check script error is now resolved for layout type change.
- `#163236` - Strike through and underline content are now copy-pasted properly.

## 18.4.48 (2021-03-16)

### Document Editor

#### Bug Fixes

- `#163116`, `#317496`, `#315005` - Implemented the line spacing Hanging similar to MS word.
- `#317691` - Resolve the Number formatting after applying bullet formats.
- `#317524` - Replace all with empty string is now working.
- `#317605` - Shape with line format value null was now preserved properly.
- `#317150` - Can press 'p' key in Firefox after control + a and then backspace.
- Resolve hanging issue while opening document.
- `#315656` - Resolve script error when importing document.

## 18.4.47 (2021-03-09)

### Document Editor

#### Breaking Changes

- The `DictionaryData(int langID,string dictPath,string affPath,string customPath)` is marked as obsolete. Please use the alternate new constructor `DictionaryData(int langID, string dictPath, string affPath)` in `Syncfusion.EJ2.SpellChecker` spell checker.
- The `SpellChecker(List<SpellCheckDictionary> dictItem)` is marked as obsolete. Please use the alternate new constructor `SpellChecker(List<DictionaryData> dictItem, string customDicPath)` in `Syncfusion.EJ2.SpellChecker` spell checker.

#### Bug Fixes

- `#315096` - Selection behaviour is updated properly, while pasting a URL and clicking enter after the URL.
- `#315413`, `#317463` - Table cell is now rendered properly.
- `#314467` - Find and replace is now working properly.
- `#315441` - While inserting same bookmark multiple times and deleting, bookmarks were preserved properly now.
- `#316532` - ParagraphFormat is now preserved while pasting with text only option.
- `#314193` - Document with charts were now preserved properly on exporting.
- `#161908`, `#318321` - Added API to show/hide restrict editing pane.
- `#315435` - Table cell width now preserved properly on editing.
- `#162638` - Table background color was now updated properly on updating borders and shading.

## 18.4.46 (2021-03-02)

### Document Editor

#### Bug Fixes

- `#311796`, `#316639`, `#308845`, `#316676`, `#162561` - All the pages in the document were now loaded properly.
- `#309052`, `#315953` - Footnote now layouts properly.
- `#307997` - Resolved issue on updating the bullet list.
- `#314313`, `#316278` - When copy pasting the merge field, merge field was now preserved properly.
- `#315435` - Table cells layouts properly now.
- `#315413`, `#317463` - Table cells renders to preferred width now.

## 18.4.44 (2021-02-23)

### Document Editor

#### Bug Fixes

- `#313564`, `#314479` - Bookmark co ordinates were now updated properly.
- `#162017` - Restart page number behaviour was implemented also for page break now.
- `#310874` - Table with merged cells were exported properly now.
- `#162017` - Page number was now updated properly based on page index.
- `#313821` - Table column were now layout properly.
- `#311371` - While deleting the bookmark extra spaces between the text were now removed properly.
- `#312082` - Resolved script error on updating TOC.
- `#312306` - Hyperlink label was not added while editing the link address now.

## 18.4.43 (2021-02-16)

### Document Editor

#### Bug Fixes

- `#160804`, `#160805` - Line space was now considered properly on exporting.
- `#161513` - Properties pane was now disabled while enabling restrict editing.
- `#311371` - While deleting a text extra spaces between the text were now removed properly.
- `#311884` - Document with table was imported properly now.
- `#310754` - Hebrew text was now layout properly with spaces and numbers renders properly.
- Resolved performance lagging issue while editing.

## 18.4.42 (2021-02-09)

### Document Editor

#### Bug Fixes

- `#311518` - Vertical scrollbar was now updated properly on container resize.
- `#161047` - Document with tab stop was now exported properly.
- `#310258` - All the contents were preserved on pasting now.
- `#307321`, `#309396` - Line shape was now rendered properly.
- `#307321`, `#313943` - Tab stops were now rendered properly.
- `#311296` - Odd headers were added to all odd pages now.
- `#307321`, `#313948` - Straight connectors were now rendered properly.
- `#309565` - When enable track changes is false changes tab is hide in review pane now.

## 18.4.41 (2021-02-02)

### Document Editor

#### Bug Fixes

- `#264813` - List tab element now layouts properly.
- `#309425` - Paragraph formats were considered while creating a new table.
- `#309976` - List was not updated properly from level 1 to level 2.
- `#306480` - Review pane was now updated properly on resizing.
- `#309052` - Document with footnote now rendered properly without overlap.
- `#309565` - When enable comment is false comment tab is hide in review pane now.
- `#307321` - Table with no cell border now rendered properly.
- `#307860` - While pasting no extra paragraph was added now.
- `#311336` - Text was now updated properly on undo without overlap.

## 18.4.35 (2021-01-19)

### Document Editor

#### Bug Fixes

- `#160177` - The document with tables were now rendered properly without page unresponsive error.
- `#305777` - Selection was now updated properly on zooming for web layout.
- `#297705` - Handled behaviour similar to MS Word if page and section break in same paragraph.
- `#305110` - The document with large tables were now rendered properly without page unresponsive error.
- `#307321` - Table borders now renders properly if the border color is none.
- `#303643` - Edit hyperlink now works properly on image with hyperlink.

## 18.4.34 (2021-01-12)

### Document Editor

#### Bug Fixes

- `#306130` - The document content now renders properly while pasting the contents after inserting header with maximum header distance.
- `#307321` - Top borders of table with merged cell were rendered properly now.
- `#307746`, `#307748` - Auto fit tables were rendered properly now.
- `#309747` - Resolved spelling issue on default font family collection.
- `#295084`, `#291801` - Charts were now rendered properly on pasting.
- `#307318`, `#307327` - Creation of new comment was now restricted until existing comment was posted or discarded.
- `#307321` - Tab stop was rendered properly now.
- `#299850` - Auto fit table with preferred width and cell width was now rendered properly.
- `#308899` - Track changes revision was now preserved properly for justified paragraph.

## 18.4.33 (2021-01-05)

### Document Editor

#### Bug Fixes

- `#297703`, `#160488` - Cursor was now updated properly for RTL languages.
- `#307715` - Table with merged cells were now exported properly.

## 18.4.32 (2020-12-29)

### Document Editor

#### Bug Fixes

- `#306939` - Table with merged cells were now exported properly.
- `#302508` - List format was now preserved properly after pasting some content in list line.
- `#299511` - On discarding the comment, comment tag was removed properly on file level now.

## 18.4.31 (2020-12-22)

### Document Editor

#### Bug Fixes

- `#305640` - Track changes is now preserved properly on exported document.
- `#305804` - Document scrolling is now working properly when document contains clipped image.
- `#305804` - In IE, Ctrl+ P is now working properly without text insertion in cursor position.
- `#299850` - Paragraph format was now applied properly inside the table.
- `#304588` - Application level formats were now preserved properly.
- `#305834`, `#302444` - Comment tab is also visible now while clicking on the track changes.
- `#301314` - Resolved the script error thrown on entering a new line and backspace sequentially.

## 18.4.30 (2020-12-17)

### Document Editor

#### New Features

- `227250`, `143540`, `234463`, `252453`, `267474`, `67852`, `268213`, `273871`, `285146`, `288507`, `290372`, `295055`, `295548` - Added support for Footnote and Endnote.

## 18.3.53 (2020-12-08)

### Document Editor

#### Bug Fixes

- `305508` - Resolved page unresponsive error while selecting field.
- `302470` - Chart series color now applied properly.
- `292515` - Resolved paste option issue on IE.

## 18.3.52 (2020-12-01)

### Document Editor

#### Bug Fixes

- `302151` - Vertical alignment for cell now working properly in header and footer.
- `304069` - Table cell spacing now exported properly.
- `304048`, `294075` - Auto fit table is now layout properly if table has preferred width.

## 18.3.51 (2020-11-24)

### Document Editor

#### Bug Fixes

- `#291766`, `#293053` - Resolved the page unresponsive error while selecting the image.
- `#301016` - Multiple server calls on optimized spell checking was now optimized to single call per page.
- `#300330` - Document with comment can be opened without any script errors now.
- `#292912`, `#293388` - Document with empty comment is now exported properly.
- `#299940` - Table with center alignment is now rendered properly and footer contents are rendered properly now on zooming.
- `#290277` - Navigating to bookmark now works properly without script error.
- `#301035`, `#300947` - Changes were tracked properly now on pasting.

## 18.3.50 (2020-11-17)

### Document Editor

#### Bug Fixes

- Strike through button now toggles properly.
- `#297703` - Resolved issue on exporting a RTL document.

## 18.3.48 (2020-11-11)

### Document Editor

#### Bug Fixes

- `#294075` - Resolved table bottom border rendering issue when table contains merged cell.
- `#292515` - Resolved context menu position issue in IE11.

## 18.3.47 (2020-11-05)

### Document Editor

#### New Features

- `#281067`, `#279595` - Added partial lock and edit support.

#### Bug Fixes

- `#296222` - Resolved table rendering issue when table contains merged cell.
- `#297479` - Field result text with multiple lines are now inserted properly when track changes enabled.
- `#296863` - Resolved script error when field code contains table.
- `#281339` - Resolved paragraph renders outside the page in RTL format document issue.
- Resolved script error Navigating to the specified bookmark.
- `#296222` - Resolved exporting issue when exporting document with shape.
- `#294306` - Resolved page number update issue when page contains page field.
- `#295176` - Ctrl + V now works properly in Edge.
- `#296782`, `#296781` - Resolved issue on cursor visibility when cursor is in editable region.
- `#293369` - Document with merged cell is now exported properly.
- `#294261` - Accepting or rejecting changes were now preserved in restrict editing.
- `#292726` - Row header was now repeated properly for each page.
- `#281339` - Numbered list in the RTL was now rendered properly.
- `#295753` - Sections with restart page number now updated properly.
- `#293980` - Skipped form field insertion in header and footer similar to MS Word.
- `#294075`,`#293472` - Resolved table border rendering issue.
- `#291766` - Resolved file picker not opening issue in IE.
- `#296842` - Resolved issue on selecting a merge field.
- `#292515` - Polish characters are now working properly in IE.
- `#291766` - Resolved script error on loading a document with text wrapped image.
- `#292515` - Resolved toolbar rendering issue in IE.
- `#289186`,`#293172` - Text box with none style is now exported properly.
- `#291766` - Resolved issue on table rendering black.
- `#293342`,`#295176` - Ctrl + V now works properly in IE.

## 18.3.44 (2020-10-27)

### Document Editor

#### Bug Fixes

- `#296222` - Resolved table rendering issue when table contains merged cell.
- `#297479` - Field result text with multiple lines are now inserted properly when track changes enabled.
- `#296863` - Resolved script error when field code contains table.
- `#281339` - Resolved paragraph renders outside the page in RTL format document issue.
- Resolved script error Navigating to the specified bookmark.
- `#296222` - Resolved exporting issue when exporting document with shape.

## 18.3.42 (2020-10-20)

### Document Editor

#### New Features

- `#281067`, `#279595` - Added partial lock and edit support.

#### Bug Fixes

- `#294306` - Resolved page number update issue when page contains page field.
- `#295176` - Ctrl + V now works properly in Edge.
- `#296782`, `#296781` - Resolved issue on cursor visibility when cursor is in editable region.
- `#293369` - Document with merged cell is now exported properly.
- `#294261` - Accepting or rejecting changes were now preserved in restrict editing.
- `#292726` - Row header was now repeated properly for each page.
- `#281339` - Numbered list in the RTL was now rendered properly.
- `#295753` - Sections with restart page number now updated properly.
- `#293980` - Skipped form field insertion in header and footer similar to MS Word.

## 18.3.40 (2020-10-13)

### Document Editor

#### Bug Fixes

- `294075`,`293472` - Resolved table border rendering issue.
- `#291766` - Resolved file picker not opening issue in IE.
- `#296842` - Resolved issue on selecting a merge field.
- `#292515` - Polish characters are now working properly in IE.
- `#291766` - Resolved script error on loading a document with text wrapped image.
- `#292515` - Resolved toolbar rendering issue in IE.
- `289186`,`293172` - Text box with none style is now exported properly.
- `#291766` - Resolved issue on table rendering black.
- `293342`,`295176` - Ctrl + V now works properly in IE.

## 18.3.35 (2020-10-01)

### Document Editor

#### Bug Fixes

- `#283180` - Resolved font family no records found issue.
- `#282303` - Paste dropdown now hides when creating or opening new document.
- `#280951` - Table content renders properly now for table with merged cells.
- `#280973` - Resolved script while getting bookmarks from selection.
- `#284486` - Comment Tab in pane is removed when enable comment is false.
- `#283344` - Resolved the initial delay in pasting images.
- `#282707`,`#284035` - Resolved bullet list exporting issue in MAC devices.
- `#284412` - Comment mark is now deleted properly when comment is deleted.
- `#281339` - Resolved RTL issue when editing a list content.
- `#276616` - Paragraph maintained when inserting text in whole paragraph similar to MS Word.
- `#284775` - Resolved table resize enabled issue in protected mode.
- `#282504` - Resolved footer content overlapping issue when inserting image and table in footer.
- `#286986` - Table properties are now written properly on html exporting.
- `#286520` - Inserted text selection now applied properly after applying style.
- `#287740` - Paper size dropdown in page setup dialog now updated for document with A4 format.
- `#282515` - Resolved error on exporting a document which contains restart numbering.
- `#287633` - Table containing alignment is now exporting properly with alignment.
- `#286469` - Resolved table formatting issue when table splits to multiple pages.
- `#285747` - Resolved script error on server side export.
- `#284704` - Resolved script error on changing the footer distance.
- `#283529` - Resolved table layout issue when table is center aligned.
- `#286474` - Resolved table re layout issue when table have left indent value.
- `#289186` - Resolved issue on exporting a text box with line format none.
- `#288198` - Font family customization is also available on modify style dialog now.
- `#289187` - Resolved table border rendering issue when table have merged cells.
- `#287255` - Resolved page unresponsive error occurs on mail merge.
- `#286474`, `#288778` - Resolved script error thrown on choosing fill color.
- `#155699` - Image resize history is now called before the content change event.
- `#156086` - Resolved table layout issue on opening a saved document with merged cells.
- `#148494` - Resolved script error on destroying the container.
- `#289186` - Resolved layout issue on exporting a text box.
- `#289172` - Resolved script error when two or more server request is passed at same time.
- `#287775` - Resolved script error on saving a document with form field.
- `#289902` - Custom page height and width is now updating properly in page setup dialog.
- `#289902` - Resolved review pane enabled issue when track changes is disabled.
- `#157264` - Resolved script error when finding a text with curly braces.
- `#290625` - Tick icon in line spacing is aligned properly now.
- `#291882` - Now,Text contents were not transformed to upper case while copying.
- `#287582` - Apply shading property for form field is now maintained also on exported document.
- `#280951` - Table contents were not rendered on footer region now.
- `#287195` - Resolved script error throw while deleting large text inside a table.
- `#155699` - Resolved selection change event gets triggered before created event of document editor issue.
- `#290271` - Resolved some elements are not created with unique id in document editor component issue.
- `#288253` - Exported document with comments from editor contain initials property in file level now.
- `#287740` - Landscape Orientation not updated properly in page setup dialog now.
- `#291080`, `#157393` - Restrict editing property works when setting on component creation now.

#### New Features

- Added API to delete bookmark.
- `#267515`- Added API to get searched item hierarchical index.
- `#284937`- Added API show restrict editing pane.
- `#280089`, `#283427`, `#250760` - Added event to notify service failure.
- `#275184` - Added support for retrieving next and previous element context type from current selection range.
- `#243495` - Added support for automatic text color.
- `#279355` - Added support to enable properties pane in read only mode.
- `#260677`, `#277329` - Added support for cropping images in document editor.
- `#250760` -  Added before file open event to restrict document loading based on file size.
- `#256210`, `#259583`, `#280989`, `#282228` - Added support for all Caps property for character.
- `#156915` - Added public API to check whether the selection is in edit region.
- `#287831` - Added public API to show spell check dialog.
- `#284434` - Spell checker performance was optimized.
- `#290372` - Added support to apply restart page number for different sections.
- `#290423` - Added resize API in document editor container.
- `#243495`, `#247427`, `#248347`, `#252755`, `#254094`, `#254684`, `#256926`, `#248347`, `#260233`, `#262638`, `#273681`, `#155458`, `#278038` - Added support to preserve content control feature.

## 18.2.58 (2020-09-15)

### Document Editor

#### New Features

- `#290372` - Added support to apply restart page number for different sections.
- `#290423` - Added resize API in document editor container.
- `#243495`, `#247427`, `#248347`, `#252755`, `#254094`, `#254684`, `#256926`, `#248347`, `#260233`, `#262638`, `#273681`, `#155458`, `#278038` - Added support to preserve content control feature.

#### Bug Fixes

- `#155699` - Resolved selection change event gets triggered before created event of document editor issue.
- `#290271` - Resolved some elements are not created with unique id in document editor component issue.
- `#288253` - Exported document with comments from editor contain initials property in file level now.
- `#287740` - Landscape Orientation not updated properly in page setup dialog now.
- `#291080`, `#157393` - Restrict editing property works when setting on component creation now.

## 18.2.57 (2020-09-08)

### Document Editor

#### New Features

- `#156915` - Added public API to check whether the selection is in edit region.
- `#287831` - Added public API to show spell check dialog.
- `#284434` - Spell checker performance was optimized.

#### Bug Fixes

- `#148494` - Resolved script error on destroying the container.
- `#289186` - Resolved layout issue on exporting a text box.
- `#289172` - Resolved script error when two or more server request is passed at same time.
- `#287775` - Resolved script error on saving a document with form field.
- `#289902` - Custom page height and width is now updating properly in page setup dialog.
- `#289902` - Resolved review pane enabled issue when track changes is disabled.
- `#157264` - Resolved script error when finding a text with curly braces.
- `#290625` - Tick icon in line spacing is aligned properly now.
- `#291882` - Now,Text contents were not transformed to upper case while copying.
- `#287582` - Apply shading property for form field is now maintained also on exported document.
- `#280951` - Table contents were not rendered on footer region now.
- `#287195` - Resolved script error throw while deleting large text inside a table.

## 18.2.55 (2020-08-25)

### Document Editor

#### Bug Fixes

- `#286474` - Resolved table re layout issue when table have left indent value.
- `#289186` - Resolved issue on exporting a text box with line format none.
- `#288198` - Font family customization is also available on modify style dialog now.
- `#289187` - Resolved table border rendering issue when table have merged cells.
- `#287255` - Resolved page unresponsive error occurs on mail merge.
- `#286474`, `#288778` - Resolved script error thrown on choosing fill color.
- `#155699` - Image resize history is now called before the content change event.
- `#156086` - Resolved table layout issue on opening a saved document with merged cells.

## 18.2.54 (2020-08-18)

### Document Editor

#### New Features

- `#275184` - Added support for retrieving next and previous element context type from current selection range.
- `#243495` - Added support for automatic text color.
- `#279355` - Added support to enable properties pane in read only mode.
- `#260677`, `#277329` - Added support for cropping images in document editor.
- `#250760` -  Added before file open event to restrict document loading based on file size.
- `#256210`, `#259583`, `#280989`, `#282228` - Added support for all Caps property for character.
- Added API to delete bookmark.
- `#267515`- Added API to get searched item hierarchical index.
- `#284937`- Added API show restrict editing pane.
- `#280089`, `#283427`, `#250760` - Added event to notify service failure.

#### Bug Fixes

- `#286986` - Table properties are now written properly on html exporting.
- `#286520` - Inserted text selection now applied properly after applying style.
- `#287740` - Paper size dropdown in page setup dialog now updated for document with A4 format.
- `#282515` - Resolved error on exporting a document which contains restart numbering.
- `#287633` - Table containing alignment is now exporting properly with alignment.
- `#286469` - Resolved table formatting issue when table splits to multiple pages.
- `#285747` - Resolved script error on server side export.
- `#284704` - Resolved script error on changing the footer distance.
- `#283529` - Resolved table layout issue when table is center aligned.
- `#283180` - Resolved font family no records found issue.
- `#282303` - Paste dropdown now hides when creating or opening new document.
- `#280951` - Table content renders properly now for table with merged cells.
- `#280973` - Resolved script while getting bookmarks from selection.
- `#284486` - Comment Tab in pane is removed when enable comment is false.
- `#283344` - Resolved the initial delay in pasting images.
- `#282707`,`#284035` - Resolved bullet list exporting issue in MAC devices.
- `#284412` - Comment mark is now deleted properly when comment is deleted.
- `#281339` - Resolved RTL issue when editing a list content.
- `#276616` - Paragraph maintained when inserting text in whole paragraph similar to MS Word.
- `#284775` - Resolved table resize enabled issue in protected mode.
- `#282504` - Resolved footer content overlapping issue when inserting image and table in footer.

## 18.2.47 (2020-07-28)

### Document Editor

#### New Features

- `#280089`, `#283427`, `#250760` - Added event to notify service failure.

#### Bug Fixes

- `#284775` - Resolved table resize enabled issue in protected mode.
- `#282504` - Resolved footer content overlapping issue when inserting image and table in footer.

## 18.2.46 (2020-07-21)

### Document Editor

#### New Features

- `#284937`- Added API show restrict editing pane.

#### Bug Fixes

- `#284486` - Comment Tab in pane is removed when enable comment is false.
- `#283344` - Resolved the initial delay in pasting images.
- `#282707`,`#284035` - Resolved bullet list exporting issue in MAC devices.
- `#284412` - Comment mark is now deleted properly when comment is deleted.
- `#281339` - Resolved RTL issue when editing a list content.
- `#276616` - Paragraph maintained when inserting text in whole paragraph similar to MS Word.

## 18.2.45 (2020-07-14)

### Document Editor

#### New Features

- Added API to delete bookmark.
- `#267515`- Added API to get searched item hierarchical index.

#### Bug Fixes

- `#283180` - Resolved font family no records found issue.
- `#282303` - Paste dropdown now hides when creating or opening new document.
- `#280951` - Table content renders properly now for table with merged cells.
- `#280973` - Resolved script while getting bookmarks from selection.

## 18.2.44 (2020-07-07)

### Document Editor

#### Breaking Changes

- The property `dropDownItems` in DropDownFormFieldInfo is changed to `dropdownItems`.

#### New Features

- `#268210` - Added support to customize user color in comment.
- `#268211` - Added support for restricting the user from delete comment.
- `#125563`,`#167098`,`#200655`,`#210401`,`#227193`,`#225881`,`#227250`,`#238531`,`#238529`,`#249506`,`#251329`,`#251816`,`#252988`,`#254094`, `#125563`,`#255850`, `#258472`, `#264794`, `#264634`, `#266286`, `#278191` - Added support for track changes.
- `#272634` - Added API to get hidden bookmark.
- `#267067`,`#267934` - Added API to customize font family dropdown.
- Added `height` and `width` API to define height and width of document editor.
- Added support for Legacy Form Fields.
- Added support for updating bookmark cross reference fields.

#### Bug Fixes

- `#279874` - Resolved paragraph spacing issue in the exported docx when opening it in libre office.
- `#278039` - Character formatting now preserved properly for dropdown field.
- `#278038` - Handle restrict editing inside dropdown field.
- `#278695` - Paste text only in editable region now working properly.
- `#267924` - Circular reference exception resolved when export the document contains chart.
- `#152124` - Resolved script error when modify style for locale changed text.
- `#266059` - Skipped adding bookmark when pasting content with bookmark.
- `#267949` - Table is now revert properly when insert table below another table.
- `#268472` - Selection format is now retrieved properly when paragraph contains more than two paragraph.
- `#269467` - List character format is now update properly when paragraph contains style.
- `#264813` - Tab width in list paragraph is now layout properly.
- `#264779` - Text clipping issue is resolved when text inside table.
- `#269397` - Context menu position is now update properly.
- `#269546` - Resolved key navigation issue when paragraph contains page break.
- `#269778` - $ symbol is now search properly when text contains $ symbol.
- `#269893` - Focus is in document editor after dialog gets closed.
- `#268907` - Selection character format is retrieved properly when selection is in list text.
- `#270424` - Footer content is now update properly when document contains more than one section.
- `#269743` , `#266534` - Focus is now update properly in Firefox when navigate to bookmark or search result.
- `#271039` - When paste content in RTL paragraph, formatting is now update properly.
- `#271928` - Resolved script when trying to create a new document and document have broken comments.
- `#271886` - Right tab width issue when paragraph contains right indent.
- `#271986` - Resolved error when updating Table of Contents with comments.
- `#271967` , `#271968` , `#271971` - Paste text only in empty paragraph is now working properly.
- `#271985` - Resolved script error when remove page break after bookmark.
- `#272009` , `#273868` - Modify style using numbering and paragraph dialog is now working properly.
- `#271977` - Pasting text in heading style is now maintain heading style in paragraph.
- `#271863` - Paragraph element splitting issue is now resolved when alignment is left and line combined with field.
- `#272290` - Resolved selection issue when paragraph contains line break character.
- `#272600` - Copy text with specific symbol (< , >) is now working properly.
- `#266059` - When pasting content with bookmark, bookmark is now preserved.
- `#269743` - Resolved focus issue in Firefox when navigate to bookmark or search result.
- `#269546` - Selection issue is now resolved when paragraph contains page break.
- `#274395` - Resolved script error when clicking on canvas in mobile view mode.
- `#273345` - Resolved table export issue when table contains vertical merge cell.
- `#271450` - Restricted user editing, when spinner is visible.
- `#271375` - Resolved table layout issue when table contain vertical merged cells.
- `#252868` - Resolved script error when minimize row height.
- `#275993` ,`#277160` - Button actions in comments and restrict editing pane will not trigger the form submit events now.
- `#276810` - Table alignment property is now export properly.
- `#277452` - Contents in table is now print properly.
- `#273870` - Bookmarks API will not retrieve bookmark when selection is at end of bookmark.
- `#273913` - Enable/Disable item by index in toolbar is now working properly.
- `#276399` - After copy and paste table, table is now exported properly.
- Comments pane locale string is now returns proper time.
- `#275137` - Apply vertical alignment for cell is now working properly when it inside table.
- `#275184` - Select bookmark API is now select bookmark element properly.
- `#275452` - Select current word using keys is now working properly when line contains comments.
- `#274525` - List font is now update properly on enter in list paragraph.
- `#273905` - Insert row below is now proper when cells have different borders.
- `#272762` - Modify list level using tab key is now proper.
- `#277823` - Resolved script error when deleting edit range element inside table.
- `#247077` - Selection is now updated properly while clicking before merge field.
- `#277357` - Table borders are now rendered properly.
- `#275686` - `contentChange` event will not trigger while switching the layout type.
- `#276616` - Paragraph format now preservers properly while inserting text.
- `#276039` - Adding new comment and replying to old comment is now disable in read only mode.
- `#277959` - Document with shape now imported properly.
- `#153583` - Selection is now updated properly for image inside the bookmark.
- `#278685` - Resolved script error on backspace inside the edit range.
- `#247077` - Selection is now updated properly while clicking before merge field.
- `#277357` - Table borders are now rendered properly.
- `#275686` - `contentChange` event will not trigger while switching the layout type.
- `#276616` - Paragraph format now preservers properly while inserting text.
- `#276039` - Adding new comment and replying to old comment is now disable in read only mode.
- `#277959` - Document with shape now imported properly.
- `#153583` - Selection is now updated properly for image inside the bookmark.

## 18.1.56 (2020-06-09)

### Document Editor

#### Bug Fixes

- `#278685` - Resolved script error on backspace inside the edit range.
- `#247077` - Selection is now updated properly while clicking before merge field.
- `#277357` - Table borders are now rendered properly.
- `#275686` - `contentChange` event will not trigger while switching the layout type.
- `#276616` - Paragraph format now preservers properly while inserting text.
- `#276039` - Adding new comment and replying to old comment is now disable in read only mode.
- `#277959` - Document with shape now imported properly.
- `#153583` - Selection is now updated properly for image inside the bookmark.

## 18.1.55 (2020-06-02)

### Document Editor

#### Bug Fixes

- `#247077` - Selection is now updated properly while clicking before merge field.
- `#277357` - Table borders are now rendered properly.
- `#275686` - `contentChange` event will not trigger while switching the layout type.
- `#276616` - Paragraph format now preservers properly while inserting text.
- `#276039` - Adding new comment and replying to old comment is now disable in read only mode.
- `#277959` - Document with shape now imported properly.
- `#153583` - Selection is now updated properly for image inside the bookmark.

## 18.1.54 (2020-05-26)

### Document Editor

#### Bug Fixes

- Comments pane locale string is now returns proper time.
- `#275137` - Apply vertical alignment for cell is now working properly when it inside table.
- `#275184` - Select bookmark API is now select bookmark element properly.
- `#275452` - Select current word using keys is now working properly when line contains comments.
- `#274525` - List font is now update properly on enter in list paragraph.
- `#273905` - Insert row below is now proper when cells have different borders.
- `#272762` - Modify list level using tab key is now proper.
- `#277823` - Resolved script error when deleting edit range element inside table.

## 18.1.53 (2020-05-19)

### Document Editor

#### New Features

- `#272634` - Added API to get hidden bookmark.

#### Bug Fixes

- `#275993` ,`#277160` - Button actions in comments and restrict editing pane will not trigger the form submit events now.
- `#276810` - Table alignment property is now export properly.
- `#277452` - Contents in table is now print properly.
- `#273870` - Bookmarks API will not retrieve bookmark when selection is at end of bookmark.
- `#273913` - Enable/Disable item by index in toolbar is now working properly.
- `#276399` - After copy and paste table, table is now exported properly.

## 18.1.52 (2020-05-13)

### Document Editor

#### New Features

- `#267067`,`#267934` - Added API to customize font family dropdown.

#### Bug Fixes

- `#271375` - Resolved table layout issue when table contain vertical merged cells.
- `#252868` - Resolved script error when minimize row height.

## 18.1.48 (2020-05-05)

### Document Editor

#### Bug Fixes

- `#272290` - Resolved selection issue when paragraph contains line break character.
- `#272600` - Copy text with specific symbol (< , >) is now working properly.
- `#266059` - When pasting content with bookmark, bookmark is now preserved.
- `#269743` - Resolved focus issue in Firefox when navigate to bookmark or search result.
- `#269546` - Selection issue is now resolved when paragraph contains page break.
- `#274395` - Resolved script error when clicking on canvas in mobile view mode.
- `#273345` - Resolved table export issue when table contains vertical merge cell.
- `#271450` - Restricted user editing, when spinner is visible.

## 18.1.46 (2020-04-28)

### Document Editor

#### New Features

- Added `height` and `width` API to define height and width of document editor.

#### Bug Fixes

- `#271928` - Resolved script when trying to create a new document and document have broken comments.
- `#271886` - Right tab width issue when paragraph contains right indent.
- `#271986` - Resolved error when updating Table of Contents with comments.
- `#271967` , `#271968` , `#271971` - Paste text only in empty paragraph is now working properly.
- `#271985` - Resolved script error when remove page break after bookmark.
- `#272009` , `#273868` - Modify style using numbering and paragraph dialog is now working properly.
- `#271977` - Pasting text in heading style is now maintain heading style in paragraph.
- `#271863` - Paragraph element splitting issue is now resolved when alignment is left and line combined with field.

## 18.1.45 (2020-04-21)

### Document Editor

#### Bug Fixes

- `#268907` - Selection character format is retrieved properly when selection is in list text.
- `#270424` - Footer content is now update properly when document contains more than one section.
- `#269743` , `#266534` - Focus is now update properly in Firefox when navigate to bookmark or search result.
- `#271039` - When paste content in RTL paragraph, formatting is now update properly.

## 18.1.44 (2020-04-14)

### Document Editor

#### New Features

- Added support for Legacy Form Fields.
- Added support for updating bookmark cross reference fields.

#### Bug Fixes

- `#269397` - Context menu position is now update properly.
- `#269546` - Resolved key navigation issue when paragraph contains page break.
- `#269778` - $ symbol is now search properly when text contains $ symbol.
- `#269893` - Focus is in document editor after dialog gets closed.

## 18.1.43 (2020-04-07)

### Document Editor

#### Bug Fixes

- `#267924` - Circular reference exception resolved when export the document contains chart.
- `#152124` - Resolved script error when modify style for locale changed text.
- `#266059` - Skipped adding bookmark when pasting content with bookmark.
- `#267949` - Table is now revert properly when insert table below another table.
- `#268472` - Selection format is now retrieved properly when paragraph contains more than two paragraph.
- `#269467` - List character format is now update properly when paragraph contains style.
- `#264813` - Tab width in list paragraph is now layout properly.
- `#264779` - Text clipping issue is resolved when text inside table.

## 18.1.42 (2020-04-01)

### Document Editor

#### Breaking Changes

- Default value of `enableLocalPaste` is set to false. So, by default, the content will be pasted from the system clipboard.
- Some locale properties are renamed as below

|Previous|Now|
|----|----|
|Linked(Paragraph and Character)|Linked Style|
|Don't add space between the paragraphs of the same styles|Contextual Spacing|
|The password don't match|Password Mismatch|
|Exceptions (optional)|Exceptions Optional|
|Select parts of the document and choose users who are allowed to freely edit them.|Select Part Of Document And User|
|Yes, Start Enforcing Protection|Enforcing Protection|
|This document is protected from unintentional editing. You may edit in this region.|Protected Document|
|You may format text only with certain styles.|You may format text only with certain styles|
|Type your comment hear|Type your comment here|
|Added comments not posted. If you continue, that comment will be discarded.|Discard Comment|
|Header & Footer|Header And Footer|
|Different header and footer for odd and even pages.|Different header and footer for odd and even pages|
|Different Odd & Even Pages|Different Odd And Even Pages|
|Different header and footer for first page.|Different header and footer for first page|
|Distance from top of the page to top of the header|Distance from top of the page to top of the header|
|Distance from bottom of the page to bottom of the footer.|Distance from bottom of the page to bottom of the footer|
|Insert / Delete|Insert Or Delete|
|Number of heading or outline levels to be shown in table of contents.|Number of heading or outline levels to be shown in table of contents|
|Show page numbers in table of contents.|Show page numbers in table of contents|
|Right align page numbers in table of contents.|Right align page numbers in table of contents|
|Use hyperlinks instead of page numbers.|Use hyperlinks instead of page numbers|
|Bold (Ctrl+B)|Bold Tooltip|
|Italic (Ctrl+I)|Italic Tooltip|
|Underline (Ctrl+U)|Underline Tooltip|
|Superscript (Ctrl+Shift++)|Superscript Tooltip|
|Subscript (Ctrl+=)|Subscript Tooltip|
|Align left (Ctrl+L)|Align left Tooltip|
|Center (Ctrl+E)|Center Tooltip|
|Align right (Ctrl+R)|Align right Tooltip|
|Justify (Ctrl+J)|Justify Tooltip|
|Create a new document.|Create a new document|
|Open a document.|Open a document|
|Undo the last operation (Ctrl+Z).|Undo Tooltip|
|Redo the last operation (Ctrl+Y).|Redo Tooltip|
|Insert inline picture from a file.|Insert inline picture from a file|
|Create a link in your document for quick access to web pages and files (Ctrl+K).|Create Hyperlink|
|Insert a bookmark in a specific place in this document.|Insert a bookmark in a specific place in this document|
|Provide an overview of your document by adding a table of contents.|Provide an overview of your document by adding a table of contents|
|Add or edit the header.|Add or edit the header|
|Add or edit the footer.|Add or edit the footer|
|Open the page setup dialog.|Open the page setup dialog|
|Add page numbers.|Add page numbers|
|Find text in the document (Ctrl+F).|Find Text|
|The current page number in the document. Click or tap to navigate specific page.|Current Page Number|

#### New Features

- `249782`, `254484`, `149278`,`258415`,`260463` - Added support for toolbar customization.
- `253670` - Enhancements for copy and paste operation.
- `#262665`, `#151012` - Added API to customize search highlight colour.
- `#249197` - Added API to enable/disable spell check action.
- `#237725`, `#253671` - Added support for web layout.
- `#260639` - Added `enableComment` property to enable and disable comment.
- `#259970` - Handled paste list behaviour using start at value of list.
- `#256487` - Enhancements for mouse and keyboard selection.

#### Bug Fixes

- `#263861` - Table cells are now resized properly.
- `#260600` , `#266651` - RTL characters are now remove properly on backspace and delete.
- `#260600` - When direction is RTL, elements now rearranged properly after change character formatting.
- `#250770` , `#263443` - RTL text layout properly with special characters.
- `#264351` - Justify paragraph is layout properly when paragraph contains field.
- `#264631` - Stop protection is now working if password is empty.
- `#263171` - Cell options dialog content is now aligned properly.
- `#150960` - Hidden separator in context menu when hyperlink is disabled.
- `#150995` - Resolved error when importing the document with editable region restrictions.
- `#260600`, `#150466` , `#266311` - Properties pane is now enabled properly based on the context type in header footer region.
- `#260133` - Resolved navigation issue on Ctrl + click in MAC machine.
- `150960` - Enable/disable comment now working properly.
- `#263608` , `#150960` - Resolved script error when disable toolbar.
- `#261241` - Resolved script error when remove hyperlink in splitted widget.
- `#259011` - Paragraph before spacing layout issue is now resolved.
- `#260206` - Resolved numbering list issue when list contains start at value.
- `#260206` - Restart numbering is now working properly for different number format.
- `#260637` - Resolved script error when removing comment in header.
- `#249197` - Resolved exception when export Sfdt to other type in server side.
- `#252868` - Resolved script error when resize row to next page.
- `#259972` - Formatting is now applied properly for keep text only option in paste.
- `#258191` - Table cell width are now updated properly.
- `#260133`, `#261809` - Page scrolling issue is resolved when right click in MAC machine.
- `#258087`, `#255070` - Grid columns are now preserved properly on export.
- `#255070` - Page headers is now export properly when section break in table.
- `#259583` - List level number for style paragraph is now export properly.
- `#259153` - Table cell width and height is now copy properly.
- `#258121` - Resolved warnings in bootstrap4 styles when run the application in Firefox.
- `#249197` - Highlight colours are now exported properly.
- `#260048`, `#256276` - Image files are now pasted properly.
- `#256903` - Resolved bookmarks API issue when bookmark is in table.
- `#256758` - Resolved selection issue after correcting the spelling mistake.
- `#258938` - Resolved typo error in place holder of comments text area.
- `#257481` - Font family in font dialog is now update properly based on current selection.
- `#257171` - Bookmarks is now update properly after paste with formatting.
- `#257161` - List number is now update properly when hidden field contains list paragraph.
- `#246365` - Borders are now render properly when copy and paste from excel.
- `#257455` - Font colour is now update properly in modify style dialog.
- `#250770` - Line is now arranged properly when insert field.
- `#255913`, `#257879` - Bookmark is now insert properly in splitted paragraph.
- `#255736` , `#256106` , `#257011` - Context menu is now open in Firefox, Edge and Safari.
- `#254998` - Character format is now apply properly for selected bookmark.
- `#254997`, `#256764`, `#257106` , `#256764` - Paragraph format is now export properly if document contains selection.
- `#255272` - Resolved script error when navigate to bookmark in header.
- `#255188` - Bookmark is now preserved properly in header and footer.
- `#255601` - Bookmark is now select properly after insert text.
- `#256385` - Copy is now working properly in Firefox.
- `#256321` - Auto fit table is now lay-out properly if maximum word width exceeds container width.
- `#256509` - Resolved script error throws on backspace when selection is in bookmark end.
- `#256053` - TOC outline level is now serialized properly on Word export.
- `#256449` - Bullet list is now render properly in IOS chrome and safari.
- `#256099` - List is now apply properly in multilevel list.
- `#256384` - Tab width is now update properly when paragraph contains hanging indent.
- `#264048` , `#267560` - Header style formatting is now preserved properly in local copy and paste.
- `#266571` - Table with auto fit is now layout properly.
- `#266534` - Resolved text navigation issue when spell check is enabled.
- `#151718` - Dynamic toolbar injection is now working properly.
- `#266060` - Fixed paste match destination formatting issue.
- `#267089` , `#255993` - Fixed exception when pasting html content.
- `#267793`, `#152022` - Resolved page scrolling issue when copy is triggered.
- `#267769` - Table width is not update properly when insert table inside table cell.

## 18.1.36-beta (2020-03-19)

### Document Editor

#### Breaking Changes

- Default value of `enableLocalPaste` is set to false. So, by default, the content will be pasted from the system clipboard.
- Some locale properties are renamed as below

|Previous|Now|
|----|----|
|Linked(Paragraph and Character)|Linked Style|
|Don't add space between the paragraphs of the same styles|Contextual Spacing|
|The password don't match|Password Mismatch|
|Exceptions (optional)|Exceptions Optional|
|Select parts of the document and choose users who are allowed to freely edit them.|Select Part Of Document And User|
|Yes, Start Enforcing Protection|Enforcing Protection|
|This document is protected from unintentional editing. You may edit in this region.|Protected Document|
|You may format text only with certain styles.|You may format text only with certain styles|
|Type your comment hear|Type your comment here|
|Added comments not posted. If you continue, that comment will be discarded.|Discard Comment|
|Header & Footer|Header And Footer|
|Different header and footer for odd and even pages.|Different header and footer for odd and even pages|
|Different Odd & Even Pages|Different Odd And Even Pages|
|Different header and footer for first page.|Different header and footer for first page|
|Distance from top of the page to top of the header|Distance from top of the page to top of the header|
|Distance from bottom of the page to bottom of the footer.|Distance from bottom of the page to bottom of the footer|
|Insert / Delete|Insert Or Delete|
|Number of heading or outline levels to be shown in table of contents.|Number of heading or outline levels to be shown in table of contents|
|Show page numbers in table of contents.|Show page numbers in table of contents|
|Right align page numbers in table of contents.|Right align page numbers in table of contents|
|Use hyperlinks instead of page numbers.|Use hyperlinks instead of page numbers|
|Bold (Ctrl+B)|Bold Tooltip|
|Italic (Ctrl+I)|Italic Tooltip|
|Underline (Ctrl+U)|Underline Tooltip|
|Superscript (Ctrl+Shift++)|Superscript Tooltip|
|Subscript (Ctrl+=)|Subscript Tooltip|
|Align left (Ctrl+L)|Align left Tooltip|
|Center (Ctrl+E)|Center Tooltip|
|Align right (Ctrl+R)|Align right Tooltip|
|Justify (Ctrl+J)|Justify Tooltip|
|Create a new document.|Create a new document|
|Open a document.|Open a document|
|Undo the last operation (Ctrl+Z).|Undo Tooltip|
|Redo the last operation (Ctrl+Y).|Redo Tooltip|
|Insert inline picture from a file.|Insert inline picture from a file|
|Create a link in your document for quick access to web pages and files (Ctrl+K).|Create Hyperlink|
|Insert a bookmark in a specific place in this document.|Insert a bookmark in a specific place in this document|
|Provide an overview of your document by adding a table of contents.|Provide an overview of your document by adding a table of contents|
|Add or edit the header.|Add or edit the header|
|Add or edit the footer.|Add or edit the footer|
|Open the page setup dialog.|Open the page setup dialog|
|Add page numbers.|Add page numbers|
|Find text in the document (Ctrl+F).|Find Text|
|The current page number in the document. Click or tap to navigate specific page.|Current Page Number|

#### New Features

- `249782`, `254484`, `149278`,`258415`,`260463` - Added support for toolbar customization.
- `253670` - Enhancements for copy and paste operation.
- `#262665`, `#151012` - Added API to customize search highlight colour.
- `#249197` - Added API to enable/disable spell check action.
- `#237725`, `#253671` - Added support for web layout.
- `#260639` - Added `enableComment` property to enable and disable comment.
- `#259970` - Handled paste list behaviour using start at value of list.
- `#256487` - Enhancements for mouse and keyboard selection.

#### Bug Fixes

- `#263861` - Table cells are now resized properly.
- `#260600` , `#266651` - RTL characters are now remove properly on backspace and delete.
- `#260600` - When direction is RTL, elements now rearranged properly after change character formatting.
- `#250770` , `#263443` - RTL text layout properly with special characters.
- `#264351` - Justify paragraph is layout properly when paragraph contains field.
- `#264631` - Stop protection is now working if password is empty.
- `#263171` - Cell options dialog content is now aligned properly.
- `#150960` - Hidden separator in context menu when hyperlink is disabled.
- `#150995` - Resolved error when importing the document with editable region restrictions.
- `#260600`, `#150466` , `#266311` - Properties pane is now enabled properly based on the context type in header footer region.
- `#260133` - Resolved navigation issue on Ctrl + click in MAC machine.
- `150960` - Enable/disable comment now working properly.
- `#263608` , `#150960` - Resolved script error when disable toolbar.
- `#261241` - Resolved script error when remove hyperlink in splitted widget.
- `#259011` - Paragraph before spacing layout issue is now resolved.
- `#260206` - Resolved numbering list issue when list contains start at value.
- `#260206` - Restart numbering is now working properly for different number format.
- `#260637` - Resolved script error when removing comment in header.
- `#249197` - Resolved exception when export Sfdt to other type in server side.
- `#252868` - Resolved script error when resize row to next page.
- `#259972` - Formatting is now applied properly for keep text only option in paste.
- `#258191` - Table cell width are now updated properly.
- `#260133`, `#261809` - Page scrolling issue is resolved when right click in MAC machine.
- `#258087`, `#255070` - Grid columns are now preserved properly on export.
- `#255070` - Page headers is now export properly when section break in table.
- `#259583` - List level number for style paragraph is now export properly.
- `#259153` - Table cell width and height is now copy properly.
- `#258121` - Resolved warnings in bootstrap4 styles when run the application in Firefox.
- `#249197` - Highlight colours are now exported properly.
- `#260048`, `#256276` - Image files are now pasted properly.
- `#256903` - Resolved bookmarks API issue when bookmark is in table.
- `#256758` - Resolved selection issue after correcting the spelling mistake.
- `#258938` - Resolved typo error in place holder of comments text area.
- `#257481` - Font family in font dialog is now update properly based on current selection.
- `#257171` - Bookmarks is now update properly after paste with formatting.
- `#257161` - List number is now update properly when hidden field contains list paragraph.
- `#246365` - Borders are now render properly when copy and paste from excel.
- `#257455` - Font colour is now update properly in modify style dialog.
- `#250770` - Line is now arranged properly when insert field.
- `#255913`, `#257879` - Bookmark is now insert properly in splitted paragraph.
- `#255736` , `#256106` , `#257011` - Context menu is now open in Firefox, Edge and Safari.
- `#254998` - Character format is now apply properly for selected bookmark.
- `#254997`, `#256764`, `#257106` , `#256764` - Paragraph format is now export properly if document contains selection.
- `#255272` - Resolved script error when navigate to bookmark in header.
- `#255188` - Bookmark is now preserved properly in header and footer.
- `#255601` - Bookmark is now select properly after insert text.
- `#256385` - Copy is now working properly in Firefox.
- `#256321` - Auto fit table is now lay-out properly if maximum word width exceeds container width.
- `#256509` - Resolved script error throws on backspace when selection is in bookmark end.
- `#256053` - TOC outline level is now serialized properly on Word export.
- `#256449` - Bullet list is now render properly in IOS chrome and safari.
- `#256099` - List is now apply properly in multilevel list.
- `#256384` - Tab width is now update properly when paragraph contains hanging indent.

## 17.4.55 (2020-03-10)

### Document Editor

#### New Features

- `249782`, `254484`, `149278`,`258415`,`260463` - Added support for toolbar customization.

#### Bug Fixes

- `#263861` - Table cells are now resized properly.
- `#260600` , `#266651` - RTL characters are now remove properly on backspace and delete.
- `#260600` - When direction is RTL, elements now rearranged properly after change character formatting.
- `#250770` , `#263443` - RTL text layout properly with special characters.
- `#264351` - Justify paragraph is layout properly when paragraph contains field.
- `#264631` - Stop protection is now working if password is empty.

## 17.4.51 (2020-02-25)

### Document Editor

#### Bug Fixes

- `#263171` - Cell options dialog content is now aligned properly.
- `#150960` - Hidden separator in context menu when hyperlink is disabled.
- `#150995` - Resolved error when importing the document with editable region restrictions.
- `#260600`, `#150466` , `#266311` - Properties pane is now enabled properly based on the context type in header footer region.
- `#260133` - Resolved navigation issue on Ctrl + click in MAC machine.

## 17.4.50 (2020-02-18)

### Document Editor

#### New Features

- `253670` - Enhancements for copy and paste operation.

#### Bug Fixes

- `150960` - Enable/disable comment now working properly.

## 17.4.49 (2020-02-11)

### Document Editor

#### New Features

- `#262665`, `#151012` - Added API to customize search highlight colour.
- `#249197` - Added API to enable/disable spell check action.
- `#237725`, `#253671` - Added support for web layout.

#### Bug Fixes

- `#263608` , `#150960` - Resolved script error when disable toolbar.
- `#261241` - Resolved script error when remove hyperlink in splitted widget.
- `#259011` - Paragraph before spacing layout issue is now resolved.

## 17.4.47 (2020-02-05)

### Document Editor

#### New Features

- `#260639` - Added `enableComment` property to enable and disable comment.
- `#259970` - Handled paste list behaviour using start at value of list.

#### Bug Fixes

- `#260206` - Resolved numbering list issue when list contains start at value.
- `#260206` - Restart numbering is now working properly for different number format.
- `#260637` - Resolved script error when removing comment in header.
- `#249197` - Resolved exception when export Sfdt to other type in server side.

## 17.4.46 (2020-01-30)

### Document Editor

#### Breaking Changes

- Default value of `enableLocalPaste` is set to false. So, by default, the content will be pasted from the system clipboard.

#### Bug Fixes

- `#252868` - Resolved script error when resize row to next page.
- `#259972` - Formatting is now applied properly for keep text only option in paste.
- `#258191` - Table cell width are now updated properly.
- `#260133`, `#261809` - Page scrolling issue is resolved when right click in MAC machine.

## 17.4.43 (2020-01-14)

### Document Editor

#### Bug Fixes

- `#258087`, `#255070` - Grid columns are now preserved properly on export.
- `#255070` - Page headers is now export properly when section break in table.
- `#259583` - List level number for style paragraph is now export properly.
- `#259153` - Table cell width and height is now copy properly.
- `#258121` - Resolved warnings in bootstrap4 styles when run the application in Firefox.
- `#249197` - Highlight colours are now exported properly.
- `#260048`, `#256276` - Image files are now pasted properly.

## 17.4.41 (2020-01-07)

### Document Editor

#### New Features

- `#256487` - Enhancements for mouse and keyboard selection.

#### Bug Fixes

- `#256903` - Resolved bookmarks API issue when bookmark is in table.
- `#256758` - Resolved selection issue after correcting the spelling mistake.
- `#258938` - Resolved typo error in place holder of comments text area.
- `#257481` - Font family in font dialog is now update properly based on current selection.
- `#257171` - Bookmarks is now update properly after paste with formatting.
- `#257161` - List number is now update properly when hidden field contains list paragraph.
- `#246365` - Borders are now render properly when copy and paste from excel.
- `#257455` - Font colour is now update properly in modify style dialog.
- `#250770` - Line is now arranged properly when insert field.

## 17.4.40 (2019-12-24)

### Document Editor

#### Breaking Changes

- Some locale properties are renamed as below

|Previous|Now|
|----|----|
|Linked(Paragraph and Character)|Linked Style|
|Don't add space between the paragraphs of the same styles|Contextual Spacing|
|The password don't match|Password Mismatch|
|Exceptions (optional)|Exceptions Optional|
|Select parts of the document and choose users who are allowed to freely edit them.|Select Part Of Document And User|
|Yes, Start Enforcing Protection|Enforcing Protection|
|This document is protected from unintentional editing. You may edit in this region.|Protected Document|
|You may format text only with certain styles.|You may format text only with certain styles|
|Type your comment hear|Type your comment here|
|Added comments not posted. If you continue, that comment will be discarded.|Discard Comment|
|Header & Footer|Header And Footer|
|Different header and footer for odd and even pages.|Different header and footer for odd and even pages|
|Different Odd & Even Pages|Different Odd And Even Pages|
|Different header and footer for first page.|Different header and footer for first page|
|Distance from top of the page to top of the header|Distance from top of the page to top of the header|
|Distance from bottom of the page to bottom of the footer.|Distance from bottom of the page to bottom of the footer|
|Insert / Delete|Insert Or Delete|
|Number of heading or outline levels to be shown in table of contents.|Number of heading or outline levels to be shown in table of contents|
|Show page numbers in table of contents.|Show page numbers in table of contents|
|Right align page numbers in table of contents.|Right align page numbers in table of contents|
|Use hyperlinks instead of page numbers.|Use hyperlinks instead of page numbers|
|Bold (Ctrl+B)|Bold Tooltip|
|Italic (Ctrl+I)|Italic Tooltip|
|Underline (Ctrl+U)|Underline Tooltip|
|Superscript (Ctrl+Shift++)|Superscript Tooltip|
|Subscript (Ctrl+=)|Subscript Tooltip|
|Align left (Ctrl+L)|Align left Tooltip|
|Center (Ctrl+E)|Center Tooltip|
|Align right (Ctrl+R)|Align right Tooltip|
|Justify (Ctrl+J)|Justify Tooltip|
|Create a new document.|Create a new document|
|Open a document.|Open a document|
|Undo the last operation (Ctrl+Z).|Undo Tooltip|
|Redo the last operation (Ctrl+Y).|Redo Tooltip|
|Insert inline picture from a file.|Insert inline picture from a file|
|Create a link in your document for quick access to web pages and files (Ctrl+K).|Create Hyperlink|
|Insert a bookmark in a specific place in this document.|Insert a bookmark in a specific place in this document|
|Provide an overview of your document by adding a table of contents.|Provide an overview of your document by adding a table of contents|
|Add or edit the header.|Add or edit the header|
|Add or edit the footer.|Add or edit the footer|
|Open the page setup dialog.|Open the page setup dialog|
|Add page numbers.|Add page numbers|
|Find text in the document (Ctrl+F).|Find Text|
|The current page number in the document. Click or tap to navigate specific page.|Current Page Number|

#### Bug Fixes

- `#255913`, `#257879` - Bookmark is now insert properly in splitted paragraph.
- `#255736` , `#256106` , `#257011` - Context menu is now open in Firefox, Edge and Safari.
- `#254998` - Character format is now apply properly for selected bookmark.
- `#254997`, `#256764`, `#257106` , `#256764` - Paragraph format is now export properly if document contains selection.
- `#255272` - Resolved script error when navigate to bookmark in header.
- `#255188` - Bookmark is now preserved properly in header and footer.
- `#255601` - Bookmark is now select properly after insert text.
- `#256385` - Copy is now working properly in Firefox.
- `#256321` - Auto fit table is now lay-out properly if maximum word width exceeds container width.
- `#256509` - Resolved script error throws on backspace when selection is in bookmark end.
- `#256053` - TOC outline level is now serialized properly on Word export.
- `#256449` - Bullet list is now render properly in IOS chrome and safari.
- `#256099` - List is now apply properly in multilevel list.
- `#256384` - Tab width is now update properly when paragraph contains hanging indent.

## 17.4.39 (2019-12-17)

### Document Editor

#### New Features

- `#249197`, `#249364`, `#148274`, `#253325` Added support for converting SFDT to Word document in server side.
- `#125563`, `#158324`, `#210401`, `#231575`, `#239871`, `#238529`, `#240405`, `#252988`, `#255850` - Added support for insert and edit comments.
- `#245203` - Added support for section pages field.
- `#255626`,`#254750` - RTL and locale is now updated properly on property change.
- `#251866` - Enhancement for Auto list feature.

## 17.3.29 (2019-11-26)

### Document Editor

#### Bug Fixes

- `#252868`, `#254873` - Resolved script error when resizing table row.
- `#251882` - Line spacing for paragraph is now apply properly when line spacing type is atleast.
- `#143383` - Paper size drop down is now update properly based on page width and page height.
- `#255741` - Fixed the focus issue when key pressed on input element.
- `#250770` - RTL text with special characters are now layout properly.
- `10269` - Line spacing is now exported properly.

## 17.3.28 (2019-11-19)

### Document Editor

#### New Features

- `#246305` - Added API to check whether selection is in field.
- `#246305` - Added API to select the current field if selection is in field.
- `#246305` - Added API to perform delete.

#### Bug Fixes

- `#253511` - Line spacing is now applying properly after set locale to document editor.
- `#254998` , `#251884` - Updated bookmark collection when bookmark gets added.
- `#246264` - Table with vertical merged split cells is now layout properly.
- `#246884` - List is now copied properly.

## 17.3.27 (2019-11-12)

### Document Editor

#### New Features

- `#253104` - Added API to set custom header in XmlHttpRequest.

#### Bug Fixes

- `#251603` - When apply numbering list, continue numbering is now updated properly.
- `#251689` - Resolved script error after cut and undo operation.
- `#250599` - Script error now resolved when deleting page break.
- `#250914` - Updated bookmark collection when bookmark gets removed.
- `#251606` - Scrolling is now proper when mouse move out of document editor.

## 17.3.26 (2019-11-05)

### Document Editor

#### New Features

- `#250061`, `#246305` - Added property to retrieve bookmarks on selection.
- `#251247` - Added API for restrict editing.
- `#251247`, `#238969`, `#252954`,`#253149` - Added API for selection.

#### Bug Fixes

- `251355` - Script error while importing the document is now resolved.
- `251910` - Status bar disappear on mouse hover is now resolved.
- `251219` - Script errors due to Content security policy are now resolved.

## 17.3.21 (2019-10-30)

### Document Editor

#### Bug Fixes

- `#251576` - Enable repeat row header is now enabled properly in table properties dialog.
- `#250638` - Scroll position is now maintained after inserting columns.
- `#253260` - Script error now resolved when double click on header footer.
- `#252506` - Spell checker performance has been improved.

## 17.3.19 (2019-10-22)

### Document Editor

#### New Features

- `#249783` - Added API to set default section format properties.

#### Bug Fixes

- `#249729` - List now updated when copy and paste from outside editor.
- `#249574` - Table now layout properly when resizing table middle column.
- `#249767` - Control elements are now destroyed properly.
- `#250041` - Paragraph formatting is now preserved properly when copy and paste contents.

## 17.3.17 (2019-10-15)

### Document Editor

#### Bug Fixes

- `#246264` - Page now becomes responsive, when document contains table with split cell widget.
- `#249138` - Table of contents dialog now rendered properly.
- `#245757` - Page now becomes responsive when we edit in header footer region.
- `#249049` - List continue numbering issues are resolved now.
- `#248304`, `#250801` - TOC is now updated properly, when paragraph contains page break with heading style.
- `#249736` - Focus is now set to text search result, when search icon is clicked in options pane.
- `#249542` - Draw image error is resolved now, when document contains invalid image source.
- `#249329` - Added localization for missed text in document editor.
- `#248710` - Character format is now applied, when selection start is in field.

## 17.3.16 (2019-10-09)

### Document Editor

#### Bug Fixes

- `#246365`, `#250077` - Table Width for auto type table format is now updated properly.
- `#249283` - Command + A key triggers properly in MAC machine's Safari browser.
- `#248301` - Text clipping issues are fixed when text inside table cell.
- `#246587` - backward selection issues and backspace issues for restrict editing are resolved now.
- `#244786` , `#248882` - Text now rendered properly in RTL paragraph, when copy and paste locally.
- `#248304` - Tab leader is now preserved properly, when updating table of contents.

## 17.3.14 (2019-10-03)

### Document Editor

#### New Features

- `#245203` - Added support to preserve and layout start page number for sections

#### Bug Fixes

- `#243771` - Clipboard data is now pasted as plain text, If XHTML validation fails.
- `#246264`, `#246143`, `#247143` - Styles now updated properly for the selected paragraph.
- `#246003` - Default character and paragraph format is now set on initial control rendering.
- `#245766` - Table of contents is now copied properly.
- `#245891` - Merge field is now copied as a plain text.
- `#245860`, `#246440` - Script error is fixed after paste switch to different formatting.
- `#245461` - Left border width is now updated properly.
- `#246168` - List tab width is now calculated properly when hanging indent is specified.
- `#245890` - Script error is fixed when pasting content copied from word.
- `#247896`, `#147336` - Text is now visible when its container contains flex style property.
- `#246884` - Copy and paste single paragraph containing list is now resolved.
- `#247831` - Script error is fixed while importing document.
- `#246168` - List font style is now rendered properly.
- `#246751` - Script error is now resolved when editing inside nested table.
- `#245453` - Paragraph is now lay-outed properly when it has based on style.
- `#244786`, `#248882` - RTL text exporting issues are fixed.
- `#244786` - Cursor now updated properly after inserting merge field when paragraph is set as RTL.

## 17.3.9-beta (2019-09-20)

### Document Editor

#### Bug Fixes

- `#245457`, `#245459` - Table is now layout properly.
- `#246127`, `#246597`, `#247364` - Page number field is now exported properly in Sfdt export.

## 17.2.49 (2019-09-04)

### Document Editor

#### Bug Fixes

- `#245473` - Line spacing is now exported properly.
- `#245469`, `#245470` - List level paragraph heading is now layout properly on page break.
- `#243495` - width is now calculated properly for the tab element, if it has single tab stop.
- `#244893` - Paste event is now triggered in safari browser.
- `#246003` - Insert field is now updated based on current selection format.
- `#243919` - Script error is fixed while pressing Ctrl + A.

## 17.2.47 (2019-08-27)

### Document Editor

#### Bug Fixes

- `#243874` - Contextual Spacing property on paragraph is now exported properly.
- `#243878` - Copy and paste when the document contains page break character within control is now working.
- `#243495` - Follow character width for list is now updated properly.

## 17.2.41 (2019-08-14)

### Document Editor

#### Bug Fixes

- `#243495` - List level paragraph heading 2 first line indent style is now applied properly.
- `#243495` - Section break paragraph style layout is now applied properly.
- `#243495` - TOC tab header layout is now applied properly for sub headings.
- `#243495` - Script error is fixed when calculating tab width for list in TOC.
- `#243495` - TOC hyperlink text style is now preserved properly.
- `#243878` - Table cell is now exported properly when table contains spanned rows.

## 17.2.40 (2019-08-06)

### Document Editor

#### Bug Fixes

- `#241445` - List level for RTL paragraph is now applied properly when tab is applied.
- `#241445` - Undo and redo is now working properly, after list level modified for RTL paragraph.
- `#241445` - Paragraph is now layout properly, when entering combination of RTL and English text.
- `#243622` - List is now exported properly in sfdt format.

## 17.2.39 (2019-07-30)

### Document Editor

#### New Features

- `#238969` - Added API to set paste formatting options

#### Bug Fixes

- `#146208` - Header footer contents are now rendered properly on print without any blur.
- `#240266` - Fixed Exception thrown while updating page number.

## 17.2.36 (2019-07-24)

### Document Editor

#### Bug Fixes

- `#239985` - List paragraph with style is now layout properly.
- `#236808` - Table is now layout properly if table width type is auto.
- `#228049` - Paragraph with right tab stop is now layout properly.

## 17.2.35 (2019-07-17)

### Document Editor

#### Bug Fixes

- `#144676` - Table is now layout properly if table contains grid after value.
- `#235990` - Table is now layout properly if table width type is not auto.
- `#228049` - Table with row margin is now layout properly.
- `#228049` - Text is now rendered properly without clipping.
- `#237734` - Table borders are now exported properly.

## 17.2.34 (2019-07-11)

### Document Editor

#### Breaking Changes

- The `pasteLocal` method in `Editor` module is changed to `paste`, which accepts the sfdt string as argument. If sfdt string does not present, paste the local clipboard data.

#### Bug Fixes

- `#240558` - Page numbers are now updated properly.
- `#228049` - Table left border and shadings are now rendered properly.
- `#228049` - Paragraph left indent will never add extra space in table cell.
- `#239144` - Font Type and size value gets highlight when focused on corresponding dropdown list.

## 17.2.28-beta (2019-06-27)

### Document Editor

#### Breaking Changes

- The `serviceUrl` property in `DocumentEditorContainer` component no longer expect the full path of the Web API action. Henceforth, it only expects the path up to controller name alone. And the Web API action name can be configured in `serverActionSettings` property for different actions.

#### New Features

- `#229069` - Added contextual spacing support.
- `#158324`, `#226019`, `#226018`, `#227644`, `#238417` - Added support for chart preservation.
- `#94889` ,`#87537`, `#223333` ,`#222513`, `#224521` ,`#227620` ,`#227052` ,`#227362`, `#236997` - Added spell check support.
- `#226631` ,`#227594`, `#231373`, `#233073` - Added clipboard paste with formatted content.
- `#140903` ,`#227192`, `#227641` ,`#227640` - Added restrict editing support.
- `#237725` - Added API to customize gap between each page.

#### Bug Fixes

- `#237415`, `#238902` - Document exported properly when document contains hyphen character.
- `#228049` - Tab character width is now calculated properly.
- `#228049` - Table with repeat header is now layout properly.
- `#234073` - Table is now pasted properly.
- `#236808` - Document exported properly when document contains text form field.
- `#144848` - Table shading is now exported properly.

## 17.1.50 (2019-06-04)

### Document Editor

#### Bug Fixes

- `#236930` - Table exported properly when document contains continuous table.
- `#236502` - Table last column resizing is now working properly.

## 17.1.49 (2019-05-29)

### Document Editor

#### Bug Fixes

- `#226399` - Header and Footer is now layout properly if document contains section break

## 17.1.48 (2019-05-21)

### Document Editor

#### Bug Fixes

- `#234799` - Bold button is now aligned properly in modify style dialog.
- `#236061`, `#236039` - Document editor container component is now destroyed properly.
- `#234146` - Section formats are now applied properly.
- `#233556`, `#234406` - Table of Contents are now inserted properly.
- `#234249` - Multilevel lists are now exported properly.
- `#234084` - Selection is now updated properly after clear formatting.
- `#234073` - Copy is now working properly for nested table.
- `#234799` - Renaming the existing style in modify style dialog is now updated properly.
- `#234799` - Text alignment is now updating properly while modify style using style dialog.

## 17.1.47 (2019-05-14)

### Document Editor

#### New Features

- `#142821` - Added API to insert bookmark and fetch all bookmarks in document.
- `#142820` - Added API to insert hyperlink.

#### Bug Fixes

- `#230628` - Updated dialog animation.

## 17.1.44 (2019-05-07)

### Document Editor

#### Bug Fixes

- `#233280` - Improvised performance while updating page field.

## 17.1.43 (2019-04-30)

### Document Editor

#### Bug Fixes

- `#233908` - Height for merged cell is now updated properly.

## 17.1.42 (2019-04-23)

### Document Editor

#### Bug Fixes

- `#231353` - Text search results are now navigated properly.

## 17.1.41 (2019-04-16)

### Document Editor

#### Bug Fixes

- `#232616` - Document contents are now exported properly.
- `#232616` - Page hang on editing the document is fixed.
- `#232327` - Tables are now removed properly.

## 17.1.40 (2019-04-09)

### Document Editor

#### Bug Fixes

- Tab stop width is now calculated properly.
- First page header and footer is now layout properly.
- Scrollbar now updated properly in Internet Explorer.
- Page reload issue on button click is fixed.

## 17.1.38 (2019-03-29)

### Document Editor

#### New Features

- Added API to customize the default character format and paragraph format of document editor.
- Added support to customize context menu.
- Optimized text rendering.

#### Bug Fixes

- Section break is now serialized properly.

## 17.1.32-beta (2019-03-13)

### Document Editor

#### New Features

- Added API to customize the default character format and paragraph format of document editor.
- Added support to customize context menu.
- Optimized text rendering.

#### Bug Fixes

- Section break is now serialized properly.

## 16.4.54 (2019-02-19)

### Document Editor

#### Bug Fixes

- Default tab width is parsed and serialized properly.

## 16.4.53 (2019-02-13)

### Document Editor

#### Bug Fixes

- Table inside header is now layout properly.
- Table re-layout while editing now layout properly.
- Page break inside table is handled.

## 16.4.48 (2019-01-22)

### Document Editor

#### Bug Fixes

- Broken image rendering is handled.

## 16.4.46 (2019-01-08)

### Document Editor

#### New Features

- Table editing performance optimized.

## 16.4.45 (2019-01-02)

### Document Editor

#### Bug Fixes

- Table border is rendered properly.

## 16.4.44 (2018-12-24)

### Document Editor

#### Bug Fixes

- Tab stop now layout properly in header and footer.
- Empty header and footer now layout properly.
- Table column span values are now updated properly.

## 16.4.40-beta (2018-12-10)

### Document Editor

#### New Features

- Added support for Right-to-left flow direction in control.
- Added support for table auto fit layout.
- Added Document Editor Container component for toolbar and properties pane.

## 16.3.33 (2018-11-20)

### Document Editor

#### Bug Fixes

- Updated Readme and GitHub URL.

## 16.3.29 (2018-10-31)

### Document Editor

#### New Features

- Added support for input method editor.

#### Bug Fixes

- Images are now displayed properly.

## 16.3.24 (2018-10-09)

### Document Editor

#### Bug Fixes

- Resizing table columns are working properly for merged cells.

## 16.3.23 (2018-10-03)

### Document Editor

#### New Features

- Added `created` and `destroyed` events in `DocumentEditor`.

## 16.3.21 (2018-09-22)

### Document Editor

#### Bug Fixes

- Cursor position is now updated properly when placed after image, bookmark.

## 16.3.17 (2018-09-12)

### Document Editor

#### New Features

- Added support for Page break.
- Added `insertSectionBreak` method in `Editor` class to insert a section break at current selection.

## 16.2.48 (2018-08-14)

### Document Editor

#### Bug Fixes

- Selection position is now updated properly on “Enter” key inside vertical merged cell.
- The content of a page no longer overlaps on next page while editing document contents.
- Undo & redo now works properly for list text editing.
- Line height is now updated properly for the paragraph contains bookmark element alone.

## 16.2.46 (2018-07-30)

### Document Editor

#### New Features

- Added support for .NET Framework 4.0 and 4.5 in `Syncfusion.EJ2.DocumentEditor` NuGet package.

## 16.2.41 (2018-06-25)

### Document Editor

The Document Editor component is used to create, edit, view, and print Word documents in web applications. All the user interactions and editing operations that run purely in the client-side provides much faster editing experience to the users.

- Opens the native `Syncfusion Document Text (*.sfdt)` format documents in the client-side.
- Saves the documents in the client-side as `Syncfusion Document Text (*.sfdt)` and `Word document (*.docx)`.
- Supports document elements like text, inline image, table, fields, bookmark, section, header, and footer.
- Supports the commonly used fields like hyperlink, page number, page count, and table of contents.
- Supports formats like text, paragraph, bullets and numbering, table, page settings, etc.
- Provides support to create, edit, and apply paragraph and character styles.
- Provides support to find and replace text within the document.
- Supports all the common editing and formatting operations along with undo and redo.
- Provides support to cut, copy, and paste rich text contents within the component. Also allows pasting simple text to and from other applications.
- Allows user interactions like zoom, scroll, select contents through touch, mouse, and keyboard.
- Provides intuitive UI options like context menu, dialogs, and navigation pane.
- Creates a lightweight Word viewer using module injection to view and prints Word documents.
- Added `Syncfusion.EJ2.DocumentEditor` NuGet package that contains helper library for converting Word documents to `Syncfusion Document Text (*.sfdt)`. It supports .NET Standard 2.0 Framework.## 30.2.4 (2025-08-07)

### DocumentEditor

#### Bug Fixes

- `#I739494` - Resolved the document content is missing issue.
- `#I738922` - Resolved the data loss issue in web layout.
- `#I745777` - Resolved the document content is missing issue.

## 30.1.41 (2025-07-22)

### DocumentEditor

#### Bug Fixes

- `#I734726` - Fixed table layout issues when documents contain multiple floating tables.
- `#I702538` - Enhanced performance when editing large documents with editable regions.
- `#I737779` - Fixed an issue where Undo did not work correctly with bookmark elements.
- `#I742694` - Corrected layout problems in Hebrew right to left documents containing form fields.
- `#I740631` - Resolved a script error that occurred when pasting a table row containing bookmarks inside a cell.
- `#I743329` - Fixed browser freezing when performing the `Accept` action in Track Changes mode.
- `#I741247` - Resolved an application crash issue when opening a `.txt` file.
- `#I744394` - Fixed a script error in documents opened in protection mode.
- `#I744057` - Modified the Dialog content when closing the comments panel

