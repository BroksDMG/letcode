
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    const len=A.length
   let sum=0;
   let counter=0;
   for (let i = 0; i < len; i++) {

       const nextIndex=(i+1)%len;
       //para elementow dodawana do sb i dzielona przez 2 jest wynik true to counter +1
       sum=(A[i]+A[nextIndex])%2===0;
       console.log(A[i]+A[nextIndex]);
       if(sum)counter++
       //jak obliczy jedna pare to przeskakuje o dwa indexy(jeden petla i jeden tutaj)
       i++
   }
   return counter;
}


console.log(solution([14,21,16,35,22,14,21,16,35,22,10]))
// console.log(solution([5,5,5,5,5]))
// console.log(solution([4,2,5,8,7,3,7]))