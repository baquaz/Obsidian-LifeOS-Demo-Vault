---
id: habit-tracker
aliases:
  - Habit Tracker
tags: []
created: 10.08.2024, 02:09:53
obsidianUIMode: preview
updated: 01-11-2024, 21:33:12
---

# Habit Tracker

```dataviewjs
const yearToShow = 2024; // Adjust as needed

function getYearRange(year) {
  const start = moment().year(year).startOf('year');
  const end = moment().year(year).isSame(moment(), 'year') ? moment() : moment().year(year).endOf('year');
  return { start, end };
}

const { start, end } = getYearRange(yearToShow);

// Load dynamic habits
const habitsNote = dv.page("habits-list");
const habitsList = habitsNote && Array.isArray(habitsNote.habits) ? habitsNote.habits : [];

// Ensure we have habits to track
if (!habitsList.length) {
  dv.paragraph("No habits found in the habits list note.");
} else {
  moment.updateLocale('en', {
    week: {
      dow: 1, // Start week on Monday
      doy: 4  // The week containing Jan 4th is the first week of the year
    }
  });

  // Fetch pages for the current year, sorted in descending order
  const pages = dv.pages('"Review/Daily"')
  .where(p => moment(p.file.name, "YYYY-MM-DD").isBetween(start, end, null, '[]')) // Parse file names in 'YYYY-MM-DD'
  .sort(p => p.file.name, "desc")
  .map(p => {
    const habitStatuses = {};
    const tasks = p.file.tasks || [];
    const dateMoment = moment(p.file.name, 'YYYY-MM-DD'); // Parse date from file name

    habitsList.forEach(habit => {
      habitStatuses[habit] = tasks.some(t => t.text.includes(habit) && t.completed) ? "<center>✅</center>" : "<center>🟥</center>";
    });

    return {
      date: dateMoment,
      link: p.file.link,
      name: p.file.name,
      habits: habitStatuses
    };
  });

  const done = "<center>✅</center>";
  const skip = "<center>🟥</center>";

  let weeks = [];
  let currentWeek = [];
  let currentMonth = null;
  let monthSummary = Object.fromEntries(habitsList.map(habit => [habit, 0]));

  function addMonthSummary(month, summary) {
    weeks.push({
      type: 'monthSummary',
      month: month,
      summary: { ...summary }
    });
  }

  for (let d = moment(end); d.isSameOrAfter(start); d.subtract(1, 'days')) {
    const isNewMonth = currentMonth !== null && d.month() !== currentMonth;

    if (isNewMonth) {
      if (currentWeek.length > 0) {
        weeks.push({ type: 'week', data: currentWeek });
        currentWeek = [];
      }
      addMonthSummary(currentMonth, monthSummary);
      monthSummary = Object.fromEntries(habitsList.map(habit => [habit, 0]));
    }

    const page = pages.find(p => p.date.isSame(d, 'day'));
    const isWeekend = d.day() === 0 || d.day() === 6;
    
    // Format display date as 'DD-MM-YYYY'
    const displayDate = d.format("DD-MM (ddd)");
    const dateCell = isWeekend ? `**${displayDate}**` : displayDate;

    let dayData = {
      date: page ? `[[${page.name}|${displayDate}]]` : dateCell, // Link to file with label as 'DD-MM'
      ...Object.fromEntries(habitsList.map(habit => [habit, page?.habits[habit] || skip]))
    };

    if (page) {
      habitsList.forEach(habit => {
        if (page.habits[habit] === done) {
          monthSummary[habit]++;
        }
      });
    }

    currentWeek.push(dayData);

    if (d.day() === 1 || d.isSame(start, 'day')) {
      weeks.push({ type: 'week', data: currentWeek });
      currentWeek = [];
    }

    currentMonth = d.month();
  }

  // Add the last month and week if needed
  if (currentWeek.length > 0) {
    weeks.push({ type: 'week', data: currentWeek });
  }
  addMonthSummary(currentMonth, monthSummary);

  let tableRows = [];

  weeks.forEach(week => {
    if (week.type === 'week') {
      week.data.forEach(day => {
        tableRows.push([day.date, ...habitsList.map(habit => day[habit])]);
      });
      let weekSummary = Object.fromEntries(habitsList.map(habit => [habit, 0]));
      week.data.forEach(day => {
        habitsList.forEach(habit => {
          if (day[habit] === done) {
            weekSummary[habit]++;
          }
        });
      });
      tableRows.push([
        "**<center>Week Summary</center>**",
        ...habitsList.map(habit => `**<center>${weekSummary[habit]}</center>**`)
      ]);
    } else if (week.type === 'monthSummary') {
      const monthNumber = (week.month + 1).toString().padStart(2, '0'); // Ensure two-digit format
      tableRows.push([
        `**<center>MONTH ${monthNumber} SUMMARY</center>**`,
        ...habitsList.map(habit => `**<center>${week.summary[habit]}</center>**`)
      ]);
    }
  });

  dv.table(
    ["Date", ...habitsList],
    tableRows
  );
}
```
