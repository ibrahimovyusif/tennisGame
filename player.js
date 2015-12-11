var Player = {
	init: function(playerName){
		this.playerName = playerName;
		this.point = Object.create(Point).init();

		return this;
	},

	getPoint: function() {
		this.point++;
	}
};