var TennisGame1 = {
    init: function(player1Name, player2Name) {
        var player = Object.create(Player);
        var playerPoint = Object.create(Point);


        this.player1Name = player.init(player1Name);
        this.player1Point = playerPoint.init();

        this.player2Name = player.init(player2Name); 
        this.player2Point = playerPoint.init();
    },

    wonPoint: function(playerName){
        if (playerName === this.player1Name)
            this.player1Point++;
        else
            this.player2Point++;
    },

    getScore: function(){
        var gameScore = Object.create(Score);

        var score = "";
        if (this.player1Point === this.player2Point) {

            score = gameScore.showCurrentEqualScore(this.player1Point);
        } 

        else if (this.player1Point >= 4 || this.player2Point >= 4) {

            score =  gameScore.showGameResult(this.player1Point, this.player2Point);
        }

        else {

            score = gameScore.showCurrentScore(this.player1Point, this.player2Point);
        }

        return score;
    }

};


if (typeof window === "undefined") {
    module.exports = TennisGame1;
}