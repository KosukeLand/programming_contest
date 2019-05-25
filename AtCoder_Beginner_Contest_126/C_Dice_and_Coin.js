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
    var N = Number(lines[0].split(" ")[0])
    var K = Number(lines[0].split(" ")[1])

    var x = 1 / N; var ans = 0;
    for (var i = 1; i <= N; i++) {

        var j = 0;
        while (i * Math.pow(2, j) < K) {
            j++;
        }

        var y = Math.pow(1 / 2, j);
        ans += x * y;
    }

    console.log(ans);
});