var lines =　[];
var readline = require('readline');

rl = readline.createInterface({
  input: process.stdin,
  output:process.stdout
});

rl.on('line',function(x){
  lines.push(x);
});

rl.on('close',function(){
  var n=Number(lines[0]);
  var a=lines[1].split("");
  var b=lines[2].split("");
  var c=lines[3].split("");
  var count=0;

    while(1){
    for(var i = 0;i<n;i++){
      if(a[i]===b[i] && b[i]===c[i]){}
      else if(a[i]===b[i]){
        c[i]=a[i];
        count++;
      }
      else if(a[i]===c[i]){
        b[i]=a[i];
        count++;
      }
      else if(b[i]===c[i]){
        a[i]=b[i];
        count++;
      }
      else{
        a[i]=b[i];
        count++;
      }
    }
    if(a.toString() === b.toString() && b.toString() === c.toString()){break;}
  }
  console.log(count);
});
