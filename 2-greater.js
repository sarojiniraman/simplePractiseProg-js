for(var i=0; i< arrlen ; i++){
var x=0 , y=0;
   for(var j=0; j<arrlen; j++){
       if(arrnum[i]>arrnum[j]){
          x = x+1;
       }
} console.log(x)
if(x >= (arrlen - 2)){
 resultarr.push(arrnum[i]);
}
}console.log(resultarr);


/*to get the first 2 greater number in an array */




var a = [80, 30, 50, 70, 40];
var b =[];
var a = a.sort();
var l = a.length;
b.push(a[l-1],a[l-2]);
console.log(b);




/* with duplicates finding 2 greater number (thats why checking x>= (len - 2)) */


var arr = [1,2,7,7,8,9,3,4,5,5,3,10,10,2];
var tmp = [], resultarr =[];
for(var i = 0; i < arr.length; i++){
    if(tmp.indexOf(arr[i]) == -1){
        tmp.push(arr[i]);
    }
}
var len = tmp.length;
for(var i=0; i< len ; i++){
    var x=0 , y=0;
    for(var j=0; j<len; j++){
        if(tmp[i]>tmp[j]){
            x = x+1;
        }
    }
    if(x >= (len - 2)){
        resultarr.push(tmp[i]);
    }
}console.log(resultarr);