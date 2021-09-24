const sum = (a, b, ...args) => {
    let result = 0;
    if(a != undefined) {
        result = a;
    } else {
        return 0;
    }

    if(b != undefined) {
        result += b;
    }

    result += args.length > 0 ? args.reduce((subsum,arg) => subsum += arg) : 0;
    return result;
}
console.log(sum(1,2,3,4));
console.log(sum(1,2));
console.log(sum(1));


// reduce() : 배열의 요소의 합을 구하는 메서드이다