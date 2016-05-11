# Code 301 - Class 2
## Git Demo
* Git demo everyone add their name
* Repeat. Strategies for being more successful?
* [Git in 5 minutes](http://classic.scottr.org/presentations/git-in-5-minutes/)

### My Git Workflow
```
git checkout master
git branch my-feature-002
git checkout my-feature-002

# daily
git pull origin master

# do some work
git add --all
git commit -a -m "Some more work was done. It is awesome."
# keep our remote branch up to date
git push origin my-feature-002

#  finished work
git pull origin master
git push origin my-feature-002

# ready for merge
# create pull request in Github

# temporarily stash changes
git stash
# do something
git stash pop

```
**Do not rebase** unless you understand it fully! Rebasing rewrites history and should not be used on any shared branches, only locally. When in doubt, do not use it.

## Slides
[CLASS 1 DOM & jQuery](slides/Code 301 - Class 03 Dom - jQuery.pdf)

## jQuery Demos
* Demos on using jQuery

## Objectives
### jQuery: DOM
* Understand when the jQuery library is useful(and how to include it (local vs CDN)). Why prefer one over another? (CDNs are very fast, no setup required. But you also are relying on them to be up and correct.)
* Perform DOM manipulations, like append, remove, clone, html, text
* Comprehend traversal of the DOM tree, with parents, children, find
* Differentiate between certain methods & the process of chaining (RTFM!)
* Understand `<script>` loading in HTML.


### What students NEED to know before lab time:
* How to work in Pairs,
* How to fork and clone and collaborate on the pair assignment
* That this is a tough class, and SANDBOX learning is hard if you aren’t used to it.
* [jQuery cheatsheet](https://oscarotero.com/jquery/), and how to use $(‘selector’).method(args)
* BONUS assignments are there to help if you want to learn more

## Demo
### Project setup:
* [ESLint](https://github.com/AtomLinter/linter-eslint)
* [LiveServer](https://github.com/tapio/live-server)
* In the chrome web inspector demo
* Basic Selectors
* other examples from [book code](http://javascriptbook.com/code/c07/)
* looping
* chaining
* `$(document).ready()`. Why is this important?

### Review if necessary / time allows:
* vanilla JS: sorting objects with a comparison function
* forEach
* CSS Reset

## Assignments
* PREWORK:  
	- Dev setup:
		- live-server
		- ESlint
		- npm packages

* PAIR:
	- GitHub
	- Password: jquery

* PORTFOLIO:
	- GitHub

* Bonus:
	- jQuery Path: `https://www.codecademy.com/learn/jquery`
