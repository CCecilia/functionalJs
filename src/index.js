import { B, C, I, K, S, T } from "./utils/combinators";

import { IOContainer } from "./utils/containers";
import { compose } from "./utils/compose";

// import { ramda as R } from "ramda";
const R = require("ramda");

// insertHtml :: Str -> Str -> Undefined
const insertHtml = R.curry((selector, html) => {
  const elem = document.querySelector(selector);
  elem.innerHTML = html;
});

// insertHtml("#slideApp", '<h1 class="message"></h1>');

// insertHtml(".message", "hello world");

function iAmPure(selector, html) {
  return new IOContainer(function () {
    const elem = document.querySelector(selector);
    if (elem) {
      elem.innerHTML = html;
    }
  });
}

const io = iAmPure(
  "#slideApp",
  '<h1 class="message">safe inside my container</h1>'
);
io.perform();
