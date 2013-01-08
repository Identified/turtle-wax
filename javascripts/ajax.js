function loadContents(url, callback) {  
	if(url) {  
		var yql = 'http://query.yahooapis.com/v1/public/yql?q=' + encodeURIComponent('select * from html where url="' + url + '"') + '&format=xml&callback=?';  
		jQuery_new.getJSON(yql,function(data) {
			if(typeof callback === 'function') {
				callback(data.results[0]);  
			}  
		}).error(function(jqXHR, textStatus, errorThrown) { 
			console.log(errorThrown); }
		);
		} else {
			console.log('No site was passed to the script.');
		}
} 

loadContents('http://employer-cdn.identified.com/html/footer.html', function(footer) {  
   jQuery_new('#footer').html(footer); 
});

loadContents('http://employer-cdn.identified.com/html/header.html', function(header) {  
   jQuery_new('#header').html(header);
});