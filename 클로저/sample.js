var outer = function() {
    var a = 1;
    var inner = function() {
        return ++a;
    };
    return inner;
};
var outer2 = outer();           // inner 함수
console.log(outer2());          // 2
console.log(outer2());          // 3

//클로저
/*
outer함수를 참조하는 내부함수 inner를 외부로 전달할 경우(여기선 리턴)
outer의 실행 컨텍스트가 종료되어도 outer의 변수는 사라지지않는 현상
*/