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
    var S = lines[0]
    var T = "";

    var index = S.length - 1

    while (0 <= index) {
        if (S[index] === "m") { T = "dream" + T; index = index - 5; }
        else if (S[index] === "e") { T = "erase" + T; index = index - 5; }
        else if (S[index] === "r" && S[index - 5] === "e") { T = "eraser" + T; index = index - 6; }
        else if (S[index] === "r" && S[index - 6] === "d") { T = "dreamer" + T; index = index - 7; }
        else { console.log("NO"); return (0); }

    }
    if (S === T) { console.log("YES") }
    else { console.log("NO") }
});