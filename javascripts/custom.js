jQuery("#tabs div").bind('click', function (e) {
  this.targetClass = $(e.currentTarget).attr("class");
  $("#tabs div, #panels div").removeClass("selected");
  $("." + this.targetClass).addClass('selected');
});