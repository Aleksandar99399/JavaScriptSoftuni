function extract(arr) {
    let num = arr[0];
    let result = [];


    arr.map(x => {
        if (x >= num) {
            result.push(x);
            num=x;
        }
    })
    return result.join('\n');
}

console.log(extract([20,
    3,
    2,
    15,
    6,
    1]))