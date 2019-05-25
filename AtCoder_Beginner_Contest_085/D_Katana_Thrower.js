var lines = [];
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function (x) {
    lines.push(x);
});

rl.on('close', function () {
    var N = Number(lines[0].split(" ")[0])
    var H = Number(lines[0].split(" ")[1]);

    lines.shift();

    var AB = lines.map(i => i.split(" ").map(i => Number(i)));

    var x = AB.concat().sort((a, b) => b[0] - a[0]);
    var y = AB.concat().sort((a, b) => b[1] - a[1]);

    var max = x[0][0];
    var damage = 0; var ans = Math.ceil(H / max);

    // 切りつけ攻撃力最大の刀で切り続け，最後に任意の刀を投げる
    for (var i = 0; i < N; i++) {
        damage += y[i][1];
        
        // 切りつけ攻撃回数が負になる場合，0とする
        var m = Math.ceil((H - damage) / max)
        if (m < 0) { m = 0 }

        ans = Math.min(ans, m + i + 1)
    }
    console.log(ans);
});