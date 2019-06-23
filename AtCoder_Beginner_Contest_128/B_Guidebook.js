var lines = [];

var readline = require('readline')
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


rl.on('line', (x) => {
    lines.push(x)
});

rl.on('close', () => {
    var N = Number(lines[0]); lines.shift();
    var s = [];

    for (var i = 0; i < N; i++) {
        var m = lines[i].split(" ");
        s.push([m[0], Number(m[1]), i]);
    }


    s.sort((a, b) => {
        if (a[0] < b[0]) { return (-1); }
        else if (a[0] > b[0]) { return (1); }
        else { return (b[1] - a[1]); }
    });

    for (var i = 0; i < N; i++) { console.log(s[i][2] + 1) }

});