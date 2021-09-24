var fruits = ['apple', 'banana', 'peach'];
var $ul = document.createElement('ul');         // 공통코드

fruits.forEach(function(fruit) {                // (A)
    var $li = document.createElement('li');
    $li.innerText = fruit;
    $li.addEventListener('click',function() {   // (B) 클로저
        alert('your choice is ' + fruit);
    });
    $ul.appendChild($li);
});
document.body.appendChild($ul);