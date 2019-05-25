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
    var R = Number(lines[0].split(" ")[0]);
    var G = Number(lines[0].split(" ")[1]);
    var B = Number(lines[0].split(" ")[2]);
    var N = Number(lines[0].split(" ")[3]);

    var ans = 0;
    for (var r = 0; r <= 3000; r++) {
        for (var g = 0; g <= 3000; g++) {
            var b = N - r * R - g * G;

            if (b < 0 || b % B !== 0) { continue; }
            ans++;
        }
    }

    console.log(ans);

});