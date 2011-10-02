function preventBehavior(e) {
  e.preventDefault(); 
};

document.addEventListener("touchmove", preventBehavior, false);
	
function onBodyLoad() {		
	document.addEventListener("deviceready",onDeviceReady,false);
}

function onDeviceReady() {

}

$(document).ready(function() {
  $('#view').live( 'pageshow',function(event, ui){
    var query = $('#venue').attr("value");
    $('#oh').html("<h2>OH... "+query+"?</h2>");
  });
});
