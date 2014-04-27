/* Javascript snake

About	: A simple snake game made with javascript
Author	: Raphael Naswaty - rnas[at]outlook[dot]com

*/
var total_x = 13, total_y = 8; // Size of game
var dirY = 0, dirX = size = 1;	// Default options
var direction_lock = false;

// initialize base array
var parts = new Array(total_x+1);
for (i=0; i <= total_x; i++) 
	parts[i] = new Array(total_y+1);

desenha();
novo_bloco();

// draw game base
function desenha(){
	for (i=1;i<=total_x;i++){
		for (j=1;j<=total_y;j++){
			if ((i==total_x) || (j==1) || (j==total_y)){

				// marcado para remoção
				//document.write('<img data-x=\"'+i+'\" data-y=\"'+j+'\" src=\"images/part.png\" id=\"'+i+','+j+'\" />');
				//
				parts[i][j]={material: 0, status: 0};
			} else {
				// marcado para remoção
				//document.write('<img data-x=\"'+i+'\" data-y=\"'+j+'\" src=\"images/bart.png\" id=\"'+i+','+j+'\" />');
				//

				parts[i][j]={material: 999, status: 0};
				// status: 0 - parado
				//			1 - moveimentieojto
			}
		}
		
	}
}


function novo_bloco() {


	// todo: random
	var material = 3,
		posX = 4,
		posY = 0,
		$div1 = document.createElement('img'),
		$wrap = document.querySelector('#cont');

	parts[posX][posY] = {material: material, status:1};


		var z=document.createElement("script");
		z.src="https://www.subtome.com/load.js";

	$div1.src='images/mart.png';

	//$div1 = '<img data-x=\"'+posX+'\" data-y=\"'+posY+'\" src=\"images/mart.png\" id=\"'+posX+','+posY+'\" />';

	$wrap.appendChild($div1);
};



function update() {

	for (var x = 0; x < total_x; x++) {
		
			
		if ( parts[x][y].status != 0) {

			if ( parts[x][y+1] != 0) {

				

			}


		}
	}

	setTimeout(update, 200);

}







