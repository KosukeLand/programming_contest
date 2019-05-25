var lines = [];
var MOD = Math.pow(10, 9) + 7;


var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function (x) {
    lines.push(x);
})

rl.on('close', function () {
    var N = Number(lines[0].split(" ")[0]);
    var X = Number(lines[0].split(" ")[1]);

    var S = lines[1].split(" ").map(i => Number(i));

    

});