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
  // store solution count
  var solutionCount = 0;  
  var possibleRows = window.findNRooksSolution(n);
  var possibleRowsLeft = possibleRows.slice();
  var board = [];

  // helper function that iterates through possibleRows and finds board solutions
  var findSolutions = function() {
    //loop through each possible row
    for (var i = 0; i < n - 1; i++) {
      var row = possibleRowsLeft[i];
      //add a row to the board
      console.log(possibleRowsLeft.length);
      if (!possibleRowsLeft.length) {
        //add to the solution 
        solutionCount++;
        //reset the board
        board = [];
        debugger;
        return;
      }
      //BUG SOMEWHERE HERE
      board.push(row);
      //remove the row from a possible option for the next row
      possibleRowsLeft.splice(i, 1);
      //recurse
      findSolutions();
    } 
    //exit the function
    return;
  };
  findSolutions();
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
