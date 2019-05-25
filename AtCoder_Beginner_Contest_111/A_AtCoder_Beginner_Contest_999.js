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
    var n = lines[0].split("");
    var ans = ""

    for (var i = 0; i < 3; i++) {
        switch (n[i]) {
            case "1": ans += "9"; break;
            case "9": ans += "1"; break;
        }
    }

    console.log(Number(ans));
});