function Item(id, tileWidth) {
	this.tileWidth = tileWidth * 0.8943885546;
	this.col = Math.floor(Math.random() * (Math.floor(game.map.level.height)))+1;
	this.row = Math.floor(Math.random() * (Math.floor(game.map.level.width)));

	this.width = 10;
	this.height = this.width;

	this.posX = (this.col * (this.tileWidth/2)) + (this.tileWidth / 2 - this.width / 2);
	this.posY = (this.row * (this.tileWidth/2)) + (this.tileWidth / 2 - this.height / 2);
	var iso = Util.cartesianToIso(this.posX, this.posY);
	this.posX = iso.x;
	this.posY = iso.y;

	this.id = id;
	this.color = null;

	switch (this.id) {
		case 1:
			this.color = "red";
			break;
		case 2:
			this.color = "blue";
			break;
		case 3:
			this.color = "green";
			break;
		case 4:
			this.color = "grey";
			break;
		case 5:
			this.color = "yellow";
			break;
		case 6:
			this.color = "orange";
			break;
		case 7:
			this.color = "aquamarine";
			break;
		case 8:
			this.color = "purple";
			break;
		case 9:
			this.color = "black";
			break;
		case 10:
			this.color = "brown";
			break;
		default:
			console.log("item no esperado");
			break;
	}

	this.tick = function () {
		this.update();
		this.render();
	}.bind(this);

	this.update = function () {

	}.bind(this);

	this.render = function () {
		game.context.fillStyle = this.color;
		game.context.fillRect(this.posX + game.map.gapX, this.posY + game.map.gapY, this.width, this.height);
	}.bind(this);
}