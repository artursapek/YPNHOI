//
// hyperPublic object 
// Artur Sapek
//

function hyperPublic(){
	this.API = "hyperPublic API: http://developer.hyperpublic.com/places/";
	this.callJSON = function(query){
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
			
			var items = data;
		for (item in items){
			if (sanitize(items[item].display_name) == sanitize(query)){
				console.log(items[item]);
			}
		}
		})	
	};
	return this;
}