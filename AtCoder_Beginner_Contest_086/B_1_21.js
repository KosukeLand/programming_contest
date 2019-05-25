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
    var A = lines[0].split(" ")[0];
    var B = lines[0].split(" ")[1];

    var ans = Number(A + B);
    if (Math.sqrt(ans) !== Math.floor(Math.sqrt(ans))) { console.log("No") }
    else { console.log("Yes") }
    
});