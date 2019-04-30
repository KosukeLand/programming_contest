var lines = [];
var result = 0;
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function (x) {
    lines.push(x);
});

rl.on('close', function () {
    var S = lines[0].split("");
    var len = S.length;

    // 0000 0000 , 000 0 000
    center = Math.floor(len / 2) - 1;
    result = center;
    var left = center; var right = center + (len % 2 === 0 ? 1 : 2);
    
    while (1) {
        left++; right--;
        if (S[left] !== S[center] || S[right] !== S[center]) { break; }
        else { result++; }
    }

    console.log(result + 1);
});