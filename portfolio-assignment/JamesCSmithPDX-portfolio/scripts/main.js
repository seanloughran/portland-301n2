var projects=[];

// Contructor for new portfolio project
function Project (post) {
  this.title = post.title; //name of project
  this.projectType = post.projectType; //project category
  this.contributor = post.contributor;
  this.contributorUrl = post.contributorUrl;
  this.postDate = post.postDate;
  this.imgSrc = post.imgSrc;
  this.imgAlt = post.imgAlt;
  this.projDescription = post.projDescription;
};

Project.prototype.toHtml = function() {
  var $newProject = $('article.template').clone();  //clone project template

  $newProject.find('h2').text(this.title); // add the title
  $newProject.attr('data-category', this.projectType); // set project type category

  $newProject.find('address > a').html(this.contributor); // add contributors to link
  $newProject.find('address > a').attr('href', this.contributorUrl); // add github url

  $newProject.find('time[pubdate]').attr('title', this.postDate); // add title hover

  $newProject.find('time').html('Posted ' + parseInt((new Date() - new Date(this.postDate))/60/60/24/1000) + ' days ago'); //calculte days since posting

  $newProject.find('img').attr('src', this.imgSrc).attr('alt', this.imgAlt); //add screenshot of project

  $newProject.find('section.projDescription').html(this.projDescription);

  // $newProject.append('<hr>'); // page break
  $newProject.removeClass('template'); //not a template now

  return $newProject;
};

projectData.sort(function(a,b) {
  return (new Date(b.postDate)) - (new Date(a.postDate));
});  //sort by date

projectData.forEach(function(el) {
  projects.push(new Project(el));
});  //create array

projects.forEach(function(a){
  $('#projects').append(a.toHtml());
});
