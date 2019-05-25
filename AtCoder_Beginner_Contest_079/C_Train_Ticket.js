var lines = []; var X = []; var flag = false;
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function (x) {
    lines.push(x);
});

rl.on('close', function () {
    var A = Number(lines[0].split("")[0])
    var B = Number(lines[0].split("")[1])
    var C = Number(lines[0].split("")[2])
    var D = Number(lines[0].split("")[3])

    var op = []; var ans = 0;

    // 0: + , 1: -
    for (var i = 0; i < 2; i++) {
        for (var j = 0; j < 2; j++) {
            for (var k = 0; k < 2; k++) {
                if (i === 0) { ans += A + B; op.push("+") }; if (i === 1) { ans += A - B; op.push("-") }
                if (j === 0) { ans += C; op.push("+") }; if (j === 1) { ans -= C; op.push("-") }
                if (k === 0) { ans += D; op.push("+") }; if (k === 1) { ans -= D; op.push("-") }

                if (ans === 7) {
                    console.log(A + op.shift() + B + op.shift() + C + op.shift() + D + "=7");
                    return (0)
                }
                var op = []
                var ans = 0;
            }
        }
    }
});