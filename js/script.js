var dashBoard = (function() {

	var matrix = [
		[false, false, false, false, false],
		[false, false, false, false, false],
		[false, false, false, false, false],
		[false, false, false, false, false],
		[false, false, false, false, false]
	];

	// Private functions
	var setRandomBoat = function(axisX, axisY) {
		matrix[axisX][axisY] = true;
	};

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
	fillFiveBoats();
	printDashboard();

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
})();