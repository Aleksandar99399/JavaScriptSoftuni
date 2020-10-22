//function solve(a, b) {
//
//    let result=1;
//    let number = Math.min(a, b);
//
//    for (let i = 1; i <= number; i++) {
//        if (a % i == 0 && b % i == 0) {
//            result=i;
//        }
//
//    }
//
//    console.log(result);
//}
//solve(15,5);

 
function solve(a, b) {
    let remainder = 1;

    let small = Math.min(a, b);
    let large = Math.max(a, b);

    do {
        remainder = large % small;

        large = small;
        small = remainder;

    }while (remainder!=0);

    console.log(large)
}

solve(2154 ,458)