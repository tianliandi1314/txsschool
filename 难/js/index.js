/**
 *index.js.html
 *@auther Administrator
 *@create 2016-09-01 11:42 2016/9/1
 *Created by Administrator on 2016/9/1.
 **/
'use strict';
function* fibs() {// Generator Function
    let a = 0;
    let b = 1;
    while (true) {
        yield a;
        // [a, b] = [b, a + b];
        b = a + b;
        a = b - a;
    }
}
let [first, second, third, fourth, fifth, sixth] = fibs();
console.log(first, second, third, fourth, fifth, sixth);
