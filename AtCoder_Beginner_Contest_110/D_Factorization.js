var lines = []; var MOD = Math.pow(10, 9) + 7;
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function (x) {
    lines.push(x);
});

rl.on('close', function () {
    var N = Number(lines[0].split(" ")[0])
    var M = Number(lines[0].split(" ")[1])

    var i = 2; var cnt = {};
    var m = M;

    while (1 < m) {
        if (m % i === 0) {
            m /= i;
            if (cnt[i] === undefined) { cnt[i] = 1 }
            else { cnt[i]++ }
        }
        else { i++; }
    }

    console.log(cnt)
});
