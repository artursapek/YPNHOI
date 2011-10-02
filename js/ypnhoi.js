//
// Misc. javascript for YPNHOI
// Artur Sapek
//

function sanitize(x){
	x = x.toLowerCase(); //this took me 30 minutes. #idiot
	var accents = {'\u00E9':'e', '\u00E8':'e', '\u00E0':'a', '\u00E5':'a', '\u00EE':'i', '\u00E7':'c', '\u00F1':'n'}; //lowercase :)
	for (var accent in accents){
		if (x.indexOf(accent) != -1){
			x = x.replace(accent, accents[accent]);
		}
	}
	return x;
}

function geolocate(){
	 if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(show_map);
		} else {
			window.location = "nolocation.html";
	}
}
function show_map(position) {
	var latitude = position.coords.latitude;
	var longitude = position.coords.longitude;
	console.log(latitude, longitude);
}


geolocate();