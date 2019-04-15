var lines = [];
var H; var W;
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

    var c = Array(H).fill(0);

    c = c.map(function (value, index, array) {
        return (array[index] = Array(W * H));
    });

    for (var i = 0; i < H; i++) {
        var cnt = lines[i].split("");

        for (var j = 0; j < W * H; j++) {
            c[i][j] = cnt[j % W];
        }
    }
    console.log(bfs(H, W * H, c.concat()));

});

function bfs(h, w, c) {
    var q = [[0, 0]];
    var m = Array(w).fill(0).map(function (value) { value = Array(h).fill(0); return (value); })

    while (q.length) {
        var t = q.pop();
        var x = t[1], y = t[0];

        if (x === w - 1 && y === h - 1) { return ("Yay!"); }
        if (m[y][x] === 1) { continue; }

        m[y][x] = 1;

        if (x < w - 1) { if (c[y][x + 1] === '.') { q.push([y, x + 1]); } }
        if (y < h - 1) { if (c[y + 1][x] === '.') { q.push([y + 1, x]); } }
    }
    return (":(");
}
