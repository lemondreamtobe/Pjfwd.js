//函数参数只有按值传递
function setName(obj) {
	obj.name = 'lin';
	obj = new Object();
	obj.name = 'feng';
}
var peron = new Object();
setName(person); //person.name -'lin'

//typeof & instanceo

//标记清除 & 引用计数
/*
 * IE中的DOM 和BOM以COM对象实现，COM的垃圾收集用的引用计数
 * 闭包中如果还有DOM对象则无法回收，造成内存泄漏
 */

