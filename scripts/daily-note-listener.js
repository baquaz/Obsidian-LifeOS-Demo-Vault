(async function() {
  const createDailyNoteFile = app.vault.getAbstractFileByPath('scripts/create-daily-note.js');
  if (!createDailyNoteFile) {
    console.error('Could not find create-daily-note.js');
    return;
  }

  const createDailyNoteScript = await app.vault.read(createDailyNoteFile);
  const createDailyNote = new Function('return ' + createDailyNoteScript)();

  const config = {
    basePath: "Review/Daily/",
    dateFormat: "YYYY-MM-DD"
  };

  function isDailyNote(file) {
    return file.path.startsWith(config.basePath) && 
      file.extension === "md" && 
      moment(file.basename, config.dateFormat, true).isValid();
  }

  app.workspace.on("file-open", async (file) => {
    if (file && isDailyNote(file)) {
      const content = await app.vault.read(file);
      if (content.trim() === "") {
        console.log("Empty daily note detected, applying template...");
        try {
          const date = window.moment(file.basename, config.dateFormat);
          await createDailyNote(date);
          console.log("Template applied to:", file.path);
        } catch (error) {
          console.error("Error applying template:", error);
        }
      }
    }
  });

  app.commands.addCommand({
    id: 'create-todays-daily-note',
    name: 'Create Today\'s Daily Note',
    callback: async () => {
      try {
        const date = window.moment();
        await createDailyNote(date);
        console.log("Today's daily note created");
      } catch (error) {
        console.error("Error creating today's note:", error);
      }
    }
  });
})();
