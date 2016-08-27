// JavaScript Document

$ (document).ready(function() {
	var lat, lon, api_url;
	
	if ("geolocation" in navigator) {
		
		$('#showTemp') .on('click', function() {
			navigator.geolocation.getCurrentPosition(getLocation);
	
			function getLocation (position) {
				lat = position.coords.latitude;
				lon = position.coords.longitude;
				console.log(position);
				
				api_url = 'http://api.openweathermap.org/data/2.5/weather?lat=' +
								lat + '&lon=' +
								lon + '&units=imperial&appid=7c33f6cb0bfa5af84d2c2b34084dad41';
								
				console.log(api_url);				
								
				$.ajax({
					url : api_url,
					method : 'GET',
					success : function (data) {
						var tempr = data.main.temp;
						$('#result').text(tempr + 'º F');
					}
				});
			}
		});
	} else {
		alert('Your browser does not support geolocation. Sorry ~Whomp Whowmp..');
	}
	
	
	/*extension: Clickable state icons */
	
	$('.states img') .on('click', function() {		/*gives the class .state a click function */
		var zip = $(this).attr('zip');				/*creates zip var and associates the attribute zip*/		
			
				api_url = 'http://api.openweathermap.org/data/2.5/weather?zip=' +		/*api call + zip var*/
								 zip + '&units=imperial&appid=7c33f6cb0bfa5af84d2c2b34084dad41';
							
				console.log(api_url);				
								
				$.ajax({								/*ajax communicates (GET)s the api data into the #result field*/
					url : api_url,
					method : 'GET',
					success : function (data) {
						var tempr = data.main.temp;
						$('#result').text(tempr + 'º F');		/*places the tempr data as text into #result + 'symbols'*/
					}
				});
	});
		
});	