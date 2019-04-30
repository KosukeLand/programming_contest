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
  var N = Number(lines[0]);
  var A = lines[1].split(" ").map(value => Number(value));

  A.sort((a, b) => a - b);
  var min = A[0]; var before_min = -1
  var i = 0;

  while (before_min !== min) {
    for (var i = 0; i < N; i++) {
      before_min = min;

      if (A[i] % min !== 0) { A[i] = A[i] % min }

      min = Math.min(min, A[i]);

    }
  }

  console.log(min);
});
