class Gym {
    constructor(name, address) {
        this._name = name;
        this._address = address;
        this._trainers = [];
    }

    get name() {
        return this._name;
    }

    get address() {
        return this._address;
    };

    getTrainerByName(name) {
        let oneTrainer = this._trainers.find(trainer => trainer.name === name).name;
        return oneTrainer;
    }

    get trainers() {
        return this._trainers;
    }

    addTrainer(trainer) {
        this._trainers.push(trainer);
    }

    deleteTrainer(name) {
        let deleteTraiiner = this._trainers.find(trainer => trainer.name === name);
        const cansel = this._trainers.indexOf(deleteTraiiner);
        this._trainers.slice(cansel, 1);
    }

    payTraining(nameTrainer, payCash) {
        this._trainers.find(trainer => {
            if (trainer.name === nameTrainer) {
                trainer.addCash(payCash)
            }
        });
    }
}