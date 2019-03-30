var lines = [];
var A; var H; var W;
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function (x) {
    lines.push(x);
});

rl.on('close', function () {
    var tmp = lines.shift().split(" ");
    H = Number(tmp[0]);
    W = Number(tmp[1]);

    A = Array(H);

    var five = false; var zero = true;
    var result = 0;

    for (var i = 0; i < H; i++) {
        tmp = lines[i].split(" ");
        A[i] = Array(W).fill(0);

        for (var j = 0; j < W; j++) {
            A[i][j] = Number(tmp[j]);
            if (A[i][j] !== 0) { zero = false; }
            if (A[i][j] === 5) { five = true; }
        }
    }
    if (zero === true) { console.log("Yes", result); return (0); }
    if (five === false) { console.log("No"); return (0); }

    for (var i = 0; i < H; i++) {
        for (var j = 0; j < W; j++) {

            if (5 < A[i][j]) {
                switch (dfs(i, j, A[i][j])) {
                    case 6: result += 1; break;
                    case 7: result += 1; break;
                    case 8: result += 2; break;
                    case 9: result += 3; break;
                }
            }
        }
    }
    console.log("Yes", result + 1);
});

function dfs(i, j, max) {
    if (i < 0 || j < 0 || H <= i || W <= j) { return (max); }
    else if (A[i][j] === 5) { return (max); }
    else {
        if (max < A[i][j]) { max = A[i][j]; }
        A[i][j] = 5;

        var tmp_max;
        tmp_max = dfs(i, j - 1, max); if (max < tmp_max) { max = tmp_max; }
        tmp_max = dfs(i, j + 1, max); if (max < tmp_max) { max = tmp_max; }
        tmp_max = dfs(i - 1, j, max); if (max < tmp_max) { max = tmp_max; }
        tmp_max = dfs(i + 1, j, max); if (max < tmp_max) { max = tmp_max; }
    }
    return (max);
}