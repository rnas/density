Game = {};

var pieces,
	piece;

Game.Load = function (game) {};

Game.Load.prototype = {
	preload: function () {
		this.load.image('scenario', '/images/scenario.jpg');
		this.load.image('rock', '/images/rock.png');
		this.load.image('cotton', '/images/cotton.png');
	},
	create: function () {
		this.physics.startSystem(Phaser.Physics.ARCADE);

		this.add.sprite(0, 0, 'scenario');

		pieces = this.add.group();
		this.createPiece();
	},
	update: function () {
		this.physics.arcade.collide(pieces, pieces, function () {
			if (pieces.children[pieces.children.length-1].body.touching.down && pieces.children[pieces.children.length-1].position.y > 70) {
				this.createPiece();
				console.log('Colidiu');
			}
		}, null, this);

		if (piece.body.onFloor()) {
			this.createPiece();
			console.log('Chão');
		}
	},
	createPiece: function () {
		piece = pieces.create(120, 0, 'rock');
		piece.name = 'Rock_' + pieces.children.length-1;
		this.physics.arcade.enable(piece);
		piece.body.gravity.y = 100;
		piece.body.collideWorldBounds = true;
	}
};