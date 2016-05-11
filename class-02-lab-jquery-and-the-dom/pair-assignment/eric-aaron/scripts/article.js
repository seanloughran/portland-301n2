console.log();

var articles = [];

function Article (opts) {
  // TODO: Use the js object passed in to complete this contructor function:
  // Save ALL the properties of `opts` into `this`.
  this.author = opts.author;
  this.title = opts.title;
  this.publishedOn = opts.publishedOn;
  this.authorUrl = opts.authorUrl;
  this.body = opts.body;
  this.category = opts.category;

}

Article.prototype.toHtml = function() {
  var $newArticle = $('article.template').clone();

  $newArticle.attr('data-category', this.category)
  $newArticle.find('h1').html(this.title);
  $newArticle.find('a').html(this.author);
  $newArticle.find('a').attr("href", this.authorUrl);
  $newArticle.find('.article-body').html(this.body);
  $newArticle.find('time').html(this.publishedOn);

  // TODO: Use jQuery to fill in the template with properties
  // from this particular Article instance. We need to fill in:
  // the author name and url, the article title and body, and the
  // publication date.
  //$newArticle.attr('pubdate datetime', this.publishedOn);
  //$newArticle.attr('href', this.author);
  // $newArticle.attr('', this.body);
  // $newArticle.attr('', this.authorUrl);
  // $newArticle.attr('', this.title);

  // Include the publication date as a 'title' attribute to show on hover:
  $newArticle.find('time[pubdate]').attr('title', this.publishedOn)

  // Display the date as a relative number of "days ago":
  $newArticle.find('time').html('about ' + parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000) + ' days ago')

  $newArticle.append('<hr>');

  // TODO: This cloned article is no longer a template, so we should remove that class...
  $newArticle.removeClass('template')
  return $newArticle;
}

rawData.sort(function(a,b) {
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

rawData.forEach(function(ele) {
  articles.push(new Article(ele));
})

articles.forEach(function(a){
  $('#articles').append(a.toHtml())
});
