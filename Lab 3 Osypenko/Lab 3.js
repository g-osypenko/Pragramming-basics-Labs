
// Завдання 1: Реалізуйте функцію random
function random(min, max) {
    if (max === undefined) {
        max = min;
        min = 0;
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Завдання 2: Реалізуйте функцію generateKey
function generateKey(length, characters) {
    let key = '';
    for (let i = 0; i < length; i++) {
        key += characters[random(characters.length - 1)];
    }
    return key;
}

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
console.log(generateKey(16, characters)); // приклад виклику

// Завдання 3: Преобразуйте IP адресу (IPv4) в число
function ipToNumber(ip = '127.0.0.1') {
    return ip.split('.')
        .map(Number)
        .reduce((acc, byte, index) => acc + (byte << (8 * (3 - index))), 0);
}

console.log(ipToNumber('10.0.0.1')); // 167772161
console.log(ipToNumber('192.168.1.10')); // -1062731510

// Завдання 4: Інтроспекція об'єкта
const iface = {
    m1: (x) => [x],
    m2: function (x, y) {
        return [x, y];
    },
    m3(x, y, z) {
        return [x, y, z];
    }
};

const introspect = (obj) => {
    return Object.entries(obj)
        .filter(([_, value]) => typeof value === 'function')
        .map(([key, func]) => [key, func.length]);
};

console.log(introspect(iface)); // [['m1', 1], ['m2', 2], ['m3', 3]]
