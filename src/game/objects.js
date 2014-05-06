game.module(
	'game.objects'
)
.body(function () {

Scenario = game.Class.extend({
	init: function () {
		this.sprite = new game.Sprite('scenario');

		game.scene.stage.addChild(this.sprite);
	}
});

Rock = game.Class.extend({
	init: function () {
		var x = game.system.width / 2,
			y = 0;

		this.sprite = new game.Sprite('rock');
		this.sprite.position.x = x;
		this.sprite.position.y = y;
		this.sprite.anchor.x = 0.5;

		game.scene.stage.addChild(this.sprite);
		game.scene.addObject(this);

		this.body = new game.Body({
			position: {x: x, y: y},
			velocityLimit: {x: 0, y: 100},
			mass: 1
		});
		game.scene.world.addBody(this.body);
	},
	update: function () {
		this.sprite.position.y = this.body.position.y;
	},
	collide: function () {
		console.log('Colidiu');
	}

});

});