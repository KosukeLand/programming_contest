var lines = [];
var MOD = Math.pow(10, 9) + 7
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
    var A = Number(lines[0].split(" ")[1]);
    var B = Number(lines[0].split(" ")[2]);
    var C = Number(lines[0].split(" ")[3]);

    var ans = 0;


    // E[n] = 1 + A * E[n - 1] + B * E[n - 1]

    var E = Array(N + 1).fill(0)
    for (var n = 1; n <= N; n++) {
        E[n] += 1 + A / 100 * E[n - 1] + B / 100 + C / 100
        E[n] += 1 + B / 100 * E[n - 1] + A / 100 + C / 100
        E[n] %= MOD;
    }

    console.log(E);

    for (var n = 0; n <= N; n++) {
        ans += E[n];
        ans %= MOD;
    }
    console.log(ans)
});