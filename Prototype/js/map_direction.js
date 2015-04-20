//MAP DIRECTION FROM DAVIS CAMPUS TO OACETT - HARDCODED WHEN STARTING//
//---------------------------------------------------------------------------//
       var display, service = new google.maps.DirectionsService(), map;
		 // object used for calculating directions by a variety of methods of transportation
		
		// initialize page when loads			
      $(document).ready(function() {
         initialize();
      });
			
  function initialize() {
	display = new google.maps.DirectionsRenderer();				
	// Display map area
	mapdavis = new google.maps.LatLng(43.656631, -79.740370);
	mapOACETT = new google.maps.LatLng(43.647370, -79.561620);
	
	var mapOptions = {
		zoom : 15,
		mapTypeId : google.maps.MapTypeId.ROADMAP,
		center : mapOACETT
	}
	
	map1 =
		new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
	
	//add markers for Sheridan and OACETT
	var startFrom = new google.maps.Marker ({
		map : map1,
		position : mapdavis
	});			
	var endAt = new google.maps.Marker ({
		map : map1,
		position : mapOACETT
	});				
	
	display.setMap(map);
	display.setPanel(document.getElementById("directions")); 
  }
		
//---------------------------------------------------------------------------

  $(document).on('click', '#submit', function(e) {
	calculateRoute();
  });

  function calculateRoute() {
	var selectedMode = $("#mode").val(),
		start = $("#from").val(),
		end = $("#to").val();						
		// From entry fields

	if (start == '' || end == '') {
	  // cannot calculate route - empty field
	  $("#results").hide();
	  return;
	}
	else {
		// Display directions based on data entry
		var request = {
			origin : start,
			destination : end,
			travelMode : google.maps.DirectionsTravelMode[selectedMode]
		}
		service.route(request, function(response, status) {
			if (status == google.maps.DirectionsStatus.OK) {
				display.setDirections(response);
				$("#results").show();
			}
			else {$("#results").hide();}
		});
	}
}
//---------------------------------------------------------------------------//