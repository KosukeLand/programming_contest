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

    var D = Number(lines[1].split(" ")[0])
    var X = Number(lines[1].split(" ")[1])
    lines.shift(); lines.shift();

    var A = lines.map(i => Number(i));
    var ans = X;

    for (var i = 0; i < N; i++) {
        var d = 1; var k = 1;
        while (d <= D) {
            ans += 1;
            d = A[i] * k + 1;
            k++;
        }
    }
    console.log(ans)
});