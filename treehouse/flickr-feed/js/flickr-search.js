$(document).ready(function() {
  $('form').submit(function(evt){
    evt.preventDefault();
    var $queryTerm = $('#search');
    var submitButton = $('#submit');
    $queryTerm.prop("disabled", true);
    submitButton.attr("disabled", true).val("searching...");
    var flickrAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    var flickrOptions = {
      tags: $queryTerm.val(),
      format: "json"
    };
    function displayPhotos(data) {
      var photoHTML = '<ul>';
      $.each(data.items, function(i, photo){
        //console.log(data.items.length);
        if(data.items.length < 1){
          console.log(data.items.length);
          photoHTML += '<li class="grid-25 tablet-grid-50">';
            photoHTML += 'Sorry, no Flickr photos match search: ' + $queryTerm;
            photoHTML += '</li>';
        } else {
          console.log(data.items.length);
          photoHTML += '<li class="grid-25 tablet-grid-50">';
            photoHTML += '<a href="' + photo.link + '" class="image">';
            photoHTML += '<img src="' + photo.media.m + '></a></li>';
        }
      });
      photoHTML += '</ul>';
      $('#photos').html(photoHTML);
      $queryTerm.prop("disabled", false);
      submitButton.attr("disabled", false).val("Search");
    }
    $.getJSON(flickrAPI, flickrOptions, displayPhotos);
  
  }); // end form.submit
 
}); // end ready