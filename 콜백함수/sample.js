var count = 0;
var timer = setInterval(function() {
    console.log(count);
    if(++count > 4) {
        clearInterval(timer);   // 종료
    }
},300);
// 0.3초