function yelp() {
		
	this.callJSON = function(query, latitude, longitude){
		var params = {term: query};
		params["lat"] = latitude || "40.735556";
		params["long"] = longitude || "-73.990556";
		params["ywsid"] = "ludeZjSOplQ4ldLstyoXWQ";
		jQuery.getJSON("http://api.yelp.com/business_review_search?callback=?",
 		params,
		function(data){
			//for (entry in data.businesses){
				//if (data.businesses[entry].name == params["term"]){
					
					//console.log(data.businesses[entry].review_count);
				//}
			//}
			var items = data.businesses;
			for (item in items){
			if (sanitize(items[item].name) == sanitize(query)){
				console.log(items[item]);
			}
		}
		})	
	};
	
	return this;
	
}
