var responsesReceived = 0;

var fsResp, hpResp, ypResp;

function init(){
	$('#submit').click(function(){
		go();
	});
}

function go(){
	responsesReceived = 0;
	
	var lat = "40.768853"
	var log = "-73.967792";
	var latlong = lat+","+log;
	var query = "Creed";

	var fs = new foursquare();
	fs.callJSON(latlong, query,  function(item){
		fsResp = item;
		window.respond();
	});
	
	var yp = new yelp();
	yp.callJSON(query, lat, log, function(item){
		ypResp = item;
		window.respond();
	});
	
	var hp = new hyperPublic();
	hp.callJSON(query, function(item){
		hpResp = item;
		window.respond();
	});
	
}

function respond(){
	responsesReceived++;
	//console.log(fsResp, ypResp, hpResp);
	if(responsesReceived == 3){ //we've got em all
		console.log("Yar");
	}
}