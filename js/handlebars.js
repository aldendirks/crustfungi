window.onload = function() {
	//Grab the inline template
	var template_logo = document.getElementById('logo-template').innerHTML;
	var template_links = document.getElementById('links-template').innerHTML;
	var template_copyright = document.getElementById('copyright-template').innerHTML;
  	//Compile the template
  	var compiled_template_logo = Handlebars.compile(template_logo);
	var compiled_template_links = Handlebars.compile(template_links);
	var compiled_template_copyright = Handlebars.compile(template_copyright);
  	//Render the data into the template
  	var rendered_logo = compiled_template_logo({logo: 'src="/images/icons/site_icon_small.png"'});
	var rendered_links = compiled_template_links({
		links: '<a href="/html/sidebar/introduction.html">INTRO</a><a href="/html/sidebar/species.html">SPECIES</a><a href="/html/sidebar/phylogeny.html">PHYLOGENY</a><a href="/html/sidebar/glossary.html">GLOSSARY</a><a href="/html/sidebar/literature.html">LITERATURE</a><a href="/html/sidebar/about.html">ABOUT</a>'
	});
	var rendered_copyright = compiled_template_copyright({copyright: "2019"});
  	//Overwrite the contents of #target with the renderer HTML
  	document.getElementById('logo').innerHTML = rendered_logo;
	document.getElementById('links').innerHTML = rendered_links;
	document.getElementById('copyright').innerHTML = rendered_copyright;
}