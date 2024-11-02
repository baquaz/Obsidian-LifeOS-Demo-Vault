---
excalidraw-open-md: true
excalidraw-plugin: parsed
habits: []
obsidianUIMode: preview
tags:
  - lifeos/daily
List-accomplished: []
List-next: []
Productivity: 1
TextArea-desc2day: ""
---

## <% moment(tp.file.title, "YYYY-MM-DD").format("DD MMM, YYYY, ddd") %> <% tp.date.now("HH:mm") %>

<< [[<%* 
let yesterday = moment(tp.file.title, "YYYY-MM-DD").subtract(1, "days").format("YYYY-MM-DD");
let yesterdayLink = `Review/Daily/${yesterday}`;
tR += `${yesterdayLink}|Yesterday`;
%>]] | [[<%*
let tomorrow = moment(tp.file.title, "YYYY-MM-DD").add(1, "days").format("YYYY-MM-DD");
let tomorrowLink = `Review/Daily/${tomorrow}`;
tR += `${tomorrowLink}|Tomorrow`;
%>]] >>


> [!info]+ Productivity
> ```meta-bind
> INPUT[progressBar( minValue(0), maxValue(10)):Productivity]
> ```

> [!success]+ Habits
<%*
// Check if Dataview API is available, should be run where appropriate (e.g., execution command mode)
let habitsFrontMatter = [];

// Manual approach without assuming dv exists
if (app.plugins.plugins.dataview) {
  let page = app.plugins.plugins.dataview.api.page('habits-list');
  if (page) {
    habitsFrontMatter = page.habits || [];
  }
}

// Generate checkbox representation
let buttons = "";
habitsFrontMatter.forEach(habit => {
  buttons += `> - [ ] ${habit}\n`;
});

tR += buttons
%>

```meta-bind
INPUT[list(title(Accomplished)):List-accomplished]
```


### What Happened Today?
```meta-bind
INPUT[textArea(placeholder(Description...)):TextArea-desc2day]
```


```meta-bind
INPUT[list(title(Next)):List-next]
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

