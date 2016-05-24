
//project object constructor
function Project(opts) {
  this.title = opts.title;
  this.ghPagesUrl = opts.ghPagesUrl;
  this.linkTitle = opts.linkTitle;
  this.image = opts.image;
  this.description = opts.description;
}

Project.all = [];

//Clones project template from page, adds in information, and returns that grouped together.
Project.prototype.addProject = function() {
  var templateScript = $('#projectTemplate').html();
  var compiledTemplate = Handlebars.compile(templateScript);

  return compiledTemplate(this);
  console.log('Project added');

};


//Goes throuh projectData info and pushes to the articles array at the top of this page.
Project.localLoad = function(localSData) {
  localSData.forEach(function(projectRawObject) {
    Project.all.push(new Project(projectRawObject));
  });
};

Project.infoFetch = function() {
  if (localStorage.localSData) {

    Project.localLoad(JSON.parse(localStorage.getItem('localSData')));
    console.log('Local storage fetched.');
    projectView.initPrimaryPage();

  } else {
    $.ajax({
      type: 'GET',
      url: 'Data/projectData.json',
        success: function(data) {
          Project.localLoad(data);
          localStorage.setItem('localSData', JSON.stringify(data));
          projectView.initPrimaryPage();
          console.log(data);
        }
    });
    console.log('local storage created');
  }
};



//$('.template').hide();
