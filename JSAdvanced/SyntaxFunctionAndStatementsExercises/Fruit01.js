function solve(fruit,weightInGrams,price) {

    const weightInKilos=weightInGrams/1000;

    const total=weightInKilos*price;

    //console.log('I need $'+total.toFixed(2) +' to buy '+ weightInKilos.toFixed(2) + ' kilograms '+ fruit + '.')
    console.log(`I need $${total.toFixed(2)} to buy ${weightInKilos.toFixed(2)} kilograms ${fruit}.`)

}

solve('orange', 2500, 1.80);
//solve('apple', 1563, 2.35);