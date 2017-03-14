function Test1(url){
this.a = url;
var that = this;
return {
	getA : function(){
		return that.a;
	}
}
}

