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
    var K = Number(lines[0]);

    var cost = Array(K).fill(Infinity).map(i => i = Array(K).fill(Infinity))
    var d = Array(K).fill(Infinity)
    var used = Array(K).fill(false)

    for (var i = 0; i < K; i++) {
        cost[i][(i + 1) % K] = 1;
        cost[i][(i * 10) % K] = 0;
        cost[i][i] = 0;
    }

    // ダイクストラ法(O(NlogN))
    var s = 1; d[s] = 0;
    q.push([[0, s]]);

    while (q.length) {
        var t = q.shift(); var cost = t[0]; var v = t[1];
        if (d[v] < cost) { continue; }

        for (var i = 0; i < K; i++) {
            if (d[v] + cost[v][i] < d[i]) {
                d[i] = d[v] + cost[v][i];
                q.push(d[i], v);
            }
        }
    }

    console.log(d[0] + 1)
});