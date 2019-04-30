var lines = []; var result = 0;

var readline = require("readline");

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (x) {
    lines.push(x);
});

rl.on('close', function () {
    var N = Number(lines[0]); lines.shift();
    var F = Array(N).fill(0).map(value => value = Array(5).fill(0).map(value => Array(2).fill(0)));

    for (var i = 0; i < N; i++) {

        var tmp = lines[i].split(" ").map(value => Number(value));
        for (var j = 0; j < 5; j++) {

            for (var k = 0; k < 2; k++) {
                // 店, 曜日, AM/PM
                F[i][j][k] = tmp[k + 2 * j]
                                                
            }
        }
    }

    var P = Array(N).fill(0).map(value => value = Array(10).fill(0));
    for (var i = N; i < N + N; i++) {
        P[i - N] = lines[i].split(" ").map(value => Number(value));
    }

    for (var i = 0; i < N; i++) {
        for (var j = 0; j < 5; j++) {
            for (var k = 0; k < 2; k++) {
                
            }
        }
    }

});