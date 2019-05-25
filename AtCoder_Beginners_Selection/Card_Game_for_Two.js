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
    var A = lines[1].split(" ").map(i => Number(i));

    var Alice = 0; var Bob = 0;

    A.sort((a, b) => b - a);

    for (var i = 0; i < N; i++) {
        if (i % 2 === 0) { Alice += A[i] }
        else { Bob += A[i] }
    }

    console.log(Alice - Bob);

});