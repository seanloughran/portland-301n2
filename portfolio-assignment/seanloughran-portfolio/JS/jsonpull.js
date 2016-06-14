(function(module) {

  jsonPull = {};
  //project object constructor
  function jdataProject(opts) {
    this.title = opts.title;
    this.ghPagesUrl = opts.ghPagesUrl;
    this.linkTitle = opts.linkTitle;
    this.image = opts.image;
    this.description = opts.description;
  }

  jsonPull.all = [];

  //Clones project template from page, adds in information, and returns that grouped together.
  // Project.prototype.addProject = function() {
  //   var templateScript = $('#projectTemplate').html();
  //   var compiledTemplate = Handlebars.compile(templateScript);
  //
  //   return compiledTemplate(this);
  //   console.log('Handlebars template compiled');
  //
  // };


  //Goes through projectData info and maps each created Project to the Project.all array.
  jsonPull.localLoad = function(localSData) {
    // Commented is old code... the map function does the same thing.
    // localSData.forEach(function(projectRawObject) {
    //   jdataProject.all.push(new Project(projectRawObject));
    // });
    jsonPull.all = localSData.map(function(projectRawObject) {
      console.log('Json data mapped');
      return new jdataProject(projectRawObject);
    });
  };

  //Checks local storage for stored json data. If nothing found makes an
  // ajax call to pull JSON data from projectData.json.
  jsonPull.infoGrab = function(callback) {
    if (localStorage.localSData) {

      jsonPull.localLoad(JSON.parse(localStorage.getItem('localSData')));
      console.log('Local storage fetched.');
      projectView.initPrimaryPage();

    } else {

      $.getJSON('Data/projectData.json', function(data) {
        jsonPull.localLoad(data);
        localStorage.setItem('localSData', JSON.stringify(data)); // Pushes pull data to local storage.
        projectView.initPrimaryPage();
      });
      // $.ajax({
      //   type: 'GET',
      //   url: 'https://api.github.com/users/seanloughran/repos',
      //   headers: {
      //     'Authorization' : 'token ' + repoToken
      //   },
      //   success: function(data) {
      //     Project.all = data;
      //     //Project.localLoad(data);
      //     //localStorage.setItem('localSData', JSON.stringify(data)); // Pushes pull data to local storage.
      //     projectView.initPrimaryPage();
      //     console.log(data);
      //   },
      //   error: function(xhr, status, error) {
      //     console.log('ajax error');
      //   },
      // }).then(callback);
      // //   console.log('local storage created');
      // // }
    }
  };


  //$('.template').hide();
  module.jsonPull = jsonPull;
}) (window);
