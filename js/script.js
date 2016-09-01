var dashBoard = (function($) {

	var matrix = [
		[false, false, false, false, false],
		[false, false, false, false, false],
		[false, false, false, false, false],
		[false, false, false, false, false],
		[false, false, false, false, false]
	];

	// Private functions
	var setRandomBoat = function(dashboard, x, y) {
		matrix[x][y] = true;
	};

	var buildDashboard = function(dashboard, x, y){
		this.x = x || 5;
		this.y = y || 5;
	}

	var fillFiveBoats = function(){
		for(var i = 0 ; i < 5 ; i++){
			var axisX = Math.floor((Math.random() * 4));
			var axisY = Math.floor((Math.random() * 4));
			setRandomBoat(axisX, axisY);
		}
	};

	var printDashboard = function(){
		console.log(matrix);
	}

	$('.cell').click(function(){
		console.log(":)");
	});

	// Public functions
	var publicFunc1 = function() {
		publicFunc2();
	};
	var publicFunc2 = function() {
		privateFunc();
	};
	// Return the object that is assigned to Module
	return {
		publicFunc1: publicFunc1,
		publicFunc2: publicFunc2
	};
})(jQuery);