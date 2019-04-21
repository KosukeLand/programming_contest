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
    var M = Number(lines[0].split(" ")[1]);
    var len = 1; var cnt = 1;

    var len = Math.ceil(Math.sqrt(M));
    //console.log(len)
    for (var i = 2; i <= len; i++) {
        if (M % i === 0) { M = M / i; cnt++; i--; }
    }

    // 12 = 1,2,2,3
    //console.log(c(cnt - 1, N - 1), factorial(N));
    console.log(c(cnt - 1, N - 1) * factorial(N));
    
});

function c(n, k) {
    return (p(n, k) / p(k, k));
}
function p(n, k) {
    var result = 1;

    for (var i = n; k < i; i--) { result *= n; }
    return (result);
}

function factorial(n) {
    var result = 1;
    for (var i = n; 0 < i; i--) {
        result *= i;
    }
    return (result);
}
