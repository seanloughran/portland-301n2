var sites= [];

function Site (option) {
  this.siteName = option.siteName;
  this.siteURL = option.siteURL;
  this.sitePhoto = option.sitePhoto;
  this.client = option.client;
  this.overview = option.overview;
  this.sitePhotoSrc = option.sitePhotoSrc;
}

Site.prototype.toHtml = function() {
  var $newSite = $('site.template').clone();

  $newSite.find('a').html(this.siteName);
  $newSite.find('a').attr('href', this.siteURL);
  $newSite.find('h3').html(this.client);
  $newSite.find('p').html(this.overview);
  $newSite.find('img').html(this.sitePhoto);
  $newSite.find('img').attr('src', this.sitePhotoSrc);

  $newSite.removeClass('template');
  return $newSite;
}

rawData.forEach(function(el) {
  sites.push(new Site(el));
})

sites.forEach(function(a){
  $('#sites').append(a.toHtml())
});
