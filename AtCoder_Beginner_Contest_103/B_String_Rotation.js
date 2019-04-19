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
    const S = lines[0].split("");
    const T = lines[1].split("");

    for (var i = 0; i < S.length; i++) {
        if (S.toString() === T.toString()) { console.log("Yes"); return (0); }
        var tmp = S.pop();
        S.unshift(tmp);
        console.log(S.toString());
    }

    console.log("No");
});