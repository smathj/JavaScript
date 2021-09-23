var obj = {
    
    outer : function() {
        console.log(this);
        var innerFunc1 = function() {
            console.log(this);
        };
        innerFunc1();

        var self = this;
        var innerFunc2 = function() {
            console.log(self);
        };
        innerFunc2();
    }
};
obj.outer();

/*
outer 스코프에서 self라는 변수에 this를 담아서 사용
*/