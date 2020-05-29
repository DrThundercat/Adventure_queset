document.addEventListener('DOMContentLoaded',() =>{
	var x = new Player(make_stats(),make_stats(),make_stats(),make_stats(),make_stats(),make_stats(),make_stats(),make_stats(),make_stats(), "test");
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

function make_stats()
{
	return Math.floor(Math.random() * 10) +1;
}
function Items(weapon, armor, wepon_dmg, armor_pnt, potion){
	this.weapon = weapon;
	this.armor = armor;
	this.wepon_dmg = wepon_dmg;
	this.potion = potion;
	this.armor_pnt = armor_pnt; 
}

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

//function create_player(){
//	var x = new Player(make_stats(),0,0,0,0,0,0,0, "test");
//	var y = document.getElementById("hp");
//	return y.innerHTML = "hp: "+x.hp;
//}
