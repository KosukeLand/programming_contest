var lines = [];
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin,
  output:process.stdout
});

rl.on('line',function(x){
  lines.push(x);
});

rl.on('close',function(){
  var n = Number(lines[0]);
  var ab = [];
  var result = 0;

  for(var i=1;i<=n;i++){
    tmp = lines[i].split(" ");
    ab[i] = {
      a: Number(tmp[0]),
      b: Number(tmp[1])
    }
    ab[i].wa = ab[i].a + ab[i].b
  }
  ab.sort(function(a,b){ return b.wa-a.wa; });

  for(var i=0;i<n;i++){
      result += (i%2==0) ? ab[i].a : -ab[i].b
  }

  console.log(result);
//  console.log(a_result-b_result);

});
