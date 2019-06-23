var lines = [];
var ans; var G;

var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function (x) {
    lines.push(x);
});

rl.on('close', function () {
    var N = Number(lines[0]); ans = Array(N).fill(0);
    lines.shift();

    G = Array(N).fill(0).map(i => i = [])
    for (var i = 0; i < N - 1; i++) {
        var t = lines[i].split(" ");
        var u = Number(t[0]); var v = Number(t[1]); var w = Number(t[2]);
        G[u - 1].push([v - 1, w]); G[v - 1].push([u - 1, w])
    }
    bfs(0, -1, 1)
    for (var i = 0; i < N; i++) { console.log(ans[i]); }
});

// vをcで塗る pはvの親
function bfs(v, p, c) {
    var q = [[v, p, c]]

    while (q.length) {
        var t = q.shift(); var v = t[0]; var p = t[1]; var c = t[2];
        ans[v] = c;

        for (var value of G[v]) {
            // 親は探索済み
            if (value[0] === p) { continue; }
            // 辺の距離が奇数なら
            if (value[1] & 1) { q.push([value[0], v, 1 - c]) }
            // 辺の距離が偶数なら
            else { q.push([value[0], v, c]) }
        }
    }
}