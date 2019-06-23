var lines = []; var result = 0;

var readline = require("readline");

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function (x) {
    lines.push(x);
});

rl.on('close', function () {
    var N = Number(lines[0].split(" ")[0])
    var K = Number(lines[0].split(" ")[1])
    lines.shift();

    var td = Array(N).fill(0).map(i => i = []);

    for (var i = 0; i < N; i++) {
        var x = lines[i].split(" "); var t = Number(x[0]); var d = Number(x[1]);
        if (td[t][1] < d) { td[t].unshift([0, d]) }
        else { td[t].push([0, d]); }
    }

    var i = 0;
    while (i < td.length) { if (td[i].length === 0) { td.splice(i, 1); } else { td[i][0][0] = 1; i++ } }
    console.log(td);

    for (var i = 0; i < N; i++) {
        
    }
    // ans = [];
    // for (var i = 0; i < td.length; i++) {
    //     if (i <= K) {ans.push() }
    //     else { }
    // }

    //console.log(t)
});