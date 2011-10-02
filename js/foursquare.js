function foursquare(){
	this.callJSON = function(latlong, query){
		getDataScalar(latlong, query);
	};
	return this;
}


function init(){
	$("#submit").click(function(){
		var fs = new foursquare();
		var item = fs.callJSON("40.768853,-73.967792", "Creed");
		
	});
}
function getDataScalar(latlong, name){
console.log(latlong, name);
	jQuery.getJSON("https://api.foursquare.com/v2/venues/search?callback=?",
	{
		intent: "match",
		ll: latlong,
		query: name,
		client_id: "0EVHQJTRPV0ZWK4KISHGL3GIJJIEKIQQHYNTHO5ZEPETPXN2",
		client_secret: "BAYAUEQ3LAWJJZP5FTJLE2XWUNZGGGX0UM0OUQF510NZ1IZ5"
	},
	function(data){
		var items = data.response.groups[0].items[0].name;
		
	});
	
}