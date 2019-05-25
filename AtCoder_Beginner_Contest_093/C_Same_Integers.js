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
    var ABC = lines[0].split(" ");
    var A = Number(lines[0].split(" ")[0]);
    var B = Number(lines[0].split(" ")[1]);
    var C = Number(lines[0].split(" ")[2]);

    var even = 0, odd = 0; ans = 0;
    for (var value of ABC) { Number(value) % 2 === 0 ? even++ : odd++; }

    switch (even) {
        case 1: // even = 1; odd = 2; =>全て偶数に合わせる
            if (A % 2 !== 0) { A += 1 }
            if (B % 2 !== 0) { B += 1 }
            if (C % 2 !== 0) { C += 1 }
            ans++; break;

        case 2: // even = 2; odd = 1; =>全て奇数に合わせる
            if (A % 2 === 0) { A += 1 }
            if (B % 2 === 0) { B += 1 }
            if (C % 2 === 0) { C += 1 }
            ans++; break;
    }

    ans += (Math.max(A, B, C) - A) / 2
    ans += (Math.max(A, B, C) - B) / 2
    ans += (Math.max(A, B, C) - C) / 2

    console.log(ans);
});