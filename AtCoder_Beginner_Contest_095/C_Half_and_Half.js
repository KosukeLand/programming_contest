var lines = [];
var B_counter, S, H, W
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function (x) {
    lines.push(x);
});

rl.on('close', function () {
    A = Number(lines[0].split(" ")[0]);
    B = Number(lines[0].split(" ")[1]);
    C = Number(lines[0].split(" ")[2]);
    X = Number(lines[0].split(" ")[3]);
    Y = Number(lines[0].split(" ")[4]);

    // 戦略として，
    // 1. A,Bピザのみ買う
    // 2. ABピザをMath.min(2*A,2*B)枚購入し，残りをA or Bピザを購入する
    // 3. ABピザのみ買う

    // 上記のどれかが金額最小だと思う

    var a = A * X + B * Y;
    var b = Math.min(2 * X, 2 * Y) * C; b += (X < Y ? B * (Y - X) : A * (X - Y))
    var c = Math.max(2 * X, 2 * Y) * C

    console.log(Math.min(a, b, c));
});