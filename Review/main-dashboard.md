---
id: main-dashboard
aliases:
  - main dashboard
tags: []
banner: attachments/lifeos.png
banner_x: 0.5
banner_y: 0.604
created: 11.08.2024, 17:23:13
obsidianUIMode: preview
updated: 17-11-2024, 14:26:55
---

> [!multi-column]
> `BUTTON[daily-note]` | `BUTTON[weekly-note]` 
>
>> `BUTTON[light-mode, dark-mode]`

<br>

<!-- GOALS SECTION -->
 ```dataviewjs
let goals = dv.pages('"Review/Goals"')
    .filter(g => g.created)  // Ensure the page has a 'created' field
    .sort((a, b) => {
        const dateA = parseDate(a.created);
        const dateB = parseDate(b.created);
        return dateA - dateB;
    });  // Sort by the 'created' date

// Function to parse the 'created' field (from frontmatter) into a JavaScript date object
function parseDate(dateString) {
  if (!dateString) return new Date(0);  // Return a very old date if the string is missing

  const [datePart, timePart] = dateString.split(', ');
  if (!datePart) return new Date(0);  // If the date part is missing, return a very old date

  const [day, month, year] = datePart.split('-').map(Number);
  const [hours, minutes, seconds] = timePart ? timePart.split(':').map(Number) : [0, 0, 0];

  return new Date(year, month - 1, day, hours, minutes, seconds);
}

// Function to format the date for display in the table
function formatDate(date) {
  const d = new Date(date);
  
  // Check if the Date object is valid
  if (isNaN(d.getTime())) {
    return "-";
  }

  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const year = d.getFullYear();

  return `${day}-${month}-${year}`;
}

// Render the table with sorted goals
dv.table(
  [`[Main Goals](Review/goals-dashboard.md)`, "Deadline", "Progress"],
  goals.map(g => [
    dv.fileLink(g.file.name),

    `<center>${formatDate(g.Deadline)}</center>`,

    `<progress value="${g.progress}" max="${g.target}"></progress>
    ${Math.round((g.progress / g.target) * 100)}% completed`
  ])
);
```

<!-- TODOS BUTTON -->
`BUTTON[todos]`

<!-- TODOS SECTION -->
```dataviewjs
const todoFile = "todo.md";
const todoTag = "# TODO";

// Function to get emoji for status
function getStatusEmoji(status) {
  if (status.includes('!')) return '🚨';
  if (status.includes('/')) return '⏳';
  if (status.includes('x')) return '✅'
  return '💤';
}

// Function to get priority of status
function getStatusPriority(status) {
  if (status.includes('!')) return 1;
  if (status.includes('/')) return 2;
  return 3;
}

// Load and process the todo file
let todoContent = await dv.io.load(todoFile);
let lines = todoContent.split('\n');
let tasks = [];
let inTodoSection = false;
let currentParent = null;
let lastIndentLevel = 0;

for (let line of lines) {
  if (line.trim() === todoTag) {
    inTodoSection = true;
    continue;
  }
  if (inTodoSection) {
    if (line.trim() === '' || line.startsWith('#')) break;
    let match = line.match(/^(\s*)- \[([ x!\/])\] (.+)/);
    if (match) {
      let indentLevel = match[1].length;
      let task = {
        indent: indentLevel,
        status: match[2],
        text: match[3],
        children: []
      };

      if (indentLevel === 0) {
        tasks.push(task);
        currentParent = task;
        lastIndentLevel = 0;
      } else if (indentLevel > lastIndentLevel) {
        currentParent.children.push(task);
      } else {
        // Find the appropriate parent
        let parent = tasks[tasks.length - 1];
        while (parent.indent >= indentLevel) {
          parent = tasks[tasks.indexOf(parent) - 1];
        }
        parent.children.push(task);
        currentParent = parent;
      }
      lastIndentLevel = indentLevel;
    }
  }
}

// Sort parent tasks
tasks.sort((a, b) => getStatusPriority(a.status) - getStatusPriority(b.status));

// Prepare data for rendering
let tableData = [];
tasks.forEach(parent => {
  tableData.push([
    `<div style="text-align: center; font-weight: bold;">
${getStatusEmoji(parent.status)}
</div>`,
    parent.text
  ]);
  parent.children.forEach(child => {
    tableData.push([
      "",  // Empty status column for children
      `&nbsp;&nbsp;&nbsp;&nbsp;${getStatusEmoji(child.status)} ${child.text}`
    ]);
  });
});

// Render tasks
dv.table(["Todo", "Task"], tableData);
```

<!-- HABITS BUTTONS -->

`BUTTON[habits]` `BUTTON[habits-log]` 

