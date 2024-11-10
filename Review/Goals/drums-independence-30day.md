---
id: lifeos-goal
aliases:
  - LifeOS Goal
tags:
  - lifeos/goal
CompletedDate: ""
Deadline: 2024-11-30
List-important: []
List-risks: []
List-success: []
Progress: 2
StartedDate: 2024-11-01
Target: 30
banner: attachments/drums-challenge.jpeg
banner_y: 0.296
created: 01-11-2024, 22:40:55
updated: 02-11-2024, 23:41:59
---

# Finish Drumming Independence 30-day Challenge

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
INPUT[progressBar(title(Progress), minValue(0), maxValue(30)):Progress]  
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

