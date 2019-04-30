var lines = [];

var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.on('line', function (x) {
    lines.push(x);
});

rl.on("close", function () {
    var N = Number(lines[0]);

    
    if (1000 <= N) { console.log("ABD") }
    else { console.log("ABC") }

});