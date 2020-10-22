function delimiter(arr) {
    let del = arr.pop();

    return arr.join(del);
}

console.log(delimiter(['One',
'Two',
'Three',
'Four',
'Five',
'-'
]));