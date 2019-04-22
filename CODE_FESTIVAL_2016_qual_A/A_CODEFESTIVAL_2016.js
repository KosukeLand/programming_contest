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
    var line = lines[0].split("");
    line = line.map((value, index) => {
        if (index === 4) { value = " " + value; return (value); }
        else { return (value); }
    });
    console.log(line.join(''));
});