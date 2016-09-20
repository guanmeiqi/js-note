// 学习一个
var ary = [0,1,2,3,4,5,6,7,8,9];
var thisBind = '嚯嚯嚯';

// var newAry = ary.map(function(item, index, ary) {
// 	console.log(item, index, ary);
// 	console.log(this);
// 	return '曰 曰';
// }, thisBind);
// console.log(newAry);

// 钦定个function
Array.prototype.iMap = function(handler, thisBind) {
	var ary = this,
		newAry = [];
	for (var i=0; i<ary.length; i++) {
		var newItem = handler.call(thisBind, ary[i], i, ary);
		newAry.push(newItem);
	}
	return newAry;
}
var newAry = ary.iMap(function(item, index, ary) {
	console.log(item, index, ary);
	console.log(this);
	return '曰 曰';
}, thisBind);
console.log(newAry);