const R = require("ramda");

export class IOContainer {
  constructor(fn) {
    this.value = fn;
    if (R.not(R.is(Function, fn))) {
      throw `IOContainer expects function, actual ${R.type(fn)}`;
    }
  }

  // map :: (IOContainer io) => io (a -> b) ~> (b -> c) -> io (b -> c)
  map(fn) {
    return new IOContainer(() => fn(this.value()));
  }

  // mapAsync :: (IOContainer io) => io (a -> b) ~> (b -> c) -> io (b -> c)
  mapAsync(fn) {
    const val = this.value();

    return new IOContainer(() => (R.is(Promise, val) ? val.then(fn) : fn(val)));
  }

  perform() {
    this.value();
  }
}
