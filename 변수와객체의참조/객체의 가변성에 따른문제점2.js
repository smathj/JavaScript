var user = {
    name : 'Jaenam',
    gender : 'male'
}


// 객체 그 자체를 새롭게 생성해서 리턴한다
var changeName = function(user, newName) {
    return {
        name : newName,
        gender : user.gender
    }

}


var user2 = changeName(user, 'Jung');

if(user != user2) {
console.log('유저 정보가 변겅되었습니다.')
}

console.log(user.name, user2.name); // Jaenam Jung
console.log(user === user2);        // false


// [해결] 
// 객체의 원본은 보존되었다.
// 하지만 , 11번 라인에서 하드코딩이 들어가있다 (성별 user.gender)
