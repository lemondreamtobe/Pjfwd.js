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
