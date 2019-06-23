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
    var N = Number(lines[0].split(" ")[0])
    var M = Number(lines[0].split(" ")[1])
    var A = lines[1].split(" ").map(i => Number(i));

    lines.shift(); lines.shift();

    var BC = lines.map(i => i.split(" ").map(i => Number(i)));

    A.sort((a, b) => a - b);
    BC.sort((a, b) => b[1] - a[1]);

    var ans = 0;
    var j = 0; var flag = false;

    for (var i = 0; i < M; i++) {
        var b = BC[i][0]; var c = BC[i][1];

        var k = j + b
        for (; j < Math.min(k, N); j++) {
            if (A[j] < c) { ans += c; }
            else { ans += A[j]; j++; break; }
        }
    }
    console.log(ans);
});



