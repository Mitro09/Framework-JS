class CheboxList {
    constructor(selector) {
        const el = document.querySelector(selector);
        console.log(selector, el);
    }
}
//...............................fine

const difficolta = new CheboxList('#difficolta');
const ingredienti = new CheboxList('#ingredienti');