let goals = dv.pages('"Review/Goals"')
    .filter(g => g.created)  // Ensure the page has a 'created' field
    .sort((a, b) => {
        const dateA = parseDate(a.created);
        const dateB = parseDate(b.created);
        return dateA - dateB;
    });  // Sort by the 'created' date

// Function to parse the 'created' field (from front matter) into a JavaScript date object
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
  [`[Main Goals](Review/goal-dashboard.md)`, "Deadline", "Progress"],
  goals.map(g => [
    dv.fileLink(g.file.name),

    `<center>${formatDate(g.Deadline)}</center>`,

    `<progress value="${g.progress}" max="${g.target}"></progress>
    ${Math.round((g.progress / g.target) * 100)}% completed`
  ])
);
