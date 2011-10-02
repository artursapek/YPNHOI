function foursquare(){
	this.callJSON = function(latlong, query, returnFunction){
		getDataScalar(latlong, query, returnFunction);
	};
	return this;
}
function getDataScalar(latlng, query, returnFunction){
	var response;
	jQuery.getJSON("https://api.foursquare.com/v2/venues/search?callback=?",
	{
		ll: latlng,
		query: query,
		client_id: "0EVHQJTRPV0ZWK4KISHGL3GIJJIEKIQQHYNTHO5ZEPETPXN2",
		client_secret: "BAYAUEQ3LAWJJZP5FTJLE2XWUNZGGGX0UM0OUQF510NZ1IZ5"
	},
	function(data){
		console.log(data);
		var items = data.response.groups[0].items;
		var found = false;
		for (item in items){
			if (sanitize(items[item].name) == sanitize(query)){
				returnFunction(items[item]);
				found = true;
				break;
			}
		}
		if(!found)
			returnFunction(null);
		
	});

}