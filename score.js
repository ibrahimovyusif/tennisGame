var Score = {
    init: function(){
        this.score = '';

        return this.score;
    },

    calculateScore: function(player1, player2){
        if (player1.point === player2.point) {

            this.score = this.showCurrentEqualScore(player1.point);
        } 

        else if (player1.point >= 4 || player2.point >= 4) {

            this.score =  this.showGameResult(player1, player2);
        }

        else {

            this.score = this.showCurrentScore(player1, player2);
        }

        return this.score;
    },

	showCurrentScore: function(player1, player2) {

        var tempScore = 0;
        score = "";

        var pointName1 = this.convertScorePointsToName(player1.point);
        var pointName2 = this.convertScorePointsToName(player2.point);

        score = pointName1 + '-' + pointName2;


        return score;
    },

    showCurrentEqualScore: function(point) {

        switch (point) {
            case 0:
                score = "Love-All";
                break;
            case 1:
                score = "Fifteen-All";
                break;
            case 2:
                score = "Thirty-All";
                break;
            default:
                score = "Deuce";
                break;
        }

        return score;
    },

    showGameResult: function(player1, player2) {
        var minusResult = player1.point - player2.point;
        if (minusResult === 1) score = "Advantage " + player1.playerName;
        else if (minusResult === -1) score = "Advantage " + player2.playerName;
        else if (minusResult >= 2) score = "Win for " + player1.playerName;
        else score = "Win for " + player2.playerName;

        return score;
    },

    convertScorePointsToName: function(point) {
        pointName = "";

        switch (point) {
            case 0:
                pointName += "Love";
                break;
            case 1:
                pointName += "Fifteen";
                break;
            case 2:
                pointName += "Thirty";
                break;
            case 3:
                pointName += "Forty";
                break;
        }

        return pointName;
    }
};