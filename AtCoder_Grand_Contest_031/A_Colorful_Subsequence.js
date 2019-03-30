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
    var MOD = Math.pow(10, 9) + 7;

    var N = lines[0];
    var S = lines[1].split("");

    var alphabet = {};

    var result = 1;

    // baa   = 2C1 * 3C1 - 1 = 5
    // baaa  = 2C1 * 4C1 - 1 = 7
    // bcaaa = 2C1 * 2C1 * 4C1 -1 = 15
    // aabbc = 3C1 * 3C1 * 2C1 -1 = 17


    for (var i = 0; i < N; i++) { alphabet[S[i]] === undefined ? alphabet[S[i]] = 1 : alphabet[S[i]]++ }
    Object.keys(alphabet).forEach(function (key) {
        result *= alphabet[key] + 1;
        result %= MOD;  
    });
    console.log(result - 1);

});