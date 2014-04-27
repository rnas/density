function create() {
	//Adicionando física
	game.physics.startSystem(Phaser.Physics.ARCADE);

	//Adiciona o background
    game.add.sprite(0, 0, 'cenario');

    //Adicionado o Elemento para pontuação
    elementsPoint = game.add.group();
    elementsPoint.enableBody = true;
    elementsPoint.physicsBodyType = Phaser.Physics.ARCADE;

    game.add.sprite(0,420, 'barreira');
    barreira.enableBody = true;
    barreira.physicsBodyType = Phaser.Physics.ARCADE;
};