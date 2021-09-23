var user = {
    name : 'Jaenam',
    gender : 'male'
}

// 스크립트 뺴놈
//  추가
// const copyObject = function (target) {
//     const result = {};
//     for (let props in target) {
//       result[props] = target[props];
//     }
//     return result;
//   };

var user2 = copyObject(user);
user2.name = 'Jung'

if(user != user2) {
console.log('유저 정보가 변겅되었습니다.')
}

console.log(user.name, user2.name); // Jaenam Jung
console.log(user === user2);        // false


// [해결] 
// copyObject() (얕은 복사)라는 함수를 통해서 모든 프로퍼티를 복사후
// 변경하고자 하는부분만 변경하였다


