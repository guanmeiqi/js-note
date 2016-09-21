// 理解需求：数组中有一个匹配就终止循环，返回true/false
var ary = [1,2,3,4,5,65,6,78,8,9,9,0,0,4];
var thisBind = '被转换的this';

Array.prototype.iSome = function(hanlder, thisBind) {
	var ary = this;
	var isSomeOf = false;
	// 检查参数类型
	if (typeof hanlder !== 'function') {
		throw new Error(hanlder + 'is not a function');
	}
	for (var i=0; i<ary.length; i++) {
		isSomeOf = !!hanlder.call(thisBind, ary[i], i, ary);
		if (isSomeOf) break;
	}
	return isSomeOf;
}


var newAry = ary.iSome(function(item, index, ary) {
	console.log(item, index, ary);
	console.log(this);
	return item > 4;
}, thisBind);
console.log(newAry);