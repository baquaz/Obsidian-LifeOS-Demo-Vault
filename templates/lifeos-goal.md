---
banner: "attachments/goal2.jpg"
banner_y: 0.432
excalidraw-plugin: parsed
excalidraw-open-md: true
obsidianUIMode: preview
tags:
  - lifeos/goal
CompletedDate: "" 
Deadline: ""
List-important: []
List-risks: []
List-success: []
Progress: 0
StartedDate: ""
Target: 100
---

#  <% tp.file.title %>  

![[<% tp.file.title %>.svg]]

```meta-bind  
INPUT[  
text(  
    title(Banner url),  
    placeholder(image url [local or remote]),  
    class(meta-bind-full-width),   
    defaultValue(attachments/goal2.jpg)  
): banner]  
```  
 
> [!multi-column]  
> ```meta-bind  
> INPUT[date(title(Deadline)):Deadline]  
> ```  
> ```meta-bind  
> INPUT[date(title(Started)):StartedDate]  
> ```  
> ```meta-bind  
> INPUT[date(title(Completed)):CompletedDate]  
> ```  
  
```meta-bind    
INPUT[progressBar(title(Progress), minValue(0), maxValue(100)):Progress]    
```  
  
```meta-bind  
INPUT[  
list(  
    class(info),  
    title(Why is this goal Important to me?)  
):List-important]  
```  
  
```meta-bind  
INPUT[  
list(  
    class(success),   
    title(✓ What would I gain by achieving this goal?)  
):List-success]  
```  
  
```meta-bind  
INPUT[  
list(  
    class(error),  
    title(⚠ What are the possible risks & obstacles?)  
):List-risks]  
```


<!-- Drawing -->
# Excalidraw Data
## Text Elements
%%
## Drawing
```json
{
	"type": "excalidraw",
	"version": 2,
	"source": "https://github.com/zsviczian/obsidian-excalidraw-plugin/releases/tag/2.6.7",
	"elements": [],
	"appState": {
		"theme": "light",
		"viewBackgroundColor": "#ffffff",
		"currentItemStrokeColor": "#1e1e1e",
		"currentItemBackgroundColor": "transparent",
		"currentItemFillStyle": "solid",
		"currentItemStrokeWidth": 2,
		"currentItemStrokeStyle": "solid",
		"currentItemRoughness": 1,
		"currentItemOpacity": 100,
		"currentItemFontFamily": 5,
		"currentItemFontSize": 20,
		"currentItemTextAlign": "left",
		"currentItemStartArrowhead": null,
		"currentItemEndArrowhead": "arrow",
		"currentItemArrowType": "round",
		"scrollX": 687,
		"scrollY": 687.5,
		"zoom": {
			"value": 1
		},
		"currentItemRoundness": "round",
		"gridSize": 20,
		"gridStep": 5,
		"gridModeEnabled": false,
		"gridColor": {
			"Bold": "rgba(217, 217, 217, 0.5)",
			"Regular": "rgba(230, 230, 230, 0.5)"
		},
		"currentStrokeOptions": null,
		"frameRendering": {
			"enabled": true,
			"clip": true,
			"name": true,
			"outline": true
		},
		"objectsSnapModeEnabled": false,
		"activeTool": {
			"type": "selection",
			"customType": null,
			"locked": false,
			"lastActiveTool": null
		}
	},
	"files": {}
}
```
%%

