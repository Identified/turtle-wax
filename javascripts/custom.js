jQuery('#tabs div') 
.livequery('click', function(event) { 
		this.targetClass = jQuery_new(event.currentTarget).attr("class");
		jQuery_new("#tabs div, #panels div").removeClass("selected");
		jQuery_new("." + this.targetClass).addClass('selected');
		return false; 
}); 


jQuery(document) 
.livequery('live', function(event) { 
		jQuery_new('#slideshow').bjqs({
				height      : 400,
				width       : 960,
				responsive  : true,
				animtype : 'fade', // accepts 'fade' or 'slide'
				animduration : 450, // how fast the animation are
				animspeed : 10000, // the delay be horizontally
				showcontrols : false, // show next and prev controls
				centercontrols : false, // center controls verically
				nexttext : 'Next', // Text for 'next' button (can use HTML)
				prevtext : 'Prev', // Text for 'previous' button (can use HTML)
				showmarkers : true, // Show individual slide markers
				centermarkers : false // Center markers horizontally
		}); 
		return false; 
}); 

