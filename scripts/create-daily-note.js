module.exports = async function createDailyNote(date) {
  const moment = window.moment;
  const { vault, workspace } = app;

  // Configuration
  const config = {
    basePath: "Review/Daily/",
    fileDateFormat: "YYYY-MM-DD",  // Use 'YYYY-MM-DD' for file names
    titleDateFormat: "DD MMM, YYYY, ddd",  // Use 'DD MMM, YYYY, ddd' for note title
    timeFormat: "HH:mm"  // Use 'HH:mm' for current time
  };

  // Generate file name using 'YYYY-MM-DD'
  const fileName = `${config.basePath}${date.format(config.fileDateFormat)}.md`;
  let file = vault.getAbstractFileByPath(fileName);

  // Function to apply the daily note template
  async function applyTemplate(targetFile) {
    const templateFile = vault.getAbstractFileByPath("templates/lifeos-daily.md");

    if (templateFile) {
      let templateContent = await vault.read(templateFile);

      // Pre-process dates for yesterday, today, and tomorrow
      const fileDate = moment(targetFile.basename, "YYYY-MM-DD");  // Parse file name as 'YYYY-MM-DD'
      const yesterday = fileDate.clone().subtract(1, 'days');
      const tomorrow = fileDate.clone().add(1, 'days');

      // Replace template placeholders with actual content
      templateContent = templateContent
        // Format the title as 'DD MMM, YYYY, ddd'
        .replace(/<% moment\(tp\.file\.title,\s*"DD-MM-YYYY"\)\.format\("DD MMM, YYYY, ddd"\) %>/g, fileDate.format(config.titleDateFormat))
        // Insert current time as 'HH:mm'
        .replace(/<% tp\.date\.now\("HH:mm"\) %>/g, moment().format(config.timeFormat))
        // Replace 'Yesterday' and 'Tomorrow' links with file paths using 'YYYY-MM-DD'
        .replace(/<%\*[\s\S]*?Yesterday[\s\S]*?%>/g, `Review/Daily/${yesterday.format("YYYY-MM-DD")}|Yesterday`)
        .replace(/<%\*[\s\S]*?Tomorrow[\s\S]*?%>/g, `Review/Daily/${tomorrow.format("YYYY-MM-DD")}|Tomorrow`);

      // Apply the modified template content to the target file
      await vault.modify(targetFile, templateContent);
      console.log("Template applied to:", targetFile.path);
    } else {
      console.error("Template file not found");
    }
  }

  // Check if the file already exists
  if (!file) {
    // If file doesn't exist, create it and apply the template
    await vault.create(fileName, "");
    file = vault.getAbstractFileByPath(fileName);
    await applyTemplate(file);
  } else {
    // If the file exists but is empty, apply the template
    const content = await vault.read(file);
    if (content.trim() === "") {
      await applyTemplate(file);
    }
  }

  // Open the newly created or modified file in the workspace
  await workspace.activeLeaf.openFile(file);
};

