// for h5

var Zom = $ = function(selectorName) {
	var xx = function(selectorName) {
		this.selector = document.querySelector(selectorName);
	}

	xx.prototype = {
		constructor: xx,

		/*
		 * DOM
		 */
		hasClass: function(className) { //console.log(this); // 构造函数
			var reg = new RegExp("(?:^| +)" + className + "(?: +|$)");
			return reg.test(this.selector.className);
		},
		addClass: function(className) {
			if (!this.hasClass(className)) {
				this.selector.className += ' ' + className;	
			}
		},
		removeClass: function(className) {
			var reg = new RegExp("(?:^|\s+)" + className + "(?:\s+|$)", "g");
			this.selector.className = this.selector.className.replace(reg, ' ');
		},

		/*
		 * BOM
		 */
		
		/*
		 * utils
		 */
		trim: function(str) {
			if (typeof str !== 'string') {
				throw new Error(str + '不是一个字符串！');
			}
			return str.replace(/(?:^\s+)|(?:$\s+)/g, '');
		},
		// 检测数据类型
		checkType: function(variable) {
			return Object.prototype.toString.call(variable);
		},
		isPlainObject: function(obj) {
			return this.checkType(obj) === '[object Object]' ? true : false
		},
		isEmptyObject: function(obj) {
			if (this.isPlainObject(obj)) 
			return JSON.stringify(obj) === '{}';
			else return false;
		},
		isArray: function(ary) {
			return this.checkType(ary) === '[object Array]' ? true : false
		},
		isEmptyArray: function(ary) {
			if ( this.isArray(ary) )
			return ary.length === 0;
			else return fasle; 
		}
	}

	return new xx(selectorName);
}

console.log($('#zs').removeClass('zs1'));
console.log($().isArray([]));