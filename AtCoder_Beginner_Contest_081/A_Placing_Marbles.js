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
    var s = lines[0].split("");

    for (var i = 0; i < s.length; i++) {
        if(s[i] === '1'){result++;}
     }

     console.log(result);
});