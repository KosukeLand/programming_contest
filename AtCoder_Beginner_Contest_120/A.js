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

  var tmp = lines[0].split(" ");
  
  var a = Number(tmp[0]);
  var b = Number(tmp[1]);
  var c = Number(tmp[2]);
  
  if(b/a>=c){console.log(c);}
  else{console.log(Math.floor(b/a));}
});
