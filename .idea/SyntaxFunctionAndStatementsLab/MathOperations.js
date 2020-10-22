function solve(num1, num2, op) {

    const cases = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "*": (a, b) => a * b,
        "/": (a, b) => a / b,
        "%": (a, b) => a % b,
        "**": (a, b) => a ** b,
    };
    console.log(cases[op](num1, num2));

    // switch (op) {
    //     case "+":
    //         return num1+num2;
    //     case "-":
    //         return num1-num2;
    // }
}