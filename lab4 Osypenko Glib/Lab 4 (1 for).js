//Итерирование циклами for

const a = sum(1, 2, 3) // a === 6
const b = sum(0) // b === 0
const c = sum(0) // c === 0
const d = sum(1, -1, 1) // d === 1
const e = sum(10, -1, -1, -1) // e === 7

function sum(...args) {
    let result = 0;
    for (let i = 0; i < args.length; i++) {
      result += args[i];
    }
    return result;
  }
  console.log(a, b, c, d, e);