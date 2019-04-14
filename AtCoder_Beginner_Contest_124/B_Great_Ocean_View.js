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
    var tmp_0 = lines[0];
    var N = Number(tmp_0);
    var H = Array(N);

    var tmp_1 = lines[1].split(" ");
    for (var i = 0; i < N; i++) {
        H[i] = Number(tmp_1[i]);
    }

    var max = 0; var result = 0;

    for (var i = 0; i < N; i++) {
        if (max <= H[i]) { result++; max = H[i]; }
    }

    console.log(result);
});