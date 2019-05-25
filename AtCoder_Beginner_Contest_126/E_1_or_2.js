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
    var M = Number(lines[0].split(" ")[1]);

    lines.shift();

    var XYZ = lines.map(i => i.split(" ").map(i => Number(i)))
    var counter = {};

    for (var i = 0; i < M; i++) {
        var x = XYZ[i][0]; var y = XYZ[i][1]
        if (counter[x] === undefined) { counter[x] = 1 }
        else { counter[x]++ }
    }
    var ans = 1;
    Object.keys(counter).forEach(value => {
        if (counter[value] >= 2) { ans++; }
    })
    console.log(ans);
});