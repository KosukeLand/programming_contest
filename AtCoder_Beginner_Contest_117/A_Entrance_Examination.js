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
 var t = Number(lines[0].split(" ")[0]);
 var x = Number(lines[0].split(" ")[1]);
 
 console.log(t/x);
});