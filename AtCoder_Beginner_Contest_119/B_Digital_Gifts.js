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

  var n = Number(lines.shift());
  var x=Array(n);
  var u=Array(n);

  var result=0;

  for(var i=0;i<n;i++){
    x[i]=Number(lines[i].split(" ")[0]);
    u[i]=lines[i].split(" ")[1];  

    if(u[i]==="BTC"){x[i]=x[i]*380000;}

    result += x[i];
    }

    console.log(result);
  
});