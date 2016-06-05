(function(module){
  var repoView = {};

  repoView.getTemplate = function(callback, data){
    getTemplate('repoTemplate', data, callback);
  };

  var ui = function() { //Not attached to repoView makes this private
    var $about = $('#about');
    $about.find('ul').empty();
    $about.show().siblings().hide();
  };

  //repos.requestRepo(repoView.index)
  repoView.index = function() {
    ui();
    $('#about ul').append(
      repos.all.map(function(repo){
        this.getTemplate(repo);
      })
    );
  };

  module.repoView = repoView;
})(window);
