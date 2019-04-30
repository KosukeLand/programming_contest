var lines = []; var result = 0;
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function (x) {
    lines.push(x);
});

rl.on('close', function () {
    var N = Number(lines[0]);
    var A = lines[1].split(" ").map(value => Number(value));

    for (var i = 0; i < 30; i++) {
        for (var j = 0; j < N; j++) {
            if (A[j] % 2 !== 0) { console.log(result); return (0); }
            A[j] /= 2;
        }
        result++;
    }
});