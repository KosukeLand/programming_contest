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
    var F = Array(N).fill(0);

    for (var i = 0; i < N; i++) {
        F[i] = Array(5).fill(0);
        var t = lines[i].split(" ")
        var len = 0;

        for (var j = 0; j < 5; j++) {
            F[i][j] = Array(2).fill(0);

            for (var k = 0; k < 2; k++) {
                F[i][j][k] = Number(t[len]); len++;
            }
        }
    }

    var P = Array(N).fill(0)
    for (var i = 0; i < N; i++) {
        P[i] = Array(10).fill(0);
        var t = lines[N + i].split(" ")

        for (var j = 0; j <= 10; j++) {
            P[i][j] = Number(t[j]);
        }
    }

    var profit = Array(N).fill(0);

    // 店iと同時に営業した際に利益がマイナスになることを避ける
    for (var i = 0; i < N; i++) {
        var len = 0;

        for (var j = 0; j < 5; j++) {
            for (var k = 0; k < 2; k++) {
                console.log(F[i][j][k], P[i][len])
                profit[i] += F[i][j][k] * P[i][len]; len++;
            }
        }
    }

    console.log(F)
    console.log(P)
    console.log(profit)

});