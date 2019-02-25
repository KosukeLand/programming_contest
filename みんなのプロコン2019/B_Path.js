var lines = [];

var one = 0 ;
var two = 0 ;
var three = 0;
var four = 0;

var readline = require('readline');
var rl = readline.createInterface({
  input:  process.stdin,
  output: process.stdout
});

rl.on('line',function(x){
  lines.push(x);
});

rl.on('close',function(x){

lines.forEach(function(x){
    x.split(" ").forEach(function(y){
      switch (Number(y)){
        case 1: one++;  break;
        case 2: two++;  break;
        case 3: three++;break;
        case 4: four++; break;
      }
    });
});
result = one * two * three * four;
if(result === 4){console.log("YES");}
else{console.log("NO");}

});
