var lines = []; var X = []; var flag = false;
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function (x) {
    lines.push(x);
});

rl.on('close', function () {
    H = Number(lines[0].split(" ")[0]);
    W = Number(lines[0].split(" ")[1]);

    lines.shift();

    var C = Array(10).fill(0).map(i => i = Array(10).fill(0));
    var A = Array(H).fill(0).map(i => i = Array(W).fill(0));

    for (var i = 0; i < 10; i++) {
        var x = lines[i].split(" ");
        for (var j = 0; j < 10; j++) {
            C[i][j] = Number(x[j]);
        }
    }

    for (var i = 10; i < H + 10; i++) {
        var x = lines[i].split(" ");
        for (var j = 0; j < W; j++) {
            A[i - 10][j] = Number(x[j]);
        }
    }

    for (var i = 0; i < H; i++) {
        for (var j = 0; j < W; j++) {

            if (A[i][j] === -1) { continue; }
            else {
                // 一度計算した結果は，再利用
                if (m[A[i][j]] !== -1) { ans += m[A[i][j]]; }
                else {

                }

            }
        }
    }
});

function bfs(root) {
    var min = Infinity;
    var q = [root, 0]; var track =Array()

    while (q.length) {
        var x = q.pop();
        var now = x[0], MP = x[1];

        if (now === 1) { min = Math.min(min, MP); }
        else {

        }
    }

    return (MP);
}