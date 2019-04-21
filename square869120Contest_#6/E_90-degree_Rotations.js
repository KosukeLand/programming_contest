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

    var S = Array(H).fill(0);
    for (var i = 0; i < H; i++) {
        S[i] = Array(W).fill(0);
        S[i] = lines[i].split("")
    }

    for (var i = 0; i < H; i++) {
        for (var j = 0; j < W; j++) {
            if (S[i][j] === 'x') { continue; }
            else {
                var x_ok = false, y_ok = false;
                for (var x = 0; x < W; x++) {
                    if (S[x][j] === 'o' && x !== i) { x_ok = true; break; }
                }
                for (var y = 0; y < H; y++) {
                    if (S[i][y] === 'o' && y !== j) { y_ok = true; break; }
                }

                if (x_ok === false || y_ok === false) {console.log("Impossible") }

            }
        }
    }
});