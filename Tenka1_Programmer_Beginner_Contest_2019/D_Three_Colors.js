var lines = []; var N;
var result = 0;
var a;
var readline = require('readline');
var MOD = 998244353;

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function (x) {
    lines.push(x);
});

rl.on('close', function () {
    N = Number(lines[0]);
    lines.shift();
    a = Array(N);
    for (var i = 0; i < N; i++) {
        a[i] = Number(lines[i]);
    }



});

