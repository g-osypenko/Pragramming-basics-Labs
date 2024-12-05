
// Реалізація функції inc для числового типу
function inc(n) {
    return n + 1;
}

const a = 5;
const b = inc(a);
console.dir({ a, b }); // { a: 5, b: 6 }

// Реалізація функції inc для об'єкта
function inc(num) {
    if (num && typeof num.n === 'number') {
        num.n++;
    }
}

const obj = { n: 5 };
inc(obj);
console.dir(obj); // { n: 6 }

// Підрахунок елементів різних типів у масиві (оригінальний підхід)
const array = [true, 'hello', 5, 12, -200, false, false, 'word', null, undefined, {}, [], () => {}];
const typeCount = { number: 0, string: 0, boolean: 0, object: 0, undefined: 0, function: 0 };

for (const item of array) {
    const type = typeof item;
    if (typeCount[type] !== undefined) {
        typeCount[type]++;
    }
}

console.dir(typeCount);
// { number: 3, string: 2, boolean: 3, object: 4, undefined: 1, function: 1 }

// Підрахунок елементів різних типів у масиві (динамічне створення ключів)
const dynamicTypeCount = {};

for (const item of array) {
    const type = typeof item;
    dynamicTypeCount[type] = (dynamicTypeCount[type] || 0) + 1;
}

console.dir(dynamicTypeCount);
// { boolean: 3, string: 2, number: 3, object: 4, undefined: 1, function: 1 }
