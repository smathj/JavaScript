var user = {
        name : 'Jaenam',
        urls : {
            portfolio : 'http://github.com/abc',
            blog      : 'http://blog.com',
            facebook  : 'http://facebook.com/abc'

        }
}


var user2 = copyObject(user);

user2.name = 'Jung'
console.log(user.name === user2.name)                      // false

user.urls.portfolio = 'http://portfolio.com';


console.log(user.urls.portfolio === user2.urls.portfolio); // true !!! 

user2.urls.blog = '';
console.log(user.urls.blog === user2.urls.blog);           // true !!! 


// [문제점] 
// 14번 라인과 다르게 19,22번은 서로 같은걸 참조해서 같다.
// 각자 따로따로 독립된 불변이길 바란다





