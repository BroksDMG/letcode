"use strict";
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const [...pricesStocks] = prices;
  let lowest;
  let inexofLowest;
  let dayForSale;
  let highest;
  let profit = [];
  for (let i = 0; i <= prices.length; i++) {
    lowest = Math.min(...pricesStocks);
    inexofLowest = pricesStocks.indexOf(lowest);
    dayForSale = pricesStocks.slice(inexofLowest, pricesStocks.length);
    pricesStocks.splice(inexofLowest, inexofLowest + 1);
    highest = Math.max(...dayForSale);
    profit.push(highest - lowest);
  }
  return Math.max(...profit);
};

console.log(maxProfit([7, 6, 4, 3, 1]));
console.log(maxProfit([2, 4, 1]));
console.log(maxProfit([4, 7, 2, 1]));
console.log(maxProfit([7, 11, 4, 2, 1]));

// "use strict";
// /**
//  * @param {number[]} prices
//  * @return {number}
//  */
// var maxProfit = function (prices) {
//   //   let lowest = Math.min(...prices);
//   //   let inexofLowest = prices.indexOf(lowest);
//   //   let dayForSale = prices.slice(inexofLowest, prices.length);
//   //   let highest = Math.max(...dayForSale);
//   //   let profit = highest - lowest;
//   // nie bierze pod uwagę innych profitów
//   // bo szuka najpierw najmniejszej a jak z niej nie ma profitu to kiniec
//   // jak zrobić profit nie tylko z najmniejszej?
//   // usunąć najmniejszy element jak sie go znajdzie
//   // zrobić pętle i wybierdalać najmniejszą liczbe za każdynm razem
//   const [...pricesStocks] = prices;
//   let lowest;
//   let inexofLowest;
//   let dayForSale;
//   let highest;
//   let profit = [];
//   for (let i = 0; i <= prices.length; i++) {
//     console.log("progit", profit, "priceStock", pricesStocks, "index", i);
//     lowest = Math.min(...pricesStocks);
//     inexofLowest = pricesStocks.indexOf(lowest);
//     dayForSale = pricesStocks.slice(inexofLowest, pricesStocks.length);
//     highest = Math.max(...dayForSale);
//     profit.push(highest - lowest);
//     pricesStocks.splice(inexofLowest, inexofLowest + 1);
//   }
//   //   console.log(
//   //     "indexofLowest",
//   //     inexofLowest,
//   //     "RestAfterLowest",
//   //     dayForSale,
//   //     "highest",
//   //     highest,
//   //     "profit",
//   //     profit
//   //   );
//   return Math.max(...profit);
// };

// // console.log(maxProfit([7, 1, 5, 3, 6, 4]));
// // console.log(maxProfit([7, 6, 4, 3, 1]));
// // console.log(maxProfit([2, 4, 1]));
// // console.log(maxProfit([4, 7, 2, 1]));
// console.log(maxProfit([7, 11, 4, 2, 1]));
