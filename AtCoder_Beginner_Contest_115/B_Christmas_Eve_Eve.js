var lines = []; var result = Infinity;
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function (x) {
    lines.push(x);
})

rl.on('close', function () {
    var N = Number(lines[0]);
    lines.shift();

    var p = lines.map(value => Number(value));

    p.sort((a, b) => b - a);

    result = Math.floor(p[0] / 2);

    for (var i = 1; i < N; i++){
        result += p[i];
    }
    console.log(result);
});
