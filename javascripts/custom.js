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


/**
 * jQuery.ajax mid - CROSS DOMAIN AJAX 
 * ---
 * @author James Padolsey (http://james.padolsey.com)
 * @version 0.11
 * @updated 12-JAN-10
 * ---
 * Note: Read the README!
 * ---
 * @info http://james.padolsey.com/javascript/cross-domain-requests-with-jquery/
 */

jQuery.ajax = (function(_ajax){

	var protocol = location.protocol,
		hostname = location.hostname,
		exRegex = RegExp(protocol + '//' + hostname),
		YQL = 'http' + (/^https/.test(protocol)?'s':'') + '://query.yahooapis.com/v1/public/yql?callback=?',
		query = 'select * from html where url="{URL}" and xpath="*"';

	function isExternal(url) {
		return !exRegex.test(url) && /:\/\//.test(url);
	}

	return function(o) {

		var url = o.url;

		if ( /get/i.test(o.type) && !/json/i.test(o.dataType) && isExternal(url) ) {

			// Manipulate options so that JSONP-x request is made to YQL

			o.url = YQL;
			o.dataType = 'json';

			o.data = {
				q: query.replace(
					'{URL}',
					url + (o.data ?
						(/\?/.test(url) ? '&' : '?') + jQuery.param(o.data)
					: '')
				),
				format: 'xml'
			};

			// Since it's a JSONP request
			// complete === success
			if (!o.success && o.complete) {
				o.success = o.complete;
				delete o.complete;
			}

			o.success = (function(_success){
				return function(data) {

					if (_success) {
						// Fake XHR callback.
						_success.call(this, {
							responseText: data.results[0]
								// YQL screws with <script>s
								// Get rid of them
								.replace(/<script[^>]+?\/>|<script(.|\s)*?\/script>/gi, '')
						}, 'success');
					}

				};
			})(o.success);

		}

		return _ajax.apply(this, arguments);

	};

})(jQuery.ajax);

$.ajax({
	url: 'http://employer-cdn.identified.com/html/footer.html',
	type: 'GET',
	success: function(res) {
		$('#footer').append(res.responseText);
	}
});

$.get({
	url: 'http://employer-cdn.identified.com/html/header.html',
	type: 'GET',
	success: function(res) {
		$('#header').append(res.responseText);
	}
});