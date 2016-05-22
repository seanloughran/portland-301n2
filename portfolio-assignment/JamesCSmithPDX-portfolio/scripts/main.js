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

// build a blog post
Project.prototype.toHtml = function() {
  //get the template
  var portfolioScript = $('#portfolio-template').html();

  //compile the portfolio
  var thePortfolio = Handlebars.compile(portfolioScript);

  //calculate the posted days ago amount
  this.daysAgo = parseInt((new Date() - new Date(this.postDate))/60/60/24/1000);
  this.publishStatus = this.postDate ? 'published ' + this.daysAgo + ' days ago' : '(draft)';

//return post to toHtml function
  return thePortfolio(this);
};

//sort blog data, crereate array, append to page
projectData.sort(function(a,b) {
  return (new Date(b.postDate)) - (new Date(a.postDate));
});  //sort by date

projectData.forEach(function(el) {
  projects.push(new Project(el));
});  //create array

projects.forEach(function(a){
  $('#projects').append(a.toHtml());
});
