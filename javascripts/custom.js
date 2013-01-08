// Uncomment this and copy the html to the appropriate pages on HubSpot

        // $('#footer').load('http://employers.identified.com/Portals/95329/health_recruit/html/footer.html');
        // $('#header').load('http://employers.identified.com/Portals/95329/health_recruit/html/header.html');
        // $('#features-content').load('http://employers.identified.com/Portals/95329/health_recruit/html/features/content.html');
        // $('#home-content').load('http://employers.identified.com/Portals/95329/health_recruit/html/home/content.html');
        
// Uncomment this to work on stuff via GitHub
  // $('#footer').load('http://employer-cdn.identified.com/html/footer.html');
  // $('#header').load('http://employer-cdn.identified.com/html/header.html');
  // $('#features-content').load('http://employer-cdn.identified.com/html/features/content.html');
  // $('#home-content').load('http://employer-cdn.identified.com/html/home/content.html');
  // 
  // 


jQuery(document).ready(function() {

  $("#tabs div").bind('click', function (e) {
	  this.targetClass = $(e.currentTarget).attr("class");
	  $("#tabs div, #panels div").removeClass("selected");
	  $("." + this.targetClass).addClass('selected');
  });
  
});



function loadContents(url, callback) {  

	//CONFIRM A URL WAS PROVIDED  
	if(url) {  

		//SET URL FOR YAHOO YQL QUERY
		var yql = 'http://query.yahooapis.com/v1/public/yql?q=' + encodeURIComponent('select * from html where url="' + url + '"') + '&format=xml&callback=?';  

		//MAKE YAHOO YQL QUERY  
		$.getJSON(yql,function(data) {

			//BUILD CALLBACK FUNCTION
			if(typeof callback === 'function') {  
				callback(data.results[0]);  
			}  

		//WRITES ERROR TO LOG	
		}).error(function(jqXHR, textStatus, errorThrown) { 
			console.log(errorThrown); }
		);

  	//LOG ERROR IF NO URL WAS PASSED TO THE SCRIPT
  	} else {
  		 console.log('No site was passed to the script.'); 
  	}

} 

/********************************************************************************
SAMPLE USAGE
********************************************************************************/ 
loadContents('http://employer-cdn.identified.com/html/footer.html', function(results) {  
   $('#footer').html(results); 
});

loadContents('http://employer-cdn.identified.com/html/header.html', function(results) {  
   $('#header').html(results); 
});

loadContents('http://employer-cdn.identified.com/html/features/content.html', function(results) {  
   $('#features-content').html(results); 
});

loadContents('http://employer-cdn.identified.com/html/home/content.html', function(results) {  
   $('#home-content').html(results); 
});
