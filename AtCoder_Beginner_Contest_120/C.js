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

  var s = lines[0].split("");
  var blue=0;
  var red=0;
  
  for(var i=0;i<s.length;i++){
    if(s[i]==="0"){red++;}
    else{blue++;}
  }

  console.log(Math.min(red,blue)*2);
    
});