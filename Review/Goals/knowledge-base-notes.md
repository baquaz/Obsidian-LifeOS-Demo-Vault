---
id: knowledge-base-notes
aliases: []
tags:
  - lifeos/goal
CompletedDate: 2024-11-01
Deadline: 2024-11-31
List-important: []
List-risks: []
List-success: []
Progress: 100
StartedDate: 2024-11-01
Target: 100
banner: attachments/knowledge-base.jpg
banner_y: 0.652
created: 01-11-2024, 20:52:49
obsidianUIMode: preview
updated: 02-11-2024, 12:59:36
---

#  Knowledge helper notes
```meta-bind
INPUT[
text(
    title(Banner url),
    placeholder(image url [local or remote]),
    class(meta-bind-full-width), 
    defaultValue(attachments/goal2.jpg)
): banner]
```

> [!multi-column]
> ```meta-bind
> INPUT[date(title(Deadline)):Deadline]
> ```
> ```meta-bind
> INPUT[date(title(Started)):StartedDate]
> ```
> ```meta-bind
> INPUT[date(title(Completed)):CompletedDate]
> ```

```meta-bind  
INPUT[progressBar(title(Progress), minValue(0), maxValue(100)):Progress]  
```

# Notes list
- [R] [Obsidian Command List](Obsidian%20Commands.md)
- [p] [My Git Notes](my-git-notes.md)
- [I] [My NVIM Plugins](nvim-plugins-info.md)
- [k] [keys my NVIM](keys-my-nvim.md)
- [k] [keys VIM](keys-vim.md)
- [k] [keys Xcode](keys-xcode.md)

```meta-bind
INPUT[
list(
    class(info),
    title(Why is this goal Important to me?)
):List-important]
```

```meta-bind
INPUT[
list(
    class(success), 
    title(✓ What would I gain by achieving this goal?)
):List-success]
```

```meta-bind
INPUT[
list(
    class(error),
    title(⚠ What are the possible risks & obstacles?)
):List-risks]
```
