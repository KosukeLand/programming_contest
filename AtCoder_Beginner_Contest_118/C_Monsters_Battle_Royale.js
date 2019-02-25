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
  var a = [];
  var n = Number(lines[0].split(" "));
  var tmp = lines[1].split(" ");

  for(var i=0;i<n;i++){
    a[i]=Number(tmp[i]);
  }

  a.sort(function(a,b){return(a-b)});

  var result = a[0];
  var result_before = 0;
  var hp = 0;
  var attack = a[0];

  while(result !== result_before){
    result_before = result;
    for(var i=0;i<n;i++){
      hp = a[i]%attack
      if(hp < result && hp !== 0){result = hp;}
    }
    if(result < attack){attack = result;}
  }
  console.log(result);
});
