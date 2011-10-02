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
	var fsResp, hpResp, ypResp, currentAddress, responsesReceived = 0;
	console.log("Running go");
	var latlng = lat+","+lng;
	
	var fFin = yFin = hFin = false;

	var fs = new foursquare();
	fs.callJSON(latlng, query,  function(item){
		if(fFin) return;
		window.fsResp = item;
		console.log(item);
		fFin = true;
		window.respond();
	});
	
	var yp = new yelp();
	yp.callJSON(query, lat, lng, function(item){
		if(yFin) return;
		window.ypResp = item;
		console.log(item);
		yFin = true;
		window.respond();
	});
	
	var hp = new hyperPublic();
	hp.callJSON(query, function(item){
		if(hFin) return;
		window.hpResp = item;
		console.log(item);
		hFin = true;
		window.respond();
	});
	
}

function respond(){
	responsesReceived++;
	if(responsesReceived == 3){
		console.log("Done loading."), responsesReceived = 0;
		var stats = new statistics();
		$("#view .loading").hide();
		if (hpResp) $("#view h2.venue-title").text(hpResp.name) || "name not found";
		if (ypResp) $("#view .stats .yelp-reviews .number").text(ypResp.review_count) || 0;
		if (fsResp) $("#view .stats .foursquare-check-ins .number").text(fsResp.stats.checkinsCount) || 0;
		if (fsResp) $("#view .stats .foursquare-users .number").text(fsResp.stats.usersCount) || 0;
		$("#view .loaded").fadeIn();
		stats.getStatisticsDiv(ypResp, hpResp, fsResp);
	}
	
	
}
