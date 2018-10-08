class SmartCalculator {
  constructor(initialValue) {
    this.number = eval(initialValue);
  }
  toString(){
    return eval(this.number);
  }

  add(number) {
    this.number += "+" + number;
    return this;
    // your implementation
  }

  subtract(number) {
    this.number += "-" + number;
    return this;
    // your implementation
  }

  multiply(number) {
    this.number+= "*" + number;
    return this;
    // your implementation
  }

  devide(number) {
    this.number += "/" + number;
    return this;
    // your implementation
  }

  pow(number) {
    this.number += "**" + number;
    return this;
    // your implementation
  }
}
this.number = eval(this.number);

module.exports = SmartCalculator;

