# Shortlr Script

<code> shortlr </code>
Just this command will push to your origin master and will shorten the url of your remote.

## Usage

### Push and short

<code> node shortlr 'remote-name' 'branch-name' 'directory' 'custom-code' </code>

All the arguments are optional.

| Argument | Default Value | Comments |
| :--- | :--- | :--- |
| remote-name | origin | The remote to which the git push takes place |
| branch-name | master| The branch to which git push takes place |
| directory |  | The directory to which the shortcode will point, If no value is provided, shortcode points to the root of the repo. |
| custom-shortcode |  | The custom shortcode that will be produced. Makes sense only if you know the secret. If no value is provided, a random shortcode is generated |

### Shorten only
<code> node shortlr -s 'remote-name' </code>
'remote-name' is an optional argument

| Argument | Default Value | Comments |
| :--- | :--- | :--- |
| remote-name | origin | The remote of which you want the short link of |

## Example

<code> node shortlr origin master public_static projPs </code>

This will push your code to 'origin master' and produce a link like http://cb.lk/projPs
This short link is pointing to public_static directory of your repository.

<code> node shortlr -s origin </code>

Produces a short link of 'origin' remote of your repository

## Steps to make global

1. Rename shortlr.js to shortlr
2. <code> chmod u+x shortlr </code>
3. Copy the executable to your <i>bin</i> folder

Now you can use it globally. (Without having to download the shortlr.js to every git repository)

<code> shortlr origin master </code>

## Dependencies

[Shortlr by Coding Blocks](https://github.com/coding-blocks/shortlr)
