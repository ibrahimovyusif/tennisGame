var Score = {
	 showCurrentScore: function(player1Point, player2Point) {

        var tempScore = 0;
        score = "";

        var name1 = this.convertScorePointsToName(player1Point);
        var name2 = this.convertScorePointsToName(player2Point);

        score = name1 + '-' + name2;


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

    showGameResult: function(player1Point, player2Point) {
        var minusResult = player1Point - player2Point;
        if (minusResult === 1) score = "Advantage player1";
        else if (minusResult === -1) score = "Advantage player2";
        else if (minusResult >= 2) score = "Win for player1";
        else score = "Win for player2";

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