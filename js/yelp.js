function yelp() {
		
	this.callJSON = function(query, latitude, longitude, returnFunction){
		var params = {term: query};
		params["lat"] = latitude || "40.735556";
		params["long"] = longitude || "-73.990556";
		params["ywsid"] = "f3C78wgr2sCdH3L9qCZ3ew";
		jQuery.getJSON("http://api.yelp.com/business_review_search?callback=?",
 		params,
		function(data){
			//for (entry in data.businesses){
				//if (data.businesses[entry].name == params["term"]){
					
					//console.log(data.businesses[entry].review_count);
				//}
			//}
			var found = false;
			var items = data.businesses;
			for (item in items){
				if(query == null)
					console.log("blag");
				if (sanitize(items[item].name) == sanitize(query)){
					returnFunction(items[item]);
					found = true;
					break;
				} else if (sanitize(items[item].name).indexOf(sanitize(query)) != -1){
				returnFunction(items[item]);
				found = true;
				break;
			}

			}
			if(!found)returnFunction(null);
		})	
	};
	
	return this;
	
}
