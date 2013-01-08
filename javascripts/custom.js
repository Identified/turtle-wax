// Uncomment this and copy the html to the appropriate pages on HubSpot

        // $('#footer').load('http://employers.identified.com/Portals/95329/health_recruit/html/footer.html');
        // $('#header').load('http://employers.identified.com/Portals/95329/health_recruit/html/header.html');
        // $('#features-content').load('http://employers.identified.com/Portals/95329/health_recruit/html/features/content.html');
        // $('#home-content').load('http://employers.identified.com/Portals/95329/health_recruit/html/home/content.html');
        
// Uncomment this to work on stuff via GitHub



jQuery(document).ready(function() {
  $('#footer').load('http://employer-cdn.identified.com/html/footer.html');
  $('#header').load('http://employer-cdn.identified.com/html/header.html');
  $('#features-content').load('http://employer-cdn.identified.com/html/features/content.html');
  $('#home-content').load('http://employer-cdn.identified.com/html/home/content.html');
});

jQuery("#tabs div").bind('click', function (e) {
	this.targetClass = $(e.currentTarget).attr("class");
	$("#tabs div, #panels div").removeClass("selected");
	$("." + this.targetClass).addClass('selected');
});