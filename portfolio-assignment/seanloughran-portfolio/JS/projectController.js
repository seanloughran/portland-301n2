(function(module) {
  var projectController = {};

  projectController.index = function() {
    $('#projects').show();
    $('#home').hide();

    jsonPull.infoGrab(projectView.initPrimaryPage);
  };

  module.projectController = projectController;
}) (window);
