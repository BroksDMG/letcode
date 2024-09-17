var candy = function (ratings) {
  const n = ratings.length;
  const candies = Array(n).fill(1); // Każde dziecko dostaje przynajmniej 1 cukierek

  // Pierwsze przejście: od lewej do prawej
  for (let i = 1; i < n; i++) {
    let prev = ratings[i - 1];
    let curr = ratings[i];
    if (curr > prev) {
      candies[i] = candies[i - 1] + 1;
    }
  }

  // Drugie przejście: od prawej do lewej
  for (let i = n - 2; i >= 0; i--) {
    let next = ratings[i + 1];
    let curr = ratings[i];
    if (curr > next) {
      candies[i] = Math.max(candies[i], candies[i + 1] + 1);
    }
  }

  // Sumowanie cukierków
  return candies.reduce((a, b) => a + b, 0);
};
