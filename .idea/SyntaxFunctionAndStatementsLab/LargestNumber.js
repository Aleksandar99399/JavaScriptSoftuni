function largestNumber() {
    var args = Array.from(arguments)

    var max = args[0]
    for (var i = 0; i < args.length; i++) {
        if (max < args[i]) {
            max = args[i];
        }
    }

    return 'The largest number is ' + max + ".";
}

//console.log(largestNumber(2,4,))

console.log(Math.pow(10,2));

