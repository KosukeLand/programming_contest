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
    var S = lines[0];

    var S_split = S.split("");
    var v = Array(S_split.length);

    for (var i = 0; i < S_split.length; i++) {
        v[i] = Number(S_split[i]);
    }


    var result_A = 0; var result_B = 0;

    // 010101... or 10101....
    for (var i = 0; i < S_split.length; i++) {
        if (i % 2 === 0 && v[i] === 1) { result_A++; }
        if (i % 2 === 1 && v[i] === 0) { result_A++; }
    }

    for (var i = 0; i < S_split.length; i++) {
        if (i % 2 === 0 && v[i] === 0) { result_B++; }
        if (i % 2 === 1 && v[i] === 1) { result_B++; }
    }

    console.log(Math.min(result_A, result_B));

});