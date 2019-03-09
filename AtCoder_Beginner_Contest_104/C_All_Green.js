var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

var lines = [];
var d, g, c, p;
var result = Infinity;

rl.on('line', function (x) {
    lines.push(x);
});

rl.on('close', function () {
    var tmp = lines.shift().split(" ");
    d = Number(tmp[0]);
    g = Number(tmp[1]);

    p = Array(d + 1); p.fill(0);
    c = Array(d + 1); c.fill(0);

    for (var i = 0; i < d; i++) {
        tmp = lines[i].split(" ");

        p[i + 1] = {
            point: (i + 1) * 100,
            n: Number(tmp[0]),
        };
        c[i + 1] = Number(tmp[1]);
    }

    dfs(0, []);
    console.log(result);
});

function dfs(n, comb) {
    if (n === d) { calc(comb); return (0); }
    for (var i = 0; i < 2; i++) {
        comb[n] = i;
        dfs(n + 1, comb);
    }
}
function calc(comb) {
    var counter = 0; var sum = 0;
    var bonus = 0; var point = 0;

    for (var i = d; i > 0; i--) {
        if (comb[i - 1] === 1) {
            bonus = c[i];
            point = p[i].point * p[i].n;

            sum = sum + point + bonus;
            counter = counter + p[i].n;
        }
    }

    for (var i = d; i > 0; i--) {
        if (g - sum <= 0) { continue; }
        if (comb[i - 1] === 1) { var div = 0; }
        else { var div = Math.floor((g - sum) / (i * 100)) < p[i].n - 1 ? Math.floor((g - sum) / (i * 100)) : p[i].n - 1; }

        counter = counter + div;
        sum = sum + div * i * 100;
    }

    if (g <= sum && counter < result) { result = counter; }
}