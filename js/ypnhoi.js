//
// Misc. javascript for YPNHOI
// Artur Sapek
//



window.user = new __user__();

function __user__(){
	this.lat = this.lng = null;
	
	return this;
}

function geolocate(){
	if(geo_position_js.init()){
		geo_position_js.getCurrentPosition(returnCoords,function(){window.location = "nolocation.html";},{enableHighAccuracy:true});
	}
}

function returnCoords(p){
	user.lat = p.coords.latitude;
	user.lng = p.coords.longitude; 
}

function sanitize(x){
	x = x.toLowerCase(); //this took me 30 minutes. #idiot
	var accents = {'\u00E9':'e', '\u00E8':'e', '\u00E0':'a', '\u00E5':'a', '\u00EE':'i', '\u00E7':'c', '\u00F1':'n'}; //lowercase :)
	for (var accent in accents){
		if (x.indexOf(accent) != -1){
			x = x.replace(accent, accents[accent]);
		}
	}
	x = x.split('the ').join('').split('\'').join('').split('"').join('').split(',').join('').split('.').join('').split('NY').join('New York').split('-').join('').split(' ').join('');
	var full = x;
	
	
	return x;
}