//ES5严格模式，'use strict',目地对ES3中不确定行为加以处理
//支持严格模式浏览器：IE10+， fox4+, chrome, opera12+
//特别注明：IE8不支持

//具有可读性
var a = 1,
	b ='first',
	c = ture;
var ECMAScriptDataType = ['Undefined', 'Null', 'Boolean', 'Number', 'String'].concat(['Object']); //5种基本数据类型加一种复杂数据类型

//测基本数据类型 typeof：操作符

//Undefined派生自Null, undefined == null--true
//如果定义一个变量想在未来某一时刻保存对象，应该显示让其保存null

//Booean():转型函数，可对任何数据使用
//假值： false, "", null, undefined, 0&NaN，记住6个假值其他类型值转换为true

//Number:IEEE754格式，严格模式8进制无效，并且ES5也不支持8进制
//数值转换：Number(), parseInt(), parseFloat()
/*
 * Number():在++，--， +，位操作(~,|,&，^，<<,>>,>>>)对非数值应用会进行该规则的转换,
 * 			Boolean		: true - 1 ; false - 0;
 * 			Number      : number;
 * 			Null        : null - 0;
 * 			Undefined   : undefined - NaN;
 * 			String      : 只有数字'123' - 123
 * 						：只有数字和浮点'1.23' - 1.23
 * 						: 有效16进制'0xa' - 10
 * 						: "" - 0
 * 						: 以上五条以外 's5' - NaN  '5s' - NaN
 * 			Object      : valueOf() - if(NaN) - toString()，实际如果改写valueOf返回NaN,那么Number(object)就是NaN,不经过toString
 * 						7.11号补充：存在valueOf并且有返回值无论是否是NAN都返回这个值，如果没有valueOF则调用toString()
 * 						toString优先的情况下也是这样
 * 			var obj = {};
 * 			obj.valueOf = function(){console.log('a');return 'obj'};
 * 			obj.toString = function(){console.log('b'); return '1'};
 * 
 * 以下两种方法专用于转换字符串
 * parseInt():
 * 			"" - NaN ,与Number的不同之处
 * 			ES3存在8进制，ES5不解析8进制
 * 			不识别'.'
 * 			提供第二个参数
 * 			parseInt('0xaf', 16) - 175;
 * 			parseInt('af') - NaN;
 * 			parseInt('10', 2) - 2; 这里的第二参数是把字符串按第二个参数来解析，toString则把数字转换成参数进制的字符串
 * 			parseInt('10', 8) - 8;
 * 			parseInt('10', 10) - 10;
 * 			parseInt('10', 16) - 16;
 * parseFloat():
 * 			"" - NaN
 * 			只解析10进制，始终忽略前导0
 * 			识别第一个'.',不识别第二个
 * 			没有第二个参数
 * 			parseFloat('1234b') - 1234
 * 			parseFloat('0xa') - 0
 * 			parseFloat('12.3') - 12.3
 * 			parseFloat('12e3') - 12000， 可以科学计数法，parseInt不行
 */
//String转换。String(undefined / null)， 其他用toString(),有一个参数
/*
 * toString():
 * 			var num = 10;
 * 			num.toString() - '10'
 * 			num.toString(2) - '1010'
 * 			num.toString(8) - '12'
 * 			num.toString(16) - 'a'
 */
/*
 * Object类型是所有对像实例的基础，即所有对象的原型最终指向
 * 			constructor: 创建当前对象的函数，可以人为更改，用这个属性不安全
 * 			hasOwnProperty(prop):
 * 			isPrototypeOf(object):
 * 			propertyIsEnumerable(prop):
 * 			toLocaleString():
 * 			toString():
 * 			valueOf():
 */
/*
 * !:Booean()转换后取反
 * &&:假值优先
 * ||:真值优先
 * 
 * + - * /  47页到50页，用处比较少，一般只对数字类型做处理
 * 
 * ==会类型转换，===不会
 * 
 * for in语句如果对null/undefined会报错，ES5修复，为了保证安全建议用之前检查null/undefined
 * 
 * 函数参数以arguments方式存在（类数组），命名参数提供便利，但是非必须
 * 有callee & length属性
 * 参数传递按值传递，不可能通过引用传递参数
 * 
 */