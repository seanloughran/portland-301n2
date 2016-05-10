var navbutton = document.getElementById("buttonNav");
navbutton.addEventListener("click", showMenu);
function showMenu() {
  var div = document.getElementById("navDiv");
  if (div.style.display != "none") {
		div.style.display = "none";
	}
	else {
		div.style.display = "block";
	}
}

function Project (opts) {
  this.publishedOn = opts.publishedOn;
  this.author = opts.author;
  this.title = opts.title
}

Project.prototype.toHTML = function() {
  var $newProject = $('article.template').clone();

  $newProject.find('h1').html(this.title);

  $newProject.find('time').html('about ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago')
  $newProject.append('<hr>');


  $newProject.removeClass('template');
  return $newProject;
}
