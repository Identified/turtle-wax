jQuery('#tabs div') 
.livequery('click', function(event) { 
		this.targetClass = jQuery_new(event.currentTarget).attr("class");
		jQuery_new("#tabs div, #panels div").removeClass("selected");
		jQuery_new("." + this.targetClass).addClass('selected');
		return false; 
}); 