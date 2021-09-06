const R = require("ramda");

export class IOContainer {
  constructor(fn) {
    this.value = fn;
    if (R.not(R.is(Function, fn))) {
      throw `IOContainer expects function, actual ${R.type(fn)}`;
    }
  }

  perform(fn) {
    this.value();
  }
}
