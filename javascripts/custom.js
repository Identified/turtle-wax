jQuery('#tabs div') 
.livequery('click', function(event) { 
		this.targetClass = jQuery_new(event.currentTarget).attr("class");
		jQuery_new("#tabs div, #panels div").removeClass("selected");
		jQuery_new("." + this.targetClass).addClass('selected');
		return false; 
}); 



jQuery_new('#home-content') 
.livequery(function(){  
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
});

jQuery_new('#feature-content') 
.livequery(function(){  
		jQuery_new('.fadein img:gt(0)').hide();
		setInterval(function(){
			jQuery_new('.fadein :first-child').fadeOut()
				 .next('img').fadeIn()
				 .end().appendTo('.fadein');}, 
			3000);
});

jQuery_new("img.lazy").lazyload();




jQuery_new('#menu') 
	.livequery(function(){  
		var url = window.location.href;
		
		if (url.search("feature") > 0) {
				jQuery_new('.features').addClass('selected');
		} 
		else if (url.search("webinar") > 0) {
				jQuery_new('.webinars').addClass('selected');
		} 
		else if (url.search("contact") > 0) {
				jQuery_new('.contact').addClass('selected');
		} 
		else if (url.search("home") > 0) {
				jQuery_new('.home').addClass('selected');
		} 
		return false; 
}); 
