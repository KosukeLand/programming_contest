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
    var N = lines[0].split(" ")[0];
    var T = lines[0].split(" ")[1];
    var sum = 0;

    for (var i = 0; i < N - 1; i++) {
        sum += Number(lines[1].split(" ")[i]);
    }

    console.log(Math.ceil(sum / T));

});