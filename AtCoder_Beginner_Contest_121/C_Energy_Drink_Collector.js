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
  var N = Number(lines[0].split(" ")[0]);
  var M = Number(lines[0].split(" ")[1]);

  lines.shift();

  var AB = lines.map(i => i.split(" ").map(i => Number(i)));
  AB.sort((a, b) => a[0] - b[0]);


  var ans = 0;
  for (var i = 0; i < N; i++) {
    var A = AB[i][0]; var B = AB[i][1];

    if (B < M) { ans += A * B; M -= B }
    else {
      ans += A * M; break;
    }
  }
  console.log(ans);
});