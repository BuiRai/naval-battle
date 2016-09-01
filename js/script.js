var navalGame = (function(){
	console.log("Init game...");

	var game = {};

	game.dashboard = [
		[{id: 0, value: false},{id: 1, value: false},{id: 2, value: false},{id: 3, value: false},{id: 4, value: false}],
		[{id: 5, value: false},{id: 6, value: false},{id: 7, value: false},{id: 8, value: false},{id: 9, value :false}],
		[{id: 10, value: false},{id: 11, value: false},{id: 12, value: false},{id: 13, value: false},{id: 14, value: false}],
		[{id: 15, value: false},{id: 16, value: false},{id: 17, value: false},{id: 18, value: false},{id: 19, value: false}],
		[{id: 20, value: false},{id: 21, value: false},{id: 22, value: false},{id: 23, value: false},{id: 24, value: false}]
	]

	game.populateBoats = function(){
		for(let i = 0 ; i < 5 ; i++){
			axisX = Math.floor((Math.random() * 4));
			axisY = Math.floor((Math.random() * 4));

			if (game.isTheCellAvaliable(axisX, axisY)) {
				game.dashboard[axisX][axisY].value = true;
				console.log("propiedad", game.dashboard[axisX][axisY]);
			}else{
				i--;
			}
		}

		console.log("dashboar after populate", game.dashboard);
	}

	game.isTheCellAvaliable = function(x, y){
		return game.dashboard[x][y].value === false ? result = true : result = false;
	}

	game.addEventToButtons = function(){
		for(let i = 0 ; i < (game.dashboard.length * game.dashboard.length) ; i++){
			var btn = $('#'+i);
			btn.click(({axisX: btn.attr('axisX'), axisY: btn.attr('axisY')}), game.shootWeapon);
		}
	}

	game.shootWeapon = function(event){
		x = parseInt(event.data.axisX);
		y = parseInt(event.data.axisY);
		
		if ( game.dashboard[x][y].value === true ) {
			console.log("dammm!!!, you did it");
			$('#' + event.target.id).addClass('boat-destroyed');
		}else{
			console.log("jaja, looooooser");
			$('#' + event.target.id).addClass('no-boat');
		}
	}

	return game;

})();

navalGame.populateBoats();
navalGame.addEventToButtons();