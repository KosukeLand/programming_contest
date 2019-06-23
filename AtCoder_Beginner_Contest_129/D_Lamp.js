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
    var H = Number(lines[0].split(" ")[0]);
    var W = Number(lines[0].split(" ")[1]);
    lines.shift();
    var S = lines.map(i => i.split("").map(i => i));

    var cnt1 = []; var cnt2 = [];
    for (var i = 0; i < H; i++) {
        var t = 0;
        for (var j = 0; j < W; j++) {
            if (S[i][j] === ".") { t++; }
        }
        cnt1.push(t)
    }

    for (var i = 0; i < W; i++) {
        var t = 0;
        for (var j = 0; j < H; j++) {
            if (S[j][i] === ".") { t++; }
        }
        cnt2.push(t)
    }
    var ans = 0;
    for (var i = 0; i < H; i++) {
        for (var j = 0; j < W; j++) {
            for (var k = 0; k < i; k++) {
                if (k === "#") { break; }
                if (k === j - 1) { ans = Math.max(ans, cnt1[i] + cnt2[j] - 1); }
            }
        }
    }

    console.log(ans);
});


