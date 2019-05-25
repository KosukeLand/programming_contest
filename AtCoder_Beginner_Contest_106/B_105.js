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
    var ans = 0;

    for (var i = 1; i <= N; i = i + 2) {
        var count = 0;
        for (var j = 1; j <= i; j++) {
            if (i % j === 0) { count++; }
        }
        if (count === 8) { ans++; }
    }
    console.log(ans);

});