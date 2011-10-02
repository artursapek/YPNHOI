var indieWords {
	"Word":0,
	"word2":1
}

function statistics(){
	this.getStatisticsDiv = function(fsResp, ypResp, hpResp){
		getStatsDiv(fsResp, ypResp, hpResp);
	}
	return this;
}

var YP_REVIEW_LENGTH_WEIGHT = 10;
var YP_AVGRATING_WEIGHT = 50;
var NOT_MENTIONED_ON_YELP_WEIGHT = 1000;
var HP_TAGS_LENGTH_WEIGHT = 5;
var FS_RATION_WEIGHT = 50;
var FS_TIP_COUNT_WEIGHT = 10;

function getStatsDiv(fsResp, ypResp, hpResp){
	var totalScore = 0;
	
	if(ypResp == null){
		totalScore += NOT_MENTIONED_ON_YELP_WEIGHT;
	}
	//YELP
	if(!ypResp.closed){
		totalScore += ypResp.reviews.length * YP_REVIEW_LENGTH_WEIGHT;
		totalScore += ypResp.avgrating * YP_AVGRATING_WEIGHT;
		for(r in ypResp.reviews){
			totalScore += parseNumberIndieWords(ypResp.reviews[r]);
		}
	}
	
	
	
	//HYPERPUBLIC
	totalScore += hpResp.tags.length * HP_TAGS_LENGTH_WEIGHT;
	for(t in hpResp.tags){
		totalScore += indieWordWeight(hpResp.tags[t]); 
	}
	
	//FOURSQUARE
	totalScore += (fsResp.stats.checkinsCount/fsResp.stats.usersCount)*FS_RATIO_WEIGHT;
	totalScore += fsResp.stats.tipCount;
}

function parseNumberIndieWords(text){
	var total = 0;
	for(i in indieWords){
		total += indieWords[i]*text.search(i);
	}
	return total;
}

function indieWordWeight(tag){
	for(i in indieWords){
		if(tag == i)
			return indieWords[i];
	}
}