---
tags:
  - lifeos/daily
obsidianUIMode: preview
Workout: 
Coding: 
Reading: 
Productivity: 1
List-accomplished: []
List-newtasks: []
habits: []
TextArea-desc2day: ""
toggledHabits: <%tp.frontmatter.toggledHabits || [] %>
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
INPUT[list(title(New Tasks)):List-newtasks]
```


