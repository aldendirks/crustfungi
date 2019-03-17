function activateNavIcon() {
	var x = document.getElementById("responsive-nav");
	if (x.className === "nav") {
		x.className += " responsive";
	} else {
		x.className = "nav";
	}
}