const { compose, apply, prepend, reduce } = require("ramda");
const { trace } = require("./tap");

compose.clog = compose(
  apply(compose),
  prepend(trace),
  reduce((acc, fn) => [].concat(acc, fn, trace), []),
  Array
);

export { compose };
