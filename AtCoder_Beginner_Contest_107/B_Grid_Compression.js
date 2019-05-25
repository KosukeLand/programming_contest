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
    var H = Number(lines[0].split(" ")[0]);
    var W = Number(lines[0].split(" ")[1]);

    lines.shift();

    var a = lines.map(i => i.split(""));

    for (var i = 0; i < H; i++) {
        for (var j = 0; j < W; j++) {
            if (a[i][j] === "#") { break; }
            if (j === W - 1) { a.splice(i, 1); i--; H--; }
        }
    }

    for (var j = 0; j < W; j++) {
        for (var i = 0; i < H; i++) {
            if (a[i][j] === "#") { break; }
            if (i === H - 1) { for (var k = 0; k < H; k++) { a[k].splice(j, 1) }; j--; W--; }
        }
    }
    for (var i = 0; i < H; i++) {
        console.log(a[i].join(""));
    }
});

