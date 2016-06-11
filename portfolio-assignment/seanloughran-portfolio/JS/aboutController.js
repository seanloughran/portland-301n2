(function(module) {
  var aboutController = {};

  aboutController.index = function() {
    $('#home').show().siblings().hide();
  }

  module.aboutController = aboutController;
}) (window);
