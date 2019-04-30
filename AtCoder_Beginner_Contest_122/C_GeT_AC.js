var lines = []; var result = 0;
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function (x) {
    lines.push(x);
})

rl.on('close', function () {
    var N = Number(lines[0].split(" ")[0]);
    var Q = Number(lines[0].split(" ")[1]);

    var S = lines[1].split("")

    lines.shift();
    lines.shift();

    var lr = lines.map(value => value.split(" ").map(value => Number(value)));

    var sum = Array(N).fill(0);

    // 累積和
    for (var i = 1; i < N; i++) {
        if (S[i - 1] === "A" && S[i] === "C") { sum[i]++; }
        sum[i] += sum[i - 1]
    }
            
    for (var i = 0; i < Q; i++) {
        var l = lr[i][0]; var r = lr[i][1];
        console.log(sum[r - 1] - sum[l - 1]);
    }

});