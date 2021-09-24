// 콜백함수로 어떤 객체의 메서드를 전달하더라도
// 그 메서드는 메서드가 아닌 함수로서 호출된다

var obj = {
    vals : [1,2,3],
    logValues : function(v,i) {
        console.log(this,v,i);
        console.log("----------------------------------------------------------");
    }
};
obj.logValues(1,2);
[4,5,6].forEach(obj.logValues);

