var controller = new ScrollMagic.Controller();

controller.scrollTo(function(newpos){
	TweenMax.to(window, 0.5, {scrollTo: {y: newpos-200}});
});
$(document).on("click", "a[href^='#']", function (e) {
		var id = $(this).attr("href");
		if ($(id).length > 0) {
			e.preventDefault();

			// trigger scroll
			controller.scrollTo(id);

				// if supported by the browser we can even update the URL.
			if (window.history && window.history.pushState) {
				history.pushState("", document.title, id);
			}
		}
	});












//collapse the navbar
	$('document').ready(function(){
		function collapseNavbar() {
    		if ($(".navbar").offset().top > 50) {
        		$(".navbar-fixed-top").addClass("top-nav-collapse");
    		} else {
        		$(".navbar-fixed-top").removeClass("top-nav-collapse");
    		}
		}
		$(window).scroll(collapseNavbar);
		$(document).ready(collapseNavbar);
	})
		
//map
	var myStyles =[
            {   
                featureType: "poi",
                stylers: 
                [
					{hue: "#00FF6A"},
					{saturation: "-1.1"},
					{lightness: "11.2"},
					{gamma: "1"}
                ]
			},
			{
				featureType: "poi",
				elementType: "labels",
				stylers: 
                [
                 	{visibility: "off" }
				]
			},
			{
				featureType: "landscape",
				elementType: "geometry",
				stylers:
				[
					{saturation: "-100"}
				]
            },
			{
				featureType: "water",
				stylers:
				[
					{hue: "#0078FF"},
					{saturation: "-8"},
					{lightness: "2.4"},
					{gamma: "1"}
				]
			},
			{
				featureType:"road",
				stylers:
				[
					{hue: "#FFC200"},
					{saturation: "-61.8"},
					{lightness: "45.6"},
					{gamma: "1"}
				]
			},
			{
				featureType:"administrative.country",
				stylers:
				[
					{saturation: "-13"},
					{lightness: "40"}
				]
			}
        ];
        var bdintex = {lat: 43.98858262, lng: 22.85632476};
       
     
      function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          center: bdintex,
          disableDefaultUI: true,
          zoom: 6,
          minZoom: 4,
          draggable: false,
          streetViewControl: false,
          mapTypeControl: false,
          scrollwheel: false,
          disableDoubleClickZoom: true,
          zoomControl: true,
          zoomControlOptions: {
          	position: google.maps.ControlPosition.BOTTOM_CENTER,
          	style: google.maps.ZoomControlStyle.LARGE
          },
          styles: myStyles
        });
        var marker = new google.maps.Marker({
          position: bdintex,
          map: map
        });
      	google.maps.event.addDomListener(window, 'resize', function(){
      		map.setCenter(bdintex);
      	});
      }