var lines = [];
var MOD = Math.pow(10, 9) + 7;

var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function (x) {
    lines.push(x);
});

rl.on('close', function () {
    var a = lines[1].split(" ").map(value => Number(value));

    var ans = 0;
    for (var value of a) {
        ans += value - 1
    }
    console.log(ans)
});