const pages = dv.pages('"Review/Goals"')
  .where(p => p.Deadline !== undefined)
  .sort((a, b) => {
    const dateA = parseDate(a.created);
    const dateB = parseDate(b.created);
    return dateA - dateB;
  }); // sort by the 'created' date

dv.table(["Goal", "Target", "Deadline", "Progress"], 
  pages.map(p => [
    `<div>
      <img src="${resolveImagePath(p.banner)}" alt="Banner" style="object-fit: cover; object-position: center; width: 100%; height: 100%;">
    </div>`,

    dv.fileLink(p.file.name),

    `Deadline: ${formatDate(p.Deadline)}`,

    getProgress(p.progress, p.target)
  ])
);

// Function to parse the 'created' field (from front matter) into a JavaScript date object
function parseDate(dateString) {
  if (!dateString) return new Date(0);  // Return a very old date if the string is missing

  const [datePart, timePart] = dateString.split(', ');
  if (!datePart) return new Date(0);  // If the date part is missing, return a very old date

  const [day, month, year] = datePart.split('-').map(Number);
  const [hours, minutes, seconds] = timePart ? timePart.split(':').map(Number) : [0, 0, 0];

  return new Date(year, month - 1, day, hours, minutes, seconds);
}

// Function to resolve the image path
function resolveImagePath(path) {
  if (path.startsWith('http://') || path.startsWith('https://')) {
    // Return the remote URL as is
    return path;
  } else {
    // Resolve local path using getResourcePath
    return app.vault.adapter.getResourcePath(path);
  }
}

// Function to format the date
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

// Function to calculate and display progress
function getProgress(progress, target) {
  if (typeof progress !== 'number' || typeof target !== 'number' || target === 0 || progress < 0 || target < 0 || progress > target) {
    return "Invalid progress data";
  }
  
  const percentage = Math.round((progress / target) * 100);
  return `<progress value="${progress}" max="${target}"></progress><br>${percentage}% completed`;
}
