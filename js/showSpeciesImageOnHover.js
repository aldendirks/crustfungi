$(document).ready(function(){
	"use strict";
	$(".binomial-epithet p").mouseover(
		function(){
			var speciesImage = $(this).attr("data-filename");
			$(".species-image img").attr('src', '/images/species_page/'+speciesImage+'.jpg');
			var speciesName = $(this).attr("data-species");
			$(".species-image p").text(speciesName);
		});
});
