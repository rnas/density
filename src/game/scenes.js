game.module(
	'game.scenes'
)
.require(
	'engine.scene'
)
.body(function () {

SceneGame = game.Scene.extend({
    backgroundColor: 0xff0000,
    gravity: 2000,

    init: function() {
    	this.world = new game.World(0, this.gravity);

   		var scenario = new Scenario(),
   			rock = new Rock();
    }
});

});
