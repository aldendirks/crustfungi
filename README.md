# Crust Fungi Website

Crusts are ubiquitous but often overlooked fungi that have important ecological functions as sapbrobes, parasites, and mycorrhizae. CrustFungi.Com is a website dedicated to showcasing the diversity of crust fungi and offering information to help others succesfully identify their specimens.

## Site Navigation

CrustFungi.Com is organized with site root-relative paths so that handlebars.js works on all html files, no matter there relative location from the handlebars.js file. 

## Naming Things

Files on CrustFungi.Com are named according to Jenny Bryan's [principles](https://speakerdeck.com/jennybc/how-to-name-files) of machine readable, human readable, and plays well with default ordering. Underscores "_" are used to delimit metadata in a filename, hyphens "-" are used to delimit words or concepts in the metadata fields, and numerical fields are included first (when appropriate) for easy sorting. Dates are formatted as YYYY-MM-DD. 

## SEO

* Title `<title>` - The title tag  is in the format "Page Description | CrustFungi.Com". This is the most important information for search enging keyword recognition and is also what is displayed as the hyperlink in a Google search. 
* Meta description tag `<meta name="description" content="">` - This is not used by search engines but is the text that is displayed under the title in the search engine hits. User keywords are bolded when present in the description. The description should be less tha 160 characters.
* Alt attribute - Make sure to include descriptive text in the alt attribute for every image.
* URL - Make sure the URL is appropriately descriptive (contains the keyword), contains hyphens rather than spaces, plus signs, or underscores, and use technologies like mod_rewrite for Apache to tansform the URL into something more readable or static. 
