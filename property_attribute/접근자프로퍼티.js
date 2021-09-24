/*
접근자 프로퍼티 getter / setter
*/

const person = {
    firstName : 'Ungmo',
    lastName : 'Lee',

    // fullName은 접근자 함수로 구성된 접근자 프로퍼티다
    // getter 함수
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },

    // 마찬가지로 접근자 프로퍼티
    // setter 함수
    set fullName(name) {
        [this.firstName, this.lastName] = name.split(' ');
    }
};

console.log(person.firstName + ' ' + person.lastName);

// setter 호출
person.fullName =  '나태 쿤';
console.log(person);

// getter 호출
console.log(person.fullName);

let descriptor = Object.getOwnPropertyDescriptor(person, 'firstName');
console.log(descriptor);

descriptor = Object.getOwnPropertyDescriptor(person, 'fullName');
console.log(descriptor);
