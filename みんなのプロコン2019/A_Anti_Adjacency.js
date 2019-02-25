var lines = [];

var n=0;
var k=0;

var readline = require('readline');
var rl = readline.createInterface({
  input:  process.stdin,
  output: process.stdout
});

rl.on('line',function(x){
  lines.push(x);
});

rl.on('close',function(){
  n = Number(lines[0].split(" ")[0]);
  k = Number(lines[0].split(" ")[1]);

  if(n%2===0){
    if((Math.floor(n/2))<k || k<0){console.log("NO");}
    else{console.log("YES");}
  }
  else{
    if((Math.floor(n/2)+1)<k || k<0){console.log("NO");}
    else{console.log("YES");}
}

});
