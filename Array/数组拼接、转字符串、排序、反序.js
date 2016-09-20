// 1. 拼接
var ary1 = [1,2];
var ary2 = [3,4];
var ary3 = [5,6];
var newAry = ary1.concat(ary2, ary3);
console.log(newAry);

// 2. to string
var ary4 = ['hello', 'world'];
var newAry4 = ary4.join('_');
console.log(newAry4);

// 3. 排序
var ary5 = [6,3,87,4,2,6,9,0,5,3,21,3,4,8];
var newAry5 = ary5.sort(function(a, b) {
	console.log(a, b);
	return a - b;
});
console.log(newAry5);

// 4. 反序
var ary6 = [6,3,87,4,2,6,9,0,5,3,21,3,4,8];
var newAry6 = ary6.reverse();
console.log(ary6);