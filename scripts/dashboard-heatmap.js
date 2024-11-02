dv.span("** Productivity **")
const calendarData = {
    year: 2024, // Adjust as needed
    entries: [],
}

//DataViewJS loop
for (let page of dv.pages('"Review/Daily"')
.where(p => p.Productivity)) {
    dv.span("<br>" + page.file.name) // for troubleshooting
    calendarData.entries.push({
        date: page.file.name,
        intensity: page.Productivity,
        content: "🦾",
    })
}

renderHeatmapCalendar(this.container, calendarData)
