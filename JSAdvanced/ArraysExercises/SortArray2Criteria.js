function sortArr(arr) {

    return arr.sort((a,b)=> a.length - b.length || a.toLowerCase().localeCompare(b.toLowerCase())).join('\n');
}


console.log(sortArr(['alpha',
'beta',
'gamma']))