var lines = [];

var readline = require('readline')
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', (x) => {
    lines.push(x);
});

rl.on('close', () => {
    var N = lines[0];
    var ans = 0
    
    if (Number(N) <= 999) { ans = 999 }
    if (Number(N) <= 888) { ans = 888 }
    if (Number(N) <= 777) { ans = 777 }
    if (Number(N) <= 666) { ans = 666 }
    if (Number(N) <= 555) { ans = 555 }
    if (Number(N) <= 444) { ans = 444 }
    if (Number(N) <= 333) { ans = 333 }
    if (Number(N) <= 222) { ans = 222 }
    if (Number(N) <= 111) { ans = 111 }

    console.log(Number(ans));
});