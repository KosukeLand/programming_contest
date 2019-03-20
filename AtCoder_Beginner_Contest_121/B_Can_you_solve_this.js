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
  var C = Number(tmp[2]);

  var tmp = lines.shift().split(" ");
  var A = Array(N + 1); A.fill(0);
  var B = Array(M + 1); B.fill(0);

  var counter = 0;

  for (var i = 0; i < M; i++) {
    B[i + 1] = Number(tmp[i]);
  }
  for (var i = 0; i < N; i++) {
    tmp = lines[i].split(" ");
    A[i + 1] = Array(M + 1);
    for (var j = 0; j < M; j++) {
      A[i + 1][j + 1] = Number(tmp[j]);
    }
  }



  for (var i = 0; i < N; i++) {
    var result = 0;

    for (var j = 0; j < M; j++) {
      result = result + A[i + 1][j + 1] * B[j + 1];
    }
    result = result + C;

    if (result > 0) { counter++; }

  }
  console.log(counter);
});
