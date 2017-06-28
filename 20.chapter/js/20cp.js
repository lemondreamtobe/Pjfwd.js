//JSON
/*语法：
 * 简单值：string number boolean null 不支持undefined
 * 
 * 对象:属性加''
 * 		{
 *			'name' : 'lin',
 * 			'age'  ： 22
 * 		}
 * 
 * 数组： 数组值可为这三者任意类型
 *解析：
 * ES5：定义了JSON的行为规范，IE8也支持
 * stringify() js to JSON
 * 		两个参数：1.过滤器，数组或者函数 2.缩进选项
 * 		var book = {
 * 				'title' : 'lin',
 * 				'edietion' : 3,
 * 				'authors' : ['nicholas c.zakas']
 * 			}
 * 		JSON.stringify(book, ['title','edition']);
 * 		JSON.stringify(book, function(key, value) {
 * 				switch(key) {
 * 					case 'title':
 * 						return 
 * 					case 'year':
 * 					defauult:
 * 						return value;
 * 				}
 * 			})	
 * 		序列化顺序：
 * 		如果对象存在toJSON，则调用，否则返回对象本身
 * 		如果有第二个参数，应用这个函数过滤器，传入函数过滤器的值是第一步返回的值
 * 		第二步返回的每个值进行序列化
 * 		如果提供第三个参数，执行相应的格式化
 * parse()     JSON to js
 * 		一个参数： 1.还原函数
 * 
 */