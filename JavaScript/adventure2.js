var user = prompt("Unsuprisingly Ward continues to be gay. In this case he 
				   finds himself trapped in a alley by three huge freakin 
				   guys. Does he pleasure ONE, TWO, or all THREE of them
				   at once?").toUpperCase();

switch(user){
	case'ONE':
		var pleasure = prompt("Will he offer to pleasure the other two?
							(YES or NO").toUpperCase();
		var watch = prompt("Do you think they'll get off on just watching?")
							.toUpperCase();
		if (pleasure==='YES'||watch==='yes') {
			console.log("Yeah I think so too. Ward likes that shit.");
		}else{
			console.log("Poor Ward. I think he's gonna die with cocks in
						his mouth.");
		};					
		break;
	case'TWO':
		var leftOut = prompt("Do you think the third guy will like being 
							left out?(YES or NO)").toUpperCase();
		var murder = prompt("Do you think this will make him murderous?").toUpperCase();
		if(leftOut==='Yes'&&murder==='Yes'){
			console.log("Yeah, he's definitely gonna die penetrated");
		}else{
			console.log("Well then maybe he'll live. I doubt it though.");
		};
		break;
	case'THREE':
		var live = prompt("Yep. Will he do it well enough to live?").toUpperCase();
		var die = prompt("Do you think he would choose to die any other way?").toUpperCase();
		if(live==='No'&&die==='No'){
			console.log("Ward will die the way he preferred to live. Fully
						penetrated.");
		}else{
			console.log("You fool. You are incorrect.");
		};
		break;
	default:
	console.log("You stupid piece of shit. Game over. Jesus...");
};