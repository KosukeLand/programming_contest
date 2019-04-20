var lines = []; var f;
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function (x) {
    lines.push(x);
});

rl.on('close', function () {

    /* --TLE-- */

    var N = Number(lines[0].split(" ")[0]);
    var X = Number(lines[0].split(" ")[1]);

    var result = 0;

    var S = dfs(Math.floor(N)).split("");

    for (var i = S.length - X; i < S.length; i++) {
        if (S[i] === '1') { result++; }
    }

    console.log(result);
});

function dfs(n) {
    if (n === 0) { var barger = '1'; }
    else {
        var b = dfs(n - 1);
        var barger = '0' + b + '1' + b + '0';
    }
    return (barger);
}