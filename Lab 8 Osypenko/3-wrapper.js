const contract = (fn, ...types) => (...args) => {
    args.forEach((arg, i) => {
        const type = types[i].name.toLowerCase()
        if (typeof arg !== type) {
            throw new TypeError(`Argument ${i} must be of type ${type}`);
        }
    });
  
    const result = fn(...args);
    const def = types[types.length - 1].name.toLowerCase()
    if (typeof result !== def) {
      throw new TypeError(`Result must be of type ${def}`);
    }
  
    return result;
};

const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
const res = addNumbers(2, 3);
console.dir(res); // Output: 5

module.exports = { contract };