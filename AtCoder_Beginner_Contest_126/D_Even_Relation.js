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
    var N = Number(lines[0]);
    lines.shift();

    var uvw = lines.map(i => i.split(" ").map(i => Number(i)))
    var cost = Array(N).fill(Infinity).map(i => i = Array(N).fill(Infinity))

    for (var i = 0; i < N - 1; i++) {
        var u = uvw[i][0]; var v = uvw[i][1]; var w = uvw[i][2]
        cost[i][i] = 0
        cost[u - 1][v - 1] = w; cost[v - 1][u - 1] = w;
    }
    cost[N - 1][N - 1] = 0;


    var ans = Array(N).fill("");

    ans[0] = "0";
    var j = 0;
    for (var i = 0; i < N; i++) {
        var c = cost[i]
        for (; j < N; j++) {
            if (i !== j && c[j] % 2 === 0) { ans[j] = ans[i]; i = j; break }
            if (i !== j && c[j] % 2 === 1) { ans[j] = (ans[i] === "0" ? "1" : "0"); i = j; break }
        }
    }

    console.log(cost)
    console.log(ans)
});

