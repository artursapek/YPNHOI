//
// hyperPublic namespace 
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
			for (entry in data){
				if (data[entry].display_name == params["q"]){
					console.log(data[entry].display_name, data[entry].perma_link); 
				}
			}
		})	
	};
	return this;
}





function createC(a, b, c, d){ // typeof, styles, other attributes, innerHTML. omit options b, c, or d with null
	var x = document.createElement(a);
	for (i in b){
			x[i] = b[i];
	}
	c = c || null;
	x.innerHTML = c;
	d = d || [];
	for (e in d){
		x.appendChild(d[e]);
	}
	return x;
}
function get(x){
	return document.getElementById(x);
}


function __init__(){
	//$('#query').keypress(function (e) {
		//console.log(e.keyCode); this makes the script into a keylogger lolol
	//});
	$('#submit').click(function(){
		var query = $('#query').val();
		jQuery.getJSON("https://api.hyperpublic.com/api/v1/places?callback=?",
 		{
		  	client_id: "6ZoMqEsQLKisS4C6ZpX65HegIA1tBpttT5vK39dB",
		  	client_secret: "qIKbAlT0osj4C8U3WC5HZMPN7cwnF4MFoAuoz5Hb",
		    address: "13%20W%203rd%20St%20New%20York,NY",
		    q: query,
		    radius: "20",
		    limit: "100"
		},
		function(data) {
				//exact name
			if($('#exactname').is(':checked')){
				checkExact(data, query);
			} else {
				//non-exact name
				
				checkAll(data);
			}
		});
	});
}
function checkExact(data, query){
	var results = [];
	for (entry in data){
		if (data[entry].display_name == query){
			mainAppend(data[entry]);
			results.push(data[entry]);
		}	
	}
	console.log(results)
}
