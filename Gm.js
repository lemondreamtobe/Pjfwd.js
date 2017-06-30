/*
 * use way : public JS library
 * name    : Gm
 * aim     : making easier work
 * 
 */
(function($, window, document,undefined){
	
	if (!window.Gm) {
		window['Gm'] = {};
	};
	
	//检查整个库是否与当前浏览器相兼容
	function isCompatible(other) {
		
		//使用能力检测来检查必要条件
		if (other === false || !Array.prototype.push || !Object.hasOwnProperty || !document.createElement || !document.getElementsByTagName) {
			return false;
		} else {
			return true;
		}
	};
	window['Gm']['isCompatible'] = isCompatible;
	
	//继承的最优方法 tested
	function inherit(sub, sup) {
		var prototype = Object(sup.prototype);
		prototype.constructor = sub;
		sub.prototype = prototype;
	};
	window['Gm']['inherit'] = inherit;
	
	//IE8下的trim tested
	function trim(s) {
		return s.replace(/(^\s*)|(\s*$)/g, "");
	};
	window['Gm']['trim'] = trim;
	
	//判断ie浏览器
	function isIE(){
		if (navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion .split(";")[1].replace(/[ ]/g,"")=="MSIE8.0") { 
			return true;
		} else {
			return false;	
		};
	};
	window['Gm']['isIE'] = isIE;
	
	//获取特定的类型
	function getObjectType(a) {
		var typeArray = Object.prototype.toString.call(a).split(" ");
		return function(a){
			return a.slice(0, this.length-1);
		}(typeArray[1]);
	};
	window['Gm']['getObjectType'] = getObjectType;
	
	function addEvent(node, type, listener) {
		
		//使用前面的方法检查兼容性
		if (!isCompatible()) {
			return false;
		};
		
		if (node.addEventListener) {
			
			//W3C方法
			node.addEventListener(type, listener, false);
			return true;
		} else if(node.attachEvent) {
			
			//MSIE方法
			node["e" + type + listener] = listener;
			node[type + listener] = function() {
			node["e" + type + listener](window.event);
			}
			node.attachEvent("on" + type, node[type + listener]);
			return true;
		}
		return false; //两种方法皆不具备
	};
	window["Gm"]["addEvent"] = addEvent;
	//操作cookie
	function cookier(){
		function cookierWorker() {

			//私有方法
			function timeHandler(time) {
				var ex = time.substring(0, time.length - 1);
				var pire = time.substring(time.length - 1);
		
				switch(pire) {
		
					case 's':
						ex *= 1000;
						break;
		
					case 'm':
						ex *= 60 * 1000;
						break;
		
					case 'h':
						ex *= 60 * 60 * 1000;
						break;
		
					case 'd':
						ex *= 24 * 60 * 60 * 1000;
				};
				var timeHanle = new Date();
				var timeSetted = ex;
				timeHanle.setTime(timeHanle.getTime() + timeSetted);
				return ";expires=" + timeHanle.toGMTString();
			};
			this.getTime = function(ex) {
				return timeHandler(ex);
			};
		};
		cookierWorker.prototype.setCookie = function(name, value, expire) {
			
			if (arguments.length == 0) {
				return;
			} else {
				var cookieAim = this.getCookie(name);
			
				//不存在名为name的cookie
				if(cookieAim == undefined) {
					var cookieString = '';
					cookieString += name + '=' + value;
			
					if(expire == undefined) {
						document.cookie = cookieString;
					} else {
						cookieString += this.getTime(expire);
						document.cookie = cookieString;
					};
				} else { //已存在名为name的cookie
					var query = confirm("已存在名为" + name + "的cookie,请问是否修改该cookie");
			
					if(query) {
						this.removeCookie(name);
						this.setCookie(name, value, expire);
					} else {
						return;
					}
				};
			};
		};
		cookierWorker.prototype.getCookie = function(name) {
			
			if (!name) {
				return document.cookie;
			} else {
				var cookieArray = document.cookie.split(';');
				var cookieAccept = new Array();
				var cookieRegex = new RegExp(name + "=", "g");
				for(var i = 0; i < cookieArray.length; i++) {
					var c;
			
					if(cookieArray[i].trim) {
						c = cookieArray[i].trim();
					} else {
						c = cookieArray[i].replace(/(^\s*)|(\s*$)/g, "");
					};
			
					if(cookieRegex.test(c)) {
						cookieAccept.push(c);
					} else {
						continue;
					};
				};
			
				if(cookieAccept.length == 0) {
					return undefined;
				} else {
					return cookieAccept;
				};
			};
		};
		cookierWorker.prototype.modifyCookie = function(name, value, expire) {
			
			if (arguments.length == 0) {
				return;
			} else {
				var cookieAim = this.getCookie(name);
			
				if(cookieAim == undefined) {
					var query = confirm("并未找到要修改的cookie项,是否需要创建新的cookie");
			
					if(query) {
						this.setCookie(name, value, expire);
					};
				} else {
					this.removeCookie(name);
					this.setCookie(name, value, expire);
				};
			};
		};
		cookierWorker.prototype.removeCookie = function(name) {
			
			if (arguments.length == 0) {
				return;
			} else {
				var cookieAim = this.getCookie(name);
			
				if(cookieAim == undefined) {
					return;
				} else {
					var cookieCover = cookieAim[0].split("=");
				};
			
				if(cookieCover[0].trim) {
					document.cookie = name + "=" + cookieCover[1].trim() + ";expires=Thu, 01 Jan 1970 00:00:00 GMT";
				} else {
					document.cookie = name + "=" + cookieCover[1].replace(/(^\s*)|(\s*$)/g, "") + ";expires=Thu, 01 Jan 1970 00:00:00 GMT";
				};
			};
		};
		return new cookierWorker();
	};
	window['Gm']['cookier'] = cookier();
	
	//设置必填
	var initMWSet = {
		color:            'red',  
		'margin-left':    '28px',
		'vertical-align': 'top',
		'line-height':    '37px',
		display:          'inline-block'
	};
	function blurCheck(ele) {
		var val = ele.val();
						
		if (!!(val.replace(/(^\s*)|(\s*$)/g, ""))) {
			var prev = ele.parent().find("span");
			prev.css("visibility","hidden");
		} else {
			var prev = ele.parent().find("span");
			prev.css("visibility","visible");
		};
	};
	Gm.setMustWrite = function(ele, opt) {
		var setting = $.extend({}, initMWSet, opt); //用法setMustWrite($('xx'), {'margin-left': '15px'});
		var element = $(ele);
		
		if (/setMustWrite/g.test(element.attr('class'))) {
			var spanHtml = $('<span>*</span>');
			spanHtml.css({
				'color':           setting.color,
				'margin-left':     setting['margin-left'],
				'vertical-align':  setting['vertical-align'],
				'line-height':     setting['line-height'],
				'display':         setting.display
			});
			var parent = element.parent();
			parent.prepend(spanHtml);
			
			if (isIE()) { 
				element.blur(function(){
					blurCheck(element)
				});
			} else {
				element.on("input", function(){
					blurCheck(element)
				});
			};
			
			if (Gm.checkMustWrite) {
				return;
			} else {
				Gm.checkMustWrite = function () {
					var elementArrays = $('.setMustWrite');
					var eleStorge = [];
					for (var i = 0; i < elementArrays.length; i++) {
						var ele = $(elementArrays[i]);
						var val = ele.val();
						
						if(!!(val.replace(/(^\s*)|(\s*$)/g, ""))) {
							var prev = ele.parent().find("span");
							prev.css("visibility", "hidden");
						} else {
							var prev = ele.parent().find("span");
							prev.css("visibility", "visible");
							var alertInfo = ele.prev().text().replace(/\：/g, '');
							alert(alertInfo + '不能为空');
							eleStorge.push(ele[0]);
						};
					};	
				
					if (eleStorge.length == 0) {
						return;
					} else {
						eleStorge[0].focus();
					};
				};
			};
		} else {
			return;
		};
	};
	
	//storage
	function storage(){
		if(window.localStorage){
		//	alert('This browser supports localStorage');
		}else{
			alert('This browser does NOT support localStorage');
			return ;
		}
		sto = window.localStorage;
		//	this.usePlace = usePlace
		//	window.localStorage.setItem('localData', '[]');
	
	};
	var storageFun = {
		getValue : function getValue(key){
			return JSON.parse(sto.getItem(key));
		},
		setValue : function setValue(key, value){ //value以对象的形式传入
			if(!sto.getItem(key)){
				sto.setItem(key, JSON.stringify(value));
			}else{
				alert('该键值已经存在,请更改key!');
			}
		},
		removeValue : 	function removeValue(key){
			sto.removeItem(key);
		},
		changeValue : function changeValue(key, id, value){
			var flag = false;
			var data = JSON.parse(sto.getItem(key));
			for(var k in data){
				if(k == id){
					data[k] = value;
					flag = true;
					break;
				}
			}
			if(!flag)data[id] = value;//没有这个键就添加
			sto.setItem(key, JSON.stringify(data));
		},
		clearValue : function clearValue(){
			sto.clear();
		},
		count	   : function count(){
		return ((5000000 - JSON.stringify(sto).length)/(1024*1024)).toFixed(2) + 'MB';//不准确，字符存储格式不一样导致不同
		}
	};
	storage.prototype = {
		constructor : storage,
		get			: storageFun.getValue,
		set			: storageFun.setValue,
		remove		: storageFun.removeValue,
		clear		: storageFun.clearValue,
		change		: storageFun.changeValue,
		timeout		: storageFun.setTimeout,//其实没用的
		countspace	: storageFun.count
	};
	
	window['Gm']['storage'] = new storage();
	
	//自动化分页
	var tableData =[];
	function setPagination() {
		
	};
	
	//正则表达式限定
	function regLimit(ele, options){
		var regObj = {
			'num'    : /[^0-9]/g,
			'letter' : /[^a-z]/ig 
		};
		
		if (getObjectType(regObj[options]) === 'RegExp') {
			ele.on('keyup', function(){//限定数字输入
				ele.val(ele.val().replace(regObj[options],''));
			});
		} else {return};
	};
	window['Gm']['regLimit'] = regLimit;
})(jQuery, window, document)
