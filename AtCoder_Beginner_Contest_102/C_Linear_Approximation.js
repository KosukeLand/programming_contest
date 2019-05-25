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
    var N = Number(lines[0]);
    var A = lines[1].split(" ").map((value, index) => {
        return (Number(value - (index + 1)));
    });

    var a = A.concat(); a.sort((a, b) => a - b)
    var b = a[Math.floor(N / 2)]
    var ans = 0;

    for (var i = 0; i < N; i++) {
        ans += Math.abs(A[i] - b)
    }

    console.log(ans);
});