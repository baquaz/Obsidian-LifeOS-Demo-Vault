(async function() {
  const createGoalFile = app.vault.getAbstractFileByPath('scripts/create-goal.js');
  if (!createGoalFile) {
    console.error('Could not find create-goal.js');
    return;
  }

  const newGoalNoteScript = await app.vault.read(createGoalFile);
  const createNewGoalNote = new Function('return ' + newGoalNoteScript)();

  const config = {
    basePath: "Review/Goals/New-goal.md",
  };

  function isNewGoalNote(file) {
    return file.path === config.basePath;
  }

  app.workspace.on("file-open", async (file) => {
    if (file && isNewGoalNote(file)) {
      const content = await app.vault.read(file);
      if (content.trim() === "") {
        console.log("Empty new goal note detected, applying template...");
        try {
          await createNewGoalNote();
          console.log("Template applied to:", file.path);
        } catch (error) {
          console.error("Error applying template:", error);
        }
      }
    }
  });

  app.commands.addCommand({
    id: 'create-new-goal-note',
    name: 'Create New Goal Note',
    callback: async () => {
      try {
        await createNewGoalNote();
        console.log("New goal note created");
      } catch (error) {
        console.error("Error creating new goal note:", error);
      }
    }
  });
})();
