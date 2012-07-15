function validMoves(board,x,y) {
	value = board[x][y];
	if (value != 0) {
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
