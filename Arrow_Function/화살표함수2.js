// 나머지 파라미터로 곱하기 구하기
let multiply = (a,b, ...args) => {
    let result = a * b;
    for(let i=0; i < args.length; i++) {
        result *= args[i];
    }
    return result;
}
console.log(multiply(1,2,3,4));