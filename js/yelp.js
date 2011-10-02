function yelp() {
		
	this.callJSON = function(query, latitude, longitude, func){
		var params = {term: query};
		params["lat"] = latitude || "40.735556";
		params["long"] = longitude || "-73.990556";
		params["ywsid"] = "ludeZjSOplQ4ldLstyoXWQ";
		console.log(params);
		jQuery.getJSON("http://api.yelp.com/business_review_search?callback=?",
 		params,
		function(data){
			//for (entry in data.businesses){
				//if (data.businesses[entry].name == params["term"]){
					
					//console.log(data.businesses[entry].review_count);
				//}
			//}
			func(data.businesses[0]);
		})	
	};
	
	return this;
	
}
