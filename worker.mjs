"use strict";

export function add({ a, b }) {
  return a + b;
}

export function multiply({ a, b }) {
  return a * b;
}

export function multiply100({ a, b }) {
  let counter = 0;
  while (counter < 900000000) {
    counter++;
  }
  console.log("counter :>> ", counter);
  if (counter === 900000000) {
    return a * b * 100;
  }
}
