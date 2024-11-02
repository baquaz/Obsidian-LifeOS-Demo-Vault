async function createNewGoal() {
  const fileName = "Review/Goals/New-goal.md";
  const templatePath = "templates/lifeos-goal.md";
  const { vault, workspace } = app  

  try {
    const existingFile = vault.getAbstractFileByPath(fileName);
    if (existingFile) { 
      new Notice('File already exists!');
      return;
    }
    const templateFile = vault.getAbstractFileByPath(templatePath);
    if (!templateFile) {
      new Notice('Template not found!');
      return;
    }
    const templateContent = await vault.read(templateFile);

    await vault.create(fileName, templateContent);
    new Notice('New goal file created successfully!');
  } catch (error) {
    new Notice('An error occurred while creating the file.');
    console.error('An error occurred while creating new goal file:', error);
  }
  let file = vault.getAbstractFileByPath(fileName)
  await workspace.activeLeaf.openFile(file)
}

module.exports = createNewGoal;
