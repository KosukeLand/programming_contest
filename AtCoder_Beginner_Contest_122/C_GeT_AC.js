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

    var tmp = lines.shift().split(" ");
    var N = Number(tmp[0]); var Q = Number(tmp[1]);

    var S = lines.shift();
    var X = ["A", "C"];

    var l = Array(Q); var r = Array(Q);
    for (var i = 0; i < Q; i++) {
        tmp = lines[i].split(" ");
        l[i] = Number(tmp[0]);
        r[i] = Number(tmp[1]);
    }

    var result = 0;

    for (var a = 0; a < Q; a++) {
        var Moji = S.slice(l[a] - 1, r[a]);

        var right = 0; var left = 0;
        var i = 0;

        while (right !== Moji.length - 1) {
            if (Moji[i] === "A") { right++; }
            else if (Moji[i] === "C" && right !== left) { result++; left = right; }
            else { right = left; right++; left++; }
            i++;
        }
    
    console.log(result);
    result = 0;
    }
});