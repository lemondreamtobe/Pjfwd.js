var js = [ECMAScript, DOM, BOM];

var ECMAScript = '语法 语句 类型 对象 关键字 保留字 操作符';

/*
 * DOM1级：DOM CORE & DOM HTML
 * DOM CORE: 定义如何映射XML文档结构
 * DOM HTML： 添加针对HTML的对象和方法
 * 
 * DOM2级：鼠标和用户界面事件，范围，遍历，CSS
 * 
 * DOM3级：扩展了DOM CORE，引入统一加载保存文档方式，DOM验证模块定义
 */
var DOM = ['DOM1级', 'DOM2级', 'DOM3级'];

//根本上讲BOM只处理浏览器窗口和框架，以下数组定义为扩展
var BOM = ['alert/propmt/confirm', 'moveto,by/resizeto,by/close','loacation', 'navigator', 'screen','cookie','XMLHttpRequest,ieActiveXObject'];

var summary = 'JS是一种专为网页交互和设计的脚本语言，由以下三部分组成' +
			  'ECMAScript,由ECMAScript-262定义，提供核心语言功能如上数组' +
			  'DOM,提供访问和操作网页内容的方法和接口' +
			  'BOM，提供和浏览器交互的方法和接口' +
			  'ES3在浏览器中得到普遍支持，ES5在IE8仅仅小部分支持，可以看作不支持了';

