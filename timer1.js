// const alarmTimer = process.argv.slice(2);

// const alarm = (typeNum) => {
//   if (typeNum.length === 0) {
//     return;
//   }
//   for (const num of typeNum) {
//     let alarmTime = Number(num);
//     if(Number.isFinite(alarmTime) && alarmTime >= 0) {
//       setTimeout(() => {
//         process.stdout.write('\x07');
//       }, alarmTime);
//     }
//   }
// }

// alarm(alarmTimer);


const args =  process.argv.slice(2)

function sortNumber(a, b) {
  return a - b;
}

const sortedArgs = args.sort(sortNumber)
for (let i =0;i<sortedArgs.length;i++){
  if (!isNaN(sortedArgs[i]) && sortedArgs[i]>0 ){

  setTimeout(() => {process.stdout.write('\x07');
console.log(sortedArgs[i])
}, sortedArgs[i] * 1000);
}
};