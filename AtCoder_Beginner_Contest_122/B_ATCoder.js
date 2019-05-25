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
    var S = lines[0].split("");
    var ans = 0; result = 0;

    for (var string of S) {
        if (string === "A" || string === "C" || string === "G" || string === "T") {
            result++;
            ans = Math.max(ans, result);
        }
        else { result = 0; }
    }
    console.log(ans);
});