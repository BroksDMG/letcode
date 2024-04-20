("use strict");
import inputData from "./inputData.js";

const lines = inputData.trim().split("\n");
const data = lines.map((line) => {
  const [source, target, weight] = line.split(" ");
  return [source, target, parseInt(weight)];
});
const cities = [];
data.forEach(([source, target, weight]) => {
  if (!cities.includes(source)) cities.push(source);
  if (!cities.includes(target)) cities.push(target);
});

const n = cities.length;
const graph = Array.from({ length: n }, () =>
  Array.from({ length: n }, () => Infinity)
);

data.forEach(([source, target, weight]) => {
  const sourceIndex = cities.indexOf(source);
  const targetIndex = cities.indexOf(target);
  graph[sourceIndex][targetIndex] = weight;
  graph[targetIndex][sourceIndex] = weight;
});
console.log(graph);
function heldKarp(graph) {
  const n = graph.length;
  const memo = Array(1 << n)
    .fill(null)
    .map(() => Array(n).fill(-1));

  function dp(mask, pos) {
    if (mask === (1 << n) - 1) return graph[pos][0];

    if (memo[mask][pos] !== -1) return memo[mask][pos];

    let ans = Infinity;

    for (let i = 0; i < n; i++) {
      if ((mask & (1 << i)) === 0) {
        // Sprawdź czy miasto nie zostało odwiedzone
        ans = Math.min(ans, graph[pos][i] + dp(mask | (1 << i), i));
      }
    }

    return (memo[mask][pos] = ans);
  }

  return dp(1, 0);
}
console.log("Najmniejszy możliwy czas podróży:", heldKarp(graph), "minut");
