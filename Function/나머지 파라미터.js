function myFunc(...args) {
    // 최소0 ~ 최대 N개
}

function myFunc(a, ...args) {
    // 최소1 ~ 최대 N개
}

function myFunc(a, b, ...args) {
    // 최소2 ~ 최대 N개
}

// 나머지 파라미터는 배열 객체로 넘어오기떄문에
// forEach와 어울린다

function myFunc(a, b, ...args) {
    //                    요소
    args.forEach(function(arg) {
        result += arg;
    })
    return result;
}

// (1)
function sum() {
    let result = 0;
    for(let i=0; i<arguments.length; i++) {
        result += arguments[i];
    }
    return result;
}
console.log(sum(1,2,3,4));