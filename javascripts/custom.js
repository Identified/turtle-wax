$('#tabs div') 
.livequery('click', function(event) { 
		alert('clicked'); 
		this.targetClass = $(event.currentTarget).attr("class");
		$("#tabs div, #panels div").removeClass("selected");
		$("." + this.targetClass).addClass('selected');
		return false; 
}); 

jQuery("#tabs div").bind('click', function (e) {
  this.targetClass = $(e.currentTarget).attr("class");
  $("#tabs div, #panels div").removeClass("selected");
  $("." + this.targetClass).addClass('selected');
});