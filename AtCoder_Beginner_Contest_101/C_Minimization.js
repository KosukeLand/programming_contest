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
    var N = Number(lines[0].split(" ")[0]);
    var K = Number(lines[0].split(" ")[1]);
    var A = lines[1].split(" ").map(i => Number(i));
    var ans;

    if (K < N) {
        N -= K;
        ans = Math.ceil(N / (K - 1)) + 1
    }
    else {
        ans = 1;
    }
    console.log(ans)
});