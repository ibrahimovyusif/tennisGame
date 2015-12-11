var TennisGame1 = {
    init: function(playerName1, playerName2) {

        this.player1 = Object.create(Player).init(playerName1);
        this.player2 = Object.create(Player).init(playerName2);
    },

    wonPoint: function(playerName){
        if (this.player1.playerName === playerName) {

            this.player1.getPoint();

        }

        else{
            
            this.player2.getPoint();
        }

    },

    getScore: function(){
        var gameScore = Object.create(Score);

        var score = gameScore.init();
        score = gameScore.calculateScore(this.player1, this.player2);

        return score;
    }

};


if (typeof window === "undefined") {
    module.exports = TennisGame1;
}