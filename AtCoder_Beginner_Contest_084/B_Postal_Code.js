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
    var A = Number(lines[0].split(" ")[0]);
    var B = Number(lines[0].split(" ")[1]);

    var S = lines[1];
    var i = 0;
    while (i < S.length) {
        if (i < A && S[i] === "-") { console.log("No"); return (0); }
        if (i === A && S[i] !== "-") { console.log("No"); return (0); }
        if (A < i && S[i] === "-") { console.log("No"); return (0); }
        i++
    }
console.log("Yes");
});