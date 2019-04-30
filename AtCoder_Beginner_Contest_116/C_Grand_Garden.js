var lines = []; var result = 0;

var readline = require("readline");

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', function (x) {
  lines.push(x);
});

rl.on('close', function () {
  var N = Number(lines.shift());
  var h = lines.shift().split(" ").map(value => Number(value));

  // 100*100程度なので，全探索可能
  for (var i = 0; i < 100; i++) {
    var zero = true;

    for (var j = 0; j < N; j++) {
      // 120みたいにh[j]以前に0がなければ，result++
      if (h[j] === 0 && zero === false) { result++; zero = true; }
      // h[j]が1よりも大きかったら，1cm縮む
      if (1 <= h[j]) { h[j]--; zero = false }

    }
    // ..234のように，配列の終わりにh[j]===0が出現しない場合，result++してあげる
    if (0 <= h[N - 1] && zero === false) { result++; }
  }
  console.log(result);
});
