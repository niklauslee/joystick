class Joystick {
  constructor(x, y, sw) {
    this.x = x;
    this.y = y;
    this.sw = sw;
    pinMode(this.sw, INPUT_PULLUP);
  }

  read() {
    var x = analogRead(this.x);
    var y = analogRead(this.y);
    var sw = digitalRead(this.sw);
    return [x, y, sw];
  }
}

exports.Joystick = Joystick;
