class VipTrainer extends Trainer {
    constructor (name, cash, level) {
        super (name, cash);
        this._level = level;
    }

    get level() {
        return this._level;
    }

    set level(number) {
        this._level = number;
    }
}