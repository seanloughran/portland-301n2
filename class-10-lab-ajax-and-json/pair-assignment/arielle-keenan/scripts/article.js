function Article (opts) {
  this.author = opts.author;
  this.authorUrl = opts.authorUrl;
  this.title = opts.title;
  this.category = opts.category;
  this.body = opts.body;
  this.publishedOn = opts.publishedOn;
}

// DONE: Instead of a global `articles = []` array, let's track this list of all articles directly on the
// constructor function. Note: it is NOT on the prototype. In JavaScript, functions are themselves
// objects, which means we can add properties/values to them at any time. In this case, we have
// a key/value pair to track, that relates to ALL of the Article objects, so it does not belong on
// the prototype, as that would only be relevant to a single instantiated Article.
Article.all = [];

Article.prototype.toHtml = function() {
  var template = Handlebars.compile($('#article-template').text());

  this.daysAgo = parseInt((new Date() - new Date(this.publishedOn))/60/60/24/1000);
  this.publishStatus = this.publishedOn ? 'published ' + this.daysAgo + ' days ago' : '(draft)';
  this.body = marked(this.body);

  return template(this);
};

// DONE: There are some other functions that also relate to articles across the board, rather than
// just single instances. Object-oriented programming would call these "class-level" functions,
// that are relevant to the entire "class" of objects that are Articles.

// DONE: This function will take the rawData, how ever it is provided,
// and use it to instantiate all the articles. This code is moved from elsewhere, and
// encapsulated in a simply-named function for clarity.
Article.loadAll = function(rawData) {
  rawData.sort(function(a,b) {
    return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
  });

  rawData.forEach(function(ele) {
    Article.all.push(new Article(ele));
  })
}

// This function will retrieve the data from either a local or remote source,
// and process it, then hand off control to the View.
Article.fetchAll = function() {
  if (localStorage.rawData) {
    console.log("data is in localStorage")
    $.ajax({
      type: "HEAD",
      url: "../data/hackerIpsum.json",
      success: function(data, message, xhr){
        var etag = xhr.getResponseHeader('Etag');
          console.log(etag);
          var storedEtag = localStorage.getItem("etag");
          console.log(storedEtag);
          if (etag === storedEtag){
            console.log("The same!");
          } else {
            console.log("different!");
              $('#articles').empty();
              $.ajax({
                url: "../data/hackerIpsum.json",
                dataType: "json",
                success: function(data, message, xhr) {
                var etag = xhr.getResponseHeader('Etag');
                console.log(etag);
                // console.log(data);
                var articleData = data;
                Article.loadAll(articleData);
                //console.log(articleData);
                //console.log(Article.all);
                articleView.initIndexPage();
                localStorage.setItem("rawData", JSON.stringify(articleData));
                localStorage.setItem("etag" , etag);
              }
              });
          }
      }
    });
    // When rawData is already in localStorage,
    // we can load it by calling the .loadAll function,
    // and then render the index page (using the proper method on the articleView object).
    //DONE: What do we pass in here to the .loadAll function?
    var data = JSON.parse(localStorage.getItem("rawData"));
    Article.loadAll(data);
    articleView.initIndexPage(); //DONE: Change this fake method call to the correct one that will render the index page.
  } else {
    console.log("no data in localStorage");
    // TODO: When we don't already have the rawData, we need to:
    // 1. Retrieve the JSON file from the server with AJAX (which jQuery method is best for this?),
    // 2. Store the resulting JSON data with the .loadAll method,

    // 3. Cache it in localStorage so we can skip the server call next time,

    // 4. And then render the index page (perhaps with an articleView method?).
    //articleView.initIndexPage();
    $.ajax({
      url: "../data/hackerIpsum.json",
      dataType: "json",
      success: function(data, message, xhr) {
      var etag = xhr.getResponseHeader('Etag');
      console.log(etag);
      // console.log(data);
      var articleData = data;
      Article.loadAll(articleData);
      //console.log(articleData);
      //console.log(Article.all);
      articleView.initIndexPage();
      localStorage.setItem("rawData", JSON.stringify(articleData));
      localStorage.setItem("etag" , etag);
    }
    });
  }
}
