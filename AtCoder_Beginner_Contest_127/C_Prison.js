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
    var N = Number(lines[0].split(" ")[0])
    var M = Number(lines[0].split(" ")[1])
    lines.shift()

    var LR = lines.map(i => i.split(" ").map(i => Number(i)));
    var start = 1; var goal = Infinity;

    for (var i = 0; i < M; i++) {
        var l = LR[i][0]; var r = LR[i][1];

        start = Math.max(start, l);
        goal = Math.min(goal, r);
    }

    console.log(Math.max(goal - start + 1, 0))
});