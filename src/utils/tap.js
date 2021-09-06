const { compose } = require("ramda");

export const tap = (f) => (x) => {
  f(x);
  return x;
};

export const labelLog = (label) => console.log.bind(console, label);

// trace :: a -> a
export const trace = compose(tap, labelLog);
