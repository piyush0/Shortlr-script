# Shortlr Script

### Usage

#### Push and short

<code> node shortlr 'remote-name' 'branch-name' 'directory' 'custom-code' </code>

All the arguments are optional.

| Argument | Default Value | Comments |
| :--- | :--- | :--- |
| remote-name | origin | The remote to which the git push takes place |
| branch-name | master| The branch to which git push takes place |
| directory |  | The directory to which the shortcode will point |
| custom-shortcode |  | The custom shortcode that will be produced. Makes sense only if you know the secret |
<br>
<br>

#### Shorten only
<code> node shortlr -s 'remote-name' </code>
'remote-name' is an optional argument

| Argument | Default Value | Comments |
| :--- | :--- | :--- |
| remote-name | origin | The remote of which you want the short link of |

### Example

<code> node shortlr origin master public_static projPs </code>

This will push your code to 'origin master' and produce a link like http://cb.lk/projPs
This short link is pointing to public_static directory of your repository.

