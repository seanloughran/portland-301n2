(function(module) {
  var projectController = {};

  projectController.index = function() {
      $('#projects').show().siblings().hide();

      Project.infoFetch(projectView.initPrimaryPage);
  }

  module.projectController = projectController;
}) (window);
