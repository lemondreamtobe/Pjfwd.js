//函数柯里化
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
