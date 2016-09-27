var aQuery = function(selector, context) {
       return  new aQuery.prototype.init();
}
aQuery.prototype = {
    init: function() {
        this.age = 18
        return this;
    },
    name: function() {console.log('name')},
    age: 20
}

aQuery.prototype.init.prototype = aQuery.prototype;

var age = aQuery().name()  //18
//console.log(age);