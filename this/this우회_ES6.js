var obj = {
    outer : function() {
        console.log(this);
        var innerFunc = () => {
            console.log(this);
        };
        innerFunc();
    }
};
obj.outer();

/*
ES6의 화살표함수는 this 바인딩 과정이 빠지게되어
상위 스코프의 this를 그대로 사용할 수 있다
*/
