
// 얕은 복사 버전
const copyObject = function (target) {
    const result = {};
    for (let props in target) {
      result[props] = target[props];
    }
    return result;
  };



// 깊은 복사 버전
var copyObjectDeep = function(target) {
  var result = {};
  if(typeof target === 'object' && target !== null) {   // obj 일때만
      for(var prop in target) {
        result[prop] = copyObjectDeep(target[prop]);    // key : value
      }
  } else {
    result = target;
  }
  return result;
}


// 깊은 복사 버전2 - JSON(메서드,setter,getter, __proto__ 무시)
var copyObjectViaJSON = function(target) {
  return JSON.parse(JSON.stringify(target));
};

