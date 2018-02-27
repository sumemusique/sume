$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        userId: 'sumemusique',
        limit: 12,
        resolution: 'standard_resolution',
        accessToken: '6f497ea10bf74604ac9b39853ffe9f9e',
        sortBy: 'most-recent',
        template: '<div class="col-lg-3 instaimg"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });


    userFeed.run();

    
    // This will create a single gallery from all elements that have class "gallery-item"
    $('.gallery').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery: {
            enabled: true
        }
    });


});