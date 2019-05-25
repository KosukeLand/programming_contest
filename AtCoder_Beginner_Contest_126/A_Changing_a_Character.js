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
    var N = Number(lines[0].split(" ")[0])
    var K = Number(lines[0].split(" ")[1])
    var S = lines[1].split("")

    switch (S[K - 1]) {
        case "A": S[K - 1] = "a"; break
        case "B": S[K - 1] = "b"; break
        case "C": S[K - 1] = "c"; break
    }
    console.log(S.join(""))

});