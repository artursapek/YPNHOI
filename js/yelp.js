function yelp() {
		
	this.callJSON = function(query, latitude, longitude){
		var params = {term: query};
		params["lat"] = latitude || "40.735556";
		params["long"] = longitude || "-73.990556";
		params["ywsid"] = "ludeZjSOplQ4ldLstyoXWQ";
		console.log(params);
		jQuery.getJSON("http://api.yelp.com/business_review_search?callback=?",
 		params,
		function(data){
		//console.log(data);
			for (entry in data.businesses){
				if (data.businesses[entry].name == params["term"]){
					//console.log(data.businesses[entry].name, data.businesses[entry].url); 
					console.log(data.businesses[entry].review_count);
				}
			}
		})	
	};
	
	return this;
	
}
