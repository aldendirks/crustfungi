$(document).ready(function() {
	"use strict";
	$(".species-text p").mouseover(
		function(){
			var speciesImage = $(this).attr("data-filename");
			$(".species-image img").attr('src', '../images/species_page/'+speciesImage+'.jpg');
		});
});
