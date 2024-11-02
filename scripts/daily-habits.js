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
  buttons += `- [ ] ${habit}\n`;
});

tR += buttons
%>

