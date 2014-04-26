
function update() {

    // movimento da cesta do jogador

    if (game.input.pointer1.isDown) {

        if (game.input.pointer1.worldY > 265) {

            if (game.input.pointer1.worldX > 240) {
                // Gira para direita

                console.log('x');

            }

            if (game.input.pointer1.worldX <= 240) {
                // Gira para esquerda

                console.log('y');
            
            }
        }
    }
}
