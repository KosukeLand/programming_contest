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

    var ab = [];
    for (var i = 1; i - 1 < N; i++) {
        var t = lines[i].split(" ");    
        ab.push([Number(t[0]), Number(t[1])])
    }

    var cd = [];
    for (var i = N + 1; i - (N + 1) < N; i++) {
        var t = lines[i].split(" ");
        cd.push([Number(t[0]), Number(t[1])])
    }

    ab.sort((a, b) => a[1] - b[1] || a[0] - b[0]);
    cd.sort((a, b) => a[1] - b[1] || a[0] - b[0]);
    
    var used = Array(N).fill(false);
    var ans = 0;
    
    console.log(cd)
    console.log(ab)

    for (var i = 0; i < N; i++) {
        var x1 = cd[i][0]; var y1 = cd[i][1];
        var d_min = Infinity

        for (var j = 0; j < N; j++) {
            var x2 = ab[j][0]; var y2 = ab[j][1];
            if (x2 < x1 && y2 < y1 && used[j] === false) {
                var d = y1 - y2;
                if (d < d_min) { d_min = d; var k = j; }
            }
        }
        if (d_min !== Infinity) { used[k] = true; ans++; }
    }
    console.log(ans);
});