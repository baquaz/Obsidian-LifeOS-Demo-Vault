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

