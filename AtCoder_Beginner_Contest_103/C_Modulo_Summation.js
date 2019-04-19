var lines = [];
var MOD = Math.pow(10, 9) + 7;

var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function (x) {
    lines.push(x);
});

rl.on('close', function () {
    var N = Number(lines[0]);
    lines.shift();

    var a = Array(N); var result = 0;
    var tmp_1 = lines[0].split(" ")
    
    for (var i = 0; i < N; i++) {
        result += Number(tmp_1[i]) - 1;
    }

    console.log(result);
});