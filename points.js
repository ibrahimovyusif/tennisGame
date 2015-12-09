var Point = {
    init:function(point){
        this.point = point || 0;

        return this.point;
    },

    convertPointToName: function(point) {
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
