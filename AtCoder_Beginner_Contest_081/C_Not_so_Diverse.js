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

    var cnt = {}
    for (var i = 0; i < N; i++) { cnt[A[i]] === undefined ? cnt[A[i]] = 1 : cnt[A[i]]++; }

    var array = [];
    Object.keys(cnt).forEach(value => {
        array.push([value, cnt[value]]);
    });

    array.sort((a, b) => a[1] - b[1])
    var ans = 0;

    while (K < array.length) {
        var t = array.shift();
        ans += t[1];
    }

    console.log(ans)

});