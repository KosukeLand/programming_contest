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
    var v = [];
    for (var i = 0; i < 5; i++) {
        v[i] = Number(lines[i]);
    }
    var k = Number(lines[5]);

    for (var i = 0; i < 4; i++) {
        for (var j = i + 1; j < 5; j++) {
            if (k < Math.abs(v[i] - v[j])) { console.log(":("); return (0); }
        }
    }
    console.log("Yay!");

});