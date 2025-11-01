function gridView() {
  	document.getElementById("species-list-view").style.display = "none";
	document.getElementById("species-grid-view").style.display = "inherit";
	document.getElementById("species-grid-button").className = "active";
	document.getElementById("species-list-button").className = "";
	document.getElementById("alphabetical-species-index").style.display = "inherit";
	document.getElementById("species-index").style.display = "inherit";
}

function listView() {
	document.getElementById("species-grid-view").style.display = "none";
	document.getElementById("species-list-view").style.display = "block";
	document.getElementById("species-grid-button").className = "";
	document.getElementById("species-list-button").className = "active";
	document.getElementById("alphabetical-species-index").style.display = "none";
	document.getElementById("species-index").style.display = "none";
}