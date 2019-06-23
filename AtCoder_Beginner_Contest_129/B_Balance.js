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
    var N = Number(lines[0]);
    var W = lines[1].split(" ").map(i => Number(i))

    
    var result = Infinity

    for (var i = 0; i < N; i++) {
        var S1 = 0; var S2 = 0;;

        for (var j = 0; j < i; j++) { S1 += W[j] }
        for (var j = i; j < N; j++) { S2 += W[j] }
        
        result = Math.min(Math.abs(S1 - S2),result)
    }
    console.log(result)
}); 