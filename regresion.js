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
      console.log('Dado ' + x[i] + ' => ' + y[i]);
      x1 += x[i];
      y1 += y[i];
      xy += x[i]*y[i];
      xx += x[i]**2;
}

b = ((y.length * xy) - (x1 * y1)) / ((y.length * xx) - (x1 * x1));

return b!=0 ? Math.round((y1 - (b * x1)) / y.length + (b * z)):b;
 
}

//Testing [1,2,3,4,5] [5, 5, 5, 6.8, 9], 100 should return 101.
let tprom = [0, 0];
for (let i=0;i<3; i++){
      let t0 = process.hrtime();
      console.log(`Dado 100 = > ${regression([1,2,3,4,5],[5, 5, 5, 6.8, 9],100)}`);
      let t1 = process.hrtime(t0);
      console.info('Execution time: %ds %dms', t1[0], t1[1] / 1000000)
      tprom[0]= t1[0];
      tprom[1]= t1[1];
}
tprom[0] = tprom[0]/3;
tprom[1] = tprom[1]/3;
console.info('Execution time (average): %ds %dms', tprom[0], tprom[1] / 1000000)