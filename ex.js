const x = 26; // GP26 (ACD0)
const y = 27; // GP27 (ACD1)
const sw = 15; // GP15

const { Joystick } = require("./index");
const joy = new Joystick(x, y, sw);

setInterval(() => {
  let val = joy.read();
  let valX = val[0].toFixed(2);
  let valY = val[1].toFixed(2);
  let valS = val[2];
  console.log(`x:${valX}, y:${valY}, sw:${valS}`);
}, 500);
