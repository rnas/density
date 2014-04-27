function create() {
	console.log('Create');

	game.physics.startSystem(Phaser.Physics.ARCADE);

    // adiciona o background
    game.add.sprite(0, 0, 'bg');

    // // Adiciona o jogador
    mundo = game.add.sprite(0, 30, 'fundo');
    game.physics.arcade.enable(mundo);
    mundo.enableBody = true;
    mundo.body.collideWorldBounds = true;

    bola = game.add.sprite(0, 30, 'bola');
    bola.enableBody = true;
    bola.physicsBodyType = Phaser.Physics.ARCADE;

    

    // // Adiciona as frutas
    // frutas = game.add.group();
    // frutas.enableBody = true;
    // frutas.physicsBodyType = Phaser.Physics.ARCADE;

    // // Adiciona as estragadas
    // estragadas = game.add.group();
    // estragadas.enableBody = true;
    // estragadas.physicsBodyType = Phaser.Physics.ARCADE;



};