//String:字符串类
//对象、类、实例
//例如：自然界中万物都是对象，类是对 对象的一个细分，比如我们的人类、动物类、植物类...，实例是每一个类别中的一个具体的事物，比如刘骥就是人类中的一个实例
//js中的对象就是一个泛指，所有东西都是对象，类是把这个泛指具体的细分：Object、Array、RegExp、Date、String、Node....这些都是js中内置类，实例是类中的一个具体的东西，比如：{}是Object中一个实例,"珠峰"是String中的一个实例...
//Array这个数组类中提供了很多的方法，每一个数组都是他里面一个实例，所以数组可以用这些方法

/*var str="welcome to ZHUFENG!good good study，day day up!";
console.log(str instanceof String);*/
//一个字符串是由多个字符组成的
//str.length 获取字符串中字符的个数（字符串的长度）
//字符串中也存在索引，也是从0开始的，‘w’这个字符的索引就是0
//空格、换行这些特殊的符号也是一个字符

//1、charAt(索引) 获取指定索引位置的字符
// charCodeAt(索引) 获取指定索引位置的字符对应的ASCII值
//ASCII值:每一个字母、汉字、特殊符号都有一个对应的 码值(Unicode)
/* for(var i=0;i<str.length;i++){
     console.log(str.charCodeAt(i));
 }*/

//2、字符串截取
//substr(n,m) 从索引n开始截取m个字符
//substring(n,m) 从索引n开始，找到索引m处(不包含m)，将找到的字符返回
//slice(n,m) 从索引n开始，找到索引m处(不包含m)，将找到的字符返回 slice支持负数作为索引,str.length+负数索引
//如果只写了一个n，没有m：代表截取到末尾位置
//console.log(str.slice(-11));

//3、查找字符的索引
//indexOf(字符):获取指定字符在字符串中第一次出现的索引位置
//lastIndexOf(字符)：获取指定字符在字符串中最后一次出现的索引位置
//如果没有这个字符，返回的是-1，基于这个理念我们经常用这两个方法判断字符串中是否包含某个字符
/*console.log(str.indexOf("!"));
console.log(str.lastIndexOf("!"));
if(str.indexOf("q")>-1){
    //代表包含q这个字符
}*/

//4、大小写转换
//toLowerCase:将所有字母转换为小写
//toUpperCase:将所有字母转换为大写

//5、替换
//replace(要替换的老字符，替换成的新字符)
//在不使用正则的情况下，每一次调用方法只能替换一次
//一般情况下，我们都是用正则处理的

//6、将字符串按照指定的分隔符拆分成数组
//split(分割符)
var s = "my name is ciny";
console.log(s.split(" "));
var ary=[1,2,3,4];
console.log(eval(ary.join("+")));

//7、match ? 正则常用的

var str = "dfagawfiwajfihauhfudwiahp";
console.log(str.substr(0, 3));


// charAt()
// charCodeAt()
// concat() //
// fromCharCode() //
// indexOf()
// lastIndexOf()
// match()
// replace()
// search() //
// slice()
// split()
// substr()
// substring()
// toLowerCase()
// toUpperCase()
// valueOf() //