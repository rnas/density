game.module(
	'game.scenes'
)
.require(
	'engine.scene'
)
.body(function () {

SceneGame = game.Scene.extend({
    backgroundColor: 0xff0000,

    init: function() {
   		var scenario = new Scenario(),
   			rock = new Rock();
    }
});

});
