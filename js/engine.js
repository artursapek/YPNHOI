var fsResp, hpResp, ypResp, responsesReceived = 0;

function init(){
	geolocate();
	$('#submit').click(function(){
		var query = $('#queryInput').val();
		go(window.user.lat, window.user.lng, query);
	});
}

function go(lat, lng, query){
	responsesReceived = 0;
	var latlng = lat+","+lng;
	

	var fs = new foursquare();
	fs.callJSON(latlng, query,  function(item){
		
	});
	
	var yp = new yelp();
	yp.callJSON(query, lat, lng, function(item){
		
	});
	
	var hp = new hyperPublic();
	hp.callJSON(query, function(item){
	
	});
	
}

