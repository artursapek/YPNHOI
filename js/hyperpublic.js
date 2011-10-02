//
// hyperPublic object 
// Artur Sapek
//

function hyperPublic(){
	this.API = "hyperPublic API: http://developer.hyperpublic.com/places/";
	this.callJSON = function(query, returnFunction){
		var params = {q: query};
		params["client_id"] = "6ZoMqEsQLKisS4C6ZpX65HegIA1tBpttT5vK39dB";
		params["client_secret"] = "qIKbAlT0osj4C8U3WC5HZMPN7cwnF4MFoAuoz5Hb";
		params["address"] = "13%20W%203rd%20St%20New%20York,NY";
		params["limit"] = 50;
		jQuery.getJSON("https://api.hyperpublic.com/api/v1/places?callback=?",
 		params,
		function(data){
			//for (entry in data){
				//if (data[entry].display_name == params["q"]){
					
					//console.log(data[entry].display_name, data[entry].perma_link); 
				//}
			//}
			console.log("Try");
			console.log(query);
			
			var found = false;
			var items = data;
			for (item in items){
				console.log("sanitize: "+query);
				if (sanitize(items[item].display_name) == sanitize(query)){
					returnFunction(items[item]);
					found = true;
					break;
				}/* else if (sanitize(items[item].name).indexOf(sanitize(query)) != -1){
					returnFunction(items[item]);
					found = true;
					break;
				}*/

			}
			if(!found)returnFunction(null);
		})	
	};
	return this;
}