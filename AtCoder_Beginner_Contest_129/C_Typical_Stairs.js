var lines = [];
var MOD = 1000000007

var memo
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
    var M = Number(lines[0].split(" ")[1]);
    lines.shift();

    memo = Array(N + 1).fill(-1); 
    for (var i = 0; i <= N; i++) { memo[Number(lines[i])] = 0 }
    memo[0] = 1;

    console.log(dfs(N));
});

function dfs(n) {
    if (n < 0) { return (0) }
    if (memo[n] !== -1) { return (memo[n]) }
    memo[n] = (dfs(n - 1) + dfs(n - 2)) % MOD
    return (memo[n])
}
