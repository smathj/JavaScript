var user = {
                name : 'Jaenam',
                gender : 'male'
            }


            
var changeName = function(user, newName) {
    var newUser = user;
    newUser.name = newName;
    return newUser;

}


var user2 = changeName(user, 'Jung');

if(user != user2) {
    console.log('유저 정보가 변겅되었습니다.')
}

console.log(user.name, user2.name); // Jung Jung
console.log(user === user2);        // true


// 전역에 선언한 user 객체의 name만 바꼇다
// 불변하지 안해버렷당

// 즉, 원본이 변경되어서 문제가된다
