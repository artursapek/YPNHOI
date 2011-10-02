var indieWords = {
	"hipster":-5,
	"low key":-3,
	"unique":-1,
	"indie":-5,
	"coffehouse":-2,
	"vintage":-1,
	"thrift":-1,
	"not mainstream":-2,
	"bohemian":-1,
	"hipsterism":-3,
	"independent":-2,
	"artsy":-1,
	"underground":-2,
	"deck":-2,
	"bronson":-2,
	"fin":-2,
	"post-modern":-1,
	"PBR":-5,
	"Pabst":-5,
	"Pabst Blue Ribbon":-5,
	"retro":-1,
	"gluten-free":-4,
	"vinyl":-2,
	"artisan":-1,
	"vegan":-2,
	"organic":-2,
	"williamsburg":-2,
	"portland":-2,
	"letterpress":-3,
	"before they sold out":-5,
	"mixtape":-1,
	"helvetica":-1,
	"twee":-1,
	"hippie":-1,
	"popular":6,
	"hip":6,
	"trendy":5,
	"suburb":5,
	"bud":5,
	"budweiser":5,
	"pop music":5,
	"hip hop":5,
	"trendy":5,
	"conventional":5,
}

function statistics(){
	this.getStatisticsDiv = function(fsResp, ypResp, hpResp){
		getStatsDiv(fsResp, ypResp, hpResp);
	}
	return this;
}

var YP_REVIEW_LENGTH_WEIGHT = 10;
var YP_AVGRATING_WEIGHT = 50;
var NOT_MENTIONED_ON_YELP_WEIGHT = -1000;
var HP_TAGS_LENGTH_WEIGHT = 5;
var FS_RATIO_WEIGHT = -50;
var FS_TIP_COUNT_WEIGHT = 10;
var FS_CHECKIN_WEIGHT = 10;

function getStatsDiv(ypResp, hpResp, fsResp){
	var totalScore = 0;
	
	if(ypResp == null){
		totalScore += NOT_MENTIONED_ON_YELP_WEIGHT;
	} else {
		//YELP
		if(!ypResp.closed){
			if(ypResp.reviews != null)totalScore += ypResp.reviews.length * YP_REVIEW_LENGTH_WEIGHT;
			totalScore += ypResp.avg_rating * YP_AVGRATING_WEIGHT;
			for(r in ypResp.reviews){
				totalScore += parseNumberIndieWords(ypResp.reviews[r].text_excerpt);
			}
		}
	}
	
	
	if(hpResp != null){
		//HYPERPUBLIC
		if(hpResp.tags != null)totalScore += hpResp.tags.length * HP_TAGS_LENGTH_WEIGHT;
		for(t in hpResp.tags){
			totalScore += indieWordWeight(hpResp.tags[t]); 
		}
	}
	console.log("st "+fsResp.stats);
	if(fsResp != null){
		//FOURSQUARE
		if(fsResp.stats.usersCount != 0) totalScore += (fsResp.stats.checkinsCount/fsResp.stats.usersCount)*FS_RATIO_WEIGHT;
		totalScore += fsResp.stats.tipCount;
		totalScore += fsResp.stats.checkinsCount * FS_CHECKIN_WEIGHT;
	}
	
	console.log(totalScore);
}

function parseNumberIndieWords(text){
	var total = 0;
	for(i in indieWords){
		var ms = text.match(i);
		if(ms != null)total += indieWords[i]*ms.length;
	}
	return total;
}

function indieWordWeight(tag){
	for(i in indieWords){
		if(tag == i)
			return indieWords[i];
	}
}