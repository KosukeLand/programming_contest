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
    var A = Number(lines[0].split(" ")[1]);
    var B = Number(lines[0].split(" ")[2]);

    var ans = 0;

    for (var i = 1; i <= N; i++) {
        var number = i.toString().split("")
        var result = 0;

        for (var j = 0; j < number.length; j++) {
            result += Number(number[j]);
        }

        if (A <= result && result <= B) { ans += i; }
    }

    console.log(ans);
});