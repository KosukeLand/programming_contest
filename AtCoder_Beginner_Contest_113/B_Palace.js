var lines = [];
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function (x) {
    lines.push(x);
})

rl.on('close', function () {
    var n = Number(lines.shift());
    var tmp = lines.shift().split(" ");

    var t = Number(tmp[0]);
    var a = Number(tmp[1]);
    var result = {
        i: 0,
        temp: Infinity,
    };

    tmp = lines.shift().split(" ");
    for (var i = 0; i < n; i++) {

        if (Math.abs(a - (t - Number(tmp[i]) * 0.006)) < result.temp) {
            result.i = i;
            result.temp = Math.abs(a - (t - Number(tmp[i]) * 0.006));
        }
    }

    console.log(result.i + 1);

});