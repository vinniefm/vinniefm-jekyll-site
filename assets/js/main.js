var trackOutboundLink = function(url) {
   ga('send', 'event', 'outbound', 'click', url, {
     'hitCallback': function(){document.location = url;},
     'transport': 'beacon'
   });
}
var trackFileDownload = function(url) {
    ga('send', 'event', 'file-download', 'click', url, {
        'htCallback': function(){document.location = url;},
        'transport': 'beacon'
    });
}

if(screen.width > 1024) {
    var stickyMetaContact = new Waypoint.Sticky({
      element: $('.meta-contact')[0],
      stuckClass: 'stuck-meta-contact',
      offset: 0,
      handler: function(direction) {
            $("<style>")
            .prop("type", "text/css")
            .html("\
            .stuck-meta-contact {\
                display: block;\
                float: left;\
                position: fixed;\
                top: 0;\
                background-color: #f1f1f1;\
                width:" + $(".sticky-wrapper").width() + "px;\
            }")
            .appendTo("head");
        }
    })

    var stickyH3s = [];

    $('h3').each(function(i){
      stickyH3s[i] = new Waypoint.Sticky({
        element: this,
        offset: $('.stuck-meta-contact').outerHeight(true)+110,
        handler: function(direction) {
            $("<style>")
            .prop("type", "text/css")
            .html("\
            .stuck {\
                display: block;\
                float: left;\
                position: fixed;\
                top:" + $(".stuck-meta-contact").height() + "px;\
                background-color: #f1f1f1;\
                padding-bottom: .5rem;\
                padding-left: 20px;\
                margin-left: -20px;\
                margin-right: -40px;\
                width:" + ($(".sticky-wrapper").width()+40) + "px;\
                -webkit-box-shadow: 0px 20px 10px -15px rgba(136,136,136,0.5);\
                moz-box-shadow: 0px 20px 10px -15px rgba(136,136,136,0.5);\
                box-shadow: 0px 20px 10px -15px rgba(136,136,136,0.5);\
            }")
            .appendTo("head");
        }
      })
    })
}