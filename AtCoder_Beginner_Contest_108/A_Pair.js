var lines = [];

var readline = require('readline')
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', (x) => {
    lines.push(x);
});

rl.on('close', () => {
    var N = Number(lines[0]);
    var ans = 0

    if (N % 2 === 0) { ans = N / 2 * N / 2; }
    else { ans = (N - 1) / 2 * ((N - 1) / 2 + 1); }
    
    console.log(ans);
});