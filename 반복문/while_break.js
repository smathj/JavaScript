let kakao = [
    {name : '라이언', age : 5},
    {name : '어피치', age : 4},
    {name : '콘', age : 2},
    {name : '무지', age : 3},
];

let i = 0;
while(i < kakao.length) {
    if(i > 2) {
        break;
    }
    console.log('이름 : ' + kakao[i].name + ', 나이 : ' + kakao[i].age);
    i++;
}