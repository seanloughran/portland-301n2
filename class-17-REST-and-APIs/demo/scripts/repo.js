(function(module){
  var repos = {};


  repos.all = [];


  repos.requestRepos = function(callback) {
    $.ajax({
      url: 'https://api.github.com/user/repos?',
      type: 'GET',
      headers: {
        'Authorization' : 'token ' + githubtoken //You do not have this... it was specific to Ken.
      },
      success: function(data, message, xhr){
        console.log('success');
        repos.all = data;
      },
      error: function(data, message, xhr){
        console.log('inside fetchALL ajax error');
        console.log('ajax error', {xhr: xhr, status: status, error: error});
      },
    }).then(callback);

  };




  module.repo = repo;
})(window);
