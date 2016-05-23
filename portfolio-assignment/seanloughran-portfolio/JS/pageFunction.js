var projectView = {};

//Functionality for home and about me tabs.
projectView.tabNavigation = function() {
  $('nav').on('click','li',function(){
    $('.tab-content').hide();
    $('body').find('[id="'+$(this).attr('data-content')+'"]').show();
  });

  $('nav .tab:first').click();
};

projectView.showMoreDescription = function() {

};



//miscellaneous Code


projectView.initPrimaryPage = function(){
  //Goes through project Array and appends them to the 'main' element
  Project.projectArray.forEach(function(a){
    $('main').append(a.addProject(a));
  });

  projectView.tabNavigation();
  projectView.showMoreDescription();
});
