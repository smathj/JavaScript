var obj = {
    a : 1,
    b : {
        c : null,
        d : [1,2],
        func1 : function() {
            console.log(3)
        },
        func2 : function() {
            console.log(4)
        }
    }
};

var obj2 = copyObjectViaJSON(obj);

obj2.a      = 3;
obj2.b.c    = 4;
obj2.b.d[1] = 3;


console.log('--------------------------------------');
console.dir('obj');
console.dir(obj);


console.log('--------------------------------------');
console.dir('obj2');
console.dir(obj2);
// obj1의 함수계열은 다 버리고 복사햇다
