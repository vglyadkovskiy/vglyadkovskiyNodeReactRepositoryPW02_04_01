const EventEmitter = require("events");
const Hunter = require("./hunter");

let hunt = new Hunter ("John");



class Rabbit extends EventEmitter {
	constructor(name, x, y){
		super();
		this._name = name;
		this._x = x;
		this._y = y;
		this.on("moved", hunt.vision());
	}
	
	get name() {
      	return this._name;
   	}
   	set name(name) {
      	this._name = name;
   	}
   	get x() {
    	return this._x;
   	}
   	get y() {
      	return this._y;
   	}
	moveRabbit() {
		this._x += Math.random() * 10;
		this._y += Math.random() * 10;		
		this.emit("moved");

	}

}

module.exports.rab = new Rabbit ("Banny", 2, 3);
