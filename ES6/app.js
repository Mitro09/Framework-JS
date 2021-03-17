//le variabili const non possono essere duplicate
//const non può far cambiare valore alla variabile
const saluto ="ciao";

//in questo caso si può aggiungere elementi all'array ma non cambiare la scatola
const colori = [];
colori.push("red");
console.log(colori);

//con let puoi trasformare array in una var
let numeri = [1,2,3,4];
numeri = "uno due tre";

const num = [1,2,3,4,5,6,7,8,9];
// 2,4,6,8......
const perDueArray = num.map(function(numero){
    return numero*2;
})

//equivalente arrow function --- con un solo argomento nella callback non servono le tonde
//se la funzione di callback contiene una solo riga di codice posso omettere le graffe e il return
const res = num.map(numero => numero*2);


//function expression
let sum = (a,b) => a+b;
//function expression v2
let sum = function(a,b){
    return a+b;
}

function sum(a,b){
    return a+b;
}


