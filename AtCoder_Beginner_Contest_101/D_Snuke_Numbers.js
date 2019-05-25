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
    var K = Number(lines[0]);

    var counter = 9;
    for (var i = 1; i <= Math.min(K, 9); i++) { console.log(i); }

    if (9 < K) {
        var i = 19;
        while (counter < K) {
            console.log(i);
            i += 10; counter++;
        }
    }
});