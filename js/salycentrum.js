/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('body').on('click', '.page-scroll a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

function initMap() {
  var uluru = {lat: 49.1988454, lng: 21.6530733};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 18,
    center: uluru,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    disableDefaultUI: true,
    styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#cccccc"}]},
    {"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#999999"}]},
    {"featureType":"road","elementType":"geometry","stylers":[{"color":"#999999"},{"lightness":-37}]},
    {"featureType":"poi","elementType":"geometry","stylers":[{"color":"#666666"}]},
    {"featureType":"transit","elementType":"geometry","stylers":[{"color":"#009999"}]},
    {"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},
    {"color":"#3e606f"},{"weight":2},{"gamma":0.84}]},{"elementType":"labels.text.fill","stylers":[{"color":"#ffffff"}]},
    {"featureType":"administrative","elementType":"geometry","stylers":[{"weight":0.6},{"color":"#1a3541"}]},
    {"elementType":"labels.icon","stylers":[{"visibility":"on"}]},
    {"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#666666"}]}]
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
};
