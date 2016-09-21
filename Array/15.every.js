// 理解需求：数组每一项都要能匹配
var ary = [1,2,3,4,5,65,6,78,8,9,9,0,0,4];
var thisBind = '被转换的this';

Array.prototype.iEvery = function(hanlder, thisBind) {
	var ary = this;
	var isEvery = true;
	if (typeof hanlder !== 'function') {
		throw new Error(hanlder + 'is not a function.');
	}
	for (var i=0; i<ary.length; i++) {
		var isEvery = !!hanlder.call(thisBind, ary[i], i, ary);
		if (!isEvery) break; 
	}
	return isEvery;
};

var newAry = ary.iEvery(function(item, index, ary) {
	return item > -1;
}, thisBind);

console.log(newAry);