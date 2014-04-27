function update() {
    movePiece();

    if (i) {
        createElementsPoint();
        i=0;
    };



    game.physics.arcade.collide(barreira, elementsPoint, bateu);

};

var movePiece = function () {

    if (game.input.pointer1.isDown) {
        if (game.input.pointer1.worldX > 160) {
            // Gira para direita

            console.log('x');

        };

        if (game.input.pointer1.worldX <= 160) {
            // Gira para esquerda

            console.log('y');
        
        };
    };

};

var bateu = function () {
    console.log('bateu');
}