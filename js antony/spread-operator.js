const arr = [1, 2, 3, 4, 5];
// const first = arr[0];
// const second = arr[1];
// const rest = arr.slice(2);
const [first, second, ...rest] = arr;

const clone = [...arr];

// const arr3 = arr1.concat(arr2);
const arr3 = [...arr1, ...arr2];

const obj = { a: 1, b: 2, c: 3 };
// const d = obj.a;
// const b = obj.b;
const { a: d, b, ...rest } = obj;

const clone = { ...obj };

// const obj3 = Object.assign({}, obj1, obj2);
const obj3 = { ...obj1, ...obj2 };

// rest parameters
function log(...messages) {
    return messages.join(' ');
}