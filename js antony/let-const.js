'use strict'

function hello() {
    // hoisting

    for (let i = 0; i < 5; i++) {
        i
        const x = 2;
        x = 3;

        let x = 2;
        x += 3;

        const initialX = 2;
        const finalX = initialX + 3;
    }

    i;
}