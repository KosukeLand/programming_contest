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
    var tmp = lines.shift().split(" ");
    var A = Number(tmp[0]);
    var B = Number(tmp[1]);

    var result =0;
    for (var i = 0; i < 2; i++) {
        if(A < B){result += B; B--;}
        else{result += A; A--;}
    }

    console.log(result);
});