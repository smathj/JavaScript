// 기본문법
function add(a,b) {
    return a+b;
}

let add2 = (a,b) => a+b;
let add3 = (a,b) => {return a+b; }

console.log(add(1,2));      // 3
console.log(add2(1,2));     // 3
console.log(add3(1,2));     // 3

/*

add, add2, add3는 같다
{ } 를 생략한 경우 return 도 생략가능
{ } 는 있는데 return이 없다면 undefined 을 리턴함



{ } (O) : return 있어야 정상적임
{ } (X) : return 생략 가능(리턴은 함)

*/
