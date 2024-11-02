---
id: keys-xcode
aliases:
  - keys Xcode
tags:
  - type/keys-cheatsheet
created: 22.09.2024, 17:00:20
updated: 01-11-2024, 22:19:28
---

# Xcode keys 
<hr>

## Global Window
`^ up_arrow` - show all windows
`^ down_arrow` - show desktop (hide windows temporarily)

## Menu

`⌘ ⌥ h` hide others

`⌘ Shift a` open quick actions

`⌘ Shift l` show library (snippets etc..)

`⌘ ⌥ t` show toolbar

`⌘ ⌥ Shift o` show organizer
`^ r` reload organizer

`⌘ Shift 0` show global documentation

## Left Pane (navigators)

`Tab` jump between sections, inputs

`⌘ (1-8)` switch navigators

`⌘ 0` toggle left pane

`⌘ j` move focus interactively to Editor / new Editor

`⌘ Shift j` select current file in navigator

`⌘ ⌥ j` filter in navigator

## Right Pane (inspectors)

`⌘ ⌥ (1-8)` switch inspectors

`⌘ ⌥ 0` toggle right pane

## Debugging Area

`Shift ⌥ y` toggle debugging area

`⌘ y` toggle breakpoints

## Editor Menu

`⌘ ⌥ Shift Enter` show code review

`^ 1` related items
`^ 2` previous history
`^ 3` next history
`^ 4` top level items
`^ 5` group files
`^ 6` document items (marks etc..)

## Editor

`^ ⌘ Shift ?` show documentation for selection
`^ j` jump to definition
`^ ⌘ Shift h` find call hierarchy
`^ ⌘ Shift f` find selected symbol in Workspace

`⌘ ⌥ o` open in tab (file stays in tab)

`^ ⌘ Shift Enter` focus/unfocus curerent editor
<code>^ \`</code> move focus to next editor
<code>^ Shift \`</code> move focus to previous editor

<code>⌘ ⌥ \`</code> move focus to next area (pane, editor, etc..)
<code>⌘ ⌥ Shift \`</code> move focus to previous area

`⌘ ⌥ ,` open in next editor
`⌘ ⌥ Shift ,` open interactive mode editor (choose mode - hold `⌥`)

`⌘ w` close tab
`⌘ ⌥ w` close other tabs (keep current only)

`^ ⌘ w` close file (cloned in other editors too)
`^ ⌘ Shift w` close editor (all tabs)

`⌘ Shift s` duplicate file
`⌘ ⌥ Shift s` save as...

## Bookmarks

`^ ⌘ '` bookmark line
`^ ⌘ ⌥ '` bookmark line with Dialog
`^ ⌘ Shift '` bookmark file
`^ ⌘ ⌥ Shift '` bookmark file with Dialog

## Editing

`⌘ z` undo
`⌘ Shift z` redo

`⌘ x` cut
`⌘ c` copy
`^ ⌘ ⌥ c` copy File and Line
`^ ⌘ ⌥ Shift c` copy Qualified Symbol Name
`^ ⌘ Shift c` copy Symbol Name

```swift 
// Example SceneDelegate.swift
func sceneWillResignActive(_ scene: UIScene) {...}

// File and Line
SceneDelegate.swift:34
// Qualified Symbol Name
SceneDelegate.sceneWillResignActive(_:)
// Symbol Name
sceneWillResignActive(_:)
```

`⌘ v` paste
`⌘ ⌥ v` paste special
`⌘ ⌥ Shift v` paste and preserve formatting

`⌘ d` duplicate line
`^ j` concatenate below line to the end of current line

`⌥ Backspace` delete symbol (whole word) 
`^ Backspace` delete word (by parts)
`⌘ Backspace` delete inline all before cursor



[TODO]: # (selection) 

