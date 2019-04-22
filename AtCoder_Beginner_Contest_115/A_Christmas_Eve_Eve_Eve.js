var lines = []; var result = Infinity;
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function (x) {
    lines.push(x);
})

rl.on('close', function () {
    var D = Number(lines[0]);

    if (D === 25) { console.log('Christmas') }
    else if (D === 24) { console.log('Christmas Eve') }
    else if (D === 23) { console.log('Christmas Eve Eve') }
    else { console.log('Christmas Eve Eve Eve') }
});