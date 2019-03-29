var lines = [];
var a;

var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", function (x) {
    lines.push(x);
});

rl.on("close", function () {
    var tmp = lines[0].split(" ");
    var A = Number(tmp[0]);
    var B = Number(tmp[1]);
    var C = Number(tmp[2]);

    if (B >= C + 1) {
        var Yummy = B + C;
        console.log(Yummy);
    }
    else {
        var Yummy = B * 2 + 1;
        C -= B + 1
        Yummy += Math.min(A, C);
        console.log(Yummy);
    }
});
