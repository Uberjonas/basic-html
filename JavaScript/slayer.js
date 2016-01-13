var slaying = true;
var youHit = Math.floor(Math.random()*2);
var damageThisRound = Math.floor(Math.random()*5+1);
var totalDamage = 0;

while(slaying){
	if(youHit=1){
		console.log("Ward dodged the Cockmonster!");
		totalDamage += damageThisRound;
		if(totalDamage>=4){
			console.log('Ward is saved! He is temporarily not gay!');
			slaying=false;
		}else{
			youHit = Math.floor(Math.random()*2);
		}
	}else{
		console.log('The Cockmonster penetrates Ward. Like...a Lot!');
	};
	slaying=false;
};