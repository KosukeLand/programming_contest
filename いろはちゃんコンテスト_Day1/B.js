var lines = [];
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', (x) => {
    lines.push(x);
});

rl.on('close', () => {
    var S = lines[0].split("");
    var K = Number(lines[1]);

    for (var i = 0; i < K; i++) { 
        var x = S.shift()
        S.push(x);
    }
    console.log(S.join(""));
});