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
    var X = Number(lines[0].split(" ")[0]);
    var Y = Number(lines[0].split(" ")[1]);
    var Z = Number(lines[0].split(" ")[2]);
    var K = Number(lines[0].split(" ")[3]);

    var A = lines[1].split(" ").map(value => Number(value));
    var B = lines[2].split(" ").map(value => Number(value));
    var C = lines[3].split(" ").map(value => Number(value));

    A.sort((a, b) => b - a);
    B.sort((a, b) => b - a);
    C.sort((a, b) => b - a);

    var cake_AB = [];

    for (var i = 0; i < X; i++) {
        for (var j = 0; j < Y; j++) {
            cake_AB.push(A[i] + B[j]);
        }
    }

    cake_AB.sort((a, b) => b - a);

    var cake_ABC = []

    for (var i = 0; i < Math.min(K, cake_AB.length); i++) {
        for (var j = 0; j < Z; j++) {
            if (Math.min(K, cake_AB.length) < i * j) { continue; }
            cake_ABC.push(cake_AB[i] + C[j])
        }
    }

    cake_ABC.sort((a, b) => b - a);

    for (var i = 0; i < K; i++) {
        console.log(cake_ABC[i]);
    }

});