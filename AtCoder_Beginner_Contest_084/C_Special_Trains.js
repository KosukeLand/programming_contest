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
    var CSF = lines.map(i => i.split(" ").map(i => Number(i)));

    for (var i = 0; i < N - 1; i++) {
        var time = 0;

        for (var j = i; j < N - 1; j++) {
            var C = CSF[j][0], S = CSF[j][1], F = CSF[j][2];

            // 始発が動いていない時間に駅に到着した場合，始発まで待つ
            if (time < S) { time = S; }

            // 始発が動いているなら，次出発する電車に乗る
            else {
                var x = (time - S) % F; time -= x
                if (x !== 0) time += F;
            }

            // 次の駅までC秒かかる
            time += C;
        }
        console.log(time);
    }
    console.log(0);
});