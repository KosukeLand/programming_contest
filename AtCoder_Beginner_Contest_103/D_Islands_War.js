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
    var N = Number(lines[0].split(" ")[0])
    var M = Number(lines[0].split(" ")[1])

    lines.shift();

    var ab = lines.map(value => value.split(" ").map(value => Number(value)));

    // ex
    //       <----->
    //          <----->
    //    <-------------->
    // <-------------------->
    //                   <----->    
    // 1  2  3  4  5  6  7  8  9

    ab.sort((a, b) => a[1] - b[1])
    var broken = 0, ans = 0;

    for (var value of ab) {
        var start = value[0], end = value[1];
        if (broken <= start) { broken = end; ans++; }
    }
    console.log(ans)
});