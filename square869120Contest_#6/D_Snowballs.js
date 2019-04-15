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
    var N = Number(lines.shift());
    var X = Array(N); var R = Array(N);

    for (var i = 0; i < N; i++) {
        var tmp = lines[i].split(" ");
        X[i] = Number(tmp[0]);
        R[i] = Number(tmp[1]);
    }

    
});