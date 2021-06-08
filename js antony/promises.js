const promise1 = fetch(url);

const promise2 = promise1.then((response) => response.json());

const promise3 = promise2.then((body) => console.log(body));

// promise chaining

fetch(url)
    .then((response) => response.json())
    .then((body) => console.log(body))
    .catch((error) => console.error(error))
    .finally(() => { console.log('Done.') });

fetch(url)
    .then((response) => {
        response.json()
            .then((body) => console.log(body));
    })

Promise.all([ promise1, promise2 ])
    .then(([result1, result2]) => {});

Promise.race([ promise1, promise2 ]);

$.getJSON('http://swapi.dev/api/people/1', function(response) {
    $.getJSON('', function(response) {
        $.getJSON('', function(response) {

        });
    });
}, function(error) {});

setTimeout(() => {
    console.log('Yay!');
}, 1000);

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Yay!');
    }, 1000);
});