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
  var s = Number(lines[0].split(" "));
  var a =[];
  var flag = false;
  var ite = 0;


  var n = s;
  while(1){
      a.push(n);
      ite++;

      if(n%2===0){n=n/2;}
      else{n=3*n+1;}

      a.forEach(function(x){
          if(x === n){flag=true;}
      });

      if(flag===true){break;}

  }
  console.log(ite+1);
});
