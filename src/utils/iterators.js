const { head } = require("ramda");

export const map = (fn, list) => {
  if (list.length) {
    return [fn(head(list)), ...map(fn, R.tail(list))];
  }

  return [];
};
