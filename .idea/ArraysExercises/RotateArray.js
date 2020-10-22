function rotate(arr) {
    let n = Number(arr.pop());
    n = n%arr.length;

    for (let i = 0; i < n; i++) {
        arr.unshift(arr.pop());
    }

    return arr.join(' ')
}


console.log(rotate(['1',
'2',
'3',
'4',
'2']))