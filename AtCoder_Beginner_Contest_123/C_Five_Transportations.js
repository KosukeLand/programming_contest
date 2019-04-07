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
    var v = [];
    var N = lines.shift();
    N = Number(N);

    for (var i = 0; i < 5; i++) {
        v[i] = Number(lines[i]);
    }

    var result = 0;
    var min = Infinity; var j = 0;

    for (var i = 0; i < 5; i++) { if (v[i] < min) { min = v[i]; j = i; } }

    result = Math.ceil(N / v[j]) + 4;
    console.log(result);

});