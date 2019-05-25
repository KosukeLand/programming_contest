var lines = []; var result = 0;
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function (x) {
    lines.push(x);
})

rl.on('close', function () {

    var N = Number(lines[0].split(" ")[0])
    var K = Number(lines[0].split(" ")[1])

    if (N % K === 0) { console.log(0) }
    else { console.log(1) }
});