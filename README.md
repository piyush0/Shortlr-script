Steps to make it work :


1. Copy pre-push.js to .git/hooks
2. Rename pre-push.js to pre-push
3. <code> chmod u+x pre-push </code>

Steps to make it global :

1. <code> git config --global init.templatedir '~/.git-templates' </code>
2. <code> mkdir -p ~/.git-templates/hooks </code>
3. Paste pre-push.js in ~/.git-templates/hooks
4. Rename pre-push.js to pre-push
5. <code> chmod u+x ~/.git-templates/hooks/pre-push </code>

Every time you <code>git init </code> This will work

New functionality added. //TODO: Update readme.
