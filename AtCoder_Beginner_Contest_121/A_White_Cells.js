var lines = [];


var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (x) {
    lines.push(x);
});

rl.on('close', function () {

    var tmp = lines.shift().split(" ");
    var H = Number(tmp[0]);
    var W = Number(tmp[1]);

    var tmp = lines.shift().split(" ");
    var h = Number(tmp[0]);
    var w = Number(tmp[1]);

    var sum = H * W;
    var reduce = H * w + W * h - h * w;
        console.log(sum - reduce);
});
