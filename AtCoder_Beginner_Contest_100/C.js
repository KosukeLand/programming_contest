var lines = [];
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', (x) => {
    lines.push(x);
});

rl.on('close', () => {
    var N = Number(lines[0]);
    var A = lines[1].split(" ").map(i => Number(i));
    var ans = 0;

    for (var i = 0; i < N; i++) {
        
        for (var j = 0; j < 1000; j++) {
            if (A[i] % 2 !== 0) { break; }
            A[i] = A[i] / 2; ans++;
        }

    }
    
    console.log(ans);
});