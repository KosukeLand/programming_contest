var lines = [];


var readline = require("readline");
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function (x) {
  lines.push(x);
});

rl.on('close', function () {

  var tmp = lines.shift().split(" ");

  var N = Number(tmp[0]);
  var M = Number(tmp[1]);

  var drink = Array(N + 1);

  for (var i = 0; i < N; i++) {
    tmp = lines[i].split(" ");
    drink[i + 1] = {
      yen: Number(tmp[0]),
      hon: Number(tmp[1]),
    }
  }

  drink.sort(function (a, b) { return (a.yen - b.yen) });

  var result = 0;
  var can = M;
  for (var i = 0; i < N; i++) {
    if (can - drink[i].hon === 0) { result = result + can * drink[i].yen; break; }
    else if (can - drink[i].hon < 0) { result = result + can * drink[i].yen; break;}
    else {
      result = result + drink[i].hon * drink[i].yen;
      can = can - drink[i].hon;
      
    }
  }
  
  console.log(result)
});
