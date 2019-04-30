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
    var NK = lines.shift().split(" ").map(value => Number(value));
    var td = lines.map(value => value.split(" ").map(value => Number(value)));
    var N = NK[0]; var K = NK[1];

    var yammy = td.concat().sort((a, b) => b[1] - a[1]);
    var yammy_max = 0; var cnt = Array(N).fill(0); var x = 0;
    for (var i = 0; i < K; i++) { yammy_max += yammy[i][1]; cnt[yammy[i][0]]++; }
    for (var i = 0; i < N; i++) { if (0 < cnt[i]) { x++ }; }

    yammy_max += x * x;

    var kind = td.concat().sort((a, b) => a[0] - b[0]);
    var max = 0
    while (i < N - 1 ) {
        if (kind[i][0] !== kind[i + 1][0]) { kind_max += max; max = 0; }
        else { max = Math.max(max, kind[i][0]); }
    }
    if (0 < max) { kind_max += max; }


});