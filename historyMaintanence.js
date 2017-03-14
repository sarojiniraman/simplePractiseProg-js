function History(time,url){
	this.time = time;
	this.url = url;
	this.historyArray.push(this);
}
History.prototype = {
	historyArray : [],
	searchUrl : function(wordUrl){
		var resultArray = [];
		for(var i = 0; i < this.historyArray.length ; i++){
			var urlInArray = this.historyArray[i].url;
			var n = urlInArray.indexOf(wordUrl);
			if( n != -1){
				resultArray.push(this.historyArray[i]);
			}
		}
		if(resultArray.length > 0){
			return resultArray;
		}else{
			return this.wordUrl + "is not found in History";
		}
	},
	removeUrl : function(wordUrl){
		for(var i = 0; i < this.historyArray.length ; i++){
			var urlInArray = this.historyArray[i].url;
			var n = urlInArray.indexOf(wordUrl);
			console.log(urlInArray , n);
			if( n != -1){
				this.historyArray.splice(i,1);
				i=i-1;
			}
		}
	}
}



var h1 = new History('10.00 Am','www.google.com');
var h2 = new History('9.30 Am', 'https://codegarageteam.slack.com/messages/general/');
var h3 = new History('10.30 Am','https://www.google.com/?client=safari&channel=mac_bm#channel=mac_bm&q=indexof+javascript');
var h4 = new History('3.00 Pm','http://codegarage.us/agenda_calendar.html');