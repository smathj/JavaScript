const person = {
    name : 'Lee'
}

person.age = '20';

// 단일
console.log(Object.getOwnPropertyDescriptor(person,'name'));
// 전체
console.log(Object.getOwnPropertyDescriptors(person));


// { value: 'Lee', writable: true, enumerable: true, configurable: true }
/*

프로퍼티 어트리뷰트는 Object.getOwnPropertyDescriptor() 메서드로 접근한다
value, writable, enumerable, configurable 을 내부슬록이라고 한다

value : 프로퍼티 키를 가지고 접근했을때 리턴하는 값
writable : 프로퍼티 값의 변경 여부, 
enumberable : 프로퍼티 열거 가능 여부,
configurable : 프로퍼티 재정의 가능 여부

디폴트는 모두 true (단, value는 해당값)
*/