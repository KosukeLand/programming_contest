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
    console.log(dfs(0, 0, c.concat()));

});

function dfs(h, w, comb) {
    if (H - 1 === h && W * H - 1 === w) { return ("Yay!"); }
    if (H - 1 < h || W * H - 1 < w) { return (":("); }
    if (comb[h][w] === "#") { return (":("); }

    var x = dfs(h + 1, w, comb.concat());
    if (x === "Yay!") { return ("Yay!"); }

    var y = dfs(h, w + 1, comb.concat());
    if (y === "Yay!") { return ("Yay!"); }

    return (":(");
}
