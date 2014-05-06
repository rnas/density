game.module(
    'game.main'
)
.require(
	'game.scenes',
	'game.assets',
	'game.objects'
)
.body(function() {

game.start(SceneGame, 320, 480);
	
});
