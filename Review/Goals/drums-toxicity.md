---
id: drums-toxicity
aliases: []
tags:
  - lifeos/goal
CompletedDate: ""
Deadline: ""
List-important: []
List-risks: []
List-success: []
Progress: 0
StartedDate: ""
Target: 100
banner: attachments/drums-final-boss.jpg
banner_y: 0.936
created: 01-11-2024, 23:02:53
obsidianUIMode: preview
updated: 02-11-2024, 12:59:44
---

# Toxicity 🥁 

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
