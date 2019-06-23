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
    var N = Number(lines[0]); lines.shift();
    var ab = Array(N - 1).map(i => i = Array(2));
    var c = Array(N);

    for (var i = 0; i < N - 1; i++) {
        ab[i] = lines[i].split(" ")
    }
    var c = lines[N - 1].split(" ").map(i => Number(i))

    for (var i = 0; i < N; i++){
        
        for (var j = 0; j < N; j++){

        }
    }



});