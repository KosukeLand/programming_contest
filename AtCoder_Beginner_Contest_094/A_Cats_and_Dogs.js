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
    var A = Number(lines[0].split(" ")[0])
    var B = Number(lines[0].split(" ")[1])
    var X = Number(lines[0].split(" ")[2])

    if (A + B < X) { console.log("NO") ;return(0)}
    if (X < A) { console.log("NO");return(0) }
    console.log("YES")
});