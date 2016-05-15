var articles = [];

function Article (opts) {
  this.author = opts.author;
  this.authorUrl = opts.authorUrl;
  this.title = opts.title;
  this.category = opts.category;
  this.body = opts.body;
  this.publishedOn = opts.publishedOn;
}

Article.prototype.toHtml = function() {
<<<<<<< HEAD
  // CRJ: Use handlebars to render your articles.
  //       - Get your template from the DOM.
  //       - Now "compile" your template with Handlebars.
  var source   = $("#entry-template").html();
  var template = Handlebars.compile(source);

=======
  // DONE: Use handlebars to render your articles.
  //       - Get your template from the DOM.
  //       - Now "compile" your template with Handlebars.
  var appTemplate = $('#article-template').html()
  var compiledTemplate = Handlebars.compile(appTemplate);
>>>>>>> a1ada185c68c736deb9f263d2891571b930f503a

  // DONE: If your template will use properties that aren't on the object yet, add them.
  //   Since your template can't hold any JS logic, we need to execute the logic here.
  //   The result is added to the object as a new property, which can then be referenced by key in the template.
  //   For example, you might want to display how old a post is, or say "(draft)" if it has no publication date:
  this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
  this.publishStatus = this.publishedOn ? 'published ' + this.daysAgo + ' days ago' : '(draft)';

<<<<<<< HEAD
  // TODO: Use the function that Handlebars gave you to return your filled-in html template for THIS article.
  return template(this);
=======
  // DONE: Use the function that Handlebars gave you to return your filled-in html template for THIS article.
  return compiledTemplate(this);

>>>>>>> a1ada185c68c736deb9f263d2891571b930f503a
};

rawData.sort(function(a,b) {
  return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
});

rawData.forEach(function(ele) {
  articles.push(new Article(ele));
<<<<<<< HEAD
});
=======
})
>>>>>>> a1ada185c68c736deb9f263d2891571b930f503a

articles.forEach(function(a){
  $('#articles').append(a.toHtml())
});
