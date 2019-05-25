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
    var N = Number(lines[0].split(" ")[0])
    var Z = Number(lines[0].split(" ")[1])
    var W = Number(lines[0].split(" ")[2])

    var a = lines[1].split(" ").map(i => Number(i)); a.unshift(Z), a.push(W);
    var ans = 0;
    var ai_before = 0; var aj_before = 0;

    for (var i = 0; i < N + 1; i++) {
        for (var j = i + 1; j < N + 2; j++) {
            var abs = Math.abs(a[i] - a[j])
            console.log(a[i], a[j], abs, ans)
            if (ans < abs && (ai_before <= a[i] && a[j] <= aj_before)){ ans = abs; ai_before = a[i], aj_before = a[j] }
        }
    }
    console.log(ans)
});