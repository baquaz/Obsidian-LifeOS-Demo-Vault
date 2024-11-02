---
id: keys-my-nvim
aliases:
  - keys my NVIM
tags:
  - type/keys-cheatsheet
created: 26-05-2024, 16:17:00
updated: 02-11-2024, 00:15:02
---

# My NVIM keys

### **q** quit

`q q` quit all
`q f` quit all forced

### **j** quit writing

`j j` quit insert mode

### **s** save

`space s` save file

### **z** zen mode

`z z` zen mode

# Window  

### w window 

`w h` split horizontally
`w v` split vertically
`w e` make split equal size
`w q` quit current split
`w m` maximize current window

### **t** tab

`t t` new tab
`t q` close tab
`t ]` open next tab
`t [` open previous tab
`t f` open current buffer in new tab 

# Files Management

### **e** nvim tree 

#### Custom

`e e` toggle file explorer
`e f` focus file explorer 
`e j` toggle file explorer on current file
`e ]` expand directory recursively file explorer
`e [` collapse all directories file explorer
`e r` refresh file explorer

#### Default

`enter <on file>` open and focus on file
`tab <on file>` open file but keep focus on file explorer
`tab <on group>` toggle/collapse files group
`^ Shift ]` focus working tree on selected directory

`: help <command>` open manual help for the command

`<C-]>`   CD
`<C-e>`   Open: In Place
`<C-k>`   Info
`<C-r>`   Rename: Omit Filename
`<C-t>`   Open: New Tab
`<C-v>`   Open: Vertical Split
`<C-x>`   Open: Horizontal Split
`<BS> `   Close Directory
`<CR> `   Open
`<Tab>`   Open Preview
`>`       Next Sibling
`<`       Previous Sibling
`.`       Run Command
`-`       Up
`a`       Create File Or Directory
`bd`      Delete Bookmarked
`bt`      Trash Bookmarked
`bmv`     Move Bookmarked
`B`       Toggle Filter: No Buffer
`c`       Copy
`C`       Toggle Filter: Git Clean
`[c`      Prev Git
`]c`      Next Git
`d`       Delete
`D`       Trash
`E`       Expand All
`e`       Rename: Basename
`]e`      Next Diagnostic
`[e`      Prev Diagnostic
`F`       Live Filter: Clear
`f`       Live Filter: Start
`g?`      Help
`gy`      Copy Absolute Path
`ge`      Copy Basename
`H`       Toggle Filter: Dotfiles
`I`       Toggle Filter: Git Ignore
`J`       Last Sibling
`K`       First Sibling
`L`       Toggle Group Empty
`M`       Toggle Filter: No Bookmark
`m`       Toggle Bookmark
`o`       Open
`O`       Open: No Window Picker
`p`       Paste
`P`       Parent Directory
`q`       Close
`r`       Rename
`R`       Refresh
`s`       Run System
`S`       Search
`u`       Rename: Full Path
`U`       Toggle Filter: Hidden
`W`       Collapse
`x`       Cut
`y`       Copy Name
`Y`       Copy Relative Path
`<2-LeftMouse>`  Open
`<2-RightMouse>` CD

### **f** file telescope
`f f` fuzzy find files in current working directory
`f r` fuzzy find files in recent files
`f s` find text in files recursively in current working directory
`f c` finc string matching the current cursor in current working directory
`f t` finc todos marks
`f ]` show next file
`f [` show previous file

### **o** obsidian notes

`o n` new note
`o p` open note in obsidian app
`o o` quick switch note
`o s` search notes
`o t` insert template from the list
`o b` show location list of backlinks

### **TODO** lua comments

`t ]` next todo comment
`t [` previous todo comment

### **CMP suggestions mode** 

`^ k` previous suggestion
`^ j` next suggestion
`^ b` scroll docs -4
`^ f` scroll docs 4
`. /` preview files in current working directory

### **Key** description

`Key`

