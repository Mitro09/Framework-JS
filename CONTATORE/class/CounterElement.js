import Counter from "./Counter.js"

class CounterElement {

    constructor(selector){
        // .class
        const el = document.querySelector(selector)

        //console.log(el.dataset)
        this.title = el.dataset.title || 'predefinito';
        this.value = parseInt(el.dataset.value) || 0;
        this.max = parseInt(el.dataset.max) || null; 
        this.min = parseInt(el.dataset.min) || null;

        this.counter = new Counter(this.value,this.min,this.max)

        //backtick = ALT+96 o \ con tastiera ing
        el.innerHTML = `<div class="name">${this.title}</div>
                        <button class="btn-less">-</button>
                        <span class="display">
                            ${this.value}
                        </span>
                        <button class="btn-add">+</button>`;
        this.addBtn = el.querySelector('.btn-add')
        this.lessBtn = el.querySelector('.btn-less')
        this.display = el.querySelector('.display')
        
        this.addBtn.addEventListener('click',this.addBtnHandler)
        this.lessBtn.addEventListener('click',this.lessBtnHandler)
        
        //this.counter = new Counter(this.value,this.min,this.max)
        //console.log("constructor",this)
    }

    addBtnHandler = () => {
        this.counter.increment()
        // console.log(this.counter.value)
        this.display.innerHTML = this.counter.value
    }

    lessBtnHandler = () => {
        this.counter.decrement()
        //console.log(this.counter.value) 
        this.display.innerHTML = this.counter.value
    }
}

export default CounterElement