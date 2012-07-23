// Generar nueva ficha a partir de sus coordenadas y su dueño
function token(x, y, owner) {
	this.x = x;
	this.y = y;
	this.owner = owner;
	// Nivel:
	// 1 = Ficha regular
	// 2 = Dama / Reina
	this.level = 1;
}

function newBoard(width, height) {
	board = new Array(width);
	for (var i = 0; i < width; i++) {
		board[i] = new Array(height);
		for (var j = 0; j < height; j++) {
			// Set value at this position
			if ((j+i)%2==0) {
				// i < 3 means first 3 lines
				if (i < 3) {
					board[i][j] = new token(i,j,1);
				}
				// i >x-4 means last 3 lines
				else if (i > width-4) {
					board[i][j] = new token(i,j,2);
				} else {
					board[i][j] = 0;
				}
			}
			else {
				// set empty when white cell
				board[i][j] = 0;
			}
		}
	}
	return board;
}

// Retorna un arreglo con las cordenadas de posibles movimientos
function validMoves(board,x,y) {

	// Ficha que se quiere mover
	value = board[x][y];

	// Si no es una casilla vacía
	if (value != 0) {

		// Límites del tablero
		var xlimit = board.length, ylimit = board[0].length;

		var result = new Array();

		if (board[x+value][y+1]==0) {
			result.push(new Array(x+value,y+1));
		}
		if (board[x+value][y-1]==0) {
			result.push(new Array(x+value,y-1));
		}
		return result;
	} else {
		// No token in selected cell
		return false;
	}
}

function moveToken(token) {
	return 2;
}