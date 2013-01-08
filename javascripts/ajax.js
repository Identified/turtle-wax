function loadContents(url, callback) {  
	if(url) {  
		var yql = 'http://query.yahooapis.com/v1/public/yql?q=' + encodeURIComponent('select * from html where url="' + url + '"') + '&format=xml&callback=?';  

		jQuery_new.getJSON(yql,function(data) {

			//BUILD CALLBACK FUNCTION
			if(typeof callback === 'function') {
				callback(data.results[0]);  
			}  

		//WRITES ERROR TO LOG	
		}).error(function(jqXHR, textStatus, errorThrown) { 
			console.log(errorThrown); }
		);
		} else {
			console.log('No site was passed to the script.');
		}
} 

loadContents('http://employer-cdn.identified.com/html/footer.html', function(results) {  
   jQuery_new('#footer').html(results); 
});

loadContents('http://employer-cdn.identified.com/html/header.html', function(results) {  
   jQuery_new('#header').html(results); 
});

loadContents('http://employer-cdn.identified.com/html/features/content.html', function(results) {  
   jQuery_new('#features-content').html(results); 
});

loadContents('http://employer-cdn.identified.com/html/home/content.html', function(results) {  
   jQuery_new('#home-content').html(results); 
});
