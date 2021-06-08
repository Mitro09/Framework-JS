// hoisting
sum(2, 3);

// function declaration
function sum(a, b) {
    return a + b;
}

sum(2, 3);

// function expression
const sum = function(a, b) {
    return a + b;
};

document.getElementById('button').onclick = function(event) {
    this;
};

document.getElementById('button').addEventListener('click', function(event) {

});

// global namespace pollution

// IIFE - Immediately Invoked Function Expression

(function(global) {
    var a = 2;
    console.log(a);
    global.b = 3;
})(window);

this;
const sum = (a, b) => {
    this;
    return a + b;
}

// sum: (a, b) -> a + b
const sum = (a, b) => a + b;

function sum(a = 0, b = 0) {
    return a + b;
}