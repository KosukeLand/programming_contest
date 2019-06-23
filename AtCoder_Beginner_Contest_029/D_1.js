var lines = [];
var memo; var N

var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function (x) {
    lines.push(x);
});

rl.on('close', function () {
    N = lines[0].split("").map(i => Number(i));
    memo = Array(100).fill(0).map(i => i = Array(2).fill(0).map(i => i = Array(100).fill(0)))
    console.log(dfs(0, 1, 0));
});

function dfs(k, tight, sum) {
    if (memo[k][tight][sum]) { return (memo[k][tight][sum]) }
    if (k === N.length) { return (sum); }
    else {
        var r = (tight ? N[k] : 9);
        var res = 0;
        for (var i = 0; i <= r; i++) {
            if (i === 1) { res += dfs(k + 1, (tight && i === r ? 1 : 0), sum + 1) }
            else { res += dfs(k + 1, (tight && i === r ? 1 : 0), sum) }
        }
    }
    memo[k][tight][sum] = res
    return (memo[k][tight][sum]);
}
