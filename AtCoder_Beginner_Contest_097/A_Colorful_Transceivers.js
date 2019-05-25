var lines = []; var result = 0;
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function (x) {
    lines.push(x);
})

rl.on('close', function () {
    var a = Number(lines[0].split(" ")[0]);
    var b = Number(lines[0].split(" ")[1]);
    var c = Number(lines[0].split(" ")[2]);
    var d = Number(lines[0].split(" ")[3]);

    if (Math.abs(a - c) <= d) { console.log("Yes") }
    else if (Math.abs(a - b) <= d && Math.abs(b - c) <= d) { console.log("Yes") }

    else { console.log("No") }

});