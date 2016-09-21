// 理解需求：查询数组是否有某一项，如果有则返回index，没有则返回-1
var ary = [1,2,3,4,5,65,6,78,8,9,9,0,0,4];
var thisBind = '被转换的this';

Array.prototype.iIndexOf = function(item, startIndex) {
	var ary = this;
	var index = -1;
	startIndex = Number(startIndex) || 0; // 这个地方，必须让它为number类型
	for (var i= startIndex; i<ary.length; i++) {
		if (item === ary[i]) {
			index = i;
			break;
		}
	}
	return index;
}

var index = ary.iIndexOf(3, -1); // 从索引为1开始找，能否找到3，找到则返回索引值，否则返回-1
console.log(index);