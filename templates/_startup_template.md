<%*
async function logError(message) {
//    const errorNotePath = "Error Log.md"; // Adjust the path if needed
//    const errorNote = await app.vault.getAbstractFileByPath(errorNotePath);
//    const errorMessage = `- ${new Date().toLocaleString()}: ${message}\n`;
//
//    if (errorNote) {
//        // Append error message to existing note
//        const currentContent = await app.vault.read(errorNote);
//        await app.vault.modify(errorNote, currentContent + errorMessage);
//    } else {
//        // Create a new error note with the error message
//        await app.vault.create(errorNotePath, errorMessage);
//    }
}

async function setupNoteListeners() {
    try {
        const dailyListenerFile = app.vault.getAbstractFileByPath('scripts/daily-note-listener.js');
        if (dailyListenerFile) {
            const dailyListenerScript = await app.vault.read(dailyListenerFile);
            const setupDailyListener = new Function('return ' + dailyListenerScript)().default;
            await setupDailyListener();
        }
    } catch (error) {
        await logError(`Daily Note Listener Error: ${error.message}`);
    }

    try {
        const weeklyListenerFile = app.vault.getAbstractFileByPath('scripts/weekly-note-listener.js');
        if (weeklyListenerFile) {
            const weeklyListenerScript = await app.vault.read(weeklyListenerFile);
            const setupWeeklyListener = new Function('return ' + weeklyListenerScript)().default;
            await setupWeeklyListener();
        }
    } catch (error) {
        await logError(`Weekly Note Listener Error: ${error.message}`);
    }

    try {
        const newGoalListenerFile = app.vault.getAbstractFileByPath('scripts/goal-listener.js');
        if (newGoalListenerFile) {
            const newGoalListenerScript = await app.vault.read(newGoalListenerFile);
            const setupNewGoalListener = new Function('return ' + newGoalListenerScript)().default;
            await setupNewGoalListener();
        }
    } catch (error) {
        await logError(`New Goal Listener Error: ${error.message}`);
    }
}

await setupNoteListeners();
%>
