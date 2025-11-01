/* the function "visible" is from the jquery-visible-master plugin */
/* the intended outcome of this function breaks if the window is resized
it only effectively evaluates how to apply sticky to elements on the initial window size */

if ($(window).width() > 601) {
	$(window).scroll(function() {
		var hT = $('#donate').offset().top,
			hH = $('#donate').outerHeight(),
			wH = $(window).height(),
			wS = $(this).scrollTop();
		console.log((hT-wH) , wS);
		if (wS > (hT+hH-wH)){
			if ( $("header").visible() && $("#donate").visible() ) {
				$("header").css({"position": "sticky", "top": "0"});
				$(".index-content-text").css({"position": "sticky", "align-self": "flex-start", "top": "70px"});
			}
			else {
				$(".index-content-text").css({"position": "sticky", "align-self": "flex-end", "bottom": "0"});
			}
		}
	});
}
	
/*
$(window).scroll(function() {
	var hT = $('#donate').offset().top,
		hH = $('#donate').outerHeight(),
		wH = $(window).height(),
		wS = $(this).scrollTop();
	console.log((hT-wH) , wS);
	if (wS > (hT+hH-wH)){
		if ( $("header").visible() && $("#donate").visible() ) {
			$("header").css({"position": "sticky", "top": "0"});
			$(".index-content-text").css({"position": "sticky", "align-self": "flex-start", "top": "70px"});
		}
		else {
			$(".index-content-text").css({"position": "sticky", "align-self": "flex-end", "bottom": "0"});
		}
	}
});
*/