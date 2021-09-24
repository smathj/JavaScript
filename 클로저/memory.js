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
outer = null;                   // null,undefined를 설정함으로써 GC가 수거하게끔함