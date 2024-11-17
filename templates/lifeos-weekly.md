---
tags:
  - lifeos/weekly
Health: 0
Relationship: 0
Sprituality: 0
Wealth: 0
list: []
TextArea-whatnext: ""
obsidianUIMode: preview
---

## Week <% tp.file.title.split("-W")[1] %>, <% moment(tp.file.title, "YYYY-[W]ww").format("MMM YYYY") %>

<< [[<%* 
let previousWeek = moment(tp.file.title, "YYYY-[W]ww").subtract(1, "weeks");
let previousWeekLink = `Review/Weekly/${previousWeek.format("YYYY-[W]ww")}`;
tR += `${previousWeekLink}|Week-${previousWeek.format("ww")}`;
%>]] | [[<%*
let nextWeek = moment(tp.file.title, "YYYY-[W]ww").add(1, "weeks");
let nextWeekLink = `Review/Weekly/${nextWeek.format("YYYY-[W]ww")}`;
tR += `${nextWeekLink}|Week-${nextWeek.format("ww")}`;
%>]] >>

<%*
let weekNumber = tp.file.title.split("-W")[1]; // Get the week number from the file title
let year = tp.file.title.split("-W")[0]; // Get the year from the file title

// Calculate the correct start of the week (Monday) using ISO week method
let weekStart = moment(`${year}-W${weekNumber}-1`, "YYYY-[W]w-e"); // '1' for Monday

// Log for debugging purposes
console.log("Current Week Start: ", weekStart.format("YYYY-MM-DD"));

// Function to format date and link
let formatDate = (date) => date.format("YYYY-MM-DD");
let formatDay = (date) => date.format("DD");
let linkDay = (date) => `[[Review/Daily/${formatDate(date)}|${formatDay(date)}]]`;

// Generate daily links for the current week
let daysOfWeek = [];
for (let i = 0; i < 7; i++) {
    daysOfWeek.push(linkDay(weekStart.clone().add(i, 'days')));
}

// Create the output for the days of the week
tR += `M ${daysOfWeek[0]} · `;
tR += `T ${daysOfWeek[1]} · `;
tR += `W ${daysOfWeek[2]} · `;
tR += `T ${daysOfWeek[3]} · `;
tR += `F ${daysOfWeek[4]} · `;
tR += `Sa ${daysOfWeek[5]} · `;
tR += `Sun ${daysOfWeek[6]} `;
%>

## Life Balance 

```meta-bind
INPUT[progressBar(title(Health), minValue(0), maxValue(10)):Health]
```
```meta-bind
INPUT[progressBar(title(Wealth), minValue(0), maxValue(10)):Wealth]
```
```meta-bind
INPUT[progressBar(title('Relationship, social'), minValue(0), maxValue(10)):Relationship]
```
```meta-bind
INPUT[progressBar(title(Sprituality), minValue(0), maxValue(10)):Sprituality]
```

<br>

### What has been Accomplished?

```meta-bind
INPUT[list(title(Wins This Week)):list]
```

---
### What Next?
```meta-bind
INPUT[textArea(placeholder(Description...)):TextArea-whatnext]
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

