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
  var ab = Number(lines[0].split(" ")[0]);
  var bc = Number(lines[0].split(" ")[1]);
  var ca = Number(lines[0].split(" ")[2]);

  console.log(ab*bc/2);
});
