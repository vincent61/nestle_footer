$( document ).ready(function() {
	$(".box-social-inner .text-content").each(function( index ) {
	  $( this ).css("visibility","hidden");
	});
	$( ".box-social" ).mouseover(function() {
	 $( this ).find(".text-content").css("visibility","inherit");
	}).mouseout(function() {
	 $( this ).find(".text-content").css("visibility","hidden");
	})
});