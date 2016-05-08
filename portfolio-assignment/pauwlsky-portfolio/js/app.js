$(function(){

  var Project = function(title, date, img, video, text, skills, url) {
    this.title = title;
    this.date = date;
    this.img = img;
    this.video = video;
    this.text = text;
    this.skills = skills;
    this.url = url;
  };

  Project.prototype.toHtml = function(){
    var that = this;
    var $projectArticle = $('.project').clone();
    $projectArticle.find('.days-ago').html('Created about ' + parseInt((new Date() - new Date(this.date))/60/60/24/1000) + ' days ago');
    var $title = $projectArticle.find('.title');
    var $image = $projectArticle.find('.image');
    var $date = $projectArticle.find('.date');
    var $text = $projectArticle.find('.text');
    var $skillsGithub = $projectArticle.find('.skillsGithub');
    var $skills = $projectArticle.find('.skills');
    $title.html(this.title);
    $image.attr('src', this.img);
    $date.html(this.date);
    $text.html(this.text);
    $skillsGithub.find('a').attr('href', this.url);
    $skills.html(this.skills);
    $('#project').append($projectArticle);
    $projectArticle.find('.url-text').html(this.url);
    $projectArticle.removeClass('project');
    if($projectArticle.prev('article').find('.title-date').hasClass('text-left')){
      $projectArticle.find('.title-date').removeClass('text-left').addClass('text-right');
      $image.removeClass('image-left').addClass('image-right');
      $projectArticle.find('.demo').addClass('text-right');
      $skillsGithub.removeClass('text-right').addClass('text-left');
    }
    $projectArticle.find('.modal-show').on('click', function(e){
      e.preventDefault();
      $('.modal').css('display', 'block');
      $('.modal-content').append('<video width="1200" height="500" autoplay>' +
        '<source src="' + that.video + '"type="video/mp4">' + '</video>');
    });
  };

  $('.modal').on('click', function(e) {
        $(this).css('display', 'none');
        $('.modal-content').empty();
  });

  $.ajax({
    dataType: "json",
    url:"js/portfolioitems.json",
    success:function(data){
      data.sort(function(a,b){
        return (new Date(b.date)) - (new Date(a.date));
      });
      data.forEach(function(item){
        var project = new Project(item.title, item.date, item.img, item.video, item.text, item.skills, item.url);
        project.toHtml();
      });
      $('.project').remove();
    }
  });
});
