function make_stats()
{
	return Math.floor(Math.random() * 10) +1;
}

var player = {
	items:{
		weapon:
		armor:
		wepon_dmg:0
		potion:
		armor_pnt:0
	}, 
	stats:{
		hp:0
		str:0
		wis:0
		int:0
		cha:0
		dex:0
		luk:0
		con:0
		beu:0
	},
	personality:Jester
};

Object.defineProperties(player, {
    'get_stats': { get: function() { return this.Stats; } },
    'set_stats': { set: function(str, wis, dex, con, cha, luk, beu, hp, int) { this.Stats.str = Math.floor(Math.random() * 10) +1; 
    																	  this.Stats.wis = Math.floor(Math.random() * 10) +1;
    																	  this.Stats.con = Math.floor(Math.random() * 10) +1;
    																	  this.Stats.dex = Math.floor(Math.random() * 10) +1;
    																	  this.Stats.cha = Math.floor(Math.random() * 10) +1;
    																	  this.Stats.luk = Math.floor(Math.random() * 10) +1;
    																	  this.Stats.beu = Math.floor(Math.random() * 10) +1;
    																	  this.Stats.int = Math.floor(Math.random() * 10) +1;
    																	  this.Stats.hp = Math.floor(Math.random() * 10) +1;
    																												} }
});