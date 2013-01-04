$('#footer').load('http://employers.identified.com/Portals/95329/health_recruit/html/footer.html');
$('#header').load('http://employers.identified.com/Portals/95329/health_recruit/html/header.html');
$('#features-content').load('http://employers.identified.com/Portals/95329/health_recruit/html/features/content.html');
$('#home-content').load('http://employers.identified.com/Portals/95329/health_recruit/html/home/content.html');


// The BEST way to do tabs
$(document).live (function(){
  $("#tabs div").bind('click', function (e) {
    this.targetClass = $(e.currentTarget).attr("class");
    $("#tabs div, #panels div").removeClass("selected");
    $("." + this.targetClass).addClass('selected');
  });
});
