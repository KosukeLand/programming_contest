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
    var X = Number(lines[0]);
    var ans = 1;

    for (var i = 2; i < 10; i++) {
        for (var j = 1; j < X; j++) {
            var exp = Math.pow(j, i);
            if (exp <= X) { ans =Math.max(ans, exp) }
        }
    }

    console.log(ans);
});