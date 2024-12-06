'use strict';

const pipe = (...fns) => {
    for (const fn of fns) {
        if(typeof fn !== 'function') {
            throw Error('All compose arguments should be functions')
        }
    }
    return (num) => fns.reduce((acc, func) => func(acc), num)
}




module.exports = { pipe };
