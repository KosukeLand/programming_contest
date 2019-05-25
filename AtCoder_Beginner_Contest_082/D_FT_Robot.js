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
    var S = lines[0].split("")
    var X = Number(lines[1].split(" ")[0]);
    var Y = Number(lines[1].split(" ")[1]);

    var a = S.join("").split("T");
    var x = [], y = [];

    for (var i = 0; i < a.length; i++) {
        i % 2 === 0 ? x.push(a[i].length) : y.push(a[i].length)
    }

    console.log(a)
    console.log(x, y)

    dp_x = Array(x.length + 1); dp[0] = ;
    for (var i = 0; i <= x.length; i++) {
        
    }

});