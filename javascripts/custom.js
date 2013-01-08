$('#tabs div') 
.livequery('click', function(event) { 
		this.targetClass = $(event.currentTarget).attr("class");
		$("#tabs div, #panels div").removeClass("selected");
		$("." + this.targetClass).addClass('selected');
		return false; 
}); 
