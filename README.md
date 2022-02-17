# Joystick

Kaluma library for joystick module.

# Wiring

Here is a wiring example for joystick.

| Raspberry Pi Pico | Joystick |
| ----------------- | -------- |
| 3V3               | VCC (+)  |
| GND               | GND      |
| GP15              | SW (SEL) |
| GP26 (ACD0)       | X (HOR)  |
| GP27 (ACD1)       | Y (VER)  |

![wiring](https://github.com/niklauslee/joystick/blob/main/images/wiring.jpg?raw=true)

# Install

```sh
npm install https://github.com/niklauslee/joystick
```

# Usage

Here is an example code.

```js
const x = 26;  // GP26 (ACD0)
const y = 27;  // GP27 (ACD1)
const sw = 15; // GP15

const {Joystick} = require('joystick');
const joy = new Joystick(x, y, sw);

setInterval(() => {
  let val = joy.read();
  let valX = val[0].toFixed(2);
  let valY = val[1].toFixed(2);
  let valS = val[2];
  console.log(`x:${valX}, y:${valY}, sw:${valS}`);
}, 500);
```

# API

## Class: Joystick

### new Joystick(x, y, sw)

- **`x`** `<number>` : The pin number which support ADC function and it shall be connected to X (HOR) pin of the joystick.
- **`y`** `<number>` : The pin number which support ADC function and it shall be connected to Y (VER) pin of the joystick.
- **`sw`** `<number>` : The pin number which support GPIO and it shall be connected to SW (SEL) pin of the joystick.

Internally set the SW pin to `INPUT_PULLUP` mode. If you have an external pull-up resistor for SW pin, then you need to change the mode after the instantiation.

### joystick.read()

- **Return** `<number[3]>`: Number array with the X, Y and SW value. X and Y value range is from 0 to 1.0 (middle is 0.5) and SW value is the `1` (normal) or `0` (pressed).
