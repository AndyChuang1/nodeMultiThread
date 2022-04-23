import { Worker } from 'worker_threads';

const fibNum = 40;
console.time('codezup');
//Create new worker
const worker = new Worker('./fibonacci.js', { workerData: { num: fibNum } });
//Listen for a message from worker
worker.once('message', (result) => {
  console.log(`${fibNum}th Fibonacci Number: ${result}`);
});
worker.on('online', () => {
  console.log(`1.${fibNum}th `);
});

worker.on('error', (error) => {
  console.log(error);
});

worker.on('exit', (exitCode) => {});

//Create new worker2
const worker2 = new Worker('./fibonacci.js', { workerData: { num: fibNum } });
//Listen for a message from worker
worker2.once('message', (result) => {
  console.log(`${fibNum}th Fibonacci Number: ${result}`);
});
worker.on('online', () => {
  console.log(`2.${fibNum}th `);
});

worker2.on('error', (error) => {
  console.log(error);
});

worker2.on('exit', (exitCode) => {
  console.log(exitCode);
});

process.on('exit', (code) => {
  console.timeEnd('codezup');
  console.log(code);
});
