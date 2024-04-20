("use strict");
function possibleMoves(position) {
  if (typeof position !== "string" || position.length !== 2) {
    throw new Error("Invalid position");
  }

  const x = position.charCodeAt(0) - "a".charCodeAt(0) + 1;
  const y = parseInt(position[1]);

  const moves = [
    [-2, -1],
    [-2, 1],
    [-1, -2],
    [-1, 2],
    [1, -2],
    [1, 2],
    [2, -1],
    [2, 1],
  ];
  let count = 0;

  for (let move of moves) {
    const newX = x + move[0];
    const newY = y + move[1];

    if (newX >= 1 && newX <= 8 && newY >= 1 && newY <= 8) {
      count++;
    }
  }

  return count;
}

console.log(possibleMoves("a1")); //=> 2
console.log(possibleMoves("d5")); //=> 8
