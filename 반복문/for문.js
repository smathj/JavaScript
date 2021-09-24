// (1) 기본형
//     자바와 같은 반복문
for(let i=1; i<=10; i++) {
    console.log(i);
}


console.log("------------------------------------------------------");


// (2) for-of문
//     모든요소에 대하여 반복문돌때 사용, 인덱스가 없다
let kakao = [
    {name : '라이언', age : 5},
    {name : '어피치', age : 4},
    {name : '콘', age : 2},
    {name : '무지', age : 3},
];

for(let member of kakao) {
    console.log('이름 : ' + member.name + ', 나이 : ' + member.age);
}

console.log("------------------------------------------------------");


// (3) for - in문
//     객체의 키만 return
let ryon = {
                name : '라이언', 
                age : 5,
                gender : 'male'
            };

for(let prop in ryon) {
    console.log('속성 : ' + prop + ', 값 : ' + ryon[prop]);
}


console.log("------------------------------------------------------");


// (4) forEach 문 
//     배열전용의 메서드, 가장 많이 사용함
let friends = [
    {name : '라이언', age : 5},
    {name : '어피치', age : 4},
    {name : '콘', age : 2},
    {name : '무지', age : 3},
];
//                        요소   인덱스번호
friends.forEach(function(friend,idx) {
    console.log('index Number : '+ idx + ', 이름 : ' + friend.name + ', 나이 : ' + friend.age);
    // console.log('이름 : ' + friend.name + ', 나이 : ' + friend.age);
});