<!-- HABITS SECTION -->
```dataviewjs
// Load the habits list from the specified note
const habitsNote = dv.page('habits-list');
const habitsList = habitsNote && habitsNote.file && habitsNote.file.frontmatter
  && Array.isArray(habitsNote.file.frontmatter.habits) 
  ? habitsNote.file.frontmatter.habits 
  : [];

// Log an error if the habits list couldn't be retrieved
if (!habitsList.length) {
  console.error("Habits list could not be retrieved or is empty.");
}

// Processing daily notes for the current week
const startOfWeek = moment().startOf('isoWeek');
const endOfWeek = moment().endOf('isoWeek');

let dailyNotes = dv.pages('"Review/Daily"')
  .where(p => p.file && p.file.name)
  .filter(p => {
    const noteDate = moment(p.file.name, 'YYYY-MM-DD'); // Updated to parse as 'YYYY-MM-DD'
    return noteDate.isBetween(startOfWeek, endOfWeek, null, '[]');
  });

console.log("Filtered Daily Notes:", dailyNotes.map(p => p.file.name));

// Manually sort valid daily notes in descending order (latest first)
let sortedDailyNotes = [];
dailyNotes.forEach(note => {
  if (note && note.file && note.file.name) {
    sortedDailyNotes.push(note);
  }
});

sortedDailyNotes.sort((a, b) => {
  const dateA = moment(a.file.name, 'YYYY-MM-DD'); // Updated format for sorting
  const dateB = moment(b.file.name, 'YYYY-MM-DD');
  return dateB.diff(dateA);
});

console.log("Sorted Daily Notes:", sortedDailyNotes.map(p => p.file.name));

// Prepare an array to hold habit statuses for output
const fileRows = [];

// Iterate over each sorted daily note
sortedDailyNotes.forEach(note => {
  if (!note || !note.file) {
    console.warn('Skipping invalid note:', note);
    return; // Skip invalid entries gracefully
  }

  // Get all tasks from the daily note
  const tasks = note.file.tasks || [];

  // Convert the note filename to 'DD-MM-YYYY' for display
  const displayDate = moment(note.file.name, 'YYYY-MM-DD').format('DD-MM-YYYY');

  // Check the status of each habit
  const habitStatuses = habitsList.map(habit => {
    const taskExists = tasks.find(t => t.text.includes(habit));
    return taskExists && taskExists.completed ? '<center>✅</center>' : '<center>🟥</center>'; 
  });

  // Add the filename (as a link) with the corresponding statuses to rows
  fileRows.push([`[[${note.file.path}|${displayDate}]]`, ...habitStatuses]); // Link with 'DD-MM-YYYY' format
});

// Output the final table with habits
const tableHeaders = ['Habits', ...habitsList];
dv.table(tableHeaders, fileRows);
```

<!-- PRODUCTIVITY SECTION -->
```dataviewjs
dv.span("** Productivity **")
const calendarData = {
  year: 2024, // Adjust as needed
  entries: [],
}

//DataViewJS loop
for (let page of dv.pages('"Review/Daily"')
.where(p => p.Productivity)) {
  //dv.span("<br>" + page.file.name) // for troubleshooting
  calendarData.entries.push({
    date: page.file.name,
    intensity: page.Productivity,
    content: await dv.span(`[](${page.file.name})`), //for hover
  })
}

renderHeatmapCalendar(this.container, calendarData)
```


<!-- BUTTONS -->
```meta-bind-button
id: daily-note
label: Daily Note
style: primary
hidden: true
action:
  type: command
  command: daily-notes
```

```meta-bind-button
id: weekly-note
label: Weekly Note
style: primary
hidden: true
action:
  type: command
  command: periodic-notes:open-weekly-note 
```

```meta-bind-button
id: light-mode
label: Light Mode
class: light-mode-btn
style: primary
hidden: true
actions:
  - type: command
    command: theme:use-light
  - type: inlineJS
    code: |
      // Toggling the plugin by ID
      const pluginID = "obsidian-dynamic-background";
      const plugin = app.plugins.plugins[pluginID];
      app.plugins.disablePlugin(pluginID);
      //new Notice(`${pluginID} plugin disabled`);
```

```meta-bind-button
id: dark-mode
label: Dark Mode
class: dark-mode-btn
style: primary
hidden: true
actions:
  - type: command
    command: theme:use-dark
  - type: inlineJS
    code: |
      // Toggling the plugin by ID
      const pluginID = "obsidian-dynamic-background";
      app.plugins.enablePlugin(pluginID);
      //new Notice(`${pluginID} plugin enabled`);
```

```meta-bind-button
id: todos
style: primary
label: Open Todos
hidden: true
action:
  type: open 
  link: "[[todo]]"
```

```meta-bind-button
id: habits
style: primary
label: Habits 
hidden: true
action:
  type: open 
  link: "[[habits-list]]"
```

```meta-bind-button
id: habits-log
style: primary
label: Habits Log
hidden: true
action:
  type: open 
  link: "[[habit-tracker|habit Tracker]]"
```

