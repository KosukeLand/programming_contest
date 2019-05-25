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
    var N = Number(lines[0]); lines.shift();
    var W = lines.map(i => i);

    var w_counter = {}; var before = W[0][0];
    for (var i = 0; i < N; i++) {
        var word = W[i];

        if (word[0] !== before) { console.log("No"); return (0) }
        if (w_counter[word] !== undefined) { console.log("No"); return (0) }
        
        before = word[word.length - 1];
        w_counter[word] = 1;
    }

    console.log("Yes")
});