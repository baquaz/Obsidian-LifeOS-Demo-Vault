---
id: lifeos-goal
aliases:
  - LifeOS Goal
tags:
  - lifeos/goal
CompletedDate: ""
Deadline: 2024-12-31
List-important: []
List-risks: []
List-success: []
Progress: 100
StartedDate: 2024-09-19
Target: 100
banner: https://res.cloudinary.com/difh5ajzd/image/upload/v1720972960/goal1_jwcljb.jpg
banner_y: 1
created: 03-07-2024, 22:39:55
updated: 02-11-2024, 00:59:28
---

# Create Life OS V1

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

