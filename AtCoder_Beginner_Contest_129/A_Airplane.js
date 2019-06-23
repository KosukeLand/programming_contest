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
    var P = Number(lines[0].split(" ")[0]);
    var Q = Number(lines[0].split(" ")[1]);
    var R = Number(lines[0].split(" ")[2]);

    var a = P + Q;
    var b = P + R;
    var c = Q + R;
    var d = Q + P;
    var e = R + P;
    var f = R + Q;

    console.log(Math.min(a, b, c, d, e, f))

}); 