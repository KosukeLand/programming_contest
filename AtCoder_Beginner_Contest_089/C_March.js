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
    lines.shift();

    var S = lines.map(i => i.split(""));
    var count = {};
    var ans = 0;

    for (var i = 0; i < N; i++) {
        if (S[i][0] === "M" || S[i][0] === "A" || S[i][0] === "R" || S[i][0] === "C" || S[i][0] === "H") {
            if (count[S[i][0]] === undefined) { count[S[i][0]] = 1; }
            else { count[S[i][0]]++; }
        }
    }

    var m = (count["M"] === undefined ? 0 : count["M"]);
    var a = (count["A"] === undefined ? 0 : count["A"]);
    var r = (count["R"] === undefined ? 0 : count["R"]);
    var c = (count["C"] === undefined ? 0 : count["C"]);
    var h = (count["H"] === undefined ? 0 : count["H"]);
    

    ans += m * a * r; ans += m * a * c; ans += m * a * h;
    ans += m * r * c; ans += m * r * h;
    ans += m * c * h;
    ans += a * r * c; ans += a * r * h;
    ans += a * c * h;
    ans += r * c * h;

    console.log(ans);
});
