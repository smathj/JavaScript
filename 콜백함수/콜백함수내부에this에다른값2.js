// 콜백 함수 내부의 this에 다른 값을 바인딩하는 방법 2
// 내부에서 this를 사용하지 않는 방법

var obj1 = {
    name : 'obj1',
    func : function() {
            console.log(obj1.name);
    }
};
setTimeout(obj1.func, 1000); // 1초뒤