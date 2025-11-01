$(document).ready(function() {

  // set the previous to an invalid value
  var previous = "";

  // create the lateral index holder
  $("body").append("<div id='alphabetical-species-index'></div>");

  // traverse the list elements
  $(".species-flex-parent p").each(function() {

    // get the first character of that element
    var current = $(this).text()[0];

    // if it's different from the previous one
    if (current != previous) { 

      // add a unique id to the element
      $(this).attr("id", "first_letter_" + current);

      // update the previous value
      previous = current;

      // add a link into the alphabetical index
	  $("#alphabetical-species-index").append("<a href='#first_letter_" + current + "'>" + current + "</a><br/>");

    }
  });

});// JavaScript Document