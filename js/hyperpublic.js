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
	$('#query').keypress(function (e) {
		console.log(e.keyCode);
	});
	$('#submit').click(function(){
		var query = $('#query').val();
		jQuery.getJSON("https://api.hyperpublic.com/api/v1/places?callback=?",
 		{
		  	client_id: "6ZoMqEsQLKisS4C6ZpX65HegIA1tBpttT5vK39dB",
		  	client_secret: "qIKbAlT0osj4C8U3WC5HZMPN7cwnF4MFoAuoz5Hb",
		    address: "13%20W%203rd%20St%20New%20York,NY",
		    category: query,
		    radius: "1",
		    limit: "100"
		},
		function(data) {
			var items = data;
		    console.log(items);
		    for (bar in items){
		    	var t = createC("div", {className: "name"}, items[bar].display_name);
		    	$("#main").prepend(t);
			}
		});
	})
		

}


