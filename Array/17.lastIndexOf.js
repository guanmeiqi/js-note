// 理解需求：从尾部开始，查询数组是否有某一项，如果有则返回index，没有则返回-1
var ary = [1,2,3,4,5,65,6,78,8,9,9,0,0,4];

Array.prototype.iLastIndexOf = function(item, startIndex) {
	var ary = this;
	var index = -1;
	if (typeof startIndex === 'undefined') {
		startIndex = ary.length - 1; // 没传值
	} else {
		startIndex = Number(startIndex) || 0; // 正数 or NaN
		if (startIndex < 0) {
			startIndex = ary.length-1; // 负数
		}
	}
	// i的处理有点坑
	for (var i=startIndex; i>-1; i--) {
		if (item === ary[i]) {
			index = i;
			break;
		}
	}
	return index;
}

var index = ary.iLastIndexOf(1, {});
console.log(index);


