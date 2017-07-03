/*
 * 
 * Node类型
 * Node.ELEMENT_NODE :  1
 * Node.ATTRBUTE_NODE : 2
 * Node.TEXT_NODE : 3
 * Node.CDATA_SECTION_NODE : 4
 * Node.ENTITY_REFERENCE_NODE: 5
 * Node.ENTITY_NODE :　6
 * Node.PROCESSING_INSTRUCTION_NODE:7
 * Node.COMMENT_NODE :8
 * Node.DOCUMENT_NODE : 9
 * Node.DOCUMENT_TYPE_NODE:10
 * Node.DOCUMENT_FRAGMENT_NODE:11
 * Node.NOTATION_NODE:12
 * DOM中任何节点必居其一
 * 
 * Node基本属性和方法：
 * 	nodeType:上面12个，为了保证与IE的行为相同，可以用数字
 * 	nodeName: 使用前建议先检测节点类型，类型1则为标签名，nodeValue则为null
 * 	nodeValue: 使用前建议先检测节点类型,这两个属性分节点类型而有不一样的值
 * 	childNodes: NodeList对象
 * 	parentNode:
 * 	previousSibling:
 * 	nextSibling:
 * 	firstChild:
 * 	lastChild:
 * 	ownerDocument:整个文档的文档节点
 * 	appendChild:
 * 	insertBefore:
 * 	replaceChild:
 * 	removeChild:以上4个方法需取得parentNode节点在此节点上应用操作方法
 * 	cloneNode: 浅复制：复制节点本身，cloneNode(true):深复制包括子节点本身，但是事件不复制
 * 	normalize:用于整合节点当中的文本节点，和上一个方法是所有类型的节点都具有的
 * 
 * Document类型继承Document类型的HTMLDocument实例
 * nodeType:9,nodeValue:null,nodeNmae:'#document',parentNode:null,ownerDocument:null
 * 	title:
 * 	URI:页面完整的URL
 * 	domain:页面域名，通过设置内嵌框架的domain来实现不同子域之间的JS通信
 * 	referrer:来源页面的URL，没有则有“”；
 * 	getElementById:
 * 	getElementByTagName: HTMLCollection
 * 	getElementByName: 该类型特有方法
 * 	implementation.hasFeature:检测DOM可以实现那些级别的功能，259页
 * 	write,writeln,open,close
 * 	createElement:
 * 	createTextNode：
 * 	
 * 
 * Element类型
 * nodeType:1,nodeName:标签名,nodeValue:null,parentNode:Document || Element
 * 	.tagName:等于nodeName
 * HTML元素都由HTMLElement类型表示，直接继承与ELEMENT类型并添加了属性每个HTML元素都有如下属性：
 * 	id:
 * 	title:
 * 	lang:
 * 	dir:
 * 	className:
 * 	所有HTML元素都是由HTMLElement或者更具体的子类型来表示
 * 	getAttribute:
 * 	setArrribute:
 * 	removeAttribute:
 * 	getElementByTagName:元素子节点
 * 	attributes: 属性，Element类型才会使用该属性
 * 				：getNamedItem(),removeNamedItem(),setNamedItem(),item()
 * 
 * Text类型
 * nodeType:3,nodeName:'#text',nodeValue:包含文本,parentNode:Element
 * 	appendData(text)
 * 	deleteData(offset, count)
 * 	insertDate(offset, text)
 * 	replaceData(offset, count, text)
 * 	splitText(offset);相对于normalize()
 * 
 * Comment类型
 * type:8,name:'#comment', value:注释内容
 * 与Text类型继承相同的基类，所以有除了splitText()以外所有的方法
 * 
 * CDATASection类型只针对基于XML文档
 * type:4 ,name:'#cdata-section',value:里面内容
 * 与Text类型继承相同的基类，所以有除了splitText()以外所有的方法
 * 
 * DocumentType类型
 * type:10, name:doctype名称,value:null
 * IE不支持也很少用
 * 
 * DocumentFragment类型
 * type:11, name:'#document-fragment', value:null
 * 可以当作HTML仓库
 * 
 * Attr类型
 * type:2,name:特性名称,value:特性值
 * document.createAttribute()创建特性节点
 */
//动态脚本
function loadScript(url) {
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = url;
	document.body.appendChild(script);
}
function loadScriptString(code) {
	var script = document.createElement('script');
	script.type = 'text/javascript';
	try{
		script.appendChild(document.createTextNode(code))
	} catch(ex) {
		script.text = code;
	};
	document.body.appendChild(script);
};
//动态样式
function loadStyle(url) {
	var link = document.createElement('link');
	link.rel = 'stylesheet';
	link.type = 'text/css';
	link.href = url;
	var head = document.getElementsByTagName('head')[0];
	head.appendChild(link);
};
function loadStyleString(code) {
	var style = document.createElement('style');
	style.type = 'text/css';
	try{
		style.appendChild(document.createTextNode(code))
	} catch(ex) {
		style.styleSheet.cssText = code;
	};
	var head = document.getElementsByTagName('head')[0];
	head.appendChild(style);
};
//操作表格，方法更为易读
var table = document.createElement("table");
table.border = 1;
table.width = '100px';
table.id = "myTable";
		
var tbody = document.createElement("tbody");
table.appendChild(tbody);
		
tbody.insertRow(0);
tbody.rows[0].insertCell(0);	
tbody.rows[0].cells[0].appendChild(document.createTextNode("cells 1"));
		
tbody.insertRow(1);
tbody.rows[1].insertCell(0);
tbody.rows[1].cells[0].appendChild(document.createTextNode("cells 2"));
		
document.body.appendChild(table);
/*
 * table元素属性和方法:
 * 	caption:
 * 	tBodies:<tbody>指针
 * 	tFoot:
 *  tHead:
 * 	rows:表格所有行的集合
 * 	createTHead():
 * 	createTFoot:
 * 	createCaption:
 * 	deleteTHead:
 * 	deleteTFoot:
 * 	deleteCaption:
 * 	deleteRows(pos):删除指定行
 * 	insertRow(pos):指定位置插入一行
 * 
 * tbody元素属性和方法：
 * 	rows:body中所有行
 * 	deleteRows(pos):删除指定行
 * 	insertRow(pos):指定位置插入一行
 * 
 * tr元素属性和方法:
 * 	cells:tr元素中单元格的集合
 * 	deleteCells(pos):删除指定格
 * 	insertCell(pos):指定位置插入单元格，并返回这个单元格的引用
 */
