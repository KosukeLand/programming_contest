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
    var N = Number(lines[0].split(" ")[0])
    var K = Number(lines[0].split(" ")[1])
    lines.shift()

    var td = lines.map(i => i.split(" ").map(i => Number(i)))
    var sushi = [];

    // sushiに[美味しさ,種類]をpushする
    for (var i = 0; i < K; i++) { sushi.push([td[i]]); }

    // sushinの入れ替えをする
    for (var i = K; i < N; i++) {
        // 種類でソート
        sushi.sort((a, b) => a[0] - b[0]);
    }

});