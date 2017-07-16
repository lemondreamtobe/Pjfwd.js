//作用域安全
function Person(name, age, job) {
	
	if (this instanceof Person) {
		this.name = name;
		this.job = job;
		this.age = age;
	} else {
		return new Person(name, age, job);
	}
}; //继承需要用原型链或者寄生组合，避免this指定问题

//惰性载入函数，避免if分支过多造成的运行缓慢，两种方法
function createXHR() {
	
	if (typeof XMLHttpRequest != 'undefined') {
		return new XMLHttpRequest();
	} else if (typeof ActiveXObject != 'undefined') {
		
		if (typeof arguments.callee.activeXString != 'string') {
			var versions = ['MSXML2.XMLHttp.6.0', 'MSXML2.XMLHttp.3.0', 'MSXML2.XMLHttp'],
				i,
				len;
			for (i = 0, len = versions.length;i < len; i++) {
				try{
					new ActiveXObject(versions[i]);
					arguments.callee.activeXString = versions[i];
					break;
				} catch(ex) {
					//over
				}
			}
		};
		return new ActiveXObject(arguments.callee.activeXString);
	} else {
		throw Error('no xhr')
	}
};
//第一种，函数被调用时处理函数
function createXHR() {
	
	if (typeof XMLHttpRequest != 'undefined') {
		createXHR = function()  { return new XMLHttpRequest();}
	} else if (typeof ActiveXObject != 'undefined') {
		createXHR = function()  {
			if (typeof arguments.callee.activeXString != 'string') {
				var versions = ['MSXML2.XMLHttp.6.0', 'MSXML2.XMLHttp.3.0', 'MSXML2.XMLHttp'],
					i,
					len;
				for (i = 0, len = versions.length;i < len; i++) {
					try{
						new ActiveXObject(versions[i]);
						arguments.callee.activeXString = versions[i];
						break;
					} catch(ex) {
						//over
					}
				}
			};
			return new ActiveXObject(arguments.callee.activeXString);
		};
	} else {
		createXHR = function()  {
			throw Error('no xhr')
		};
	};
	return createXHR();
};
//第二种，声明的时候指定适当的函数
 var createXHR = (function() {
	
	if (typeof XMLHttpRequest != 'undefined') {
		return function()  {
			new XMLHttpRequest();
		};
	} else if (typeof ActiveXObject != 'undefined') {
		return function() {
			if (typeof arguments.callee.activeXString != 'string') {
				var versions = ['MSXML2.XMLHttp.6.0', 'MSXML2.XMLHttp.3.0', 'MSXML2.XMLHttp'],
					i,
					len;
				for (i = 0, len = versions.length;i < len; i++) {
					try{
						new ActiveXObject(versions[i]);
						arguments.callee.activeXString = versions[i];
						break;
					} catch(ex) {
						//over
					}
				}
			};
			return new ActiveXObject(arguments.callee.activeXString);
		};
	} else {
		return function() {
			throw Error('no xhr')
		};
	}
})();

//函数绑定,ES5有原生bind
function bind(func, context) {
	return function() {
		return fn.apply(context, arguments);
	}
};

//函数柯里化,IE8需要手动遍历arguments
function curry(fn) {
	var argus = Array.prototype.slice.call(arguments, 1);
	return function() {
		var inargus = Array.prototype.slice.call(arguments);
		var finalin = argus.concat(inargus);
		return fn.apply(null, finalin);
	};
};
function add(a, b) {
	return a + b;
};

//函数柯里化加bind
function bind(fn, context) {
	var args = Array.prototype.slice.call(arguments,2);
	return function() {
		var innerargs = Array.prototype.slice.Callbacks(arguments);
		var finalargs = args.concat(innerargs);
		return fn.apply(context, finalargs);
	};
};
//自定义事件
function EventTarget(){
	this.handlers = {};
};
EventTarget.prototype = {
	constructor : EventTarget,
	addHandler  : function(type, handler) {
		
		if (typeof this.handlers[type] == 'undefined') {
			this.handlers[type] = [];
		};
		this.handlers[type].push(handler);
	},
	fire        : function(event) {
		
		if (!event.target) {
			event.target = this;
		};
		
		if (this.handlers[event.type] instanceof Array) {
			var handlers = this.handlers[event.type];
			for (var i = 0, len=handlers.length;i < len; i++) {
				handlers[i](event);
			};
		};
	},
	removeHandler: function(type, handler) {
		
		 if (this.handlers[event.type] instanceof Array) {
			var handlers = this.handlers[type];
			for (var i = 0, len=handlers.length;i < len; i++) {
				
				if (handlers[i] === handler) {
					break;
				}
			};
			handlers.splice(i, 1);
		 }
	}
};

//拖放
var DragDrop = function() {
	var dragdrap = new EventTarget(),
		dragging = null,
		diffX = 0,
		diffY = 0;
	
	function handleEvent(event) {
		
		event = event || window.event;
		var target = event.target || event.srcElement;
		
		switch(event.type) {
			case 'mousedown' :
				
				if (target.className.indexOf('draggable') > -1) {
					dragging = target;
					diffX = event.clientX - target.offsetLeft;
					diffY = event.clientY - target.offsetTop;
					dragdrap.fire({type: 'dragstart', target:dragging, x:event.clientX, y:event.clientY});
				} else {
					return;
				}
				break;
				
			case 'mousemove' :
				
				if (dragging !== null && target.className.indexOf('draggable') > -1) {
					dragging.style.left = (event.clientX - diffX) + 'px';
					dragging.style.top = (event.clientY - diffY) + 'px';
					dragdrap.fire({type: 'drag', target:dragging, x:event.clientX, y:event.clientY});
				} else {
					return;
				}
				break;
			
			case 'mouseup' :
				
				if (dragging !== null && target.className.indexOf('draggable') > -1) {
					dragdrap.fire({type: 'dragend', target:dragging, x:event.clientX, y:event.clientY});
					dragging = null;
				} else {
					return;
				}
				break;
		};
	};
	dragdrap.enable = function() {
			Gm.addEvent(document, 'mousedown', handleEvent);
			Gm.addEvent(document, 'mousemove', handleEvent);
			Gm.addEvent(document, 'mouseup', handleEvent);
	};
	dragdrap.disable = function() {
			Gm.addEvent(document, 'mousedown', handleEvent);
			Gm.addEvent(document, 'mousemove', handleEvent);
			Gm.addEvent(document, 'mouseup', handleEvent);
	}
	return dragdrap;
}();
DragDrop.addHandler('dragstart', function(event) {
	var status = document.getElementById('moveD');
status.innerHTML = 'started dragging ' + event.target.id;
});
DragDrop.addHandler('drag', function(event) {
	var status = document.getElementById('moveD');
	status.innerHTML = '<br>Dragging' + event.target.id + 'to(' + event.x + ',' + event.y + ')';
});
DragDrop.addHandler('dragend', function(event) {
	var status = document.getElementById('moveD');
	status.innerHTML = '<br>Dragged' + event.target.id + 'at(' + event.x + ',' + event.y + ')';
});
DragDrop.enable();


//free
