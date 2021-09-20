const metal = new Gym ("Metal", 10);

const andrey = new Trainer ("Andrey", 30);
const sashaVip = new VipTrainer ("Sasha", 5, 2);

const Yulia = new Client ("Yulia", 21, 100);
Yulia.gym = metal;


metal.addTrainer(andrey);
metal.addTrainer(sashaVip);

/*
andrey.addCashAsync(10, function (err , data) {
    if (err) {
        console.error(err);
    } else {
        console.log("Data", data);
        andrey.addCashAsync(5, function(err, data) {
            if (err) {
                console.error(err);
            } else {
                console.log("Data", data);
                andrey.addCashAsync(-4, function(err, data) {
                    if (err) {
                        console.error(err);
                    } else {
                        console.log("Data", data);
                    }
                });
            }
        });
    }
});
*/
/*
andrey.addCashPromise(10)
    .then(() => {console.log(andrey.cash);return Promise.resolve()})
        .then(() =>  andrey.addCashPromise(5))
        .then(() => {console.log(andrey.cash);return Promise.resolve()})
            .then(() => andrey.addCashPromise(-4))
            .then(() => {console.log(andrey.cash);return Promise.resolve()});
*/
/*
// Promise
andrey.addCashPromise(10)
    .then(() => {console.log(andrey.cash); 
            return andrey.addCashPromise(5);})
    .then(() => {console.log(andrey.cash);
            return andrey.addCashPromise(-4);})
    .then(() => console.log(andrey.cash))
    .catch((err) => console.error(err));

// Async

async function addCashPromiseAsync(cash1, cash2, cash3) {
    try{
        const money1 = await andrey.addCashPromise(cash1);
        console.log(money1);
        const money2 = await andrey.addCashPromise(cash2);
        console.log(money2);
        const money3 = await andrey.addCashPromise(cash3);
        console.log(money3);
    } catch(err) {
        console.error(err);
    }
}

addCashPromiseAsync(10, 5, -4);
 */