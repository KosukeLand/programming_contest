var lines = []; var result = 0;

var readline = require("readline");

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (x) {
    lines.push(x);
});

rl.on('close', function () {
    var N = Number(lines[0]);
    var N_array = N.toString().split("");

    var len = N_array.length; var f = 0;

    for (var i = 0; i < len; i++) {
        f += Number(N_array[i]);
    }
    N % f === 0 ? console.log("Yes") : console.log("No");
});