var lines = [];
var result = 0;

var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function (x) {
    lines.push(x);
});

rl.on('close', function () {
    var A = Number(lines[0].split(" ")[0]);
    var B = Number(lines[0].split(" ")[1]);
    var T = Number(lines[0].split(" ")[2]);

    for (var i = 1; i <= T; i++) {
        if (i % A === 0) { result += B; }
    }

    console.log(result);
});