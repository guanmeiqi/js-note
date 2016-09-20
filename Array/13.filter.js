var ary = [0,1,2,3,4,5,6,7,8,9];
var thisBind = '嚯嚯嚯';

// 钦定个function
Array.prototype.iFilter = function(handler, bindThis) {
	var ary = this,
		newAry = [];
	for(var i = 0; i < ary.length; i++){
		var item = ary[i];
		handler.call(bindThis, item, i, ary) && newAry.push(item);
	}
	return newAry;
};

var newAry = ary.iFilter(function(item) {
	return /\d/.test(item);
});
console.log(newAry);