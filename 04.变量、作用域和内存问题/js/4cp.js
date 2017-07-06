//函数参数只有按值传递
function setName(obj) {
	obj.name = 'lin';
	obj = new Object();
	obj.name = 'feng';
}
var peron = new Object();
setName(person); //person.name -'lin'

//引用类型按值传递实际上可以理解成在内部重写这个obj时引用的就是一个局部对象，函数运行后就会被销毁了
//个人理解就是把引用的地址当做一个值来传递，当重新赋值会改写这个变量。

//typeof & instanceof
//前者主要检测基本类型
//后者检测引用类型，不过在框架集中也存在问题
//后者检测引用类型最好方法还是用toString(),Gm.js有相应的函数

//标记清除 & 引用计数
/*
 * IE中的DOM 和BOM以COM对象实现，COM的垃圾收集用的引用计数
 * 闭包中如果还有DOM对象则无法回收，造成内存泄漏
 */

