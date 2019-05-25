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
    var N = Number(lines[0].split(" ")[0]); lines.shift()
    var txy = lines.map(i => i.split(" ").map(i => Number(i)));

    var t = txy[0][0], x = txy[0][1], y = txy[0][2]

    for (var i = 0; i < N; i++) {
        
        // tに対して移動距離が大きすぎたら，移動不可
        // 目的地に到着した際にt>0ならば，右左を繰り返してtを消費する．
        if (t < x + y || ((x + y) - t) % 2 !== 0) { console.log("No"); return (0); }
        
        // 次の座標までの移動距離をセット
        if (i !== N - 1)
            t = Math.abs(t - txy[i + 1][0]), x = Math.abs(x - txy[i + 1][1]), y = Math.abs(y - txy[i + 1][2]);
    }

    console.log("Yes");
});