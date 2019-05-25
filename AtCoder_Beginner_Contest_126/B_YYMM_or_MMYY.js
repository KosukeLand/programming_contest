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
    var S = lines[0].split("").map(i => Number(i));
    var a = S[0] * 10 + S[1]
    var b = S[2] * 10 + S[3]

    if (a <= 12 && a !== 0) {
        if (b <= 12 && b !== 0) {
            console.log("AMBIGUOUS"); return (0)
        }
        console.log("MMYY"); return (0);
    }

    if (a > 12 || a === 0) {
        if (b <= 12 && b !== 0) {
            console.log("YYMM"); return (0);
        }
        console.log("NA"); return (0);
    }
    console.log("NA")
});
