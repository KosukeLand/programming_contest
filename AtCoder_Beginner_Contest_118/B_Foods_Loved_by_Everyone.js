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
  var tmp = lines.shift();
  var n = Number(tmp.split(" ")[0]);
  var m = Number(tmp.split(" ")[1]);
  var likeMenu = Array(m);
  var result = 0;

  likeMenu.fill(0);
  
  for(var i=0;i<n;i++){
    tmp = lines[i].split(" ");
    loop= Number(tmp.shift());

    for(var k=0; k<loop;k++){
      likeMenu[Number(tmp[k]-1)]++;
      }
  }

  for(var i=0;i<m;i++){
    if(likeMenu[i]===n){result++;}
  }

    console.log(result);
});
