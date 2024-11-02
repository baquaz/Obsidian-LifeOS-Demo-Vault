(async function() {
    const createWeeklyNoteFile = app.vault.getAbstractFileByPath('scripts/create-weekly-note.js');
    if (!createWeeklyNoteFile) {
        console.error('Could not find create-weekly-note.js');
        return;
    }

    const createWeeklyNoteScript = await app.vault.read(createWeeklyNoteFile);
    const createWeeklyNote = new Function('return ' + createWeeklyNoteScript)();

    const config = {
        basePath: "Review/Weekly/",
        dateFormat: "YYYY-[W]ww"
    };

    function isWeeklyNote(file) {
        return file.path.startsWith(config.basePath) && 
               file.extension === "md" && 
               moment(file.basename, config.dateFormat, true).isValid();
    }

    app.workspace.on("file-open", async (file) => {
        if (file && isWeeklyNote(file)) {
            const content = await app.vault.read(file);
            if (content.trim() === "") {
                console.log("Empty weekly note detected, applying template...");
                try {
                    const date = window.moment(file.basename, config.dateFormat);
                    await createWeeklyNote(date);
                    console.log("Template applied to:", file.path);
                } catch (error) {
                    console.error("Error applying template:", error);
                }
            }
        }
    });

    app.commands.addCommand({
        id: 'create-this-weeks-note',
        name: 'Create This Week\'s Note',
        callback: async () => {
            try {
                const date = window.moment();
                await createWeeklyNote(date);
                console.log("This week's note created");
            } catch (error) {
                console.error("Error creating this week's note:", error);
            }
        }
    });
})();
