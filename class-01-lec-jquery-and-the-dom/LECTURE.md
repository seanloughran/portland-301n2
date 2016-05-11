# Code 301 - Class 1
## Review
Kickoff! (keep it to a half-hour, max!)

## Standard kickoff deck
[CLASS 1 KICKOFF SLIDES](slides/pdx301d3_d1.1_Intro.pdf)

## Flow of this course
### Overview
* Students will collaboratively design and create a single page web application from scratch using MVC architecture built with clean HTML, CSS and Javascript that satisfies stakeholder requirements captured in user stories
* Students will have the skills to enroll in Code 401 course or attain an entry-level website development job or internship by completing course requirements

#### Weeks 1-2
Students will construct and manage interactive, client side websites by creating and altering the Document Object Model through selection, traversal and manipulation

#### Weeks 3-4
Students will write a model layer in their applications that accesses and transforms persisted client-side data, conforming to common WRRC (web request-response cycle), FP (functional programming) and CRUD (create-read-update-delete) conventions

#### Weeks 5-6
Students will complete their MVC apps by:

* refactoring to a SPA (single page architecture) pattern with router and controller
* integrating 3rd party REST APIs to display external data
* deploying to a production environment (with provided custom server code)

#### Weeks 7-8
Project week.

### General Breakdown
* Tuesday are lecture days
* Thursdays are for labs
* Sunday will be a combination of lab/lecture
* Monday/Wednesday are for co-working. Instructors may or may not be present, but the expectation is you **will be here** for co-working days

## Intros
* Instructor
	- Ken bio
	- Cesar bio
* TAs
	- Sarah Joy
* Students
	- Background
	- What you expect to get out of this class

## Opening Talk
### Qualities to being a good programmer
* Iterative
   - do the smallest thing possible, see if it works
   - break large problems down into smaller ones
* Attention to detail
   - a single character can change the meaning of a line of code
   - know what every line of code is doing
   - eslint will help you
* Desire
   - this will keep you going
   - there will be lots of hard work and long hours - are you ready for it
* Professionalism
   - see Code of Conduct
   - also in preparation for a job in real world
* Tenacity
   - don't give up on a problem. Ever
   - every problem you solve on your own is a victory
* Acceptance of ambiguities
	- don't expect requirements or problem definition to be clear at the beginning
	- work with what you have. Iterate towards a goal
	- users may have issue determining requirements from a blank slate (screen). It's best to offer them something and then develop from there
* Engagement during class
	- Use your laptop only if it enhances your understanding of the lecture (coding, etc). Try and avoid random browsing, reading unrelated emails, chats, etc.
	- Try and be fully present during class
	- This class is what you make of it. Instructors and TAs are here as **guides**, but ultimately this is your journey
* Trade-offs
	- Do I make my site work better or faster? More functionality, or clean up code that I have
	- Ultimately, these trade offs are a personal choice. I have a tendency to make code clean and compact before anything else

## Slides
[CLASS 1 Agile and MVC](slides/Code 301 - Class 02 Slides Agile & MVC.pdf)

### Agile (from wikipedia)

The Agile Manifesto is based on twelve principles:

* Customer satisfaction by early and continuous delivery of valuable software
* Welcome changing requirements, even in late development
* Working software is delivered frequently (weeks rather than months)
* Close, daily cooperation between business people and developers
* Projects are built around motivated individuals, who should be trusted
* Face-to-face conversation is the best form of communication (co-location)
* Working software is the principal measure of progress
* Sustainable development, able to maintain a constant pace
* Continuous attention to technical excellence and good design
* Simplicity—the art of maximizing the amount of work not done—is essential
* Best architectures, requirements, and designs emerge from self-organizing teams
* Regularly, the team reflects on how to become more effective, and adjusts accordingly

## MVC (from wikipedia)

### Components

A typical collaboration of the MVC components.
* The central component of MVC, the model, captures the behavior of the application in terms of its problem domain, independent of the user interface.

* The model directly manages the data, logic and rules of the application.
* A view can be any output representation of information, such as a chart or a diagram. Multiple views of the same information are possible, such as a bar chart for management and a tabular view for accountants.
* The third part, the controller, accepts input and converts it to commands for the model or view.

### Interactions
In addition to dividing the application into three kinds of components, the model–view–controller design defines the interactions between them.

* A model stores data that is retrieved according to commands from the controller and displayed in the view.
* A view generates new output to the user based on changes in the model.
* A controller can send commands to the model to update the model's state (e.g. editing a document). It can also send commands to its associated view to change the view's presentation of the model (e.g. by scrolling through a document).

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

## Reading

* JS&jQ: pp 293-325 (Context: 293-301; Essential: 310-325; Reference: 302-309)

## Concepts

![Pairing](dilbert-pair-programming.gif)

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
