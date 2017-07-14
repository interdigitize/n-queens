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
  var pieces = 0;
  var findSolution = () => {
    // if the number of pieces equals the number of rows, it is done
    if (pieces === n) {
      //chalk up a solution
      solutionCount++; 
      //exit the function call
      return;
    }
    var row = pieces;
    for (var col = 0; col < n; col++) {
      if (board.rows()[row][col] === 0) {
      // toggle a piece 
        board.togglePiece(row, col);
        pieces++;
        //check if there is a row or col conflict
        if (board.hasAnyRooksConflicts(row, col)) {
          // if there is a row or column conflict, toggle it again 
          board.togglePiece(row, col);
          pieces--;
        } else {
          findSolution();
          board.togglePiece(row, col);
          pieces--;
        }
      }
    }
  };
  findSolution();
  
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  debugger;
  var board = new Board({n: n});
  board.togglePiece(0, 1);
  var pieces = 1;
  var solution = [];
  var findSolution = () => {
    // if the number of pieces equals the number of rows, it is done
    if (pieces === n) {
      //chalk up a solution
      solution.push(board.rows());
      //solutionCount++; 
      //exit the function call
      return;
    }
    var row = pieces;
    for (var col = 0; col < n; col++) {
      row = pieces;
      if (board.rows()[row][col] === 0) {
      // toggle a piece 
        board.togglePiece(row, col);
        pieces++;
        //check if there is a row or col conflict
        if (board.hasAnyRooksConflicts(row, col) || board.hasAnyQueensConflicts(row, col)) {
          // if there is a row or column conflict, toggle it again 
          board.togglePiece(row, col);
          pieces--;
        } else {
          findSolution();
        }
      }
    }
  };
  findSolution();
  return solution[0];



  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0; //fixme
  
  var board = new Board({n: n});
  var pieces = 0;
  var findSolution = () => {
    // if the number of pieces equals the number of rows, it is done
    if (pieces === n) {
      //chalk up a solution
      solutionCount++; 
      //exit the function call
      return;
    }
    var row = pieces;
    for (var col = 0; col < n; col++) {
      if (board.rows()[row][col] === 0) {
      // toggle a piece 
        board.togglePiece(row, col);
        pieces++;
        //check if there is a row or col conflict
        if (board.hasAnyRooksConflicts(row, col) || board.hasAnyQueensConflicts(row, col)) {
          // if there is a row or column conflict, toggle it again 
          board.togglePiece(row, col);
          pieces--;
        } else {
          findSolution();
          board.togglePiece(row, col);
          pieces--;
        }
      }
    }
  };
  findSolution();

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
