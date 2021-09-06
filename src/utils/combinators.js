const { curry } = require("ramda");

// Identity combinator
exports.I = (value) => value;
// K  const combinator
exports.K = (value1) => (value2) => value1;
//C combinator, returna function with args flipped, R.flip()
exports.C = (func1) => (value1) => (value2) => func1(value2)(value1);
// compose binary
exports.B = (func1) => (func2) => (value) => func1(func2(value));
// thrush combinator, NOT R.t(), kind of like reverse compose
exports.T = (value) => (func) => func(value);
// D combinator
exports.D = (func1) => (value1) => (func2) => (value2) =>
  func1(value1)(func2(value2));
// S combinator, substituition combinator
// const S = (f) => (g) => (x) => f(x)(g(x));
exports.S = curry((func1, func2, value) => func1(value)(func2(value)));

// or :: (a -> b , a -> c) -> a -> b|c
exports.or = (func1, func2) => (value) => func1(value) || func2(value);

// ifElse :: (a -> bool, a -> b, a -> c) -> a -> b|c
const ifElse = (predicate, func1, func2) => (value) =>
  predicate(value) ? func1(value) : func2(value);

// when :: (a -> bool, a -> b) -> a -> a|b
const when = (func1, func2) => ifElse(func1, func2, I);
// const when = (func1, func2) => (value) => func1(value) ? func2(value) : value;

// conditions :: [[ a -> Bool, a -> * ]] -> a -> *
const conditions = (pairs) => (value) => {
  const [[predicateFunc, func], ...rest] = pairs;
  return predicate(value) ? func(value) : conditions(rest)(value);
};
