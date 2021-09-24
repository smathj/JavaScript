// 콜백함수의 파라미터 순서는 정해져있다
// 첫번쨰 : 배열의 요소
// 두번쨰 : 배열의 인덱스

var newArr2 = [10,20,30].map(function(index, currentValue) {
    console.log(index,currentValue);
    return currentValue + 5;
});
console.log(newArr2);