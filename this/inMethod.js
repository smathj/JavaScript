// 메서드 내부에서의 this

var obj = {
    methodA : function() {console.log(this);},
    inner : {
        methodB : function() {console.log(this);}
    }
};

obj.methodA();
obj['methodA']();

obj.inner.methodB();
obj.inner['methodB']();

obj['inner'].methodB();
obj['inner']['methodB']();

// 객체의 프로퍼티로 호출할경우 메서드, 아니면 함수

