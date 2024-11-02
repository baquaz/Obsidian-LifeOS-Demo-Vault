
const { Plugin, Modal, Notice } = require('obsidian');


class PromptModal extends Modal {
  constructor(app, placeholderText, onSubmit) {
    super(app);
    this.placeholderText = placeholderText;
    this.onSubmit = onSubmit;
  }

  onOpen() {
    const { contentEl } = this;
    contentEl.createEl("h2", { text: "Goal Title" });

    const inputEl = contentEl.createEl("input", {
      type: "text",
      placeholder: this.placeholderText,
    });
    inputEl.focus();

    inputEl.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        this.onSubmit(inputEl.value);
        this.close();
      }
    });

    const submitButton = contentEl.createEl("button", { text: "Submit" });
    submitButton.addEventListener("click", () => {
      this.onSubmit(inputEl.value);
      this.close();
    });
  }

  onClose() {
    const { contentEl } = this;
    contentEl.empty();
  }
}

class CustomGoalPlugin extends Plugin {
  async onload() {
    this.addCommand({
      id: "create-new-goal",
      name: "Create New Goal",
      callback: () => this.createNewGoal()
    });
  }

  async createNewGoal() {
    const templatePath = "templates/lifeos-goal.md";
    const { vault, workspace } = this.app;

    const goalTitle = await new Promise((resolve) => {
      const modal = new PromptModal(this.app, "Enter Goal Title", resolve);
      modal.open();
    });

    if (!goalTitle) {
      new Notice("Goal creation canceled.");
      return;
    }

    const fileName = `Review/Goals/${goalTitle.replace(/[\/\\?%*:|"<>]/g, '-')}.md`;

    try {
      const existingFile = vault.getAbstractFileByPath(fileName);
      if (existingFile) {
        new Notice("File already exists!");
        return;
      }

      const templateFile = vault.getAbstractFileByPath(templatePath);
      if (!templateFile) {
        new Notice("Template not found!");
        return;
      }

      let templateContent = await vault.read(templateFile);
      templateContent = templateContent.replace("New Goal", goalTitle);

      await vault.create(fileName, templateContent);
      new Notice("New goal file created successfully!");

      const file = vault.getAbstractFileByPath(fileName);
      await workspace.activeLeaf.openFile(file);
    } catch (error) {
      new Notice("An error occurred while creating the file.");
      console.error("Error creating new goal file:", error);
    }
  }
}

// Export the CustomGoalPlugin class
module.exports = CustomGoalPlugin;

