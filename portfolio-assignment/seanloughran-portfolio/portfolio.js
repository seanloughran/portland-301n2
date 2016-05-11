// Begin Section populating project information

function Project(title, ghPagesUrl, linkTitle, image, description) {
  this.title = title;
  this.ghPagesUrl = ghPagesUrl;
  this.linkTitle = linkTitle;
  this.image = image;
  this.description = description;
}

var cookiestore = new Project("Portland Cookie Store Project", "http://seanloughran.github.io/cookie-store/", "Cookie Store", "Images/cookiestore.png", "Will add description later.");
var class201FinalProject = new Project("Bcykleta Bicycle Store - 201 Final Project", "http://seanloughran.github.io/bcykleta/", "Bcykleta", "Images/bcykleta.png", "Will add description later.");

var projectArray = [cookiestore, class201FinalProject];

Project.prototype.addProject = function(project) {
  var $newProject = $('article.template').clone();
  $newProject.removeClass('template');
  $newProject.find('.project_title').html(this.title);
  $newProject.find('.project_url').attr('href', this.ghPagesUrl);
  $newProject.find('.project_picture').attr('src', this.image);
  $newProject.find('.project_description').html(this.description);
  return $newProject;
}

projectArray.forEach(function(a){
  $('main').append(a.addProject(a))
});

$('.template').hide();


// Begin Section handling navigation tabs

var projectView = {};

projectView.
