// return없이도 클로저가 발생하는 경우

// (1)
(function() {
    var a = 0;
    var intervalId = null;
    var inner = function() {
        if(++a >= 10) {
            clearInterval(intervalId);
            // inner = null;
        }
        console.log(a);
    };
    intervalId = setInterval(inner, 1000); 
})();   // 즉시 실행 함수

// // (2)
// (function() {
//     var count = 0;
//     var button = document.createElement('button');
//     button.innerText = 'click';
//     button.addEventListener('click', function() {
//         console.log(++count, 'times clicked');
//     });
//     document.body.appendChild(button);
// })();