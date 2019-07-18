/**
 * Returns Linear prediction to Z
 * from 2 arrays with values
 * @param {number[]} x X Values
 * @param {number[]} y Y Valuez
 * @param {number} z Number to Predict
 * 
 * @example ([1,2,3,4,5] [5, 5, 5, 6.8, 9], 100) should return 101
 * 
 */
const regression = (x, y, z) => {

      let x1 = 0, y1 = 0, xy = 0,xx = 0, b = 0;

for (let i = 0; i < y.length; i++) {
      // debug print
      //console.log('Dado ' + x[i] + ' => ' + y[i]);
      x1 += x[i];
      y1 += y[i];
      xy += x[i]*y[i];
      xx += x[i]**2;
}

b = ((y.length * xy) - (x1 * y1)) / ((y.length * xx) - (x1 * x1));

return b!=0 ? Math.round((y1 - (b * x1)) / y.length + (b * z)):b;
 
}

var sum = (a,b) =>  a+b;

const regression2 = (x, y, z) => {
      let b = 0;
      let xy = x.map((el1, idx) =>  el1 * y[idx]).reduce(sum, 0);
      let x1 = x.reduce(sum ,0);
      let y1 = y.reduce(sum ,0);
      let xx = x.map(Math.pow).reduce(sum, 0);

      b = ((y.length * xy) - (x1 * y1)) / ((y.length * xx) - (x1 * x1));

      return b!=0 ? Math.round((y1 - (b * x1)) / y.length + (b * z)):b;
}


//Testing [1,2,3,4,5] [5, 5, 5, 6.8, 9], 100 should return 101.
let tprom = [0, 0];
for (let i=0;i<3; i++){
      let t0 = process.hrtime();
      regression([1,2,3,4,5],[5, 5, 5, 6.8, 9],100);
      let t1 = process.hrtime(t0);
      console.info('Execution time(f1): %ds %dms', t1[0], t1[1] / 1000000)
      tprom[0]+= t1[0];
      tprom[1]+= t1[1];
}
tprom[0] = tprom[0]/3;
tprom[1] = tprom[1]/3;


let tprom1 = [0, 0];
for (let i=0;i<3; i++){
      let t0 = process.hrtime();
      regression2([1,2,3,4,5],[5, 5, 5, 6.8, 9],100);
      let t1 = process.hrtime(t0);
      console.info('Execution time(f2): %ds %dms', t1[0], t1[1] / 1000000)
      tprom1[0]+= t1[0];
      tprom1[1]+= t1[1];
}
tprom1[0] = tprom1[0]/3;
tprom1[1] = tprom1[1]/3;
console.info('Execution time (average) -> Function1: %ds %dms', tprom[0], tprom[1] / 1000000)
console.info('Execution time (average) -> Function2: %ds %dms', tprom1[0], tprom1[1] / 1000000)

console.log('Creating Arrays for 100 numbers');

let xArray = [];
let yArray = [];
for (let i=0;i<100;i++){
      xArray[i] = i;
      yArray[i] = i+4;
}

//Testing [1,2,3,4,5] [5, 5, 5, 6.8, 9], 100 should return 101.
let tprom2 = [0, 0];
for (let i=0;i<3; i++){
      let t0 = process.hrtime();
      regression(xArray,yArray,1000);
      let t1 = process.hrtime(t0);
      console.info('Execution time(f1): %ds %dms', t1[0], t1[1] / 1000000)
      tprom2[0]+= t1[0];
      tprom2[1]+= t1[1];
}
tprom2[0] = tprom2[0]/3;
tprom2[1] = tprom2[1]/3;


let tprom3 = [0, 0];
for (let i=0;i<3; i++){
      let t0 = process.hrtime();
      regression2(xArray,yArray,1000);
      let t1 = process.hrtime(t0);
      console.info('Execution time(f2): %ds %dms', t1[0], t1[1] / 1000000)
      tprom3[0]+= t1[0];
      tprom3[1]+= t1[1];
}
tprom3[0] = tprom3[0]/3;
tprom3[1] = tprom3[1]/3;
console.info('Execution time (average) -> Function1: %ds %dms', tprom2[0], tprom2[1] / 1000000)
console.info('Execution time (average) -> Function2: %ds %dms', tprom3[0], tprom3[1] / 1000000)


console.log('Creating Arrays for 10000 numbers');

xArray = [];
yArray = [];
for (let i=0;i<10000;i++){
      xArray[i] = i;
      yArray[i] = i+4;
}

//Testing [1,2,3,4,5] [5, 5, 5, 6.8, 9], 100 should return 101.
let tprom4 = [0,0];
for (let i=0;i<3; i++){
      let t0 = process.hrtime();
      regression(xArray,yArray,50000);
      let t1 = process.hrtime(t0);
      console.info('Execution time(f1): %ds %dms', t1[0], t1[1] / 1000000)
      tprom4[0]+= t1[0];
      tprom4[1]+= t1[1];
}
tprom4[0] = tprom4[0]/3;
tprom4[1] = tprom4[1]/3;


let tprom5 = [0,0];
for (let i=0;i<3; i++){
      let t0 = process.hrtime();
      regression2(xArray,yArray,50000);
      let t1 = process.hrtime(t0);
      console.info('Execution time(f2): %ds %dms', t1[0], t1[1] / 1000000)
      tprom5[0]+= t1[0];
      tprom5[1]+= t1[1];
}
tprom5[0] = tprom5[0]/3;
tprom5[1] = tprom5[1]/3;
console.info('Execution time (average) -> Function1: %ds %dms', tprom4[0], tprom4[1] / 1000000)
console.info('Execution time (average) -> Function2: %ds %dms', tprom5[0], tprom5[1] / 1000000)