var lines = [];

var readline = require('readline')
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


rl.on('line', (x) => {
    lines.push(x)
});

rl.on('close', () => {
    var N = Number(lines[0].split(" ")[0]);
    var M = Number(lines[0].split(" ")[1]);
    var K = Number(lines[0].split(" ")[2]);
    var ans = 0;

    for (var i = 1; i <= N; i++) {
        for (var j = 1; j <= M; j++) {
            ans += Math.abs(1 - j) + Math.abs(1 - i)
            console.log(ans);
        }
    }
    console.log(ans * 2)
});