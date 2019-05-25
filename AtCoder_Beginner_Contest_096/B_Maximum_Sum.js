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
    var ABC = lines[0].split(" ").map(i => Number(i));
    var K = Number(lines[1]);

    ABC.sort((a, b) => b - a);

    var ans = ABC[0];
   
    for (var i = 0; i < K; i++) { ans = ans * 2 }
    console.log(ans + ABC[1] + ABC[2]);
});