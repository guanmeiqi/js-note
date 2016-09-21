var ary = [0,1,2,3,4,5,6,7,8,9];
var initialValue;

Array.prototype.iReduce = function(handler, initialValue) {
	if (typeof handler !== 'function') {
		throw new Error(handler + 'is not a function!');
	}
	var ary = this;
	var i = 0;
	var tempCurrent = initialValue;
	// 未传initialValue，啃一口自己
	if (arguments.length === 1) {
		i = 1;
		tempCurrent = ary[0];
	}

	for (; i<ary.length; i++) {
		tempCurrent = handler(tempCurrent, ary[i], i, ary);
	}
	return tempCurrent;
}

var newAry = ary.iReduce(function(previous, current, index, ary) {
	console.log(previous, current, index, ary);
	//console.log(this);
	//console.log('======================');
	return previous + current;
}, initialValue);
console.log(newAry);