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
    var N = Number(lines[0].split(" ")[0]);
    var A = Number(lines[0].split(" ")[1]) - 1;
    var B = Number(lines[0].split(" ")[2]) - 1;
    var C = Number(lines[0].split(" ")[3]) - 1;
    var D = Number(lines[0].split(" ")[4]) - 1;

    var S = lines[1].split("");

    var flag = false;

    for (var i = 0; i < S.length - 2; i++) {
        if ((S[i] === "#" && S[i + 1] === "#") && A <= i && i + 1 <= Math.max(C, D)) { console.log("No"); return (0) }
        if ((S[i] === "." && S[i + 1] === "." && S[i + 2] === ".") && B <= i + 1 && i + 1 <= D) { flag = true }
    }

    if (D < C && (S[B - 1] === "#" || S[B + 1] === "#" || S[D - 1] === "#" || S[D + 1] === "#") && flag === false) { console.log("No"); }
    else { console.log("Yes"); }
});
