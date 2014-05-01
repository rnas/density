Game = {};

var pieces,
	piece,
	name,
	cursors;

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

		cursors = this.input.keyboard.createCursorKeys();
	},
	update: function () {
		this.physics.arcade.collide(pieces, pieces, function () {
			if (pieces.children[pieces.children.length-1].body.touching.down && pieces.children[pieces.children.length-1].body.position.y <= 150){
				alert('Game Over');
			} else if (pieces.children[pieces.children.length-1].body.touching.down) {

				this.createPiece();
			}
		}, null, this);

		if (piece.body.onFloor()) {
			this.createPiece();
		}

		if (cursors.left.isDown) {
			piece.body.velocity.x = -150; 
		} else if (cursors.right.isDown) {
			piece.body.velocity.x = 150;
		}		
	},
	createPiece: function () {
		name = pieces.children.length;
		piece = pieces.create(120, 0, 'rock');
		piece.name = 'Rock_' + name;
		this.physics.arcade.enable(piece);
		piece.body.velocity.y = 200;
		piece.body.mass = 0;
		piece.body.bounce = 0;
		piece.body.collideWorldBounds = true;
	}
};