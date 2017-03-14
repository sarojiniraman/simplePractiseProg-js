function Video(title, uploader, seconds) {
    
    this.title = title;
    this.uploader = uploader;
    this.seconds = seconds;
    this.dateAdded = new Date();
       Video.prototype.addVideos(this);
}
Video.prototype = {
    watch : function() {
    return "You watched all " + this.seconds + " seconds of " + this.title;
    },
    addVideos : function(obj){
        try{
            if(Video.prototype.videos.length <5){
                Video.prototype.videos.push(obj);
                console.log(Video.prototype.videos);
            }else{
                throw "Out of memory"; 
            }
        }
        catch(e){
            console.log(e);
            for(var i = 0; i < Video.prototype.videos.length ; i++){
                console.log(Video.prototype.videos[i]);
                var objMinute = Video.prototype.videos[i].dateAdded.getMinutes();
                var currentDate =  new Date();
                var currentMinute = currentDate.getMinutes();
                console.log(objMinute);
                if( (currentMinute - objMinute) > 1 ){
                    Video.prototype.videos.splice(i,1);
                    console.log("removed " + i);
                    i = i-1;
                }

            }
        }
    },

    videos :[]
}


//var video1 = new Video('xyz','will',400);
// var vide02 = new Video('hguh','john',500);
// var video3 = new Video('dyuj','leo',380);
// var video4 = new Video('jkm','sudar',520);
// var video5 = new Video('uada','saro',480);
// var video6 = new Video('wjnmf','ram',480);

