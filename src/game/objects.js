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
		this.sprite = new game.Sprite('rock');

		game.scene.stage.addChild(this.sprite);
	}
});

});