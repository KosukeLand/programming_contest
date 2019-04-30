var lines = [];
var result = 0;
var N, V, C;
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function (x) {
    lines.push(x);
});

rl.on('close', function () {
    N = Number(lines[0]);
    V = lines[1].split(" ").map(value => Number(value));
    C = lines[2].split(" ").map(value => Number(value));

    dfs(0, []);
    console.log(result);
});

function dfs(n, comb) {
    if (n === N) { calc(comb) }
    else {
        for (var i = 0; i < 2; i++) {
            comb[n] = i;
            dfs(n + 1, comb);
        }
    }
    return (0)
}

function calc(comb) {
    var X = 0; var Y = 0;
    for (var i = 0; i < comb.length; i++) {
        if (comb[i] === 1) { X += V[i]; Y += C[i] }
    }
    result = Math.max(result, X - Y);
}