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

function Player(hp, str, wis, int, dex, con, luk, beu, personality){
		this.hp = hp;
		this.str = str;
		this.wis = wis;
		this.int = int;
		this.personality = personality;
		this.dex = dex;
		this.luk = luk;
		this.con = con;
		this.beu = beu;
}

function create_player(){
	var x = new Player(make_stats(),0,0,0,0,0,0,0, "test");
	var y = document.getElementById("hp");
	return y.innerHTML = "hp: "+x.hp;
}