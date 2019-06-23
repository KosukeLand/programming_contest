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
    var A = Number(lines[0].split(" ")[0])
    var B = Number(lines[0].split(" ")[1])

    if (13 <= A) { console.log(B) }
    else if (6 <= A && A <= 12) { console.log(B / 2) }
    else { console.log(0) }
});