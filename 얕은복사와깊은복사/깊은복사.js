var obj = {
    a : 1,
    b : {
        c : null,
        d : [1,2]    
    }
};



var obj2 = copyObjectDeep(obj);


obj2.a      = 3;
obj2.b.c    = 4;
obj2.b.d[1] = 3;


console.log('--------------------------------------');
console.dir('obj');
console.dir(obj);


console.log('--------------------------------------');
console.dir('obj2');
console.dir(obj2);