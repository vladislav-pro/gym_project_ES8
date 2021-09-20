class Client { 
    constructor (name, age, cash) {
        this._name = name;
        this._age = age;
        this._cash = cash;
        this._gym = null;
    }
    
    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    get age() {
        return this._age;
    }

    set age(age) {
        this._age = age;
    }

    get cash() {
        return this._cash;
    }
    
    addCash(newCash) {
        this._cash += newCash;
    }

    paycash(nameTrainer, paid) {
        if (this._cash >= paid ) {
            this._gym.payTraining(nameTrainer, paid);
            this._cash -= paid;
        }
    }

    get gym() {
        return this._gym;
    }

    set gym(gym) {
        this._gym = gym;
    }
}
