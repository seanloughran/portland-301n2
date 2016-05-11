var projectView = {};

// create tab views of content in #projects and #about
projectView.handleMainNav = function() {
  $('.mainNav').on('click', 'li', function() {
    $('.page-content').hide();
    $('main').find('[id="'+$(this).attr('data-section')+'"]').show();
  });
  $('.topNav .tab:first').click();
};

// TODO: fix read more function
// projectView.createTeaser = function() {
//   // $('.projDescription').hide();
//   // $('.read-on').on('click', function(event) {
//   //   event.preventDefault();
//   //   $(this).prev().show();
//   //   $(this).hide();
//   // });
// };

//call the functions
$(document).ready(function() {
  projectView.handleMainNav();
  // projectView.createTeaser();
});
