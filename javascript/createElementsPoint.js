function createElementsPoint () {
    var x = 160,
    	typeElementPoint = ['algodao', 'algodao', 'pedra', 'pedra', 'madeira'],
        elementPoint = elementsPoint.create(x, -20, typeElementPoint[parseInt(Math.random() * 5)]);

    elementPoint.body.mass = 20;

    game.physics.arcade.accelerateToXY(elementPoint, x, 100, 100);
};