---
id: keys-vim
aliases:
  - keys VIM
tags:
  - type/keys-cheatsheet
created: 22-05-2024, 22:44:00
updated: 01-11-2024, 22:19:01
---

# VIM Keys Cheatsheet
<hr>

### **a** after | **A** around

`a` - append after the cursor
`A` - append after the line

In visual mode also a means around context
see: `v a`

### **b** back | **B** back "Big" word

`b` move backward 1 word
`B` move backward "big" word
`0` to move to the beginning of the line

### **c** change in < motion >  | **C** change from here

`c` change in (word, {}, paragraph etc... )
`c i w` change in word
`c i {` change in brackets
`c i p` change in paragraph

### **d** delete code enclosed in < motion >
### **D** delete from here 

deleting to an unnamed register, so you can repaste what you've deleted

`d` delete in (word, paragraph, from here up/down)

`d i w` delete innner word same as `c i w`
`d e w` delete next end of word and move cursor at the end

`d i p` delete in paragraph

`d %` delete ( ), [ ], { }  

`d 0` delete to the start of line
`d $` delete to the end of line


`d g g` delete from here up
`d G` delete from here down

`dd` delete line, same as `D` when cursor at the start line

### **e** end of word | **E** End of big word

`e` move to end of word
`E` move forward to the end of "big" word

### **f** find a character | **F** find backwards

`f` find a character forward in the line
`F` find a character backwards in the line

###### Quick tip:
- use `;` to go to next result
- use `,` to search backwards for the next result

### **g** go to | **G** go to the end of file

`g g` go to the beginning of the file
`G` go to the end of the file
`g i` go to last insertion and INSERT

### **h** left | **j** down | **k** up | **l** right

`H` go to the headline of visible area 

### **i** insert before cursor | **I** insert before line 

`i` insert before the cursor
`I` insert before the line

### **m** mark position to register

`m <character>` to mark position in the register
`' <character in register` to jump to the position

### **n** next result forward | **N** backwards
</br>

### **o** open below the line | **O** open above the line

`o` open writing in the next line
`O` open writing above the line

### **p** paragraph | **P** Past

`p` paste after the cursor something yanked by `y` or deleted/cut by `d`
`P` paste before the cursor

### **q** reqord a macro to < register >

`q <character>` record a macro for the character, then `q` to stop recording
`@ <character>` execute the macro

###### Quick tip:
- start with  `q q` < macro sequence > `q`, then `@ Q` to use it

### **r** replace currenct character | **R** terminator mode

`r <character>` replace a character in cursor position 
`R` replace mode to override characters 
`^ r` redo

### **s** switch charcater | **S** switch line

`s` switch character and keep on
`S` switch line and keep on

### **t** to a character forward | **T** to a character backwards

`t` go to a character
`T` to backwards to a character

###### Quick tip:
- useful in `v` mode to select characters, i.e. `v t < char >`

### **u** undo action | **U** undo actions in 1 line

`u` undo action
`U` undo all actions in 1 line

### **v** visual selection | **V** visual line mode

`v` visual mode
`V` visual line mode

#### vertical block

`^ V` vertical selection (block)
`<number>j/k` select bottom/top lines

###### Quick tip:
- In visual mode select line(s) then `I` to start writing and `<Esc> <Esc>` to complete

### **w** go to word | **W** go to "Big" word

`w` go to word
`W` go to "Big" word

### **x** delete a character
</br>

### **y** yank something | **Y** yank line

`y (i/a)` yank in/around (word paragraph brackets ...)
`y y` yank current line
`Y` yank forward in the line

### **z** center view / fold

### Buffer next/previous

`Ctrl i` jump to 1 next buffer location
`Ctrl o` jump to 1 back buffer location

