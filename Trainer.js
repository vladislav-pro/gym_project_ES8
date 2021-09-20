class Trainer {
    constructor (name, cash) {
        this._name = name;
        this._cash = cash;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    get cash() {
        return this._cash;
    }

    addCash(cash) {
        this._cash += cash;
    }

    addCashAsync(cash, callback) {
        setTimeout(() => {
            let err;
            let data;
            if (cash > 0) {
                this._cash += cash;
                data = this._cash;
            } else {
                err = new Error("You don't have enough cash");
            }
            callback(err, data);
        }, 3000);
    }

    addCashPromise(cash) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (cash > 0) {
                    this._cash += cash;
                    resolve(this._cash);
                } else {
                    reject(new Error("You don't have enough cash"));
                } 
            }, 3000);
        });
    }
}
