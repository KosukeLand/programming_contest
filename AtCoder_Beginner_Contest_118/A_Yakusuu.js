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
  var a = Number(lines[0].split(" ")[0]);
  var b = Number(lines[0].split(" ")[1]);

  if(b%a===0){console.log(a+b)}
  else{console.log(b-a)}
});
