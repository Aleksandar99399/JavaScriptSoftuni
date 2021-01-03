function solve(input) {
    const rows = [];
    //обхождане на входа
    for (let line of input) {
        //JSONparse на елементите
        const person = JSON.parse(line);

        //съставяме низ,съжържащ HTML ред със стойностите от обекта
        rows.push(createRow(person));
    }
    console.log('<table>')

    console.log(rows.join('\n'))
    //отпечатваме начолото
    console.log('</table>')
    //резултата
//края

    function createRow(person) {

        return [
            '\t<tr>',
            `\t\t<td>${person.name}</td>`,
            `\t\t<td>${person.position}</td>`,
            `\t\t<td>${person.salary}</td>`,
            '\t</tr>'].join('\n');
    }


}

solve(['{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}'])