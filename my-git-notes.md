---
id: my-git-notes
aliases:
  - My Git Notes
tags:
  - code/docs
  - git
created: 02.06.2024, 15:17:27
updated: 02-11-2024, 00:05:52
---

# My Git Notes
<br>

#### Commit Structure:
- structure state in the tree of files
- metadata (author, data)
- parent reference (previous branch)

**Commit** is a unique reference for Git represented as SHA1 hashes
#### Branch Structure:
- implemented as a file containing SHA1 hash.

- Location: .git/refs/heads/myBranch

**Branch** is label referring to a specific commit

# **BRANCH**

`branch` - shows branches list

`branch --all -v ` - shows list of all branches + repo + hashes

`branch myBranch`
    or with checkout
`branch -b myBranch` - creates branch

`branch -d myBranch` - deletes branch

`branch -D myBranch` - force deletes branch

`checkout myBranch` - changes tracking to branch

`checkout --track origin/remoteBranch`
    or automatically
`checkout remoteBranch` - sets tracking to remote branch


# **BASIC**

`remote -v` - shows a list of remote repos
            confirms that this is a clone from a fork

`remote add iwantmyrealname https://github.com/iwantmyrealname/gitProject`
    - adding a remote repo

`fetch repo/branch` - fetches branches or tags from 1(or more) repo(s)
    - does not integrate fetched data with local repo (does not causing damages)

`fetch --all` - fetches all remotes

`commit -a` - automatically adds ("git add") changes in known files

`commit --amend` - overrides/fixes last commit

`remote prune origin` - checks if there are any deleted changes on remote

`push --set-upstream origin master` - set-upstream confirms that a local branch will be followed by master branch
    (shorter version: `push -u origin master`)
    - used for pushing the branch to the remote for the first time

`config --global core.excludesfile` - shows path to the global gitignore

`config merge.conflictstyle diff3` - adds marker and original text before marker

`config merge.tool opendiff lub filemerge` - sets the tool for resolving diff conflits

`mergetool` - opens a program to resolve current conflit

`reset --hard HEAD` - cleans up working directory


# **LOG**

`log -p` - shows commits + diff

`log -[number]` - shows n last commits

`log --oneline` - shows oneline commits (short description #, without dates)

`log --decorate` - shows logs with branch names

`log --graph` - shows ASCII branches representation

`log --oneline -- decorate --graph -- all` - shows all repo in one nice form

`shortlog` - shows list with commit names grouped by user

`shortlog origin/master..HEAD` - only local commit names


# **LOG FILTERS**

`log --author name`
    or
`log --author="name"`

`log --grep="name"` - commits with name

`log -- filename (or directory/)` - commits for specific file/directory
    !WARNING `--` means end of options

`log -S"word" -p` - searching word in content of commits + diff

Useful
`log -all -p -S"word"` - searching word in the content of all commits (not only mine)


# **DIFF**

`diff` - shows diff between **local** and **staging**

`diff --staged` - shows diff between **staging** and **index (remote)**


# **STAGING AREA**

`reset HEAD file` - unstage file

`add -i` - opens session for managing files **stage/unstage** (interactive adding)

==================================================================
<pre>
*** Commands ***
  1: status	  2: update	  3: revert	  4: add untracked
  5: patch	  6: diff	  7: quit	  8: help

status        - show paths with changes 
update        - add working tree state to the staged set of changes             (adding to stage)
revert        - revert staged set of changes back to the HEAD version           (revert from stage
patch         - pick hunks and update selectively                               (pick some parts of files)
diff          - view diff between HEAD and index
add untracked - add contents of untracked files to the staged set of changes


*** patch Commands ***
y - stage this hunk
n - do not stage this hunk
q - quit; do not stage this hunk or any of the remaining ones
a - stage this hunk and all later hunks in the file
d - do not stage this hunk or any of the later hunks in the file
g - select a hunk to go to
/ - search for a hunk matching the given regex
j - leave this hunk undecided, see next undecided hunk
J - leave this hunk undecided, see next hunk
k - leave this hunk undecided, see previous undecided hunk
K - leave this hunk undecided, see previous hunk
s - split the current hunk into smaller hunks
e - manually edit the current hunk
? - print help

Stage this hunk [y,n,q,a,d,/,s,e,?]?
</pre>
==================================================================

`add -p` - opens session with option "patch" ( = git add -i, git add - p)

`mv file location` - moving files with tracking changes 


# **STASH**

`stash` - takes down uncommitted changes to special space (Work In Progress)

`stash push -m "message"` - adds to the stash uncommitted changes and setting up name 

`stash list` - lists saved stashes WIP (Workin In Progress - current)

`stash show -p` - shows current stash with diff

`stash show stash@{number}` - shows stash for specific number

`stash apply` - restore content of current stash to the **staging area**

`git stash show -p stash@{0} | git apply -R` - unaply stash

`stash pop` - restores content of recent stash and deletes it from the stash list (if there are no conflits)

`stash pop stash@{number}` - restores content of stash for specific number and deletes it from the stash list (if there are no conflits)

`stash drop stash@{number}` - deletes stash for specific number


# **IGNORE**

`git ls-files -v` - shows list of trakcked files by git

`git ls-files -v | grep '^[[:lower:]]'` - shows list of files untracked by git (they will remain unchanged for git)

When git sees file despite the presence in .gitignore:

I )  
` update-index --assume-unchanged filename ` - tells git that this file is and will be unchanged

`git update-index --no-assume-unchanged filename` - tells git to track this file

II )
 `rm filename` - deletes file from tracking + and disk!

`rm --cached filename` - deletes file only from tracking
