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
    var result = 0;

    var N = lines.shift();
    var spans = lines[0].split(" ").map(value => Number(value));

    var i = 1; var cnt = [];
    for (var span of spans) {

        cnt[i - 1] = span - i;
        i++;
    }
    cnt.sort((a, b) => a - b);

    for (var array of cnt) {
        result += Math.abs(array - cnt[Math.floor(Number(N) / 2)]);
    }

    console.log(result);
});