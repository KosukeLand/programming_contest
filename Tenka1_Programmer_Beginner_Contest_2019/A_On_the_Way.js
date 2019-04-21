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
    var C = Number(lines[0].split(" ")[2]);

    if (A <= C && C <= B) {
        console.log("Yes");
    }
    else if (B <= C && C <= A) {
        console.log("Yes");
    }
    else {
        console.log("No");
    }
});