class Person {
    #age;

    _age = 38;

    constructor(name) {
        this.name = name;
    }

    get age() {
        return this._age;
    }

    set age(age) {
        this._age = age;
    }
}

const person = new Person();
person.age = 39;

class Person {
    constructor(private name) {
    }
}