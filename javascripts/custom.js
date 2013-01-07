$('#footer').load('http://employers.identified.com/Portals/95329/health_recruit/html/footer.html');
$('#header').load('http://employers.identified.com/Portals/95329/health_recruit/html/header.html');
$('#features-content').load('http://employers.identified.com/Portals/95329/health_recruit/html/features/content.html');
$('#home-content').load('http://employers.identified.com/Portals/95329/health_recruit/html/home/content.html');


// The BEST way to do tabs
$("#tabs div").bind('click', function (e) {
this.targetClass = $(e.currentTarget).attr("class");
$("#tabs div, #panels div").removeClass("selected");
$("." + this.targetClass).addClass('selected');
});

// slideshow scripts

jQuery(document).ready(function($) {

    $('#slideshow').bjqs({
        height      : 320,
        width       : 960,
        responsive  : true,
        // animation values
        animtype : 'fade', // accepts 'fade' or 'slide'
        animduration : 450, // how fast the animation are
        animspeed : 15000, // the delay between each slide
        automatic : true, // automatic

        // control and marker configuration
        showcontrols : false, // show next and prev controls
        showmarkers : true, // Show individual slide markers
        centermarkers : false // Center markers horizontally
    });

});
