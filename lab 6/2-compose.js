'use strict';

const compose = (...fns) => {
    const errorHandlers = [];

    const composedFunction = (...args) => {
        try {
            return fns.reduceRight((result, fn) => [fn(...result)], args)[0]
        } catch (e) {
            errorHandlers.forEach((handler) => handler(e));
            return undefined;
        }
    };

    composedFunction.on = (event, handler) => {
        if (event === 'error') errorHandlers.push(handler);
    };

    return composedFunction;
};

const fn1 = (x) => x + 1;
const fn2 = (x) => { throw new Error('Ошибка в fn2'); };
const fn3 = (x) => x * 2;

const f = compose(fn3, fn2, fn1);

f.on('error', (e) => {
    console.error('Произошла ошибка:', e.message);
});

console.log(f(5));
module.exports = { compose };
