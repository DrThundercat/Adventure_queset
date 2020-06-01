document.addEventListener('DOMContentLoaded',() =>{
	var x = new player_obj;


	// Note: localStorage can't hold objects yet, just key value pairs 
	// to get around this JSON.stringify the object

	//example
	// Put the object into storage
	//localStorage.setItem('testObject', JSON.stringify(testObject));

	// Retrieve the object from storage
	//var retrievedObject = localStorage.getItem('testObject');


	//this is where the main logic is handled 
	//if the browser can use local storage
	if (typeof(Storage) !== "undefined"){
		//sweet lets see if we have a player set
		if(localStorage.player){
			//excellent load it up 
			x = player_obj(localStorage.player);
		}
		else{
			//create the player object
			var x = new Player(make_stats(),make_stats(),make_stats(),make_stats(),make_stats(),make_stats(),make_stats(),make_stats(),make_stats(), "test");
			// save the player
			localStorage.player = player_obj(x);
		}	
	}
	// browers does not support local storage 
	else {
		// we have to go the cookie route
	}

	// display the player data
	document.getElementById("hp").innerHTML="hp: "+x.hp;
	document.getElementById("str").innerHTML="str: "+x.str;
	document.getElementById("wis").innerHTML="wis: "+x.wis;
	document.getElementById("dex").innerHTML="dex: "+x.dex;
	document.getElementById("cha").innerHTML="cha: "+x.cha;
	document.getElementById("int").innerHTML="int: "+x.inte;
	document.getElementById("con").innerHTML="con: "+x.con;
	document.getElementById("luk").innerHTML="luk: "+x.luk;
	document.getElementById("beu").innerHTML="beu: "+x.beu;
	document.getElementById("personality").innerHTML="personality: "+x.personality;
	
})


//randomly pick a state between 1 and 10
function make_stats()
{
	var stat = Math.floor(Math.random() * 10) +1;
		if (stat == 1)
		{// lets be kind an re-roll a 1
			stat = make_stats()
		}
	return stat;
}

// inital item object
function Items(weapon, armor, wepon_dmg, armor_pnt, potion){
	this.weapon = weapon;
	this.armor = armor;
	this.wepon_dmg = wepon_dmg;
	this.potion = potion;
	this.armor_pnt = armor_pnt; 
}


var player_obj{
	hp:0,
	str:0,
	wis:0,
	inte:0,
	cha:0,
	dex:0,
	con:0,
	luk:0,
	beu:0,
	personality:"lost adventure"};

// inital player object
function Player(hp, str, wis, inte, cha, dex, con, luk, beu, personality){
		this.hp = hp;
		this.str = str;
		this.wis = wis;
		this.inte = inte;
		this.cha = cha;
		this.dex = dex;
		this.con = con;
		this.luk = luk;
		this.beu = beu;
		this.personality = personality;
		
}