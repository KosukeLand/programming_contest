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
    var N = Number(lines[0].split(" ")[0]);
    var X = lines[1].split(" ").map(i => Number(i));
    var ans = 0;

    var x = X.concat().sort((a, b) => a - b);

    // 削除するX[i]がx[N/2]以下なら，中央値はx[N/2]
    // 削除するX[i]がx[N/2]以上なら，中央値はx[N/2-1]
    for (var i = 0; i < N; i++) {
        if (X[i] < x[N / 2]) { ans = x[N / 2] }
        else { ans = x[N / 2 - 1] }

        console.log(ans)
    }
});