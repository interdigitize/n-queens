/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var board = new Board({n: n});
  for (var i = 0; i < n; i++) {
    board.togglePiece(i, i);
  }
  var solution = board.rows();
  // console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;


};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;  
  // add a new board
  var board = new Board({n: n});
  var findSolution = () => {

    // check if all the pieces are on the board;
    if (pieces === n) {
      return;
    }
    // loop through the first row
    var pieces = 0;
    for (var row = 0; row < n; row++) {
      for (var col = 0; col < n; col++) {
        //
        // toggle a piece 
        console.log('row: ', row);
        console.log('column: ', col);
        board.togglePiece(row, col);
        //check if there is a row or col conflict
        if (board.hasRooksConflict(row, col)) {
          // if there is a row or column conflict, toggle it again 
          board.togglePiece(row, col);
        } else {
        
        }
      }
      
    }
    // if there are no more rows, increment solutionCount
    solutionCount++;
    console.log(board);
    // findSolution();
    
  };
  findSolution();
  
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
