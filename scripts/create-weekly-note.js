module.exports = async function createWeeklyNote(date) {
    const moment = window.moment;
    const { vault, workspace } = app;

    const weekFormat = "YYYY-[W]ww";
    const fileName = `Review/Weekly/${date.format(weekFormat)}.md`;
    let file = vault.getAbstractFileByPath(fileName);

    if (!file) {
        // Create a new empty file
        file = await vault.create(fileName, "");
        console.log("New weekly note created:", fileName);
    }

    // Check if the file is empty
    const content = await vault.read(file);
    if (content.trim() === "") {
        // Apply template to the empty file
        const templater = app.plugins.plugins['templater-obsidian'].templater;
        const templateFile = vault.getAbstractFileByPath("templates/lifeos-weekly.md");
        
        if (templateFile) {
            await templater.append_template_to_active_file(templateFile);
            console.log("Template applied to file:", fileName);
        } else {
            console.error("Template file not found:", "templates/lifeos-weekly.md");
        }
    } else {
        console.log("Weekly note already has content:", fileName);
    }

    // Open the file
    await workspace.activeLeaf.openFile(file);
}

