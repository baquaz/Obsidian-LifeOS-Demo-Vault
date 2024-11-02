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
