// 배열의 메서드 map()
// 첫번째 : 콜백함수
// 두번째 : 참조할 this (생략 가능)

var newArr = [10,20,30].map(function(currentValue,index) {
    console.log(currentValue,index);
    return currentValue + 5;
});
console.log(newArr);