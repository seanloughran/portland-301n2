console.log (Projects);

// NOTE: MOST OF THE FUNCTIONS AND JQUERY STRUCTURE THAT I USED ARE HEAVILY
// BASED-ON THE PAIR-PROGRAMMING PROJECT TEMPLATE. I REWROTE ALL OF IT BY HAND TO LEARN,
// OMITTED ELEMENTS NOT NECESSARY TO THIS PORTFOLIO, ALTERED MOST NAMING SYSTEMS
// AS WELL AS ADDED NEW ELEMENTS AND PROPERTIES AS NEEDED.

var subsections = [];

function Projects (input) {
  this.title = input.title;
  this.role = input.role;
  this.projectUrl = input.projectUrl;
  this.completionDate = input.completionDate;
  this.body = input.body;

}

Projects.prototype.toHtml = function() {
  var $newProject = $('article.template').clone();

  $newProject.find('h1').html(this.title);
  $newProject.find('address a').html(this.role);
  $newProject.find('.project-body').html(this.body);
  $newProject.find('time').html(this.completionDate);
  //
  $newProject.find('time[pubdate]').attr('title', this.completionDate);
  //
  $newProject.find('time').html(parseInt((new Date() - new Date(this.completionDate))/60/60/24/1000) + ' days ago');
  // The date jquery above I left intact.... not sure how to change in a way to make it original

//$newProject.removeClass('template')
  return $newProject;
};

myProjects.forEach(function(i) {
  subsections.push(new Projects(i));
});

subsections.forEach(function(a){
  $('#projects').append(a.toHtml());
});
