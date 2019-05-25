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
    var A = Number(lines[0].split(" ")[0])
    var B = Number(lines[0].split(" ")[1])
    var C = Number(lines[0].split(" ")[2])

    // A -> B -> C
    var a = Math.abs(A - B) + Math.abs(B - C)
    // A -> C -> B
    var b = Math.abs(A - C) + Math.abs(B - C)
    // B -> A -> C
    var c = Math.abs(A - B) + Math.abs(A - C)
    // B -> C -> A
    var d = Math.abs(C - B) + Math.abs(A - C)
    // C -> A -> B
    var e = Math.abs(C - A) + Math.abs(A - B)
    // C -> B -> A
    var f = Math.abs(C - B) + Math.abs(A - B)

    console.log(Math.min(a, b, c, e, f));

});