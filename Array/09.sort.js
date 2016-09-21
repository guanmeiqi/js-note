// 09. 排序
var ary5 = [6,3,87,4,2,6,9,0,5,3,21,3,4,8];
var newAry5 = ary5.sort(function(a, b) {
	console.log(a, b);
	return a - b;
});
console.log(newAry5);