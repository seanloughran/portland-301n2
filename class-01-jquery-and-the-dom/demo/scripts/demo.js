
$(function(){
 var $myTemplate = $('#my-template').clone();
 console.log($myTemplate);
 $('main').append($myTemplate);
 $myTemplate.find('li:last a').attr('href', 'https://twitter.com/kpwellsy');
});
