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
    var N = Number(lines[0].split(" ")[0]);
    var A = []; var B = [];

    for (var i = 0; i < N; i++) {
        A[i] = Number(lines[i + 1].split(" ")[0]);
        B[i] = Number(lines[i + 1].split(" ")[1]);
    }

    var a = A.concat().sort(function (a, b) { return (a - b); })
    var b = B.concat().sort(function (a, b) { return (a - b); })

    var enter = a[Math.floor((N - 1) / 2)];
    var exit = b[Math.floor((N - 1) / 2)];

    var result = 0;
    for (var i = 0; i < N; i++) {
        result += Math.abs(enter - A[i]);
        result += Math.abs(A[i] - B[i]);
        result += Math.abs(exit - B[i]);
    }
    console.log(result);

});
