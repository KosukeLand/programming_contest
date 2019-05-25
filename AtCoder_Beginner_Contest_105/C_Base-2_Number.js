var lines = []; var result = 0;
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function (x) {
    lines.push(x);
})

rl.on('close', function () {

    var N = Number(lines[0].split(" ")[0])
    var ans = "";

    if (N === 0) { ans = 0; }
    else {
        while (N != 0) {
            if (N % 2 !== 0) {
                N--; ans = "1" + ans;
            }
            else {
                ans = "0" + ans;
            }
            N /= (-2);
        }
    }
    console.log(ans)
});