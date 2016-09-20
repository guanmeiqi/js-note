// 学习一个
var ary = [0,1,2,3,4,5,6,7,8,9];
var thisBind = 'haha';
// ary.forEach(function(item, index, ary) {
// 	console.log(item, index, ary);
// 	console.log(this); // window 和 thisBind
// }, thisBind);

// 钦定个function
Array.prototype.iForEach = function(handler, thisBind) {
	var ary = this;
	//thisBind = thisBind ? thisBind : global || window;// 可要可不要，当thisArg为undefined时，JS引擎会将window作为其调用者
	for(var i=0; i<ary.length; i++) {
		handler.call(thisBind, ary[i], i, ary);
	}
}

ary.iForEach(function(item, index, ary) {
	console.log(item, index, ary);
	console.log(this); // window 和 thisBind
}, thisBind);