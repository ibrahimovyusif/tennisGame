var TennisGame1 = {
    init: function(player1Name, player2Name) {
        var player = Object.create(Player);

        var player1 = player.init(player1Name);
        var player2 = player.init(player2Name);

        this.player1Point = player1.point;
        this.player1Name = player1.playerName;

        this.player2Point = player2.point;
        this.player2Name = player2.playerName;
    },

    wonPoint: function(playerName){
        if (playerName === this.player1Name)
            this.player2Point++;
        else
            this.player1Point++;
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