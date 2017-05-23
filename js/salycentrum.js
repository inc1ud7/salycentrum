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
  var stropkov_centrum = {lat:49.1988201, lng:21.6530608};
  var stropkov_zahradne = {lat:49.2110125, lng:21.6475753};
  var svidnik = {lat: 49.3036425, lng:21.5743967};
  var bardejov = {lat: 49.3049399, lng:21.2880793};
  var raslavice = {lat: 49.149816, lng: 21.315665};
  var markers = [stropkov_centrum, stropkov_zahradne, svidnik, bardejov, raslavice];
  var center = {lat:49.2490132, lng:21.4166425};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: center,
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

  var icon = {
    url: 'img/ICON_maps_V3.png',
    scaledSize: new google.maps.Size(30,50)
  };
  for (i = 0; i <= 4; i++) {
    var marker = new google.maps.Marker({
      position: markers[i],
      map: map,
      icon : icon
    });
  }

};
