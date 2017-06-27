//<script type="text/javascript" defer="defer" src=""></script>
//延迟脚本，脚本执行时不影响页面构造即文档呈现后再执行，立即下载延迟执行

//<script type="text/javascript" async="async" src=""></script>
//异步脚本，执行脚本但不影响其他脚本的下载，也不必阻塞文档的呈现，一定会在页面load事件前执行

//两者都并不一定按照顺序

var outJs = ['可维护性', '可缓存性', '适应未来'];

var doctype = ['混杂模式，IE行为与IE5相同', '标准模式(严格型)，IE行为接近标准']
//IE6提出概念，主要影响CSS呈现
var doctypeBS = ['过渡型', '框架集型']; //IE后提出的准标准模式，和标准模式统称标准模式

//html中，<noscript>会在不支持脚本或者被禁用的的情况下显示标记中的内容
