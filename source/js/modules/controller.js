// The Controler for rendering the current time to color code.

define(["modules/getTimeApi", "modules/viewRender"], 
	function(getTimeApi, viewRender){
		var getTime = new GetTimeApi();
		var vRender;
		var hour;
		var min;
		var sec;
		var colorCode;

		// Get time from the API
		function presentTime(){
			getTime.getCurrentTime();
			hour = getTime.h.toString();
	 		min = getTime.m.toString();
	 		sec = getTime.s.toString();
			
			// Add an additional 0 ahead if the number 
			//is only on digit.
	 		if (getTime.h < 10){
	 			hour = "0" + hour;
	 		}

	 		if (getTime.m < 10){
	 			min = "0" + min;
	 		}

	 		if (getTime.s < 10){
	 			sec = "0" + sec;
	 		}
			
			colorCode = '#'+hour+min+sec;
		};

		// Creative the view render instance and pass 
		// the parameters to it.
		function renderView(){
			presentTime();
			var vRender = new ViewRender(colorCode, hour, min, sec);
			vRender.changeBG();
			vRender.printTime();
		};

		// Execute the calculation every second.
		window.setInterval(
	 		renderView, 1000
	 	);
});