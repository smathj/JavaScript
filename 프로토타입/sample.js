// var Test = function() {
//     console.log('생성자 작동');
// }

// Test.prototype.bark = function() {
//     console.log('왈왈');
// }

// var dog = new Test();
// dog.bark();
// console.dir(dog);


// 생성자
var Person = function(name) {
    this._name = name;
}

Person.prototype.getName = function() {
    return this._name;
};

var test = new Person('나북이');
console.dir(test.getName());


console.log(test.__proto__.getName());  // undefined , 원본을 바라봐서그럼

console.log(Person.prototype === test.__proto__);  // true