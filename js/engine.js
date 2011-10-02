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
		if(fFin) return;
		window.fsResp = item;
		console.log("f set"+item);
		fFin = true;
		window.respond();
		
	});
	
	var yp = new yelp();
	yp.callJSON(query, lat, lng, function(item){
		if(yFin) return;
		window.ypResp = item;
		console.log("y set"+item);
		yFin = true;
		window.respond();
	});
	
	var hp = new hyperPublic();
	hp.callJSON(query, function(item){
		if(hFin) return;
		window.hpResp = item;
		console.log("h set"+item);
		hFin = true;
		window.respond();
	});
	
}

function respond(){
	console.log("Respond");
	responsesReceived++;
	if(responsesReceived == 3){
		var stats = new statistics();
		stats.getStatisticsDiv(window.ypResp, window.hpResp, window.fsResp);
	}
	
	
}