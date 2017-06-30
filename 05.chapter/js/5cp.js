//Array
/*
 * pop push
 * shift unshift
 * reverse sort():可接受比较函数作为参数，比较逻辑：小返回-1，大返回正1
 * concat():可快速复制数组,传入参数则合成新数组
 * slice()，不影响原始数组，只返回新数组，slice(1, 4),从1到4，不包括1和4项
 * splice(),影响数组,splice(0, 1)，从0开始删除1项，也可以插入，splice(0, 0, 'lin');
 * ES5：indexOf(),lastIndexOf()，IE8不支持
 * ES5：every(),每一项运行函数，全为true则返回true
 * 		some(),相对有一项就返回true
 * 		filter()，返回true的项的数组
 * 		foreach()，对每一项运行函数不返回
 * 		map()， 对每一项运行函数并返回结果项的数组
 * 		迭代函数三个参数(item, index, array);
 * ES5: reduce ,reduceRight
 * 		迭代函数三个参数(prev, cur, index, array);
 */
//Date
/*
 * 日期格式化：
 * toDateString() "Tue Jun 27 2017"
 * toTimeString()  "17:10:40 GMT+0800 (中国标准时间)"
 * toLocaleDateString()  "2017-6-27"
 * toLocaleTimeString() "17:10:52"
 * toUTCString()  "Tue, 27 Jun 2017 09:11:13 GMT"
 * 
 * var time = new Date() ie下只支持2016/6/27
 */
//RegExp
/*
 * ES3中，字面量共享一个实例
 * 实例属性：
 * global： 
 * ignoreCase:
 * lastIndex:开始搜索下一个匹配项的字符位置
 * multiline:
 * source:字符串表示
 * exec()捕获，返回数组具有额外的index & input属性
 * 构造函数属性：
 * 			input:
 * 			lastMatch:
 * 			lastParen:
 * 			leftContext:
 * 			multiline:
 * 			rightContext:
 */
//Function
/*
 * arguments, this
 * apply, call
 * ES5: bind
 */
//Number
/*
 * 数值格式化字符串的方法
 * toFixed(),返回指定小数位的字符串 
 * var num = 10;
 * num.toFixed(2) - 10.00
 * num.toExponential(1) - 以科学计数法表示 1.0e+1
 * num.toPrecision(),会选择性用以上两种方法
 */
//String
/*
 * charAt ,charCodeAt, fromCharCode字符方法
 * concat  操作方法
 * slice, substr, substring
 * slice(1, 7) 从1到7，包括1和7的项
 * substr(1,7),从1开始切割7项，
 * substring(), 同slice;
 * indexOf, lastIndexOf 位置方法
 * 
 * ES5: trim
 * 匹配方法：match(),同exec()
 * search(), replace()
 */
P130