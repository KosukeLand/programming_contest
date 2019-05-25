var lines = []; var result = 0;
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function (x) {
    lines.push(x);
})

rl.on('close', function () {
    var N = Number(lines[0]);
    var A = lines[1].split(" ").map(value => Number(value));

    var ans = 0;
    for (var i = 0; i < N; i++) {
        for (var j = i; j < N; j++) {
            var result = Math.abs(A[i] - A[j]);
            ans = Math.max(ans, result);
        }
    }
    console.log(ans);
});