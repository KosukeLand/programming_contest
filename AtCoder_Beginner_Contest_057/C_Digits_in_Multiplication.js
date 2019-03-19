var lines = [];
var readline = require('readline');
var C = [].fill(0);
var result = Infinity;

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function (x) {
    lines.push(x);
})

rl.on('close', function () {
    var N = Number(lines.shift()); var n = N;
    var counter = [].fill(0);

    for (var i = 2; i <= Math.sqrt(N); i++) {
        if (counter[i] === undefined && n % i === 0) { counter[i] = 0; }
        while (n % i === 0) {
            n = n / i;
            counter[i]++;
        }
    }

    if (counter.length === 0) {console.log(N.toString().length);}
    else {
        
        counter.forEach(function (value, index, array) {
            for (var i = 0; i < value; i++) {
                C.push(index);
            }
        });
        if (n !== 1) C.push(n);
        dfs(0, []);
        console.log(result);
    }
});

function dfs(n, comb) {
    if (n === C.length) { calc(comb); return (0); }

    comb[n] = 0;
    dfs(n + 1, comb);

    comb[n] = 1;
    dfs(n + 1, comb);
}

function calc(comb) {
    var a = 1; var b = 1;

    for (var i = 0; i < comb.length; i++) {
        if (comb[i] === 0) { a *= C[i]; }
        else { b *= C[i]; }
    }
    if (result > b.toString().length && a.toString().length <= b.toString().length) { result = b.toString().length; }
}
