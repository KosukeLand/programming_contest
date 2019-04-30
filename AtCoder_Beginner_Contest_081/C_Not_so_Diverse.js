var lines = [];
var result = 0;
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
    var K = Number(lines[0].split(" ")[1]);

    var A = lines[1].split(" ").map(value => Number(value));

    A.sort((a, b) => a - b);

    var counter = []
    var j = 0; counter[j] = [A[0], 1];

    for (var i = 1; i < N; i++) {
        if (A[i] !== A[i - 1]) { j++; counter[j] = [A[i], 1]; }
        else { var cnt = counter[j][1] + 1; counter[j] = [A[i], cnt] }
    }

    counter.sort((a, b) => a[1] - b[1]);

    var i = 0;
    while (K < counter.length) {
        result += counter[i][1];
        counter.shift();
    }
    
    console.log(result);
});