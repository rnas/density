var density = new Phaser.Game(320, 480, Phaser.AUTO, 'game');

density.state.add('Load', Game.Load);

density.state.start('Load');