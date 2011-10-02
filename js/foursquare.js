function foursquare(){
	this.callJSON = function(latlong, query, func){
		getDataScalar(latlong, query, func);
	};
	return this;
}
function getDataScalar(latlong, name, func){
	var response;
	jQuery.getJSON("https://api.foursquare.com/v2/venues/search?callback=?",
	{
		intent: "match",
		ll: latlong,
		query: name,
		client_id: "0EVHQJTRPV0ZWK4KISHGL3GIJJIEKIQQHYNTHO5ZEPETPXN2",
		client_secret: "BAYAUEQ3LAWJJZP5FTJLE2XWUNZGGGX0UM0OUQF510NZ1IZ5"
	},
	function(data){
		var items = data.response.groups[0].items;
		func(items[0]);
	});
	
}