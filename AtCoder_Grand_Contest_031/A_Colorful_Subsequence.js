var lines = [];
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function (x) {
    lines.push(x);
});

rl.on('close', function () {
    var MOD = Math.pow(10,9)+7;

    var N = lines[0];
    var S = lines[1].split("");
    var result = 1;
    var alphabet = {};

    for (var i = 0; i < N; i++) {
        if ((alphabet[S[i]]) === undefined) {
            alphabet[S[i]] = 0;
        }
        alphabet[S[i]]++;
    }

    for (var i = 0; i < Object.keys(alphabet).length; i++) {
        result = result * (alphabet[S[i]] + 1);
        result = result % MOD;
    }
    console.log((result - 1) % MOD);
});