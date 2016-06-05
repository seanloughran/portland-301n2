(function(module) {
  var repos = {};

  repos.all = [];

  repos.requestRepos = function(callback) {
    // DONE: How would you like to fetch your repos? Don't forget to call the callback.
    $.ajax({
      type: 'GET',
      url: 'https://api.github.com/user/repos',
      header: {
        'Authorization' : 'token ' + githubToken
      },
      success: function(data, message, xhr) {
        repo.all = data;
      },
      error: function(xhr, status, error) {
        console.log('ajax error', {xhr: xhr, status: status, error: error});
      },
    }).then(callback);
  };

  // DONE: Model method that filters the full collection for repos with a particular attribute.
  // You could use this to filter all repos that have a non-zero `forks_count`, `stargazers_count`, or `watchers_count`.
  repos.with = function(attr) {
    return repos.all.filter(function(repo) {
      return repo[attr];
    });
  };

  module.repos = repos;
})(window);
