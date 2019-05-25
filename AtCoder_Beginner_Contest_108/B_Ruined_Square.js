var lines = [];

var readline = require('readline')
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', (x) => {
    lines.push(x);
});

rl.on('close', () => {
    var x1 = Number(lines[0].split(" ")[0]);
    var y1 = Number(lines[0].split(" ")[1]);
    var x2 = Number(lines[0].split(" ")[2]);
    var y2 = Number(lines[0].split(" ")[3]);
    var ans = "";

    var x = x2; var y = y2;
    var dx = x2 - x1; var dy = y2 - y1;

    for (var i = 0; i < 2; i++) {
        var tmp = dx;
        dx = dy; dy = tmp;

        dx = (-1) * dx;
        x += dx;
        y += dy;
        ans += x + " " + y + " ";
    }
    console.log(ans);
});
