var lines = [];
var MOD = Math.pow(10, 9) + 7;

var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function (x) {
    lines.push(x);
});

rl.on('close', function () {

    lines.shift()
    var spans = lines.map(value => value.split(' ').map(value => Number(value)));

    spans.sort((a, b) => a[1] - b[1]);

    var broken = 0; var result = 0;

    for (var span of spans) {
        var start = span[0]; var end = span[1];
        if (broken <= start) {
            result++;
            broken = end;
        }
    }
    console.log(result);
});