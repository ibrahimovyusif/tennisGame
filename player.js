var Player = {
	init: function(playerName){
		this.point = Object.create(Point).init();
		this.playerName = playerName;

		return playerName;
	}
};