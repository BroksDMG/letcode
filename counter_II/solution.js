/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  let a = init;
  const b = init;
  return {
    increment: function () {
      return (a += 1);
    },
    decrement: function () {
      return (a -= 1);
    },
    reset: function () {
      a = b;
      return a;
    },
  };
};

// console.log(createCounter(5));

const counter = createCounter(5);
counter.increment(); // 6
// console.log(counter.increment());
counter.reset(); // 5
// console.log(counter.reset());
counter.decrement(); // 4

// console.log(counter.decrement());

// The three functions are:

// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.

// Example 1:

// Input: init = 5, calls = ["increment","reset","decrement"]
// Output: [6,5,4]
// Explanation:
// const counter = createCounter(5);
// counter.increment(); // 6
// counter.reset(); // 5
// counter.decrement(); // 4
// Example 2:

// Input: init = 0, calls = ["increment","increment","decrement","reset","reset"]
// Output: [1,2,1,0,0]
// Explanation:
// const counter = createCounter(0);
// counter.increment(); // 1
// counter.increment(); // 2
// counter.decrement(); // 1
// counter.reset(); // 0
// counter.reset(); // 0
