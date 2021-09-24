var parts = ['shoulders', 'knees'];
var lyrics = ['head', ...parts, 'and', 'toes']; // 배열 합침

var arr = [1,2,3];
var arr2 = [...arr];    // 배열 복사
arr2.push(4);

console.log(arr2);


var obj1 = { foo : 'bar' , x : 42 };
var obj2 = { foo : 'baz' , x : 13 };

var clonedObj = {...obj1};
console.log(clonedObj);

var mergedObj = {...obj1, ...obj2};
