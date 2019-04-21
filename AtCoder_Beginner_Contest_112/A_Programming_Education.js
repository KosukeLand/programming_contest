var lines = []; var result = Infinity;
var readline = require('readline');


var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function (x) {
    lines.push(x);
});

rl.on('close', function () {
    if (Number(lines[0]) === 1) { console.log("Hello World"); }
    else{
        console.log(Number(lines[1]) + Number(lines[2]));
    }
});