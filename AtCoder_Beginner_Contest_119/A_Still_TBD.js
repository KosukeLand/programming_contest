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

  var date = lines[0].split("/");
  var year = Number(date[0]);
  var month= Number(date[1]);
  var day= Number(date[2]);

  if(year<=2019&&month<=4){console.log("Heisei");}
  else if(year<2019){console.log("Heisei");}
  else{console.log("TBD");}
  
});