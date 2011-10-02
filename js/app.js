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
  $("#query").submit(function(){
submitForm()
  });
 $("#submitButton").click(function(){
submitForm()
  });



  $('#view').live( 'pageshow',function(event, ui){
    var query_venue = $('#venue').attr("value");
    $('#query-venue').html(query_venue);
  });
});



function submitForm(){
		$.mobile.changePage("#view");
	console.log("run go");
	go("40.760196","-73.982019", $('input#venue').val());
    return false;
   }