// 1. 开头增加一个或者多个元素
// 2. 返回 newAry.length
// 3. 元素组增加
var ary1 = ['a', 'b', 'c', 'd'];
var newAry1 = ary1.unshift('new');
console.log(newAry1);
console.log(ary1);

// 1. 末尾增加一个或者多个元素
// 2. return newAry.length
// 3. 原数组增加
var ary2 = ['a', 'b', 'c', 'd'];
var newAry2 = ary2.push('new');
console.log(newAry2);
console.log(ary2);

// 1. 删除第一个元素
// 2. 返回被删除的元素
// 3. 原素组删除
var ary3 = ['a', 'b', 'c', 'd'];
var newAry3 = ary3.shift();
console.log(newAry3);
console.log(ary3);

// 1. 删除最后一个元素
// 2. 返回被删除的元素
// 3. 元素组删除
var ary4 = ['a', 'b', 'c', 'd'];
var newAry4 = ary4.pop();
console.log(newAry4);
console.log(ary4);

// 1. 指定index开始删除n位元素
// 2. 返回被删除的元素
// 3. 元素组改变
var ary5 = ['a', 'b', 'c', 'd'];
var newAry5 = ary5.splice(2, 2);
console.log(newAry5);
console.log(ary5);

// 1. [m, n)
// 2. 返回被查询的元素
// 3. 元素组被查询
var ary6 = ['a', 'b', 'c', 'd'];
var newAry6 = ary6.slice(1, 3);
console.log(newAry6);
console.log(ary6);