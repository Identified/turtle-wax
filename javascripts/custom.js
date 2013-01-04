$(document).ready(function() {
  $("head").append("<link>");
  var css = $("head").children(":last");
  css.attr({
    rel:  "stylesheet",
    type: "text/css",
    href: "https://raw.github.com/Identified/turtle-wax/master/stylesheets/main.css"
  });
});  
