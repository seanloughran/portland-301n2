(function(module){
  var repoView = {};

  repoView.getTemplate = function(data, callback){
<<<<<<< HEAD
    getTemplate('repo-template', data, callback);
=======
<<<<<<< HEAD
    getTemplate('repo-template', data, callback);
=======
    getTemplate('repoTemplate', data, callback);
>>>>>>> 12d3a951f7d27ec84ed027b0e774b9f494f93036
>>>>>>> 03e87effd900d8eafbc21e7225b273e2ccbc29c2
  };

  var ui = function(){
    var $about = $('#about');
    $about.find('ul').empty();
    $about.show().siblings().hide();
  };

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
  // repos.requestRepos(repoView.index)
>>>>>>> 12d3a951f7d27ec84ed027b0e774b9f494f93036
>>>>>>> 03e87effd900d8eafbc21e7225b273e2ccbc29c2
  repoView.index = function(){
    ui();

    repos.all.map(function(repo){
      repoView.getTemplate(repo, function(html){
        $('#about ul').append(html);
      });
    });
  };

  module.repoView = repoView;
})(window);