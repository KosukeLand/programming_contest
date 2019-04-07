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
    var v = [];
    var N = lines.shift();
    N = Number(N);

    for (var i = 0; i < 5; i++) {
        v[i] = Number(lines[i]);
    }

    var a = Array(6).fill(0);
    var result = 0;

    a[0] = N;
    console.log(a);
    
    while (1) {
        if (v[4] < a[4]) { a[4] -= v[4]; a[5] += v[4]; }
        else if (v[4] >= a[4] && a[4] !== 0) { a[5] += a[4]; a[4] = 0; }
        else { }

        if (v[3] < a[3]) { a[3] -= v[3]; a[4] += v[3]; }
        else if (v[3] >= a[3] && a[3] !== 0) { a[4] += a[3]; a[3] = 0; }
        else { }

        if (v[2] < a[2]) { a[2] -= v[2]; a[3] += v[2]; }
        else if (v[2] >= a[2] && a[2] !== 0) { a[3] += a[2]; a[2] = 0; }
        else { }

        if (v[1] < a[1]) { a[1] -= v[1]; a[2] += v[1]; }
        else if (v[1] >= a[1] && a[1] !== 0) { a[2] += a[1]; a[1] = 0; }
        else { }

        if (v[0] < a[0]) { a[0] -= v[0]; a[1] += v[0]; }
        else if (v[0] >= a[0] && a[0] !== 0) { a[1] += a[0]; a[0] = 0; }
        else { }

        result++;
        if (a[5] === N) { break; }
    }
    console.log(result);
});