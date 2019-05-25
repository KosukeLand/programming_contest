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
    var A = Number(lines[0].split(" ")[0])
    var B = Number(lines[0].split(" ")[1])
    var K = Number(lines[0].split(" ")[2])

    var ans = {};
    for (var i = A; i < Math.min(A + K, B + 1); i++) { ans[i] === undefined ? ans[i] = 1 : ans[i]++; }
    for (var i = B; Math.max(B - K, A - 1) < i; i--) { ans[i] === undefined ? ans[i] = 1 : ans[i]++; }

    Object.keys(ans).forEach(value => {
        console.log(value)
    })
});