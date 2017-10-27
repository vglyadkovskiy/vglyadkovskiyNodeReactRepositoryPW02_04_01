const rab = require("./rabbit");



module.exports = class Hunter {
	constructor(name){
		this._name = name;
	}
	vision() {
		console.log('SEE You');
		console.log("x = ", rab.x);
		console.log("y = ", rab.y);

	}

}

