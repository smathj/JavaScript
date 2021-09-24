let kakao = [
    {name : '라이언', age : 5},
    {name : '어피치', age : 4},
    {name : '콘', age : 2},
    {name : '무지', age : 3},
];

// 기본형
let i = 0;
while(i < kakao.length) {
    console.log('이름 : ' + kakao[i].name + ', 나이 : ' + kakao[i].age);
    i++;
}

// do-while
i = 0;
do{
    console.log('이름 : ' + kakao[i].name + ', 나이 : ' + kakao[i].age);
    i++;
} while(i < kakao.length)