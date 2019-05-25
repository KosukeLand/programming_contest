var lines = [];
var B_counter, S, H, W
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function (x) {
    lines.push(x);
});

rl.on('close', function () {
    N = Number(lines[0].split(" ")[0]);
    X = Number(lines[0].split(" ")[1]);
    lines.shift();

    var M = lines.map(i => Number(i));
    M.sort((a, b) => a - b)
    for (var i = 0; i < N; i++) { X -= M[i]; }

    var ans = N;
    
    while (0 <= X) { X -= M[0]; ans++ }
    console.log(ans - 1)
});