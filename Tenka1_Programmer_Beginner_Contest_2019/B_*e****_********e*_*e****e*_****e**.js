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
    var N = Number(lines[0]);
    var S = lines[1].split("");
    var K = Number(lines[2]);

    var a = S[K - 1];
    S = S.map(value => {
        if (value !== a) { value = "*"; }
        return (value);
    });
    console.log(S.join(""));
});