export default class Item {
	  constructor(ATK,DEF,type, personality, level, cost, desc){
        this.ATK = ATK;
        this.DEF = DEF; 
        this.type = type; 
        this.personality = personality;
        this.level = level; 
        this.cost = cost; 
    	this.desc = desc; }
}

function get_item(){
	var MongoClient = require('mongodb').MongoClient;
	var url = "mongodb://localhost:27017/";

	MongoClient.connect(url, function(err, db) {
		if (err) throw err;
		var dbo = db.db("mydb");
		dbo.collection("AdventureItems").findOne({} function(err, res) {
			if (err) throw err;
			console.log(res.desc);
			db.close();
  });
}); 

}