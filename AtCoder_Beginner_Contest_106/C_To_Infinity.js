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
    var S = lines[0];
    var K = Number(lines[1]);

    S = S.split("");

    for (var i = 0; i < K; i++) {
        if (S[i] !== '1') { console.log(S[i]); return(0); }
    }
    console.log('1');
});