var lines =[];
 
var readline = require("readline");
var rl = readline.createInterface({
  input:  process.stdin,
  output: process.stdout
});
 
rl.on('line',function(x){
  lines.push(x);
});
 
rl.on('close',function(){
 var n   = Number(lines[0]);
 var tmp = lines[1].split(" ");
 var l   = Array(n);
 var sum = 0;
 
 for(var i=0;i<n;i++){
     l[i]=Number(tmp[i]);
     sum=sum+l[i];
 }
 
 l.sort(function(a,b){return(b-a);});
 console.log(sum-l[0]>l[0]? "Yes":"No");
});
