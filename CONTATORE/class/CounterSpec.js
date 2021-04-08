import Counter from './Counter.js'; // require 
import CounterElement from './CounterElement.js'

let contatore = new Counter()
contatore.increment()
contatore.increment()

console.log(console.value == 2);


contatore = new Counter(10)
contatore.increment()
contatore.increment()

console.log(console.value == 12);

/**
 * 1 arg partenza
 * 2 arg min
 * 3 arg max
 */
contatore = new Counter(10,10,15)
contatore.increment() //11
contatore.increment() // 12
contatore.increment() // 13

console.log(contatore.value == 13)

contatore.increment() // 14
contatore.increment() // 15
contatore.increment() // 15
contatore.increment() // 15

console.log(contatore.value == 15)




//new CounterElement('#counterA')
//new CounterElement('#counterB')