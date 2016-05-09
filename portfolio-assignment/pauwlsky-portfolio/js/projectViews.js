portfolioView = {};

portfolioView.populateFilters=function(){
  $.ajax({
    dataType: "json",
    url:"js/portfolioitems.json",
    success:function(data){
      data.forEach(function(item){
        console.log(item.title);
        var option = '<option val="' + item.title + '">' + item.title + '</option>';
        $('#skills-select').append(option);
      });
    }
  });
};

portfolioView.filterSelected = function(){
  $('#project-li').on('click', function(e){
    e.preventDefault();
    $('#about').hide();
    $('#project').fadeIn();
  });
  $('#about-li').on('click', function(e){
    e.preventDefault();
    $('#project').hide();
    $('#about').fadeIn();
  });
};

portfolioView.showSection = function(){

};

portfolioView.showMore = function(){

};

$(function(){
  portfolioView.filterSelected();
  portfolioView.populateFilters();

});
