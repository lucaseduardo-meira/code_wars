function isSolved(board) {
  var win = 0;
  if (
    board[0][0] !== 0 &&
    board[0][0] === board[1][1] &&
    board[1][1] === board[2][2]
  )
    return board[1][1];
  else if (
    board[0][2] !== 0 &&
    board[0][2] === board[1][1] &&
    board[1][1] === board[2][0]
  )
    return board[1][1];

  board.every((array, idx) => {
    if (array[0] === array[1] && array[1] === array[2]) {
      win = array[0];
      return false;
    }
    array.every((spot, idx) => {
      if (board[0][idx] === board[1][idx] && board[1][idx] === board[2][idx]) {
        win = board[1][idx];
        return false;
      }
      return true;
    });
    return true;
  });
  if (win === 0) {
    const finish = board.every((array) => {
      if (array.includes(0)) return false;
      return true;
    });
    if (finish === false) return -1;
    else return 0;
  }

  return win;
}
