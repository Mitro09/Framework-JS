import Counter from './Counter.js'; // require 
//import CounterElement from './CounterSpecElements'

let contatore = new Counter()
contatore.increment()
contatore.increment()

console.log('parte da 0 e arriva a 2',contatore.value == 2);


contatore = new Counter(10)
//console.log('es',contatore.value);
contatore.increment()
contatore.increment()

console.log('parte da 10 e arriva a 12',contatore.value == 12);

/**
 * 1 arg partenza
 * 2 arg min
 * 3 arg max
 */
contatore = new Counter(10,10,15)
contatore.increment() //11
contatore.increment() // 12
contatore.increment() // 13

console.log('partendo da 10 devo arrivare a 13',contatore.value == 13)

contatore.increment() // 14
contatore.increment() // 15
contatore.increment() // 15
contatore.increment() // 15
//console.log("es",contatore)
console.log('il valore max deve essere 15',contatore.value == 15)

contatore = new Counter(12,10,15)
contatore.decrement() // 11
contatore.decrement() // 10
contatore.decrement() // 10
contatore.decrement() // 10

console.log('il valore min deve essere 10',contatore.value==10);




//parte da 10, minimo 4 e nessun max
//contatore = new Counter(10,4)

contatore = new Counter(2,4)
console.log('es',contatore.value)
console.log('min',contatore.value==4)

contatore = new Counter(300,3,100)
console.log('max',contatore.value==100)





//new CounterElement('#counterA')
//new CounterElement('#counterB')