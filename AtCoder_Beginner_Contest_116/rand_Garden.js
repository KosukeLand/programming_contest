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
  var n = Number(lines[0]);
  var h = lines[1].split(" ");
  var ite = 0;
  var flag = false;

  var zero= Array(h.length);
  zero.fill(0);

  while(h.toString() !== zero.toString()){
    for(var i=0;i<h.length;i++){
      if(Number(h[i])>0){
        flag = true;
        h[i] = Number(h[i]) -1;
      }
      else{
        if(flag === true){ite++;}
        flag = false;
      }
    }
    if(flag === true){ite++;}
    flag = false;
  }
  console.log(ite);
});
