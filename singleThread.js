import getFib from './fibonacci.js';
console.time('codezup');

const fibNum = 40;

const f1 = getFib(fibNum);
console.log(`1. ${fibNum}th Fibonacci Number: ${f1}`);

const f2 = getFib(fibNum);
console.log(`2. ${fibNum}th Fibonacci Number: ${f2}`);
console.timeEnd('codezup');
