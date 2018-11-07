$(document).ready(function() {
	$(".species-text p").mouseover(function(){
		$("#species-page-image-id").attr("src", this + ".jpg")
	});
});