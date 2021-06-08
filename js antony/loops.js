const arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
}

const obj = { a: 1, b: 2, c: 3 };

for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
        const value = obj[key];
    }
}

for (const item of arr) {

}

arr.forEach((item, index) => {
    console.log(item, index);
});

const timesTwo = (item) => item * 2;
const isEven = (item) => item % 2 === 0;
const square = (item) => item * item;

const doubles = arr.map(timesTwo);
const evens = arr.filter(isEven);
const firstEven = arr.find(isEven);
const indexOfFirstEven = arr.findIndex(isEven);
const thereIsAtLeastOneEven = arr.some(isEven);
const areAllEven = arr.every(isEven);

// initialization
let sum = 0;
for (const item of arr) {
    // update
    sum += item;
}
// return
console.log(sum);

let sum = arr[0];
for (let i = 1; i < arr.length; i++) {
    sum += arr[i];
}

const sum = arr.reduce((acc, item) => {
    acc += item;
    return acc;
}, 0);

const sum = arr.reduce((acc, item) => acc + item);

const sum = (a, b) => a + b;

const sumOfItems = arr.reduce(sum);

const evens = arr.reduce((acc, item) => {
    if (isEven(item)) {
        acc.push(item);
    }
    return acc;
}, []);

function sumOfSquareEvens(arr) {
    let sum = 0;
    for (const item of arr) {
        if (isEven(item)) {
            const square = item * item;
            sum += square;
        }
    }
    return sum;
}

const sumOfSquareEvens = arr
    .filter(isEven)
    .map(square)
    .reduce(sum);
