var lines = [];

var N, A, B, C;
var l;
var min = Infinity;

var readline = require("readline");

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function (x) {
  lines.push(x);
});

rl.on('close', function () {
  N = Number(lines[0].split(" ")[0]);
  A = Number(lines[0].split(" ")[1]);
  B = Number(lines[0].split(" ")[2]);
  C = Number(lines[0].split(" ")[3]);

  lines.shift();

  l = lines.map(value => Number(value));

  dfs(0, []);
  console.log(min);
});

function dfs(n, comb) {
  if (n === N) { calc(comb); }

  else {
    for (var i = 0; i < 4; i++) {
      comb[n] = i; dfs(n + 1, comb);
    }
  }

  return (0);
}

function calc(comb) {
  var bamb_A = 0; var bamb_B = 0; var bamb_C = 0;
  var MP_A = 0; var MP_B = 0; var MP_C = 0;

  for (var i = 0; i < comb.length; i++) {

    if (l[i] !== 0) {
      switch (comb[i]) {
        case 1: bamb_A += l[i]; MP_A++; break;// Aを作るために竹を合成する
        case 2: bamb_B += l[i]; MP_B++; break;// Bを作るために竹を合成する
        case 3: bamb_C += l[i]; MP_C++; break;// Cを作るために竹を合成する
      }
    }
  }

  if (bamb_A > 0 && bamb_B > 0 && bamb_C > 0) {
    MP_A = Math.max(1, MP_A); MP_B = Math.max(1, MP_B); MP_C = Math.max(1, MP_C)
    var result = (10 * (MP_A - 1) + Math.abs(bamb_A - A)) + (10 * (MP_B - 1) + Math.abs(bamb_B - B)) + 10 * (MP_C - 1) + (Math.abs(bamb_C - C));
    min = Math.min(result, min);
  }
}