'use strict';

const store = (x) => () => x;

const read = store(5)
console.log(read())

module.exports = { store };