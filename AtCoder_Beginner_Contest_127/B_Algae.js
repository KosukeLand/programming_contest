var lines = [];

var readline = require('readline')
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


rl.on('line', (x) => {
    lines.push(x)
});

rl.on('close', () => {
    var r = Number(lines[0].split(" ")[0])
    var D = Number(lines[0].split(" ")[1])
    var x = Number(lines[0].split(" ")[2])

    for (var i = 1; i <= 10; i++) {
        var x = r * x - D
        console.log(x);
    }
});