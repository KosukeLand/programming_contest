var lines = [];

var N, A, B, C;
var l;
var ans = Infinity;

var readline = require("readline");

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function (x) {
  lines.push(x);
});

rl.on('close', function () {
  N = Number(lines[0].split(" ")[0])
  A = Number(lines[0].split(" ")[1])
  B = Number(lines[0].split(" ")[2])
  C = Number(lines[0].split(" ")[3])

  lines.shift();

  l = lines.map(i => Number(i));
  dfs(0, [])
  console.log(ans);
});

// 利用する竹は,「A,B,C,使わない」の4択
// 4^8で間に合うと思う

function dfs(n, comb) {
  if (n === N) { calc(comb); }

  else {
    //　0: Aに利用　　1: Bに利用
    //　2: Cに利用　　3: 使わない

    for (var i = 0; i < 4; i++) {
      comb[n] = i; dfs(n + 1, comb)
    }
  }
}

function calc(comb) {
  var Ax = 0, Bx = 0, Cx = 0;
  var MP = 0;

  for (var i = 0; i < N; i++) {
    switch (comb[i]) {
      case 0: if (Ax !== 0) { MP += 10; } Ax += l[i]; break;
      case 1: if (Bx !== 0) { MP += 10; } Bx += l[i]; break;
      case 2: if (Cx !== 0) { MP += 10; } Cx += l[i]; break;
    }
  }
  // 竹の長さ0から伸ばすことは無理
  if (Ax === 0 || Bx === 0 || Cx === 0) { return (0) }
  else {
    MP += Math.abs(A - Ax) + Math.abs(B - Bx) + Math.abs(C - Cx);
    ans = Math.min(ans, MP);

  }
}