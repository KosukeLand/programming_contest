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
    lines.shift();

    var AB = lines.map(i => i.split(" ").map(i => Number(i)));


    for (var value of AB) {
        var a = value[0]; var b = value[1];
        var ans = a * b;
        console.log(ans)
    }
});