var fsResp, hpResp, ypResp, responsesReceived = 0;
var fFin = yFin = hFin = true;
function init(){
	//geolocate();
	
	$('#submit').click(function(){
		var query = $('#queryInput').val();
		go("40.760196","-73.982019", query);
	});
}

function go(lat, lng, query){
	var fsResp, hpResp, ypResp, responsesReceived = 0;

	responsesReceived = 0;
	
	var latlng = lat+","+lng;
	
	var fFin = yFin = hFin = false;

	var fs = new foursquare();
	fs.callJSON(latlng, query,  function(item){
		fsResp = item;
		console.log("f set");
		fFin = true;
		window.respond();
		
	});
	
	var yp = new yelp();
	yp.callJSON(query, lat, lng, function(item){
		ypResp = item;
		console.log("y set");
		yFin = true;
		window.respond();
	});
	
	var hp = new hyperPublic();
	hp.callJSON(query, function(item){
		hpResp = item;
		console.log("h set");
		hFin = true;
		window.respond();
	});
	
}

function respond(){
	console.log("Respond");
	responsesReceived++;
	if(responsesReceived == 3){
		var stats = new statistics();
		stats.getStatisticsDiv(ypResp, hpResp, fsResp);
	}
	
	
}