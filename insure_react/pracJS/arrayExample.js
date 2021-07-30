let car = {
    name : "sonata",
    ph : 500,
    start : function() {
        console.log("engine start")
    },
    stop : function() {
        console.log("engine stop")
    }
};

let cars = ['bmw', 'saab', 'ford', car, 2];

console.log(cars[3]);

for (let index = 0; index < cars.length; index++) {
    const car = cars[index];
    //   console.log(car);
}

for (x of cars) {
    console.log(x);
}

cars.map((car) => {
    console.log(car);
});

// String [] names = new Array[3]
// ArrayList 개념이랑 비슷