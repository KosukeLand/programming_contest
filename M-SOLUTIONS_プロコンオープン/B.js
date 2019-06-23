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
    var S = lines[0].split("");

    var cnt_t = 0; var cnt_f = 0;
    for (var i = 0; i < S.length; i++) { S[i] === "o" ? cnt_t++ : cnt_f++; }

    if (8 - cnt_t > 15 - S.length) { console.log("NO") }
    else { console.log("YES"); }
});