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
		pieces.enableBody = true;
		this.createPiece();

		cursors = this.input.keyboard.createCursorKeys();
	},
	update: function () {
		this.physics.arcade.collide(pieces, pieces, function () {
			var thisPiece = pieces.children[pieces.children.length-1];

			if (thisPiece.body.touching.down && thisPiece.body.position.y <= 150){
				this.paused = true;
				piece.body.velocity = 0;
			} else if (thisPiece.body.touching.down) {
				this.createPiece();
				thisPiece.body.velocity = 0;
			}
		}, null, this);

		if (piece.body.onFloor()) {
			piece.body.velocity = 0;
			this.createPiece();
		}

		if (cursors.left.justPressed(20) === true) {
			piece.body.x = parseInt(piece.body.x) - parseInt(piece.body.width) - 1;
		} else if (cursors.right.justPressed(20) === true) {
			piece.body.x = parseInt(piece.body.x) + parseInt(piece.body.width) + 1;
		} else if (cursors.down.justPressed(20) === true) { 
			piece.body.velocity.y = 400;
		} else {
			piece.body.velocity.x = 1;
		}

		if (cursors.down.isUp) {
			piece.body.velocity.y = 200;
		}
	},
	createPiece: function () {
		name = pieces.children.length;

		piece = pieces.create(122, 0, 'rock');
		piece.name = 'Rock_' + name;
		piece.body.velocity.y = 200;
		piece.body.mass = 0;
		piece.body.bounce = 0;
		piece.body.collideWorldBounds = true;
	}
};