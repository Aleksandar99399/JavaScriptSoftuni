function matrix(arr) {
    let sum = arr[0].reduce((a, b) => a + b, 0);
    let isMagic = true;

    for (let i = 0; i < arr.length; i++) {
        let sumRow = arr[i].reduce((a, b) => a + b, 0);
        let sumCol = arr.map(x => x[i]).reduce((a, b) => a + b, 0);

        if (sumRow !== sum || sumCol !== sum) {
            isMagic = false;
        }
    }
    return isMagic
}


console.log(matrix([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]))