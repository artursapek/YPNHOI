function foursquare(){
	this.callJSON = function(latlong, query){
		getDataScalar(latlong, query);
	};
	return this;
}
function getDataScalar(latlng, query){
	var response;
	jQuery.getJSON("https://api.foursquare.com/v2/venues/search?callback=?",
	{
		intent: "match",
		ll: latlng,
		query: name,
		client_id: "0EVHQJTRPV0ZWK4KISHGL3GIJJIEKIQQHYNTHO5ZEPETPXN2",
		client_secret: "BAYAUEQ3LAWJJZP5FTJLE2XWUNZGGGX0UM0OUQF510NZ1IZ5"
	},
	function(data){
		console.log(data);
		var items = data.response.groups[0].items;
		for (item in items){
			if (sanitize(items[item].name) == sanitize(query)){
				console.log(items[item]);
			}
		}		
	});
	
}