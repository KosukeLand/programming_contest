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
    var N = Number(lines[0].split(" ")[0]);
    var X = Number(lines[0].split(" ")[1]);

    var x = lines[1].split(" ").map(i => Number(i)); x.push(X);
    x.sort((a, b) => a - b);

    var diff = Array(N);
    for (var i = 0; i < N; i++) { diff[i] = x[i + 1] - x[i]; }

    var ans = diff[0];
    for (var i = 1; i < N; i++) { ans = gcd(ans, diff[i]) }
    
    console.log(ans);

});

function gcd(a, b) {
    var r = a % b;
    if (r === 0) { return (b) }
    else { return (gcd(b, r)); }
}